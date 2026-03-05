use wasm_bindgen::prelude::*;

use crate::decals::parse_decal_entries_json;
use crate::grid::Grid;
use crate::renderer::GpuRenderer;
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
    renderer: GpuRenderer,
    target_pitch: f32,   // stored as reference for resize recomputation
    zones_json: String,  // latest sanitized zone payload from the app
    decals_json: String, // latest sanitized decal payload from the app
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
    let simulation = Simulation::new(&device, &queue, &grid);
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
        renderer,
        target_pitch,
        zones_json: String::new(),
        decals_json: String::new(),
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
        self.simulation.tick(&mut encoder, &self.grid);

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
        self.simulation
            .resize(&self.device, &self.queue, &self.grid);
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
}
