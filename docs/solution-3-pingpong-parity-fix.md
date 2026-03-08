# Solution 3: Fixing Ping-Pong Parity Fragility

## Goal

Eliminate implicit parity tracking, remove unsafe code, and make the buffer selection system robust enough to support variable tick rates.

---

## Problem Recap

- `region.frame % 2` determines which buffer is read vs written
- Must match `sim_frame & 1` or boundary extraction reads wrong base buffer
- Resync mechanism silently copies buffers when parity drifts — masks bugs
- Two unnecessary `unsafe` blocks work around borrow checker via raw pointers
- Variable tick rate (N sub-ticks per frame) breaks parity assumptions

---

## Solution: Explicit Buffer Roles + Named State

### Part A: Replace frame counter with explicit roles

**Current** (region.rs):
```rust
pub struct HiResRegion {
    pub buf_a: wgpu::Buffer,
    pub buf_b: wgpu::Buffer,
    pub frame: u32,  // determines which buffer is "current"
}

impl HiResRegion {
    pub fn ping_pong_buffers(&self) -> (&Buffer, &Buffer) {
        if self.frame % 2 == 0 { (&self.buf_a, &self.buf_b) }
        else { (&self.buf_b, &self.buf_a) }
    }
}
```

**Proposed** (region.rs):
```rust
pub struct HiResRegion {
    id: u32,
    rect: [i32; 4],
    multiplier: u32,
    cols: u32,
    rows: u32,
    words_per_row: u32,
    padded_rows: u32,

    /// The two cell buffers. `current` is index 0 or 1.
    bufs: [wgpu::Buffer; 2],
    current: usize,  // 0 or 1

    show_grid: bool,
    show_base_grid: bool,
    show_border: bool,
    paused: bool,
    frozen_buf: Option<wgpu::Buffer>,
}

impl HiResRegion {
    /// Buffer holding the latest simulation state.
    pub fn read_buf(&self) -> &wgpu::Buffer {
        &self.bufs[self.current]
    }

    /// Buffer that will be written to by the next compute step.
    pub fn write_buf(&self) -> &wgpu::Buffer {
        &self.bufs[1 - self.current]
    }

    /// Swap read/write roles after a compute step.
    pub fn swap(&mut self) {
        self.current = 1 - self.current;
    }

    /// Buffer size in bytes.
    pub fn buffer_bytes(&self) -> u64 {
        (self.padded_rows * self.words_per_row) as u64 * 4
    }
}
```

**What this changes:**
- No `frame` counter — no parity calculation
- `read_buf()` and `write_buf()` are self-documenting
- `swap()` is a simple toggle — no integer arithmetic
- No `resync_frame()` needed — there's nothing to resync

### Part B: Decouple from base simulation parity

The boundary extraction bind group currently selects even/odd based on `sim_frame & 1` because it needs to read the base simulation's current visible buffer. Instead of maintaining parity, pass the buffer reference directly.

**Current** (dispatch.rs):
```rust
fn dispatch_boundary_extract(&self, encoder: &mut CommandEncoder, sim_frame: u32, idx: usize) {
    let bg = if sim_frame & 1 == 0 {
        &self.gpu_states[idx].bnd_bg_even
    } else {
        &self.gpu_states[idx].bnd_bg_odd
    };
    // ...
}
```

**Proposed**: The orchestrator tells HiResPass which base buffer is current:

```rust
impl HiResPass {
    /// Set which base simulation buffer is currently visible.
    /// Call before tick().
    pub fn set_current_base_buffer(&mut self, device: &Device, base_buf: &Buffer) {
        // Rebuild boundary bind groups if the base buffer changed
        if self.last_base_buf_id != base_buf.global_id() {
            self.rebuild_boundary_bind_groups(device, base_buf);
            self.last_base_buf_id = base_buf.global_id();
        }
    }

    pub fn tick(&mut self, encoder: &mut CommandEncoder) {
        // No sim_frame parameter needed
        // Boundary bind groups already reference the correct base buffer
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_boundary_extract(encoder, i);
        }
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_fine_compute(encoder, i);
        }
        for region in &mut self.regions {
            if !region.paused { region.swap(); }
        }
    }
}
```

**Alternative (simpler)**: Keep two boundary bind groups but select based on a boolean flag set by the orchestrator:

```rust
pub fn tick(&mut self, encoder: &mut CommandEncoder, base_is_a: bool) {
    for (i, region) in self.regions.iter().enumerate() {
        if region.paused { continue; }
        let bg = if base_is_a {
            &self.gpu_states[idx].bnd_bg_a
        } else {
            &self.gpu_states[idx].bnd_bg_b
        };
        // dispatch with bg
    }
    // ...
}
```

This is closer to the current code but replaces the implicit `sim_frame & 1` parity with an explicit `base_is_a` boolean. The orchestrator passes `sim.current_visible_is_a()`.

### Part C: Fine compute bind group selection

Same approach for fine compute. Instead of `region.frame & 1`:

```rust
fn dispatch_fine_compute(&self, encoder: &mut CommandEncoder, idx: usize) {
    let region = &self.regions[idx];
    let bg = if region.current == 0 {
        &self.gpu_states[idx].fine_bg_0  // reads bufs[0], writes bufs[1]
    } else {
        &self.gpu_states[idx].fine_bg_1  // reads bufs[1], writes bufs[0]
    };
    // dispatch
}
```

The bind group names (`fine_bg_0`, `fine_bg_1`) describe which buffer is read, not which "frame" it is. Self-documenting.

---

## Part D: Remove Unsafe Blocks

### Block 1: tick() resync copy

**Current:**
```rust
let (src, dst) = region.ping_pong_buffers();
let src = src as *const wgpu::Buffer;
let dst = dst as *const wgpu::Buffer;
unsafe { encoder.copy_buffer_to_buffer(&*src, 0, &*dst, 0, region.buffer_bytes()); }
```

**Fix:** With the explicit role design, the resync is eliminated entirely — there's no parity to resync. But if we keep a simpler version for pause/resume, access buffers by index:

```rust
let bytes = region.buffer_bytes();
let (src_idx, dst_idx) = (region.current, 1 - region.current);
// Borrow bufs array elements separately:
encoder.copy_buffer_to_buffer(
    &region.bufs[src_idx], 0,
    &region.bufs[dst_idx], 0,
    bytes,
);
```

This works because `bufs[0]` and `bufs[1]` are separate elements of an array — the borrow checker allows simultaneous immutable borrows of different indices.

### Block 2: set_paused() copy

**Current:**
```rust
let src = r.current_visible_buffer() as *const wgpu::Buffer;
let dst = r.previous_visible_buffer() as *const wgpu::Buffer;
unsafe { encoder.copy_buffer_to_buffer(&*src, 0, &*dst, 0, size); }
```

**Fix:** Same array indexing approach:
```rust
let bytes = r.buffer_bytes();
encoder.copy_buffer_to_buffer(
    &r.bufs[r.current], 0,
    &r.bufs[1 - r.current], 0,
    bytes,
);
```

---

## Part E: Eliminate the Resync Mechanism

With explicit buffer roles, the resync is unnecessary:

**Current tick() flow:**
```
1. For each region: if parity mismatch → copy buffer + resync frame
2. Clear inward grid
3. Boundary extract (uses sim_frame parity)
4. Fine compute (uses region.frame parity)
5. Swap regions
```

**New tick() flow:**
```
1. Clear inward grid
2. Boundary extract (uses base_is_a flag)
3. Fine compute (uses region.current index)
4. Swap regions
```

Step 1 is gone. No parity check, no copy, no resync. The system is always in a consistent state because buffer roles are explicit.

**Pause/resume:** When a region unpauses, both buffers may contain different data (stale from before pause). We copy current → write to ensure consistency. This is a one-time operation on unpause, not a per-frame check:

```rust
pub fn unpause_region(&mut self, encoder: &mut CommandEncoder, id: u32) {
    if let Some(r) = self.regions.iter_mut().find(|r| r.id == id) {
        r.paused = false;
        // Ensure write buffer matches read buffer
        encoder.copy_buffer_to_buffer(
            &r.bufs[r.current], 0,
            &r.bufs[1 - r.current], 0,
            r.buffer_bytes(),
        );
    }
}
```

---

## Part F: Variable Tick Rate Support

With parity eliminated, multi-step ticking becomes straightforward:

```rust
pub fn tick_n_steps(
    &mut self,
    device: &Device,
    queue: &Queue,
    steps: u32,
    base_is_a: bool,
) {
    for _ in 0..steps {
        let mut encoder = device.create_command_encoder(&Default::default());

        // Boundary extract (always uses same base buffer — base doesn't change during sub-ticks)
        self.clear_inward_grid(&mut encoder);
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_boundary_extract(&mut encoder, i, base_is_a);
        }

        // Fine compute
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_fine_compute(&mut encoder, i);
        }

        // Submit this step — ensures storage buffer writes are visible to next step
        queue.submit([encoder.finish()]);

        // Swap after submit
        for region in &mut self.regions {
            if !region.paused { region.swap(); }
        }
    }
}
```

**Why this works now:**
1. No parity to drift — `region.current` toggles correctly after each step
2. Each step gets its own encoder + submit — GPU synchronization guaranteed
3. Base buffer reference doesn't change during sub-ticks (base sim hasn't ticked yet)
4. No resync needed — state is always consistent

**Integration with the render pipeline** (requires Solution 1's decoupled architecture):
```
1. snapshot_previous()     [own encoder, submit]
2. hires.tick_n_steps(N)   [N encoders, N submits]
3. sim.tick()              [own encoder]
4. hires.copy_to_output()  [same encoder as sim]
5. render()                [same encoder as sim]
6. submit + present
```

---

## Migration Steps

1. **Replace `frame: u32` with `bufs: [Buffer; 2]` + `current: usize`** in HiResRegion
   - Update `new()`, `swap()`, `read_buf()`, `write_buf()`
   - Remove `resync_frame()`, `ping_pong_buffers()`
   - Remove `frame` field entirely

2. **Remove unsafe blocks** in dispatch.rs
   - Use array indexing instead of raw pointer casts
   - Verify borrow checker accepts `&bufs[0]` and `&bufs[1]` simultaneously

3. **Replace parity-based bind group selection**
   - Rename `bnd_bg_even`/`bnd_bg_odd` → `bnd_bg_a`/`bnd_bg_b` (base buffer variant)
   - Rename `fine_bg_even`/`fine_bg_odd` → `fine_bg_0`/`fine_bg_1` (region buffer variant)
   - Pass `base_is_a: bool` to tick() instead of `sim_frame: u32`

4. **Remove resync mechanism** from tick()
   - Remove the parity check + copy + resync block
   - Add explicit copy in `unpause_region()` only

5. **Remove `tick_multiplier` stub** from HiResRegion
   - The field is unused; remove it to avoid confusion
   - Variable tick rate will be re-implemented properly using `tick_n_steps()`

Each step compiles and runs independently. Test visual output matches at each step.

---

## Verification

After migration:
- `unsafe` keyword: 0 occurrences in dispatch.rs
- `frame` field: removed from HiResRegion
- `resync_frame()`: removed
- Pause/resume: works without parity drift
- New region creation: works without frame alignment
- Visual output: identical to current behavior (same simulation logic, just cleaner buffer management)
