# Audit 2: AppBackground.vue — 927-Line Monolith

## Problem Statement

`AppBackground.vue` handles canvas lifecycle, worker management, coordinate math, 5 drag tools, text input UX, composable wiring, and the animation loop. Every new feature adds 30–50 lines. The file is already past the project's 400-line guideline and growing.

---

## Responsibility Inventory

| # | Responsibility | Lines (approx) | State Vars | Functions |
|---|---------------|----------------|------------|-----------|
| 1 | Canvas lifecycle & resize | 60 | 4 | 3 |
| 2 | Worker lifecycle & message routing | 120 | 3 | 6 |
| 3 | Coordinate mapping (screen ↔ cell) | 45 | 0 | 4 |
| 4 | Zone drag tool | 80 | 3 | 3 |
| 5 | Decal drag tool | 80 | 3 | 3 |
| 6 | Hi-res drag tool | 80 | 3 | 3 |
| 7 | Text click-to-place tool | 110 | 6 | 7 |
| 8 | Composable wiring (zones, decals, hires, text) | 120 | 8 | 8 |
| 9 | Animation loop & tick control | 50 | 3 | 2 |
| **Total** | | **~745 logic** + template/style | **33+** | **39+** |

---

## State Variable Census

### Canvas & Layout
```typescript
canvasRef                // template ref
offscreen               // OffscreenCanvas (transferred to worker)
canvasWidth, canvasHeight // current dimensions
pixelRatio              // devicePixelRatio
```

### Worker
```typescript
worker                  // Worker instance
workerReady             // resolved when worker posts 'ready'
gridPitch               // cells pitch echoed back from worker
```

### Drag Tools (shared)
```typescript
activeDragTool          // 'zone' | 'decal' | 'hires' | 'text' | 'hires-text' | null
dragStart               // {x, y} screen coords
dragCurrent             // {x, y} screen coords
isDragging              // boolean
```

### Zone Tool
```typescript
zoneToolEnabled         // from GridZoneTab
```

### Decal Tool
```typescript
decalToolEnabled        // from GridDecalTab
decalToolImage          // selected image URL
```

### Hi-Res Tool
```typescript
hiresToolEnabled        // from GridHiResTab
hiresToolShowGrid       // region settings
hiresToolShowBaseGrid
hiresToolShowBorder
```

### Text Tool
```typescript
textToolEnabled
textInputVisible        // floating textarea shown
textInputValue          // textarea content
textInputStyle          // computed position/size
textInputRef            // template ref to textarea
textPlacementAnchor     // {cx, cy, screenX, screenY}
textPlacementCellsWide  // drawn width in cells
textFont, textRenderMode, textColor  // settings from tab
```

### Animation
```typescript
animationFrameId        // rAF handle
tickRate                // ms between ticks
lastTickTime            // timestamp of last tick
```

**Problem**: 33+ reactive variables in a single component scope. Any function can read/write any of them. No encapsulation boundaries.

---

## Function Dependency Map

```
onMounted()
  ├── initCanvas()
  │     └── createWorker()
  │           └── onWorkerMessage()
  │                 ├── handleWorkerReady()
  │                 ├── handleEcho() → composable.syncFromWorker()
  │                 └── handlePerfSnapshot()
  └── startAnimationLoop()
        └── tick()

onDocumentPointerDown()
  ├── anyToolEnabled() → activeDragTool selection
  ├── screenToCell()
  └── (click-away commit for text tool)

onDocumentPointerMove()
  └── updateDragPreview()

onDocumentPointerUp()
  ├── screenToCell() (start + end)
  ├── wrapCell()
  ├── commitZone()
  ├── commitDecal()
  ├── commitHiRes()
  └── showTextInput() → focus textarea

onTextInputKeydown()
  ├── commitTextPlacement()
  └── cancelTextPlacement()

updateTextInputStyle()  ← called on scroll, resize, drag
cleanupTextPlacement()  ← shared teardown

onResize()
  └── postWorkerMessage('resize', ...)
```

**Problem**: Functions like `onDocumentPointerUp()` contain a growing switch/if-chain over tool types. Each new tool adds a branch to 3+ functions (pointerDown, pointerMove, pointerUp).

---

## The Tool Dispatch Problem

Every pointer event handler has this pattern:

```typescript
function onDocumentPointerUp(event: PointerEvent) {
  if (activeDragTool.value === 'zone') {
    // 15 lines: compute rect, validate, add zone
  } else if (activeDragTool.value === 'decal') {
    // 15 lines: compute rect, validate, add decal
  } else if (activeDragTool.value === 'hires') {
    // 15 lines: compute rect, validate, add region
  } else if (activeDragTool.value === 'text') {
    // 20 lines: compute rect, show textarea, focus
  } else if (activeDragTool.value === 'hires-text') {
    // 25 lines: compute rect, show textarea, focus, store height
  }
  // ... cleanup
}
```

Adding a 6th tool means editing `onDocumentPointerDown`, `onDocumentPointerMove`, `onDocumentPointerUp`, and `anyToolEnabled`. Four places to touch, each with a growing if-chain.

---

## Composable Wiring Overhead

Each feature composable is wired identically:

```typescript
// 1. Import composable
const zones = useZones();
const decals = useDecals();
const hiRes = useHiRes();
const textBlocks = useTextBlocks();

// 2. Watch for changes → post to worker
watch(zones.items, (items) => {
  postWorkerMessage('set_zones', normalizeZones(items));
}, { deep: true });

// 3. Handle echo from worker
function handleEcho(type: string, data: unknown) {
  if (type === 'zones') zones.syncFromWorker(data);
  if (type === 'decals') decals.syncFromWorker(data);
  // ...
}
```

This pattern repeats 4 times and will repeat for every new feature. It's pure boilerplate.

---

## Extraction Plan

### 1. `useCanvasLifecycle()` (~60 lines)
Owns: `canvasRef`, `offscreen`, `canvasWidth`, `canvasHeight`, `pixelRatio`
Exposes: `canvasRef`, `dimensions`, `onResize` event

### 2. `useWorkerBridge()` (~120 lines)
Owns: `worker`, `workerReady`, message routing
Exposes: `postMessage()`, `onMessage(type, handler)`, `isReady`
Benefit: Worker lifecycle and message protocol in one place

### 3. `useCoordinateMapper(grid)` (~45 lines)
Owns: no state (pure functions + grid ref)
Exposes: `screenToCell()`, `cellToScreen()`, `wrapCell()`
Benefit: Coordinate math testable in isolation

### 4. `useDragTools(coordinateMapper)` (~200 lines)
Owns: `activeDragTool`, `dragStart`, `dragCurrent`, `isDragging`
Exposes: `registerTool(name, handlers)`, pointer event handlers
Benefit: New tools register callbacks instead of adding if-branches

```typescript
// Each tool registers its own handlers:
dragTools.registerTool('zone', {
  onCommit(rect) { zones.addZone(normalizeRect(rect)); },
  isEnabled: () => zoneToolEnabled.value,
});
```

### 5. `useTextInput(coordinateMapper)` (~110 lines)
Owns: `textInputVisible`, `textInputValue`, `textInputStyle`, `textInputRef`, `textPlacementAnchor`, `textPlacementCellsWide`
Exposes: `showInput(anchor, cellsWide)`, `commitInput()`, `cancelInput()`, `onKeydown()`
Benefit: Floating textarea logic fully encapsulated

### 6. `useFeatureSync(workerBridge)` (~80 lines)
Owns: watch/echo wiring for all feature composables
Exposes: `registerFeature(name, composable, normalizer)`
Benefit: Eliminates 4x watch + echo boilerplate

### 7. `useAnimationLoop()` (~50 lines)
Owns: `animationFrameId`, `tickRate`, `lastTickTime`
Exposes: `start()`, `stop()`, `setTickRate()`

### 8. `useClickToToggle(workerBridge, coordinateMapper)` (~30 lines)
Owns: click handler for cell toggling
Exposes: registered on canvas

### Result

```
AppBackground.vue (target ~120 lines)
  ├── useCanvasLifecycle()
  ├── useWorkerBridge()
  ├── useCoordinateMapper()
  ├── useDragTools()
  ├── useTextInput()
  ├── useFeatureSync()
  ├── useAnimationLoop()
  └── useClickToToggle()
```

AppBackground becomes a thin wiring layer: mount canvas, create worker, register tools, start loop. Template stays the same (canvas + floating textarea + slot for panel).

---

## Migration Strategy

### Phase 1: Extract without changing behavior
1. Extract `useCoordinateMapper()` first (pure functions, no risk)
2. Extract `useWorkerBridge()` (encapsulate worker lifecycle)
3. Extract `useAnimationLoop()` (simple state machine)

### Phase 2: Refactor tool dispatch
4. Extract `useTextInput()` (isolate textarea state)
5. Extract `useDragTools()` with registration pattern
6. Convert existing tools to registered handlers

### Phase 3: Reduce wiring boilerplate
7. Extract `useFeatureSync()` with generic registration
8. Final cleanup of AppBackground.vue

Each phase is independently shippable. No behavior changes — pure extraction refactors.

---

## Risk: Shared Mutable State

The biggest challenge is that many functions share implicit state. For example:
- `onDocumentPointerUp()` reads `activeDragTool`, `dragStart`, `dragCurrent`, AND composable refs
- `updateTextInputStyle()` reads `textPlacementAnchor`, `canvasRef`, `gridPitch`
- `commitTextPlacement()` reads text input state AND composable refs

The extraction must carefully define which composable owns which state, and pass dependencies explicitly rather than relying on closure over component scope. The `useDragTools` registration pattern solves this by injecting callbacks rather than sharing refs.
