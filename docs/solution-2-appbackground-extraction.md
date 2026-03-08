# Solution 2: Extracting AppBackground.vue

## Goal

Break the 928-line monolith into focused composables. Target: AppBackground.vue under 200 lines, acting as a thin wiring layer. No behavior changes — pure extraction refactor.

---

## Extraction Order

Extract in dependency order. Each step is independently shippable and testable.

```
Step 1: useCoordinateMapper    (pure functions, zero risk)
Step 2: useWorkerBridge        (encapsulate worker lifecycle)
Step 3: useAnimationLoop       (simple state machine)
Step 4: useFeatureSync         (eliminate 4x watch/echo boilerplate)
Step 5: useTextInput           (isolate floating textarea)
Step 6: useDragTools           (registration-based tool dispatch)
Step 7: Final cleanup          (AppBackground.vue < 200 lines)
```

---

## Step 1: useCoordinateMapper

**File:** `app/src/composables/useCoordinateMapper.ts` (~50 lines)

This is a thin wrapper around `gridCoords.ts` that binds to reactive grid state. Currently `makeSnapshot()`, `worldZoneCellFromPointer()`, `normalizeRect()`, `snapRectToMajor()` are inline functions in AppBackground.vue.

```typescript
import { type Ref } from 'vue';
import {
  type CoordSnapshot, type CellCoord,
  alignedPitch, screenToCell, wrapCell, cellToScreen, cellSpanToCssPx,
} from '../utils/gridCoords';
import type { GridInfo } from '../workers/rendererProtocol';

interface CoordinateMapper {
  /** Build a snapshot from current grid state. */
  makeSnapshot(): CoordSnapshot | null;
  /** Convert pointer event to cell coordinates. */
  pointerToCell(e: PointerEvent, snap?: CoordSnapshot): CellCoord | null;
  /** Wrap cell coordinates to grid bounds. */
  wrapCell(coord: CellCoord, snap: CoordSnapshot): CellCoord;
  /** Convert cell to screen CSS position. */
  cellToScreen(cx: number, cy: number, snap: CoordSnapshot): { cssX: number; cssY: number };
  /** Convert cell count to CSS pixels. */
  cellSpanToCssPx(count: number, snap: CoordSnapshot): number;
  /** Normalize a rect so x1<=x2, y1<=y2. */
  normalizeRect(c1: CellCoord, c2: CellCoord): { x1: number; y1: number; x2: number; y2: number };
  /** Snap rect corners to major grid. */
  snapToMajor(rect: { x1: number; y1: number; x2: number; y2: number }, majorEvery: number): typeof rect;
}

export function useCoordinateMapper(
  gridInfo: Ref<GridInfo | null>,
  scrollCanvasPx: Ref<number>,
  canvasEl: Ref<HTMLCanvasElement | null>,
): CoordinateMapper {
  function makeSnapshot(): CoordSnapshot | null {
    const g = gridInfo.value;
    if (!g) return null;
    return {
      gridPitch: g.gridPitch,
      scrollCanvasPx: scrollCanvasPx.value,
      dpr: window.devicePixelRatio || 1,
      screenCols: g.screenCols,
      screenRows: g.screenRows,
    };
  }

  function pointerToCell(e: PointerEvent, snap?: CoordSnapshot): CellCoord | null {
    const s = snap ?? makeSnapshot();
    if (!s) return null;
    return screenToCell(e.clientX, e.clientY, s);
  }

  // ... rest wraps gridCoords functions with snapshot management

  return { makeSnapshot, pointerToCell, wrapCell: wrapCell, cellToScreen, cellSpanToCssPx, normalizeRect, snapToMajor };
}
```

**Migration:** Replace all inline coordinate functions in AppBackground with calls to the composable. Import `useCoordinateMapper` and destructure.

---

## Step 2: useWorkerBridge

**File:** `app/src/composables/useWorkerBridge.ts` (~100 lines)

Encapsulates worker creation, message posting, and message routing. Currently scattered across `onMounted()` (worker init + message handler) and `postToWorker()`.

```typescript
import { ref, onUnmounted } from 'vue';
import type { WorkerInMsg, WorkerOutMsg, GridInfo } from '../workers/rendererProtocol';

type MessageHandler = (data: WorkerOutMsg) => void;

interface WorkerBridge {
  /** Post a message to the worker. */
  post(msg: WorkerInMsg, transfer?: Transferable[]): void;
  /** Register a handler for a specific message type. Returns unregister function. */
  on(type: string, handler: (payload: any) => void): () => void;
  /** Grid info from the worker (updated on 'ready' and 'grid_info' messages). */
  gridInfo: Ref<GridInfo | null>;
  /** Whether the worker has sent 'ready'. */
  isReady: Ref<boolean>;
  /** Initialize with an OffscreenCanvas. */
  init(canvas: OffscreenCanvas, cellPx: number): void;
  /** Terminate the worker. */
  terminate(): void;
}

export function useWorkerBridge(): WorkerBridge {
  const worker = ref<Worker | null>(null);
  const gridInfo = ref<GridInfo | null>(null);
  const isReady = ref(false);
  const handlers = new Map<string, Set<MessageHandler>>();

  function post(msg: WorkerInMsg, transfer?: Transferable[]): void {
    worker.value?.postMessage(msg, transfer ?? []);
  }

  function on(type: string, handler: (payload: any) => void): () => void {
    if (!handlers.has(type)) handlers.set(type, new Set());
    handlers.get(type)!.add(handler);
    return () => handlers.get(type)?.delete(handler);
  }

  function init(canvas: OffscreenCanvas, cellPx: number): void {
    const w = new Worker(
      new URL('../workers/backgroundRenderer.ts', import.meta.url),
      { type: 'module' },
    );
    w.onmessage = (e: MessageEvent<WorkerOutMsg>) => {
      const msg = e.data;
      if (msg.type === 'ready' || msg.type === 'grid_info') {
        gridInfo.value = msg.gridInfo;
        if (msg.type === 'ready') isReady.value = true;
      }
      const typeHandlers = handlers.get(msg.type);
      if (typeHandlers) {
        for (const h of typeHandlers) h(msg);
      }
    };
    w.postMessage({ type: 'init', canvas, cellPx }, [canvas]);
    worker.value = w;
  }

  function terminate(): void {
    worker.value?.terminate();
    worker.value = null;
  }

  onUnmounted(terminate);

  return { post, on, gridInfo, isReady, init, terminate };
}
```

**Migration:**
1. Replace inline worker creation in `onMounted()` with `bridge.init()`
2. Replace `postToWorker()` with `bridge.post()`
3. Replace inline message handler `switch` with `bridge.on()` registrations
4. Each feature sync registers its own handler: `bridge.on('zones_state', ...)`

---

## Step 3: useAnimationLoop

**File:** `app/src/composables/useAnimationLoop.ts` (~45 lines)

```typescript
import { onUnmounted } from 'vue';

interface AnimationLoop {
  start(onFrame: () => void): void;
  stop(): void;
}

export function useAnimationLoop(): AnimationLoop {
  let animFrameId = 0;

  function start(onFrame: () => void): void {
    function loop(): void {
      onFrame();
      animFrameId = requestAnimationFrame(loop);
    }
    animFrameId = requestAnimationFrame(loop);
  }

  function stop(): void {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = 0;
    }
  }

  onUnmounted(stop);

  return { start, stop };
}
```

**Migration:** Replace inline `requestAnimationFrame` loop and `animFrameId` management.

---

## Step 4: useFeatureSync

**File:** `app/src/composables/useFeatureSync.ts` (~70 lines)

Eliminates the repeated pattern of: watch composable → post to worker, handle echo → sync from worker.

```typescript
import { watch, type Ref } from 'vue';
import type { WorkerBridge } from './useWorkerBridge';

interface FeatureRegistration<T> {
  /** Composable items ref. */
  items: Ref<T[]>;
  /** Worker message type for setting all items. */
  setType: string;
  /** Worker echo message type. */
  echoType: string;
  /** Error message type (optional). */
  errorType?: string;
  /** Normalize function for incoming data. */
  normalize: (raw: unknown) => T[];
  /** Sync composable from worker echo. */
  syncFromWorker: (items: T[]) => void;
  /** Serialize items for worker. */
  serialize: (items: T[]) => unknown;
}

export function useFeatureSync(bridge: WorkerBridge) {
  function register<T>(config: FeatureRegistration<T>): () => void {
    // Watch composable → post to worker
    const stopWatch = watch(
      config.items,
      (items) => {
        bridge.post({
          type: config.setType,
          ...config.serialize(items),
        } as any);
      },
      { deep: true },
    );

    // Handle echo from worker
    const offEcho = bridge.on(config.echoType, (msg: any) => {
      const normalized = config.normalize(msg.items ?? msg.zones ?? msg.decals ?? msg.regions ?? msg.blocks);
      config.syncFromWorker(normalized);
    });

    // Handle errors
    let offError: (() => void) | undefined;
    if (config.errorType) {
      offError = bridge.on(config.errorType, (msg: any) => {
        console.warn(`[${config.errorType}]`, msg.error);
      });
    }

    // Initial sync when worker is ready
    const offReady = bridge.on('ready', () => {
      bridge.post({
        type: config.setType,
        ...config.serialize(config.items.value),
      } as any);
    });

    return () => {
      stopWatch();
      offEcho();
      offError?.();
      offReady();
    };
  }

  return { register };
}
```

**Usage in AppBackground.vue:**

```typescript
const featureSync = useFeatureSync(bridge);

// One line per feature instead of ~30 lines each
featureSync.register({
  items: blankZones.zones,
  setType: 'set_zones',
  echoType: 'zones_state',
  errorType: 'zones_error',
  normalize: normalizeZones,
  syncFromWorker: blankZones.syncFromWorker,
  serialize: (zones) => ({ zones }),
});
// ... same for decals, hires, text
```

**Impact:** Eliminates ~120 lines of repeated watch/echo wiring from AppBackground.vue.

---

## Step 5: useTextInput

**File:** `app/src/composables/useTextInput.ts` (~100 lines)

Encapsulates the floating textarea lifecycle: positioning, focus, keydown handling, commit/cancel.

```typescript
import { ref, nextTick, type Ref } from 'vue';
import type { CoordinateMapper } from './useCoordinateMapper';

interface TextPlacementAnchor {
  cx: number;
  cy: number;
  screenX: number;
  screenY: number;
}

interface TextInputState {
  visible: Ref<boolean>;
  value: Ref<string>;
  style: Ref<Record<string, string>>;
  inputRef: Ref<HTMLTextAreaElement | null>;
  anchor: TextPlacementAnchor | null;
  cellsWide: number;
  cellsHigh: number;
}

interface TextInput {
  state: TextInputState;
  /** Show the textarea at the given anchor point. */
  show(anchor: TextPlacementAnchor, cellsWide: number, cellsHigh: number): void;
  /** Update position (call on scroll/resize). */
  updateStyle(): void;
  /** Cancel without committing. */
  cancel(): void;
  /** Clean up state. */
  cleanup(): void;
  /** Handle keydown (Enter to commit, Escape to cancel). */
  onKeydown(event: KeyboardEvent, commitFn: () => void): void;
  /** Check if a click target is inside the text input. */
  isInsideInput(target: EventTarget | null): boolean;
}

export function useTextInput(coords: CoordinateMapper): TextInput {
  const visible = ref(false);
  const value = ref('');
  const style = ref<Record<string, string>>({});
  const inputRef = ref<HTMLTextAreaElement | null>(null);
  let anchor: TextPlacementAnchor | null = null;
  let cellsWide = 0;
  let cellsHigh = 0;

  function show(a: TextPlacementAnchor, w: number, h: number): void {
    anchor = a;
    cellsWide = w;
    cellsHigh = h;
    value.value = '';
    visible.value = true;
    updateStyle();
    nextTick(() => inputRef.value?.focus());
  }

  function updateStyle(): void {
    if (!anchor) return;
    const snap = coords.makeSnapshot();
    if (!snap) return;
    const pos = coords.cellToScreen(anchor.cx, anchor.cy, snap);
    const widthPx = coords.cellSpanToCssPx(cellsWide, snap);
    const heightPx = coords.cellSpanToCssPx(cellsHigh, snap);
    style.value = {
      position: 'fixed',
      left: `${pos.cssX}px`,
      top: `${pos.cssY}px`,
      width: `${widthPx}px`,
      height: `${heightPx}px`,
      zIndex: '9999',
    };
  }

  function cancel(): void {
    cleanup();
  }

  function cleanup(): void {
    visible.value = false;
    value.value = '';
    anchor = null;
    cellsWide = 0;
    cellsHigh = 0;
  }

  function onKeydown(event: KeyboardEvent, commitFn: () => void): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      commitFn();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      cancel();
    }
  }

  function isInsideInput(target: EventTarget | null): boolean {
    return target === inputRef.value;
  }

  return {
    state: { visible, value, style, inputRef, get anchor() { return anchor; }, get cellsWide() { return cellsWide; }, get cellsHigh() { return cellsHigh; } } as TextInputState,
    show, updateStyle, cancel, cleanup, onKeydown, isInsideInput,
  };
}
```

**Migration:** Move all `textInput*`, `textPlacement*`, `updateTextInputStyle()`, `commitTextPlacement()`, `cancelTextPlacement()`, `cleanupTextPlacement()` out of AppBackground.vue.

---

## Step 6: useDragTools

**File:** `app/src/composables/useDragTools.ts` (~120 lines)

Replaces the growing if-chain in pointer event handlers with a registration pattern.

```typescript
import { ref, type Ref } from 'vue';
import type { CoordinateMapper } from './useCoordinateMapper';
import type { CellCoord } from '../utils/gridCoords';

interface DragRect {
  x1: number; y1: number; x2: number; y2: number;
}

interface DragToolHandlers {
  /** Called when drag completes. Return false to keep drag state (e.g., for text input). */
  onCommit(rect: DragRect, startCell: CellCoord, endCell: CellCoord): boolean | void;
  /** Whether this tool is currently enabled. */
  isEnabled(): boolean;
  /** Priority (higher = checked first in pointer down). */
  priority?: number;
  /** Whether to snap to major grid. */
  snapMajor?: () => number | false;
  /** Custom preview style (optional). */
  onPreview?: (rect: DragRect, snap: any) => Record<string, string> | null;
}

interface DragTools {
  /** Register a named tool. */
  register(name: string, handlers: DragToolHandlers): void;
  /** Active tool name (null if no drag in progress). */
  activeTool: Ref<string | null>;
  /** Preview rectangle style for the template. */
  previewStyle: Ref<Record<string, string> | null>;
  /** Attach to document pointer events. Call in onMounted. */
  attachListeners(): () => void;
}

export function useDragTools(coords: CoordinateMapper): DragTools {
  const tools = new Map<string, DragToolHandlers>();
  const activeTool = ref<string | null>(null);
  const previewStyle = ref<Record<string, string> | null>(null);
  let dragStart: { x: number; y: number } | null = null;

  function register(name: string, handlers: DragToolHandlers): void {
    tools.set(name, handlers);
  }

  function onPointerDown(e: PointerEvent): void {
    // Find highest-priority enabled tool
    const sorted = [...tools.entries()]
      .filter(([, h]) => h.isEnabled())
      .sort((a, b) => (b[1].priority ?? 0) - (a[1].priority ?? 0));
    if (sorted.length === 0) return;

    const [name] = sorted[0];
    activeTool.value = name;
    dragStart = { x: e.clientX, y: e.clientY };
  }

  function onPointerMove(e: PointerEvent): void {
    if (!activeTool.value || !dragStart) return;
    const handler = tools.get(activeTool.value);
    if (!handler) return;

    const snap = coords.makeSnapshot();
    if (!snap) return;

    const startCell = coords.pointerToCell({ clientX: dragStart.x, clientY: dragStart.y } as PointerEvent);
    const endCell = coords.pointerToCell(e);
    if (!startCell || !endCell) return;

    let rect = coords.normalizeRect(startCell, endCell);
    const snapMajor = handler.snapMajor?.();
    if (snapMajor) rect = coords.snapToMajor(rect, snapMajor);

    if (handler.onPreview) {
      previewStyle.value = handler.onPreview(rect, snap);
    }
  }

  function onPointerUp(e: PointerEvent): void {
    if (!activeTool.value || !dragStart) return;
    const handler = tools.get(activeTool.value);
    if (!handler) { reset(); return; }

    const startCell = coords.pointerToCell({ clientX: dragStart.x, clientY: dragStart.y } as PointerEvent);
    const endCell = coords.pointerToCell(e);
    if (!startCell || !endCell) { reset(); return; }

    let rect = coords.normalizeRect(startCell, endCell);
    const snapMajor = handler.snapMajor?.();
    if (snapMajor) rect = coords.snapToMajor(rect, snapMajor);

    const keepState = handler.onCommit(rect, startCell, endCell) === false;
    if (!keepState) reset();
  }

  function reset(): void {
    activeTool.value = null;
    dragStart = null;
    previewStyle.value = null;
  }

  function attachListeners(): () => void {
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
    };
  }

  return { register, activeTool, previewStyle, attachListeners };
}
```

**Tool registration in AppBackground.vue:**

```typescript
const dragTools = useDragTools(coords);

// Zone tool
dragTools.register('zone', {
  isEnabled: () => zoneToolEnabled.value,
  priority: 1,
  snapMajor: () => activeSnapMajor(),
  onCommit(rect) {
    blankZones.addZone(makeZoneFromRect(rect));
  },
});

// Decal tool
dragTools.register('decal', {
  isEnabled: () => decalToolEnabled.value,
  priority: 2,
  snapMajor: () => activeSnapMajor(),
  onCommit(rect) {
    decals.addDecal(makeDecalFromRect(rect));
  },
});

// Hi-res tool
dragTools.register('hires', {
  isEnabled: () => hiresToolEnabled.value,
  priority: 3,
  onCommit(rect) {
    hiRes.addRegion(makeRegionFromRect(rect));
  },
});

// Text tool — returns false to keep drag state (show textarea)
dragTools.register('text', {
  isEnabled: () => textToolEnabled.value,
  priority: 4,
  onCommit(rect, startCell) {
    textInput.show(
      { cx: rect.x1, cy: rect.y1, screenX: 0, screenY: 0 },
      rect.x2 - rect.x1 + 1,
      rect.y2 - rect.y1 + 1,
    );
    return false; // keep drag state — textarea needs it
  },
});
```

**Impact:** Eliminates the 3 if-chain functions (`onDocumentPointerDown`, `onDocumentPointerMove`, `onDocumentPointerUp`) from AppBackground.vue. Adding a new tool is one `register()` call.

---

## Step 7: Final AppBackground.vue

After all extractions, AppBackground.vue becomes:

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useCoordinateMapper } from '../composables/useCoordinateMapper';
import { useWorkerBridge } from '../composables/useWorkerBridge';
import { useAnimationLoop } from '../composables/useAnimationLoop';
import { useFeatureSync } from '../composables/useFeatureSync';
import { useTextInput } from '../composables/useTextInput';
import { useDragTools } from '../composables/useDragTools';
import { useBlankZones } from '../composables/useBlankZones';
import { useDecals } from '../composables/useDecals';
import { useHiRes } from '../composables/useHiRes';
import { useText } from '../composables/useText';
import GridBlankZonePanel from './GridBlankZonePanel.vue';

// --- Composables ---
const canvasRef = ref<HTMLCanvasElement | null>(null);
const scrollCanvasPx = ref(0);

const bridge = useWorkerBridge();
const coords = useCoordinateMapper(bridge.gridInfo, scrollCanvasPx, canvasRef);
const anim = useAnimationLoop();
const textInput = useTextInput(coords);
const dragTools = useDragTools(coords);

const blankZones = useBlankZones();
const decals = useDecals();
const hiRes = useHiRes();
const textBlocks = useText();

// --- Feature sync (composable → worker → echo) ---
const featureSync = useFeatureSync(bridge);
// ... 4 register() calls ...

// --- Tool registration ---
const zoneToolEnabled = ref(false);
const decalToolEnabled = ref(false);
const hiresToolEnabled = ref(false);
const textToolEnabled = ref(false);
// ... register() calls for each tool ...

// --- Lifecycle ---
onMounted(() => {
  const canvas = canvasRef.value!;
  const offscreen = canvas.transferControlToOffscreen();
  bridge.init(offscreen, TARGET_CELL_PX);

  const detachDrag = dragTools.attachListeners();
  anim.start(() => bridge.post({ type: 'frame' }));

  onUnmounted(detachDrag);
});

// --- Event handlers from panel ---
function onAddZone(zone: BlankZone) { blankZones.addZone(zone); }
function onUpdateZone(zone: BlankZone) { blankZones.updateZone(zone); }
// ... thin forwarding for panel events ...
</script>

<template>
  <canvas ref="canvasRef" class="app-background" />
  <div v-if="dragTools.previewStyle.value" :style="dragTools.previewStyle.value" class="zone-preview" />
  <textarea
    v-if="textInput.state.visible.value"
    ref="textInput.state.inputRef"
    v-model="textInput.state.value.value"
    :style="textInput.state.style.value"
    @keydown="textInput.onKeydown($event, commitCurrentText)"
  />
  <GridBlankZonePanel
    @add-zone="onAddZone"
    @update-zone="onUpdateZone"
    ...
  />
</template>
```

**Estimated size: ~180 lines** (down from 928).

---

## File Summary

| File | Lines | Status |
|------|-------|--------|
| `useCoordinateMapper.ts` | ~50 | New |
| `useWorkerBridge.ts` | ~100 | New |
| `useAnimationLoop.ts` | ~45 | New |
| `useFeatureSync.ts` | ~70 | New |
| `useTextInput.ts` | ~100 | New |
| `useDragTools.ts` | ~120 | New |
| `AppBackground.vue` | ~180 | Reduced from 928 |
| **Total** | ~665 | Same functionality, better organized |

Net change: +665 (new composables) – 928 (old monolith) + 180 (new monolith) = -83 lines. Slightly less code overall, dramatically better organization.
