<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import { alignedPitch, screenToCell, wrapCell } from '../../utils/gridCoords';
import { useBlankZones } from '../../composables/useBlankZones';
import type { BlankZone, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';
import { useWorkerBridge } from '../../composables/useWorkerBridge';
import { useCoordinateMapper } from '../../composables/useCoordinateMapper';
import { useAnimationLoop } from '../../composables/useAnimationLoop';
import { useDragTools } from '../../composables/useDragTools';
import { useThemePreference } from '../../composables/useThemePreference';
import GridBlankZonePanel from './GridBlankZonePanel.vue';

const log = createLogger('AppBackground');

// ── Constants ───────────────────────────────────────────────────────────────
const MAJOR_EVERY = 5;
const TARGET_CELL_CSS_PX = 16;
// Floor for the canvas backing-texture height: max(initial shell, screen
// height × dpr, MIN_CANVAS_HEIGHT_DEVICE_PX).  The shell clips overflow so
// excess height is purely fragment-shader overdraw; we pay sub-millisecond
// per frame in exchange for never reconfiguring the surface on shell-height
// changes (browser toolbar collapse, window-edge drag, iOS address bar).
const MIN_CANVAS_HEIGHT_DEVICE_PX = 2160;

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
// ── Tool state ──────────────────────────────────────────────────────────────
const zoneToolEnabled = ref(false);
const zoneSnapMajor = ref(false);
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
// ── Panel event handlers ────────────────────────────────────────────────────
function onAddZone(zone: BlankZone): void { blankZones.addZone(zone); }
function onUpdateZone(zone: BlankZone): void { blankZones.updateZone(zone); }
function onRemoveZone(id: string): void { blankZones.removeZone(id); }
function onClearZones(): void { blankZones.clearZones(); }
function onDraftChange(draft: BlankZoneDraft): void { zoneDraft.value = draft; }

function onToolChange(payload: { enabled: boolean; snapMajor: boolean }): void {
  zoneToolEnabled.value = payload.enabled;
  zoneSnapMajor.value = payload.snapMajor;
  if (!payload.enabled) drag.cancelActiveDrag('zone');
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
// Picked once at mount and recomputed only on DPR change.  Width is the only
// dimension that triggers actual reconfigures; height is held constant at a
// generous "exceeds any plausible viewport" value.
let canvasH = 0;
let mainEl: HTMLElement | null = null;
let resizeObserver: ResizeObserver | null = null;
let canvasHideTimer: number | null = null;
let detachDrag: (() => void) | null = null;
// rAF coalescer for width changes — drag the window edge at 60+ events/s and
// we still publish at most one resize per frame to the worker.
let pendingWidth = 0;
let resizeRafId: number | null = null;
// Detach handle for the matchMedia DPR listener.
let detachDprListener: (() => void) | null = null;
// Cached "Chrome effective-zoom asymmetry" flag.  Refreshed at mount and on
// DPR change.  See `probeEffectiveZoomAsymmetry` for what this detects and
// `applyCanvasBox` for how it's compensated.
let effectiveZoomActive = false;

function readCanvasPixelSize(el: Element): { width: number; height: number } {
  const rect = el.getBoundingClientRect();
  return {
    width: Math.max(1, Math.round(rect.width * devicePixelRatio)),
    height: Math.max(1, Math.round(rect.height * devicePixelRatio)),
  };
}

/** Read width in device pixels with sub-pixel precision when available. */
function readWidthDevicePx(entry: ResizeObserverEntry): number {
  const dp = entry.devicePixelContentBoxSize?.[0]?.inlineSize;
  if (typeof dp === 'number' && dp > 0) return dp;
  return Math.max(1, Math.round(entry.contentRect.width * devicePixelRatio));
}

function pickCanvasHeight(initialShellHeightDevicePx: number): number {
  const screenDevicePx = Math.round(screen.height * devicePixelRatio);
  return Math.max(initialShellHeightDevicePx, screenDevicePx, MIN_CANVAS_HEIGHT_DEVICE_PX);
}

/**
 * Detect whether this browser exhibits Chrome's "effective zoom" asymmetry
 * under `html { zoom: !=1 }`:  `getBoundingClientRect` returns post-zoom
 * (visual) CSS pixels while `style.width` writes are interpreted as pre-zoom
 * (logical) CSS pixels and visually re-scaled by the html zoom factor.
 * Round-tripping a value between the two then ends up scaled twice.
 *
 * Probe: write 100 logical CSS px to a hidden div, read its rect, compare.
 * If they differ by more than a sub-pixel epsilon, the asymmetry is active.
 * Safari (classic-zoom model) returns false; pages without `zoom` (or
 * `zoom: 1`) also return false.
 */
function probeEffectiveZoomAsymmetry(): boolean {
  const probe = document.createElement('div');
  probe.style.cssText = 'position:fixed;left:-9999px;top:0;width:100px;height:100px;';
  document.body.appendChild(probe);
  const measured = probe.getBoundingClientRect().width;
  probe.remove();
  return Math.abs(measured - 100) > 0.1;
}

function alignedGridPitch(widthPx: number): number {
  return alignedPitch(widthPx, TARGET_CELL_CSS_PX, devicePixelRatio);
}

function applyCanvasBox(canvas: HTMLCanvasElement, widthPx: number, heightPx: number): void {
  // The intended visual size is `widthPx / devicePixelRatio` CSS px.  Under
  // Chrome's effective-zoom model with `html { zoom: !=1 }`, `style.width`
  // is interpreted as pre-zoom logical CSS px and re-scaled by the html zoom
  // factor on render — so we pre-divide by zoom to land at the right visual
  // size.  Safari's classic-zoom model agrees on coord systems and skips
  // this compensation (probe returns false).
  const visualWCss = widthPx / devicePixelRatio;
  const visualHCss = heightPx / devicePixelRatio;
  let logicalWCss = visualWCss;
  let logicalHCss = visualHCss;
  if (effectiveZoomActive) {
    const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
    if (zoom > 0 && zoom !== 1) {
      logicalWCss = visualWCss / zoom;
      logicalHCss = visualHCss / zoom;
    }
  }
  canvas.style.width = `${logicalWCss.toFixed(2)}px`;
  canvas.style.height = `${logicalHCss.toFixed(2)}px`;
}

function hideCanvasDuringResize(canvas: HTMLCanvasElement): void {
  canvas.classList.add('app-bg--hidden');
  if (canvasHideTimer !== null) clearTimeout(canvasHideTimer);
  canvasHideTimer = window.setTimeout(() => {
    canvasHideTimer = null;
    canvas.classList.remove('app-bg--hidden');
  }, 120);
}

function applyGridMargin(widthPx: number): void {
  const gp = alignedGridPitch(widthPx);
  document.documentElement.style.setProperty(
    '--grid-margin',
    `${(0.8 * gp * MAJOR_EVERY / devicePixelRatio).toFixed(1)}px`,
  );
}

function publishCanvasResize(canvas: HTMLCanvasElement, widthPx: number): void {
  canvasW = widthPx;
  applyCanvasBox(canvas, canvasW, canvasH);
  hideCanvasDuringResize(canvas);
  applyGridMargin(canvasW);
  log.debug('Resize → width', canvasW, 'height', canvasH);
  bridge.post({ type: 'resize', width: canvasW, height: canvasH });
}

function scheduleResizePublish(canvas: HTMLCanvasElement): void {
  if (resizeRafId !== null) return;
  resizeRafId = requestAnimationFrame(() => {
    resizeRafId = null;
    if (pendingWidth === 0 || pendingWidth === canvasW) return;
    publishCanvasResize(canvas, pendingWidth);
  });
}

/**
 * Subscribe to device-pixel-ratio changes via matchMedia.  The query
 * captures the current DPR at construction, so we re-arm after every
 * fire — cleaner than polling.
 */
function watchDevicePixelRatio(onChange: () => void): () => void {
  let detached = false;
  const arm = (): void => {
    if (detached) return;
    const mql = matchMedia(`(resolution: ${devicePixelRatio}dppx)`);
    const handler = (): void => {
      if (detached) return;
      onChange();
      arm();
    };
    mql.addEventListener('change', handler, { once: true });
  };
  arm();
  return () => { detached = true; };
}

onMounted(() => {
  const shell = shellRef.value;
  const canvas = canvasRef.value;
  if (!shell || !canvas) return;

  // Detect Chrome/Firefox effective-zoom asymmetry once at mount (refreshed
  // in the DPR listener).  `applyCanvasBox` reads this cached flag to decide
  // whether to compensate `canvas.style.{width,height}` for `html { zoom }`.
  effectiveZoomActive = probeEffectiveZoomAsymmetry();

  const initialSize = readCanvasPixelSize(shell);
  canvasW = initialSize.width;
  canvasH = pickCanvasHeight(initialSize.height);
  canvas.width = canvasW;
  canvas.height = canvasH;
  applyCanvasBox(canvas, canvasW, canvasH);
  log.debug(
    'Canvas initialised',
    canvasW, 'x', canvasH,
    'dpr', devicePixelRatio,
    'effectiveZoom', effectiveZoomActive,
  );

  const offscreen = canvas.transferControlToOffscreen();
  const gridPitch = alignedGridPitch(canvasW);
  applyGridMargin(canvasW);

  bridge.init(offscreen, gridPitch);
  log.debug('Worker spawned, gridPitch', gridPitch.toFixed(2));

  // Worker message handlers
  bridge.on('ready', (msg) => {
    log.info(`${msg.backend.toUpperCase()} renderer active`);
    bridge.post({ type: 'set_theme', theme: currentTheme.value });
    bridge.post({ type: 'set_zones', zones: toWorkerZones(blankZones.zones.value) });
  });
  bridge.on('zones_state', (msg) => blankZones.syncFromWorker(msg.zones));
  bridge.on('zones_error', (msg) => log.error('Zone update rejected:', msg.message));
  bridge.on('startup_breakdown', (msg) => {
    const fmt = (ms: number): string => `${ms.toFixed(0)}ms`;
    const lines: string[] = [
      `Startup breakdown:`,
      `  total            ${fmt(msg.phases.total)}`,
      `  gpu_probe        ${fmt(msg.phases.gpuProbe)}`,
      `  wasm_import      ${fmt(msg.phases.wasmImport)}`,
      `  new_offscreen    ${fmt(msg.phases.newOffscreen)}`,
      `  ready_post       ${fmt(msg.phases.readyPost)}`,
    ];
    const sub = msg.phases.newOffscreenPhases;
    if (sub) {
      lines.push(`  new_offscreen sub-phases:`);
      lines.push(`    device_request   ${fmt(sub.deviceRequest)}`);
      lines.push(`    panel_init       ${fmt(sub.panelInit)}`);
      lines.push(`    seeding          ${fmt(sub.seeding)}`);
      lines.push(`    simulation_init  ${fmt(sub.simulationInit)}`);
      lines.push(`    renderer_init    ${fmt(sub.rendererInit)}`);
    }
    log.info(lines.join('\n'));
  });
  bridge.on('gpu_pass_breakdown', (msg) => {
    const fmt = (v: number | null): string => v === null ? '—' : `${v.toFixed(2)}ms`;
    const d = msg.durations;
    log.info(
      `GPU pass breakdown (frame ${msg.frame}):\n` +
      `  compute_tick   ${fmt(d.computeTickMs)}\n` +
      `  xor_edit       ${fmt(d.xorEditMs)}\n` +
      `  or_edit        ${fmt(d.orEditMs)}\n` +
      `  render_pass    ${fmt(d.renderPassMs)}`,
    );
  });
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
    targetScroll = raw * PARALLAX_RATE * devicePixelRatio;
    currentScroll += (targetScroll - currentScroll) * PARALLAX_EASE;

    if (Math.abs(currentScroll - currentScrollCanvasPx.value) > 0.1) {
      currentScrollCanvasPx.value = currentScroll;
      bridge.post({ type: 'scroll', scrollY: currentScroll });
    }
  });

  // Resize observer — width-only.  Shell-height changes are deliberately
  // ignored: the canvas is fixed-positioned and clipped by the shell's
  // overflow:hidden, so the canvas backing texture only needs to be at
  // least as tall as any plausible viewport (handled by `pickCanvasHeight`
  // at mount and on DPR change).  Width changes still feed through but
  // are coalesced to one publish per animation frame to avoid swapchain-
  // rebuild storms during window-edge drag.
  resizeObserver = new ResizeObserver(([entry]) => {
    if (!canvasRef.value) return;
    const w = readWidthDevicePx(entry);
    if (w <= 0 || w === canvasW) return;
    pendingWidth = w;
    scheduleResizePublish(canvasRef.value);
  });
  resizeObserver.observe(shell);

  // DPR listener — fires when the user moves the window between displays
  // of different DPI or changes OS scaling.  Recomputes the constant
  // canvas height for the new DPR and republishes the current width so
  // the worker re-applies CSS dims and uniforms.  Also re-runs the
  // effective-zoom probe: OS scaling changes can flip the zoom-model
  // asymmetry on some browser/host combinations.
  detachDprListener = watchDevicePixelRatio(() => {
    if (!shellRef.value || !canvasRef.value) return;
    effectiveZoomActive = probeEffectiveZoomAsymmetry();
    const shellH = Math.round(shellRef.value.getBoundingClientRect().height * devicePixelRatio);
    canvasH = pickCanvasHeight(shellH);
    publishCanvasResize(canvasRef.value, canvasW);
  });
});

onUnmounted(() => {
  anim.stop();
  resizeObserver?.disconnect();
  detachDprListener?.();
  if (canvasHideTimer !== null) {
    clearTimeout(canvasHideTimer);
    canvasHideTimer = null;
  }
  if (resizeRafId !== null) {
    cancelAnimationFrame(resizeRafId);
    resizeRafId = null;
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
    @add-zone="onAddZone"
    @update-zone="onUpdateZone"
    @remove-zone="onRemoveZone"
    @clear-zones="onClearZones"
    @tool-change="onToolChange"
    @draft-change="onDraftChange"
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
