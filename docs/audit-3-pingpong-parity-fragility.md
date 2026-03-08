# Audit 3: Hi-Res Ping-Pong Parity Fragility

## Problem Statement

The hi-res simulation uses a ping-pong double-buffering scheme where `region.frame & 1` determines which buffer is source and which is destination. This parity must stay synchronized with the base simulation's `sim_frame`. When it drifts — due to pausing, sub-ticking, or region lifecycle timing — the system reads from the wrong buffer, producing visual glitches or stale data.

---

## How Ping-Pong Works

### Buffer Selection

```rust
// region.rs — ping_pong_buffers()
pub fn ping_pong_buffers(&self) -> (&wgpu::Buffer, &wgpu::Buffer) {
    if self.frame % 2 == 0 {
        (&self.buf_a, &self.buf_b)   // even: read A, write B
    } else {
        (&self.buf_b, &self.buf_a)   // odd:  read B, write A
    }
}
```

### Frame Counter Semantics

| Counter | Location | Incremented By | Used For |
|---------|----------|---------------|----------|
| `sim_frame` | `Simulation.frame` | `Simulation::step()` | Base grid parity, passed to hi-res |
| `region.frame` | `HiResRegion.frame` | `region.swap()` | Hi-res buffer selection |

**Contract**: `region.frame & 1` must equal `sim_frame & 1` at bind-group creation time, or the compute shader reads the wrong buffer.

---

## Parity-Dependent Code Paths

### 1. Boundary Extract (dispatch.rs)

```rust
fn dispatch_boundary_extract(&self, encoder: &mut wgpu::CommandEncoder, sim_frame: u32, idx: usize) {
    let bg = if sim_frame & 1 == 0 {
        &self.boundary_bgs_even[idx]    // reads sim.buf_a
    } else {
        &self.boundary_bgs_odd[idx]     // reads sim.buf_b
    };
    // ...
}
```

Uses `sim_frame` parity to select which base-grid buffer to read boundary cells from.

### 2. Fine Compute (dispatch.rs)

```rust
fn dispatch_fine_compute(&self, encoder: &mut wgpu::CommandEncoder, region_frame: u32, idx: usize) {
    let bg = if region_frame & 1 == 0 {
        &self.fine_bgs_even[idx]    // reads region.buf_a, writes region.buf_b
    } else {
        &self.fine_bgs_odd[idx]     // reads region.buf_b, writes region.buf_a
    };
    // ...
}
```

Uses `region.frame` parity to select which region buffer pair to use.

### 3. Render Copy (gpu.rs)

```rust
// copy_hires_current — copies visible region buffer to renderer's hires_cells_buf
fn copy_hires_current(&self, encoder: &mut wgpu::CommandEncoder) {
    for region in &self.hires.regions {
        let src = region.current_visible_buffer();  // uses region.frame parity
        // ...
    }
}
```

### 4. Previous State Snapshot (gpu.rs)

```rust
// snapshot_hires_previous — copies visible buffer BEFORE tick for transition blending
fn snapshot_hires_previous(&self, encoder: &mut wgpu::CommandEncoder) {
    for region in &self.hires.regions {
        let src = region.current_visible_buffer();  // must be pre-tick state
        // ...
    }
}
```

**Critical ordering**: snapshot happens BEFORE tick, copy happens AFTER tick. Both use `current_visible_buffer()` which depends on `region.frame`. After `region.swap()`, the "current" buffer flips.

---

## The Resync Mechanism

When a region's frame counter drifts from `sim_frame`, dispatch.rs forces realignment:

```rust
// dispatch.rs — tick()
for region in &mut self.regions {
    if region.paused { continue; }
    if (region.frame & 1) != (sim_frame & 1) {
        // Parity mismatch — copy current state to the other buffer
        let (src, dst) = region.ping_pong_buffers();
        let src = src as *const wgpu::Buffer;    // unnecessary unsafe
        let dst = dst as *const wgpu::Buffer;    // unnecessary unsafe
        unsafe {
            encoder.copy_buffer_to_buffer(&*src, 0, &*dst, 0, region.buffer_bytes());
        }
    }
    region.resync_frame(sim_frame);
}
```

**What this does**: If region parity doesn't match sim parity, copy the current visible state to the other buffer, then force `region.frame = sim_frame`. This ensures both buffers contain identical data, so it doesn't matter which one the compute shader reads.

**When this triggers**:
- Region was paused for an odd number of base ticks
- Region was just created with a frame counter that doesn't match current sim_frame
- (Would trigger on sub-ticks if tick_multiplier were implemented)

---

## The Unsafe Casts

The resync code contains two unnecessary `unsafe` blocks:

```rust
let (src, dst) = region.ping_pong_buffers();
let src = src as *const wgpu::Buffer;
let dst = dst as *const wgpu::Buffer;
unsafe {
    encoder.copy_buffer_to_buffer(&*src, 0, &*dst, 0, region.buffer_bytes());
}
```

**Why this exists**: The borrow checker complains because `ping_pong_buffers()` borrows `region` (returning references to its fields), and `encoder.copy_buffer_to_buffer()` needs `&wgpu::Buffer` for both source and destination. The author worked around this by casting to raw pointers.

**Why it's unnecessary**: `copy_buffer_to_buffer` takes two `&wgpu::Buffer` references. The buffers are distinct (`buf_a` and `buf_b`), so there's no aliasing issue. The fix is to avoid borrowing through `ping_pong_buffers()`:

```rust
// Safe alternative:
let (src, dst) = if region.frame % 2 == 0 {
    (&region.buf_a, &region.buf_b)
} else {
    (&region.buf_b, &region.buf_a)
};
encoder.copy_buffer_to_buffer(src, 0, dst, 0, region.buffer_bytes());
```

Or extract buffer references before the mutable borrow:

```rust
let bytes = region.buffer_bytes();
let (src, dst) = region.ping_pong_buffers();
encoder.copy_buffer_to_buffer(src, 0, dst, 0, bytes);
// region.resync_frame() called after this block
```

---

## Why tick_multiplier Broke

The tick_multiplier feature attempted to run N fine-compute steps per base tick. This created two problems:

### Problem 1: Parity Divergence

After N sub-ticks, `region.frame` would be `sim_frame + N - 1`. On the next base tick, `sim_frame` increments by 1, but the region is N-1 steps ahead. The resync mechanism fires, copying buffer state and resetting the frame — **discarding N-1 sub-ticks of simulation work**.

### Problem 2: WebGPU Storage Buffer Sync

Even if parity were handled correctly, multiple compute dispatches within a single `CommandEncoder` don't guarantee that storage buffer writes from dispatch N are visible to dispatch N+1. The GPU may execute them out of order or with stale caches.

**Confirmed behavior**: Rust-side logging showed `max_ticks=16, multipliers=[16]` — the loop ran 16 iterations. But the visible result was identical to 1 iteration. The GPU did not synchronize storage writes between passes.

### Problem 3: Separate Encoder Attempt

Splitting sub-ticks into separate `CommandEncoder` submissions (with `queue.submit()` between each) broke the transition animation system:

```
Timeline with separate encoders:
1. Main encoder: snapshot_hires_previous()  ← reads pre-tick state
2. Sub-tick encoder 1: submit()             ← runs before main encoder!
3. Sub-tick encoder 2: submit()
4. ...
5. Main encoder: copy_hires_current()       ← reads post-tick state
6. Main encoder: render pass
7. Main encoder: submit()
```

Steps 2-4 execute before step 1 is submitted, so the sub-ticks modify buffers before the snapshot captures pre-tick state. The transition blend shows garbage.

---

## Fragility Analysis

### What Makes This Fragile

1. **Implicit contract**: Nothing in the type system enforces that `region.frame & 1 == sim_frame & 1`. It's a runtime invariant maintained by careful ordering of operations.

2. **Silent failure mode**: When parity drifts, the resync mechanism silently fixes it by copying data. This masks bugs — you get correct-looking output but may have lost simulation steps.

3. **Ordering sensitivity**: The tick pipeline must execute in exactly this order:
   ```
   resync → boundary_extract → fine_compute → swap
   ```
   Reordering any step produces wrong results with no error.

4. **Pause/resume gap**: A region paused for an odd number of ticks will have wrong parity on resume. The resync handles this, but it means the region "skips" a beat — both buffers get identical data, so the next tick reads the same state regardless of parity.

5. **Frame counter overflow**: `frame` is `u32`. At 60 fps, overflow occurs after ~2.3 years. Not a practical concern, but `frame % 2` would produce a parity flip at overflow if the counter wrapped oddly.

---

## Proposed Redesign: Explicit Buffer Roles

Replace implicit parity with explicit named roles:

```rust
pub struct HiResRegion {
    read_buf: wgpu::Buffer,   // always the source for compute + render
    write_buf: wgpu::Buffer,  // always the destination for compute
    // No frame counter needed for buffer selection
}

impl HiResRegion {
    pub fn swap(&mut self) {
        std::mem::swap(&mut self.read_buf, &mut self.write_buf);
    }

    pub fn visible(&self) -> &wgpu::Buffer { &self.read_buf }
}
```

**Benefits**:
- No parity calculation anywhere
- No resync mechanism needed
- `swap()` is the only mutation point
- Pause/resume doesn't require special handling
- Buffer roles are self-documenting

**Trade-off**: Bind groups must be rebuilt after every `swap()` since the buffer references change. With the current wgpu API, bind groups hold `&Buffer` references at creation time. Two approaches:
1. Keep two pre-built bind groups and select based on a simple boolean (similar to current even/odd)
2. Rebuild bind groups each frame (cheap for small bind groups)

Option 1 is effectively what exists today, but with clearer naming. The real win is removing the frame counter and resync mechanism.

---

## Relationship to Other Audits

- **Audit 1 (GPU Pipeline Coupling)**: The parity system is one source of coupling — `gpu.rs` must know about `region.frame` to pass it correctly to dispatch functions.
- **Audit 4 (Repeated Compute)**: The tick_multiplier failure is a specific case of the general "no abstraction for multi-step compute" problem.
- **Decoupling simulation from rendering** (Phase 2 in architecture audit) would eliminate the snapshot/copy ordering constraint that makes separate-encoder sub-ticks impossible.
