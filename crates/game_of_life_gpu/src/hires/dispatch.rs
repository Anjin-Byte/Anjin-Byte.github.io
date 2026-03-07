use bytemuck::bytes_of;
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use super::boundary::BoundaryState;
use super::mask::RegionMask;
use super::pipelines::{ensure_bnd_pipeline, ensure_fine_pipeline};
use super::region::HiResRegion;

pub const MAX_HIRES_REGIONS: usize = 8;

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

/// Per-region GPU resources (bind groups, params buffers, boundary state).
struct RegionGpuState {
    boundary: BoundaryState,
    bnd_params_buf: wgpu::Buffer,
    bnd_bg_even: wgpu::BindGroup,
    bnd_bg_odd: wgpu::BindGroup,
    fine_params_buf: wgpu::Buffer,
    fine_bg_even: wgpu::BindGroup,
    fine_bg_odd: wgpu::BindGroup,
}

/// Manages multiple hi-res regions (up to MAX_HIRES_REGIONS) and their GPU resources.
pub struct HiResManager {
    pub regions: Vec<HiResRegion>,
    gpu_states: Vec<RegionGpuState>,
    pub mask: RegionMask,
    inward_grid_buf: wgpu::Buffer,
    inward_grid_words: u32,
    bnd_pipeline: Option<wgpu::ComputePipeline>,
    bnd_bgl: Option<wgpu::BindGroupLayout>,
    fine_pipeline: Option<wgpu::ComputePipeline>,
    fine_bgl: Option<wgpu::BindGroupLayout>,
}

impl HiResManager {
    pub fn new(device: &wgpu::Device, grid: &Grid) -> Self {
        let total = grid.total_words();
        let inward_grid_buf = make_grid_buffer(device, total, "hires_inward_grid");
        HiResManager {
            regions: Vec::new(),
            gpu_states: Vec::new(),
            mask: RegionMask::new(device, grid),
            inward_grid_buf,
            inward_grid_words: total,
            bnd_pipeline: None, bnd_bgl: None,
            fine_pipeline: None, fine_bgl: None,
        }
    }

    pub fn add_region(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        grid: &Grid,
        id: u32,
        rect: [i32; 4],
        multiplier: u32,
        show_grid: bool,
        show_base_grid: bool,
        show_border: bool,
        sim_buf_a: &wgpu::Buffer,
        sim_buf_b: &wgpu::Buffer,
        sim_frame: u32,
    ) {
        if self.regions.len() >= MAX_HIRES_REGIONS { return; }
        // Remove existing region with same id
        self.remove_region(queue, id);

        let region = HiResRegion::new(
            device, queue, id, rect, multiplier, sim_frame,
            show_grid, show_base_grid, show_border,
        );
        let boundary = BoundaryState::new(
            device, region.base_width(), region.base_height(), multiplier,
        );

        ensure_bnd_pipeline(device, &mut self.bnd_pipeline, &mut self.bnd_bgl);
        ensure_fine_pipeline(device, &mut self.fine_pipeline, &mut self.fine_bgl);

        let gpu_state = build_region_gpu_state(
            device, grid, &region, boundary,
            sim_buf_a, sim_buf_b, &self.inward_grid_buf,
            self.bnd_bgl.as_ref().unwrap(), self.fine_bgl.as_ref().unwrap(),
        );

        self.regions.push(region);
        self.gpu_states.push(gpu_state);
        self.rebuild_mask(queue);
    }

    pub fn remove_region(&mut self, queue: &wgpu::Queue, id: u32) {
        if let Some(idx) = self.regions.iter().position(|r| r.id == id) {
            self.regions.remove(idx);
            self.gpu_states.remove(idx);
            self.rebuild_mask(queue);
        }
    }

    pub fn clear_regions(&mut self, queue: &wgpu::Queue) {
        self.regions.clear();
        self.gpu_states.clear();
        self.rebuild_mask(queue);
        clear_buffer_queue(queue, &self.inward_grid_buf);
    }

    pub fn update_flags(&mut self, id: u32, show_grid: bool, show_base_grid: bool, show_border: bool) {
        if let Some(r) = self.regions.iter_mut().find(|r| r.id == id) {
            r.show_grid = show_grid;
            r.show_base_grid = show_base_grid;
            r.show_border = show_border;
        }
    }

    pub fn set_paused(&mut self, id: u32, paused: bool, device: &wgpu::Device, queue: &wgpu::Queue, sim_frame: u32) {
        let Some(r) = self.regions.iter_mut().find(|r| r.id == id) else { return; };
        if r.paused == paused { return; }
        if !paused {
            r.resync_frame(sim_frame);
        }
        let src = r.current_visible_buffer() as *const wgpu::Buffer;
        let dst = r.previous_visible_buffer() as *const wgpu::Buffer;
        let size = r.buffer_bytes();
        let mut encoder = device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("hires_pause_sync") },
        );
        unsafe { encoder.copy_buffer_to_buffer(&*src, 0, &*dst, 0, size); }
        queue.submit([encoder.finish()]);
        r.paused = paused;
    }

    pub fn is_active(&self) -> bool { !self.regions.is_empty() }
    pub fn mask_buffer(&self) -> &wgpu::Buffer { self.mask.buffer() }
    pub fn inward_buffer(&self) -> &wgpu::Buffer { &self.inward_grid_buf }

    /// Returns render metadata for all active regions.
    pub fn render_meta(&self) -> Vec<([i32; 4], u32, u32, u32, bool, bool, bool)> {
        self.regions.iter().map(|r| (
            r.rect, r.multiplier, r.cols, r.words_per_row,
            r.show_grid, r.show_base_grid, r.show_border,
        )).collect()
    }

    /// Returns visible fine-cell buffers with byte sizes for all active regions.
    pub fn visible_fine_buffers(&self) -> Vec<(&wgpu::Buffer, u64)> {
        self.regions.iter().map(|r| (r.current_visible_buffer(), r.buffer_bytes())).collect()
    }

    /// Returns previous fine-cell buffers with byte sizes for all active regions.
    pub fn previous_fine_buffers(&self) -> Vec<(&wgpu::Buffer, u64)> {
        self.regions.iter().map(|r| (r.previous_visible_buffer(), r.buffer_bytes())).collect()
    }

    /// Full hi-res tick: boundary extract for all → fine compute for all → swap all.
    pub fn tick(
        &mut self,
        encoder: &mut wgpu::CommandEncoder,
        sim_frame: u32,
    ) {
        if self.regions.is_empty() { return; }
        // All boundary extractions first (needed for adjacent regions)
        clear_buffer_enc(encoder, &self.inward_grid_buf);
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_boundary_extract(encoder, sim_frame, i);
        }
        // Then all fine computes
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_fine_compute(encoder, sim_frame, i);
        }
        // Swap all non-paused
        for region in &mut self.regions {
            if !region.paused { region.swap(); }
        }
    }

    fn dispatch_boundary_extract(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        sim_frame: u32,
        idx: usize,
    ) {
        let gs = &self.gpu_states[idx];
        let Some(ref pipeline) = self.bnd_pipeline else { return; };
        let bg = if sim_frame & 1 == 0 { &gs.bnd_bg_even } else { &gs.bnd_bg_odd };

        gs.boundary.clear_enc(encoder);
        let wg = gs.boundary.layout.inward_count.div_ceil(64);
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
        sim_frame: u32,
        idx: usize,
    ) {
        let region = &self.regions[idx];
        let gs = &self.gpu_states[idx];
        let Some(ref pipeline) = self.fine_pipeline else { return; };
        let bg = if sim_frame & 1 == 0 { &gs.fine_bg_even } else { &gs.fine_bg_odd };

        let dst_buf = if sim_frame & 1 == 0 { &region.buf_b } else { &region.buf_a };
        clear_buffer_enc(encoder, dst_buf);

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
        self.rebuild_mask(queue);
        let total = grid.total_words();
        if total != self.inward_grid_words {
            self.inward_grid_buf = make_grid_buffer(device, total, "hires_inward_grid");
            self.inward_grid_words = total;
        }
    }

    pub fn rebuild_all_bind_groups(
        &mut self,
        device: &wgpu::Device,
        grid: &Grid,
        sim_buf_a: &wgpu::Buffer,
        sim_buf_b: &wgpu::Buffer,
    ) {
        ensure_bnd_pipeline(device, &mut self.bnd_pipeline, &mut self.bnd_bgl);
        ensure_fine_pipeline(device, &mut self.fine_pipeline, &mut self.fine_bgl);
        let bnd_bgl = match self.bnd_bgl { Some(ref b) => b, None => return };
        let fine_bgl = match self.fine_bgl { Some(ref b) => b, None => return };

        self.gpu_states.clear();
        for region in &self.regions {
            let boundary = BoundaryState::new(
                device, region.base_width(), region.base_height(), region.multiplier,
            );
            let gs = build_region_gpu_state(
                device, grid, region, boundary,
                sim_buf_a, sim_buf_b, &self.inward_grid_buf,
                bnd_bgl, fine_bgl,
            );
            self.gpu_states.push(gs);
        }
    }

    pub fn set_region_frozen(&mut self, device: &wgpu::Device, queue: &wgpu::Queue, id: u32, data: &[u32]) {
        let Some(idx) = self.regions.iter().position(|r| r.id == id) else { return; };
        self.regions[idx].set_frozen(device, queue, data);
        self.rebuild_fine_for_region(device, idx);
    }

    pub fn clear_region_frozen(&mut self, device: &wgpu::Device, id: u32) {
        let Some(idx) = self.regions.iter().position(|r| r.id == id) else { return; };
        self.regions[idx].clear_frozen();
        self.rebuild_fine_for_region(device, idx);
    }

    fn rebuild_fine_for_region(&mut self, device: &wgpu::Device, idx: usize) {
        ensure_fine_pipeline(device, &mut self.fine_pipeline, &mut self.fine_bgl);
        let fine_bgl = match self.fine_bgl { Some(ref b) => b, None => return };
        let gs = &self.gpu_states[idx];
        let frozen = self.regions[idx].frozen_buf.as_ref().unwrap_or(&gs.boundary.frozen_placeholder_buf);
        let (p, a, b) = build_fine_bind_groups(device, &self.regions[idx], &gs.boundary, frozen, fine_bgl);
        self.gpu_states[idx].fine_params_buf = p;
        self.gpu_states[idx].fine_bg_even = a;
        self.gpu_states[idx].fine_bg_odd = b;
    }

    fn rebuild_mask(&mut self, queue: &wgpu::Queue) {
        let rects: Vec<[i32; 4]> = self.regions.iter().map(|r| r.rect).collect();
        self.mask.rebuild(queue, &rects);
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

fn clear_buffer_enc(encoder: &mut wgpu::CommandEncoder, buf: &wgpu::Buffer) {
    encoder.clear_buffer(buf, 0, None);
}

fn clear_buffer_queue(queue: &wgpu::Queue, buf: &wgpu::Buffer) {
    let size = buf.size() as usize;
    let zeros = vec![0u8; size];
    queue.write_buffer(buf, 0, &zeros);
}

fn build_region_gpu_state(
    device: &wgpu::Device,
    grid: &Grid,
    region: &HiResRegion,
    boundary: BoundaryState,
    sim_buf_a: &wgpu::Buffer,
    sim_buf_b: &wgpu::Buffer,
    inward_grid_buf: &wgpu::Buffer,
    bnd_bgl: &wgpu::BindGroupLayout,
    fine_bgl: &wgpu::BindGroupLayout,
) -> RegionGpuState {
    let (bnd_p, bnd_a, bnd_b) = build_bnd_bind_groups(
        device, grid, region, &boundary,
        sim_buf_a, sim_buf_b, inward_grid_buf, bnd_bgl,
    );
    let frozen_buf = region.frozen_buf.as_ref().unwrap_or(&boundary.frozen_placeholder_buf);
    let (fine_p, fine_a, fine_b) = build_fine_bind_groups(device, region, &boundary, frozen_buf, fine_bgl);
    RegionGpuState {
        boundary,
        bnd_params_buf: bnd_p,
        bnd_bg_even: bnd_a,
        bnd_bg_odd: bnd_b,
        fine_params_buf: fine_p,
        fine_bg_even: fine_a,
        fine_bg_odd: fine_b,
    }
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

fn build_fine_bind_groups(
    device: &wgpu::Device,
    region: &HiResRegion,
    boundary: &BoundaryState,
    frozen_buf: &wgpu::Buffer,
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
                wgpu::BindGroupEntry { binding: 4, resource: frozen_buf.as_entire_binding() },
            ],
        })
    };

    let bg_even = mk(&region.buf_a, &region.buf_b, "fine_bg_even");
    let bg_odd  = mk(&region.buf_b, &region.buf_a, "fine_bg_odd");
    (params_buf, bg_even, bg_odd)
}

