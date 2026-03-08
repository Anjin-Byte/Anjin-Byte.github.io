# Architecture Audit — March 2026

## Current Scale

| Layer | Files | Lines | Notes |
|-------|-------|-------|-------|
| Rust WASM | 16 .rs files | ~3,000 | + ~1,200 WGSL shader |
| Frontend TS/Vue | ~30 files | ~3,700 | Worker, composables, UI tabs |
| **Total** | ~46 | ~7,900 | Manageable but growing fast |

---

## What Works Well

1. **Clear three-point sync**: Composable (ref + localStorage) -> Worker (validation + GPU) -> Echo back. Robust and defensive.
2. **Normalization layer**: Every data type validated, clamped, defaulted on both sides. No corrupt state reaches GPU.
3. **Render pipeline**: Transition system (snapshot previous, tick, snapshot current, blend in shader) produces smooth animations.
4. **Vue composable pattern**: Clean public API, options callbacks, localStorage persistence.
5. **Ping-pong simulation**: Proven pattern, works correctly for base grid and single-step hi-res.

---

## Top Problems (Ordered by Impact)

### 1. AppBackground.vue is a 927-line monolith

Mixes canvas lifecycle, worker management, coordinate math, 5 drag tools, text input UX, composable wiring, and animation loop. Every new feature (hi-res text was the latest) adds ~30-50 lines to this file.

**Fix**: Extract into focused composables/handlers:
- `useDragTools()` — pointer events, tool dispatch, preview rendering
- `useTextInput()` — floating textarea, font measurement, commit logic
- `useCoordinateMapper()` — screenToCell, wrapCell, makeSnapshot
- `useWorkerBridge()` — worker lifecycle, message routing, state sync

### 2. Simulation logic dominates a website codebase

The site will have more pages/features beyond the Game of Life background. Currently the entire codebase is structured around one background effect. Adding a second page, a portfolio section, or interactive content requires working around simulation-centric architecture.

**Fix**: Treat the simulation as a self-contained module (component + worker + WASM). The rest of the site shouldn't know or care about it.

### 3. Variable tick rate doesn't work (and reveals deeper issues)

The tick_multiplier feature exposed fundamental problems:
- Multiple compute passes in the same command encoder don't synchronize storage buffer writes (browser WebGPU limitation or wgpu bug)
- Separate encoder submissions broke the transition animation (snapshot/copy lifecycle assumes single encoder)
- The ping-pong parity system becomes fragile when region.frame diverges from sim_frame

**Root cause**: The tick/render lifecycle is tightly coupled — snapshot, tick, copy, render all share one encoder. Any feature that needs multiple GPU submissions per frame (like sub-ticks) fights this design.

**Fix**: Decouple tick scheduling from render submission. The simulation should be able to advance N steps independently, with the renderer just reading the latest state. This might mean:
- Simulation buffers are double-buffered at a higher level (render always reads a stable snapshot)
- Sub-ticks can submit freely without worrying about the render encoder

### 4. Tight coupling: Grid -> Simulation -> HiRes -> Renderer

Every module knows about every other. Changing grid layout requires touching hires/, renderer/, simulation. The renderer bind group has 18 bindings spanning all features. Adding a new visual feature means touching the WGSL shader, renderer pipeline, bind group layout, types, AND gpu.rs.

**Fix**: Feature-specific render passes or a layered composition approach. Each feature (zones, decals, text, hi-res) should be a plug-in, not hardwired into one monolithic shader.

### 5. Four-way code duplication (zones/decals/hires/text)

Each feature system has 5 nearly-identical files:
- `types/*.ts` (interface + constants)
- `utils/*Normalization.ts` (validate one, validate array)
- `utils/*Storage.ts` (load, save, clear)
- `composables/use*.ts` (ref + CRUD + sync)
- `workers/*State.ts` (worker-side CRUD)

That's 20 files following the same pattern. Adding a 5th system means creating 5 more files with copy-paste. The pattern is clear enough to abstract.

**Fix**: Generic composable factory + generic worker state class. Keep type definitions separate (they're domain-specific), but unify the plumbing.

### 6. Unsafe code serves no purpose

Two `unsafe` blocks in `hires/dispatch.rs` do gratuitous pointer casts that bypass the borrow checker. The referenced buffers are always valid. These should be refactored to avoid unsafe entirely.

### 7. Public fields leak implementation details

`HiResRegion` and `HiResManager` have all fields `pub`. Direct mutation is possible, bypassing validation. Should be `pub(crate)` with controlled methods.

---

## GPU Pipeline Reference

### Tick-and-Render Flow (single frame)

```
1. Flush cell edits (separate submit, blocks)
2. Create encoder
3. Copy base visible -> prev_visible_buf (transition snapshot)
4. Copy hi-res visible -> hires_cells_prev_buf (transition snapshot)
5. Hi-res tick:
   a. Resync region frame parity
   b. Boundary extract (all regions, one compute pass each)
   c. Fine compute (all regions, one compute pass each)
   d. Swap region frames
6. Base sim tick (one compute pass)
7. Copy hi-res visible -> hires_cells_buf (post-tick)
8. Render pass (full-screen triangle, fragment shader reads everything)
9. Submit encoder + present
```

### Buffer Summary

- **Base simulation**: buf_a, buf_b (ping-pong), frozen_buf, uniform_buf
- **Hi-res per region**: buf_a, buf_b (ping-pong), frozen_buf (optional)
- **Hi-res shared**: region_mask, inward_grid_buf
- **Hi-res per region boundary**: outward_buf, inward_buf, frozen_placeholder_buf
- **Renderer**: prev_visible_buf, hires_cells_buf, hires_cells_prev_buf, noise texture, zone/decal/text/hires metadata buffers
- **Total bindings in render pass**: 18 (0-17)

### Why Variable Tick Rate Failed

The sub-tick loop ran correctly (confirmed via Rust-side logging: `max_ticks=16, multipliers=[16]`). But subsequent compute passes within the same encoder produced no visible change — the GPU didn't synchronize storage buffer writes between passes.

Splitting into separate encoders broke the transition system because `snapshot_hires_previous()` and `copy_hires_current()` were on the original encoder, which was submitted before the sub-tick encoders.

**Proper fix requires**: Restructuring the tick lifecycle so sub-tick submissions don't interfere with the snapshot/render pipeline.

---

## Recommendations for Rework

### Phase 1: Stabilize (no new features)
- Remove `tick_multiplier` from UI (keep field stubbed)
- Remove `console` feature from Cargo.toml (debug artifact)
- Encapsulate HiResRegion/HiResManager fields
- Remove unsafe blocks
- Extract AppBackground.vue into composables (target <400 lines)

### Phase 2: Decouple simulation from rendering
- Simulation advances independently (can run N steps before render reads)
- Renderer reads a stable snapshot (no shared encoder between sim and render)
- This unblocks variable tick rate and other multi-step simulation features

### Phase 3: Modular visual features
- Move zones/decals/text/hires rendering from monolithic shader to composable layers
- Each feature registers its own bind group + shader chunk
- Adding new visual features doesn't require touching the base renderer

### Phase 4: Generic state management
- Extract composable/state/normalization/storage into a factory
- Eliminate 4-way duplication
- New feature systems become ~2 files (type definition + normalization rules)
