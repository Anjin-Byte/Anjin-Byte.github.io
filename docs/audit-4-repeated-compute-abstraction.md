# Audit 4: No Abstraction for Repeated GPU Compute

## Problem Statement

The codebase has no way to run a compute shader N times with correct buffer synchronization between iterations. When tick_multiplier tried to loop the fine-compute dispatch, the GPU didn't synchronize storage buffer writes between passes within a single `CommandEncoder`. Splitting into separate encoders broke the render pipeline. There's no abstraction to handle this correctly.

---

## Current Compute Dispatch Patterns

### Pattern 1: Single-Step Compute (Simulation)

```rust
// simulation.rs — step()
pub fn step(&mut self, encoder: &mut wgpu::CommandEncoder) {
    let bg = if self.frame & 1 == 0 {
        &self.bind_group_a
    } else {
        &self.bind_group_b
    };
    let mut pass = encoder.begin_compute_pass(&Default::default());
    pass.set_pipeline(&self.pipeline);
    pass.set_bind_group(0, bg, &[]);
    pass.dispatch_workgroups(self.dispatch_x, self.dispatch_y, 1);
    drop(pass);
    self.frame += 1;
}
```

Always exactly one dispatch per frame. No iteration needed.

### Pattern 2: Per-Region Compute (Hi-Res Boundary Extract)

```rust
// dispatch.rs — tick() excerpt
for (i, region) in self.regions.iter().enumerate() {
    if region.paused { continue; }
    self.dispatch_boundary_extract(encoder, sim_frame, i);
}
```

One dispatch per region, all in the same encoder. Works because each region writes to independent buffers (no data dependency between regions).

### Pattern 3: Per-Region Compute (Hi-Res Fine Compute)

```rust
for (i, region) in self.regions.iter().enumerate() {
    if region.paused { continue; }
    self.dispatch_fine_compute(encoder, region.frame, i);
}
```

Same pattern — one dispatch per region, independent buffers.

### Pattern 4: Multi-Step Compute (tick_multiplier — FAILED)

```rust
// What was attempted:
for _ in 0..region.tick_multiplier {
    self.dispatch_fine_compute(encoder, region.frame, i);
    region.swap();  // flip parity for next iteration
}
```

**Failed because**: Each `dispatch_fine_compute` reads from and writes to the same pair of buffers (alternating via parity). The GPU doesn't guarantee that writes from dispatch N are visible to reads in dispatch N+1 within the same `CommandEncoder`.

---

## WebGPU Storage Buffer Synchronization

### The Spec

WebGPU compute passes within a single command encoder do NOT provide automatic synchronization for storage buffer read-after-write. From the WebGPU spec:

> Storage buffer accesses within a single dispatch are not ordered with respect to accesses in other dispatches in the same command encoder.

### What This Means In Practice

```
Encoder:
  Pass 1: read buf_a → compute → write buf_b    ← dispatched
  Pass 2: read buf_b → compute → write buf_a    ← dispatched
```

Pass 2 may read `buf_b` before Pass 1 finishes writing to it. The GPU scheduler can overlap, reorder, or cache these operations.

### Why Single-Step Works

The base simulation runs one compute pass per frame. The render pass that follows is on a different pipeline stage (render vs compute), and WebGPU guarantees ordering between different pass types within an encoder.

### Why Per-Region Works

Each region writes to its own independent buffers. Region 0's boundary extract writes to `regions[0].outward_buf`, Region 1's writes to `regions[1].outward_buf`. No data dependency = no synchronization needed.

---

## Failed Approaches

### Approach 1: Loop Within Single Encoder

```rust
for step in 0..tick_multiplier {
    let mut pass = encoder.begin_compute_pass(&Default::default());
    pass.set_pipeline(&self.fine_pipeline);
    pass.set_bind_group(0, &bg_for_step(step), &[]);
    pass.dispatch_workgroups(dx, dy, 1);
    drop(pass);  // end pass — does NOT flush writes
}
```

**Result**: Confirmed via logging that all iterations execute. But storage writes don't synchronize. Visible output is identical to 1 iteration.

### Approach 2: Separate Encoder Per Step

```rust
for step in 0..tick_multiplier {
    let mut encoder = device.create_command_encoder(&Default::default());
    // dispatch fine compute on this encoder
    queue.submit([encoder.finish()]);
}
```

**Result**: Each submission forces a GPU synchronization point, so storage writes ARE visible to the next submission. However:
- The sub-tick submissions execute before the main encoder (which holds the snapshot + render pass) is submitted
- The transition animation reads stale snapshot data
- Visual output: animation breaks, renders garbage during transitions

### Approach 3: Shader-Level Iteration

```wgsl
// Hypothetical: loop inside the shader
for (var step = 0u; step < tick_multiplier; step++) {
    // Read from buf_a, compute, write to buf_b
    // But... can't swap buffers inside a shader
    // Can't call storageBarrier() between full-grid iterations
}
```

**Not feasible**: A compute shader invocation operates on a subset of the grid (one workgroup). `storageBarrier()` only synchronizes within a workgroup, not across the entire grid. There's no mechanism to synchronize all workgroups mid-dispatch.

---

## What's Missing: A Multi-Step Compute Abstraction

The codebase needs a way to express: "Run this compute shader N times with full storage buffer synchronization between iterations."

### Requirements

1. **Storage writes from step N visible to step N+1** — guaranteed by the abstraction
2. **Doesn't break the render pipeline** — snapshot/copy/render ordering preserved
3. **Works with ping-pong buffers** — parity handled automatically
4. **Composable** — can be used by both base simulation and hi-res regions

### Design: `ComputeSequence`

```rust
/// Runs a compute operation N times with guaranteed synchronization.
pub struct ComputeSequence {
    device: Arc<wgpu::Device>,
    queue: Arc<wgpu::Queue>,
}

impl ComputeSequence {
    /// Execute a compute operation N times.
    /// Each step gets its own CommandEncoder + submit, ensuring
    /// storage buffer writes are visible to the next step.
    ///
    /// Returns when all steps are submitted (not necessarily complete).
    pub fn run<F>(&self, steps: u32, mut dispatch: F)
    where
        F: FnMut(&mut wgpu::CommandEncoder, u32), // (encoder, step_index)
    {
        for step in 0..steps {
            let mut encoder = self.device.create_command_encoder(&Default::default());
            dispatch(&mut encoder, step);
            self.queue.submit([encoder.finish()]);
        }
    }
}
```

### Integration With Tick Pipeline

The key insight: sub-ticks must happen AFTER the previous-state snapshot but BEFORE the post-tick copy.

```rust
// Revised tick_and_render flow:
fn tick_and_render(&mut self) {
    // 1. Snapshot previous state (for transition blending)
    let mut snap_encoder = self.device.create_command_encoder(&Default::default());
    self.snapshot_previous(&mut snap_encoder);  // base + hires
    self.queue.submit([snap_encoder.finish()]);

    // 2. Run simulation steps (may be multiple)
    let steps = self.tick_multiplier;  // or per-region
    self.compute_sequence.run(steps, |encoder, _step| {
        self.hires.tick_one_step(encoder, self.simulation.frame);
        self.simulation.step(encoder);
    });

    // 3. Copy current state + render
    let mut render_encoder = self.device.create_command_encoder(&Default::default());
    self.copy_current_to_render(&mut render_encoder);
    self.render(&mut render_encoder);
    self.queue.submit([render_encoder.finish()]);
}
```

**Why this works**:
- Step 1 captures pre-tick state (snapshot) in its own submission — guaranteed complete before step 2
- Step 2 runs N compute steps, each in its own submission — storage writes synchronized
- Step 3 reads post-tick state — guaranteed to see all N steps' results

**Trade-off**: 2 + N GPU submissions per frame instead of 1. For small N (1–16), this is negligible. WebGPU submission overhead is minimal compared to actual compute work.

---

## Bind Group Management for Multi-Step

Each compute step needs the correct bind group (matching buffer parity). Two options:

### Option A: Pre-built Even/Odd Bind Groups (Current Approach)

Already have `fine_bgs_even` and `fine_bgs_odd`. The step callback selects based on current parity:

```rust
self.compute_sequence.run(steps, |encoder, _step| {
    for (i, region) in self.regions.iter_mut().enumerate() {
        self.dispatch_fine_compute(encoder, region.frame, i);
        region.swap();  // flip parity for next step
    }
});
```

Works with existing bind groups. No rebuild needed.

### Option B: Dynamic Bind Groups

Create bind groups on the fly for each step. More flexible but has allocation overhead. Not recommended for hot-path compute.

---

## Relationship to Other Audits

- **Audit 1 (GPU Pipeline Coupling)**: The single-encoder constraint is a direct consequence of coupling simulation, hi-res, and rendering into one encoder. Decoupling (separate submissions) enables multi-step compute.
- **Audit 3 (Ping-Pong Parity)**: Multi-step compute requires correct parity management per step. The `swap()` call in the loop handles this, but the resync mechanism must not undo the work.
- **Architecture Audit Phase 2**: "Decouple tick scheduling from render submission" — this is exactly what `ComputeSequence` enables.
