<script setup lang="ts">
import { ref, toRaw, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import { alignedPitch, screenToCell, wrapCell } from '../../utils/gridCoords';
import { useBlankZones } from '../../composables/useBlankZones';
import type { BlankZone, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';
import { useDecals } from '../../composables/useDecals';
import type { Decal } from '../../types/decals';
import { useHiRes } from '../../composables/useHiRes';
import type { HiResRegion } from '../../types/hiresRegion';
import { HIRES_MULTIPLIER } from '../../types/hiresRegion';
import { useText } from '../../composables/useText';
import type { TextBlock, TextRenderMode } from '../../types/text';
import { DEFAULT_FONT, DEFAULT_TEXT_COLOR } from '../../types/text';
import { useWorkerBridge } from '../../composables/useWorkerBridge';
import { useCoordinateMapper } from '../../composables/useCoordinateMapper';
import { useAnimationLoop } from '../../composables/useAnimationLoop';
import { useTextInput } from '../../composables/useTextInput';
import { useDragTools } from '../../composables/useDragTools';
import GridBlankZonePanel from './GridBlankZonePanel.vue';
import type { HiResTextToolPayload } from './GridHiResTextTab.vue';

const log = createLogger('AppBackground');

// ── Constants ───────────────────────────────────────────────────────────────
const MAJOR_EVERY = 5;
const TARGET_CELL_CSS_PX = 19;
const MIN_TEXT_CELLS_WIDE = 10;

// ── Core composables ────────────────────────────────────────────────────────
const canvasRef = ref<HTMLCanvasElement | null>(null);
const currentScrollCanvasPx = ref(0);
const bridge = useWorkerBridge();
const coords = useCoordinateMapper(bridge.gridInfo, currentScrollCanvasPx);
const anim = useAnimationLoop();
const textInput = useTextInput(coords);
const drag = useDragTools(coords);

// ── Worker serialization helpers ────────────────────────────────────────────
function toWorkerZone(zone: BlankZone): BlankZone {
  return { ...zone, edge: { ...zone.edge } };
}
function toWorkerZones(zones: BlankZone[]): BlankZone[] {
  return zones.map(toWorkerZone);
}
function toWorkerDecal(d: Decal): Decal {
  return { ...d, pattern: { ...d.pattern }, tint: [...d.tint] as [number, number, number, number] };
}
function toWorkerDecals(d: Decal[]): Decal[] {
  return d.map(toWorkerDecal);
}

// ── Feature composables (with worker sync callbacks) ────────────────────────
const blankZones = useBlankZones({
  onSetZones: (zones) => bridge.post({ type: 'set_zones', zones: toWorkerZones(zones) }),
  onAddZone: (zone) => bridge.post({ type: 'add_zone', zone: toWorkerZone(zone) }),
  onUpdateZone: (zone) => bridge.post({ type: 'update_zone', zone: toWorkerZone(zone) }),
  onRemoveZone: (id) => bridge.post({ type: 'remove_zone', id }),
  onClearZones: () => bridge.post({ type: 'clear_zones' }),
});
const decals = useDecals({
  onSetDecals: (d) => bridge.post({ type: 'set_decals', decals: toWorkerDecals(d) }),
  onAddDecal: (d) => bridge.post({ type: 'add_decal', decal: toWorkerDecal(d) }),
  onUpdateDecal: (d) => bridge.post({ type: 'update_decal', decal: toWorkerDecal(d) }),
  onRemoveDecal: (id) => bridge.post({ type: 'remove_decal', id }),
  onClearDecals: () => bridge.post({ type: 'clear_decals' }),
});
const hiRes = useHiRes({
  onAddRegion: (r) => bridge.post({ type: 'add_hires', region: { ...r } }),
  onUpdateRegion: (r) => bridge.post({ type: 'update_hires', region: { ...r } }),
  onRemoveRegion: (id) => bridge.post({ type: 'remove_hires', id }),
  onClearRegions: () => bridge.post({ type: 'clear_hires' }),
});
const textBlocks = useText({
  onSetBlocks: (blocks) => bridge.post({ type: 'set_text', blocks }),
  onAddBlock: (block) => bridge.post({ type: 'add_text', block }),
  onUpdateBlock: (block) => bridge.post({ type: 'update_text', block }),
  onRemoveBlock: (id) => bridge.post({ type: 'remove_text', id }),
  onClearBlocks: () => bridge.post({ type: 'clear_text' }),
});

// ── Tool state ──────────────────────────────────────────────────────────────
const zoneToolEnabled = ref(false);
const zoneSnapMajor = ref(false);
const decalToolEnabled = ref(false);
const decalSnapMajor = ref(false);
const hiresToolEnabled = ref(false);
const textToolEnabled = ref(false);
const zoneDraft = ref<BlankZoneDraft>({
  mode: 'both',
  edge: { style: 'none', widthCells: 1, opacity: 1 },
});
const textToolFont = ref(DEFAULT_FONT);
const textToolRenderMode = ref<TextRenderMode>('cells');
const textToolColor = ref(DEFAULT_TEXT_COLOR);
const hiresTextToolEnabled = ref(false);
const hiresTextFont = ref(DEFAULT_FONT);
const hiresTextRenderMode = ref<TextRenderMode>('cells');
const hiresTextColor = ref(DEFAULT_TEXT_COLOR);
const hiresTextShowGrid = ref(true);
const hiresTextShowBaseGrid = ref(true);
const hiresTextShowBorder = ref(true);

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

function makeDecalFromRect(rect: BlankZoneRect): Decal {
  const now = Date.now();
  return {
    id: crypto.randomUUID(),
    x1: rect.x1, y1: rect.y1, x2: rect.x2, y2: rect.y2,
    pattern: { kind: 'solid', coverage: 1.0, solidR: 0.49, solidG: 0.30, solidB: 1.0 },
    tint: [1, 1, 1, 1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: now,
    updatedAt: now,
  };
}

// ── Hi-res text helpers ─────────────────────────────────────────────────────
function estimateTextCellsHigh(_text: string, font: string, cellsWide: number): number {
  const REF = 'HgyjpqÑ|';
  const canvas = new OffscreenCanvas(cellsWide, 1);
  const ctx = canvas.getContext('2d')!;
  ctx.font = font;
  const metrics = ctx.measureText(REF);
  let fontH: number;
  const fbAsc = (metrics as any).fontBoundingBoxAscent;
  const fbDes = (metrics as any).fontBoundingBoxDescent;
  if (typeof fbAsc === 'number' && typeof fbDes === 'number' && isFinite(fbAsc) && isFinite(fbDes)) {
    fontH = fbAsc + fbDes;
  } else {
    const ascent = metrics.actualBoundingBoxAscent;
    const descent = metrics.actualBoundingBoxDescent;
    if (typeof ascent === 'number' && typeof descent === 'number' && isFinite(ascent) && isFinite(descent)) {
      fontH = ascent + descent;
    } else {
      const m = font.match(/(\d+(?:\.\d+)?)px/);
      fontH = m ? parseFloat(m[1]) * 1.2 : 16;
    }
  }
  const textMetrics = ctx.measureText(_text);
  const textW = Math.max(1, textMetrics.width);
  return Math.max(1, Math.ceil(cellsWide * (fontH / textW) * 1.1));
}

// ── Commit functions (text placement → feature creation) ────────────────────
function activeCommitFn(): () => void {
  return hiresTextToolEnabled.value ? commitHiResTextPlacement : commitTextPlacement;
}

function commitTextPlacement(): void {
  if (!textInput.anchor || !textInput.state.value.value.trim()) {
    textInput.cleanup();
    return;
  }
  const now = Date.now();
  textBlocks.addBlock({
    id: crypto.randomUUID(),
    text: textInput.state.value.value.trim(),
    font: textToolFont.value,
    cellX: textInput.anchor.cx,
    cellY: textInput.anchor.cy,
    cellsWide: textInput.cellsWide,
    renderMode: textToolRenderMode.value,
    color: textToolColor.value,
    enabled: true,
    createdAt: now,
    updatedAt: now,
  });
  textInput.cleanup();
}

function commitHiResTextPlacement(): void {
  if (!textInput.anchor) {
    textInput.cleanup();
    return;
  }
  const now = Date.now();
  const anchor = textInput.anchor;
  const cellsWide = textInput.cellsWide;
  const drawnCellsHigh = Math.max(1, textInput.cellsHigh);
  const text = textInput.state.value.value.trim();
  const cellsHigh = text
    ? estimateTextCellsHigh(text, hiresTextFont.value, cellsWide)
    : drawnCellsHigh;

  hiRes.addRegion({
    id: crypto.randomUUID(),
    x1: anchor.cx, y1: anchor.cy,
    x2: anchor.cx + cellsWide - 1, y2: anchor.cy + cellsHigh - 1,
    multiplier: HIRES_MULTIPLIER,
    enabled: true,
    showGrid: hiresTextShowGrid.value,
    showBaseGrid: hiresTextShowBaseGrid.value,
    showBorder: hiresTextShowBorder.value,
    tickMultiplier: 1,
    createdAt: now,
    updatedAt: now,
  });

  if (text) {
    textBlocks.addBlock({
      id: crypto.randomUUID(),
      text,
      font: hiresTextFont.value,
      cellX: anchor.cx,
      cellY: anchor.cy,
      cellsWide,
      renderMode: hiresTextRenderMode.value,
      color: hiresTextColor.value,
      enabled: true,
      createdAt: now,
      updatedAt: now,
    });
  }
  textInput.cleanup();
}

// ── Drag tool registration ──────────────────────────────────────────────────
drag.register('zone', {
  isEnabled: () => zoneToolEnabled.value,
  priority: 1,
  snapMajor: () => zoneSnapMajor.value,
  onCommit(rect) { blankZones.addZone(makeZoneFromRect(rect)); },
});
drag.register('decal', {
  isEnabled: () => decalToolEnabled.value,
  priority: 2,
  dragMode: 'paint',
  snapMajor: () => decalSnapMajor.value,
  onCommit(rect) { decals.addDecal(makeDecalFromRect(rect)); },
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
drag.register('text', {
  isEnabled: () => textToolEnabled.value,
  priority: 4,
  onCommit(rect) {
    const cellsWide = Math.max(MIN_TEXT_CELLS_WIDE, rect.x2 - rect.x1 + 1);
    textInput.show({ cx: rect.x1, cy: rect.y1 }, cellsWide, 0, coords.makeSnapshot());
    return false;
  },
});
drag.register('hires-text', {
  isEnabled: () => hiresTextToolEnabled.value,
  priority: 5,
  onCommit(rect) {
    const cellsWide = Math.max(MIN_TEXT_CELLS_WIDE, rect.x2 - rect.x1 + 1);
    const cellsHigh = Math.max(1, rect.y2 - rect.y1 + 1);
    textInput.show({ cx: rect.x1, cy: rect.y1 }, cellsWide, cellsHigh, coords.makeSnapshot());
    return false;
  },
});

// ── Panel event handlers ────────────────────────────────────────────────────
function onAddZone(zone: BlankZone): void { blankZones.addZone(zone); }
function onUpdateZone(zone: BlankZone): void { blankZones.updateZone(zone); }
function onRemoveZone(id: string): void { blankZones.removeZone(id); }
function onClearZones(): void { blankZones.clearZones(); }
function onAddDecal(decal: Decal): void { decals.addDecal(decal); }
function onUpdateDecal(decal: Decal): void { decals.updateDecal(decal); }
function onRemoveDecal(id: string): void { decals.removeDecal(id); }
function onClearDecals(): void { decals.clearDecals(); }
function onAddHiResRegion(region: HiResRegion): void { hiRes.addRegion(region); }
function onUpdateHiResRegion(region: HiResRegion): void { hiRes.updateRegion(region); }
function onRemoveHiResRegion(id: string): void { hiRes.removeRegion(id); }
function onClearHiResRegions(): void { hiRes.clearRegions(); }
function onAddText(block: TextBlock): void { textBlocks.addBlock(block); }
function onUpdateText(block: TextBlock): void { textBlocks.updateBlock(block); }
function onRemoveText(id: string): void { textBlocks.removeBlock(id); }
function onClearText(): void { textBlocks.clearBlocks(); }
function onDraftChange(draft: BlankZoneDraft): void { zoneDraft.value = draft; }

function onToolChange(payload: { enabled: boolean; snapMajor: boolean }): void {
  zoneToolEnabled.value = payload.enabled;
  zoneSnapMajor.value = payload.snapMajor;
  if (!payload.enabled) drag.cancelActiveDrag('zone');
}

function onDecalToolChange(payload: { enabled: boolean; snapMajor: boolean }): void {
  decalToolEnabled.value = payload.enabled;
  decalSnapMajor.value = payload.snapMajor;
  if (!payload.enabled) drag.cancelActiveDrag('decal');
}

function onHiResToolChange(payload: { enabled: boolean }): void {
  hiresToolEnabled.value = payload.enabled;
  if (!payload.enabled) drag.cancelActiveDrag('hires');
}

function onTextToolChange(payload: { enabled: boolean; font: string; renderMode: TextRenderMode; color: string }): void {
  textToolEnabled.value = payload.enabled;
  textToolFont.value = payload.font;
  textToolRenderMode.value = payload.renderMode;
  textToolColor.value = payload.color;
  if (!payload.enabled) {
    drag.cancelActiveDrag('text');
    textInput.cleanup();
  }
}

function onHiResTextToolChange(payload: HiResTextToolPayload): void {
  hiresTextToolEnabled.value = payload.enabled;
  hiresTextFont.value = payload.font;
  hiresTextRenderMode.value = payload.renderMode;
  hiresTextColor.value = payload.color;
  hiresTextShowGrid.value = payload.showGrid;
  hiresTextShowBaseGrid.value = payload.showBaseGrid;
  hiresTextShowBorder.value = payload.showBorder;
  if (!payload.enabled) {
    drag.cancelActiveDrag('hires-text');
    textInput.cleanup();
  }
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

// ── Text input click-away ───────────────────────────────────────────────────
function onTextInputClickAway(event: PointerEvent): void {
  if (textInput.state.visible.value && !textInput.isInsideInput(event.target)) {
    if (hiresTextToolEnabled.value) {
      commitHiResTextPlacement();
    } else if (textInput.state.value.value.trim()) {
      commitTextPlacement();
    } else {
      textInput.cleanup();
    }
  }
}

// ── Lifecycle ───────────────────────────────────────────────────────────────
let canvasW = 0;
let canvasH = 0;
let mainEl: HTMLElement | null = null;
let resizeObserver: ResizeObserver | null = null;
let detachDrag: (() => void) | null = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  canvasW = Math.round(window.innerWidth * devicePixelRatio);
  canvasH = Math.round(window.innerHeight * devicePixelRatio);
  canvas.width = canvasW;
  canvas.height = canvasH;
  log.debug('Canvas initialised', canvasW, 'x', canvasH, 'dpr', devicePixelRatio);

  const offscreen = canvas.transferControlToOffscreen();
  const gridPitch = alignedPitch(canvasW, TARGET_CELL_CSS_PX, devicePixelRatio);
  const marginCss = 0.8 * gridPitch * MAJOR_EVERY / devicePixelRatio;
  document.documentElement.style.setProperty('--grid-margin', `${marginCss.toFixed(1)}px`);

  bridge.init(offscreen, gridPitch);
  log.debug('Worker spawned, gridPitch', gridPitch.toFixed(2));

  // Worker message handlers
  bridge.on('ready', (msg) => {
    log.info(`${msg.backend.toUpperCase()} renderer active`);
    bridge.post({ type: 'set_zones', zones: toWorkerZones(blankZones.zones.value) });
    bridge.post({ type: 'set_decals', decals: toWorkerDecals(decals.decals.value) });
    if (hiRes.regions.value.length > 0) bridge.post({ type: 'set_hires_regions', regions: hiRes.regions.value.map((r) => ({ ...r })) });
    if (textBlocks.blocks.value.length > 0) bridge.post({ type: 'set_text', blocks: toRaw(textBlocks.blocks.value).map((b) => ({ ...toRaw(b) })) });
  });
  bridge.on('zones_state', (msg) => blankZones.syncFromWorker(msg.zones));
  bridge.on('zones_error', (msg) => log.error('Zone update rejected:', msg.message));
  bridge.on('decals_state', (msg) => decals.syncFromWorker(msg.decals));
  bridge.on('decals_error', (msg) => log.error('Decal update rejected:', msg.message));
  bridge.on('hires_state', (msg) => hiRes.syncFromWorker(msg.regions));
  bridge.on('text_state', (msg) => textBlocks.syncFromWorker(msg.blocks));
  bridge.on('text_error', (msg) => log.error('Text update rejected:', msg.message));
  bridge.on('error', (msg) => {
    if (msg.phase === 'gpu-init') {
      log.debug(`GPU unavailable (${msg.message}) — CPU fallback in progress`);
    } else {
      log.error(`Renderer error [${msg.phase}]:`, msg.message);
    }
  });

  // Event listeners
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('pointerdown', onTextInputClickAway);
  detachDrag = drag.attachListeners();

  // Animation loop with scroll tracking
  mainEl = document.querySelector<HTMLElement>('.v-main');
  let lastScrollPx = -1;
  anim.start(() => {
    bridge.post({ type: 'frame' });
    const rawPx = (mainEl?.scrollTop || window.scrollY);
    if (rawPx !== lastScrollPx) {
      lastScrollPx = rawPx;
      currentScrollCanvasPx.value = rawPx * devicePixelRatio;
      bridge.post({ type: 'scroll', scrollY: currentScrollCanvasPx.value });
      textInput.updateStyle();
    }
  });

  // Resize observer
  resizeObserver = new ResizeObserver(([entry]) => {
    const w = Math.round(entry.contentRect.width * devicePixelRatio);
    const h = Math.round(entry.contentRect.height * devicePixelRatio);
    if (w === canvasW && h === canvasH) return;
    canvasW = w;
    canvasH = h;
    const gp = alignedPitch(w, TARGET_CELL_CSS_PX, devicePixelRatio);
    document.documentElement.style.setProperty('--grid-margin', `${(0.8 * gp * MAJOR_EVERY / devicePixelRatio).toFixed(1)}px`);
    log.debug('Resize →', w, 'x', h);
    bridge.post({ type: 'resize', width: w, height: h });
  });
  resizeObserver.observe(canvas);
});

onUnmounted(() => {
  if (textInput.state.visible.value) textInput.cleanup();
  anim.stop();
  resizeObserver?.disconnect();
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('pointerdown', onTextInputClickAway);
  detachDrag?.();
  bridge.terminate();
  log.debug('Unmounted, worker terminated');
});
</script>

<template>
  <canvas ref="canvasRef" class="app-bg" />
  <div v-if="drag.previewStyle.value" class="zone-preview-overlay" :style="drag.previewStyle.value" />
  <textarea
    v-if="textInput.state.visible.value"
    ref="textInput.state.inputRef"
    v-model="textInput.state.value.value"
    class="text-placement-input"
    :style="textInput.state.style.value"
    placeholder="Type text..."
    @keydown="textInput.onKeydown($event, activeCommitFn())"
  />
  <GridBlankZonePanel
    :zones="blankZones.zones.value"
    :preview-rect="drag.previewRect.value"
    :decals="decals.decals.value"
    :hires-regions="hiRes.regions.value"
    :text-blocks="textBlocks.blocks.value"
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
    @add-hires-region="onAddHiResRegion"
    @update-hires-region="onUpdateHiResRegion"
    @remove-hires-region="onRemoveHiResRegion"
    @clear-hires-regions="onClearHiResRegions"
    @hires-tool-change="onHiResToolChange"
    @add-text="onAddText"
    @update-text="onUpdateText"
    @remove-text="onRemoveText"
    @clear-text="onClearText"
    @text-tool-change="onTextToolChange"
    @hires-text-tool-change="onHiResTextToolChange"
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

.text-placement-input {
  position: fixed;
  z-index: 25;
  background: rgba(255, 255, 255, 0.92);
  border: 2px solid rgba(20, 120, 250, 0.8);
  border-radius: 4px;
  padding: 4px 6px;
  font-family: monospace;
  font-size: 14px;
  color: #1a1a2e;
  resize: vertical;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
