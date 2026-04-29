use bytemuck::bytes_of;
use game_of_life_core::World;
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;

/// Uniform buffer layout — must match compute.wgsl `Uniforms` struct.
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct ComputeUniforms {
    pub world_cols: u32,
    pub world_rows: u32,
    pub padded_rows: u32,
    pub words_per_row: u32,
    pub cell_px: u32,
    pub canvas_width: u32,
    pub canvas_height: u32,
    pub pad: u32,
}

impl ComputeUniforms {
    pub fn from_grid(grid: &Grid) -> Self {
        ComputeUniforms {
            world_cols: grid.world_cols,
            world_rows: grid.world_rows,
            padded_rows: grid.padded_rows,
            words_per_row: grid.words_per_row,
            cell_px: grid.cell_px,
            canvas_width: grid.canvas_width,
            canvas_height: grid.canvas_height,
            pad: 0,
        }
    }
}

pub struct Simulation {
    pub buf_a: wgpu::Buffer,
    pub buf_b: wgpu::Buffer,
    // `frozen_buf`, `bgl`, `uniform_buf` back live bind groups (which hold
    // their GPU handles).  After the world-decouple, resize no longer
    // rebuilds bind groups, so these aren't read directly from Rust —
    // the dead_code allow keeps them alive for ownership.
    #[allow(dead_code)]
    pub frozen_buf: wgpu::Buffer,
    bind_group_a: wgpu::BindGroup, // a=read, b=write
    bind_group_b: wgpu::BindGroup, // b=read, a=write
    pipeline: wgpu::ComputePipeline,
    #[allow(dead_code)]
    bgl: wgpu::BindGroupLayout,
    #[allow(dead_code)]
    pub uniform_buf: wgpu::Buffer,
    pub frame: u32,
    /// Pending cell edits: each entry is a (word_index, xor_mask) pair.
    ///
    /// Between simulation ticks, user clicks accumulate XOR masks per word.
    /// Before the next `tick()`, these edits are flushed to the current
    /// visible GPU buffer via the XOR shader.
    ///
    /// This avoids GPU→CPU readback entirely: XOR is self-inverse, so
    /// double-clicking the same cell toggles it back regardless of the
    /// underlying state.
    ///
    /// Stored as a Vec rather than HashMap because the typical edit count
    /// between ticks is tiny (1-5 clicks at ~1.9 tps).
    pending_edits: Vec<(u32, u32)>,
    /// Pending pattern-stamp edits: each entry is a (word_index, set_mask)
    /// pair, applied via OR.  Used by the auto-reseed loop and any future
    /// "place this pattern here" feature.  OR is idempotent — stamping
    /// over an already-alive cell is a no-op, which is the right
    /// semantic for "set, don't toggle".
    pending_set_edits: Vec<(u32, u32)>,
}

impl Simulation {
    pub fn new(
        device: &wgpu::Device,
        _queue: &wgpu::Queue,
        grid: &Grid,
        world: &World,
    ) -> Self {
        let uniform_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("sim_uniforms"),
            contents: bytes_of(&ComputeUniforms::from_grid(grid)),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let (buf_a, buf_b) = make_cell_buffers(device, world);

        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("compute"),
            source: wgpu::ShaderSource::Wgsl(shaders::COMPUTE.into()),
        });

        let frozen_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("frozen_cells"),
            size: grid.buffer_bytes(),
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        let bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("sim_bgl"),
            entries: &[
                bgl_entry(0, wgpu::BufferBindingType::Uniform, false),
                bgl_entry(1, wgpu::BufferBindingType::Storage { read_only: true }, false),
                bgl_entry(2, wgpu::BufferBindingType::Storage { read_only: false }, false),
                bgl_entry(3, wgpu::BufferBindingType::Storage { read_only: true }, false),
            ],
        });

        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("sim_layout"),
            bind_group_layouts: &[&bgl],
            push_constant_ranges: &[],
        });

        let pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
            label: Some("sim_pipeline"),
            layout: Some(&layout),
            module: &shader,
            entry_point: "main",
            compilation_options: wgpu::PipelineCompilationOptions::default(),
            cache: None,
        });

        let bind_group_a = make_bind_group(
            device, &bgl, &uniform_buf, &buf_a, &buf_b, &frozen_buf, "bg_a",
        );
        let bind_group_b = make_bind_group(
            device, &bgl, &uniform_buf, &buf_b, &buf_a, &frozen_buf, "bg_b",
        );

        Simulation {
            buf_a,
            buf_b,
            frozen_buf,
            bind_group_a,
            bind_group_b,
            pipeline,
            bgl,
            uniform_buf,
            frame: 0,
            pending_edits: Vec::new(),
            pending_set_edits: Vec::new(),
        }
    }

    /// Advances simulation by one generation using the provided command encoder.
    pub fn tick(&mut self, encoder: &mut wgpu::CommandEncoder, grid: &Grid) {
        let wg_x = grid.words_per_row.div_ceil(8);
        let wg_y = grid.padded_rows.div_ceil(8);

        let bg = self.next_compute_bind_group();

        let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
            label: Some("gol_tick"),
            timestamp_writes: None,
        });
        pass.set_pipeline(&self.pipeline);
        pass.set_bind_group(0, bg, &[]);
        pass.dispatch_workgroups(wg_x, wg_y, 1);
        drop(pass);

        self.frame += 1;
    }

    /// Overwrite the current visible GPU buffer with the World's bitmap.
    /// Used after a stamp operation to push CPU-side world changes to the
    /// GPU.  Both `world.buffer().len()` and the GPU buffer size must match
    /// `grid.total_words()` — they do, because the World was the source of
    /// the GPU layout at construction.
    ///
    /// Currently unused — Phase 3's auto-reseed loop is the first consumer.
    #[allow(dead_code)]
    pub fn sync_world_to_visible(&self, queue: &wgpu::Queue, world: &World) {
        let target = self.current_visible_buffer();
        queue.write_buffer(target, 0, bytemuck::cast_slice(world.buffer()));
    }

    /// Queue a cell toggle.  `cx` and `cy` must be pre-wrapped into
    /// `[0, world_cols) × [0, world_rows)` by the caller.
    ///
    /// The edit is stored as an XOR mask and flushed to the GPU before the
    /// next simulation tick.  If the same cell is toggled twice before a
    /// tick, the masks cancel out (XOR is self-inverse) and the cell reverts.
    pub fn queue_toggle(&mut self, grid: &Grid, cx: u32, cy: u32) {
        let (word_idx, bit_off) = grid.cell_address(cx, cy);
        let mask = 1u32 << bit_off;

        // Merge with an existing edit for the same word if present.
        for entry in &mut self.pending_edits {
            if entry.0 == word_idx {
                entry.1 ^= mask;
                // If the net edit for this word is zero, remove it entirely.
                if entry.1 == 0 {
                    // Swap-remove is fine; order doesn't matter.
                    let idx = self
                        .pending_edits
                        .iter()
                        .position(|e| e.0 == word_idx)
                        .unwrap();
                    self.pending_edits.swap_remove(idx);
                }
                return;
            }
        }
        self.pending_edits.push((word_idx, mask));
    }

    /// Queue a SET edit at `(cx, cy)`.  Idempotent — setting an
    /// already-alive cell is a no-op.  Used by `queue_pattern_stamp`
    /// for live Methuselah injection during auto-reseed; could also be
    /// used by future UI features that want to "paint" cells (vs the
    /// existing toggle semantics).
    pub fn queue_set(&mut self, grid: &Grid, cx: u32, cy: u32) {
        let (word_idx, bit_off) = grid.cell_address(cx, cy);
        let mask = 1u32 << bit_off;
        for entry in &mut self.pending_set_edits {
            if entry.0 == word_idx {
                entry.1 |= mask;
                return;
            }
        }
        self.pending_set_edits.push((word_idx, mask));
    }

    /// Queue a pattern stamp by translating an iterator of world-cell
    /// coordinates into accumulated `(word_idx, set_mask)` pairs.  The
    /// caller is expected to have already applied transform + origin
    /// offset + toroidal wrap (typically via
    /// `game_of_life_core::seeding::stamp_cells`).
    pub fn queue_pattern_stamp<I: IntoIterator<Item = (u32, u32)>>(
        &mut self,
        grid: &Grid,
        cells: I,
    ) {
        for (cx, cy) in cells {
            self.queue_set(grid, cx, cy);
        }
    }

    /// Write all pending edits to the current visible GPU buffer.
    ///
    /// Two parallel queues are flushed:
    /// 1. `pending_edits` (XOR-toggle, used by `queue_toggle`) → XOR_EDIT_SHADER
    /// 2. `pending_set_edits` (OR-set, used by `queue_set` / `queue_pattern_stamp`) → OR_EDIT_SHADER
    ///
    /// Each queue dispatches a tiny compute shader that applies its
    /// per-word atomic op to the current visible buffer.  This avoids
    /// GPU→CPU readback entirely — XOR is self-inverse and OR is
    /// idempotent, so both ops are correct given only the new mask
    /// (no need to know the current state).
    pub fn flush_edits(&mut self, device: &wgpu::Device, queue: &wgpu::Queue) {
        if !self.pending_edits.is_empty() {
            dispatch_edit_shader(
                device,
                queue,
                self.current_visible_buffer(),
                XOR_EDIT_SHADER,
                "xor",
                &self.pending_edits,
            );
            self.pending_edits.clear();
        }
        if !self.pending_set_edits.is_empty() {
            dispatch_edit_shader(
                device,
                queue,
                self.current_visible_buffer(),
                OR_EDIT_SHADER,
                "or",
                &self.pending_set_edits,
            );
            self.pending_set_edits.clear();
        }
    }

    pub fn current_visible_buffer(&self) -> &wgpu::Buffer {
        if self.current_visible_is_a() {
            &self.buf_a
        } else {
            &self.buf_b
        }
    }

    pub fn next_compute_bind_group(&self) -> &wgpu::BindGroup {
        if self.current_visible_is_a() {
            &self.bind_group_a
        } else {
            &self.bind_group_b
        }
    }

    pub fn current_visible_is_a(&self) -> bool {
        self.frame & 1 == 0
    }

    pub fn has_pending_edits(&self) -> bool {
        !self.pending_edits.is_empty()
    }

    pub fn has_pending_set_edits(&self) -> bool {
        !self.pending_set_edits.is_empty()
    }
}

// ── helpers ──────────────────────────────────────────────────────────────────

fn make_cell_buffers(
    device: &wgpu::Device,
    world: &World,
) -> (wgpu::Buffer, wgpu::Buffer) {
    let bytes = world.buffer_bytes();

    let usage =
        wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::COPY_SRC;

    // buf_a is initialised from the World's bitmap (the canonical seed).
    // The LCG-fill that used to happen here moved into World::from_seed
    // so the same bytes can serve both CPU reference (Phase 2) and GPU.
    let buf_a = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some("cells_a"),
        contents: bytemuck::cast_slice(world.buffer()),
        usage,
    });
    // buf_b starts zeroed; simulation will evolve from buf_a on frame 0.
    let buf_b = device.create_buffer(&wgpu::BufferDescriptor {
        label: Some("cells_b"),
        size: bytes,
        usage,
        mapped_at_creation: false,
    });
    (buf_a, buf_b)
}

fn make_bind_group(
    device: &wgpu::Device,
    bgl: &wgpu::BindGroupLayout,
    uniform_buf: &wgpu::Buffer,
    read_buf: &wgpu::Buffer,
    write_buf: &wgpu::Buffer,
    frozen_buf: &wgpu::Buffer,
    label: &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: Some(label),
        layout: bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: uniform_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: read_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 2, resource: write_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 3, resource: frozen_buf.as_entire_binding() },
        ],
    })
}

fn bgl_entry(
    binding: u32,
    ty: wgpu::BufferBindingType,
    has_dynamic_offset: bool,
) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::COMPUTE,
        ty: wgpu::BindingType::Buffer {
            ty,
            has_dynamic_offset,
            min_binding_size: None,
        },
        count: None,
    }
}

/// Build, dispatch, and submit a one-shot compute pipeline that
/// applies a list of `(word_idx, mask)` edits to `target_buf` via the
/// atomic op encoded in `shader_src` (`atomicXor` for the toggle queue,
/// `atomicOr` for the stamp queue).  All three resources (uniform meta,
/// read-only edits buffer, read-write cells buffer) match a fixed bind
/// group layout that both shaders share.
fn dispatch_edit_shader(
    device: &wgpu::Device,
    queue: &wgpu::Queue,
    target_buf: &wgpu::Buffer,
    shader_src: &str,
    label: &str,
    edits: &[(u32, u32)],
) {
    let edit_data: Vec<u32> = edits
        .iter()
        .flat_map(|&(word_idx, mask)| [word_idx, mask])
        .collect();
    let edit_count = edits.len() as u32;

    let edit_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some(&format!("{label}_cell_edits")),
        contents: bytemuck::cast_slice(&edit_data),
        usage: wgpu::BufferUsages::STORAGE,
    });

    let count_data: [u32; 4] = [edit_count, 0, 0, 0];
    let count_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some(&format!("{label}_edit_count")),
        contents: bytemuck::cast_slice(&count_data),
        usage: wgpu::BufferUsages::UNIFORM,
    });

    let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
        label: Some(&format!("{label}_edit")),
        source: wgpu::ShaderSource::Wgsl(shader_src.into()),
    });

    let bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some(&format!("{label}_edit_bgl")),
        entries: &[
            bgl_entry(0, wgpu::BufferBindingType::Uniform, false),
            bgl_entry(1, wgpu::BufferBindingType::Storage { read_only: true }, false),
            bgl_entry(2, wgpu::BufferBindingType::Storage { read_only: false }, false),
        ],
    });

    let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some(&format!("{label}_edit_layout")),
        bind_group_layouts: &[&bgl],
        push_constant_ranges: &[],
    });

    let pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some(&format!("{label}_edit_pipeline")),
        layout: Some(&layout),
        module: &shader,
        entry_point: "main",
        compilation_options: wgpu::PipelineCompilationOptions::default(),
        cache: None,
    });

    let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: Some(&format!("{label}_edit_bg")),
        layout: &bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: count_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: edit_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 2, resource: target_buf.as_entire_binding() },
        ],
    });

    let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
        label: Some(&format!("{label}_edit_enc")),
    });
    {
        let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
            label: Some(&format!("{label}_edit_pass")),
            timestamp_writes: None,
        });
        pass.set_pipeline(&pipeline);
        pass.set_bind_group(0, &bind_group, &[]);
        // One thread per edit, rounded up to workgroup size 64.
        pass.dispatch_workgroups(edit_count.div_ceil(64), 1, 1);
    }
    queue.submit([encoder.finish()]);
}

/// Tiny compute shader that applies XOR edits to the cell buffer in-place.
/// Used by the toggle path (`queue_toggle`) — XOR is self-inverse, so
/// double-clicking the same cell reverts it regardless of GPU state.
const XOR_EDIT_SHADER: &str = r#"
struct EditCount { count: u32, _pad0: u32, _pad1: u32, _pad2: u32 }

@group(0) @binding(0) var<uniform>             edit_meta: EditCount;
@group(0) @binding(1) var<storage, read>       edits:     array<vec2<u32>>;
@group(0) @binding(2) var<storage, read_write> cells:     array<atomic<u32>>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if idx >= edit_meta.count { return; }
    atomicXor(&cells[edits[idx].x], edits[idx].y);
}
"#;

/// Tiny compute shader that applies OR (set-bit) edits to the cell
/// buffer in-place.  Used by the pattern-stamp path (`queue_set`,
/// `queue_pattern_stamp`) — OR is idempotent, which is the right
/// semantic for "draw this pattern" (you don't want to toggle off
/// cells that happen to already be alive).
const OR_EDIT_SHADER: &str = r#"
struct EditCount { count: u32, _pad0: u32, _pad1: u32, _pad2: u32 }

@group(0) @binding(0) var<uniform>             edit_meta: EditCount;
@group(0) @binding(1) var<storage, read>       edits:     array<vec2<u32>>;
@group(0) @binding(2) var<storage, read_write> cells:     array<atomic<u32>>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if idx >= edit_meta.count { return; }
    atomicOr(&cells[edits[idx].x], edits[idx].y);
}
"#;
