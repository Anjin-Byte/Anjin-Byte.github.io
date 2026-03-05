# Decal System — Requirements & Technical Specification

**Status:** Implementation-ready (all open questions resolved)
**Scope:** Phase 1 (procedural patterns) + Phase 2 (bitmap atlas) architecture
**Renderer:** WebGPU via Rust/WASM (`game_of_life_gpu` crate), single render pass

---

## 1. Background

The grid renderer currently supports **blank zones** — rectangular cell-space regions that suppress grid lines and cell ink. Blank zones affect what is *removed* from the rendering. Decals are the complementary system: rectangular regions that *add* custom visual content on top of the rendered paper.

### 1.1 Rendering Pipeline Context

The renderer runs a single fragment shader pass (full-screen triangle). All visual layers — paper fiber, grid lines, cell ink, border margin, blank zones — are composited sequentially within `fs_main`. Decals insert two new compositing steps:

1. **Cell-suppression pre-pass** (before the cell stamp step) — for decals with `suppressCells = true`, zeros out cell coverage inside those rects.
2. **Decal compositing step** (after the cell/ink layer, before gamma encode) — applies pattern + blend per active decal.

Current bind group layout (Group 0, bindings 0–7):

| Binding | Name | Content |
|---------|------|---------||
| 0 | `uniforms` | `RenderUniforms` — grid dims, scroll_y, transition_t |
| 1 | `current_cells` | Bitpacked cell state (current generation) |
| 2 | `previous_cells` | Bitpacked cell state (prior generation) |
| 3 | `paper` | `PaperParams` — grid pitch, line widths, specular |
| 4 | `noise_tex` | Paper fiber noise + analytic derivatives |
| 5 | `noise_smp` | Sampler for noise texture |
| 6 | `zone_meta` | `ZoneMetaGpu` — active zone count |
| 7 | `zones` | `ZoneEntryGpu[128]` — blank zone array |

Decals will add bindings 8–9 (Phase 1) and 10–11 (Phase 2).

### 1.2 Coordinate System

```
px        = frag_pos.x                   // screen pixels, 0 = left edge
world_y   = frag_pos.y + uniforms.scroll_y  // world pixels (scrolls with page)
cx        = floor(px / pitch_minor) % screen_cols   // integer cell column
world_row = floor(world_y / pitch_minor)            // integer world cell row
```

Decal rects are stored in world cell-space `(x1, y1, x2, y2)`, same convention as blank zones. Because `world_row` already incorporates the scroll offset, decal rects require **no update on scroll**.

---

## 2. Definitions

| Term | Meaning |
|------|---------|
| **Decal** | A cell-space rectangular region with associated visual pattern composited over the grid |
| **Kind** | The pattern type rendered within the decal rect |
| **Blend mode** | How the decal output is composited over the existing pixel colour |
| **Atlas** | (Phase 2) A `Texture2DArray` that packs multiple bitmap decals into layers |
| **Tint** | An RGBA colour multiplied into the decal pattern output before blending |
| **suppressCells** | Per-decal opt-in flag that zeroes cell ink coverage inside the decal rect |
| **Wave coherence** | GPU threads within a SIMD wave executing the same instruction path simultaneously — critical for performance |

---

## 3. Functional Requirements

### 3.1 Placement & Editing

| ID | Requirement |
|----|-------------|
| F-01 | Decal rects are placed by dragging on the grid using a **dedicated decal drag tool** (independent enable toggle + snap controls, separate from the blank zone tool) |
| F-02 | Decal rects are specified in world cell-space `(x1, y1, x2, y2)`, inclusive |
| F-03 | Decals can be individually enabled or disabled without deletion |
| F-04 | Decals can be deleted individually or cleared all at once |
| F-05 | The UI exposes all per-decal properties (kind, blend mode, opacity, tint, pattern params, suppressCells) |
| F-06 | A live preview of the decal rect is visible while dragging |

### 3.2 Rendering

| ID | Requirement |
|----|-------------|
| F-10 | Decals render **after** the cell/ink layer and **before** gamma encode |
| F-11 | Decals do not alter cell simulation state |
| F-12 | Decals are independent of blank zones — a decal can overlap a blank zone |
| F-13 | Multiple decals stack in order (lower index rendered first, higher index on top) |
| F-14 | Each decal is clipped to its own rect |
| F-15 | Phase 1: supported kinds are Solid, Checkerboard, Diagonal Stripes, Dots |
| F-16 | Phase 2: supported kinds include Bitmap (from atlas layer) |
| F-17 | When `suppressCells = true`, cell ink coverage is zeroed inside the decal rect (computed in a pre-pass before the cell stamp step; no control flow divergence) |

### 3.3 UI Layout

| ID | Requirement |
|----|-------------|
| F-30 | Decal controls live as a **collapsible accordion section** inside the existing `GridBlankZonePanel.vue` |
| F-31 | The accordion section header toggles the decal tool enable state |
| F-32 | Decal drag tool has its own snap-to-major toggle, independent of the blank zone tool's snap setting |

### 3.4 Persistence

| ID | Requirement |
|----|-------------|
| F-20 | Decal state is serialised to localStorage on every change |
| F-21 | Decal state is restored from localStorage on page load |
| F-22 | Storage key is versioned to allow forward migration |

---

## 4. Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| N-01 | Frame time increase with 16 active procedural decals | < 5% |
| N-02 | Scroll performance regression | Zero — scrolling must not be affected |
| N-03 | No `continue`, `break`, or early-return inside the per-decal shader loop | Hard rule |
| N-04 | No derivative functions (`fwidth`, `dpdx`, `dpdy`) inside the per-decal loop | Hard rule |
| N-05 | Maximum active decals | 32 (Phase 1), 64 (Phase 2) |
| N-06 | GPU memory for bitmap atlas | ≤ 16 MB |
| N-07 | All rect-rejection must use `select`-weighted output, not control flow divergence | Hard rule |

### 4.1 Rationale for the shader loop rules

The cross-hatch edge style experiment demonstrated that `continue` inside a per-fragment loop causes GPU wave divergence: neighbouring fragments that follow different `continue` paths execute different instruction sequences, eliminating SIMD parallelism and causing measurable frame drops and scroll stutter.

The safe pattern is:

```wgsl
// WRONG — causes wave divergence
for i in decals:
    if not_in_rect: continue
    expensive_work()

// CORRECT — all fragments execute identical instructions
for i in decals:
    let weight = select(0.0, 1.0, in_rect(decal, cx, world_row))
    let contribution = compute_pattern(decal, px, world_y)   // always runs
    result = blend(result, contribution * weight, decal.opacity)
```

Pattern functions must be pure arithmetic with no derivative calls.

---

## 5. GPU Data Structures

### 5.1 DecalMetaGpu (Binding 8 — Uniform)

```rust
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct DecalMetaGpu {
    pub decal_count: u32,
    pub pad: [u32; 3],
}
```

### 5.2 DecalEntryGpu (Binding 9 — Storage RO)

```rust
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct DecalEntryGpu {
    // Inclusive cell-space rect: [x1, y1, x2, y2].
    // y is world row (incorporates scroll — no per-frame update needed).
    pub rect:   [i32; 4],

    // [kind, blend_mode, suppress_cells, reserved]
    // kind:           0=solid, 1=checkerboard, 2=stripes, 3=dots, 4=bitmap (Phase 2)
    // blend_mode:     0=alpha-over, 1=multiply, 2=screen
    // suppress_cells: 1=zero cell ink inside rect, 0=leave cells visible
    pub flags:  [u32; 4],

    // Pattern parameters (meaning is kind-specific):
    //   solid:        [coverage, r, g, b]   — r/g/b in linear sRGB [0..1]
    //   checkerboard: [cell_size, reserved, reserved, reserved]
    //   stripes:      [pitch_cells, reserved, reserved, reserved]
    //   dots:         [radius_frac, spacing_cells, reserved, reserved]
    //   bitmap:       [atlas_layer, u_offset, v_offset, uv_scale]
    //
    // For ALL kinds, the final colour is further multiplied by tint (see §5.2.1).
    pub params: [f32; 4],

    // RGBA tint colour (linear sRGB). Multiplied into pattern output.
    // Default for new decals: [0.49, 0.30, 1.0, 0.6] (primary accent, semi-opaque).
    pub tint:   [f32; 4],
}
```

#### 5.2.1 Solid kind — colour resolution

For `kind = solid`, the fragment shader resolves colour in two steps:

1. `pattern_rgb = params.gba` — the solid colour stored directly in params[1..3] (linear sRGB).
2. `pattern_cov = params.r` — per-decal coverage scalar [0..1] (independent of tint.a).
3. `final = pattern_rgb * pattern_cov * tint.rgb * tint.a` — tint multiplies on top.

This gives two independent opacity knobs: `params[0]` for the solid fill opacity, `tint.a` for an overall layer multiplier. All other kinds output `coverage ∈ [0,1]` from the pattern function, then tint applies the same way.

### 5.3 Phase 2 additions (Bindings 10–11)

```
Binding 10: Texture2DArray  decal_atlas   — packed bitmap layers (RGBA8)
Binding 11: Sampler         decal_smp     — bilinear, clamp-to-edge
```

---

## 6. Fragment Shader Design

### 6.1 Compositing Step Locations

```wgsl
// ── Step 5.5 (new): Cell-suppression pre-pass ─────────────────────────────
// Runs BEFORE the sponge stamp / Beer-Lambert step.
// Must not use continue/break. Uses max-accumulation over select weights.
var cell_suppress = 0.0;
for (var i: u32 = 0u; i < decal_meta.decal_count; i = i + 1u) {
    let d = decals[i];
    let in_rect = select(0.0, 1.0,
        cx        >= u32(d.rect.x) && cx        <= u32(d.rect.z)
        && world_row >= d.rect.y      && world_row <= d.rect.w);
    cell_suppress = max(cell_suppress, f32(d.flags.z) * in_rect);
}
// cell_suppress = 1.0 if any suppress_cells decal covers this fragment.
// Multiply into coverage at the point where raw_cov is computed:
//   let coverage = raw_cov * alive_mix * content_mask * zone_mask.w
//                          * (1.0 - cell_suppress);

// ── Step 7 (new): Decal compositing ──────────────────────────────────────
// After: paper, grid lines, cells (ink), border, blank zones.
// Before: gamma encode.

var surface_colour = result_lin;   // carries paper+cell composite

for (var i: u32 = 0u; i < decal_meta.decal_count; i = i + 1u) {
    let d = decals[i];
    let in_rect = select(0.0, 1.0,
        cx        >= u32(d.rect.x) && cx        <= u32(d.rect.z)
        && world_row >= d.rect.y      && world_row <= d.rect.w);

    let pattern = decal_pattern(d, px, world_y, cx, world_row);
    let weighted = pattern * in_rect;

    surface_colour = decal_blend(surface_colour, weighted, d.tint, d.flags.y);
}

// Then: gamma encode → output
```

### 6.2 Pattern Helper — pos_mod

WGSL `i32 % i32` returns **negative results for negative dividends** (e.g. `-1 % 3 == -1`). All cell-space patterns that use `world_row` modulo must go through `pos_mod`:

```wgsl
// Safe non-negative modulo for signed integers.
fn pos_mod(n: i32, m: i32) -> i32 {
    return ((n % m) + m) % m;
}
```

### 6.3 Pattern Functions (Phase 1)

All functions are pure arithmetic. No derivatives. No early exit.

```wgsl
fn decal_pattern(
    d: DecalEntry,
    px: f32, world_y: f32,
    cx: u32, world_row: i32,
) -> f32 {
    if d.flags.x == 0u { return decal_solid(d); }
    if d.flags.x == 1u { return decal_checkerboard(d, cx, world_row); }
    if d.flags.x == 2u { return decal_stripes(d, cx, world_row); }
    if d.flags.x == 3u { return decal_dots(d, cx, world_row); }
    return 0.0;
}

// kind 0: Solid fill — coverage from params[0], colour from params[1..3]
// (colour applied in blend via d.params.gba; this function returns coverage only)
fn decal_solid(d: DecalEntry) -> f32 {
    return clamp(d.params.x, 0.0, 1.0);
}

// kind 1: Checkerboard in cell space
// Uses pos_mod to handle negative world_row safely.
fn decal_checkerboard(d: DecalEntry, cx: u32, world_row: i32) -> f32 {
    let cell_size = max(1.0, d.params.x);
    let gx = u32(pos_mod(i32(floor(f32(cx)        / cell_size)), 2)) & 1u;
    let gy = u32(pos_mod(i32(floor(f32(world_row) / cell_size)), 2)) & 1u;
    return f32((gx + gy) & 1u);
}

// kind 2: ↗ diagonal stripes (cell-space).
// WGSL fract() is defined as n - floor(n) for all real n, so negative
// world_row produces a correct [0,1) value without extra correction.
fn decal_stripes(d: DecalEntry, cx: u32, world_row: i32) -> f32 {
    let pitch = max(2.0, d.params.x);
    let phase = fract(f32(i32(cx) + world_row) / pitch);
    return select(0.0, 1.0, phase >= 0.5);
}

// kind 3: Dots (cell-centred, hard-edge at cell granularity).
// Uses pos_mod for the world_row modulo to avoid negative remainders.
fn decal_dots(d: DecalEntry, cx: u32, world_row: i32) -> f32 {
    let spacing = max(2.0, d.params.y);
    let sp_i    = i32(spacing);
    let gx = i32(cx) % sp_i;                     // cx is u32, always non-negative
    let gy = pos_mod(world_row, sp_i);
    let r  = max(d.params.x, 0.1);
    let dist = sqrt(f32(gx * gx + gy * gy));
    return select(0.0, 1.0, dist < r * spacing * 0.5);
}
```

### 6.4 Blend Modes

The `decal_blend` function is called from inside the per-decal loop. The `mode` value comes from `d.flags.y`, which is **uniform per wave** (same stored value for all fragments in the same decal iteration). The `if/return` branches inside this function therefore do not cause wave divergence — they are equivalent to a compile-time constant switch within each loop iteration.

For solid kind the tint colour is the solid colour (params.gba). For all other kinds tint.rgb tints the pattern:

```wgsl
fn decal_blend(base: vec3f, coverage: f32, d: DecalEntry, mode: u32) -> vec3f {
    // For solid kind, colour comes from params.gba; for all others from tint.rgb.
    let col = select(d.tint.rgb, d.params.gba, d.flags.x == 0u);
    let c   = col * coverage * d.tint.a;
    if mode == 0u { return mix(base, col, coverage * d.tint.a); }  // alpha-over
    if mode == 1u { return base * (1.0 - coverage + c); }          // multiply
    if mode == 2u { return 1.0 - (1.0 - base) * (1.0 - c); }      // screen
    return base;
}
```

Note: the call site becomes `surface_colour = decal_blend(surface_colour, weighted, d, d.flags.y);`.

---

## 7. CPU-Side Architecture

### 7.1 TypeScript Types

```typescript
// app/src/types/decals.ts

export type DecalKind = 'solid' | 'checkerboard' | 'stripes' | 'dots' | 'bitmap';
export type DecalBlendMode = 'alpha' | 'multiply' | 'screen';

export interface DecalPattern {
  kind: DecalKind;
  // kind-specific params (all optional, fall back to defaults when absent)
  coverage?: number;           // solid:        coverage [0..1] (params[0])
  solidR?: number;             // solid:        red   [0..1] linear sRGB
  solidG?: number;             // solid:        green [0..1]
  solidB?: number;             // solid:        blue  [0..1]
  cellSize?: number;           // checkerboard: cell size in cells (≥ 1)
  pitchCells?: number;         // stripes:      stripe pitch in cells (≥ 2)
  dotRadius?: number;          // dots:         radius fraction [0.1..∞]
  dotSpacing?: number;         // dots:         spacing in cells (≥ 2)
  atlasLayer?: number;         // bitmap (Phase 2)
  uvOffset?: [number, number]; // bitmap (Phase 2)
  uvScale?: number;            // bitmap (Phase 2)
}

export interface Decal {
  id: string;
  x1: number; y1: number; x2: number; y2: number;  // world cell-space (inclusive)
  pattern: DecalPattern;
  // tint: RGBA linear sRGB [0..1]. Default: [0.49, 0.30, 1.0, 0.6].
  tint: [number, number, number, number];
  blendMode: DecalBlendMode;
  suppressCells: boolean;  // when true, cell ink is zeroed inside this rect
  enabled: boolean;        // when false, excluded at parse time (not sent to GPU)
  createdAt: number;
  updatedAt: number;
}

export interface DecalStoragePayload {
  version: number;
  decals: Decal[];
}

export const MAX_DECALS = 32;
export const DECAL_STORAGE_VERSION = 1;
export const DECAL_STORAGE_KEY = `gol.decals.v${DECAL_STORAGE_VERSION}`;

// Default tint for new decals: primary accent (#7c4dff ≈ 0.49/0.30/1.0), 60% opacity.
export const DECAL_DEFAULT_TINT: [number, number, number, number] = [0.49, 0.30, 1.0, 0.6];
```

### 7.2 Worker & WASM Interface

```
backgroundRenderer.ts
  ├── DecalState.ts           ← manages decal list (mirrors BlankZoneState.ts exactly)
  └── calls gpu.set_decals_json(JSON.stringify(decals))

crates/game_of_life_gpu/src/
  ├── decals.rs               ← parse JSON → Vec<DecalEntryGpu>
  └── lib.rs (gpu.rs)         ← set_decals_json WASM export, buffer upload
```

**`enabled = false` → excluded at parse time.** Disabled decals are filtered out in `parse_decal_entries_json` and never written to the GPU buffer. The GPU only sees the active count.

### 7.3 Worker Protocol (new message types)

```typescript
// Additional entries in WorkerInMsg (rendererProtocol.ts):
| { type: 'set_decals';    decals: Decal[] }
| { type: 'add_decal';     decal:  Decal   }
| { type: 'update_decal';  decal:  Decal   }
| { type: 'remove_decal';  id:     string  }
| { type: 'clear_decals' }

// Additional entries in WorkerOutMsg:
| { type: 'decals_state'; decals: Decal[] }
| { type: 'decals_error'; message: string }
```

The worker handles these symmetrically to the zone messages, using a `DecalState` class that mirrors `BlankZoneState`:

```typescript
// backgroundRenderer.ts additions:
const decalState = new DecalState();

function applyDecalsToRenderer(): void {
  renderer?.setDecals?.(decalState.getAll());
}
```

The `Renderer` interface gains:
```typescript
setDecals?(decals: Decal[]): void;
```

GPU plumbing in the GPU renderer path:
```typescript
const setDecalsOnGpu = (decals: Decal[]): void => {
  if (typeof gpuWithDecals.set_decals_json !== 'function') return;
  try {
    gpuWithDecals.set_decals_json(JSON.stringify(decals));
  } catch (err) {
    postDecalsError(`GPU decal update failed: ${errorMessage(err)}`);
  }
};
```

### 7.4 WASM Method

```rust
// gpu.rs — GpuGameOfLife gains decals_json field (analogous to zones_json):
pub struct GpuGameOfLife {
    // ... existing fields ...
    zones_json:  String,
    decals_json: String,  // ← new
}

#[wasm_bindgen]
pub fn set_decals_json(&mut self, decals_json: &str) -> Result<(), JsValue> {
    let entries = parse_decal_entries_json(decals_json, &self.grid)?;
    self.decals_json.clear();
    self.decals_json.push_str(decals_json);
    self.renderer.set_decals(&self.queue, &entries);
    Ok(())
}
```

The `resize` method in `GpuGameOfLife` must re-apply decals after rebuild:
```rust
if self.decals_json.is_empty() {
    self.renderer.clear_decals(&self.queue);
} else if let Ok(entries) = parse_decal_entries_json(&self.decals_json, &self.grid) {
    self.renderer.set_decals(&self.queue, &entries);
}
```

### 7.5 GpuRenderer additions

```rust
pub struct GpuRenderer {
    // ... existing fields (zone_meta_buf, zone_buf, ...) ...
    decal_meta_buf: wgpu::Buffer,  // binding 8: DecalMetaGpu (uniform)
    decal_buf:      wgpu::Buffer,  // binding 9: DecalEntryGpu[MAX_DECALS] (storage RO)
}
```

`make_bind_group` and `bgl` gain two new entries:
```rust
// In bgl:
uniform_bgl_entry(8),   // decal_meta
storage_bgl_entry(9),   // decal entries

// In make_bind_group:
wgpu::BindGroupEntry { binding: 8, resource: decal_meta_buf.as_entire_binding() },
wgpu::BindGroupEntry { binding: 9, resource: decal_buf.as_entire_binding() },
```

New methods:
```rust
pub fn set_decals(&self, queue: &wgpu::Queue, decals: &[DecalEntryGpu]) { ... }
pub fn clear_decals(&self, queue: &wgpu::Queue) { self.set_decals(queue, &[]); }
```

---

## 8. WGSL Struct Definitions

```wgsl
// In render.wgsl, alongside ZoneMeta / ZoneEntry:

struct DecalMeta {
    decal_count: u32,
    pad:         vec3u,
}

struct DecalEntry {
    rect:   vec4i,  // [x1, y1, x2, y2] world cell-space (inclusive)
    flags:  vec4u,  // [kind, blend_mode, suppress_cells, reserved]
    params: vec4f,  // kind-specific (see §5.2)
    tint:   vec4f,  // RGBA (linear sRGB)
}

@group(0) @binding(8) var<uniform> decal_meta: DecalMeta;
@group(0) @binding(9) var<storage, read> decals: array<DecalEntry, 32>;
```

---

## 9. File Inventory

| File | Change |
|------|--------|
| `app/src/types/decals.ts` | New — TS type definitions |
| `app/src/utils/decalNormalization.ts` | New — input sanitisation (mirrors blankZoneNormalization.ts) |
| `app/src/workers/DecalState.ts` | New — worker-side list management (mirrors BlankZoneState.ts) |
| `app/src/workers/backgroundRenderer.ts` | Modified — wire up `set_decals_json`, handle decal messages |
| `app/src/workers/rendererProtocol.ts` | Modified — add decal WorkerInMsg / WorkerOutMsg variants |
| `app/src/components/layout/GridBlankZonePanel.vue` | Modified — add decal accordion section + dedicated drag tool |
| `crates/game_of_life_gpu/src/decals.rs` | New — JSON parsing + GPU struct packing |
| `crates/game_of_life_gpu/src/gpu.rs` | Modified — `decals_json` field, `set_decals_json` export |
| `crates/game_of_life_gpu/src/renderer/pipeline.rs` | Modified — `decal_meta_buf`, `decal_buf`, `set_decals`, `clear_decals` |
| `crates/game_of_life_gpu/src/renderer/bindings.rs` | Modified — bindings 8–9 in bgl and make_bind_group |
| `crates/game_of_life_gpu/wgsl/render.wgsl` | Modified — DecalMeta/DecalEntry structs, cell-suppress pre-pass, decal compositing loop |

---

## 10. Phasing

### Phase 1 — Procedural Foundation
- Implement full stack: types → normalization → Rust parsing → GPU buffers → shader compositing → panel accordion → localStorage
- Kinds: solid, checkerboard, stripes, dots
- Cell-suppression pre-pass (`suppressCells` flag)
- Dedicated decal drag tool inside GridBlankZonePanel.vue (new accordion section)
- Validate performance budget with profiling before proceeding

### Phase 2 — Bitmap Atlas
- Add `Texture2DArray` atlas (bindings 10–11)
- CPU-side atlas packer (PNG → layer upload)
- Kind: bitmap (atlas layer + UV params)
- Preset library of small icons/stamps
- Atlas dimensions: fixed 512×512 per layer (revisit if more than ~16 layers needed)

### Phase 3 — Scale (if needed)
- Compute pass pre-builds per-tile decal index lists
- Fragment shader reads compact tile list instead of scanning all decals
- Triggers if Phase 1 shows N > 32 active decals causes measurable regression

---

## 11. Resolved Design Decisions

| # | Question | Decision |
|---|----------|----------|
| Q1 | Render order — above or below blank zone edge overlays? | **Above zones.** Decals composite after zone edge overlays; always visible regardless of zone edge style. |
| Q2 | Should decals suppress cell ink? | **Opt-in per-decal `suppressCells: boolean` flag.** When true, a select-weighted pre-pass zeroes cell ink inside the rect. When false, cells show through. |
| Q3 | Phase 2 atlas dimensions — fixed or variable? | **Fixed 512×512 per layer** for Phase 2. Revisit if the preset library exceeds ~16 layers. |
| Q4 | Shared blank zone tool or dedicated decal tool? | **Dedicated drag tool** in the decal accordion section of GridBlankZonePanel. The blank zone tool and decal tool have independent enable toggles and snap settings. |
| Q5 | Solid kind color — params vs tint? | **params override.** `params = [coverage, r, g, b]`. The solid color is params[1..3]; tint multiplies on top. Other kinds use tint.rgb directly. |
| Q6 | Worker protocol granularity | **Mirror zones pattern.** add_decal / update_decal / remove_decal / clear_decals messages, plus a bulk set_decals. Provides per-operation error reporting. |
| Q7 | Default tint for new decals | **Primary accent, semi-opaque:** `[0.49, 0.30, 1.0, 0.6]` (#7c4dff at 60% opacity). |
| Q8 | Negative `world_row` modulo in WGSL | **`pos_mod` helper.** `fn pos_mod(n: i32, m: i32) -> i32 { ((n % m) + m) % m }`. Used in checkerboard and dots. Stripes use `fract` which is safe for negative inputs. |

---

## 12. Test Strategy (`decals.rs`)

Mirror the test structure of `zones.rs`, using `wasm_bindgen_test`.

| Test | What it validates |
|------|-------------------|
| `parse_decal_entries_json_valid_solid` | Solid kind → correct rect, flags[0..2], params, tint |
| `parse_decal_entries_json_valid_checkerboard` | Checkerboard params clamped, cell_size ≥ 1 |
| `parse_decal_entries_json_valid_stripes` | Stripes pitch clamped ≥ 2 |
| `parse_decal_entries_json_valid_dots` | Dots radius/spacing clamped |
| `parse_decal_entries_json_disabled_excluded` | `enabled: false` → entry not included in output |
| `parse_decal_entries_json_suppresses_cells_flag` | `suppressCells: true` → flags[2] = 1 |
| `parse_decal_entries_json_blend_mode_mapping` | 'alpha'→0, 'multiply'→1, 'screen'→2, unknown→0 |
| `parse_decal_entries_json_kind_mapping` | 'solid'→0, 'checkerboard'→1, 'stripes'→2, 'dots'→3, unknown→0 |
| `parse_decal_entries_json_max_decals_capped` | Array with > MAX_DECALS entries → only first MAX_DECALS parsed |
| `parse_decal_entries_json_invalid_json` | Non-JSON string → Err result |
| `parse_decal_entries_json_not_array` | JSON object → Err result |
| `normalize_decal_rect_clamps_and_orders` | Inverted/out-of-bounds rect → clamped and sorted |
| `normalize_decal_params_defaults` | Missing params fields → correct defaults per kind |
| `normalize_tint_clamps` | tint components outside [0,1] → clamped |
