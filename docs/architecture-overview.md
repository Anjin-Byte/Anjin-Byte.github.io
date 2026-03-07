# Architecture Overview

**Status:** Living document
**Last updated:** 2026-03-05

---

## 1. System Overview

This project is a portfolio site built around a GPU-accelerated Game of Life simulation rendered as an engineering-paper background. The entire page scrolls over a continuous, infinite-height grid of cells that simulate Conway's Game of Life in real time.

### 1.1 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend framework | Vue 3 (Composition API, `<script setup>`) |
| UI components | Vuetify 3 (dark theme) |
| Build tooling | Vite + pnpm |
| GPU renderer | Rust compiled to WASM via `wasm-pack` (bundler target) |
| GPU API | WebGPU (`wgpu` crate) |
| Deployment | GitHub Actions: `dev` branch → build → deploy to `main` (GitHub Pages) |

### 1.2 Repository Layout

```
Anjin-Byte.github.io/
├── app/                          # Vue 3 frontend application
│   ├── src/
│   │   ├── components/layout/    # Page layout components
│   │   ├── composables/          # Vue composables (useDecals, useBlankZones)
│   │   ├── types/                # TypeScript type definitions
│   │   ├── utils/                # Normalization and storage utilities
│   │   ├── workers/              # Web Worker scripts + state classes
│   │   └── plugins/              # Vuetify plugin config
│   ├── package.json
│   └── vite.config.ts
├── crates/
│   ├── game_of_life/             # CPU-based Game of Life (original)
│   │   └── src/ (cell.rs, universe.rs, lib.rs, utils.rs)
│   └── game_of_life_gpu/         # WebGPU-accelerated renderer
│       ├── src/
│       │   ├── lib.rs            # WASM entry point, re-exports
│       │   ├── gpu.rs            # GpuGameOfLife — top-level orchestrator
│       │   ├── grid.rs           # Grid geometry (cols, rows, pitch)
│       │   ├── simulation.rs     # Compute shader simulation
│       │   ├── shaders.rs        # Shader source loading
│       │   ├── zones.rs          # Blank zone JSON parsing + GPU structs
│       │   ├── decals.rs         # Decal JSON parsing + GPU structs
│       │   └── renderer/
│       │       ├── mod.rs        # Module re-exports
│       │       ├── pipeline.rs   # GpuRenderer — render pipeline, buffers, draw
│       │       ├── bindings.rs   # Bind group layout helpers
│       │       ├── noise.rs      # Paper fiber noise texture generation
│       │       └── types.rs      # RenderUniforms, PaperParams structs
│       └── wgsl/
│           └── render.wgsl       # Fragment shader (all visual layers)
├── docs/                         # Design documentation
└── Cargo.toml                    # Workspace root
```

---

## 2. Rendering Architecture

### 2.1 Pipeline Overview

The renderer runs entirely in a Web Worker (`backgroundRenderer.ts`) to avoid blocking the main thread. The pipeline has two phases per frame:

1. **Compute pass** — Game of Life simulation step (bitpacked cell state, double-buffered)
2. **Render pass** — Full-screen triangle fragment shader compositing all visual layers

### 2.2 Fragment Shader Pipeline

The fragment shader (`render.wgsl`) composites all visual layers in a single pass. Each fragment walks through these stages sequentially:

```
1. Paper fiber noise         (textureSample — uniform control flow)
2. Fiber lighting            (ambient + directional + specular)
3. Paper albedo              (OKLab → linear sRGB; ±1.25% fiber variation)
4. Grid lines                (cyan-blue dye; multiplicative transmittance)
5. Blank zone masking        (suppress grid lines in designated rects)
6. Cell-suppression pre-pass (decals with suppressCells=true zero cell ink)
7. SDF text coverage         (merged into cell ink via max) [planned]
8. Sponge stamp / ink        (Beer-Lambert absorption; OKLab mixing)
9. Decal compositing         (pattern + blend per active decal)
10. sRGB gamma encode        (manual encode; non-sRGB surface format)
```

### 2.3 Bind Group Layout (Group 0)

| Binding | Name | Type | Content |
|---------|------|------|---------|
| 0 | `uniforms` | Uniform | `RenderUniforms` — grid dims, scroll_y, transition_t |
| 1 | `current_cells` | Storage RO | Bitpacked cell state (current generation) |
| 2 | `previous_cells` | Storage RO | Bitpacked cell state (prior generation) |
| 3 | `paper` | Uniform | `PaperParams` — grid pitch, line widths, specular |
| 4 | `noise_tex` | Texture 2D | Paper fiber noise + analytic derivatives |
| 5 | `noise_smp` | Sampler | Sampler for noise texture |
| 6 | `zone_meta` | Uniform | `ZoneMeta` — active blank zone count |
| 7 | `zones` | Storage RO | `ZoneEntry[128]` — blank zone array |
| 8 | `decal_meta` | Uniform | `DecalMeta` — active decal count |
| 9 | `decals` | Storage RO | `DecalEntry[32]` — decal array |
| 10 | `text_meta` | Uniform | `TextMeta` — active glyph count [planned] |
| 11 | `text_glyphs` | Storage RO | `TextGlyph[256]` — positioned glyphs [planned] |
| 12 | `text_atlas` | Texture 2D | R8unorm SDF atlas (512x512) [planned] |
| 13 | `text_smp` | Sampler | Bilinear, clamp-to-edge [planned] |

### 2.4 Coordinate System

```
px        = frag_pos.x                              // screen pixels, 0 = left
world_y   = frag_pos.y + uniforms.scroll_y          // world pixels (scrolls)
cx        = floor(px / pitch_minor) % screen_cols   // cell column (wrapped)
world_row = floor(world_y / pitch_minor)            // world cell row (infinite)
```

World-space coordinates allow zones and decals to scroll with the page without per-frame updates.

---

## 3. Worker Architecture

### 3.1 Communication Flow

```
Main Thread (Vue)              Web Worker                 GPU (WASM)
─────────────────             ────────────             ──────────────
AppBackground.vue  ──msg──▸  backgroundRenderer.ts  ──WASM──▸  GpuGameOfLife
       │                           │                          │
  pointer events                DecalState              set_decals_json()
  scroll events                BlankZoneState           set_zones_json()
  resize events                                         tick() / render()
       │                           │                          │
       ◂──msg──  status/error/state updates  ◂───────────────╯
```

### 3.2 Message Protocol (`rendererProtocol.ts`)

**Inbound (main → worker):**
- `init` — canvas transfer, initial config
- `resize` — viewport dimensions changed
- `scroll` — page scroll offset
- `toggle_cell` — click-to-toggle interaction
- `set_zones` / `add_zone` / `update_zone` / `remove_zone` / `clear_zones`
- `set_decals` / `add_decal` / `update_decal` / `remove_decal` / `clear_decals`

**Outbound (worker → main):**
- `ready` — GPU initialized, rendering started
- `error` — fatal initialization error
- `zones_state` / `zones_error` — zone operation results
- `decals_state` / `decals_error` — decal operation results

### 3.3 State Management Pattern

Both zones and decals follow the same pattern:
1. **Composable** (`useDecals.ts` / `useBlankZones.ts`) — Vue reactive state + localStorage persistence
2. **Worker state** (`DecalState.ts` / `BlankZoneState.ts`) — plain JS state in worker context
3. **Normalization** (`decalNormalization.ts` / `blankZoneNormalization.ts`) — input sanitization with safe defaults
4. **Storage** (`decalStorage.ts` / `blankZoneStorage.ts`) — versioned localStorage serialization
5. **GPU upload** — JSON stringified → WASM `set_*_json()` → Rust parsing → buffer write

---

## 4. Feature Systems

### 4.1 Blank Zones

Rectangular cell-space regions that suppress grid line rendering. Zones affect what is *removed* from the visual output.

- **Modes:** `minor` (hide minor lines), `major` (hide major), `both` (hide all)
- **Edge styles:** none, bold, fade, hatched
- **Capacity:** 128 active zones
- **Placement:** drag tool with optional snap-to-major-grid
- **Spec:** [grid-line-blanking-requirements.md](grid-line-blanking-requirements.md)

### 4.2 Decals (Phase 1 — Procedural Patterns)

Rectangular cell-space regions that *add* custom visual content on top of the rendered paper. Complementary to blank zones.

- **Kinds:** solid, checkerboard, diagonal stripes, dots
- **Blend modes:** alpha-over, multiply, screen
- **Cell suppression:** opt-in per-decal flag zeros cell ink under the decal
- **Capacity:** 32 active decals
- **Placement:** paint-mode drag tool (accumulates bounding box of traversed cells)
- **Spec:** [decal-system-requirements.md](decal-system-requirements.md)

### 4.3 Decals (Phase 2 — Bitmap Atlas) [Planned]

Extends the decal system with image-based decals using a GPU texture atlas.

- **Atlas format:** `Texture2DArray`, RGBA8, 512x512 per layer
- **New bindings:** 10 (atlas texture), 11 (atlas sampler)
- **Image support:** PNG, JPEG, WebP, GIF (first frame), SVG, BMP natively via `createImageBitmap()`
- **Spec:** [image-decals-design.md](image-decals-design.md)

### 4.4 SDF Text [Planned]

Resolution-independent text locked to world-space cell coordinates. Two independent layers:

- **Frozen cell mask:** bitpacked buffer marking permanently alive cells (compute shader). Simulation flows around letterforms.
- **SDF overlay:** signed distance field atlas (fragment shader). Smooth, anti-aliased glyphs at any scale via `smoothstep`.
- **Render modes:** `sdf` (visual only), `cells` (simulation only), `both` (combined)
- **Font support:** any browser-renderable font via CSS `@font-face` + `tiny-sdf` (~3 KB)
- **Capacity:** 8 text blocks, 256 total glyphs
- **New bindings:** 10-13 (text meta, glyph buffer, SDF atlas, sampler)
- **Spec:** [sdf-text-design.md](sdf-text-design.md)

### 4.5 Multi-Resolution Grid Regions [Exploratory]

Rectangular regions that simulate at higher cell density (4x or 8x) than the base grid. Fine cells are real — they simulate, interact, and render at their native resolution.

- **Resolution levels:** 4x (16 fine cells per base cell), 8x (64 fine cells per base cell)
- **Edge behavior:** expansion model (base cell expanded to NxN virtual block at boundary)
- **Compute:** separate dispatch per region, boundary state buffer for cross-resolution reads
- **Capacity:** 8 regions, 4M total fine cells
- **New bindings:** 14-17 (tentative — region meta, fine cell buffers, boundary state)
- **Spec:** [multi-resolution-grid-design.md](multi-resolution-grid-design.md)

---

## 5. GPU Struct Alignment Rules

WebGPU uniform buffers follow std140-like alignment rules. Key pitfalls:

| WGSL Type | Alignment | Size |
|-----------|-----------|------|
| `u32` / `i32` / `f32` | 4 bytes | 4 bytes |
| `vec2<T>` | 8 bytes | 8 bytes |
| `vec3<T>` | **16 bytes** | 12 bytes |
| `vec4<T>` | 16 bytes | 16 bytes |

**Critical:** `vec3u` in a `var<uniform>` struct has 16-byte alignment, which creates implicit padding. The Rust `#[repr(C)]` layout does NOT match. Always use 4 separate scalar fields for padding instead of `vec3u`:

```wgsl
// WRONG — 32 bytes due to vec3u alignment padding
struct Meta { count: u32, pad: vec3u }

// CORRECT — 16 bytes, matches Rust #[repr(C)]
struct Meta { count: u32, pad0: u32, pad1: u32, pad2: u32 }
```

---

## 6. Build & Deploy

### 6.1 Local Development

```bash
# Build WASM crate (required before frontend dev server)
wasm-pack build crates/game_of_life_gpu --target bundler

# Start frontend dev server
cd app && pnpm install && pnpm dev
```

### 6.2 Production Build

```bash
wasm-pack build crates/game_of_life_gpu --target bundler --release
cd app && pnpm build   # outputs to app/dist/
```

### 6.3 Deployment Pipeline

GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Push to `dev` branch triggers the workflow
2. Builds WASM crate + frontend
3. Deploys `app/dist/` to `main` branch (GitHub Pages)

---

## 7. Performance Profiling

### 7.1 Infrastructure (`app/src/perf/`)

| File | Purpose |
|------|---------|
| `constants.ts` | `PERF_ENABLED` flag (gated on `import.meta.env.DEV`) |
| `FrameTimer.ts` | High-resolution ring-buffer timer with percentile stats (avg, p95, p99) |
| `PerfSampler.ts` | Aggregates multiple `FrameTimer`s, periodic summary logging |
| `index.ts` | Re-exports |

### 7.2 Production Elimination

All profiling code is gated behind `PERF_ENABLED`, which Vite replaces with `false` at build time. The entire `perf/` module is tree-shaken from production builds:

```typescript
// In the worker:
const perf: PerfSampler | null = PERF_ENABLED ? new PerfSampler(log) : null;
// Production: const perf = null;
// All perf?.method() calls become no-ops on null → eliminated by minifier
```

The logger follows the same pattern: `debug()` and `info()` are assigned `noop` in production, leaving zero runtime cost. Only `warn()` and `error()` survive.

### 7.3 Usage

The worker's frame loop instruments two spans:
- **`tick`** — simulation step (compute pass + render)
- **`render`** — render-only frames (no simulation advance)

Summary is logged every 300 frames. The main thread can request a snapshot via the `perf_snapshot` message.

---

## 8. Design Principles

1. **Single render pass** — All visual layers composite in one fragment shader invocation. No multi-pass overhead.
2. **No wave divergence** — GPU shader loops use `select`-weighted output, never `continue`/`break`. This preserves SIMD parallelism.
3. **No derivative calls in loops** — `fwidth`, `dpdx`, `dpdy` are only used outside per-element loops to avoid undefined behavior in non-uniform control flow.
4. **Worker isolation** — All GPU work runs in a Web Worker. The main thread only handles DOM events and Vue reactivity.
5. **Mirror pattern** — New GPU features (zones, decals) follow the same TypeScript → Worker → WASM → GPU pipeline pattern for consistency and predictability.
6. **World-space coordinates** — Zones and decals are stored in world cell-space. Scroll offset is applied once in the shader, requiring no per-frame data updates.
7. **Zero-cost profiling** — All performance instrumentation is compile-time eliminated from production builds via `import.meta.env.DEV` gating. No profiling, logging (below warn), or diagnostic code ships to users.
