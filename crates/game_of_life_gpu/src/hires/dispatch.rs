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
///
/// Boundary bind groups come in 4 variants keyed by (base_is_a, region.current)
/// since the boundary shader reads both the base sim buffer and the fine buffer.
/// Fine compute bind groups come in two variants (0/1) keyed by region.current.
struct RegionGpuState {
    boundary: BoundaryState,
    bnd_params_buf: wgpu::Buffer,
    /// Boundary bind groups: [base_is_a][region.current]
    /// bnd_bgs[0][0] = base=sim_buf_a, fine=bufs[0]
    /// bnd_bgs[0][1] = base=sim_buf_a, fine=bufs[1]
    /// bnd_bgs[1][0] = base=sim_buf_b, fine=bufs[0]
    /// bnd_bgs[1][1] = base=sim_buf_b, fine=bufs[1]
    bnd_bgs: [[wgpu::BindGroup; 2]; 2],
    fine_params_buf: wgpu::Buffer,
    /// Fine compute bind group: reads bufs[0], writes bufs[1].
    fine_bg_0: wgpu::BindGroup,
    /// Fine compute bind group: reads bufs[1], writes bufs[0].
    fine_bg_1: wgpu::BindGroup,
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
    ) {
        if self.regions.len() >= MAX_HIRES_REGIONS { return; }
        // Remove existing region with same id
        self.remove_region(queue, id);

        let region = HiResRegion::new(
            device, queue, id, rect, multiplier,
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

    pub fn set_paused(&mut self, id: u32, paused: bool, device: &wgpu::Device, queue: &wgpu::Queue) {
        let Some(r) = self.regions.iter_mut().find(|r| r.id == id) else { return; };
        if r.paused == paused { return; }
        // On unpause, copy current → write buffer so both contain identical state.
        if !paused {
            let bytes = r.buffer_bytes();
            let mut encoder = device.create_command_encoder(
                &wgpu::CommandEncoderDescriptor { label: Some("hires_pause_sync") },
            );
            encoder.copy_buffer_to_buffer(
                &r.bufs[r.current], 0,
                &r.bufs[1 - r.current], 0,
                bytes,
            );
            queue.submit([encoder.finish()]);
        }
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
        self.regions.iter().map(|r| (r.read_buf(), r.buffer_bytes())).collect()
    }

    /// Full hi-res tick (single step): boundary extract → fine compute → swap.
    /// Ticks ALL non-paused regions and resets tick accumulators.
    ///
    /// Called on base tick frames where every region must advance because
    /// the base grid just changed (new boundary conditions).
    ///
    /// `base_is_a` indicates whether the base simulation's buf_a is the
    /// current visible buffer (true) or buf_b (false).
    pub fn tick(
        &mut self,
        encoder: &mut wgpu::CommandEncoder,
        base_is_a: bool,
    ) {
        if self.regions.is_empty() { return; }
        clear_buffer_enc(encoder, &self.inward_grid_buf);
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_boundary_extract(encoder, base_is_a, region.current, i);
        }
        for (i, region) in self.regions.iter().enumerate() {
            if region.paused { continue; }
            self.dispatch_fine_compute(encoder, region.current, i);
        }
        for region in &mut self.regions {
            if !region.paused { region.swap(); }
            region.tick_accum = 0;
        }
    }

    /// Selective hi-res tick: only advances regions whose Bresenham
    /// accumulator reaches the threshold.
    ///
    /// Called on intermediate hi-res frames (between base ticks). Each
    /// region's accumulator is incremented by its `tick_multiplier`.
    /// When it reaches `max_tick_multiplier`, the region ticks and the
    /// accumulator wraps. This distributes ticks proportionally so a
    /// region with multiplier M gets exactly M ticks per base-tick cycle.
    pub fn tick_selective(
        &mut self,
        encoder: &mut wgpu::CommandEncoder,
        base_is_a: bool,
    ) {
        if self.regions.is_empty() { return; }
        let max_mult = self.max_tick_multiplier();
        if max_mult <= 1 { return; }

        // Advance accumulators and decide which regions tick this frame.
        let mut should_tick = [false; MAX_HIRES_REGIONS];
        for (i, region) in self.regions.iter_mut().enumerate() {
            if region.paused { continue; }
            region.tick_accum += region.tick_multiplier;
            if region.tick_accum >= max_mult {
                region.tick_accum -= max_mult;
                should_tick[i] = true;
            }
        }

        if !should_tick.iter().any(|&t| t) { return; }
        clear_buffer_enc(encoder, &self.inward_grid_buf);
        for (i, &tick) in should_tick.iter().enumerate() {
            if !tick { continue; }
            self.dispatch_boundary_extract(encoder, base_is_a, self.regions[i].current, i);
        }
        for (i, &tick) in should_tick.iter().enumerate() {
            if !tick { continue; }
            self.dispatch_fine_compute(encoder, self.regions[i].current, i);
        }
        for (i, region) in self.regions.iter_mut().enumerate() {
            if should_tick[i] { region.swap(); }
        }
    }

    /// Maximum tick_multiplier across all active regions (minimum 1).
    pub fn max_tick_multiplier(&self) -> u32 {
        self.regions.iter().map(|r| r.tick_multiplier).max().unwrap_or(1)
    }

    /// Set the tick multiplier for a specific region.
    pub fn set_tick_multiplier(&mut self, id: u32, multiplier: u32) {
        if let Some(r) = self.regions.iter_mut().find(|r| r.id == id) {
            r.tick_multiplier = multiplier.max(1);
        }
    }

    fn dispatch_boundary_extract(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        base_is_a: bool,
        region_current: usize,
        idx: usize,
    ) {
        let gs = &self.gpu_states[idx];
        let Some(ref pipeline) = self.bnd_pipeline else { return; };
        let base_idx = if base_is_a { 0 } else { 1 };
        let bg = &gs.bnd_bgs[base_idx][region_current];

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
        current: usize,
        idx: usize,
    ) {
        let region = &self.regions[idx];
        let gs = &self.gpu_states[idx];
        let Some(ref pipeline) = self.fine_pipeline else { return; };
        let bg = if current == 0 { &gs.fine_bg_0 } else { &gs.fine_bg_1 };

        let dst_buf = &region.bufs[1 - current];
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
        let (p, bg0, bg1) = build_fine_bind_groups(device, &self.regions[idx], &gs.boundary, frozen, fine_bgl);
        self.gpu_states[idx].fine_params_buf = p;
        self.gpu_states[idx].fine_bg_0 = bg0;
        self.gpu_states[idx].fine_bg_1 = bg1;
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
    let (bnd_p, bnd_bgs) = build_bnd_bind_groups(
        device, grid, region, &boundary,
        sim_buf_a, sim_buf_b, inward_grid_buf, bnd_bgl,
    );
    let frozen_buf = region.frozen_buf.as_ref().unwrap_or(&boundary.frozen_placeholder_buf);
    let (fine_p, fine_0, fine_1) = build_fine_bind_groups(device, region, &boundary, frozen_buf, fine_bgl);
    RegionGpuState {
        boundary,
        bnd_params_buf: bnd_p,
        bnd_bgs,
        fine_params_buf: fine_p,
        fine_bg_0: fine_0,
        fine_bg_1: fine_1,
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
) -> (wgpu::Buffer, [[wgpu::BindGroup; 2]; 2]) {
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

    // 4 boundary bind groups: [base_buffer][fine_buffer]
    let bnd_bgs = [
        [
            mk(sim_buf_a, &region.bufs[0], "bnd_a0"),
            mk(sim_buf_a, &region.bufs[1], "bnd_a1"),
        ],
        [
            mk(sim_buf_b, &region.bufs[0], "bnd_b0"),
            mk(sim_buf_b, &region.bufs[1], "bnd_b1"),
        ],
    ];
    (params_buf, bnd_bgs)
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

    // Fine bind groups keyed by region's current index:
    // fine_bg_0: reads bufs[0], writes bufs[1]
    // fine_bg_1: reads bufs[1], writes bufs[0]
    let bg_0 = mk(&region.bufs[0], &region.bufs[1], "fine_bg_0");
    let bg_1 = mk(&region.bufs[1], &region.bufs[0], "fine_bg_1");
    (params_buf, bg_0, bg_1)
}
