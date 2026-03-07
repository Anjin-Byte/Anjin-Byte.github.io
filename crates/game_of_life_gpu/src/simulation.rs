use bytemuck::bytes_of;
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;

/// Uniform buffer layout — must match compute.wgsl `Uniforms` struct.
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct ComputeUniforms {
    pub screen_cols: u32,
    pub screen_rows: u32,
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
            screen_cols: grid.screen_cols,
            screen_rows: grid.screen_rows,
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
    pub frozen_buf: wgpu::Buffer,
    bind_group_a: wgpu::BindGroup, // a=read, b=write
    bind_group_b: wgpu::BindGroup, // b=read, a=write
    pipeline: wgpu::ComputePipeline,
    bgl: wgpu::BindGroupLayout,
    pub uniform_buf: wgpu::Buffer,
    pub frame: u32,
    /// Pending cell edits: each entry is a (word_index, xor_mask) pair.
    ///
    /// Between simulation ticks, user clicks accumulate XOR masks per word.
    /// Before the next `tick()`, these edits are flushed to the current
    /// visible GPU buffer via `queue.write_buffer` at pinpoint byte offsets.
    ///
    /// This avoids GPU→CPU readback entirely: we never need to know the
    /// current GPU buffer contents.  XOR is self-inverse, so double-clicking
    /// the same cell toggles it back regardless of the underlying state.
    ///
    /// Stored as a Vec rather than HashMap because the typical edit count
    /// between ticks is tiny (1-5 clicks at ~1.9 tps).
    pending_edits: Vec<(u32, u32)>,
}

impl Simulation {
    pub fn new(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        grid: &Grid,
        mask_buf: &wgpu::Buffer,
        inward_buf: &wgpu::Buffer,
    ) -> Self {
        let uniform_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("sim_uniforms"),
            contents: bytes_of(&ComputeUniforms::from_grid(grid)),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let (buf_a, buf_b) = make_cell_buffers(device, queue, grid);

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
                bgl_entry(4, wgpu::BufferBindingType::Storage { read_only: true }, false),
                bgl_entry(5, wgpu::BufferBindingType::Storage { read_only: true }, false),
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
            device, &bgl, &uniform_buf, &buf_a, &buf_b, mask_buf, inward_buf, &frozen_buf, "bg_a",
        );
        let bind_group_b = make_bind_group(
            device, &bgl, &uniform_buf, &buf_b, &buf_a, mask_buf, inward_buf, &frozen_buf, "bg_b",
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

    /// Rebuilds cell buffers for a new grid size, preserving the pipeline.
    pub fn resize(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        grid: &Grid,
        mask_buf: &wgpu::Buffer,
        inward_buf: &wgpu::Buffer,
    ) {
        queue.write_buffer(
            &self.uniform_buf,
            0,
            bytes_of(&ComputeUniforms::from_grid(grid)),
        );
        let (buf_a, buf_b) = make_cell_buffers(device, queue, grid);
        self.frozen_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("frozen_cells"),
            size: grid.buffer_bytes(),
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        self.bind_group_a = make_bind_group(
            device, &self.bgl, &self.uniform_buf, &buf_a, &buf_b, mask_buf, inward_buf, &self.frozen_buf, "bg_a",
        );
        self.bind_group_b = make_bind_group(
            device, &self.bgl, &self.uniform_buf, &buf_b, &buf_a, mask_buf, inward_buf, &self.frozen_buf, "bg_b",
        );
        self.buf_a = buf_a;
        self.buf_b = buf_b;
        self.frame = 0;
        self.pending_edits.clear();
    }

    /// Rebuild bind groups with updated hires buffers (e.g. after region create/destroy).
    pub fn rebuild_bind_groups(
        &mut self,
        device: &wgpu::Device,
        mask_buf: &wgpu::Buffer,
        inward_buf: &wgpu::Buffer,
    ) {
        self.bind_group_a = make_bind_group(
            device, &self.bgl, &self.uniform_buf, &self.buf_a, &self.buf_b,
            mask_buf, inward_buf, &self.frozen_buf, "bg_a",
        );
        self.bind_group_b = make_bind_group(
            device, &self.bgl, &self.uniform_buf, &self.buf_b, &self.buf_a,
            mask_buf, inward_buf, &self.frozen_buf, "bg_b",
        );
    }

    /// Queue a cell toggle.  `cx` and `cy` must be pre-wrapped into
    /// [0, screen_cols) and [0, screen_rows) by the caller.
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

    /// Write all pending edits to the current visible GPU buffer.
    ///
    /// Each edit is a single-word XOR that gets applied by reading the GPU
    /// buffer's current word, XOR-ing the mask, and writing it back.
    ///
    /// **Important:** WebGPU's `queue.write_buffer` *replaces* bytes — it
    /// doesn't XOR.  To apply an XOR without readback we use a tiny compute
    /// shader dispatch... except that's heavy for 1-5 words.
    ///
    /// Instead, we keep a full CPU-side mirror of the initial seed for buf_a
    /// and track the cumulative XOR per word.  This is the `pending_edits`
    /// approach: we write the already-XOR'd final word value.
    ///
    /// Actually, the simplest correct approach: maintain a full CPU-side
    /// copy of the visible buffer.  On init we have the seed data.  On each
    /// tick, the GPU evolves state and the CPU copy becomes stale — but we
    /// refresh it by running the same LCG... no, the GPU runs GoL not LCG.
    ///
    /// **Final design:** Use a 1-word compute shader that applies XOR in-place.
    /// This avoids readback AND avoids maintaining a CPU mirror.  But that's
    /// overengineered for the edit rate we expect.
    ///
    /// **Pragmatic solution:** Use `queue.write_buffer` with a staging
    /// approach: we maintain a CPU shadow that starts from the seed and
    /// diverges as the GPU evolves.  For the XOR-toggle use case, we accept
    /// that the GPU state is authoritative and edits are "blind XOR" —
    /// the visual result is: if cell was alive → dies; if dead → lives.
    /// This is correct regardless of whether our shadow matches GPU state.
    ///
    /// We achieve this by encoding edits as **XOR patches** applied via a
    /// small compute shader bound to the current visible buffer.
    pub fn flush_edits(&mut self, device: &wgpu::Device, queue: &wgpu::Queue) {
        if self.pending_edits.is_empty() {
            return;
        }

        // Upload the edit list as a storage buffer.
        let edit_data: Vec<u32> = self
            .pending_edits
            .iter()
            .flat_map(|&(word_idx, mask)| [word_idx, mask])
            .collect();
        let edit_count = self.pending_edits.len() as u32;

        let edit_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("cell_edits"),
            contents: bytemuck::cast_slice(&edit_data),
            usage: wgpu::BufferUsages::STORAGE,
        });

        let count_data: [u32; 4] = [edit_count, 0, 0, 0];
        let count_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("edit_count"),
            contents: bytemuck::cast_slice(&count_data),
            usage: wgpu::BufferUsages::UNIFORM,
        });

        let target_buf = self.current_visible_buffer();

        // One-shot pipeline: apply XOR edits to the target buffer.
        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("xor_edit"),
            source: wgpu::ShaderSource::Wgsl(XOR_EDIT_SHADER.into()),
        });

        let bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("xor_edit_bgl"),
            entries: &[
                bgl_entry(0, wgpu::BufferBindingType::Uniform, false),
                bgl_entry(
                    1,
                    wgpu::BufferBindingType::Storage { read_only: true },
                    false,
                ),
                bgl_entry(
                    2,
                    wgpu::BufferBindingType::Storage { read_only: false },
                    false,
                ),
            ],
        });

        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("xor_edit_layout"),
            bind_group_layouts: &[&bgl],
            push_constant_ranges: &[],
        });

        let pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
            label: Some("xor_edit_pipeline"),
            layout: Some(&layout),
            module: &shader,
            entry_point: "main",
            compilation_options: wgpu::PipelineCompilationOptions::default(),
            cache: None,
        });

        let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("xor_edit_bg"),
            layout: &bgl,
            entries: &[
                wgpu::BindGroupEntry {
                    binding: 0,
                    resource: count_buf.as_entire_binding(),
                },
                wgpu::BindGroupEntry {
                    binding: 1,
                    resource: edit_buf.as_entire_binding(),
                },
                wgpu::BindGroupEntry {
                    binding: 2,
                    resource: target_buf.as_entire_binding(),
                },
            ],
        });

        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("xor_edit_enc"),
        });
        {
            let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
                label: Some("xor_edit_pass"),
                timestamp_writes: None,
            });
            pass.set_pipeline(&pipeline);
            pass.set_bind_group(0, &bind_group, &[]);
            // One thread per edit, rounded up to workgroup size 64.
            pass.dispatch_workgroups(edit_count.div_ceil(64), 1, 1);
        }
        queue.submit([encoder.finish()]);

        self.pending_edits.clear();
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
}

// ── helpers ──────────────────────────────────────────────────────────────────

fn make_cell_buffers(
    device: &wgpu::Device,
    queue: &wgpu::Queue,
    grid: &Grid,
) -> (wgpu::Buffer, wgpu::Buffer) {
    let bytes = grid.buffer_bytes() as usize;
    let mut rng_state: u32 = 0xdeadbeef;
    let data: Vec<u32> = (0..grid.total_words())
        .map(|_| {
            rng_state = lcg(rng_state);
            rng_state
        })
        .collect();

    let usage =
        wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::COPY_SRC;

    let buf_a = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some("cells_a"),
        contents: bytemuck::cast_slice(&data),
        usage,
    });
    // buf_b starts zeroed; simulation will evolve from buf_a on frame 0.
    let buf_b = device.create_buffer(&wgpu::BufferDescriptor {
        label: Some("cells_b"),
        size: bytes as u64,
        usage,
        mapped_at_creation: false,
    });
    let _ = queue; // queue available for future use
    (buf_a, buf_b)
}

fn make_bind_group(
    device: &wgpu::Device,
    bgl: &wgpu::BindGroupLayout,
    uniform_buf: &wgpu::Buffer,
    read_buf: &wgpu::Buffer,
    write_buf: &wgpu::Buffer,
    mask_buf: &wgpu::Buffer,
    inward_buf: &wgpu::Buffer,
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
            wgpu::BindGroupEntry { binding: 3, resource: mask_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 4, resource: inward_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 5, resource: frozen_buf.as_entire_binding() },
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

/// Simple LCG for deterministic random initialization.
fn lcg(s: u32) -> u32 {
    s.wrapping_mul(1664525).wrapping_add(1013904223)
}

/// Tiny compute shader that applies XOR edits to the cell buffer in-place.
///
/// Edits are stored as (word_index, xor_mask) pairs in a storage buffer.
/// Each thread handles one edit.  Atomic XOR ensures correctness even if
/// multiple edits target the same word (unlikely but possible with fast
/// clicks on adjacent cells in the same 32-cell word).
const XOR_EDIT_SHADER: &str = r#"
struct EditCount { count: u32, _pad0: u32, _pad1: u32, _pad2: u32 }

@group(0) @binding(0) var<uniform>             meta:  EditCount;
@group(0) @binding(1) var<storage, read>       edits: array<vec2<u32>>;
@group(0) @binding(2) var<storage, read_write> cells: array<atomic<u32>>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if idx >= meta.count { return; }
    let word_idx = edits[idx].x;
    let xor_mask = edits[idx].y;
    // atomicXor is safe even if two edits hit the same word.
    atomicXor(&cells[word_idx], xor_mask);
}
"#;
