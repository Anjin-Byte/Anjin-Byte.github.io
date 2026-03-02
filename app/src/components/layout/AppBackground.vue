<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import type { WorkerOutMsg } from '../../workers/rendererProtocol';

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

  // Compute float grid pitch: canvas_width = nTotal * MAJOR_EVERY * gridPitch exactly,
  // so both left and right margin borders land on major grid lines.
  const targetPx = TARGET_CELL_CSS_PX * devicePixelRatio;
  const nTotal   = Math.max(1, Math.round(canvasW / (targetPx * MAJOR_EVERY)));
  const gridPitch = canvasW / (nTotal * MAJOR_EVERY);

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
  const mainEl = document.querySelector<HTMLElement>('.v-main');
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
      worker?.postMessage({ type: 'scroll', scrollY: rawPx * devicePixelRatio });
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
    const nT = Math.max(1, Math.round(w / (TARGET_CELL_CSS_PX * devicePixelRatio * MAJOR_EVERY)));
    const gp = w / (nT * MAJOR_EVERY);
    document.documentElement.style.setProperty('--grid-margin', `${(0.8 * gp * MAJOR_EVERY / devicePixelRatio).toFixed(1)}px`);
    log.debug('Resize →', w, 'x', h);
    worker?.postMessage({ type: 'resize', width: w, height: h });
  });
  resizeObserver.observe(canvas);
});

onUnmounted(() => {
  cancelAnimationFrame(animFrameId);
  resizeObserver?.disconnect();
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
