# Audit 1: Tight Coupling in the GPU Pipeline

## Problem Statement

Grid, Simulation, Hi-Res, and Renderer all know about each other's buffer layouts. Changing anything cascades through 4+ files and requires rebuilding bind groups in lock-step.

---

## Buffer Ownership & Cross-Module Consumption

| Buffer | Created By | Consumed By | Mechanism |
|--------|-----------|-------------|-----------|
| `cells_a`, `cells_b` (sim) | `Simulation::new()` | Renderer (bind groups), HiResManager (boundary extract) | Direct field access, passed as params |
| `frozen_buf` (sim) | `Simulation::new()` | Compute bind groups (binding 5) | Passed to `make_bind_group()` |
| `prev_visible_buf` | `GpuRenderer::new()` | Render bind groups (binding 2), `capture_previous_state()` | Encoder copy |
| `zone_meta/zone_buf` | `GpuRenderer::new()` | `set_zones()`, render bindings 6-7 | `queue.write_buffer()` |
| `decal_meta/decal_buf` | `GpuRenderer::new()` | `set_decals()`, render bindings 8-9 | `queue.write_buffer()` |
| `sdf_meta/glyphs/atlas` | `GpuRenderer::new()` | `set_text_glyphs()`, `upload_text_atlas()`, render bindings 10-13 | `queue.write_buffer()` + texture replacement + bind group rebuild |
| `hires_meta/regions/cells/prev` | `GpuRenderer::new()` | `set_hires()` (from gpu.rs:sync_hires_to_renderer), render bindings 14-17 | `queue.write_buffer()`, encoder copy, bind group rebuild if size changes |
| `buf_a`, `buf_b` (per region) | `HiResRegion::new()` | Boundary extract BGs, fine compute BGs, copy to renderer | Passed as refs in `build_*_bind_groups()` |
| `mask` (HiResManager) | `HiResManager::new()` | Simulation (binding 3 in compute) | Via `mask_buffer()` getter |
| `inward_grid_buf` | `HiResManager::new()` | Boundary extract (binding 6), Simulation (binding 4) | Via `inward_buffer()` getter |

---

## Render Bind Group: 18 Bindings, 4+ Modules Each

The monolithic render bind group spans every feature in the system:

| Binding | Resource | Modules Involved |
|---------|----------|-----------------|
| 0 | RenderUniforms | GpuRenderer, bindings.rs |
| 1 | current cells (sim buf_a/b) | **Simulation**, GpuRenderer, bindings.rs |
| 2 | previous cells (snapshot) | GpuRenderer, **Simulation** (source), bindings.rs |
| 3 | PaperParams | GpuRenderer, bindings.rs |
| 4-5 | noise texture + sampler | noise.rs, GpuRenderer, bindings.rs |
| 6-7 | zone meta + entries | GpuRenderer, **zones.rs**, bindings.rs |
| 8-9 | decal meta + entries | GpuRenderer, **decals.rs**, bindings.rs |
| 10-13 | SDF text meta/glyphs/atlas/sampler | GpuRenderer, **text.rs**, bindings.rs |
| 14-17 | hi-res meta/regions/cells/prev | GpuRenderer, **HiResManager**, **gpu.rs**, bindings.rs |

Bindings 14-17 involve **4 modules**: renderer, hires/dispatch, gpu.rs orchestrator, and bindings.rs.

---

## The Resize Cascade

When the canvas resizes (`gpu.rs:229`), 5 steps must execute in strict order:

```
1. Grid::new(width, height, cell_px)        -- New grid layout
2. hires.resize_mask(device, queue, &grid)   -- Mask matches new grid
3. simulation.resize(device, queue, &grid,   -- New sim buffers
     hires.mask_buffer(),                    -- Cross-module dependency
     hires.inward_buffer())                  -- Cross-module dependency
4. hires.rebuild_all_bind_groups(device,     -- Bind groups reference
     &grid, &simulation.buf_a,              --   new sim buffers
     &simulation.buf_b)                      -- Cross-module dependency
5. renderer.resize(device, queue, &grid,     -- Surface + uniforms +
     grid_pitch, &simulation)               --   prev_buf + bind groups
6-8. Re-apply zones, decals, hires metadata  -- Feature data re-upload
```

**Skip any step and the system breaks:**
- Skip 2: mask has wrong dimensions, base compute reads past buffer bounds
- Skip 3: simulation buffers wrong size, compute dispatch crashes
- Skip 4: hi-res bind groups reference deallocated sim buffers
- Skip 5: render pass fails, uniforms have stale grid pitch

---

## sync_hires_to_renderer: The 5-Module Bottleneck

This function (gpu.rs:474-507) touches **5 modules** in a single call chain:

1. **gpu.rs** -- Orchestrates the sync
2. **HiResManager** (dispatch.rs) -- `render_meta()` returns tuple of region data
3. **HiResRegion** (region.rs) -- Public fields read directly: `rect`, `multiplier`, `cols`, `total_words()`
4. **GpuRenderer** (pipeline.rs) -- `set_hires()` writes metadata, may resize buffers, rebuilds bind groups
5. **Simulation** (simulation.rs) -- Passed to `rebuild_bind_groups()` if buffer sizes change

Data flows inefficiently: `render_meta()` returns tuples that duplicate data already on HiResRegion, then gpu.rs iterates regions again to find matching rects.

---

## Concrete Coupling Examples

### 1. Simulation Buffer Change Cascades

If Simulation changes from double to triple buffering:
- **simulation.rs**: New buffer allocation logic
- **renderer/pipeline.rs**: `make_bind_group()` must handle 3 buffers
- **gpu.rs**: `tick_and_render()` logic for which buffer is "current" changes
- **hires/dispatch.rs**: `rebuild_all_bind_groups()` passes sim buffers to boundary extract BGs

### 2. Grid Bit Layout is a Hidden Protocol

`Grid::cell_address()` defines the cell-to-word bit layout. This same layout is assumed by:
- `simulation.rs` ComputeUniforms (screen_cols, padded_rows, words_per_row)
- `hires/dispatch.rs` BoundaryParams (base_wpr, padded_rows)
- `zones.rs` zone coordinate clamping
- `decals.rs` decal coordinate clamping
- All WGSL shaders (hardcoded bit manipulation)

Changing the packing scheme requires editing **6+ files**.

### 3. Renderer Bind Group Rebuild Chain

Any buffer reallocation in the renderer triggers `rebuild_bind_groups()`:
- `resize()` -- pipeline.rs:337
- `upload_text_atlas()` -- pipeline.rs:426
- `set_hires()` -- pipeline.rs:453

Each caller in gpu.rs must know to trigger the rebuild. Adding a new feature (e.g., dynamic decal atlas) requires the caller to know about this implicit contract.

### 4. HiRes Mask Ownership Split

HiResManager creates and manages the mask buffer. Simulation reads it in compute shaders. The GPU contract (bit layout, when to mask) is implicit -- the shader knows how to interpret the mask, but there's no type-level guarantee.

---

## What a Decoupled Design Would Look Like

```
GpuGameOfLife (thin orchestrator)
  |
  +-- SimPass         owns: buf_a, buf_b, compute pipeline, bind groups
  +-- HiResPass       owns: region buffers, boundary state, fine pipeline
  +-- ZonesPass        owns: zone_meta_buf, zone_buf, zone bind group
  +-- DecalsPass       owns: decal_meta_buf, decal_buf, decal bind group
  +-- TextPass         owns: sdf_meta, glyphs, atlas, text bind group
  +-- RenderPass       owns: only composition (reads outputs from above)
```

**Key principles:**

1. **Each pass owns its bind groups.** SimPass manages compute BGs. HiResPass manages boundary + fine BGs. Zones/Decals/Text each have their own render-layer BGs.

2. **No cross-module buffer access.** Instead of Renderer owning zone buffers and zones.rs writing to them, ZonesPass owns everything and exposes a read-only output.

3. **Render pass is a pure compositor.** Instead of 18 bindings in one monolithic group, RenderPass composites textures/buffers from each pass. Each pass <=5 bindings.

4. **Explicit data flow.** Replace `sync_hires_to_renderer()` with:
   ```rust
   let output = self.hires_pass.render_output();
   self.render_pass.set_hires_input(output);
   ```

5. **Resize is per-pass.** Each pass has `resize(&Grid)`. No ordering constraints between passes (only the orchestrator calls them).

**Benefits:**
- Adding a new visual feature is one new pass + one new shader chunk
- Bind group count per pass stays small (<=5)
- No cascading changes across unrelated modules
- Each pass testable in isolation
