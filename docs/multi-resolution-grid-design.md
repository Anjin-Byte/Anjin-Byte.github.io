# Multi-Resolution Grid Regions — Design Document

**Status:** Exploratory draft
**Last updated:** 2026-03-06
**Depends on:** Existing compute pipeline (`simulation.rs`, `compute.wgsl`), render pipeline (`render.wgsl`)

---

## 1. Goal

Allow rectangular regions of the simulation grid to run at a higher cell density than the base grid. A 4x region packs 16 cells into the space of one base cell. An 8x region packs 64. The simulation runs at full fidelity within each region, with defined edge behavior where resolutions meet.

This is a simulation feature, not a rendering trick. The cells are real. They simulate, interact, live, and die at their native resolution. Text rendered into a high-res region has the detail of a 4x or 8x raster without needing an SDF overlay. Patterns and structures emerge at scales impossible in the base grid.

---

## 2. The Problem This Solves

The base grid has a fixed cell density determined by `pitch_minor` — typically 4-8 pixels per cell. Text rasterized at this density produces blocky letterforms ~30 cells tall. The SDF text system (see `sdf-text-design.md`) solves this visually with a distance field overlay, but the simulation only interacts with the coarse frozen cell silhouette.

Multi-resolution regions solve it structurally. A 4x region within a 200-cell-wide text block gives the simulation 800 cells of horizontal resolution for that text. Letterforms have fine serifs, thin strokes, and smooth curves — all as real simulating cells. The simulation interaction is equally fine-grained: gliders navigate between thin strokes, oscillators form in the negative space of small counters, and the emergent behavior around text becomes dramatically richer.

Beyond text, high-res regions enable:
- Detailed simulation "islands" for showcasing complex patterns
- Fine-grained cellular automata art within a coarser background
- Transition zones where the simulation density changes, creating visual texture contrast

---

## 3. Architecture Overview

### 3.1 Resolution Levels

The system supports a fixed set of resolution multipliers relative to the base grid:

| Level | Multiplier | Cells per base cell | Memory per base cell |
|-------|-----------|-------------------|---------------------|
| Base | 1x | 1 | 1 bit |
| Medium | 4x | 16 (4x4) | 16 bits |
| High | 8x | 64 (8x8) | 64 bits |

Only power-of-2 multipliers are supported. This keeps boundary math clean — integer shifts instead of division.

### 3.2 Region Definition

A multi-resolution region is a rectangular area in base cell-space with an associated resolution multiplier:

```
Base grid (1x):
┌───────────────────────────────────────┐
│ · · · · · · · · · · · · · · · · · · · │
│ · · · ┌─────────────────┐ · · · · · · │
│ · · · │ 4x region       │ · · · · · · │
│ · · · │ ┌┬┬┬┬┬┬┬┬┬┬┬┬┐  │ · · · · · · │
│ · · · │ ├┼┼┼┼┼┼┼┼┼┼┼┼┤  │ · · · · · · │
│ · · · │ ├┼┼┼┼┼┼┼┼┼┼┼┼┤  │ · · · · · · │
│ · · · │ └┴┴┴┴┴┴┴┴┴┴┴┴┘  │ · · · · · · │
│ · · · └─────────────────┘ · · · · · · │
│ · · · · · · · · · · · · · · · · · · · │
└───────────────────────────────────────┘
```

Each base cell within the region boundary is replaced by an NxN sub-grid of fine cells.

### 3.3 Storage Model

High-res regions use separate bitpacked buffers, independent of the base grid's `buf_a`/`buf_b`:

```rust
pub struct HiResRegion {
    pub rect: [i32; 4],         // [x1, y1, x2, y2] in base cell-space
    pub multiplier: u32,        // 4 or 8
    pub buf_a: wgpu::Buffer,    // bitpacked fine cells (current)
    pub buf_b: wgpu::Buffer,    // bitpacked fine cells (previous)
    pub cols: u32,              // (x2 - x1 + 1) * multiplier
    pub rows: u32,              // (y2 - y1 + 1) * multiplier
}
```

The base grid's cells within the region boundary are masked out — they don't simulate. The high-res buffer owns that space entirely.

### 3.4 Fine Cell Initialization

When a region is created or re-enabled, its fine cells must be initialized. The `initState` field controls the strategy:

| Mode | Behavior |
|------|----------|
| `random` (default) | Each fine cell is randomly set alive with ~25% probability |
| `dead` | All fine cells start dead |
| `inherit` | Each base cell under the region is read; if alive, all N×N fine cells for that base cell start alive |
| `downsample` | Only valid on re-enable: fine cell state is preserved from the prior enable cycle (no-op if first enable) |

The `downsample` mode is the reverse case — when a region is **disabled**, the fine cell buffers are not immediately freed. They are retained until the region is deleted or re-enabled with a different `initState`. On disable, base cells under the region resume simulation. Their initial state is determined by majority-vote downsampling from the fine cells (same `popcount >= N/2` rule used at boundaries), giving visual continuity.

If the region is re-enabled with `initState = 'downsample'`, the retained fine buffers are reused as-is. Any other `initState` value reinitializes them.

---

## 4. The Hard Problem: Edge Behavior

The boundary between a 1x region and a 4x region is where resolutions collide. Fine cells at the edge need to know the state of their coarser neighbors, and base cells at the boundary need to know the aggregate state of the fine cells beside them. Both directions must be deterministic and branch-free.

### 4.1 Design Requirement: Bidirectional Determinism

Edge behavior must satisfy:

1. **High-res → base (outward reads):** Fine cells at the boundary read base cell state for their external neighbors. Deterministic — one base cell maps to one neighbor value, always.
2. **Base → high-res (inward reads):** Base cells at the boundary read an aggregate of the fine cells along the shared edge. Deterministic — the aggregation rule is fixed and produces a single alive/dead value per base cell per tick.
3. **Branch-free:** Both directions use arithmetic (shifts, masks, popcount), never conditional branches. This keeps compute dispatches coherent.
4. **Order-independent:** The base dispatch and high-res dispatch can run in either order within a frame because both read from the *previous* generation's buffers (double-buffered). No write-after-read hazards.

### 4.2 Bidirectional Expansion Model (Recommended)

#### Direction 1: Fine cells reading base cells (outward)

The base cell adjacent to the boundary is "expanded" into a virtual NxN block of identical cells for the purpose of neighbor counting. A single alive base cell becomes a 4x4 block of alive virtual cells.

```
Base grid (1x):        Expanded view for fine-cell boundary reads:
┌───┬───┐              ┌───┬─┬─┬─┬─┐
│ A │ B │              │ A │B│B│B│B│
├───┼───┤    ──▸       ├───┼─┼─┼─┼─┤
│ C │ D │              │ C │D│D│D│D│
└───┴───┘              │ C │D│D│D│D│
                       │ C │D│D│D│D│
  B and D are 4x       │ C │D│D│D│D│
                       └───┴─┴─┴─┴─┘
```

Implementation: the fine-cell compute shader detects when a neighbor lookup crosses the region boundary (coordinate < 0 or >= region size). For out-of-bounds lookups, it reads the corresponding base cell from the pre-extracted boundary state buffer and replicates that value for all N virtual sub-cells. This is a single buffer read + replicate, no branching — the lookup index is computed arithmetically.

#### Direction 2: Base cells reading fine cells (inward)

Base cells adjacent to the high-res boundary read an **aggregate** of the N fine cells along their shared edge. The aggregation rule is **majority vote with threshold**:

```
Fine edge facing base cell X:
┌─┬─┬─┬─╥───┐
│a│b│c│d║ X │  ← X reads the edge strip [a,b,c,d]
├─┼─┼─┼─╫───┤
│e│f│g│h║ Y │  ← Y reads the edge strip [e,f,g,h]
└─┴─┴─┴─╨───┘

For 4x: alive_if(popcount(a,b,c,d) >= 2)   // majority = N/2
For 8x: alive_if(popcount(8 cells) >= 4)
```

The aggregate is computed during boundary state extraction (a lightweight compute pass between the main dispatches). The result is written into the boundary state buffer as a single bit per base cell. The base grid compute shader reads this aggregated value as the neighbor state for cells adjacent to a high-res region — identical to reading any other base cell, no special path needed.

**Properties:**
- **Deterministic:** `popcount >= N/2` is a fixed arithmetic rule. Same input always produces same output.
- **Branch-free:** `popcount` is a bitwise operation. The threshold comparison is a single `select`.
- **Symmetric:** Both directions use the boundary state buffer as their interface. Neither dispatch reads the other's "current" output.
- **Bidirectional:** Structures can cross the boundary in both directions. A pattern arriving from the base grid expands into the fine region. A pattern reaching the fine region's edge aggregates back into the base grid.

#### Why majority vote?

The alternatives and why they're worse:

| Rule | Behavior | Problem |
|------|----------|---------|
| Any alive → alive | Fine edge `[1,0,0,0]` reads as alive | Overly sensitive. Single fine cells leak into base grid. |
| All alive → alive | Fine edge `[1,1,1,0]` reads as dead | Overly strict. Patterns die at the boundary. |
| Majority (≥ N/2) | Fine edge `[1,1,0,0]` → alive; `[1,0,0,0]` → dead | Balanced. Stable structures cross; noise doesn't. |

### 4.3 Region Adjacency

Two hi-res regions may be placed near each other but must have a minimum gap of 1 base cell between them. Adjacent regions do not communicate directly — all cross-resolution data flows through the base grid:

1. Region A's fine edge cells aggregate into the boundary state buffer (inward)
2. The base grid reads those aggregated values as neighbor state
3. On the next tick, the base cells between the two regions are read by the boundary extraction pass
4. Region B's fine edge cells read the expanded base values (outward)

This introduces one tick of latency for patterns crossing between regions, which is acceptable — the base cells in the gap simulate normally and relay the signal naturally. Normalization enforces the minimum gap: if a newly placed region would overlap or be adjacent to an existing region, the placement is rejected with an error.

### 4.4 Alternatives Considered

#### Option B: Unidirectional Downsampling

Fine cells read base cells outward; base cells ignore fine cells entirely.

**Rejected:** Fails bidirectional requirement. Patterns entering a high-res region never return. The region becomes a sink.

#### Option C: Dead Zone

A 1-cell-wide dead border surrounds each high-res region. Boundary cells always read 0.

**Rejected:** No simulation interaction across the boundary. Defeats much of the purpose.

#### Option D: Interpolated Transition Band

A gradient band where resolution smoothly transitions from 1x to Nx.

**Rejected:** Fractional cell states aren't meaningful in a binary automaton. Enormous complexity for marginal benefit.

---

## 5. Compute Shader Strategy

**Design principle: favor time over space.** Pre-compute and duplicate data into flat, contiguous buffers rather than computing indirections on-the-fly. Larger buffers are cheap; cache misses and per-invocation branching are not.

### 5.1 Dispatch Order

Each frame runs dispatches sequentially within a single command encoder:

```
Frame N:
  1. Dispatch: boundary extraction (aggregate fine→base edges, expand base→fine edges)
  2. Dispatch: base grid compute (reads boundary buffer for inward-facing neighbors)
  3. Dispatch: region 0 compute (reads boundary buffer for outward-facing neighbors)
  4. Dispatch: region 1 compute (reads boundary buffer for outward-facing neighbors)
  ...
  N+2. Swap all buffer pairs (base + each region)
```

All dispatches within a frame read from "previous" buffers and write to "next" buffers. The boundary extraction pass (step 1) reads from previous-generation buffers only, so dispatch order within the frame has no data hazard. The sequential ordering is for command encoder simplicity, not correctness — a future optimization could batch independent region dispatches.

### 5.2 Pre-Expanded Boundary State Buffer

The boundary state buffer is the **only** cross-resolution communication channel. It is written once per frame (step 1) and read by all subsequent dispatches. The buffer pre-computes both directions:

```rust
pub struct BoundaryState {
    /// Full ring including corners: for a WxH base-cell region,
    /// the ring is (W+2)*(H+2) - W*H = 2(W+H) + 4 base cells.
    ///
    /// Outward ring: each ring base cell expanded to N virtual fine cells.
    ///   Edge cells: N entries each (replicated along the shared edge).
    ///   Corner cells: N×N entries each (replicated into a full sub-block).
    ///   Total: 2(W+H)*N + 4*N*N entries per region.
    ///
    /// Inward ring: 2(W+H) + 4 base-cell entries (majority-vote aggregate
    ///   of fine cells along each shared edge/corner).
    ///
    /// Stored contiguously per region. Total size is bounded and pre-allocated.
    pub buf: wgpu::Buffer,
    pub offsets: Vec<BoundaryRegionLayout>,
}

pub struct BoundaryRegionLayout {
    pub outward_offset: u32,  // byte offset to expanded base→fine ring (edges + corners)
    pub outward_count: u32,   // number of virtual fine cells in outward ring
    pub inward_offset: u32,   // byte offset to aggregated fine→base ring
    pub inward_count: u32,    // number of base cells in inward ring (edges + corners)
}
```

The ring includes the 4 corner base cells. A corner cell is the base cell diagonally adjacent to a region corner (e.g., the cell at `(x1-1, y1-1)` for the top-left corner). Corner cells are expanded to N×N virtual fine cells in the outward ring, so a fine cell at position (0, 0) can read its diagonal neighbor without any special case. For the inward direction, the corner aggregate uses the N×N block of fine cells at the region corner (e.g., the top-left N×N block), applying the same majority vote rule.

**Why pre-expand?** The fine-cell compute shader could compute the expansion on-the-fly (read one base cell, replicate to N virtual neighbors). But that means N fine-cell invocations all read the same base cell word — a serial bottleneck on the memory bus. Pre-expanding into a flat buffer means each fine-cell invocation reads its own unique word at a predictable stride. The expansion cost is paid once (in the boundary extraction dispatch) rather than N times per boundary cell per frame.

The buffer is pre-allocated at region creation time to the maximum possible size for the region's perimeter. No per-frame allocation.

### 5.3 Base Grid Masking

The base grid compute shader skips cells owned by high-res regions using a **pre-computed mask buffer** — a bitpacked buffer (same format as cells) where 1 = "this cell is owned by a high-res region, skip it."

```wgsl
let masked = region_mask[word_idx];
dst[word_idx] = (alive | frozen[word_idx]) & ~masked;
```

The mask buffer is rebuilt only when regions are added, removed, resized, or toggled — not per frame. It reuses the existing bitpacked infrastructure (same word size, same indexing). Branch-free: the AND-NOT operation zeroes masked cells regardless of their computed state.

### 5.4 Double Buffering

Each high-res region maintains its own `buf_a`/`buf_b` pair, ping-ponging independently. The base grid's double buffering continues as-is. All dispatches within a frame read from the "previous" buffer and write to the "next" buffer. After all dispatches complete, all buffer pairs swap simultaneously.

### 5.5 Fine-Cell Neighbor Reads

Within a high-res region, the GoL compute shader reads 8 neighbors per cell. For interior cells, this is a standard 2D bitpacked lookup into the region's own buffer. For cells at the region boundary, the neighbor lookup indexes into the pre-expanded boundary state buffer instead.

The shader determines interior vs. boundary using arithmetic (no branching):

```wgsl
// fine_x, fine_y are the cell's position within the region [0, cols) x [0, rows)
// For each of 8 neighbors, compute the offset:
let nx = fine_x + dx;  // dx in {-1, 0, 1}
let ny = fine_y + dy;  // dy in {-1, 0, 1}
let in_bounds = u32(nx >= 0 && nx < i32(cols) && ny >= 0 && ny < i32(rows));
let region_val = read_bit(region_buf, u32(nx), u32(ny), cols);
let boundary_val = read_boundary(boundary_buf, outward_offset, nx, ny, ...);
let neighbor = select(boundary_val, region_val, in_bounds == 1u);
```

No branching. Both values are always read (the out-of-bounds read from `region_buf` is harmless — it reads garbage that gets discarded by `select`). The `select` chooses the correct value based on bounds.

---

## 6. Render Pipeline Integration

### 6.1 Fragment Shader Changes

The fragment shader currently computes cell state from a single bitpacked buffer at uniform pitch. With multi-res regions, it needs to:

1. Determine if the current fragment falls within a high-res region
2. If yes: read from the region's buffer at the fine pitch
3. If no: read from the base buffer as usual

```wgsl
struct HiResRegionMeta {
    rect: vec4i,       // [x1, y1, x2, y2] in base cell-space
    multiplier: u32,   // 4 or 8
    buffer_offset: u32, // offset into the hi-res cell buffer
    cols: u32,         // fine-cell columns
    pad: u32,
}

fn get_cell_state(cx: u32, world_row: i32, fine_sub_x: i32, fine_sub_y: i32) -> f32 {
    var result = read_base_cell(cx, world_row);
    for (var i = 0u; i < hires_meta.region_count; i = i + 1u) {
        let r = hires_regions[i];
        let in_region = select(0.0, 1.0,
            i32(cx) >= r.rect.x && i32(cx) <= r.rect.z
            && world_row >= r.rect.y && world_row <= r.rect.w);
        // Compute fine-cell coordinates (garbage when out of region, discarded by select)
        let fine_cx = (i32(cx) - r.rect.x) * i32(r.multiplier) + fine_sub_x;
        let fine_ry = (world_row - r.rect.y) * i32(r.multiplier) + fine_sub_y;
        let fine_val = read_fine_cell(r.buffer_offset, fine_cx, fine_ry, r.cols);
        result = select(result, fine_val, in_region > 0.5);
    }
    return result;
}
```

This follows the project's select-accumulate pattern (same as zones and decals). No early returns, no branching. All region buffers are read unconditionally — the garbage reads for non-matching regions are discarded by `select`. Since regions are non-overlapping, at most one `select` replaces the base value per fragment.

### 6.2 Grid Line Rendering

High-res regions need finer grid lines. The minor pitch within a region is `pitch_minor / multiplier`. The shader adjusts grid line coverage based on which region (if any) the fragment falls in:

```wgsl
let effective_pitch = select(
    pitch_minor,
    pitch_minor / f32(region.multiplier),
    in_hires_region
);
```

Major grid lines within high-res regions can optionally be drawn at the base cell boundaries (every Nth fine line), providing visual continuity.

### 6.3 Visual Transition at Boundaries

At the boundary between resolutions, the grid density changes abruptly. Options:

- **Hard edge:** Grid lines simply change density. Clear and honest.
- **Fade band:** A 1-cell-wide transition where grid line opacity fades, similar to blank zone fade edges.
- **Border line:** A distinct border line (thicker, different color) marking the resolution boundary.

Recommend **hard edge + border line** for Phase 1. It's visually clear and communicates the resolution change to the viewer.

---

## 7. Data Model

### 7.1 TypeScript Types

```typescript
// app/src/types/hiresRegion.ts

export type ResolutionMultiplier = 4 | 8;

/**
 * Initial state for fine cells when a region is created or re-enabled.
 * - 'random': random with ~25% density (default)
 * - 'dead': all fine cells start dead
 * - 'inherit': each base cell's alive/dead state is replicated to all N×N fine cells
 * - 'downsample': (disable→enable only) majority-vote aggregate of prior fine state
 */
export type RegionInitState = 'random' | 'dead' | 'inherit' | 'downsample';

export interface HiResRegion {
  id: string;
  x1: number;             // base cell-space, inclusive
  y1: number;
  x2: number;
  y2: number;
  multiplier: ResolutionMultiplier;
  initState: RegionInitState;
  frozenCountsInVote: boolean;  // whether frozen fine cells count in majority vote
  enabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface HiResRegionStoragePayload {
  version: number;
  regions: HiResRegion[];
}

export const MAX_HIRES_REGIONS = 8;
export const HIRES_STORAGE_VERSION = 1;
export const HIRES_STORAGE_KEY = `gol.hires.v${HIRES_STORAGE_VERSION}`;
export const DEFAULT_INIT_STATE: RegionInitState = 'random';
export const DEFAULT_FROZEN_COUNTS_IN_VOTE = false;
```

### 7.2 Memory Budget

#### Per-Region Buffer Sizes

| Region size (base cells) | Multiplier | Fine cells | Buffer pair (x2) | Frozen mask | Boundary state | Total |
|--------------------------|-----------|-----------|------------------|-------------|---------------|-------|
| 50 x 20 (1,000) | 4x | 200x80 = 16,000 | ~1 KB | ~500 B | ~100 B | ~1.6 KB |
| 50 x 20 (1,000) | 8x | 400x160 = 64,000 | ~4 KB | ~2 KB | ~200 B | ~6.2 KB |
| 200 x 50 (10,000) | 4x | 800x200 = 160,000 | ~10 KB | ~5 KB | ~400 B | ~15.4 KB |
| 200 x 50 (10,000) | 8x | 1600x400 = 640,000 | ~40 KB | ~20 KB | ~800 B | ~60.8 KB |

#### Worst-Case Totals (8 regions at max size)

| Configuration | Fine cells total | GPU memory |
|---------------|-----------------|------------|
| 8 × 200x50 at 4x | 1.28M | ~123 KB |
| 8 × 200x50 at 8x | 5.12M | ~486 KB |
| Cap: 4M fine cells | 4M | ~380 KB |

#### 2026 Device GPU Memory Context

| Device tier | Representative GPU | VRAM | Multi-res budget as % of VRAM |
|-------------|-------------------|------|------------------------------|
| Entry desktop | Intel Arc A380 / AMD RX 7600 | 6-8 GB | < 0.01% |
| Mid desktop | NVIDIA RTX 5060 / AMD RX 8700 | 12-16 GB | < 0.005% |
| High desktop | NVIDIA RTX 5080 / AMD RX 9070 XT | 16-24 GB | < 0.003% |
| Integrated (laptop) | Apple M4 / Intel Arc (integrated) | 8-16 GB shared | < 0.005% |
| Integrated (low-end) | Apple M2 / Intel Xe (integrated) | 8 GB shared | < 0.005% |
| Mobile (high-end) | Apple A18 Pro / Snapdragon 8 Gen 4 | 6-8 GB shared | < 0.01% |
| Mobile (mid) | Apple A16 / Snapdragon 8 Gen 2 | 4-6 GB shared | < 0.01% |

The entire multi-res system at maximum capacity (4M fine cells, ~380 KB) is negligible on every 2026 device class. Even the most constrained mobile GPUs have 4 GB of shared memory — the multi-res budget is 0.01% of that.

**WebGPU buffer limits:** The WebGPU spec guarantees `maxBufferSize >= 256 MB` and `maxStorageBufferBindingSize >= 128 MB`. Our largest single buffer (640K fine cells = ~20 KB) is four orders of magnitude below these limits.

**Proposed cap:** 4M total fine cells across all regions. This produces ~380 KB of GPU buffers — conservative enough to never matter on any target device, generous enough for 8 fully-loaded 8x regions.

---

## 8. Interaction with Existing Systems

### 8.1 Frozen Cell Mask

The frozen cell mask operates on the base grid. For high-res regions, a separate per-region frozen mask would be needed:

```rust
pub struct HiResRegion {
    // ...
    pub frozen_buf: wgpu::Buffer,  // fine-resolution frozen mask
}
```

Text rendered into a high-res region would rasterize at the fine resolution (e.g., 800px wide instead of 200px), producing a much more detailed frozen cell silhouette.

The `frozenCountsInVote` flag (default `false`) controls whether frozen fine cells are included in the majority vote during boundary extraction. When `false`, the extraction pass reads `(alive & ~frozen)` — only naturally alive fine cells contribute. This prevents permanent text at the boundary from bleeding a constant alive signal into the base grid. When `true`, frozen cells count as alive, creating a persistent boundary wall that interacts with the base simulation.

### 8.2 SDF Text

High-res regions reduce — but don't eliminate — the need for SDF text. At 4x resolution, text that was 30 cells tall becomes 120 fine cells tall. At 8x, it's 240. This is approaching pixel-level fidelity for typical grid pitches, making the SDF overlay optional.

The systems complement each other:
- **High-res region + `cells` mode:** Fine-grained cell text with rich simulation interaction
- **SDF-only (`sdf` mode):** Text outside high-res regions, sharp at any scale, no simulation interaction
- **High-res region + SDF (`both` mode):** Fine simulation interaction with SDF visual polish on top

### 8.3 Blank Zones

Blank zones operate in base cell-space. A blank zone overlapping a high-res region would suppress grid lines at the fine pitch. No special handling needed — the zone rect check works the same way, just against base cell coordinates.

### 8.4 Decals

Decals also operate in base cell-space. A decal overlapping a high-res region would render at the same visual scale. The decal system doesn't need to know about resolution levels — it composites after cell ink, regardless of density.

---

## 9. Tooling Requirements

### 9.1 Region Management UI

High-res regions need zone-like CRUD:
- Place region by dragging (base cell-space coordinates)
- Select resolution multiplier (4x or 8x)
- Enable/disable individual regions
- Delete regions
- Visualize region boundaries on the grid
- Memory usage indicator per region

### 9.2 Text Placement in High-Res Regions

When placing text inside a high-res region:
- The rasterization target switches from base cell resolution to fine cell resolution
- The font size scales by the multiplier
- The text block's coordinate system maps to fine cells within the region
- The UI should indicate the effective resolution ("200 cells wide at 4x = 800 fine cells")

### 9.3 Region Editor

For advanced use:
- Resize region boundaries (triggers buffer reallocation + re-simulation)
- Change multiplier (triggers buffer reallocation + re-rasterization of contained text)
- Copy/paste region state (export/import fine cell patterns)
- Clear region cells (reset to random or empty)

---

## 10. Performance Considerations

### 10.1 Compute Cost

Each high-res region adds a separate compute dispatch. The GoL rule is the same — the cost scales linearly with the number of fine cells. A 200x50 region at 8x (640K fine cells) adds roughly the same compute cost as 640K base cells.

### 10.2 Render Cost

The fragment shader gains a per-fragment region lookup loop (up to 8 iterations). This is the same pattern as zones and decals — `select`-weighted, spatially coherent. Fragments within a region all take the same branch, so wave coherence is preserved.

### 10.3 Memory Bandwidth

Each high-res region's buffer is accessed independently. For 8 regions, this means up to 8 additional buffer reads per fragment (to check cell state). Cache behavior depends on region layout — regions that cover large screen areas benefit from spatial locality.

### 10.4 Budget

| Component | Cost | Notes |
|-----------|------|-------|
| Base grid masking | ~0% | One buffer read + AND-NOT per word, branch-free |
| Boundary extraction dispatch | < 0.1% | Pre-expand + majority-vote aggregate, once per frame |
| Per-region compute dispatch | Linear in fine cell count | Same GoL shader, different buffer, flat reads |
| Fragment region lookup | ~1% per region | 8 iterations max, spatially coherent |
| Total GPU memory (8 regions, 4M fine cells) | ~380 KB | < 0.01% of any 2026 GPU |

---

## 11. Implementation Prerequisites

All prerequisites resolved. Decisions recorded below for reference during implementation.

### 11.1 Compute Pipeline Extension Strategy

**Status:** Resolved — single pipeline, per-dispatch bind groups

The existing compute pipeline (`simulation.rs` + `compute.wgsl`) uses a self-contained bind group with 3 bindings: uniforms, src cells (read), dst cells (write). The multi-res system extends this as follows:

**Base grid compute** gains 2 additional bindings:

| Binding | Name | Type | Purpose |
|---------|------|------|---------|
| 3 | `region_mask` | Storage RO | Bitpacked mask: 1 = cell owned by hi-res region |
| 4 | `inward_boundary` | Storage RO | Aggregated fine→base neighbor state for boundary cells |

The base compute shader's output line changes from:
```wgsl
dst[wy * wpr + wx] = count3 | (count2 & c);
```
to:
```wgsl
let raw = count3 | (count2 & c);
dst[wy * wpr + wx] = raw & ~region_mask[wy * wpr + wx];
```

For boundary neighbor reads, the base shader checks whether a neighbor cell is masked. If masked, it reads from `inward_boundary` instead of `src`. This is arithmetic (index lookup, `select`), not a branch.

**Per-region compute** reuses the same GoL pipeline (`count8`, `ws`, `es`, same rule) with a different bind group per dispatch. Each region bind group binds:

| Binding | Content |
|---------|---------|
| 0 | Region uniforms (cols, rows, words_per_row, multiplier) |
| 1 | Region src buffer (read) |
| 2 | Region dst buffer (write) |
| 3 | Outward boundary state (read) — pre-expanded base cells |

The pipeline is created once. Bind groups are created per-region at region creation time and rebuilt on resize. This mirrors how `Simulation` already swaps `bind_group_a`/`bind_group_b` for ping-pong — same pattern, more bind groups.

**Separate pipeline for boundary extraction** — see §11.2. This is a distinct shader with its own layout.

### 11.2 Boundary Extraction Compute Shader

**Status:** Resolved — WGSL sketch below

The boundary extraction shader runs once per frame before all GoL dispatches. It processes one region at a time (dispatched per-region with different bind groups, same pipeline).

**Bind group layout:**

| Binding | Name | Type | Content |
|---------|------|------|---------|
| 0 | `params` | Uniform | Region rect, multiplier, ring dimensions, frozen_vote flag |
| 1 | `base_cells` | Storage RO | Base grid previous-generation buffer |
| 2 | `fine_cells` | Storage RO | Region previous-generation buffer |
| 3 | `fine_frozen` | Storage RO | Region frozen mask (zero-length if Phase 1 / no frozen) |
| 4 | `outward_ring` | Storage RW | Pre-expanded base→fine virtual cells |
| 5 | `inward_ring` | Storage RW | Aggregated fine→base majority-vote results |

**WGSL sketch:**

```wgsl
// Boundary extraction — one dispatch per region per frame.
// Each thread handles one base cell in the ring surrounding the region.
// Thread ID maps to ring index: 0..ring_size-1.

struct Params {
    // Region rect in base cell-space
    region_x1: i32, region_y1: i32, region_x2: i32, region_y2: i32,
    // Grid dimensions
    multiplier: u32,
    base_wpr: u32,       // base grid words_per_row
    fine_wpr: u32,       // region fine words_per_row
    fine_rows: u32,      // region fine rows
    // Ring layout
    ring_size: u32,      // total base cells in ring (edges + corners)
    outward_stride: u32, // entries per ring cell in outward buffer (N for edges, N*N for corners)
    frozen_vote: u32,    // 0 = exclude frozen, 1 = include
    _pad: u32,
}

@group(0) @binding(0) var<uniform>            params: Params;
@group(0) @binding(1) var<storage, read>      base_cells: array<u32>;
@group(0) @binding(2) var<storage, read>      fine_cells: array<u32>;
@group(0) @binding(3) var<storage, read>      fine_frozen: array<u32>;
@group(0) @binding(4) var<storage, read_write> outward_ring: array<u32>;
@group(0) @binding(5) var<storage, read_write> inward_ring: array<u32>;

// Read a single bit from a bitpacked buffer.
fn read_bit(buf: ptr<storage, array<u32>, read>, x: u32, y: u32, wpr: u32) -> u32 {
    let word_idx = y * wpr + (x >> 5u);
    let bit_idx = x & 31u;
    return ((*buf)[word_idx] >> bit_idx) & 1u;
}

// Count alive fine cells in a strip of N cells along one edge of a base cell.
// dir: 0=north (row=0), 1=east (col=cols-1), 2=south (row=rows-1), 3=west (col=0)
// base_idx: which base cell along this edge (0-based)
fn count_fine_edge(base_cx: i32, base_cy: i32, edge: u32) -> u32 {
    let N = params.multiplier;
    var count = 0u;
    // Map base cell to fine cell origin within the region
    let fine_ox = u32(base_cx - params.region_x1) * N;
    let fine_oy = u32(base_cy - params.region_y1) * N;

    for (var i = 0u; i < N; i = i + 1u) {
        // Determine fine cell coords based on which edge we're reading
        var fx: u32; var fy: u32;
        if edge == 0u      { fx = fine_ox + i; fy = fine_oy; }         // north edge
        else if edge == 1u { fx = fine_ox + N - 1u; fy = fine_oy + i; } // east edge
        else if edge == 2u { fx = fine_ox + i; fy = fine_oy + N - 1u; } // south edge
        else               { fx = fine_ox; fy = fine_oy + i; }         // west edge

        var alive = read_bit(&fine_cells, fx, fy, params.fine_wpr);
        // Exclude frozen cells from vote if flag is 0
        let frozen = read_bit(&fine_frozen, fx, fy, params.fine_wpr);
        alive = alive & (frozen * params.frozen_vote | (1u - frozen));
        count = count + alive;
    }
    return count;
}

// Count alive fine cells in the NxN corner block of the region.
// corner: 0=TL, 1=TR, 2=BR, 3=BL
fn count_fine_corner(corner: u32) -> u32 {
    let N = params.multiplier;
    var fx0: u32; var fy0: u32;
    if corner == 0u      { fx0 = 0u;                            fy0 = 0u; }
    else if corner == 1u { fx0 = (params.fine_wpr * 32u) - N;   fy0 = 0u; }
    else if corner == 2u { fx0 = (params.fine_wpr * 32u) - N;   fy0 = params.fine_rows - N; }
    else                 { fx0 = 0u;                            fy0 = params.fine_rows - N; }

    var count = 0u;
    for (var dy = 0u; dy < N; dy = dy + 1u) {
        for (var dx = 0u; dx < N; dx = dx + 1u) {
            var alive = read_bit(&fine_cells, fx0 + dx, fy0 + dy, params.fine_wpr);
            let frozen = read_bit(&fine_frozen, fx0 + dx, fy0 + dy, params.fine_wpr);
            alive = alive & (frozen * params.frozen_vote | (1u - frozen));
            count = count + alive;
        }
    }
    return count;
}

// Read a base cell and replicate it into the outward ring buffer.
fn expand_base_cell(base_cx: i32, base_cy: i32, out_offset: u32, count: u32) {
    // Wrap base cell coordinates
    let bx = u32(base_cx) & (params.base_wpr * 32u - 1u);
    let by = u32(base_cy); // y wrapping handled by caller or clamped
    let val = read_bit(&base_cells, bx, by, params.base_wpr);
    // Write val to count consecutive entries in outward_ring
    for (var i = 0u; i < count; i = i + 1u) {
        // Pack into bitpacked outward buffer
        let word_idx = (out_offset + i) >> 5u;
        let bit_idx = (out_offset + i) & 31u;
        // Atomic OR to set bit (safe since each thread writes non-overlapping ranges)
        outward_ring[word_idx] = outward_ring[word_idx] | (val << bit_idx);
    }
}

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if idx >= params.ring_size { return; }

    let N = params.multiplier;
    let threshold = N / 2u;

    // Map ring index to base cell position and edge/corner type.
    // Ring layout: [north_edge(W cells), east_edge(H cells),
    //              south_edge(W cells), west_edge(H cells),
    //              TL_corner, TR_corner, BR_corner, BL_corner]
    let W = u32(params.region_x2 - params.region_x1 + 1);
    let H = u32(params.region_y2 - params.region_y1 + 1);

    var base_cx: i32; var base_cy: i32;
    var edge: u32; var is_corner = false;
    var corner_id: u32;
    var out_count: u32;

    if idx < W {
        // North edge
        base_cx = params.region_x1 + i32(idx);
        base_cy = params.region_y1 - 1;
        edge = 0u; out_count = N;
    } else if idx < W + H {
        // East edge
        base_cx = params.region_x2 + 1;
        base_cy = params.region_y1 + i32(idx - W);
        edge = 1u; out_count = N;
    } else if idx < 2u * W + H {
        // South edge
        base_cx = params.region_x1 + i32(idx - W - H);
        base_cy = params.region_y2 + 1;
        edge = 2u; out_count = N;
    } else if idx < 2u * W + 2u * H {
        // West edge
        base_cx = params.region_x1 - 1;
        base_cy = params.region_y1 + i32(idx - 2u * W - H);
        edge = 3u; out_count = N;
    } else {
        // Corner
        is_corner = true;
        corner_id = idx - 2u * W - 2u * H;
        out_count = N * N;
        if corner_id == 0u      { base_cx = params.region_x1 - 1; base_cy = params.region_y1 - 1; }
        else if corner_id == 1u { base_cx = params.region_x2 + 1; base_cy = params.region_y1 - 1; }
        else if corner_id == 2u { base_cx = params.region_x2 + 1; base_cy = params.region_y2 + 1; }
        else                    { base_cx = params.region_x1 - 1; base_cy = params.region_y2 + 1; }
        edge = 0u; // unused for corners
    }

    // ── Outward: expand base cell into virtual fine cells ──
    // Compute output offset: edges are N entries each, corners are N*N.
    var out_offset: u32;
    if idx < 2u * W + 2u * H {
        out_offset = idx * N;
    } else {
        out_offset = (2u * W + 2u * H) * N + (idx - 2u * W - 2u * H) * N * N;
    }
    expand_base_cell(base_cx, base_cy, out_offset, out_count);

    // ── Inward: aggregate fine edge into one base cell value ──
    var fine_count: u32;
    if is_corner {
        fine_count = count_fine_corner(corner_id);
        // Corner threshold is N*N/2
        let corner_threshold = (N * N) / 2u;
        let alive = select(0u, 1u, fine_count >= corner_threshold);
        let word_idx = idx >> 5u;
        let bit_idx = idx & 31u;
        inward_ring[word_idx] = inward_ring[word_idx] | (alive << bit_idx);
    } else {
        fine_count = count_fine_edge(
            select(base_cx, params.region_x1 + i32(idx), edge < 2u),
            select(base_cy, params.region_y1 + i32(select(idx - W, idx - 2u * W - H, edge == 3u)), edge >= 2u),
            edge
        );
        let alive = select(0u, 1u, fine_count >= threshold);
        let word_idx = idx >> 5u;
        let bit_idx = idx & 31u;
        inward_ring[word_idx] = inward_ring[word_idx] | (alive << bit_idx);
    }
}
```

**Notes on the sketch:**
- The `count_fine_edge` function's coordinate mapping for the inward pass needs the fine cell coordinates of the edge strip *facing* the external base cell, not the base cell's own position. The mapping above uses the edge direction to select the correct strip (row 0 for north, last column for east, etc.).
- The outward ring is zeroed by the CPU before each frame (single `queue.write_buffer` of zeros). Each thread then sets bits via OR — no atomics needed because ring indices are non-overlapping.
- For Phase 1 (single region, 4x only), `fine_frozen` is a zero-length buffer and `frozen_vote = 0`, so the frozen logic is a no-op that compiles to `alive & 1u = alive`.
- Dispatch dimensions: `ceil(ring_size / 64)` workgroups. For a 200x50 region: ring_size = 2(200+50) + 4 = 504 → 8 workgroups. Negligible.

### 11.3 Multi-Region Buffer Exposure to Fragment Shader

**Status:** Resolved — Option A (concatenated buffer)

All region fine-cell buffers are stored contiguously in a single `var<storage, read>` binding. Each region's `HiResRegionMeta` includes a `buffer_offset` (in u32 words) into this buffer.

```
Concatenated buffer layout:
┌──────────────────┬──────────────────┬─────┐
│ Region 0 cells   │ Region 1 cells   │ ... │
│ (offset 0)       │ (offset R0_words)│     │
└──────────────────┴──────────────────┴─────┘
```

The Rust side maintains a `Vec<u32>` with region offsets. On region add/remove/resize:
1. Recompute offsets for all active regions
2. Allocate a new GPU buffer of the total size
3. Copy each region's cell data at its new offset via `queue.write_buffer`
4. Rebuild the render bind group with the new buffer

This happens infrequently (user action, not per-frame). The per-frame compute dispatches write directly to their own region's slice within this buffer using the offset.

**Render bind group addition:**

| Binding | Name | Type | Content |
|---------|------|------|---------|
| 14 | `hires_meta` | Uniform | `HiResGlobalMeta` — region count + pad |
| 15 | `hires_regions` | Storage RO | `HiResRegionMeta[8]` — per-region rect, multiplier, offset, cols |
| 16 | `hires_cells` | Storage RO | Concatenated fine-cell buffer (current generation) |

### 11.4 Binding Slot Reservation

**Status:** Resolved — reserve now

Committed layout for render bind group (Group 0):

| Binding | Feature | Name | Status |
|---------|---------|------|--------|
| 0-5 | Core | uniforms, cells, prev_cells, paper, noise_tex, noise_smp | Implemented |
| 6-7 | Blank zones | zone_meta, zones | Implemented |
| 8-9 | Decals | decal_meta, decals | Implemented |
| 10-13 | SDF text | text_meta, text_glyphs, text_atlas, text_smp | Reserved (placeholder) |
| 14-16 | Multi-res | hires_meta, hires_regions, hires_cells | Reserved (placeholder) |

When SDF text is not yet implemented, bindings 10-13 get placeholder buffers (16-byte uniform for meta, zero-length storage for glyphs, 1x1 texture for atlas, default sampler). Same pattern as zones and decals use when empty.

When multi-res is not yet implemented, bindings 14-16 get placeholder buffers (16-byte uniform with `region_count = 0`, zero-length storage for regions and cells).

### 11.5 Rust Struct Consistency

**Status:** Resolved — unified canonical definition

The canonical `HiResRegion` struct for Phase 1 (§3.3 is authoritative):

```rust
pub struct HiResRegion {
    pub rect: [i32; 4],         // [x1, y1, x2, y2] in base cell-space
    pub multiplier: u32,        // 4 or 8
    pub buf_a: wgpu::Buffer,    // bitpacked fine cells (current)
    pub buf_b: wgpu::Buffer,    // bitpacked fine cells (previous)
    pub cols: u32,              // (x2 - x1 + 1) * multiplier
    pub rows: u32,              // (y2 - y1 + 1) * multiplier
    // Phase 2 adds: pub frozen_buf: wgpu::Buffer
}
```

§8.1's `frozen_buf` reference is a forward reference to Phase 2. The Phase 1 struct does not include it. The compute shader's frozen-related bindings use a zero-length buffer placeholder until Phase 2.

### 11.6 Fragment Shader Read Overhead

**Status:** Acknowledged, acceptable

The select-accumulate pattern (§6.1) reads from every region's buffer for every fragment — up to 8 storage buffer reads discarded by `select` for fragments outside all regions. This matches the existing zone (128 iterations) and decal (32 iterations) patterns. Acceptable because:

- Reads are cache-coherent (adjacent fragments hit same words)
- Total data fits in L2 (~380 KB worst case)
- Loop count is small (8 max)

Mitigation path if profiling reveals a bottleneck: screen-space region ID texture (one `u8` per cell, rendered once per frame). Phase 3 optimization, not needed for Phase 1.

---

## 12. Implementation Phases

### Prerequisites Checklist

All resolved (see §11):

- [x] Compute pipeline extension strategy — single pipeline, per-dispatch bind groups (§11.1)
- [x] Boundary extraction WGSL — sketched, ~130 lines (§11.2)
- [x] Multi-region buffer exposure — Option A, concatenated buffer with offsets (§11.3)
- [x] Binding slot reservation — 10-13 SDF text, 14-16 multi-res, placeholders for inactive (§11.4)
- [x] Rust struct unified — Phase 1 canonical in §3.3, `frozen_buf` deferred to Phase 2 (§11.5)

### Phase 1: Single Region, 4x Only

1. Add `HiResRegion` struct to `simulation.rs`
2. Allocate fine-cell buffer pair + boundary state buffer for one region
3. Add pre-computed region mask buffer to base grid compute shader
4. Add boundary extraction dispatch (expand base→fine, aggregate fine→base via majority vote)
5. Add 4x compute dispatch with pre-expanded boundary reads
6. Wire base grid compute to read aggregated inward neighbors from boundary buffer
7. Modify fragment shader to read fine cells within region rect
8. Adjust grid line pitch within region
9. Add region management CRUD (types, normalization, storage, composable, worker protocol)
10. Add `GridHiResTab.vue` with basic UI

Result: One 4x region works end-to-end with bidirectional edge behavior. Patterns cross the boundary in both directions.

### Phase 2: Multiple Regions, 8x Support

1. Extend to 8 concurrent regions
2. Add 8x multiplier support
3. Add region boundary rendering (border line style)
4. Per-region frozen cell mask for text integration
5. Region-aware text rasterization at fine resolution
6. Memory usage indicators in UI (per-region + total fine cell count vs. 4M cap)

### Phase 3: Polish

1. Tunable aggregation threshold (expose majority-vote threshold as a parameter)
2. Transition band rendering options
3. Region resize/move tools
4. Pattern import/export for regions
5. Performance profiling with multiple active regions

---

## 13. Open Questions

| # | Question | Status |
|---|----------|--------|
| Q1 | Should regions overlap? | Resolved: No. Enforce non-overlapping + minimum 1 base-cell gap in normalization. Adjacent regions route through base grid (§4.3). |
| Q2 | Should the base grid still simulate under a disabled region? | Resolved: Yes. Base cells resume with majority-vote downsampled state from fine cells. Fine buffers retained until delete or re-init (§3.4). |
| Q3 | What happens when a region is resized? | Buffer reallocation. Fine cell state is lost for cells outside the new boundary. New cells initialize per `initState`. |
| Q4 | Should regions persist fine cell state across page reloads? | Deferred. Fine cell state is large (potentially hundreds of KB). Could use IndexedDB for regions with `persist: true` flag. |
| Q5 | Maximum total fine cells across all regions? | Resolved: 4M fine cells total (~380 KB GPU memory). Negligible on all 2026 device tiers. |
| Q6 | Should the boundary expansion create visible frozen-like walls? | Resolved: No — expanded cells are pre-computed into the boundary state buffer for reads only. They don't exist in region buffers and don't render. |
| Q7 | How do high-res regions interact with cell toggle (click-to-toggle)? | Deferred. Cell toggle exists but fine-cell coordinate mapping will be designed when multi-res is implemented. |
| Q8 | Should this feature share bindings with the SDF text system or use its own? | Resolved: Own bindings (14-17 tentatively). The SDF system and multi-res system are independent features that can coexist. |
| Q9 | How are corner neighbors handled at region boundaries? | Resolved: Full ring + corners. The boundary state buffer includes 4 corner base cells per region, expanded to N×N virtual fine cells each (§5.2). |
| Q10 | What initial state do fine cells start with? | Resolved: Configurable via `initState` enum — `random` (default), `dead`, `inherit`, `downsample`. See §3.4. |
| Q11 | Do frozen fine cells count in the majority vote? | Resolved: Configurable per region via `frozenCountsInVote` (default false). See §7.1. |
| Q12 | How does the fragment shader maintain wave coherence with region lookups? | Resolved: Select-accumulate pattern — iterate all regions unconditionally, `select` the correct value. No early returns. See §6.1. |

---

## 14. Relationship to SDF Text

Multi-resolution regions and SDF text are complementary, not competing:

| Scenario | Best approach |
|----------|--------------|
| Text that needs simulation interaction at high fidelity | High-res region + `cells` mode |
| Text that needs to look sharp but doesn't interact with simulation | SDF only (`sdf` mode) |
| Text outside any high-res region that needs simulation interaction | Frozen cells at base resolution + SDF overlay (`both` mode) |
| Detailed non-text patterns (art, logos, complex structures) | High-res region (no text system needed) |

The SDF text system (bindings 10-13) can ship independently. Multi-resolution regions (bindings 14-17) are a separate, larger feature that enhances the `cells` render mode when present but is not required for it.
