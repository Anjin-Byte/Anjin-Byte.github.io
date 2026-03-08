# Solution 1: Decoupling the GPU Pipeline

## Goal

Replace the monolithic 18-binding render bind group and tightly-coupled module graph with isolated, independently-owned passes. Each visual feature owns its buffers and bind groups. The orchestrator becomes a thin sequencer.

---

## Current Architecture (Problem)

```
GpuGameOfLife
  ├── grid          (layout math)
  ├── simulation    (buf_a, buf_b, frozen, compute BGs)
  ├── hires         (region bufs, boundary bufs, mask, compute BGs)
  └── renderer      (prev_buf, zone bufs, decal bufs, text bufs, hires bufs,
                     noise tex, 18-binding render BG, render pipeline)
```

The renderer owns buffers for zones, decals, text, and hires — features it shouldn't know about. Every feature touches the renderer's bind group layout, the WGSL shader, and gpu.rs orchestration. Adding a feature means editing 4+ files.

---

## Target Architecture

```
GpuGameOfLife (orchestrator)
  ├── grid
  ├── SimPass       owns: buf_a, buf_b, frozen, compute BGs
  ├── HiResPass     owns: regions, boundary, mask, compute BGs
  ├── OverlayPass   owns: zone/decal/text buffers, overlay BGs
  └── ComposePass   owns: render pipeline, composition BG (reads outputs from above)
```

**Key change**: Features don't share a bind group. Each pass produces an output that ComposePass reads.

---

## Implementation Plan

### Step 1: Extract SimPass from Simulation

`simulation.rs` is already close to being a self-contained pass. The main coupling points are:

1. **HiRes mask/inward buffers passed into compute bind groups** (bindings 3, 4)
2. **Renderer reads `buf_a`/`buf_b` directly** (render bind group binding 1)

**Changes:**

```rust
// simulation.rs — new interface
impl SimPass {
    pub fn new(device, queue, grid, mask_buf, inward_buf) -> Self { ... }

    /// Run one simulation step. Returns nothing — output is in current_visible_buffer().
    pub fn tick(&mut self, encoder: &mut wgpu::CommandEncoder) { ... }

    /// The buffer holding the latest cell state (read-only access for downstream).
    pub fn current_visible_buffer(&self) -> &wgpu::Buffer { ... }

    /// Resize all buffers for new grid dimensions.
    pub fn resize(&mut self, device, queue, grid, mask_buf, inward_buf) { ... }
}
```

The mask/inward buffers are injected at construction and resize — SimPass doesn't know what creates them. This is already mostly how it works; we just formalize the boundary.

### Step 2: Extract HiResPass from HiResManager

HiResManager is also nearly self-contained. The coupling points are:

1. **Boundary extract reads base sim buffers** (bind group bindings 1)
2. **gpu.rs copies region buffers to renderer's hires_cells_buf**
3. **Renderer owns hires metadata buffers**

**Changes:**

```rust
// hires/mod.rs — new interface
impl HiResPass {
    pub fn new(device, queue, grid) -> Self { ... }

    /// Inject base simulation buffer references for boundary extraction.
    pub fn set_base_buffers(&mut self, device, buf_a: &Buffer, buf_b: &Buffer) { ... }

    /// Run one hi-res tick (boundary extract + fine compute + swap).
    pub fn tick(&mut self, encoder, sim_frame: u32) { ... }

    /// Mask buffer for base simulation to read.
    pub fn mask_buffer(&self) -> &Buffer { ... }

    /// Inward buffer for base simulation to read.
    pub fn inward_buffer(&self) -> &Buffer { ... }

    /// Output: concatenated visible fine-cell data + metadata.
    /// ComposePass binds this directly — no intermediate copy.
    pub fn output_buffer(&self) -> &Buffer { ... }
    pub fn output_prev_buffer(&self) -> &Buffer { ... }
    pub fn output_meta(&self) -> (&Buffer, &Buffer) { ... }  // (global_meta, region_meta)
}
```

**Key insight**: Instead of gpu.rs copying region buffers into renderer-owned `hires_cells_buf`, HiResPass owns the concatenated output buffer directly. ComposePass binds it read-only. No copy needed.

The concatenated buffer is updated in `tick()`:
```rust
// After fine compute + swap, copy all visible region buffers into self.output_buf
for region in &self.regions {
    let src = region.current_visible_buffer();
    encoder.copy_buffer_to_buffer(src, 0, &self.output_buf, offset, region.buffer_bytes());
    offset += region.buffer_bytes();
}
```

This eliminates `copy_hires_current()` and `sync_hires_to_renderer()` from gpu.rs entirely.

### Step 3: Create OverlayPass (zones + decals + text)

Currently the renderer owns zone, decal, and text buffers despite having no domain logic for them. Extract into a single OverlayPass that owns all overlay data.

```rust
pub struct OverlayPass {
    // Zones
    zone_meta_buf: Buffer,
    zone_buf: Buffer,

    // Decals
    decal_meta_buf: Buffer,
    decal_buf: Buffer,

    // Text
    sdf_meta_buf: Buffer,
    sdf_glyphs_buf: Buffer,
    sdf_atlas_texture: Texture,
    sdf_atlas_view: TextureView,
    sdf_sampler: Sampler,
}

impl OverlayPass {
    pub fn set_zones(&mut self, queue, json: &str) { ... }
    pub fn set_decals(&mut self, queue, json: &str) { ... }
    pub fn set_text_glyphs(&mut self, queue, json: &str) { ... }
    pub fn upload_text_atlas(&mut self, device, queue, w, h, data: &[u8]) { ... }

    /// All overlay buffers as a bindable set.
    pub fn bind_group(&self) -> &BindGroup { ... }
}
```

OverlayPass owns a **separate bind group** with its own layout. The shader reads this as `@group(2)` instead of sharing `@group(0)` with everything else.

### Step 4: Refactor ComposePass (formerly GpuRenderer)

ComposePass becomes a pure compositor. It owns only:
- `uniform_buf` (RenderUniforms: grid params, scroll, transition)
- `paper_buf` (PaperParams: noise scale, ink, grid widths)
- `prev_visible_buf` (previous base-grid snapshot)
- `noise_texture` + sampler
- The render pipeline + surface

It does NOT own zone, decal, text, or hires buffers.

**Bind group split:**

```
@group(0)  ComposePass (7 bindings)
  0: RenderUniforms
  1: current cells (from SimPass)
  2: previous cells (owned)
  3: PaperParams
  4: noise texture
  5: noise sampler
  6: (reserved)

@group(1)  OverlayPass (8 bindings)
  0: zone meta
  1: zone entries
  2: decal meta
  3: decal entries
  4: sdf meta
  5: sdf glyphs
  6: sdf atlas
  7: sdf sampler

@group(2)  HiResPass (4 bindings)
  0: hires global meta
  1: hires region meta
  2: hires cells current
  3: hires cells previous
```

**Total: 19 bindings across 3 groups** (vs 18 in 1 group). The count is similar but the ownership is clean — each group is built by one module.

**WGSL changes**: Update `@group(0) @binding(N)` references to the new group/binding layout. The shader logic itself doesn't change — only the binding declarations.

### Step 5: Simplify the Orchestrator

```rust
impl GpuGameOfLife {
    pub fn tick_and_render(&mut self) {
        // 1. Flush edits
        self.sim.flush_edits(&self.queue);

        let mut encoder = self.device.create_command_encoder(&Default::default());

        // 2. Snapshot previous state
        self.compose.capture_previous_state(&mut encoder, self.sim.current_visible_buffer());
        self.hires.snapshot_previous(&mut encoder);

        // 3. Simulate
        self.hires.tick(&mut encoder, self.sim.frame);
        self.sim.tick(&mut encoder);

        // 4. Render
        let surface_tex = self.compose.render(
            &mut encoder,
            self.sim.current_visible_is_a(),
            &self.sim,       // for current cells buffer ref
            &self.overlay,   // for overlay bind group
            &self.hires,     // for hires output bind group
        );

        self.queue.submit([encoder.finish()]);
        surface_tex.present();
    }

    pub fn resize(&mut self, w: u32, h: u32) {
        self.grid = Grid::new(w, h, self.target_pitch);

        // Each pass resizes independently — no ordering constraints between passes
        self.hires.resize(&self.device, &self.queue, &self.grid);
        self.sim.resize(&self.device, &self.queue, &self.grid,
            self.hires.mask_buffer(), self.hires.inward_buffer());
        self.hires.set_base_buffers(&self.device,
            &self.sim.buf_a, &self.sim.buf_b);
        self.compose.resize(&self.device, &self.queue, &self.grid, &self.sim);

        // Re-apply overlay data
        self.overlay.set_zones(&self.queue, &self.zones_json);
        self.overlay.set_decals(&self.queue, &self.decals_json);
    }
}
```

**What's gone:**
- `sync_hires_to_renderer()` — eliminated; HiResPass owns its output buffers
- `copy_hires_current()` — moved into HiResPass.tick()
- `snapshot_hires_previous()` — moved into HiResPass
- Direct `renderer.set_zones()`, `renderer.set_decals()`, etc. — replaced by OverlayPass

---

## Resize Ordering

The current resize cascade requires strict 5-step ordering. With the decoupled design:

```
1. Grid::new()                            — pure math, no GPU
2. HiResPass::resize()                    — mask + inward + regions (self-contained)
3. SimPass::resize(mask_buf, inward_buf)  — depends on HiRes outputs
4. HiResPass::set_base_buffers(sim bufs)  — depends on Sim outputs
5. ComposePass::resize(sim)               — depends on Sim for buf refs
6. OverlayPass (no resize needed)         — buffers are grid-independent
```

Steps 2-5 still have ordering, but each step is a single method call on one module. The ordering is explicit in the orchestrator, not spread across cross-module function calls.

---

## Migration Strategy

### Phase A: Split bind groups in WGSL (low risk)

Change the shader from `@group(0) @binding(0..17)` to three groups. Update the bind group layout in pipeline.rs. No Rust structural changes — just move binding declarations.

This is a **shader-only change** that can be tested independently.

### Phase B: Extract OverlayPass (medium risk)

Move zone/decal/text buffer ownership from GpuRenderer to OverlayPass. GpuRenderer creates OverlayPass's bind group at render time. gpu.rs routes `set_zones()` etc. to OverlayPass instead of renderer.

### Phase C: Extract HiResPass output (medium risk)

Move the concatenated output buffer from renderer to HiResPass. Eliminate the copy chain in gpu.rs. HiResPass builds its own bind group for the render shader.

### Phase D: Rename and simplify (low risk)

Rename `GpuRenderer` → `ComposePass`, `Simulation` → `SimPass`. Clean up gpu.rs orchestrator to match the target architecture.

Each phase is independently deployable. Tests verify visual output matches at each step.

---

## Bind Group Rebuild Elimination

Currently, `rebuild_bind_groups()` is called whenever ANY buffer changes (text atlas upload, hires resize, etc.) because all 18 bindings are in one group.

With split groups:
- Text atlas upload → rebuild `@group(1)` only (OverlayPass)
- HiRes region add → rebuild `@group(2)` only (HiResPass)
- Canvas resize → rebuild `@group(0)` only (ComposePass)

Each module rebuilds only its own bind group. No cross-module rebuild triggers.

---

## Adding a New Visual Feature

**Before (current):**
1. Add buffer fields to `GpuRenderer`
2. Add bindings 18-19 to the bind group layout
3. Update `make_bind_group()` to include new buffers
4. Add `set_feature()` method to renderer
5. Add `rebuild_bind_groups()` call site in gpu.rs
6. Update WGSL shader binding declarations
7. Add shader logic
8. Add gpu.rs API method + routing

**After (decoupled):**
1. Create `FeaturePass` struct with its own buffers + bind group
2. Add `@group(3)` binding declarations to WGSL
3. Add shader logic
4. Add gpu.rs field + API routing

Two fewer files touched. No changes to existing passes. No bind group rebuilds in unrelated modules.
