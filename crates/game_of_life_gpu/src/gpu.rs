use wasm_bindgen::prelude::*;

use crate::context::GpuContext;
use crate::decals::parse_decal_entries_json;
use crate::grid::Grid;
use crate::hires::HiResManager;
use crate::renderer::GpuRenderer;
use crate::renderer::types::{HiResGlobalMetaGpu, HiResRegionMetaGpu};
use crate::simulation::Simulation;
use crate::text::{parse_frozen_cells_json, parse_text_glyphs_json};
use crate::zones::parse_zone_entries_json;

// Major-grid divisor: 5 minor cells per major square (must match render.wgsl major_every).
const MAJOR_EVERY: u32 = 5;

/// Compute a float grid pitch so that `canvas_width` is an exact multiple of
/// `pitch_major = MAJOR_EVERY * result`.  Both left and right margin borders then
/// land exactly on major grid lines.
fn aligned_pitch(canvas_width: u32, target: f32) -> f32 {
    let n = ((canvas_width as f32 / (target * MAJOR_EVERY as f32)).round() as u32).max(1);
    canvas_width as f32 / (n * MAJOR_EVERY) as f32
}

/// WebGPU-accelerated Game of Life, exported to JavaScript.
///
/// Init order required by wgpu ≥ 22:
///   1. Instance
///   2. Surface  ← must exist before adapter request
///   3. Adapter (compatible_surface = &surface)
///   4. Device + Queue
///
/// `ctx` holds the shared device + queue.  Multiple `GpuRenderer`s can
/// target different canvases while sharing one device and simulation.
#[wasm_bindgen]
pub struct GpuGameOfLife {
    ctx: GpuContext,
    grid: Grid,
    simulation: Simulation,
    hires: HiResManager,
    renderers: Vec<GpuRenderer>,
    target_pitch: f32,   // stored as reference for resize recomputation
    zones_json: String,  // latest sanitized zone payload from the app
    decals_json: String, // latest sanitized decal payload from the app
    hires_dirty: bool,
}

/// Shared init path: creates context + subsystems from a surface.
/// Called by both `new` (HtmlCanvasElement) and `new_offscreen` (OffscreenCanvas).
async fn from_surface(
    instance: wgpu::Instance,
    surface: wgpu::Surface<'static>,
    width: u32,
    height: u32,
    target_pitch: f32,
) -> Result<GpuGameOfLife, JsValue> {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    let (ctx, adapter) = GpuContext::from_compatible_surface(&instance, &surface).await?;

    let grid_pitch = aligned_pitch(width, target_pitch);
    let cell_px = grid_pitch.round() as u32;

    let grid = Grid::new(width, height, cell_px);
    let hires = HiResManager::new(&ctx.device, &grid);
    let simulation = Simulation::new(
        &ctx.device, &ctx.queue, &grid, hires.mask_buffer(), hires.inward_buffer(),
    );
    let renderer = GpuRenderer::new(
        &ctx.device,
        &ctx.queue,
        &adapter,
        surface,
        &grid,
        grid_pitch,
        &simulation.buf_a,
        &simulation.buf_b,
    );

    Ok(GpuGameOfLife {
        ctx,
        grid,
        simulation,
        hires,
        renderers: vec![renderer],
        target_pitch,
        zones_json: String::new(),
        decals_json: String::new(),
        hires_dirty: true,
    })
}

#[wasm_bindgen]
impl GpuGameOfLife {
    /// Create from an HtmlCanvasElement (main-thread usage).
    pub async fn new(
        canvas: web_sys::HtmlCanvasElement,
        grid_pitch: f32,
    ) -> Result<GpuGameOfLife, JsValue> {
        let (width, height) = (canvas.width(), canvas.height());
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
            backends: wgpu::Backends::BROWSER_WEBGPU,
            ..Default::default()
        });
        // Surface BEFORE adapter.
        let surface = instance
            .create_surface(wgpu::SurfaceTarget::Canvas(canvas))
            .map_err(|e| JsValue::from_str(&e.to_string()))?;
        from_surface(instance, surface, width, height, grid_pitch).await
    }

    /// Create from an OffscreenCanvas (Web Worker usage).
    pub async fn new_offscreen(
        canvas: web_sys::OffscreenCanvas,
        grid_pitch: f32,
    ) -> Result<GpuGameOfLife, JsValue> {
        let (width, height) = (canvas.width(), canvas.height());
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
            backends: wgpu::Backends::BROWSER_WEBGPU,
            ..Default::default()
        });
        // Surface BEFORE adapter.
        let surface = instance
            .create_surface(wgpu::SurfaceTarget::OffscreenCanvas(canvas))
            .map_err(|e| JsValue::from_str(&e.to_string()))?;
        from_surface(instance, surface, width, height, grid_pitch).await
    }

    /// Presents the current simulation state without advancing a generation.
    /// Call this on render frames that fall between simulation ticks so the
    /// display stays at vsync rate while the simulation runs at a lower rate.
    pub fn render_only(&mut self) {
        self.sync_hires_if_dirty();
        self.present();
    }

    /// Advances one GoL generation (base + hi-res) and presents.
    ///
    /// Split into phases with separate `queue.submit()` calls so that
    /// storage buffer writes are guaranteed visible between phases.
    pub fn tick_and_render(&mut self) {
        self.flush_edits_if_pending();
        self.snapshot_pre_tick();
        self.tick_hires();
        self.tick_base();
        self.compose_hires_current();
        self.present();
    }

    /// Selectively tick hi-res regions and render. Called between base ticks
    /// to make hi-res regions visually animate faster than the base grid.
    ///
    /// Uses per-region Bresenham accumulators so each region ticks at its
    /// own `tick_multiplier` rate, independent of other regions.
    pub fn hires_tick_and_render(&mut self) {
        if !self.hires.is_active() {
            self.render_only();
            return;
        }
        self.tick_hires_selective();
        self.compose_hires_prev();
        self.present();
    }

    /// Updates the vertical scroll offset (canvas pixels). Call on every scroll event.
    pub fn set_scroll(&self, scroll_y: f32) {
        self.primary().set_scroll(&self.ctx.queue, scroll_y);
    }

    pub fn set_transition(&self, t: f32) {
        self.primary().set_transition(&self.ctx.queue, t.clamp(0.0, 1.0));
    }

    /// Call whenever the canvas dimensions change.
    pub fn resize(&mut self, width: u32, height: u32) {
        if width == 0 || height == 0 {
            return;
        }
        let grid_pitch = aligned_pitch(width, self.target_pitch);
        let cell_px = grid_pitch.round() as u32;
        self.grid = Grid::new(width, height, cell_px);
        self.hires.resize_mask(&self.ctx.device, &self.ctx.queue, &self.grid);
        self.simulation.resize(
            &self.ctx.device, &self.ctx.queue, &self.grid,
            self.hires.mask_buffer(), self.hires.inward_buffer(),
        );
        self.hires.rebuild_all_bind_groups(
            &self.ctx.device, &self.grid, &self.simulation.buf_a, &self.simulation.buf_b,
        );
        self.renderers[0].resize(
            &self.ctx.device,
            &self.ctx.queue,
            &self.grid,
            grid_pitch,
            &self.simulation,
        );
        if self.zones_json.is_empty() {
            self.renderers[0].clear_zones(&self.ctx.queue);
        } else if let Ok(entries) = parse_zone_entries_json(&self.zones_json, &self.grid) {
            self.renderers[0].set_zones(&self.ctx.queue, &entries);
        }
        if self.decals_json.is_empty() {
            self.renderers[0].clear_decals(&self.ctx.queue);
        } else if let Ok(entries) = parse_decal_entries_json(&self.decals_json, &self.grid) {
            self.renderers[0].set_decals(&self.ctx.queue, &entries);
        }
        if self.hires.is_active() {
            self.sync_hires_to_renderer();
        } else {
            self.renderers[0].clear_hires(&self.ctx.queue);
        }
    }

    /// Queue a cell toggle.  `cx` and `cy` are column/row indices already
    /// wrapped into [0, screen_cols) / [0, screen_rows) by the JS caller.
    ///
    /// The edit is deferred until the next `tick_and_render` or an explicit
    /// `flush_edits` call, so rapid clicks accumulate cheaply.
    pub fn toggle_cell(&mut self, cx: u32, cy: u32) {
        self.simulation.queue_toggle(&self.grid, cx, cy);
    }

    /// Flush pending cell edits to the GPU and re-render immediately.
    ///
    /// Call this after `toggle_cell` when you want instant visual feedback
    /// without waiting for the next simulation tick.
    pub fn flush_and_render(&mut self) {
        if self.simulation.has_pending_edits() {
            self.simulation.flush_edits(&self.ctx.device, &self.ctx.queue);
        }
        self.render_only();
    }

    /// Return grid dimensions for the main thread's coordinate mapping.
    pub fn screen_cols(&self) -> u32 {
        self.grid.screen_cols
    }
    pub fn screen_rows(&self) -> u32 {
        self.grid.screen_rows
    }
    pub fn padded_rows(&self) -> u32 {
        self.grid.padded_rows
    }
    pub fn words_per_row(&self) -> u32 {
        self.grid.words_per_row
    }
    pub fn grid_pitch(&self) -> f32 {
        aligned_pitch(self.grid.canvas_width, self.target_pitch)
    }

    /// Accepts a JSON array of blank-zone records and caches it for the next
    /// renderer integration step (GPU mask upload in Phase 1 task 5).
    ///
    /// We validate that the payload is valid JSON now so malformed messages fail
    /// early at the Rust boundary.
    pub fn set_zones_json(&mut self, zones_json: &str) -> Result<(), JsValue> {
        let entries = parse_zone_entries_json(zones_json, &self.grid)?;
        self.zones_json.clear();
        self.zones_json.push_str(zones_json);
        self.renderers[0].set_zones(&self.ctx.queue, &entries);
        Ok(())
    }

    /// Accepts a JSON array of decal records and uploads them to the GPU.
    /// Caches the payload for re-application after resize.
    pub fn set_decals_json(&mut self, decals_json: &str) -> Result<(), JsValue> {
        let entries = parse_decal_entries_json(decals_json, &self.grid)?;
        self.decals_json.clear();
        self.decals_json.push_str(decals_json);
        self.renderers[0].set_decals(&self.ctx.queue, &entries);
        Ok(())
    }

    /// Upload frozen cell coordinates (JSON array of `{cx, cy}` pairs).
    /// Packs into the bitpacked frozen buffer and rebuilds compute bind groups.
    pub fn set_frozen_cells(&mut self, cells_json: &str) -> Result<(), JsValue> {
        let buf = parse_frozen_cells_json(cells_json, &self.grid)?;
        self.ctx.queue.write_buffer(
            &self.simulation.frozen_buf,
            0,
            bytemuck::cast_slice(&buf),
        );
        Ok(())
    }

    /// Clear all frozen cells (zero the frozen buffer).
    pub fn clear_frozen_cells(&mut self) {
        let zeros = vec![0u32; self.grid.total_words() as usize];
        self.ctx.queue.write_buffer(
            &self.simulation.frozen_buf,
            0,
            bytemuck::cast_slice(&zeros),
        );
    }

    /// Upload SDF glyph metadata (JSON array of positioned glyph records).
    pub fn set_text_glyphs(&mut self, glyphs_json: &str) -> Result<(), JsValue> {
        let glyphs = parse_text_glyphs_json(glyphs_json)?;
        self.renderers[0].set_text_glyphs(&self.ctx.queue, &glyphs);
        Ok(())
    }

    /// Clear all SDF text glyphs.
    pub fn clear_text_glyphs(&mut self) {
        self.renderers[0].clear_text_glyphs(&self.ctx.queue);
    }

    /// Upload the SDF atlas texture (R8unorm raw data).
    pub fn upload_text_atlas(&mut self, data: &[u8], width: u32, height: u32) -> Result<(), JsValue> {
        if data.len() != (width * height) as usize {
            return Err(JsValue::from_str("atlas data size mismatch"));
        }
        self.renderers[0].upload_text_atlas(
            &self.ctx.device, &self.ctx.queue, data, width, height,
        );
        Ok(())
    }

    /// Add a hi-res region with the given id, rect, and multiplier.
    pub fn add_hires_region(
        &mut self, id: u32, x1: i32, y1: i32, x2: i32, y2: i32, multiplier: u32,
        show_grid: bool, show_base_grid: bool, show_border: bool,
    ) {
        let rect = [x1, y1, x2, y2];
        self.hires.add_region(
            &self.ctx.device, &self.ctx.queue, &self.grid, id, rect, multiplier,
            show_grid, show_base_grid, show_border,
            &self.simulation.buf_a, &self.simulation.buf_b,
        );
        self.hires_dirty = true;
        self.sync_hires_to_renderer();
    }

    /// Remove a hi-res region by id.
    pub fn remove_hires_region(&mut self, id: u32) {
        self.hires.remove_region(&self.ctx.queue, id);
        self.hires_dirty = true;
        self.sync_hires_to_renderer();
    }

    /// Pause or resume a specific hi-res region.
    pub fn set_hires_paused(&mut self, id: u32, paused: bool) {
        self.hires.set_paused(id, paused, &self.ctx.device, &self.ctx.queue);
        self.hires_dirty = true;
    }

    /// Set the tick multiplier for a specific hi-res region.
    pub fn set_hires_tick_multiplier(&mut self, id: u32, multiplier: u32) {
        self.hires.set_tick_multiplier(id, multiplier);
    }

    /// Maximum tick_multiplier across all active hi-res regions.
    pub fn max_hires_tick_multiplier(&self) -> u32 {
        self.hires.max_tick_multiplier()
    }

    /// Update display flags for a specific hi-res region.
    pub fn update_hires_flags(&mut self, id: u32, show_grid: bool, show_base_grid: bool, show_border: bool) {
        self.hires.update_flags(id, show_grid, show_base_grid, show_border);
        if self.hires.is_active() {
            self.sync_hires_to_renderer();
        }
    }

    /// Clear all hi-res regions.
    pub fn clear_hires_regions(&mut self) {
        self.hires.clear_regions(&self.ctx.queue);
        self.renderers[0].clear_hires(&self.ctx.queue);
    }

    /// Upload frozen cells for a hi-res region (fine-cell space, region-relative).
    pub fn set_hires_frozen_cells(&mut self, region_id: u32, cells_json: &str) -> Result<(), JsValue> {
        let region = self.hires.regions.iter().find(|r| r.id == region_id);
        let (wpr, padded_rows) = match region {
            Some(r) => (r.words_per_row, r.padded_rows),
            None => return Err(JsValue::from_str("Region not found")),
        };
        let buf = crate::text::parse_hires_frozen_cells_json(cells_json, wpr, padded_rows)?;
        self.hires.set_region_frozen(&self.ctx.device, &self.ctx.queue, region_id, &buf);
        Ok(())
    }

    /// Clear frozen cells for a hi-res region.
    pub fn clear_hires_frozen_cells(&mut self, region_id: u32) {
        self.hires.clear_region_frozen(&self.ctx.device, region_id);
    }
}

// ── Renderer accessors ───────────────────────────────────────────────────────
impl GpuGameOfLife {
    fn primary(&self) -> &GpuRenderer { &self.renderers[0] }
}

// ── Composable GPU phases ────────────────────────────────────────────────────
//
// Each phase owns a single concern (flush, snapshot, tick, compose, present).
// The public entry points (`tick_and_render`, `hires_tick_and_render`,
// `render_only`) compose these phases in the order required by their
// scheduling context.  Each phase that dispatches GPU work creates its own
// CommandEncoder and calls `queue.submit()` to guarantee storage buffer
// visibility between phases.
impl GpuGameOfLife {
    /// Flush any pending cell edits to the GPU.
    fn flush_edits_if_pending(&mut self) {
        if self.simulation.has_pending_edits() {
            self.simulation.flush_edits(&self.ctx.device, &self.ctx.queue);
        }
    }

    /// Snapshot pre-tick state for transition animation (base + hi-res).
    fn snapshot_pre_tick(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_snapshot") },
        );
        self.renderers[0].capture_previous_state(
            &mut enc, self.simulation.current_visible_buffer(), &self.grid,
        );
        let dst = self.renderers[0].hires_cells_prev_buf();
        Self::copy_hires_to_buf_inner(&self.hires, &mut enc, dst);
        self.ctx.queue.submit([enc.finish()]);
    }

    /// Tick all hi-res regions (base tick path — every region advances).
    fn tick_hires(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_hires_tick") },
        );
        self.hires.tick(&mut enc, self.simulation.current_visible_is_a());
        self.ctx.queue.submit([enc.finish()]);
    }

    /// Selectively tick hi-res regions using per-region accumulators.
    fn tick_hires_selective(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_hires_tick") },
        );
        self.hires.tick_selective(&mut enc, self.simulation.current_visible_is_a());
        self.ctx.queue.submit([enc.finish()]);
    }

    /// Tick base simulation (single step).
    fn tick_base(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_sim_tick") },
        );
        self.simulation.tick(&mut enc, &self.grid);
        self.ctx.queue.submit([enc.finish()]);
    }

    /// Mark hi-res compose as done (present() handles the current-buffer copy).
    fn compose_hires_current(&mut self) {
        self.hires_dirty = false;
    }

    /// Copy hi-res into the renderer's "previous" buffer so the transition
    /// blend shows the latest hi-res state. present() handles current.
    fn compose_hires_prev(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_hires_compose") },
        );
        let dst = self.renderers[0].hires_cells_prev_buf();
        Self::copy_hires_to_buf_inner(&self.hires, &mut enc, dst);
        self.ctx.queue.submit([enc.finish()]);
        self.hires_dirty = false;
    }

    /// If hi-res buffers are dirty (regions added/removed), sync prev buffer.
    /// present() handles copying current.
    fn sync_hires_if_dirty(&mut self) {
        if !self.hires_dirty { return; }
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_hires_sync") },
        );
        let dst = self.renderers[0].hires_cells_prev_buf();
        Self::copy_hires_to_buf_inner(&self.hires, &mut enc, dst);
        self.ctx.queue.submit([enc.finish()]);
        self.hires_dirty = false;
    }

    /// Render the current state and present the frame.
    fn present(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_present") },
        );
        let dst = self.renderers[0].hires_cells_buf();
        Self::copy_hires_to_buf_inner(&self.hires, &mut enc, dst);
        match self.renderers[0].render(&mut enc, self.simulation.current_visible_is_a()) {
            Ok(output) => {
                self.ctx.queue.submit([enc.finish()]);
                output.present();
            }
            Err(_) => {
                self.renderers[0].reconfigure(&self.ctx.device);
            }
        }
    }

    /// Copy all visible hi-res fine-cell buffers into a single destination buffer.
    fn copy_hires_to_buf_inner(
        hires: &HiResManager,
        encoder: &mut wgpu::CommandEncoder,
        dst: &wgpu::Buffer,
    ) {
        let mut offset: u64 = 0;
        for (src, size) in hires.visible_fine_buffers() {
            if dst.size() >= offset + size {
                encoder.copy_buffer_to_buffer(src, 0, dst, offset, size);
            }
            offset += size;
        }
    }

    fn sync_hires_to_renderer(&mut self) {
        let metas = self.hires.render_meta();
        if metas.is_empty() {
            self.renderers[0].clear_hires(&self.ctx.queue);
            return;
        }
        let global = HiResGlobalMetaGpu {
            region_count: metas.len() as u32,
            ..Default::default()
        };
        let mut regions = Vec::with_capacity(metas.len());
        let mut offset: u32 = 0;
        for (rect, mult, cols, wpr, sg, sbg, sb) in &metas {
            let total_words = {
                let r = self.hires.regions.iter().find(|r| r.rect == *rect).unwrap();
                r.total_words()
            };
            regions.push(HiResRegionMetaGpu {
                rect: *rect, multiplier: *mult, buffer_offset: offset,
                cols: *cols, wpr: *wpr,
                flags: (if *sg { 1u32 } else { 0 })
                     | (if *sbg { 2u32 } else { 0 })
                     | (if *sb { 4u32 } else { 0 }),
                pad0: 0, pad1: 0, pad2: 0,
            });
            offset += total_words;
        }
        let total_bytes = offset as u64 * 4;
        let cells_size = total_bytes.max(4);
        self.renderers[0].set_hires(
            &self.ctx.device, &self.ctx.queue,
            &global, &regions, cells_size,
        );
    }
}
