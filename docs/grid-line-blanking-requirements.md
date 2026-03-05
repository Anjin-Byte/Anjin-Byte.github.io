# Grid-Line Blanking Zones (Polished Version)

## Goal
Allow selective suppression of rendered grid lines (major/minor) over user-defined cell regions, without changing Game of Life cell state.

This is a visual-layer feature only. Cells still simulate and render ink normally.

## Current Baseline
- Main thread already maps pointer coordinates to wrapped cell coords.
- Worker protocol already carries edit-style messages.
- GPU renderer and shader already separate grid-line coverage from cell ink.

The polished feature should extend these paths, not replace them.

## User Outcomes
- User can blank grid lines around a selected region in one action.
- User can choose blanking mode:
  - `minor`: hide minor lines only.
  - `major`: hide major lines only.
  - `both`: hide both major and minor lines.
- User can define regions by:
  - drag-select rectangle in cell coordinates,
  - major-block snap mode (5x5 cell alignment),
  - explicit coordinate entry.
- User can remove, edit, and toggle existing blank zones.
- User can configure boundary behavior for each zone edge:
  - no edge rendering,
  - bold major-line edge,
  - fade edge,
  - noted/hatched edge.
- Zones persist across reloads.

## Feature Scope
### In Scope
- Rectangular zones in cell-space with wrap-aware rendering.
- Multiple zones active simultaneously.
- Add/remove/update zone operations.
- Local persistence (`localStorage`).
- Immediate visual update after zone changes.
- Resize-safe behavior (zones remain valid in wrapped cell-space).

### Out of Scope (V1)
- Arbitrary polygons/freehand masks.
- Cloud sync/backend persistence.
- Per-zone animation effects.
- CPU fallback parity for advanced zone rendering (if backend is CPU, degrade gracefully to no zone masking).

## Data Model
```ts
type BlankMode = 'minor' | 'major' | 'both';
type EdgeStyle = 'none' | 'bold-major' | 'fade' | 'noted';

interface ZoneEdgeBehavior {
  style: EdgeStyle;
  widthCells: number;      // default 1, range 1..4
  opacity: number;         // default 1.0, range 0..1
  // Used only by style='fade'. 0=no blend, 1=full soft transition.
  fadeStrength?: number;   // default 0.6
  // Used only by style='noted'. Pattern draws in cell-aligned coordinates.
  notePitchCells?: number; // default 2
  noteAngleDeg?: number;   // default 45
}

interface BlankZone {
  id: string;            // stable UUID
  x1: number;            // inclusive cell col
  y1: number;            // inclusive cell row
  x2: number;            // inclusive cell col
  y2: number;            // inclusive cell row
  mode: BlankMode;
  edge: ZoneEdgeBehavior;
  enabled: boolean;
  createdAt: number;     // epoch ms
  updatedAt: number;     // epoch ms
}
```

Normalization rules:
- Store normalized rectangles (`x1 <= x2`, `y1 <= y2`) in wrapped visible grid coordinates.
- Clamp/wrap all coordinates before persist/send.
- Limit max active zones (default: 128) to cap shader cost.
- Normalize edge config values to defaults and valid ranges.

## UX Requirements
### Interaction
- Add zone:
  - pointer-down sets anchor cell,
  - pointer-move previews rectangle,
  - pointer-up commits zone.
- Modifier/snap:
  - major snap mode aligns rectangle edges to 5-cell boundaries.
- Edit zone:
  - select zone from list,
  - toggle `enabled`,
  - change mode (`minor`/`major`/`both`),
  - choose edge style (`none`/`bold-major`/`fade`/`noted`),
  - edit edge params (width, opacity, style-specific controls),
  - delete zone.
- Explicit coordinates:
  - form input `(x1,y1,x2,y2,mode,edge)` with validation and preview.

### Safety/Usability
- Do not trigger zone edits when clicking interactive UI controls.
- Provide clear “Zone Tool” on/off state so normal click-to-toggle-cell behavior does not conflict.
- Show non-blocking validation errors for invalid coordinate input.
- Preview edge result before commit when dragging or editing values.

## Rendering/Shader Requirements
### High-level
- Keep existing grid coverage math.
- Introduce per-fragment `zone_mask_minor` and `zone_mask_major`.
- Apply masks before dye transmittance mix:
  - `minor_cov *= zone_mask_minor`
  - `major_cov *= zone_mask_major`
- Add edge overlay stage after base grid masking and before cell ink mix.

### Edge treatment behavior
- Interior of zone obeys blank mode (`minor`/`major`/`both`) as defined above.
- Boundary band is computed in cell-space using distance to rectangle edge.
- Edge style semantics:
  - `none`: no additional boundary rendering.
  - `bold-major`: force visible major-style line around boundary regardless of interior masking.
  - `fade`: interpolate grid visibility across boundary band (outside -> inside).
  - `noted`: draw patterned boundary marks (hatched/dashed) aligned to cell grid.
- Edge precedence:
  - edge rendering can add visibility even when interior mode hides that line type.
  - if overlapping zones disagree, strongest visible edge wins in this order:
    `bold-major` > `noted` > `fade` > `none`.

### Zone evaluation
- Pass zone list to shader via storage buffer or compact uniform-backed fixed array.
- For each fragment, derive wrapped cell coordinate exactly as current shader logic does.
- Determine whether fragment cell lies inside any enabled zone:
  - if mode `minor`, zero minor only,
  - if mode `major`, zero major only,
  - if mode `both`, zero both.
- Compute edge contribution separately and blend with masked coverage according to style.

### Performance constraints
- Target 60 FPS on typical desktop for <= 64 zones.
- Hard cap zones and short-circuit loop at active count.
- Prefer branch-light evaluation and fixed upper loop bound in WGSL.
- Edge calculations must not reduce baseline framerate by more than 10% at 64 zones.

## Worker/API Requirements
Extend worker protocol with zone operations:
- `set_zones` (replace all),
- `add_zone`,
- `update_zone`,
- `remove_zone`,
- `clear_zones`.

Worker responsibilities:
- Validate/sanitize incoming zones.
- Push sanitized zone buffer to GPU renderer.
- Emit updated zone state (or ack) to main thread.
- Return explicit validation errors for unsupported edge configs.

## Persistence Requirements
### Local storage
- Storage key: `gol.gridBlankZones.v1`.
- Persist only sanitized zone data.
- Load during app init before first interactive frame.
- If parsing fails or schema mismatches, fallback to empty list.

### Versioning
- Include `version` field in serialized payload.
- On future schema changes, migrate or drop with telemetry/log warning.
- Include edge behavior parameters in serialized schema.

## Conflict Rules
- Zone masking affects only line rendering, never cell state.
- Cell toggle/edit features continue to work inside blank zones.
- Overlapping zones combine by most suppressive result:
  - if any overlapping zone suppresses a line type, that type is hidden.
- Edge rendering composes after suppression and may restore line visibility in the boundary band.

## Validation Rules
- Coordinates must be finite integers after normalization.
- Rectangle area must be >= 1 cell.
- Reject zones fully outside wrapped range after normalization.
- Enforce max-zone limit with user-visible warning.
- `widthCells` must be integer in [1, 4].
- `opacity` and `fadeStrength` must be clamped to [0, 1].
- `notePitchCells` must be integer >= 1.

## Acceptance Criteria
1. User can create a rectangle and immediately see grid lines hidden within it.
2. Mode `minor` hides only minor lines; `major` hides only major lines; `both` hides both.
3. Zones survive full page reload.
4. Removing a zone restores lines on next render frame.
5. Cell-state interactions are unchanged by zone presence.
6. Resizing window keeps zones aligned to wrapped cell coordinates.
7. With 64 active zones, frame pacing remains visually smooth on desktop (no persistent stutter).
8. `bold-major` edge shows a clear boundary even when zone interior is `both`.
9. `fade` edge creates a smooth transition band from visible to hidden lines.
10. `noted` edge renders a stable cell-aligned pattern around the boundary.

## Testing Requirements
### Unit tests
- Coordinate normalization and wrapping.
- Zone overlap and suppression precedence.
- Serialization/deserialization and schema version handling.
- Edge precedence and parameter normalization.

### Integration tests
- Main thread ↔ worker zone message flow.
- GPU buffer update path for zone list.
- Resize behavior with pre-existing zones.
- Shader edge-style rendering snapshots for `bold-major`, `fade`, and `noted`.

### Manual QA
- Add/edit/delete flows.
- Major snap behavior.
- Explicit coordinate input.
- Edge-style visual checks under overlapping zones.
- Persistence across reloads and hard refresh.
- Interaction conflict checks against links/buttons/forms.

## Implementation Phasing
### Phase 1 (Core)
- Data model + worker protocol + shader masking + add/remove zone.

### Phase 2 (Polish)
- Mode controls, zone list UI, coordinate editor, edge-style controls, persistence versioning.

### Phase 3 (Hardening)
- Perf tuning, test coverage, validation UX refinements.

## Phase 1 Task List (Guidelines-Aligned)
This task list explicitly follows [development-guidelines.md](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/development-guidelines.md): Core Principles (`Single Responsibility`, `Explicit over Implicit`, `Test-Driven Confidence`), Testing Standards, file-size limits, and function extraction rules.

Guideline anchors:
- Core Principles: [development-guidelines.md:7](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/development-guidelines.md#L7)
- Testing Standards: [development-guidelines.md:17](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/development-guidelines.md#L17)
- File Size Limits: [development-guidelines.md:26](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/development-guidelines.md#L26)
- Function Length / Extraction: [development-guidelines.md:120](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/development-guidelines.md#L120), [development-guidelines.md:128](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/development-guidelines.md#L128)

### Task 0: Required Pre-Split (Rust Renderer Module)
Why first:
- [`crates/game_of_life_gpu/src/renderer.rs`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/crates/game_of_life_gpu/src/renderer.rs) is currently above the Rust hard limit.

Files:
- Move/replace with:
  - `crates/game_of_life_gpu/src/renderer/mod.rs` (types + re-exports only)
  - `crates/game_of_life_gpu/src/renderer/pipeline.rs`
  - `crates/game_of_life_gpu/src/renderer/noise.rs`
  - `crates/game_of_life_gpu/src/renderer/paper.rs`
  - `crates/game_of_life_gpu/src/renderer/zones.rs` (new blank-zone GPU resources)

Interface contract:
- Keep public API used by [`crates/game_of_life_gpu/src/gpu.rs`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/crates/game_of_life_gpu/src/gpu.rs) stable:
  - `GpuRenderer::new(...)`
  - `render(...)`
  - `resize(...)`
  - `set_scroll(...)`
  - `set_transition(...)`
  - `capture_previous_state(...)`
  - plus new zone methods in Task 3.

### Task 1: Shared Zone Types and Protocol
Files:
- Update [`app/src/workers/rendererProtocol.ts`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/app/src/workers/rendererProtocol.ts)
- Add `app/src/types/blankZones.ts` (new shared TS types, keeps protocol file focused)

Exact interfaces to add:
```ts
export type BlankMode = 'minor' | 'major' | 'both';
export type EdgeStyle = 'none' | 'bold-major' | 'fade' | 'noted';

export interface ZoneEdgeBehavior {
  style: EdgeStyle;
  widthCells: number;
  opacity: number;
  fadeStrength?: number;
  notePitchCells?: number;
  noteAngleDeg?: number;
}

export interface BlankZone {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  mode: BlankMode;
  edge: ZoneEdgeBehavior;
  enabled: boolean;
  createdAt: number;
  updatedAt: number;
}
```

Worker message additions:
```ts
| { type: 'set_zones'; zones: BlankZone[] }
| { type: 'add_zone'; zone: BlankZone }
| { type: 'update_zone'; zone: BlankZone }
| { type: 'remove_zone'; id: string }
| { type: 'clear_zones' }
```

Worker out additions:
```ts
| { type: 'zones_state'; zones: BlankZone[] }
| { type: 'zones_error'; message: string }
```

### Task 2: Main-Thread Zone Store + Persistence
Files:
- Add `app/src/composables/useBlankZones.ts`
- Add `app/src/utils/blankZoneStorage.ts`
- Minimal updates to [`app/src/components/layout/AppBackground.vue`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/app/src/components/layout/AppBackground.vue)

Responsibilities:
- Manage zone CRUD and normalized validation.
- Persist to `localStorage` key `gol.gridBlankZones.v1`.
- On mount: load -> sanitize -> send `set_zones`.
- On any zone mutation: persist then send incremental worker message.

API surface:
```ts
interface UseBlankZones {
  zones: Ref<BlankZone[]>;
  setZones(zones: BlankZone[]): void;
  addZone(zone: BlankZone): void;
  updateZone(zone: BlankZone): void;
  removeZone(id: string): void;
  clearZones(): void;
}
```

### Task 3: Worker Bridge for Zone Operations
Files:
- Update [`app/src/workers/backgroundRenderer.ts`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/app/src/workers/backgroundRenderer.ts)
- Optionally add `app/src/workers/zoneValidation.ts`

Renderer interface additions:
```ts
setZones?(zones: BlankZone[]): void;
addZone?(zone: BlankZone): void;
updateZone?(zone: BlankZone): void;
removeZone?(id: string): void;
clearZones?(): void;
```

Routing:
- Handle all new `WorkerInMsg` variants.
- Validate and sanitize payloads in worker before passing to WASM API.
- Post `zones_state` after successful mutation, `zones_error` on validation failure.

### Task 4: WASM API Surface for Zone Data
Files:
- Update [`crates/game_of_life_gpu/src/gpu.rs`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/crates/game_of_life_gpu/src/gpu.rs)
- Add `crates/game_of_life_gpu/src/zones.rs` (new)
- Update [`crates/game_of_life_gpu/src/lib.rs`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/crates/game_of_life_gpu/src/lib.rs)

Rust types (internal):
```rust
pub struct BlankZoneCpu { /* normalized cell coords + edge params */ }
#[repr(C)]
pub struct BlankZoneGpu { /* packed, shader-friendly fields */ }
```

WASM exports (exact methods):
```rust
#[wasm_bindgen]
pub fn set_zones_json(&mut self, zones_json: &str) -> Result<(), JsValue>;
#[wasm_bindgen]
pub fn add_zone_json(&mut self, zone_json: &str) -> Result<(), JsValue>;
#[wasm_bindgen]
pub fn update_zone_json(&mut self, zone_json: &str) -> Result<(), JsValue>;
#[wasm_bindgen]
pub fn remove_zone(&mut self, id: &str) -> Result<(), JsValue>;
#[wasm_bindgen]
pub fn clear_zones(&mut self);
```

Notes:
- JSON boundary keeps JS↔WASM interop explicit for Phase 1.
- Validate/clamp in Rust as final authority before GPU upload.

### Task 5: Renderer GPU Buffers + Bindings
Files:
- `crates/game_of_life_gpu/src/renderer/zones.rs` (new in split layout)
- Update [`crates/game_of_life_gpu/src/shaders.rs`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/crates/game_of_life_gpu/src/shaders.rs) if helper include changes

New GPU resources:
- `zone_meta_buf` (count + defaults)
- `zone_buf` (array of packed `BlankZoneGpu`)

Bind group changes:
- Add two bindings to render bind group layout and both bind groups (`a` and `b`).
- Ensure `resize()` rebinds zone buffers.

New renderer methods:
```rust
pub fn set_zones(&mut self, queue: &wgpu::Queue, zones: &[BlankZoneGpu]);
pub fn clear_zones(&mut self, queue: &wgpu::Queue);
```

### Task 6: WGSL Grid Masking + Edge Styles
Files:
- Update [`crates/game_of_life_gpu/wgsl/render.wgsl`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/crates/game_of_life_gpu/wgsl/render.wgsl)

Shader additions:
- New structs for zone metadata and packed zone entries.
- Helper functions:
  - `cell_in_zone(...)`
  - `zone_edge_distance(...)`
  - `accumulate_zone_masks(...)`
  - `apply_zone_edges(...)`

Integration points:
- After computing `minor_cov` / `major_cov`, apply zone interior masks.
- Apply edge overlay logic before paper-grid transmittance mix.

Phase 1 edge subset:
- Implement `none`, `bold-major`, `fade`.
- `noted` may be stubbed as a deterministic dashed variant if needed for performance.

### Task 7: UI Wiring for Core CRUD
Files:
- Add `app/src/components/layout/GridBlankZonePanel.vue`
- Update [`app/src/components/layout/AppBackground.vue`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/app/src/components/layout/AppBackground.vue)
- Update [`app/src/components/layout/index.ts`](/Users/taylorhale/Documents/dev_hub/repos/Anjin-Byte.github.io/app/src/components/layout/index.ts)

Behavior:
- List zones, toggle enabled, delete, clear all.
- Minimal add flow (explicit coords + mode + edge style).
- Defer advanced drag tooling to next slice if needed.

### Task 8: Tests (Mandatory for New Logic)
Per Testing Standards, Phase 1 is incomplete without tests.

TypeScript tests:
- `app/src/utils/__tests__/blankZoneStorage.test.ts`
- `app/src/composables/__tests__/useBlankZones.test.ts`
- Cover normalization, persistence versioning, invalid payload handling.

Rust tests:
- `crates/game_of_life_gpu/src/zones/tests.rs`
- Cover coordinate clamping/wrapping, edge param normalization, GPU-packing correctness.

Integration tests:
- Worker protocol tests for `set_zones` / `add_zone` / `update_zone` / `remove_zone`.
- Shader snapshot/golden tests for interior masking and edge styles.

### Task 9: Definition of Done for Phase 1
- Zone CRUD works end-to-end with immediate render updates.
- Persisted zones restore correctly on reload.
- Grid line suppression works for `minor`, `major`, `both`.
- Edge rendering works for `none`, `bold-major`, and `fade`.
- All new tests pass; no file exceeds guideline hard limits.

## Open Questions
1. Should zone coordinates be stored in wrapped viewport space only, or world-space rows for scroll-stable authoring?
2. Should `major` mode imply snap-to-5 by default, or remain independent from snapping?
3. Should CPU backend render a simplified zone mask or explicitly disable the tool with UI notice?
