use bytemuck::bytes_of;
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;
use super::boundary::BoundaryState;
use super::mask::RegionMask;
use super::region::HiResRegion;

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
struct BoundaryParams {
    region_x1: i32, region_y1: i32, region_x2: i32, region_y2: i32,
    multiplier: u32, base_wpr: u32, fine_wpr: u32, fine_rows: u32,
    ring_size: u32, padded_rows: u32, frozen_vote: u32, _pad: u32,
}

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
struct FineComputeParams {
    cols: u32, rows: u32, wpr: u32, base_w: u32,
    base_h: u32, multiplier: u32, _pad0: u32, _pad1: u32,
}

/// Manages the single hi-res region (Phase 1) and its GPU resources.
pub struct HiResManager {
    pub region: Option<HiResRegion>,
    pub mask: RegionMask,
    pub boundary: Option<BoundaryState>,
    /// Grid-aligned inward buffer (same layout as base grid).
    /// Zeroed when no region is active. Boundary extraction writes
    /// aggregated fine-cell values at region-boundary positions.
    inward_grid_buf: wgpu::Buffer,
    inward_grid_words: u32,
    // Boundary extraction pipeline
    bnd_pipeline: Option<wgpu::ComputePipeline>,
    bnd_bgl: Option<wgpu::BindGroupLayout>,
    bnd_bg_even: Option<wgpu::BindGroup>,
    bnd_bg_odd: Option<wgpu::BindGroup>,
    bnd_params_buf: Option<wgpu::Buffer>,
    // Fine-cell compute pipeline
    fine_pipeline: Option<wgpu::ComputePipeline>,
    fine_bgl: Option<wgpu::BindGroupLayout>,
    fine_bg_even: Option<wgpu::BindGroup>,
    fine_bg_odd: Option<wgpu::BindGroup>,
    fine_params_buf: Option<wgpu::Buffer>,
}

impl HiResManager {
    pub fn new(device: &wgpu::Device, grid: &Grid) -> Self {
        let total = grid.total_words();
        let inward_grid_buf = make_grid_buffer(device, total, "hires_inward_grid");
        HiResManager {
            region: None,
            mask: RegionMask::new(device, grid),
            boundary: None,
            inward_grid_buf,
            inward_grid_words: total,
            bnd_pipeline: None, bnd_bgl: None,
            bnd_bg_even: None, bnd_bg_odd: None, bnd_params_buf: None,
            fine_pipeline: None, fine_bgl: None,
            fine_bg_even: None, fine_bg_odd: None, fine_params_buf: None,
        }
    }

    pub fn set_region(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        grid: &Grid,
        rect: [i32; 4],
        multiplier: u32,
        sim_buf_a: &wgpu::Buffer,
        sim_buf_b: &wgpu::Buffer,
        sim_frame: u32,
    ) {
        let region = HiResRegion::new(device, queue, rect, multiplier, sim_frame);
        let boundary = BoundaryState::new(
            device, region.base_width(), region.base_height(), multiplier,
        );
        self.mask.rebuild(queue, Some(rect));
        ensure_bnd_pipeline(device, &mut self.bnd_pipeline, &mut self.bnd_bgl);
        ensure_fine_pipeline(device, &mut self.fine_pipeline, &mut self.fine_bgl);
        if let Some(ref bgl) = self.bnd_bgl {
            let (p, a, b) = build_bnd_bind_groups(
                device, grid, &region, &boundary,
                sim_buf_a, sim_buf_b, &self.inward_grid_buf, bgl,
            );
            self.bnd_params_buf = Some(p);
            self.bnd_bg_even = Some(a);
            self.bnd_bg_odd = Some(b);
        }
        if let Some(ref bgl) = self.fine_bgl {
            let (p, a, b) = build_fine_bind_groups(device, &region, &boundary, bgl);
            self.fine_params_buf = Some(p);
            self.fine_bg_even = Some(a);
            self.fine_bg_odd = Some(b);
        }
        self.region = Some(region);
        self.boundary = Some(boundary);
    }

    pub fn clear_region(&mut self, queue: &wgpu::Queue) {
        self.region = None;
        self.boundary = None;
        self.bnd_bg_even = None;
        self.bnd_bg_odd = None;
        self.bnd_params_buf = None;
        self.fine_bg_even = None;
        self.fine_bg_odd = None;
        self.fine_params_buf = None;
        self.mask.rebuild(queue, None);
        clear_buffer(queue, &self.inward_grid_buf, self.inward_grid_words);
    }

    pub fn is_active(&self) -> bool { self.region.is_some() }
    pub fn mask_buffer(&self) -> &wgpu::Buffer { self.mask.buffer() }
    pub fn inward_buffer(&self) -> &wgpu::Buffer { &self.inward_grid_buf }

    /// Returns the current visible fine-cell buffer and its byte size, or None.
    pub fn visible_fine_buffer(&self) -> Option<(&wgpu::Buffer, u64)> {
        self.region.as_ref().map(|r| (r.current_visible_buffer(), r.buffer_bytes()))
    }

    /// Returns the previous visible fine-cell buffer and its byte size, or None.
    pub fn previous_fine_buffer(&self) -> Option<(&wgpu::Buffer, u64)> {
        self.region.as_ref().map(|r| (r.previous_visible_buffer(), r.buffer_bytes()))
    }

    /// Returns render metadata for the active region, or None.
    pub fn render_meta(&self) -> Option<([i32; 4], u32, u32, u32)> {
        self.region.as_ref().map(|r| (r.rect, r.multiplier, r.cols, r.words_per_row))
    }

    /// Full hi-res tick: boundary extract → fine-cell compute → swap.
    pub fn tick(
        &mut self,
        encoder: &mut wgpu::CommandEncoder,
        queue: &wgpu::Queue,
        sim_frame: u32,
    ) {
        if self.region.is_none() { return; }
        self.dispatch_boundary_extract(encoder, queue, sim_frame);
        self.dispatch_fine_compute(encoder, queue, sim_frame);
        if let Some(ref mut region) = self.region {
            region.swap();
        }
    }

    fn dispatch_boundary_extract(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        queue: &wgpu::Queue,
        sim_frame: u32,
    ) {
        let Some(ref boundary) = self.boundary else { return; };
        let Some(ref pipeline) = self.bnd_pipeline else { return; };
        let bg = if sim_frame & 1 == 0 {
            self.bnd_bg_even.as_ref()
        } else {
            self.bnd_bg_odd.as_ref()
        };
        let Some(bg) = bg else { return; };

        boundary.clear(queue);
        clear_buffer(queue, &self.inward_grid_buf, self.inward_grid_words);
        let wg = boundary.layout.inward_count.div_ceil(64);
        let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
            label: Some("boundary_extract"),
            timestamp_writes: None,
        });
        pass.set_pipeline(pipeline);
        pass.set_bind_group(0, bg, &[]);
        pass.dispatch_workgroups(wg, 1, 1);
    }

    fn dispatch_fine_compute(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        queue: &wgpu::Queue,
        sim_frame: u32,
    ) {
        let Some(ref region) = self.region else { return; };
        let Some(ref pipeline) = self.fine_pipeline else { return; };
        let bg = if sim_frame & 1 == 0 {
            self.fine_bg_even.as_ref()
        } else {
            self.fine_bg_odd.as_ref()
        };
        let Some(bg) = bg else { return; };

        let dst_buf = if sim_frame & 1 == 0 { &region.buf_b } else { &region.buf_a };
        clear_buffer(queue, dst_buf, region.total_words());

        let wg_x = region.cols.div_ceil(8);
        let wg_y = region.rows.div_ceil(8);
        let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
            label: Some("hires_compute"),
            timestamp_writes: None,
        });
        pass.set_pipeline(pipeline);
        pass.set_bind_group(0, bg, &[]);
        pass.dispatch_workgroups(wg_x, wg_y, 1);
    }

    pub fn resize_mask(&mut self, device: &wgpu::Device, queue: &wgpu::Queue, grid: &Grid) {
        self.mask.resize(device, queue, grid);
        if let Some(ref region) = self.region {
            self.mask.rebuild(queue, Some(region.rect));
        }
        let total = grid.total_words();
        if total != self.inward_grid_words {
            self.inward_grid_buf = make_grid_buffer(device, total, "hires_inward_grid");
            self.inward_grid_words = total;
        }
    }

    pub fn rebuild_boundary_for_resize(
        &mut self,
        device: &wgpu::Device,
        grid: &Grid,
        sim_buf_a: &wgpu::Buffer,
        sim_buf_b: &wgpu::Buffer,
    ) {
        ensure_bnd_pipeline(device, &mut self.bnd_pipeline, &mut self.bnd_bgl);
        let bgl = match self.bnd_bgl {
            Some(ref bgl) => bgl,
            None => return,
        };
        if let (Some(ref region), Some(ref boundary)) = (&self.region, &self.boundary) {
            let (p, a, b) = build_bnd_bind_groups(
                device, grid, region, boundary,
                sim_buf_a, sim_buf_b, &self.inward_grid_buf, bgl,
            );
            self.bnd_params_buf = Some(p);
            self.bnd_bg_even = Some(a);
            self.bnd_bg_odd = Some(b);
        }
    }
}

// ── Helpers ─────────────────────────────────────────────────────────────────

fn make_grid_buffer(device: &wgpu::Device, total_words: u32, label: &str) -> wgpu::Buffer {
    device.create_buffer(&wgpu::BufferDescriptor {
        label: Some(label),
        size: (total_words.max(1) * 4) as u64,
        usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
        mapped_at_creation: false,
    })
}

fn clear_buffer(queue: &wgpu::Queue, buf: &wgpu::Buffer, words: u32) {
    let zeros = vec![0u32; words.max(1) as usize];
    queue.write_buffer(buf, 0, bytemuck::cast_slice(&zeros));
}

// ── Boundary extraction pipeline ────────────────────────────────────────────

fn ensure_bnd_pipeline(
    device: &wgpu::Device,
    pipeline: &mut Option<wgpu::ComputePipeline>,
    bgl: &mut Option<wgpu::BindGroupLayout>,
) {
    if pipeline.is_some() { return; }
    let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
        label: Some("boundary_extract_shader"),
        source: wgpu::ShaderSource::Wgsl(shaders::BOUNDARY_EXTRACT.into()),
    });
    let new_bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("boundary_extract_bgl"),
        entries: &[
            bgl_compute(0, wgpu::BufferBindingType::Uniform),
            bgl_compute(1, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(2, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(3, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(4, wgpu::BufferBindingType::Storage { read_only: false }),
            bgl_compute(5, wgpu::BufferBindingType::Storage { read_only: false }),
            bgl_compute(6, wgpu::BufferBindingType::Storage { read_only: false }),
        ],
    });
    let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some("boundary_extract_layout"),
        bind_group_layouts: &[&new_bgl],
        push_constant_ranges: &[],
    });
    *pipeline = Some(device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some("boundary_extract_pipeline"),
        layout: Some(&layout),
        module: &shader,
        entry_point: "main",
        compilation_options: wgpu::PipelineCompilationOptions::default(),
        cache: None,
    }));
    *bgl = Some(new_bgl);
}

fn build_bnd_bind_groups(
    device: &wgpu::Device,
    grid: &Grid,
    region: &HiResRegion,
    boundary: &BoundaryState,
    sim_buf_a: &wgpu::Buffer,
    sim_buf_b: &wgpu::Buffer,
    inward_grid_buf: &wgpu::Buffer,
    bgl: &wgpu::BindGroupLayout,
) -> (wgpu::Buffer, wgpu::BindGroup, wgpu::BindGroup) {
    let base_w = region.base_width();
    let base_h = region.base_height();

    let params_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some("boundary_params"),
        contents: bytes_of(&BoundaryParams {
            region_x1: region.rect[0], region_y1: region.rect[1],
            region_x2: region.rect[2], region_y2: region.rect[3],
            multiplier: region.multiplier,
            base_wpr: grid.words_per_row,
            fine_wpr: region.words_per_row,
            fine_rows: region.rows,
            ring_size: 2 * (base_w + base_h) + 4,
            padded_rows: grid.padded_rows,
            frozen_vote: 0, _pad: 0,
        }),
        usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
    });

    let mk = |base: &wgpu::Buffer, fine: &wgpu::Buffer, lbl| {
        device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some(lbl), layout: bgl,
            entries: &[
                wgpu::BindGroupEntry { binding: 0, resource: params_buf.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 1, resource: base.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 2, resource: fine.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 3, resource: boundary.frozen_placeholder_buf.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 4, resource: boundary.outward_buf.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 5, resource: boundary.inward_buf.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 6, resource: inward_grid_buf.as_entire_binding() },
            ],
        })
    };

    let bg_even = mk(sim_buf_a, &region.buf_a, "bnd_bg_even");
    let bg_odd  = mk(sim_buf_b, &region.buf_b, "bnd_bg_odd");
    (params_buf, bg_even, bg_odd)
}

// ── Fine-cell compute pipeline ──────────────────────────────────────────────

fn ensure_fine_pipeline(
    device: &wgpu::Device,
    pipeline: &mut Option<wgpu::ComputePipeline>,
    bgl: &mut Option<wgpu::BindGroupLayout>,
) {
    if pipeline.is_some() { return; }
    let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
        label: Some("hires_compute_shader"),
        source: wgpu::ShaderSource::Wgsl(shaders::HIRES_COMPUTE.into()),
    });
    let new_bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("hires_compute_bgl"),
        entries: &[
            bgl_compute(0, wgpu::BufferBindingType::Uniform),
            bgl_compute(1, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(2, wgpu::BufferBindingType::Storage { read_only: false }),
            bgl_compute(3, wgpu::BufferBindingType::Storage { read_only: true }),
        ],
    });
    let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some("hires_compute_layout"),
        bind_group_layouts: &[&new_bgl],
        push_constant_ranges: &[],
    });
    *pipeline = Some(device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some("hires_compute_pipeline"),
        layout: Some(&layout),
        module: &shader,
        entry_point: "main",
        compilation_options: wgpu::PipelineCompilationOptions::default(),
        cache: None,
    }));
    *bgl = Some(new_bgl);
}

fn build_fine_bind_groups(
    device: &wgpu::Device,
    region: &HiResRegion,
    boundary: &BoundaryState,
    bgl: &wgpu::BindGroupLayout,
) -> (wgpu::Buffer, wgpu::BindGroup, wgpu::BindGroup) {
    let params_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some("hires_compute_params"),
        contents: bytes_of(&FineComputeParams {
            cols: region.cols, rows: region.rows,
            wpr: region.words_per_row,
            base_w: region.base_width(), base_h: region.base_height(),
            multiplier: region.multiplier,
            _pad0: 0, _pad1: 0,
        }),
        usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
    });

    let mk = |src: &wgpu::Buffer, dst: &wgpu::Buffer, lbl| {
        device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some(lbl), layout: bgl,
            entries: &[
                wgpu::BindGroupEntry { binding: 0, resource: params_buf.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 1, resource: src.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 2, resource: dst.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 3, resource: boundary.outward_buf.as_entire_binding() },
            ],
        })
    };

    let bg_even = mk(&region.buf_a, &region.buf_b, "fine_bg_even");
    let bg_odd  = mk(&region.buf_b, &region.buf_a, "fine_bg_odd");
    (params_buf, bg_even, bg_odd)
}

fn bgl_compute(binding: u32, ty: wgpu::BufferBindingType) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::COMPUTE,
        ty: wgpu::BindingType::Buffer { ty, has_dynamic_offset: false, min_binding_size: None },
        count: None,
    }
}
