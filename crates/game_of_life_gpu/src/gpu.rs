use wasm_bindgen::prelude::*;

use crate::decals::parse_decal_entries_json;
use crate::grid::Grid;
use crate::hires::HiResManager;
use crate::renderer::GpuRenderer;
use crate::renderer::types::{HiResGlobalMetaGpu, HiResRegionMetaGpu};
use crate::simulation::Simulation;
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
#[wasm_bindgen]
pub struct GpuGameOfLife {
    device: wgpu::Device,
    queue: wgpu::Queue,
    grid: Grid,
    simulation: Simulation,
    hires: HiResManager,
    renderer: GpuRenderer,
    target_pitch: f32,   // stored as reference for resize recomputation
    zones_json: String,  // latest sanitized zone payload from the app
    decals_json: String, // latest sanitized decal payload from the app
    hires_show_grid: bool,
    hires_show_base_grid: bool,
    hires_show_border: bool,
    hires_paused: bool,
}

/// Shared init path: requests adapter + device, builds grid/simulation/renderer.
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

    let adapter = instance
        .request_adapter(&wgpu::RequestAdapterOptions {
            power_preference: wgpu::PowerPreference::HighPerformance,
            compatible_surface: Some(&surface),
            force_fallback_adapter: false,
        })
        .await
        .ok_or_else(|| JsValue::from_str("No WebGPU adapter found"))?;

    let (device, queue) = adapter
        .request_device(
            &wgpu::DeviceDescriptor {
                label: Some("gol_device"),
                required_features: wgpu::Features::empty(),
                required_limits: wgpu::Limits::default(),
                memory_hints: wgpu::MemoryHints::default(),
            },
            None,
        )
        .await
        .map_err(|e| JsValue::from_str(&e.to_string()))?;

    let grid_pitch = aligned_pitch(width, target_pitch);
    let cell_px = grid_pitch.round() as u32;

    let grid = Grid::new(width, height, cell_px);
    let hires = HiResManager::new(&device, &grid);
    let simulation = Simulation::new(
        &device, &queue, &grid, hires.mask_buffer(), hires.inward_buffer(),
    );
    let renderer = GpuRenderer::new(
        &device,
        &queue,
        &adapter,
        surface,
        &grid,
        grid_pitch,
        &simulation.buf_a,
        &simulation.buf_b,
    );

    Ok(GpuGameOfLife {
        device,
        queue,
        grid,
        simulation,
        hires,
        renderer,
        target_pitch,
        zones_json: String::new(),
        decals_json: String::new(),
        hires_show_grid: true,
        hires_show_base_grid: true,
        hires_show_border: true,
        hires_paused: false,
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
        let mut encoder = self
            .device
            .create_command_encoder(&wgpu::CommandEncoderDescriptor {
                label: Some("gol_render_only"),
            });
        self.copy_hires_to_render(&mut encoder);
        match self
            .renderer
            .render(&mut encoder, self.simulation.current_visible_is_a())
        {
            Ok(output) => {
                self.queue.submit([encoder.finish()]);
                output.present();
            }
            Err(_) => {
                self.renderer.reconfigure(&self.device);
            }
        }
    }

    /// Advances one GoL generation and presents the result to the canvas.
    pub fn tick_and_render(&mut self) {
        // Flush any pending cell edits to the current visible buffer BEFORE
        // the compute pass reads it.  This is a separate submit because the
        // XOR edits must complete before the GoL compute shader samples from
        // the same buffer.
        if self.simulation.has_pending_edits() {
            self.simulation.flush_edits(&self.device, &self.queue);
        }

        let mut encoder = self
            .device
            .create_command_encoder(&wgpu::CommandEncoderDescriptor {
                label: Some("gol_encoder"),
            });

        self.renderer.capture_previous_state(
            &mut encoder,
            self.simulation.current_visible_buffer(),
            &self.grid,
        );
        if !self.hires_paused {
            self.hires.tick(&mut encoder, &self.queue, self.simulation.frame);
        }
        self.simulation.tick(&mut encoder, &self.grid);
        self.copy_hires_to_render(&mut encoder);

        match self
            .renderer
            .render(&mut encoder, self.simulation.current_visible_is_a())
        {
            Ok(output) => {
                self.queue.submit([encoder.finish()]);
                output.present();
            }
            Err(_) => {
                // Any surface error (Lost, Outdated, or Timeout on first Chrome frame)
                // → reconfigure so the next tick can present successfully.
                self.renderer.reconfigure(&self.device);
            }
        }
    }

    /// Updates the vertical scroll offset (canvas pixels). Call on every scroll event.
    pub fn set_scroll(&self, scroll_y: f32) {
        self.renderer.set_scroll(&self.queue, scroll_y);
    }

    pub fn set_transition(&self, t: f32) {
        self.renderer.set_transition(&self.queue, t.clamp(0.0, 1.0));
    }

    /// Call whenever the canvas dimensions change.
    pub fn resize(&mut self, width: u32, height: u32) {
        if width == 0 || height == 0 {
            return;
        }
        let grid_pitch = aligned_pitch(width, self.target_pitch);
        let cell_px = grid_pitch.round() as u32;
        self.grid = Grid::new(width, height, cell_px);
        self.hires.resize_mask(&self.device, &self.queue, &self.grid);
        self.simulation.resize(
            &self.device, &self.queue, &self.grid,
            self.hires.mask_buffer(), self.hires.inward_buffer(),
        );
        self.hires.rebuild_boundary_for_resize(
            &self.device, &self.grid, &self.simulation.buf_a, &self.simulation.buf_b,
        );
        self.renderer.resize(
            &self.device,
            &self.queue,
            &self.grid,
            grid_pitch,
            &self.simulation,
        );
        if self.zones_json.is_empty() {
            self.renderer.clear_zones(&self.queue);
        } else if let Ok(entries) = parse_zone_entries_json(&self.zones_json, &self.grid) {
            self.renderer.set_zones(&self.queue, &entries);
        }
        if self.decals_json.is_empty() {
            self.renderer.clear_decals(&self.queue);
        } else if let Ok(entries) = parse_decal_entries_json(&self.decals_json, &self.grid) {
            self.renderer.set_decals(&self.queue, &entries);
        }
        if self.hires.is_active() {
            self.sync_hires_to_renderer();
        } else {
            self.renderer.clear_hires(&self.queue);
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
            self.simulation.flush_edits(&self.device, &self.queue);
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
        self.renderer.set_zones(&self.queue, &entries);
        Ok(())
    }

    /// Accepts a JSON array of decal records and uploads them to the GPU.
    /// Caches the payload for re-application after resize.
    pub fn set_decals_json(&mut self, decals_json: &str) -> Result<(), JsValue> {
        let entries = parse_decal_entries_json(decals_json, &self.grid)?;
        self.decals_json.clear();
        self.decals_json.push_str(decals_json);
        self.renderer.set_decals(&self.queue, &entries);
        Ok(())
    }

    /// Sets a hi-res region from rect + multiplier. Phase 1: single region only.
    pub fn set_hires_region(
        &mut self, x1: i32, y1: i32, x2: i32, y2: i32, multiplier: u32,
        show_grid: bool, show_base_grid: bool, show_border: bool,
    ) {
        self.hires_show_grid = show_grid;
        self.hires_show_base_grid = show_base_grid;
        self.hires_show_border = show_border;
        let rect = [x1, y1, x2, y2];
        self.hires.set_region(
            &self.device, &self.queue, &self.grid, rect, multiplier,
            &self.simulation.buf_a, &self.simulation.buf_b,
            self.simulation.frame,
        );
        self.sync_hires_to_renderer();
    }

    /// Pause or resume the hi-res simulation without destroying the region.
    ///
    /// On pause: copies current → previous so the repeating transition_t
    /// cycle produces no visual change while paused.
    ///
    /// On unpause: re-aligns the region's ping-pong frame counter to the
    /// base simulation's frame so bind-group parity is correct, then copies
    /// current → previous so the first resumed tick transitions cleanly.
    pub fn set_hires_paused(&mut self, paused: bool) {
        if paused == self.hires_paused { return; }
        if let Some(ref mut region) = self.hires.region {
            if !paused {
                // Resync parity before the next hires.tick() uses sim_frame.
                region.resync_frame(self.simulation.frame);
            }
            // In both directions: make prev == current so there's no stale
            // diff for the transition shader to animate.
            let src = region.current_visible_buffer() as *const wgpu::Buffer;
            let dst = region.previous_visible_buffer() as *const wgpu::Buffer;
            let size = region.buffer_bytes();
            let mut encoder = self.device.create_command_encoder(
                &wgpu::CommandEncoderDescriptor { label: Some("hires_pause_sync") },
            );
            // SAFETY: src and dst are different buffers (ping-pong pair).
            unsafe {
                encoder.copy_buffer_to_buffer(&*src, 0, &*dst, 0, size);
            }
            self.queue.submit([encoder.finish()]);
        }
        self.hires_paused = paused;
    }

    /// Update display flags without recreating the region.
    pub fn update_hires_flags(&mut self, show_grid: bool, show_base_grid: bool, show_border: bool) {
        self.hires_show_grid = show_grid;
        self.hires_show_base_grid = show_base_grid;
        self.hires_show_border = show_border;
        if self.hires.is_active() {
            self.sync_hires_to_renderer();
        }
    }

    pub fn clear_hires_region(&mut self) {
        self.hires.clear_region(&self.queue);
        self.renderer.clear_hires(&self.queue);
    }
}

// Private helpers (outside #[wasm_bindgen] impl block).
impl GpuGameOfLife {
    fn copy_hires_to_render(&self, encoder: &mut wgpu::CommandEncoder) {
        if let Some((src, size)) = self.hires.visible_fine_buffer() {
            let dst = self.renderer.hires_cells_buf();
            if dst.size() >= size {
                encoder.copy_buffer_to_buffer(src, 0, dst, 0, size);
            }
        }
        if let Some((src, size)) = self.hires.previous_fine_buffer() {
            let dst = self.renderer.hires_cells_prev_buf();
            if dst.size() >= size {
                encoder.copy_buffer_to_buffer(src, 0, dst, 0, size);
            }
        }
    }

    fn sync_hires_to_renderer(&mut self) {
        if let Some((rect, mult, cols, wpr)) = self.hires.render_meta() {
            let meta = HiResGlobalMetaGpu { region_count: 1, ..Default::default() };
            let region = HiResRegionMetaGpu {
                rect, multiplier: mult, buffer_offset: 0, cols, wpr,
                flags: (if self.hires_show_grid { 1u32 } else { 0 })
                     | (if self.hires_show_base_grid { 2u32 } else { 0 })
                     | (if self.hires_show_border { 4u32 } else { 0 }),
                pad0: 0, pad1: 0, pad2: 0,
            };
            let cells_size = self.hires.visible_fine_buffer()
                .map(|(_, s)| s).unwrap_or(4);
            self.renderer.set_hires(
                &self.device, &self.queue, &self.simulation,
                &meta, &[region], cells_size,
            );
        }
    }
}
