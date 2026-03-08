# Solution 4: Multi-Step GPU Compute

## Goal

Enable running a compute shader N times per frame with guaranteed storage buffer synchronization between steps. This unblocks variable tick rate for hi-res regions and any future multi-step simulation features.

---

## Root Cause Recap

WebGPU does not guarantee that storage buffer writes from compute dispatch N are visible to dispatch N+1 within the same `CommandEncoder`. The only reliable synchronization point is `queue.submit()`.

The current `tick_and_render()` uses a single encoder for everything. Inserting additional `queue.submit()` calls mid-flow breaks the snapshot/render ordering.

---

## Solution: Split Tick Pipeline Into Phases

Instead of one encoder for the entire frame, use three phases with explicit submission boundaries:

```
Phase 1: SNAPSHOT (capture pre-tick state)
  └── submit encoder 1

Phase 2: SIMULATE (N steps, each with its own submit)
  └── submit encoder 2..N+1

Phase 3: COMPOSE (copy outputs + render)
  └── submit encoder N+2 + present
```

Each phase is a separate `CommandEncoder` + `queue.submit()`. GPU synchronization between phases is guaranteed.

---

## Implementation

### The Pipeline Struct

```rust
/// Manages the per-frame tick-and-render pipeline with support for multi-step simulation.
struct TickPipeline {
    device: wgpu::Device,
    queue: wgpu::Queue,
}

impl TickPipeline {
    /// Execute a full tick-and-render frame.
    fn execute(
        &self,
        sim: &mut SimPass,
        hires: &mut HiResPass,
        compose: &mut ComposePass,
    ) {
        // Phase 1: Snapshot previous state
        {
            let mut enc = self.device.create_command_encoder(&Default::default());
            compose.capture_previous_state(&mut enc, sim.read_buf());
            hires.snapshot_previous(&mut enc);
            self.queue.submit([enc.finish()]);
        }

        // Phase 2: Simulate
        // Hi-res sub-ticks (per-region tick_multiplier)
        let max_hires_steps = hires.max_tick_multiplier();
        if max_hires_steps > 1 {
            hires.tick_n_steps(&self.device, &self.queue, max_hires_steps, sim.current_is_a());
        } else {
            let mut enc = self.device.create_command_encoder(&Default::default());
            hires.tick(&mut enc, sim.current_is_a());
            self.queue.submit([enc.finish()]);
        }

        // Base simulation (always 1 step)
        {
            let mut enc = self.device.create_command_encoder(&Default::default());
            sim.tick(&mut enc);
            self.queue.submit([enc.finish()]);
        }

        // Phase 3: Compose
        {
            let mut enc = self.device.create_command_encoder(&Default::default());
            hires.copy_to_output(&mut enc);
            let surface_tex = compose.render(&mut enc, sim, hires);
            self.queue.submit([enc.finish()]);
            surface_tex.present();
        }
    }
}
```

### HiResPass Multi-Step

```rust
impl HiResPass {
    /// Run N fine-compute steps with GPU sync between each.
    pub fn tick_n_steps(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        max_steps: u32,
        base_is_a: bool,
    ) {
        for step in 0..max_steps {
            let mut encoder = device.create_command_encoder(&Default::default());

            // Clear inward grid (accumulated boundary votes)
            self.clear_inward_grid(&mut encoder);

            // Boundary extraction (reads base buffer, writes boundary ring)
            for (i, region) in self.regions.iter().enumerate() {
                if region.paused { continue; }
                // Only run regions whose tick_multiplier > step
                if region.tick_multiplier <= step { continue; }
                self.dispatch_boundary_extract(&mut encoder, i, base_is_a);
            }

            // Fine compute (reads current region buffer, writes next)
            for (i, region) in self.regions.iter().enumerate() {
                if region.paused { continue; }
                if region.tick_multiplier <= step { continue; }
                self.dispatch_fine_compute(&mut encoder, i);
            }

            // Submit — guarantees writes are visible to next step
            queue.submit([encoder.finish()]);

            // Swap buffers for regions that participated
            for region in &mut self.regions {
                if !region.paused && region.tick_multiplier > step {
                    region.swap();
                }
            }
        }
    }

    /// Maximum tick_multiplier across all regions.
    pub fn max_tick_multiplier(&self) -> u32 {
        self.regions.iter().map(|r| r.tick_multiplier).max().unwrap_or(1)
    }
}
```

**Key design decisions:**

1. **Per-region tick_multiplier**: Regions with `tick_multiplier = 4` run 4 sub-ticks while regions with `tick_multiplier = 1` run only 1. The `region.tick_multiplier <= step` guard handles mixed rates.

2. **Boundary re-extraction per step**: Each sub-tick re-extracts boundary cells from the base grid. The base grid doesn't change between sub-ticks (it ticks once per frame), but the fine-grid edges do change, so boundary data must be refreshed.

3. **Inward grid cleared per step**: The inward grid accumulates fine→base boundary votes. Must be cleared before each boundary extraction.

---

## Performance Analysis

### Submission Overhead

Each `queue.submit()` has overhead:
- wgpu command buffer validation: ~5-20μs
- GPU driver submission: ~10-50μs
- Total per submit: ~15-70μs

For N=16 sub-ticks: worst case 16 × 70μs = 1.12ms overhead. This is acceptable for a background animation running at 60fps (16.6ms budget).

### Comparison to Current

| Approach | Submissions per frame | GPU sync points | Correct? |
|----------|----------------------|-----------------|----------|
| Current (single encoder) | 1 | 0 between computes | No (multi-step fails) |
| Split phases, single step | 3 | 2 | Yes |
| Split phases, N steps | 2 + N | 1 + N | Yes |
| Loop in shader | 1 | 0 | Not feasible |

### Optimization: Batch When Possible

For `tick_multiplier = 1` (the common case), avoid the per-step submit overhead:

```rust
if max_steps == 1 {
    // Fast path: single encoder, no extra submits
    let mut enc = device.create_command_encoder(&Default::default());
    self.tick_single(&mut enc, base_is_a);
    queue.submit([enc.finish()]);
} else {
    // Multi-step path: separate submits
    self.tick_n_steps(device, queue, max_steps, base_is_a);
}
```

The fast path is identical to the current single-step behavior.

---

## Integration With Solution 1 (Pipeline Decoupling)

The split-phase approach requires the orchestrator to manage submission boundaries. This aligns with Solution 1's decoupled architecture:

```rust
impl GpuGameOfLife {
    pub fn tick_and_render(&mut self) {
        // Flush cell edits (own submission)
        self.sim.flush_edits(&self.device, &self.queue);

        // Phase 1: Snapshot
        let mut snap_enc = self.device.create_command_encoder(&Default::default());
        self.compose.capture_previous(&mut snap_enc, self.sim.read_buf());
        self.hires.snapshot_previous(&mut snap_enc);
        self.queue.submit([snap_enc.finish()]);

        // Phase 2: Hi-res simulate (multi-step aware)
        let max_steps = self.hires.max_tick_multiplier();
        self.hires.tick_n_steps(&self.device, &self.queue, max_steps, self.sim.current_is_a());

        // Phase 2b: Base simulate
        let mut sim_enc = self.device.create_command_encoder(&Default::default());
        self.sim.tick(&mut sim_enc);
        self.queue.submit([sim_enc.finish()]);

        // Phase 3: Compose
        let mut render_enc = self.device.create_command_encoder(&Default::default());
        self.hires.copy_to_output(&mut render_enc);
        let tex = self.compose.render(&mut render_enc, &self.sim, &self.overlay, &self.hires);
        self.queue.submit([render_enc.finish()]);
        tex.present();
    }
}
```

**Total submissions**: 3 (single-step) or 2+N (multi-step). The `render_only()` path remains 1 submission.

---

## Integration With Solution 3 (Parity Fix)

Multi-step compute requires correct buffer selection at each step. With Solution 3's explicit `current` index:

```
Step 0: read bufs[0], write bufs[1]  →  current = 1
Step 1: read bufs[1], write bufs[0]  →  current = 0
Step 2: read bufs[0], write bufs[1]  →  current = 1
...
```

The `swap()` call after each step toggles `current` correctly. No frame counter, no parity math, no resync.

---

## render_only() Path

The `render_only()` function (called between ticks for vsync frames) doesn't simulate. It should remain a single submission:

```rust
pub fn render_only(&mut self) {
    let mut enc = self.device.create_command_encoder(&Default::default());
    // No snapshot, no simulate
    if self.hires_dirty {
        self.hires.copy_to_output(&mut enc);
        self.hires_dirty = false;
    }
    let tex = self.compose.render(&mut enc, &self.sim, &self.overlay, &self.hires);
    self.queue.submit([enc.finish()]);
    tex.present();
}
```

---

## Future: Base Simulation Multi-Step

The same pattern works for the base simulation if variable tick rate is desired:

```rust
pub fn base_tick_n_steps(
    sim: &mut SimPass,
    device: &Device,
    queue: &Queue,
    steps: u32,
) {
    for _ in 0..steps {
        let mut enc = device.create_command_encoder(&Default::default());
        sim.tick(&mut enc);
        queue.submit([enc.finish()]);
    }
}
```

This doesn't require any additional infrastructure — the same split-submit pattern applies.

---

## Migration Steps

1. **Split `tick_and_render()` into 3 phases** with separate encoders
   - Keep single-step behavior — just add submission boundaries
   - Verify visual output is identical

2. **Add `tick_n_steps()` to HiResPass**
   - Initially only callable with steps=1 (same as current)
   - Verify no regression

3. **Wire tick_multiplier from UI through to `tick_n_steps()`**
   - Re-enable the tick rate UI in GridHiResTab
   - Test with multiplier values 1, 2, 4, 8, 16

4. **Add fast path optimization**
   - Single-encoder path when all multipliers are 1
   - Multi-encoder path when any multiplier > 1

---

## Verification

- **multiplier=1**: Visual output identical to current behavior
- **multiplier=2**: Hi-res region visibly ticks twice as fast as base grid
- **multiplier=16**: Hi-res region ticks 16x faster — rapid evolution visible
- **Mixed multipliers**: Regions with different multipliers tick at different rates
- **Pause + multiplier**: Paused regions don't tick regardless of multiplier
- **Transition animation**: Smooth blend between previous and current state works at all multiplier values
