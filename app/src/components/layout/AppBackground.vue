<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import type { WorkerOutMsg, GridInfo } from '../../workers/rendererProtocol';
import { alignedPitch, screenToCell, wrapCell, type CellCoord, type CoordSnapshot } from '../../utils/gridCoords';
import { useBlankZones } from '../../composables/useBlankZones';
import type { BlankZone, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';
import { useDecals } from '../../composables/useDecals';
import type { Decal } from '../../types/decals';
import { useHiRes } from '../../composables/useHiRes';
import type { HiResRegion } from '../../types/hiresRegion';
import { HIRES_MULTIPLIER } from '../../types/hiresRegion';
import GridBlankZonePanel from './GridBlankZonePanel.vue';

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
const currentGridInfo = ref<GridInfo | null>(null);
const currentScrollCanvasPx = ref(0);
let mainEl: HTMLElement | null = null;

function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

function toWorkerZone(zone: BlankZone): BlankZone {
  return {
    ...zone,
    edge: { ...zone.edge },
  };
}

function toWorkerZones(zones: BlankZone[]): BlankZone[] {
  return zones.map((zone) => toWorkerZone(zone));
}

function toWorkerDecal(d: Decal): Decal {
  return {
    ...d,
    pattern: { ...d.pattern },
    tint: [...d.tint] as [number, number, number, number],
  };
}

function toWorkerDecals(d: Decal[]): Decal[] {
  return d.map(toWorkerDecal);
}

function postToWorker(message: Parameters<Worker['postMessage']>[0], transfer?: Transferable[]): void {
  if (!worker) {
    return;
  }

  try {
    if (transfer && transfer.length > 0) {
      worker.postMessage(message, transfer);
    } else {
      worker.postMessage(message);
    }
  } catch (err) {
    log.error('Worker postMessage failed:', errorMessage(err));
  }
}

const blankZones = useBlankZones({
  onSetZones: (zones) => postToWorker({ type: 'set_zones', zones: toWorkerZones(zones) }),
  onAddZone: (zone) => postToWorker({ type: 'add_zone', zone: toWorkerZone(zone) }),
  onUpdateZone: (zone) => postToWorker({ type: 'update_zone', zone: toWorkerZone(zone) }),
  onRemoveZone: (id) => postToWorker({ type: 'remove_zone', id }),
  onClearZones: () => postToWorker({ type: 'clear_zones' }),
});

const decals = useDecals({
  onSetDecals: (d) => postToWorker({ type: 'set_decals', decals: toWorkerDecals(d) }),
  onAddDecal: (d) => postToWorker({ type: 'add_decal', decal: toWorkerDecal(d) }),
  onUpdateDecal: (d) => postToWorker({ type: 'update_decal', decal: toWorkerDecal(d) }),
  onRemoveDecal: (id) => postToWorker({ type: 'remove_decal', id }),
  onClearDecals: () => postToWorker({ type: 'clear_decals' }),
});
const hiRes = useHiRes({
  onSetRegion: (r) => postToWorker({ type: 'set_hires', region: { ...r } }),
  onClearRegion: () => postToWorker({ type: 'clear_hires' }),
});
const zoneToolEnabled = ref(false);
const zoneSnapMajor = ref(false);
const zoneDraft = ref<BlankZoneDraft>({
  mode: 'both',
  edge: { style: 'none', widthCells: 1, opacity: 1 },
});
const decalToolEnabled = ref(false);
const decalSnapMajor = ref(false);
const hiresToolEnabled = ref(false);
const zonePreviewRect = ref<BlankZoneRect | null>(null);
const zonePreviewStyle = ref<Record<string, string> | null>(null);
let dragAnchor: CellCoord | null = null;
let activeDragTool: 'zone' | 'decal' | 'hires' | null = null;
let paintBounds: BlankZoneRect | null = null;

function onAddZone(zone: BlankZone): void {
  blankZones.addZone(zone);
}

function onUpdateZone(zone: BlankZone): void {
  blankZones.updateZone(zone);
}

function onRemoveZone(id: string): void {
  blankZones.removeZone(id);
}

function onClearZones(): void {
  blankZones.clearZones();
}

function onToolChange(payload: { enabled: boolean; snapMajor: boolean }): void {
  zoneToolEnabled.value = payload.enabled;
  zoneSnapMajor.value = payload.snapMajor;
  if (!payload.enabled && activeDragTool === 'zone') {
    dragAnchor = null;
    activeDragTool = null;
    zonePreviewRect.value = null;
    zonePreviewStyle.value = null;
  }
}

function onDraftChange(draft: BlankZoneDraft): void {
  zoneDraft.value = draft;
}

function onDecalToolChange(payload: { enabled: boolean; snapMajor: boolean }): void {
  decalToolEnabled.value = payload.enabled;
  decalSnapMajor.value = payload.snapMajor;
  if (!payload.enabled) {
    if (activeDragTool === 'decal') {
      dragAnchor = null;
      activeDragTool = null;
      paintBounds = null;
      zonePreviewRect.value = null;
      zonePreviewStyle.value = null;
    }
  }
}

function onHiResToolChange(payload: { enabled: boolean }): void {
  hiresToolEnabled.value = payload.enabled;
  if (!payload.enabled && activeDragTool === 'hires') {
    dragAnchor = null;
    activeDragTool = null;
    zonePreviewRect.value = null;
    zonePreviewStyle.value = null;
  }
}

function onAddDecal(decal: Decal): void { decals.addDecal(decal); }
function onUpdateDecal(decal: Decal): void { decals.updateDecal(decal); }
function onRemoveDecal(id: string): void { decals.removeDecal(id); }
function onClearDecals(): void { decals.clearDecals(); }
function onSetHiResRegion(region: HiResRegion): void { hiRes.setRegion(region); }
function onClearHiResRegion(): void { hiRes.clearRegion(); }

/** Build a CoordSnapshot from the latest cached values. */
function makeSnapshot(): CoordSnapshot | null {
  const info = currentGridInfo.value;
  if (!info || info.gridPitch === 0) return null;
  return {
    gridPitch:       info.gridPitch,
    scrollCanvasPx:  currentScrollCanvasPx.value,
    dpr:             devicePixelRatio,
    screenCols:      info.screenCols,
    screenRows:      info.screenRows,
  };
}

/** Tags that should NOT trigger cell toggling when clicked. */
const INTERACTIVE_TAGS = new Set(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL']);
const INTERACTIVE_SELECTORS = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  if (target.closest(INTERACTIVE_SELECTORS)) {
    return true;
  }

  let el: HTMLElement | null = target;
  while (el) {
    if (INTERACTIVE_TAGS.has(el.tagName)) return true;
    if (el.getAttribute('role') === 'button') return true;
    el = el.parentElement;
  }
  return false;
}

function normalizeRect(a: CellCoord, b: CellCoord): BlankZoneRect {
  return {
    x1: Math.min(a.cx, b.cx),
    y1: Math.min(a.cy, b.cy),
    x2: Math.max(a.cx, b.cx),
    y2: Math.max(a.cy, b.cy),
  };
}

function wrapXToViewport(x: number, snap: CoordSnapshot): number {
  return ((x % snap.screenCols) + snap.screenCols) % snap.screenCols;
}

function worldZoneCellFromPointer(event: PointerEvent): CellCoord | null {
  const snap = makeSnapshot();
  if (!snap) {
    return null;
  }
  const cell = screenToCell(event.clientX, event.clientY, snap);
  return {
    cx: wrapXToViewport(cell.cx, snap),
    // World-space row for scroll-stable authoring.
    cy: cell.cy,
  };
}

function snapRectToMajor(rect: BlankZoneRect, snap: CoordSnapshot): BlankZoneRect {
  const toStart = (v: number): number => Math.floor(v / MAJOR_EVERY) * MAJOR_EVERY;
  const toEnd = (v: number): number => toStart(v) + (MAJOR_EVERY - 1);
  return {
    x1: Math.max(0, Math.min(snap.screenCols - 1, toStart(rect.x1))),
    y1: toStart(rect.y1),
    x2: Math.max(0, Math.min(snap.screenCols - 1, toEnd(rect.x2))),
    y2: toEnd(rect.y2),
  };
}

function makeZoneFromRect(rect: BlankZoneRect): BlankZone {
  const now = Date.now();
  const draft = zoneDraft.value;
  return {
    id: typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `zone-${now}-${Math.random().toString(36).slice(2, 9)}`,
    x1: rect.x1,
    y1: rect.y1,
    x2: rect.x2,
    y2: rect.y2,
    mode: draft.mode,
    edge: { ...draft.edge },
    enabled: true,
    createdAt: now,
    updatedAt: now,
  };
}

function makeDecalFromRect(rect: BlankZoneRect): Decal {
  const now = Date.now();
  return {
    id: typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `decal-${now}-${Math.random().toString(36).slice(2, 9)}`,
    x1: rect.x1,
    y1: rect.y1,
    x2: rect.x2,
    y2: rect.y2,
    pattern: { kind: 'solid', coverage: 1.0, solidR: 0.49, solidG: 0.30, solidB: 1.0 },
    tint: [1, 1, 1, 1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: now,
    updatedAt: now,
  };
}

function updateZonePreviewStyle(): void {
  const rect = zonePreviewRect.value;
  const snap = makeSnapshot();
  if (!rect || !snap) {
    zonePreviewStyle.value = null;
    return;
  }

  const left = rect.x1 * snap.gridPitch / snap.dpr;
  const top = (rect.y1 * snap.gridPitch - snap.scrollCanvasPx) / snap.dpr;
  const width = (rect.x2 - rect.x1 + 1) * snap.gridPitch / snap.dpr;
  const height = (rect.y2 - rect.y1 + 1) * snap.gridPitch / snap.dpr;
  zonePreviewStyle.value = {
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
  };
}

function anyToolEnabled(): boolean {
  return zoneToolEnabled.value || decalToolEnabled.value || hiresToolEnabled.value;
}

function activeSnapMajor(): boolean {
  if (activeDragTool === 'decal') return decalSnapMajor.value;
  return zoneSnapMajor.value;
}

function onDocumentPointerDown(event: PointerEvent): void {
  if (!anyToolEnabled() || event.button !== 0 || isInteractiveTarget(event.target)) {
    return;
  }
  const start = worldZoneCellFromPointer(event);
  if (!start) {
    return;
  }
  activeDragTool = hiresToolEnabled.value ? 'hires' : decalToolEnabled.value ? 'decal' : 'zone';
  dragAnchor = start;
  const initRect = { x1: start.cx, y1: start.cy, x2: start.cx, y2: start.cy };
  if (activeDragTool === 'decal') {
    paintBounds = { ...initRect };
  }
  zonePreviewRect.value = initRect;
  updateZonePreviewStyle();
  if (event.target instanceof Element) {
    event.target.setPointerCapture(event.pointerId);
  }
  event.preventDefault();
}

function onDocumentPointerMove(event: PointerEvent): void {
  if (!activeDragTool || !dragAnchor) {
    return;
  }
  const next = worldZoneCellFromPointer(event);
  const snap = makeSnapshot();
  if (!next || !snap) {
    return;
  }
  if (activeDragTool === 'decal' && paintBounds) {
    // Paint mode: expand bounding box to include every traversed cell.
    paintBounds.x1 = Math.min(paintBounds.x1, next.cx);
    paintBounds.y1 = Math.min(paintBounds.y1, next.cy);
    paintBounds.x2 = Math.max(paintBounds.x2, next.cx);
    paintBounds.y2 = Math.max(paintBounds.y2, next.cy);
    zonePreviewRect.value = { ...paintBounds };
  } else {
    // Zone mode: corner-to-corner rectangle.
    const rawRect = normalizeRect(dragAnchor, next);
    zonePreviewRect.value = activeSnapMajor() ? snapRectToMajor(rawRect, snap) : rawRect;
  }
  updateZonePreviewStyle();
}

function onDocumentPointerUp(event: PointerEvent): void {
  if (!activeDragTool || !dragAnchor || event.button !== 0) {
    return;
  }
  if (event.target instanceof Element && event.target.hasPointerCapture(event.pointerId)) {
    event.target.releasePointerCapture(event.pointerId);
  }
  const next = worldZoneCellFromPointer(event);
  const snap = makeSnapshot();
  if (activeDragTool === 'hires' && next) {
    const rawRect = normalizeRect(dragAnchor, next);
    const now = Date.now();
    hiRes.setRegion({
      id: crypto.randomUUID(),
      x1: rawRect.x1,
      y1: rawRect.y1,
      x2: rawRect.x2,
      y2: rawRect.y2,
      multiplier: HIRES_MULTIPLIER,
      enabled: true,
      showGrid: true,
      showBaseGrid: true,
      showBorder: true,
      createdAt: now,
      updatedAt: now,
    });
    // Auto-disable draw tool after placing the region.
    hiresToolEnabled.value = false;
  } else if (activeDragTool === 'decal' && paintBounds) {
    // Include the final cell in the paint bounds.
    if (next) {
      paintBounds.x1 = Math.min(paintBounds.x1, next.cx);
      paintBounds.y1 = Math.min(paintBounds.y1, next.cy);
      paintBounds.x2 = Math.max(paintBounds.x2, next.cx);
      paintBounds.y2 = Math.max(paintBounds.y2, next.cy);
    }
    decals.addDecal(makeDecalFromRect(paintBounds));
  } else if (next && snap) {
    const rawRect = normalizeRect(dragAnchor, next);
    const finalRect = activeSnapMajor() ? snapRectToMajor(rawRect, snap) : rawRect;
    blankZones.addZone(makeZoneFromRect(finalRect));
  }
  dragAnchor = null;
  activeDragTool = null;
  paintBounds = null;
  zonePreviewRect.value = null;
  zonePreviewStyle.value = null;
}

/** Handle clicks anywhere on the page — toggle the cell under the cursor.
 *
 *  The canvas sits at z-index: 0 behind all content, so it never receives
 *  click events directly.  Instead we listen on `document` and skip clicks
 *  that land on interactive elements (buttons, links, inputs).
 */
function onDocumentClick(event: MouseEvent): void {
  if (anyToolEnabled() || dragAnchor || isInteractiveTarget(event.target)) {
    return;
  }

  const snap = makeSnapshot();
  if (!snap) return;  // Not ready yet (worker still initialising).

  const cell   = screenToCell(event.clientX, event.clientY, snap);
  const wrapped = wrapCell(cell, snap);

  log.debug('Click →', event.clientX, event.clientY, '→ cell', wrapped.cx, wrapped.cy);
  postToWorker({
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
        currentGridInfo.value = e.data.gridInfo;
        postToWorker({ type: 'set_zones', zones: toWorkerZones(blankZones.zones.value) });
        postToWorker({ type: 'set_decals', decals: toWorkerDecals(decals.decals.value) });
        if (hiRes.region.value) postToWorker({ type: 'set_hires', region: { ...hiRes.region.value } });
        updateZonePreviewStyle();
        break;
      case 'grid_info':
        currentGridInfo.value = e.data.gridInfo;
        updateZonePreviewStyle();
        break;
      case 'zones_state':
        blankZones.syncFromWorker(e.data.zones);
        break;
      case 'zones_error':
        log.error('Zone update rejected:', e.data.message);
        break;
      case 'decals_state':
        decals.syncFromWorker(e.data.decals);
        break;
      case 'decals_error':
        log.error('Decal update rejected:', e.data.message);
        break;
      case 'hires_state':
        hiRes.syncFromWorker(e.data.region);
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
  document.addEventListener('pointerdown', onDocumentPointerDown);
  document.addEventListener('pointermove', onDocumentPointerMove);
  document.addEventListener('pointerup', onDocumentPointerUp);

  // Compute float grid pitch: canvas_width = nTotal * MAJOR_EVERY * gridPitch exactly,
  // so both left and right margin borders land on major grid lines.
  const gridPitch = alignedPitch(canvasW, TARGET_CELL_CSS_PX, devicePixelRatio);

  // Expose canvas margin as CSS var so header/content can align to the grid border.
  // margin = 0.8 * pitch_major (canvas px) → convert to CSS px by dividing by dpr.
  const marginCss = 0.8 * gridPitch * MAJOR_EVERY / devicePixelRatio;
  document.documentElement.style.setProperty('--grid-margin', `${marginCss.toFixed(1)}px`);

  postToWorker({ type: 'init', canvas: offscreen, cellPx: gridPitch }, [offscreen]);
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
    postToWorker({ type: 'frame' });

    // Prefer .v-main.scrollTop (Vuetify layout mode); fall back to window.scrollY.
    // Both are checked so this works regardless of which element Vuetify scrolls.
    const rawPx = (mainEl?.scrollTop || window.scrollY);
    if (rawPx !== lastScrollPx) {
      lastScrollPx = rawPx;
      currentScrollCanvasPx.value = rawPx * devicePixelRatio;
      postToWorker({ type: 'scroll', scrollY: currentScrollCanvasPx.value });
      updateZonePreviewStyle();
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
    postToWorker({ type: 'resize', width: w, height: h });
  });
  resizeObserver.observe(canvas);
});

onUnmounted(() => {
  cancelAnimationFrame(animFrameId);
  resizeObserver?.disconnect();
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('pointerdown', onDocumentPointerDown);
  document.removeEventListener('pointermove', onDocumentPointerMove);
  document.removeEventListener('pointerup', onDocumentPointerUp);
  postToWorker({ type: 'stop' });
  worker?.terminate();
  worker = null;
  log.debug('Unmounted, worker terminated');
});
</script>

<template>
  <canvas ref="canvasRef" class="app-bg" />
  <div v-if="zonePreviewStyle" class="zone-preview-overlay" :style="zonePreviewStyle" />
  <GridBlankZonePanel
    :zones="blankZones.zones.value"
    :preview-rect="zonePreviewRect"
    :decals="decals.decals.value"
    :hires-region="hiRes.region.value"
    @add-zone="onAddZone"
    @update-zone="onUpdateZone"
    @remove-zone="onRemoveZone"
    @clear-zones="onClearZones"
    @tool-change="onToolChange"
    @draft-change="onDraftChange"
    @add-decal="onAddDecal"
    @update-decal="onUpdateDecal"
    @remove-decal="onRemoveDecal"
    @clear-decals="onClearDecals"
    @decal-tool-change="onDecalToolChange"
    @set-hires-region="onSetHiResRegion"
    @clear-hires-region="onClearHiResRegion"
    @hires-tool-change="onHiResToolChange"
  />
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

.zone-preview-overlay {
  position: fixed;
  z-index: 18;
  pointer-events: none;
  border: 2px dashed rgba(20, 120, 250, 0.92);
  background: rgba(20, 120, 250, 0.15);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.55) inset;
}
</style>
