<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import { screenToCell, wrapCell } from '../../utils/gridCoords';
import { useBlankZones } from '../../composables/useBlankZones';
import type { BlankZone, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';
import { useWorkerBridge } from '../../composables/useWorkerBridge';
import { useCoordinateMapper } from '../../composables/useCoordinateMapper';
import { useAnimationLoop } from '../../composables/useAnimationLoop';
import { useDragTools } from '../../composables/useDragTools';
import { useThemePreference } from '../../composables/useThemePreference';
import { useCanvasSurface } from '../../composables/useCanvasSurface';
import { useWorkerDiagnostics } from '../../composables/useWorkerDiagnostics';
import { useCamera } from '../../composables/useCamera';
import { useCameraGridSync } from '../../composables/useCameraGridSync';
import { useDragToPan } from '../../composables/useDragToPan';
import GridBlankZonePanel from './GridBlankZonePanel.vue';

const log = createLogger('AppBackground');

// ── Core composables ──────────────────────────────────────────────────────
const shellRef = ref<HTMLDivElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const bridge = useWorkerBridge();
const camera = useCamera();
// Click-to-toggle maps screen → cell through the live camera offset. In Phase 1
// the grid is fixed (worldOffsetDevicePx is {0,0}), so clicks land on the
// stationary grid; Phase 2 makes the offset live as the grid pans.
const coords = useCoordinateMapper(bridge.gridInfo, camera.worldOffsetDevicePx);
const anim = useAnimationLoop();
const drag = useDragTools(coords);
const surface = useCanvasSurface(bridge.post);

// Forward camera motion to the worker so the grid pans in lockstep (Phase 2).
useCameraGridSync(bridge);
// Drag the background to fly the camera directly; yields to the zone tool and
// interactive content so it never hijacks those gestures.
const dragPan = useDragToPan({
  isInteractiveTarget: coords.isInteractiveTarget,
  isToolActive: () => drag.anyToolEnabled(),
});

// ── Worker serialization helpers ──────────────────────────────────────────
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
// The Grid Tools / blank-zones panel is an authoring tool, not site chrome —
// hidden from the presented site for now. The zone wiring below stays intact,
// so bringing the editor back is just flipping this to true.
const showGridTools: boolean = false;
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

// ── Object factories ──────────────────────────────────────────────────────
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

// ── Panel event handlers ──────────────────────────────────────────────────
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
  if (drag.anyToolEnabled() || coords.isInteractiveTarget(event.target) || dragPan.consumedClick()) return;
  const snap = coords.makeSnapshot();
  if (!snap) return;
  const cell = screenToCell(event.clientX, event.clientY, snap);
  const wrapped = wrapCell(cell, snap);
  log.debug('Click →', event.clientX, event.clientY, '→ cell', wrapped.cx, wrapped.cy);
  bridge.post({
    type: 'toggle_cell',
    cx: wrapped.cx,
    cy: wrapped.cy,
    scrollCanvasPx: snap.offsetY,
  });
}

// ── Lifecycle ───────────────────────────────────────────────────────────────
let detachDrag: (() => void) | null = null;
let detachPan: (() => void) | null = null;

onMounted(() => {
  const shell = shellRef.value;
  const canvas = canvasRef.value;
  if (!shell || !canvas) return;

  const { offscreen, gridPitch } = surface.initialize(shell, canvas);
  bridge.init(offscreen, gridPitch, currentTheme.value);
  log.debug('Worker spawned, gridPitch', gridPitch.toFixed(2));

  // Worker message handlers
  bridge.on('ready', (msg) => {
    log.info(`${msg.backend.toUpperCase()} renderer active`);
    bridge.post({ type: 'set_theme', theme: currentTheme.value });
    bridge.post({ type: 'set_zones', zones: toWorkerZones(blankZones.zones.value) });
    // Deliver the current camera offset now the worker accepts commands — covers
    // a deep-link landing where the camera was snapped before the worker spawned
    // and won't change again (so the grid-sync watcher wouldn't fire).
    const off = camera.worldOffsetDevicePx.value;
    bridge.post({ type: 'camera', x: off.x, y: off.y });
  });
  bridge.on('zones_state', (msg) => blankZones.syncFromWorker(msg.zones));
  bridge.on('zones_error', (msg) => log.error('Zone update rejected:', msg.message));
  bridge.on('first_frame_painted', () => surface.revealCanvas());
  bridge.on('error', (msg) => {
    if (msg.phase === 'gpu-init') {
      log.debug(`GPU unavailable (${msg.message}) — CPU fallback in progress`);
    } else {
      log.error(`Renderer error [${msg.phase}]:`, msg.message);
    }
  });
  useWorkerDiagnostics(bridge);

  // Event listeners
  document.addEventListener('click', onDocumentClick);
  detachDrag = drag.attachListeners();
  detachPan = dragPan.attachListeners();

  // Animation loop — drives the worker's per-frame tick/render. The camera and
  // its eased motion live in useCamera; the grid stays fixed in Phase 1.
  anim.start(() => bridge.post({ type: 'frame' }));
});

onUnmounted(() => {
  anim.stop();
  surface.teardown();
  document.removeEventListener('click', onDocumentClick);
  detachDrag?.();
  detachPan?.();
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
    v-if="showGridTools"
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
  /* Default invisible; `app-bg--visible` is added by useCanvasSurface's
     `revealCanvas` (driven by the worker's `first_frame_painted` signal) so
     the GPU canvas crossfades in over ~700 ms instead of snapping in on the
     first painted frame. The html background (paper colour + CSS gridlines
     from App.vue) stays visible underneath during the fade. */
  opacity: 0;
  transition: opacity 3000ms ease-out;
}

.app-bg--visible {
  opacity: 1;
}

/* Added 800 ms after first paint to revert the transition timing to the
   original snappy value used by the resize-hide path. Without this, a resize
   during the first second of the session would fade back in at the slow
   first-paint rate. */
.app-bg--snappy-transition {
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
