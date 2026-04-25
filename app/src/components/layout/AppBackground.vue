<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import { alignedPitch, screenToCell, wrapCell } from '../../utils/gridCoords';
import { useBlankZones } from '../../composables/useBlankZones';
import type { BlankZone, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';
import { useHiRes } from '../../composables/useHiRes';
import type { HiResRegion } from '../../types/hiresRegion';
import { HIRES_MULTIPLIER } from '../../types/hiresRegion';
import { useWorkerBridge } from '../../composables/useWorkerBridge';
import { useCoordinateMapper } from '../../composables/useCoordinateMapper';
import { useAnimationLoop } from '../../composables/useAnimationLoop';
import { useDragTools } from '../../composables/useDragTools';
import { useThemePreference } from '../../composables/useThemePreference';
import { FEATURE_HIRES } from '../../config/features';
import GridBlankZonePanel from './GridBlankZonePanel.vue';

const log = createLogger('AppBackground');

// ── Constants ───────────────────────────────────────────────────────────────
const MAJOR_EVERY = 5;
const TARGET_CELL_CSS_PX = 16;
const OVERSCAN_MAJOR_BANDS = 6;
const SHRINK_DEBOUNCE_MS = 0;
const SCROLL_ACTIVE_MS = 300;

// Parallax tuning — the background drifts at PARALLAX_RATE × content velocity,
// with PARALLAX_EASE controlling how softly `currentScroll` eases toward the
// target each frame. Lower rate = more subtle drift; higher ease = snappier
// but less smooth. Numbers here are tasteful defaults — tweak and reload.
const PARALLAX_RATE = 0.3;
const PARALLAX_EASE = 0.12;

// ── Core composables ────────────────────────────────────────────────────────
const shellRef = ref<HTMLDivElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const currentScrollCanvasPx = ref(0);
const bridge = useWorkerBridge();
const coords = useCoordinateMapper(bridge.gridInfo, currentScrollCanvasPx);
const anim = useAnimationLoop();
const drag = useDragTools(coords);

// ── Worker serialization helpers ────────────────────────────────────────────
function toWorkerZone(zone: BlankZone): BlankZone {
  return { ...zone, edge: { ...zone.edge } };
}
function toWorkerZones(zones: BlankZone[]): BlankZone[] {
  return zones.map(toWorkerZone);
}
// ── Feature composables (with worker sync callbacks) ────────────────────────
const blankZones = useBlankZones({
  onSetZones: (zones) => bridge.post({ type: 'set_zones', zones: toWorkerZones(zones) }),
  onAddZone: (zone) => bridge.post({ type: 'add_zone', zone: toWorkerZone(zone) }),
  onUpdateZone: (zone) => bridge.post({ type: 'update_zone', zone: toWorkerZone(zone) }),
  onRemoveZone: (id) => bridge.post({ type: 'remove_zone', id }),
  onClearZones: () => bridge.post({ type: 'clear_zones' }),
});
// Hi-res callbacks are no-ops when FEATURE_HIRES is off — the composable
// still owns in-memory state so types stay simple, but nothing reaches the
// worker or GPU. Vite strips the truthy branches at build time.
const hiRes = useHiRes({
  onAddRegion: (r) => {
    if (FEATURE_HIRES) bridge.post({ type: 'add_hires', region: { ...r } });
  },
  onUpdateRegion: (r) => {
    if (FEATURE_HIRES) bridge.post({ type: 'update_hires', region: { ...r } });
  },
  onRemoveRegion: (id) => {
    if (FEATURE_HIRES) bridge.post({ type: 'remove_hires', id });
  },
  onClearRegions: () => {
    if (FEATURE_HIRES) bridge.post({ type: 'clear_hires' });
  },
});
// ── Tool state ──────────────────────────────────────────────────────────────
const zoneToolEnabled = ref(false);
const zoneSnapMajor = ref(false);
const hiresToolEnabled = ref(false);
const zoneDraft = ref<BlankZoneDraft>({
  mode: 'both',
  edge: { style: 'none', widthCells: 1, opacity: 1 },
});

// ── Theme ───────────────────────────────────────────────────────────────────
// The active palette is owned by the useThemePreference composable (singleton
// module state, shared with the toggle in AppHeader). We watch it and push
// changes to the worker, which forwards to the GPU shader uniform.
const { theme: currentTheme } = useThemePreference();
watch(currentTheme, (next) => {
  bridge.post({ type: 'set_theme', theme: next });
});

// ── Object factories ────────────────────────────────────────────────────────
function makeZoneFromRect(rect: BlankZoneRect): BlankZone {
  const now = Date.now();
  const draft = zoneDraft.value;
  return {
    id: crypto.randomUUID(),
    x1: rect.x1, y1: rect.y1, x2: rect.x2, y2: rect.y2,
    mode: draft.mode,
    edge: { ...draft.edge },
    enabled: true,
    createdAt: now,
    updatedAt: now,
  };
}

// ── Drag tool registration ──────────────────────────────────────────────────
drag.register('zone', {
  isEnabled: () => zoneToolEnabled.value,
  priority: 1,
  snapMajor: () => zoneSnapMajor.value,
  onCommit(rect) { blankZones.addZone(makeZoneFromRect(rect)); },
});
drag.register('hires', {
  isEnabled: () => hiresToolEnabled.value,
  priority: 3,
  onCommit(rect) {
    const now = Date.now();
    hiRes.addRegion({
      id: crypto.randomUUID(),
      x1: rect.x1, y1: rect.y1, x2: rect.x2, y2: rect.y2,
      multiplier: HIRES_MULTIPLIER, enabled: true,
      showGrid: true, showBaseGrid: true, showBorder: true, tickMultiplier: 1,
      createdAt: now, updatedAt: now,
    });
  },
});
// ── Panel event handlers ────────────────────────────────────────────────────
function onAddZone(zone: BlankZone): void { blankZones.addZone(zone); }
function onUpdateZone(zone: BlankZone): void { blankZones.updateZone(zone); }
function onRemoveZone(id: string): void { blankZones.removeZone(id); }
function onClearZones(): void { blankZones.clearZones(); }
function onAddHiResRegion(region: HiResRegion): void { hiRes.addRegion(region); }
function onUpdateHiResRegion(region: HiResRegion): void { hiRes.updateRegion(region); }
function onRemoveHiResRegion(id: string): void { hiRes.removeRegion(id); }
function onClearHiResRegions(): void { hiRes.clearRegions(); }
function onDraftChange(draft: BlankZoneDraft): void { zoneDraft.value = draft; }

function onToolChange(payload: { enabled: boolean; snapMajor: boolean }): void {
  zoneToolEnabled.value = payload.enabled;
  zoneSnapMajor.value = payload.snapMajor;
  if (!payload.enabled) drag.cancelActiveDrag('zone');
}

function onHiResToolChange(payload: { enabled: boolean }): void {
  hiresToolEnabled.value = payload.enabled;
  if (!payload.enabled) drag.cancelActiveDrag('hires');
}

// ── Click-to-toggle cell ────────────────────────────────────────────────────
function onDocumentClick(event: MouseEvent): void {
  if (drag.anyToolEnabled() || coords.isInteractiveTarget(event.target)) return;
  const snap = coords.makeSnapshot();
  if (!snap) return;
  const cell = screenToCell(event.clientX, event.clientY, snap);
  const wrapped = wrapCell(cell, snap);
  log.debug('Click →', event.clientX, event.clientY, '→ cell', wrapped.cx, wrapped.cy);
  bridge.post({
    type: 'toggle_cell',
    cx: wrapped.cx,
    cy: wrapped.cy,
    scrollCanvasPx: snap.scrollCanvasPx,
  });
}

// ── Lifecycle ───────────────────────────────────────────────────────────────
let canvasW = 0;
let canvasH = 0;
let stableCanvasH = 0;
let pendingShrinkH = 0;
let mainEl: HTMLElement | null = null;
let resizeObserver: ResizeObserver | null = null;
let canvasHideTimer: number | null = null;
let shrinkTimer: number | null = null;
let detachDrag: (() => void) | null = null;
let lastScrollSample = 0;
let lastScrollActivityAt = 0;

function readCanvasPixelSize(el: Element): { width: number; height: number } {
  const rect = el.getBoundingClientRect();
  return {
    width: Math.max(1, Math.round(rect.width * devicePixelRatio)),
    height: Math.max(1, Math.round(rect.height * devicePixelRatio)),
  };
}

function alignedGridPitch(widthPx: number): number {
  return alignedPitch(widthPx, TARGET_CELL_CSS_PX, devicePixelRatio);
}

function overscanPx(widthPx: number): number {
  return Math.round(alignedGridPitch(widthPx) * MAJOR_EVERY * OVERSCAN_MAJOR_BANDS);
}

function applyCanvasBox(canvas: HTMLCanvasElement, widthPx: number, heightPx: number): void {
  canvas.style.width = `${(widthPx / devicePixelRatio).toFixed(2)}px`;
  canvas.style.height = `${(heightPx / devicePixelRatio).toFixed(2)}px`;
}

function hideCanvasDuringResize(canvas: HTMLCanvasElement): void {
  canvas.classList.add('app-bg--hidden');
  if (canvasHideTimer !== null) clearTimeout(canvasHideTimer);
  canvasHideTimer = window.setTimeout(() => {
    canvasHideTimer = null;
    canvas.classList.remove('app-bg--hidden');
  }, 120);
}

function publishCanvasResize(
  canvas: HTMLCanvasElement,
  widthPx: number,
  shellHeightPx: number,
): void {
  stableCanvasH = Math.max(stableCanvasH, shellHeightPx);
  canvasW = widthPx;
  canvasH = stableCanvasH + overscanPx(widthPx);

  applyCanvasBox(canvas, canvasW, canvasH);
  hideCanvasDuringResize(canvas);

  const gp = alignedGridPitch(widthPx);
  document.documentElement.style.setProperty('--grid-margin', `${(0.8 * gp * MAJOR_EVERY / devicePixelRatio).toFixed(1)}px`);
  log.debug('Resize →', widthPx, 'x', canvasH, '(shell', shellHeightPx, ')');
  bridge.post({ type: 'resize', width: canvasW, height: canvasH });
}

function queueShrinkResize(): void {
  if (shrinkTimer !== null) clearTimeout(shrinkTimer);
  shrinkTimer = window.setTimeout(() => {
    shrinkTimer = null;
    if (!canvasRef.value || pendingShrinkH <= 0) return;

    const scrollAge = performance.now() - lastScrollActivityAt;
    if (scrollAge < SCROLL_ACTIVE_MS) {
      queueShrinkResize();
      return;
    }

    stableCanvasH = pendingShrinkH;
    publishCanvasResize(canvasRef.value, canvasW, stableCanvasH);
    pendingShrinkH = 0;
  }, SHRINK_DEBOUNCE_MS);
}

onMounted(() => {
  const shell = shellRef.value;
  const canvas = canvasRef.value;
  if (!shell || !canvas) return;

  const initialSize = readCanvasPixelSize(shell);
  canvasW = initialSize.width;
  stableCanvasH = initialSize.height;
  canvasH = stableCanvasH + overscanPx(canvasW);
  canvas.width = canvasW;
  canvas.height = canvasH;
  applyCanvasBox(canvas, canvasW, canvasH);
  log.debug('Canvas initialised', canvasW, 'x', canvasH, 'dpr', devicePixelRatio);

  const offscreen = canvas.transferControlToOffscreen();
  const gridPitch = alignedGridPitch(canvasW);
  const marginCss = 0.8 * gridPitch * MAJOR_EVERY / devicePixelRatio;
  document.documentElement.style.setProperty('--grid-margin', `${marginCss.toFixed(1)}px`);

  bridge.init(offscreen, gridPitch);
  log.debug('Worker spawned, gridPitch', gridPitch.toFixed(2));

  // Worker message handlers
  bridge.on('ready', (msg) => {
    log.info(`${msg.backend.toUpperCase()} renderer active`);
    bridge.post({ type: 'set_theme', theme: currentTheme.value });
    bridge.post({ type: 'set_zones', zones: toWorkerZones(blankZones.zones.value) });
    if (FEATURE_HIRES && hiRes.regions.value.length > 0) {
      bridge.post({ type: 'set_hires_regions', regions: hiRes.regions.value.map((r) => ({ ...r })) });
    }
  });
  bridge.on('zones_state', (msg) => blankZones.syncFromWorker(msg.zones));
  bridge.on('zones_error', (msg) => log.error('Zone update rejected:', msg.message));
  bridge.on('hires_state', (msg) => hiRes.syncFromWorker(msg.regions));
  bridge.on('error', (msg) => {
    if (msg.phase === 'gpu-init') {
      log.debug(`GPU unavailable (${msg.message}) — CPU fallback in progress`);
    } else {
      log.error(`Renderer error [${msg.phase}]:`, msg.message);
    }
  });

  // Event listeners
  document.addEventListener('click', onDocumentClick);
  detachDrag = drag.attachListeners();

  // Animation loop — frame tick + eased parallax scroll sync.
  //
  // We're deliberately NOT trying for 1:1 scroll lock (which the earlier
  // implementation attempted and which produced visible shimmer because the
  // cross-thread postMessage + GPU queue round-trip is always ≥1 frame
  // behind DOM scroll).  Instead:
  //
  //   1. Compute `target` = DOM scrollTop scaled by PARALLAX_RATE, so the
  //      background drifts at a fraction of content velocity.  This alone
  //      hides cross-thread latency: a 16ms delay at 0.3× rate is ~5ms of
  //      visual desync — below perception.
  //
  //   2. Ease `current` toward `target` by PARALLAX_EASE each frame.  This
  //      makes the current value change smoothly regardless of source-side
  //      jitter.  The motion is always continuous; no per-frame snap.
  //
  //   3. Only post `scroll` to the worker when `current` has meaningfully
  //      changed — avoids emitting useless messages once motion settles.
  mainEl = document.querySelector<HTMLElement>('.v-main');
  let targetScroll = 0;
  let currentScroll = 0;
  anim.start(() => {
    bridge.post({ type: 'frame' });

    // Vuetify 3 doesn't put overflow:auto on v-main by default — the document
    // itself is the scroll container in this app, so mainEl.scrollTop is
    // usually 0 and we want to fall back to window.scrollY.  Use `||` (not
    // `??`) so a zero from mainEl still falls through.
    const raw = mainEl?.scrollTop || window.scrollY;
    if (Math.abs(raw - lastScrollSample) > 0.5) {
      lastScrollSample = raw;
      lastScrollActivityAt = performance.now();
    }
    targetScroll = raw * PARALLAX_RATE * devicePixelRatio;
    currentScroll += (targetScroll - currentScroll) * PARALLAX_EASE;

    if (Math.abs(currentScroll - currentScrollCanvasPx.value) > 0.1) {
      currentScrollCanvasPx.value = currentScroll;
      bridge.post({ type: 'scroll', scrollY: currentScroll });
    }
  });

  // Resize observer
  resizeObserver = new ResizeObserver(([entry]) => {
    if (!canvasRef.value) return;
    const w = Math.round(entry.contentRect.width * devicePixelRatio);
    const shellH = Math.round(entry.contentRect.height * devicePixelRatio);
    if (w <= 0 || shellH <= 0) return;

    const canvas = canvasRef.value;
    const widthChanged = w !== canvasW;
    const heightGrew = shellH > stableCanvasH;
    const heightShrank = shellH < stableCanvasH;

    if (widthChanged) {
      if (shrinkTimer !== null) {
        clearTimeout(shrinkTimer);
        shrinkTimer = null;
      }
      pendingShrinkH = 0;
      stableCanvasH = shellH;
      publishCanvasResize(canvas, w, shellH);
      return;
    }

    if (heightGrew) {
      if (shrinkTimer !== null) {
        clearTimeout(shrinkTimer);
        shrinkTimer = null;
      }
      pendingShrinkH = 0;
      publishCanvasResize(canvas, w, shellH);
      return;
    }

    if (!heightShrank) return;

    pendingShrinkH = shellH;
    queueShrinkResize();
  });
  resizeObserver.observe(shell);
});

onUnmounted(() => {
  anim.stop();
  resizeObserver?.disconnect();
  if (canvasHideTimer !== null) {
    clearTimeout(canvasHideTimer);
    canvasHideTimer = null;
  }
  if (shrinkTimer !== null) {
    clearTimeout(shrinkTimer);
    shrinkTimer = null;
  }
  document.removeEventListener('click', onDocumentClick);
  detachDrag?.();
  bridge.terminate();
  log.debug('Unmounted, worker terminated');
});
</script>

<template>
  <div ref="shellRef" class="app-bg-shell">
    <canvas ref="canvasRef" class="app-bg" />
  </div>
  <div v-if="drag.previewStyle.value" class="zone-preview-overlay" :style="drag.previewStyle.value" />
  <GridBlankZonePanel
    :zones="blankZones.zones.value"
    :preview-rect="drag.previewRect.value"
    :hires-regions="hiRes.regions.value"
    @add-zone="onAddZone"
    @update-zone="onUpdateZone"
    @remove-zone="onRemoveZone"
    @clear-zones="onClearZones"
    @tool-change="onToolChange"
    @draft-change="onDraftChange"
    @add-hires-region="onAddHiResRegion"
    @update-hires-region="onUpdateHiResRegion"
    @remove-hires-region="onRemoveHiResRegion"
    @clear-hires-regions="onClearHiResRegions"
    @hires-tool-change="onHiResToolChange"
  />
</template>

<style scoped>
.app-bg-shell {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.app-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 1;
  transition: opacity 180ms ease-out;
}

.app-bg--hidden {
  opacity: 0;
  transition: none;
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
