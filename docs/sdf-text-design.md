# SDF Text System — Requirements & Technical Specification

**Status:** Implementation-ready
**Scope:** Phase A (frozen cells) + Phase B (SDF overlay) + Phase C (polish)
**Renderer:** WebGPU via Rust/WASM (`game_of_life_gpu` crate), single render pass
**Depends on:** Existing render pipeline (bindings 0-9), decal system (bindings 8-9)

---

## 1. Background

The grid renderer currently supports blank zones (grid line suppression) and decals (procedural/bitmap overlays). Both are world-space rectangular regions. Text rendering introduces a fundamentally different requirement: resolution-independent typography that lives inside the simulation world.

### 1.1 Rendering Pipeline Context

The renderer runs a single fragment shader pass. All visual layers composite sequentially within `fs_main`. Text inserts one new compositing step:

1. **SDF text coverage** (after cell-suppression pre-pass, merged into cell ink coverage) — for `renderMode: 'sdf'` or `'both'`, produces smooth glyph coverage from an atlas texture.

The frozen cell mask operates in the compute shader, not the render pipeline — it adds one OR instruction to the existing GoL rule.

Current bind group layout (Group 0, bindings 0-9):

| Binding | Name | Content |
|---------|------|---------|
| 0 | `uniforms` | `RenderUniforms` — grid dims, scroll_y, transition_t |
| 1 | `current_cells` | Bitpacked cell state (current generation) |
| 2 | `previous_cells` | Bitpacked cell state (prior generation) |
| 3 | `paper` | `PaperParams` — grid pitch, line widths, specular |
| 4 | `noise_tex` | Paper fiber noise + analytic derivatives |
| 5 | `noise_smp` | Sampler for noise texture |
| 6 | `zone_meta` | `ZoneMetaGpu` — active zone count |
| 7 | `zones` | `ZoneEntryGpu[128]` — blank zone array |
| 8 | `decal_meta` | `DecalMetaGpu` — active decal count |
| 9 | `decals` | `DecalEntryGpu[32]` — decal array |

Text will add bindings 10-13 (SDF overlay) and one compute shader binding (frozen mask).

### 1.2 Coordinate System

```
px        = frag_pos.x                              // screen pixels, 0 = left
world_y   = frag_pos.y + uniforms.scroll_y          // world pixels (scrolls)
cx        = floor(px / pitch_minor) % screen_cols   // cell column (wrapped)
world_row = floor(world_y / pitch_minor)            // world cell row (infinite)
```

Text glyphs are positioned in world cell-space `(cellX, cellY)`, same convention as zones and decals. Because `world_row` incorporates scroll, text positions require **no update on scroll**.

---

## 2. The Effect

Text lives inside the simulation. Letters are made of the same material as every other living cell — they receive the same sponge-stamp ink texture, the same Beer-Lambert light absorption, the same paper-fiber grain. The difference is that these cells never die. They are frozen in place, permanent fixtures in a world of constant change.

The simulation doesn't know the frozen cells are "text." It only knows they are alive and will stay alive. So it treats them like any other obstacle. Gliders collide with serifs. Oscillators crowd against stems and suffocate. Still lifes nestle into the negative space between letterforms. The text doesn't just sit on top of the simulation — it participates in it. The result is organic: ink pooling around sharp edges, cells dancing along curves, dead zones forming in the lee of thick strokes where overcrowding kills everything that tries to grow.

But frozen cells alone would look terrible. At the grid's native resolution, a letter "R" might be 30 cells tall — a blocky, pixelated silhouette. Acceptable for simulation physics, unacceptable for typography. This is where the second layer comes in.

A signed distance field (SDF) renders the same text with mathematically smooth edges. For each pixel on screen, the fragment shader asks: "how far am I from the nearest edge of this glyph?" The answer — a single floating-point distance — feeds into a `smoothstep` function that produces a clean, anti-aliased boundary. This works at any scale. Zoom in and the edges stay crisp. Zoom out and they stay crisp. The SDF doesn't care about resolution because it's not storing pixels — it's storing geometry.

The two layers occupy the same world-space coordinates but serve different purposes. The frozen cells give the simulation something to push against. The SDF gives the viewer something worth looking at. Both scroll with the grid. Both are locked to cell coordinates.

Each text block chooses its render mode independently:

- **`sdf`** — Pure visual text. Smooth, resolution-independent glyphs composited through the ink/paper pipeline. The simulation doesn't know the text exists — cells pass through it freely. Use this for labels, titles, or any text that should float above the simulation without disturbing it.

- **`cells`** — Pure simulation text. Letters rendered as frozen alive cells at grid resolution. The simulation treats them as obstacles — cells flow around the blocky letterforms. Visually coarse, but the interaction with the simulation is the point.

- **`both`** — The full effect. Frozen cells provide the physics (simulation flows around text), while the SDF overlay provides the visuals (smooth edges replace the blocky silhouette). The viewer sees smooth letterforms with ink texture; the simulation sees a wall of permanently alive cells. Same text, two representations, each optimized for its audience.

### 2.1 Why This Is Fast

The frozen cell mask adds exactly one bitwise OR instruction per 32-cell word in the compute shader. The GoL rule already loads nine neighboring words and runs a carry-save adder tree — one more load and one OR is noise. No branches, no conditionals, no divergence. The frozen buffer is the same size and format as the existing cell buffers, so it rides the same memory access patterns the GPU is already optimized for.

The SDF overlay is a texture sample per glyph per fragment, guarded by a bounding-box hit test. For a typical text block of 20-60 glyphs, most fragments fail the hit test immediately — the `select` multiplication zeros out the contribution without branching. The handful of fragments that actually overlap a glyph perform one bilinear texture fetch from a small (512x512, 256 KB) atlas and one `smoothstep`. This is the same cost profile as the existing decal system, which has already been validated at 32 entries without measurable frame time impact.

The expensive work — rasterizing text to cell coordinates, generating SDF glyphs, packing the atlas — happens once when text is placed. None of it runs per frame. The per-frame cost is purely in the shaders, and it amounts to arithmetic the GPU was designed to do: buffer reads, texture samples, and floating-point math on data that's already in cache.

### 2.2 Font Support

Both `tiny-sdf` and `OffscreenCanvas.fillText()` delegate to the browser's built-in font renderer via CSS font strings. Custom fonts (TTF, OTF, WOFF, WOFF2) are loaded via CSS `@font-face` and referenced by family name. No Rust-side font parsing is required — the browser handles rasterization, hinting, kerning, and format decoding natively.

---

## 3. Definitions

| Term | Meaning |
|------|---------|
| **Text block** | A placed string with font, position, size, and render mode |
| **Frozen cell mask** | A bitpacked GPU buffer marking cells that are permanently alive |
| **SDF** | Signed distance field — a texture storing distance-to-edge for resolution-independent rendering |
| **SDF atlas** | A single `R8unorm` texture packing all generated glyph distance fields |
| **Glyph** | A single character's visual representation, positioned in world cell-space |
| **Render mode** | Per-block choice: `sdf` (visual only), `cells` (simulation only), `both` (combined) |
| **Cell rasterization** | Converting text to a binary grid of cell coordinates via `OffscreenCanvas` thresholding |
| **tiny-sdf** | Mapbox library (~3 KB) that generates SDF glyphs from any browser-renderable font |
| **Wave coherence** | GPU threads within a SIMD wave executing the same instruction path simultaneously |

---

## 4. Functional Requirements

### 4.1 Placement & Configuration

| ID | Requirement |
|----|-------------|
| F-01 | Text blocks are positioned in world cell-space `(cellX, cellY)` with a width in cells (`cellsWide`); height is derived from the font's aspect ratio |
| F-02 | Each text block specifies a CSS font string (e.g. `"bold 48px monospace"`) — any font loadable via `@font-face` is supported |
| F-03 | Each text block has a `renderMode`: `'sdf'`, `'cells'`, or `'both'` |
| F-04 | Text blocks can be individually enabled or disabled without deletion |
| F-05 | Text blocks can be deleted individually or cleared all at once |
| F-06 | Text blocks scroll with the grid (locked to world-space cell coordinates) |
| F-07 | Text blocks are scale-independent — SDF rendering remains sharp at any grid pitch |

### 4.2 Frozen Cell Behavior (modes: `cells`, `both`)

| ID | Requirement |
|----|-------------|
| F-10 | Frozen cells are permanently alive regardless of Game of Life rules |
| F-11 | The simulation counts frozen cells as alive neighbors for adjacent non-frozen cells |
| F-12 | Frozen cells are computed by rasterizing the text string at cell resolution (one canvas pixel = one grid cell) |
| F-13 | The frozen buffer is written once when text is placed, not per frame |
| F-14 | Disabling or removing a text block clears its frozen cells from the mask |

### 4.3 SDF Rendering (modes: `sdf`, `both`)

| ID | Requirement |
|----|-------------|
| F-20 | SDF coverage merges with cell ink coverage via `max(cell_cov, sdf_cov)` |
| F-21 | Text receives the same sponge-stamp, Beer-Lambert absorption, and fiber effects as regular cells |
| F-22 | SDF glyph generation uses `tiny-sdf` and is cached per unique character per font |
| F-23 | The SDF atlas is a single `R8unorm` texture (512x512), updated only when the character set changes |
| F-24 | The SDF glyph loop in the fragment shader follows wave-coherence rules (no `continue`/`break`) |

### 4.4 UI Layout

| ID | Requirement |
|----|-------------|
| F-30 | Text controls live as a dedicated section/tab in the grid tools panel |
| F-31 | The UI exposes: text string, font, position (cellX/cellY), width (cellsWide), render mode, and enabled toggle |
| F-32 | The UI displays a list of placed text blocks with enable/disable and delete controls |

### 4.5 Persistence

| ID | Requirement |
|----|-------------|
| F-40 | Text block state is serialized to localStorage on every change |
| F-41 | Text block state is restored from localStorage on page load |
| F-42 | Storage key is versioned to allow forward migration |

---

## 5. Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| N-01 | Frame time increase with 256 active glyphs across 8 text blocks | < 3% |
| N-02 | Scroll performance regression | Zero — scrolling must not be affected |
| N-03 | Frozen buffer compute cost | < 0.5% — one buffer read + OR per 32-cell word |
| N-04 | No `continue`, `break`, or early-return inside the per-glyph shader loop | Hard rule |
| N-05 | No derivative functions (`fwidth`, `dpdx`, `dpdy`) inside the per-glyph loop | Hard rule |
| N-06 | All rect-rejection must use `select`-weighted output, not control flow divergence | Hard rule |
| N-07 | Maximum text blocks | 8 |
| N-08 | Maximum total glyphs (across all blocks) | 256 |
| N-09 | SDF atlas GPU memory | 256 KB (512x512x1 byte) |
| N-10 | Frozen buffer GPU memory | Same as cell buffer (bitpacked, same size) |
| N-11 | One-time SDF generation latency for full ASCII set | < 200ms |

---

## 6. GPU Data Structures

### 6.1 Frozen Cell Buffer (Compute Shader)

A new storage buffer, same format as `current_cells` (bitpacked `u32` words):

```rust
// In Simulation:
pub frozen_buf: wgpu::Buffer,  // same size as buf_a/buf_b
```

Binding in compute shader:

```wgsl
@group(0) @binding(3) var<storage, read> frozen: array<u32>;
```

### 6.2 TextMetaGpu (Binding 10 — Uniform)

```rust
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct TextMetaGpu {
    pub glyph_count: u32,
    pub pad: [u32; 3],
}
```

### 6.3 TextGlyphGpu (Binding 11 — Storage RO)

```rust
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct TextGlyphGpu {
    // World cell-space position (top-left of glyph bounding box)
    pub cell_x: f32,
    pub cell_y: f32,
    // Glyph dimensions in cells
    pub cell_w: f32,
    pub cell_h: f32,
    // UV coordinates in atlas (normalized [0,1])
    pub uv_x: f32,
    pub uv_y: f32,
    pub uv_w: f32,
    pub uv_h: f32,
}
```

**Capacity:** 256 glyphs max (~4 lines of text at 64 chars each).

### 6.4 SDF Atlas Texture (Binding 12) + Sampler (Binding 13)

```
Texture2D (R8unorm)  — single channel, distance values
┌──────────────────────────────────────┐
│ A  B  C  D  E  F  G  H  I  J  K ... │  <- shelf 0
│──────────────────────────────────────│
│ a  b  c  d  e  f  g  h  i  j  k ... │  <- shelf 1
│──────────────────────────────────────│
│ 0  1  2  3  4  5  6  7  8  9        │  <- shelf 2
└──────────────────────────────────────┘
```

- **Format:** `r8unorm` (1 byte per texel, distance normalized to [0,1])
- **Size:** 512x512 is sufficient for ~96 ASCII glyphs at fontSize 48
- **Generation:** Lazy — only glyphs that appear in placed text are generated
- **GPU memory:** 256 KB (512x512x1 byte)
- **Sampler:** Bilinear filtering, clamp-to-edge

---

## 7. Fragment Shader Design

### 7.1 Compositing Step Location

SDF text coverage is inserted after blank zone masking, before the cell stamp step:

```
1. Paper fiber noise
2. Fiber lighting
3. Paper albedo
4. Grid lines
5. Blank zone masking
6. Cell-suppression pre-pass (decals)
7. SDF text coverage -> merged into cell ink coverage    <- NEW
8. Sponge stamp / ink (uses combined coverage)
9. Decal compositing
10. sRGB gamma encode
```

### 7.2 text_coverage Function

```wgsl
fn text_coverage(cx: u32, world_row: i32) -> f32 {
    var cov = 0.0;
    let fx = f32(cx);
    let fy = f32(world_row);

    for (var i: u32 = 0u; i < text_meta.glyph_count; i = i + 1u) {
        let g = text_glyphs[i];

        // Cell-space hit test
        let local_x = (fx - g.cell_pos.x) / g.cell_pos.z;  // [0,1] within glyph
        let local_y = (fy - g.cell_pos.y) / g.cell_pos.w;
        let in_rect = select(0.0, 1.0,
            local_x >= 0.0 && local_x <= 1.0
            && local_y >= 0.0 && local_y <= 1.0);

        // Sample SDF atlas
        let uv = vec2f(
            g.atlas_uv.x + local_x * g.atlas_uv.z,
            g.atlas_uv.y + local_y * g.atlas_uv.w,
        );
        let dist = textureSampleLevel(text_atlas, text_smp, uv, 0.0).r;

        // SDF threshold with smooth edges
        let edge = smoothstep(0.45, 0.55, dist);
        cov = max(cov, edge * in_rect);
    }
    return cov;
}
```

The loop follows the same wave-coherence rules as decals: `select`-weighted, no `continue`/`break`, no derivatives inside the loop.

### 7.3 Coverage Merging

The SDF text coverage is combined with the cell alive state:

```wgsl
let cell_cov = raw_cov * alive_mix * content_mask * zone_mask.w * (1.0 - cell_suppress);
let sdf_cov = text_coverage(zone_cx, zone_world_row);
let combined_cov = max(cell_cov, sdf_cov);
// Use combined_cov for the Beer-Lambert ink absorption step
```

Text gets the same visual treatment as cells but with smooth edges.

---

## 8. Compute Shader Integration

### 8.1 Modified GoL Rule

One line added after the existing GoL rule:

```wgsl
// Existing rule (unchanged):
let alive = count3 | (count2 & c);
// Frozen cells forced alive:
dst[wy * wpr + wx] = alive | frozen[wy * wpr + wx];
```

This is branch-free and adds negligible cost — one buffer read + one OR per word.

### 8.2 Simulation Behavior

Frozen cells act as permanent obstacles:
- They are always alive, regardless of neighbor count
- Neighboring cells still count frozen cells as alive neighbors
- The standard GoL rules apply to all non-frozen cells
- This creates natural flow patterns: cells die adjacent to frozen walls (overcrowding), and gliders deflect around letterforms

---

## 9. WGSL Struct Definitions

```wgsl
// In render.wgsl:

// IMPORTANT: Use scalar padding, NOT vec3u. vec3u has 16-byte alignment in
// uniform buffers, creating a 32-byte struct that doesn't match Rust's 16-byte
// #[repr(C)] layout. See architecture-overview.md S5 for details.
struct TextMeta {
    glyph_count: u32,
    pad0:        u32,
    pad1:        u32,
    pad2:        u32,
}

struct TextGlyph {
    cell_pos: vec4f,  // [cell_x, cell_y, cell_w, cell_h]
    atlas_uv: vec4f,  // [uv_x, uv_y, uv_w, uv_h]
}

@group(0) @binding(10) var<uniform>       text_meta:   TextMeta;
@group(0) @binding(11) var<storage, read> text_glyphs: array<TextGlyph>;
@group(0) @binding(12) var               text_atlas:  texture_2d<f32>;
@group(0) @binding(13) var               text_smp:    sampler;
```

---

## 10. CPU-Side Architecture

### 10.1 TypeScript Types

```typescript
// app/src/types/text.ts

export type TextRenderMode = 'sdf' | 'cells' | 'both';

export interface TextBlock {
  id: string;
  text: string;
  font: string;              // CSS font string, e.g. "bold 48px monospace"
  cellX: number;             // world cell-space origin column
  cellY: number;             // world cell-space origin row
  cellsWide: number;         // width in cells (height derived from aspect ratio)
  renderMode: TextRenderMode;
  color?: string;            // optional ink color override (default: same as cells)
  enabled: boolean;
  createdAt: number;         // epoch ms
  updatedAt: number;         // epoch ms
}

export interface TextStoragePayload {
  version: number;
  blocks: TextBlock[];
}

export const MAX_TEXT_BLOCKS = 8;
export const MAX_TOTAL_GLYPHS = 256;
export const TEXT_STORAGE_VERSION = 1;
export const TEXT_STORAGE_KEY = `gol.text.v${TEXT_STORAGE_VERSION}`;
```

### 10.2 Normalization (`textNormalization.ts`)

Mirrors `decalNormalization.ts`. Normalizes all fields with safe defaults:

```typescript
// app/src/utils/textNormalization.ts

export function normalizeTextBlock(block: unknown, now?: number): TextBlock | null;
export function normalizeTextBlocks(blocks: unknown, now?: number): TextBlock[];
```

Validation rules:
- `text` must be a non-empty string
- `font` must be a non-empty string (defaults to `"bold 24px monospace"`)
- `cellX`, `cellY` must be finite integers
- `cellsWide` must be a finite integer >= 1
- `renderMode` must be one of `'sdf'`, `'cells'`, `'both'` (defaults to `'sdf'`)
- `id` must be a non-empty string (fallback: `crypto.randomUUID()`)
- `enabled` defaults to `true`
- Array capped at `MAX_TEXT_BLOCKS`

### 10.3 Storage (`textStorage.ts`)

Mirrors `decalStorage.ts`:

```typescript
// app/src/utils/textStorage.ts

export function saveTextBlocks(blocks: TextBlock[]): void;
export function loadTextBlocks(): TextBlock[];
export function clearTextStorage(): void;
```

- Storage key: `gol.text.v1`
- Versioned payload with schema check on load
- Invalid or version-mismatched payloads return `[]`

### 10.4 Worker State (`TextState.ts`)

Mirrors `DecalState.ts`:

```typescript
// app/src/workers/TextState.ts

export class TextState {
  getAll(): TextBlock[];
  setAll(blocks: unknown): TextBlock[];
  add(block: unknown): { blocks: TextBlock[]; error?: string };
  update(block: unknown): { blocks: TextBlock[]; error?: string };
  remove(id: string): TextBlock[];
  clear(): TextBlock[];
}
```

### 10.5 Composable (`useText.ts`)

Mirrors `useDecals.ts`:

```typescript
// app/src/composables/useText.ts

export interface UseText {
  blocks: Ref<TextBlock[]>;
  setBlocks(blocks: TextBlock[]): void;
  addBlock(block: TextBlock): void;
  updateBlock(block: TextBlock): void;
  removeBlock(id: string): void;
  clearBlocks(): void;
  syncFromWorker(blocks: TextBlock[]): void;
}

export interface UseTextOptions {
  onSetBlocks?: (blocks: TextBlock[]) => void;
  onAddBlock?: (block: TextBlock) => void;
  onUpdateBlock?: (block: TextBlock) => void;
  onRemoveBlock?: (id: string) => void;
  onClearBlocks?: () => void;
}

export function useText(options?: UseTextOptions): UseText;
```

### 10.6 Worker Protocol (new message types)

```typescript
// Additional entries in WorkerInMsg (rendererProtocol.ts):
| { type: 'set_text';    blocks: TextBlock[] }
| { type: 'add_text';    block:  TextBlock   }
| { type: 'update_text'; block:  TextBlock   }
| { type: 'remove_text'; id:     string      }
| { type: 'clear_text' }

// Additional entries in WorkerOutMsg:
| { type: 'text_state'; blocks: TextBlock[] }
| { type: 'text_error'; message: string }
```

The worker handles these symmetrically to zone and decal messages, using a `TextState` class:

```typescript
// backgroundRenderer.ts additions:
const textState = new TextState();

function applyTextToRenderer(): void {
  renderer?.setText?.(textState.getAll());
}
```

The `Renderer` interface gains:

```typescript
setText?(blocks: TextBlock[]): void;
```

### 10.7 Worker-Side Processing Pipeline

When text is applied to the GPU renderer, the processing pipeline runs steps conditionally based on each block's `renderMode`:

1. **Rasterize to cells** _(modes: `cells`, `both`)_ — `OffscreenCanvas.fillText()` at cell resolution (1px = 1 cell) -> threshold alpha > 128 -> cell coordinate list
2. **Generate SDF glyphs** _(modes: `sdf`, `both`)_ — `tiny-sdf` for each unique character (cached per font+character)
3. **Layout glyphs** _(modes: `sdf`, `both`)_ — compute cell-space position for each glyph using font metrics from `tiny-sdf`
4. **Pack atlas** _(modes: `sdf`, `both`)_ — shelf-pack glyphs into 512x512 atlas, upload to GPU texture
5. **Write frozen buffer** _(modes: `cells`, `both`)_ — pack cell coordinates into bitpacked `u32` buffer, upload via `queue.write_buffer`
6. **Write glyph buffer** _(modes: `sdf`, `both`)_ — upload `TextGlyphGpu` array

Steps 2-4 only run when the character set changes (not on every text position update). A block with `renderMode: 'sdf'` skips steps 1 and 5 — no frozen buffer writes, no compute shader involvement. A block with `renderMode: 'cells'` skips steps 2-4 and 6 — no SDF generation or atlas upload.

### 10.8 Text-to-Cell Rasterization

Runs once per block when text is placed (not per frame):

```typescript
function rasterizeTextToCells(
  text: string,
  font: string,       // CSS font string, e.g. "bold 48px monospace"
  cellX: number,      // world cell-space origin
  cellY: number,
  cellsWide: number,  // target width in cells
): { cx: number; cy: number }[] {
  // 1. Measure text, compute canvas size (1px = 1 cell)
  const canvas = new OffscreenCanvas(cellsWide, cellsHigh);
  const ctx = canvas.getContext('2d')!;
  ctx.font = font;
  ctx.fillStyle = 'white';
  ctx.fillText(text, 0, baseline);

  // 2. Read pixels, threshold to binary
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const cells: { cx: number; cy: number }[] = [];
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const alpha = pixels.data[(y * canvas.width + x) * 4 + 3];
      if (alpha > 128) {
        cells.push({ cx: cellX + x, cy: cellY + y });
      }
    }
  }
  return cells;
}
```

The canvas resolution matches the desired cell-space size: if text should span 200 cells wide, the canvas is 200px wide. The font size is chosen relative to that canvas size.

### 10.9 SDF Generation (`tiny-sdf`)

**Library:** `@mapbox/tiny-sdf` (~3 KB)

Generates single-channel SDF glyphs from any browser-renderable font:

```typescript
import TinySDF from '@mapbox/tiny-sdf';

const sdf = new TinySDF({
  fontSize: 48,
  fontFamily: 'monospace',
  fontWeight: 'bold',
  buffer: 6,        // padding around glyph (SDF spread)
  radius: 16,       // SDF distance radius in pixels
  cutoff: 0.25,     // threshold for inside/outside
});

const glyph = sdf.draw('A');
// glyph.data: Uint8ClampedArray (single channel, 0-255 distance values)
// glyph.width, glyph.height: dimensions including buffer
// glyph.glyphWidth, glyph.glyphHeight: actual glyph dimensions
// glyph.glyphTop, glyph.glyphLeft: bearing offsets
// glyph.glyphAdvance: horizontal advance width
```

---

## 11. WASM Interface

### 11.1 Frozen Cell Methods

```rust
// gpu.rs — GpuGameOfLife gains frozen cell support:

#[wasm_bindgen]
pub fn set_frozen_cells(&mut self, cells_json: &str) -> Result<(), JsValue>;

#[wasm_bindgen]
pub fn clear_frozen_cells(&mut self);
```

`set_frozen_cells` receives a JSON array of `{cx, cy}` coordinate pairs, packs them into the bitpacked frozen buffer, and uploads via `queue.write_buffer`.

### 11.2 SDF Text Methods

```rust
// gpu.rs — GpuGameOfLife gains SDF text support:

#[wasm_bindgen]
pub fn set_text_glyphs(&mut self, glyphs_json: &str) -> Result<(), JsValue>;

#[wasm_bindgen]
pub fn clear_text_glyphs(&mut self);

#[wasm_bindgen]
pub fn upload_text_atlas(&mut self, data: &[u8], width: u32, height: u32) -> Result<(), JsValue>;
```

`set_text_glyphs` receives a JSON array of positioned glyphs with cell-space coordinates and atlas UVs. `upload_text_atlas` receives the raw `R8unorm` atlas data.

### 11.3 GpuRenderer Additions

```rust
pub struct GpuRenderer {
    // ... existing fields ...
    text_meta_buf:  wgpu::Buffer,   // binding 10: TextMetaGpu (uniform)
    text_glyph_buf: wgpu::Buffer,   // binding 11: TextGlyphGpu[256] (storage RO)
    text_atlas:     wgpu::Texture,  // binding 12: R8unorm 512x512
    text_smp:       wgpu::Sampler,  // binding 13: bilinear, clamp-to-edge
}
```

`make_bind_group` and `bgl` gain four new entries:

```rust
// In bgl:
uniform_bgl_entry(10),   // text_meta
storage_bgl_entry(11),   // text_glyphs
texture_bgl_entry(12),   // text_atlas
sampler_bgl_entry(13),   // text_smp

// In make_bind_group:
wgpu::BindGroupEntry { binding: 10, resource: text_meta_buf.as_entire_binding() },
wgpu::BindGroupEntry { binding: 11, resource: text_glyph_buf.as_entire_binding() },
wgpu::BindGroupEntry { binding: 12, resource: wgpu::BindingResource::TextureView(&text_atlas_view) },
wgpu::BindGroupEntry { binding: 13, resource: wgpu::BindingResource::Sampler(&text_smp) },
```

New methods:

```rust
pub fn set_text_glyphs(&self, queue: &wgpu::Queue, glyphs: &[TextGlyphGpu]);
pub fn clear_text_glyphs(&self, queue: &wgpu::Queue);
pub fn upload_text_atlas(&self, queue: &wgpu::Queue, data: &[u8], width: u32, height: u32);
```

---

## 12. Scaling Behavior

The `cell_w` and `cell_h` fields in `TextGlyphGpu` determine how many cells each glyph spans. Because the SDF is resolution-independent:

| Scenario | Frozen Cells | SDF Overlay |
|----------|-------------|-------------|
| Grid pitch increases (cells bigger) | Same cell count, more pixels per cell | Sharper — more texels to resolve edges |
| Grid pitch decreases (cells smaller) | Same cell count, fewer pixels per cell | Still sharp — `smoothstep` anti-aliases |
| Text spans 10 cells tall | Coarse silhouette (10px raster) | Smooth edges via SDF |
| Text spans 200 cells tall | Fine silhouette (200px raster) | Same quality — SDF is resolution-independent |
| Viewport resize | Frozen buffer unchanged (world-space) | Glyph positions unchanged (world-space) |
| Scroll | No update needed | No update needed (world-space coords) |

---

## 13. Performance Budget

| Component | Cost | Notes |
|-----------|------|-------|
| Frozen buffer read | ~0% | One `u32` load + OR per compute thread (already loading 9 words) |
| SDF glyph loop | ~1-2% per 100 glyphs | `smoothstep` + texture sample per glyph per fragment |
| Atlas texture | 256 KB | R8unorm, 512x512 |
| Glyph buffer | 8 KB | 256 glyphs x 32 bytes |
| Frozen buffer | Same as cell buffer | Bitpacked, same size |
| SDF generation | ~100-200ms one-time | ASCII set, cached after first use |

The SDF glyph loop follows the same wave-coherence rules as decals: `select`-weighted, no `continue`/`break`, no derivatives inside the loop.

---

## 14. File Inventory

| File | Change |
|------|--------|
| `app/src/types/text.ts` | New — TS type definitions |
| `app/src/utils/textNormalization.ts` | New — input sanitization (mirrors `decalNormalization.ts`) |
| `app/src/utils/textStorage.ts` | New — localStorage persistence (mirrors `decalStorage.ts`) |
| `app/src/composables/useText.ts` | New — Vue composable (mirrors `useDecals.ts`) |
| `app/src/workers/TextState.ts` | New — worker-side list management (mirrors `DecalState.ts`) |
| `app/src/workers/backgroundRenderer.ts` | Modified — wire up text state and messages |
| `app/src/workers/rendererProtocol.ts` | Modified — add text WorkerInMsg / WorkerOutMsg variants |
| `app/src/components/layout/GridTextTab.vue` | New — text tool UI tab |
| `app/src/components/layout/GridBlankZonePanel.vue` | Modified — add text tab to tab parent |
| `crates/game_of_life_gpu/src/text.rs` | New — text JSON parsing + GPU struct packing |
| `crates/game_of_life_gpu/src/lib.rs` | Modified — `mod text;` |
| `crates/game_of_life_gpu/src/gpu.rs` | Modified — `set_frozen_cells`, `set_text_glyphs`, `upload_text_atlas` |
| `crates/game_of_life_gpu/src/simulation.rs` | Modified — `frozen_buf` + binding 3 in compute pipeline |
| `crates/game_of_life_gpu/src/renderer/pipeline.rs` | Modified — text buffers, atlas texture, sampler |
| `crates/game_of_life_gpu/src/renderer/bindings.rs` | Modified — bindings 10-13 in bgl and make_bind_group |
| `crates/game_of_life_gpu/wgsl/render.wgsl` | Modified — TextMeta/TextGlyph structs, `text_coverage` function |
| `crates/game_of_life_gpu/wgsl/compute.wgsl` | Modified — frozen buffer binding + OR in GoL rule |

---

## 15. Implementation Phases

### Phase A: Frozen Cells (`renderMode: 'cells'`)

1. Add `frozen_buf` to `Simulation`
2. Add binding 3 to compute shader
3. Add OR in GoL rule
4. Add `set_frozen_cells` / `clear_frozen_cells` WASM exports
5. Add worker-side `OffscreenCanvas` text rasterization
6. Add `TextBlock` types, normalization, storage, composable, worker state
7. Wire up `set_text` / `add_text` / `update_text` / `remove_text` / `clear_text` messages
8. Add `GridTextTab.vue` with minimal UI (text input, font, position, render mode, list)

Result: `cells` mode works — blocky text, simulation flows around it.

### Phase B: SDF Overlay (`renderMode: 'sdf'`)

1. Add `@mapbox/tiny-sdf` dependency
2. Implement glyph cache + shelf-pack atlas packer in worker
3. Add bindings 10-13 to render pipeline (meta, glyphs, atlas, sampler)
4. Add `TextMeta` / `TextGlyph` structs to `render.wgsl`
5. Add `text_coverage` function to fragment shader
6. Merge SDF coverage with cell ink path (`max(cell_cov, sdf_cov)`)
7. Add `set_text_glyphs` / `upload_text_atlas` WASM exports

Result: `sdf` mode works — smooth text at any scale, no simulation interaction. `both` mode also works immediately (combines Phase A frozen cells with Phase B SDF overlay).

### Phase C: Polish

1. Text color override (per-block ink color)
2. Multiple font support (cached SDF per font)
3. Text animation (fade-in, character-by-character reveal)
4. Persistence migration/versioning robustness
5. UI refinements (font picker, position drag tool, preview)

---

## 16. Test Strategy

### 16.1 TypeScript Unit Tests (`text.test.ts`)

Mirror the test structure of `decals.test.ts`:

| Test | What it validates |
|------|-------------------|
| `normalizeTextBlock_valid` | Valid input produces correct output with all fields |
| `normalizeTextBlock_rejects_invalid` | `null`, `undefined`, non-object, missing text → returns `null` |
| `normalizeTextBlock_defaults_font` | Missing font → defaults to `"bold 24px monospace"` |
| `normalizeTextBlock_clamps_cellsWide` | cellsWide < 1 → clamped to 1 |
| `normalizeTextBlock_renderMode_fallback` | Unknown renderMode → defaults to `'sdf'` |
| `normalizeTextBlock_sorts_nothing` | Unlike decals, no coord sorting needed (origin + width) |
| `normalizeTextBlocks_cap` | Array with > MAX_TEXT_BLOCKS entries → only first MAX_TEXT_BLOCKS |
| `storage_round_trip` | save → load produces identical payload |
| `storage_version_mismatch` | Unknown version → returns `[]` |
| `useText_callbacks` | add/update/remove/set/clear emit correct callbacks |
| `useText_duplicate_guards` | update nonexistent → no-op; remove nonexistent → no-op |

### 16.2 Rust Tests (`text.rs`)

Mirror the test structure of `decals.rs`, using `wasm_bindgen_test`:

| Test | What it validates |
|------|-------------------|
| `parse_text_glyphs_json_valid` | Valid JSON → correct `TextGlyphGpu` fields |
| `parse_frozen_cells_json_valid` | Valid JSON → correct bitpacked buffer |
| `parse_text_glyphs_json_invalid` | Non-JSON → Err result |
| `parse_text_glyphs_json_max_capped` | Array > MAX_TOTAL_GLYPHS → only first 256 |
| `frozen_cells_pack_round_trip` | Pack coordinates → read back → identical |

### 16.3 Manual QA

- Place text in `cells` mode → simulation flows around blocky letters
- Place text in `sdf` mode → smooth text with ink/paper effects, simulation unaware
- Place text in `both` mode → smooth text + simulation interaction
- Scroll → text stays locked to grid position
- Resize window → text remains sharp and correctly positioned
- Disable text block → immediately disappears; enable → reappears
- Reload page → text blocks restored from localStorage
- Multiple fonts via `@font-face` → each renders correctly

---

## 17. Resolved Design Decisions

| # | Question | Decision |
|---|----------|----------|
| Q1 | Should frozen cells and SDF always render together? | **No. Per-block `renderMode` flag.** `'sdf'` for visual-only, `'cells'` for simulation-only, `'both'` for combined. |
| Q2 | How does text scale? | **Cell-space width.** `cellsWide` determines the canvas rasterization resolution (1px = 1 cell). Font size is derived. SDF is resolution-independent. |
| Q3 | Where does SDF coverage composite? | **Before cell stamp.** Merged with cell ink via `max(cell_cov, sdf_cov)` so text gets the same ink/paper treatment. |
| Q4 | Font format support? | **Browser-native.** CSS `@font-face` handles TTF, OTF, WOFF, WOFF2. No Rust-side font parsing needed. |
| Q5 | Atlas dimensions? | **Fixed 512x512 R8unorm.** Sufficient for ~96 ASCII glyphs at fontSize 48. 256 KB GPU memory. |
| Q6 | Maximum capacity? | **8 blocks, 256 total glyphs.** Sufficient for ~4 lines at 64 chars each. |
| Q7 | Should the SDF overlay be optional? | **Yes — `renderMode: 'cells'` works without it.** The frozen cell mask is independent. |
| Q8 | Worker protocol pattern? | **Mirror zones/decals exactly.** add/update/remove/clear + bulk set, with per-operation error reporting. |

---

## 18. Open Questions

| # | Question | Status |
|---|----------|--------|
| Q1 | Should text blocks be editable after placement? | Likely yes — update frozen + re-layout. Deferred to Phase C. |
| Q2 | Should `both` mode visually suppress the blocky frozen cells under the SDF? | Yes — SDF coverage replaces cell coverage via `max`, so frozen cells are visually hidden where SDF covers them. |
| Q3 | Should COEP/COOP headers be added for high-resolution `performance.now()` in the worker? | Deferred — would give microsecond timer precision for profiling, not required for functionality. |
