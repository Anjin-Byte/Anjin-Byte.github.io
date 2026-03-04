<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import type { WorkerOutMsg, GridInfo } from '../../workers/rendererProtocol';
import { alignedPitch, screenToCell, wrapCell, type CoordSnapshot } from '../../utils/gridCoords';

const log = createLogger('AppBackground');

// Target: 5 mm per cell at 96 CSS PPI (= 19 CSS px).
// gridPitch is computed as a float so canvas_width = n_total * MAJOR_EVERY * gridPitch exactly,
// ensuring both left and right margin borders land on major grid lines.
const MAJOR_EVERY = 5;
const TARGET_CELL_CSS_PX = 19;
const canvasRef = ref<HTMLCanvasElement | null>(null);
let worker: Worker | null = null;
let animFrameId = 0;
let resizeObserver: ResizeObserver | null = null;
let canvasW = 0;
let canvasH = 0;

// Mutable state used to build CoordSnapshots at click time.
let currentGridInfo: GridInfo | null = null;
let currentScrollCanvasPx = 0;
let mainEl: HTMLElement | null = null;

/** Build a CoordSnapshot from the latest cached values. */
function makeSnapshot(): CoordSnapshot | null {
  if (!currentGridInfo || currentGridInfo.gridPitch === 0) return null;
  return {
    gridPitch:       currentGridInfo.gridPitch,
    scrollCanvasPx:  currentScrollCanvasPx,
    dpr:             devicePixelRatio,
    screenCols:      currentGridInfo.screenCols,
    screenRows:      currentGridInfo.screenRows,
  };
}

/** Tags that should NOT trigger cell toggling when clicked. */
const INTERACTIVE_TAGS = new Set(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL']);

/** Handle clicks anywhere on the page — toggle the cell under the cursor.
 *
 *  The canvas sits at z-index: 0 behind all content, so it never receives
 *  click events directly.  Instead we listen on `document` and skip clicks
 *  that land on interactive elements (buttons, links, inputs).
 */
function onDocumentClick(event: MouseEvent): void {
  // Walk up the DOM from the click target to see if it's interactive.
  let el = event.target as HTMLElement | null;
  while (el) {
    if (INTERACTIVE_TAGS.has(el.tagName)) return;
    // Vuetify chips, cards with click handlers, etc. use role="button".
    if (el.getAttribute('role') === 'button') return;
    el = el.parentElement;
  }

  const snap = makeSnapshot();
  if (!snap) return;  // Not ready yet (worker still initialising).

  const cell   = screenToCell(event.clientX, event.clientY, snap);
  const wrapped = wrapCell(cell, snap);

  log.debug('Click →', event.clientX, event.clientY, '→ cell', wrapped.cx, wrapped.cy);
  worker?.postMessage({
    type: 'toggle_cell',
    cx: wrapped.cx,
    cy: wrapped.cy,
    scrollCanvasPx: snap.scrollCanvasPx,
  });
}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  canvasW = Math.round(window.innerWidth  * devicePixelRatio);
  canvasH = Math.round(window.innerHeight * devicePixelRatio);
  canvas.width  = canvasW;
  canvas.height = canvasH;
  log.debug('Canvas initialised', canvasW, 'x', canvasH, 'dpr', devicePixelRatio);

  const offscreen = canvas.transferControlToOffscreen();

  worker = new Worker(
    new URL('../../workers/backgroundRenderer.ts', import.meta.url),
    { type: 'module' },
  );

  worker.onmessage = (e: MessageEvent<WorkerOutMsg>) => {
    switch (e.data.type) {
      case 'ready':
        log.info(`${e.data.backend.toUpperCase()} renderer active`);
        currentGridInfo = e.data.gridInfo;
        break;
      case 'grid_info':
        currentGridInfo = e.data.gridInfo;
        break;
      case 'error':
        // gpu-init failures are expected on browsers without WebGPU; log at debug.
        // Any other phase failing is a true problem.
        if (e.data.phase === 'gpu-init') {
          log.debug(`GPU unavailable (${e.data.message}) — CPU fallback in progress`);
        } else {
          log.error(`Renderer error [${e.data.phase}]:`, e.data.message);
        }
        break;
    }
  };

  worker.onerror = (e: ErrorEvent) => {
    log.error('Worker uncaught exception:', e.message, `at ${e.filename}:${e.lineno}`);
  };

  // Listen on document so clicks pass through foreground content to toggle cells.
  document.addEventListener('click', onDocumentClick);

  // Compute float grid pitch: canvas_width = nTotal * MAJOR_EVERY * gridPitch exactly,
  // so both left and right margin borders land on major grid lines.
  const gridPitch = alignedPitch(canvasW, TARGET_CELL_CSS_PX, devicePixelRatio);

  // Expose canvas margin as CSS var so header/content can align to the grid border.
  // margin = 0.8 * pitch_major (canvas px) → convert to CSS px by dividing by dpr.
  const marginCss = 0.8 * gridPitch * MAJOR_EVERY / devicePixelRatio;
  document.documentElement.style.setProperty('--grid-margin', `${marginCss.toFixed(1)}px`);

  worker.postMessage({ type: 'init', canvas: offscreen, cellPx: gridPitch }, [offscreen]);
  log.debug('Worker spawned, init message sent, gridPitch', gridPitch.toFixed(2));

  // Poll scroll position each animation frame rather than relying on scroll events.
  // This works regardless of whether the scroll container is window, .v-main, or anything else.
  // Vuetify's v-app-bar activates a layout that makes .v-main (not window) the scroll
  // container, but we handle both cases by checking both sources.
  mainEl = document.querySelector<HTMLElement>('.v-main');
  // Start at -1 so the first rAF tick always sends the current scroll position,
  // even if the page loaded at a non-zero scroll (browser scroll restoration, etc.).
  let lastScrollPx = -1;

  const loop = () => {
    worker?.postMessage({ type: 'frame' });

    // Prefer .v-main.scrollTop (Vuetify layout mode); fall back to window.scrollY.
    // Both are checked so this works regardless of which element Vuetify scrolls.
    const rawPx = (mainEl?.scrollTop || window.scrollY);
    if (rawPx !== lastScrollPx) {
      lastScrollPx = rawPx;
      currentScrollCanvasPx = rawPx * devicePixelRatio;
      worker?.postMessage({ type: 'scroll', scrollY: currentScrollCanvasPx });
    }

    animFrameId = requestAnimationFrame(loop);
  };
  animFrameId = requestAnimationFrame(loop);

  resizeObserver = new ResizeObserver(([entry]) => {
    const w = Math.round(entry.contentRect.width  * devicePixelRatio);
    const h = Math.round(entry.contentRect.height * devicePixelRatio);
    if (w === canvasW && h === canvasH) return;
    canvasW = w;
    canvasH = h;
    const gp = alignedPitch(w, TARGET_CELL_CSS_PX, devicePixelRatio);
    document.documentElement.style.setProperty('--grid-margin', `${(0.8 * gp * MAJOR_EVERY / devicePixelRatio).toFixed(1)}px`);
    log.debug('Resize →', w, 'x', h);
    worker?.postMessage({ type: 'resize', width: w, height: h });
  });
  resizeObserver.observe(canvas);
});

onUnmounted(() => {
  cancelAnimationFrame(animFrameId);
  resizeObserver?.disconnect();
  document.removeEventListener('click', onDocumentClick);
  worker?.postMessage({ type: 'stop' });
  worker?.terminate();
  worker = null;
  log.debug('Unmounted, worker terminated');
});
</script>

<template>
  <canvas ref="canvasRef" class="app-bg" />
</template>

<style scoped>
.app-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  opacity: 1;
}
</style>
