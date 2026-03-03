use bytemuck::bytes_of;
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;

/// Uniform buffer layout — must match compute.wgsl `Uniforms` struct.
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct ComputeUniforms {
    pub screen_cols:   u32,
    pub screen_rows:   u32,
    pub padded_rows:   u32,
    pub words_per_row: u32,
    pub cell_px:       u32,
    pub canvas_width:  u32,
    pub canvas_height: u32,
    pub pad:           u32,
}

impl ComputeUniforms {
    pub fn from_grid(grid: &Grid) -> Self {
        ComputeUniforms {
            screen_cols:   grid.screen_cols,
            screen_rows:   grid.screen_rows,
            padded_rows:   grid.padded_rows,
            words_per_row: grid.words_per_row,
            cell_px:       grid.cell_px,
            canvas_width:  grid.canvas_width,
            canvas_height: grid.canvas_height,
            pad:           0,
        }
    }
}

pub struct Simulation {
    pub buf_a:        wgpu::Buffer,
    pub buf_b:        wgpu::Buffer,
    bind_group_a:     wgpu::BindGroup,  // a=read, b=write
    bind_group_b:     wgpu::BindGroup,  // b=read, a=write
    pipeline:         wgpu::ComputePipeline,
    pub uniform_buf:  wgpu::Buffer,
    pub frame:        u32,
}

impl Simulation {
    pub fn new(device: &wgpu::Device, queue: &wgpu::Queue, grid: &Grid) -> Self {
        let uniform_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label:    Some("sim_uniforms"),
            contents: bytes_of(&ComputeUniforms::from_grid(grid)),
            usage:    wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let (buf_a, buf_b) = make_cell_buffers(device, queue, grid);

        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label:  Some("compute"),
            source: wgpu::ShaderSource::Wgsl(shaders::COMPUTE.into()),
        });

        let bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label:   Some("sim_bgl"),
            entries: &[
                bgl_entry(0, wgpu::BufferBindingType::Uniform,            false),
                bgl_entry(1, wgpu::BufferBindingType::Storage { read_only: true  }, false),
                bgl_entry(2, wgpu::BufferBindingType::Storage { read_only: false }, false),
            ],
        });

        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label:                Some("sim_layout"),
            bind_group_layouts:   &[&bgl],
            push_constant_ranges: &[],
        });

        let pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
            label:       Some("sim_pipeline"),
            layout:      Some(&layout),
            module:      &shader,
            entry_point: "main",
            compilation_options: wgpu::PipelineCompilationOptions::default(),
            cache:       None,
        });

        let bind_group_a = make_bind_group(device, &bgl, &uniform_buf, &buf_a, &buf_b, "bg_a");
        let bind_group_b = make_bind_group(device, &bgl, &uniform_buf, &buf_b, &buf_a, "bg_b");

        Simulation { buf_a, buf_b, bind_group_a, bind_group_b, pipeline, uniform_buf, frame: 0 }
    }

    /// Advances simulation by one generation using the provided command encoder.
    pub fn tick(&mut self, encoder: &mut wgpu::CommandEncoder, grid: &Grid) {
        let wg_x = grid.words_per_row.div_ceil(8);
        let wg_y = grid.padded_rows.div_ceil(8);

        let bg = self.next_compute_bind_group();

        let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
            label:              Some("gol_tick"),
            timestamp_writes:   None,
        });
        pass.set_pipeline(&self.pipeline);
        pass.set_bind_group(0, bg, &[]);
        pass.dispatch_workgroups(wg_x, wg_y, 1);
        drop(pass);

        self.frame += 1;
    }

    /// Rebuilds cell buffers for a new grid size, preserving the pipeline.
    pub fn resize(&mut self, device: &wgpu::Device, queue: &wgpu::Queue, grid: &Grid) {
        let bgl = self.pipeline.get_bind_group_layout(0);
        queue.write_buffer(&self.uniform_buf, 0, bytes_of(&ComputeUniforms::from_grid(grid)));
        let (buf_a, buf_b) = make_cell_buffers(device, queue, grid);
        self.bind_group_a = make_bind_group(device, &bgl, &self.uniform_buf, &buf_a, &buf_b, "bg_a");
        self.bind_group_b = make_bind_group(device, &bgl, &self.uniform_buf, &buf_b, &buf_a, "bg_b");
        self.buf_a = buf_a;
        self.buf_b = buf_b;
        self.frame = 0;
    }

    pub fn current_visible_buffer(&self) -> &wgpu::Buffer {
        if self.current_visible_is_a() { &self.buf_a } else { &self.buf_b }
    }

    pub fn next_compute_bind_group(&self) -> &wgpu::BindGroup {
        if self.current_visible_is_a() { &self.bind_group_a } else { &self.bind_group_b }
    }

    pub fn current_visible_is_a(&self) -> bool {
        self.frame & 1 == 0
    }
}

// ── helpers ──────────────────────────────────────────────────────────────────

fn make_cell_buffers(device: &wgpu::Device, queue: &wgpu::Queue, grid: &Grid)
    -> (wgpu::Buffer, wgpu::Buffer)
{
    let bytes = grid.buffer_bytes() as usize;
    let mut rng_state: u32 = 0xdeadbeef;
    let data: Vec<u32> = (0..grid.total_words())
        .map(|_| { rng_state = lcg(rng_state); rng_state })
        .collect();

    let usage = wgpu::BufferUsages::STORAGE
        | wgpu::BufferUsages::COPY_DST
        | wgpu::BufferUsages::COPY_SRC;

    let buf_a = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label:    Some("cells_a"),
        contents: bytemuck::cast_slice(&data),
        usage,
    });
    // buf_b starts zeroed; simulation will evolve from buf_a on frame 0.
    let buf_b = device.create_buffer(&wgpu::BufferDescriptor {
        label:              Some("cells_b"),
        size:               bytes as u64,
        usage,
        mapped_at_creation: false,
    });
    let _ = queue; // queue available for future use
    (buf_a, buf_b)
}

fn make_bind_group(
    device:      &wgpu::Device,
    bgl:         &wgpu::BindGroupLayout,
    uniform_buf: &wgpu::Buffer,
    read_buf:    &wgpu::Buffer,
    write_buf:   &wgpu::Buffer,
    label:       &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label:   Some(label),
        layout:  bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: uniform_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: read_buf.as_entire_binding()    },
            wgpu::BindGroupEntry { binding: 2, resource: write_buf.as_entire_binding()   },
        ],
    })
}

fn bgl_entry(binding: u32, ty: wgpu::BufferBindingType, has_dynamic_offset: bool)
    -> wgpu::BindGroupLayoutEntry
{
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::COMPUTE,
        ty: wgpu::BindingType::Buffer { ty, has_dynamic_offset, min_binding_size: None },
        count: None,
    }
}

/// Simple LCG for deterministic random initialization.
fn lcg(s: u32) -> u32 {
    s.wrapping_mul(1664525).wrapping_add(1013904223)
}
