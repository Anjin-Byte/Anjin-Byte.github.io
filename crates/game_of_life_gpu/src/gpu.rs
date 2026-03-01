use wasm_bindgen::prelude::*;

use crate::grid::Grid;
use crate::renderer::GpuRenderer;
use crate::simulation::Simulation;

/// WebGPU-accelerated Game of Life, exported to JavaScript.
///
/// Init order required by wgpu ≥ 22:
///   1. Instance
///   2. Surface  ← must exist before adapter request
///   3. Adapter (compatible_surface = &surface)
///   4. Device + Queue
#[wasm_bindgen]
pub struct GpuGameOfLife {
    device:     wgpu::Device,
    queue:      wgpu::Queue,
    grid:       Grid,
    simulation: Simulation,
    renderer:   GpuRenderer,
}

/// Shared init path: requests adapter + device, builds grid/simulation/renderer.
/// Called by both `new` (HtmlCanvasElement) and `new_offscreen` (OffscreenCanvas).
async fn from_surface(
    instance: wgpu::Instance,
    surface:  wgpu::Surface<'static>,
    width:    u32,
    height:   u32,
    cell_px:  u32,
) -> Result<GpuGameOfLife, JsValue> {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    let adapter = instance
        .request_adapter(&wgpu::RequestAdapterOptions {
            power_preference:       wgpu::PowerPreference::HighPerformance,
            compatible_surface:     Some(&surface),
            force_fallback_adapter: false,
        })
        .await
        .ok_or_else(|| JsValue::from_str("No WebGPU adapter found"))?;

    let (device, queue) = adapter
        .request_device(&wgpu::DeviceDescriptor {
            label:             Some("gol_device"),
            required_features: wgpu::Features::empty(),
            required_limits:   wgpu::Limits::default(),
            memory_hints:      wgpu::MemoryHints::default(),
        }, None)
        .await
        .map_err(|e| JsValue::from_str(&e.to_string()))?;

    let grid       = Grid::new(width, height, cell_px);
    let simulation = Simulation::new(&device, &queue, &grid);
    let renderer   = GpuRenderer::new(&device, &adapter, surface, &grid,
                                      &simulation.buf_a, &simulation.buf_b);

    Ok(GpuGameOfLife { device, queue, grid, simulation, renderer })
}

#[wasm_bindgen]
impl GpuGameOfLife {
    /// Create from an HtmlCanvasElement (main-thread usage).
    pub async fn new(
        canvas:  web_sys::HtmlCanvasElement,
        cell_px: u32,
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
        from_surface(instance, surface, width, height, cell_px).await
    }

    /// Create from an OffscreenCanvas (Web Worker usage).
    pub async fn new_offscreen(
        canvas:  web_sys::OffscreenCanvas,
        cell_px: u32,
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
        from_surface(instance, surface, width, height, cell_px).await
    }

    /// Advances one GoL generation and presents the result to the canvas.
    pub fn tick_and_render(&mut self) {
        let mut encoder = self.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_encoder") }
        );

        self.simulation.tick(&mut encoder, &self.grid);

        match self.renderer.render(&mut encoder, self.simulation.frame) {
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

    /// Call whenever the canvas dimensions change.
    pub fn resize(&mut self, width: u32, height: u32) {
        if width == 0 || height == 0 { return; }
        self.grid = Grid::new(width, height, self.grid.cell_px);
        self.simulation.resize(&self.device, &self.queue, &self.grid);
        self.renderer.resize(
            &self.device, &self.queue, &self.grid,
            &self.simulation.buf_a, &self.simulation.buf_b,
        );
    }
}
