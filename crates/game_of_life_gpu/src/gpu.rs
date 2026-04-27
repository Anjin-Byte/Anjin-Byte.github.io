use game_of_life_core::World;
use wasm_bindgen::prelude::*;

use crate::context::GpuContext;
use crate::grid::Grid;
use crate::renderer::GpuRenderer;
use crate::renderer::types::ThemeParams;
use crate::simulation::Simulation;
use crate::zones::parse_zone_entries_json;

/// World dimensions in cells.  Fixed at startup; never resize-derived.
/// 1024×1024 cells = ~1M cells; 256 KB ping-pong total.  See
/// docs/methuselah-seeding.md §9 (memory math) for sizing rationale.
const WORLD_COLS: u32 = 1024;
const WORLD_ROWS: u32 = 1024;

/// Physical size of one world cell in canvas device pixels.  Constant —
/// no longer derived from canvas width via aligned_pitch.  At cell_px=32
/// the world covers 32k × 32k device pixels, ~8× the largest reasonable
/// viewport in each direction, so the viewport never sees the world edge
/// in normal use.
const CELL_PX: u32 = 32;

/// WebGPU-accelerated Game of Life, exported to JavaScript.
///
/// Init order required by wgpu ≥ 22:
///   1. Instance
///   2. Surface  ← must exist before adapter request
///   3. Adapter (compatible_surface = &surface)
///   4. Device + Queue
///
/// `ctx` holds the shared device + queue.  `world` owns the canonical
/// cell state (CPU-side); `simulation` mirrors that state into GPU
/// buffers and runs the compute shader.  Resize updates the renderer's
/// viewport uniforms only — the World and its GPU buffers are never
/// reallocated, which is what makes pattern stamps survive resize.
#[wasm_bindgen]
pub struct GpuGameOfLife {
    ctx: GpuContext,
    grid: Grid,
    /// Canonical CPU-side cell state.  Owned here so future stamp
    /// operations (Phase 3) can mutate it then sync to the GPU mirror
    /// via `simulation.sync_world_to_visible(...)`.  Currently no
    /// post-init reader, hence dead_code allow.
    #[allow(dead_code)]
    world: World,
    simulation: Simulation,
    renderers: Vec<GpuRenderer>,
    zones_json: String,  // latest sanitized zone payload from the app
}

/// Shared init path: creates context + subsystems from a surface.
/// Called by both `new` (HtmlCanvasElement) and `new_offscreen` (OffscreenCanvas).
async fn from_surface(
    instance: wgpu::Instance,
    surface: wgpu::Surface<'static>,
    viewport_canvas_w: u32,
    viewport_canvas_h: u32,
) -> Result<GpuGameOfLife, JsValue> {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    let (ctx, adapter) = GpuContext::from_compatible_surface(&instance, &surface).await?;

    // World is allocated once at startup; never reallocated on resize.
    // The seed (0xdeadbeef) preserves visual continuity with the
    // pre-decouple LCG-fill that produced the same bytes.
    let world = World::from_seed(WORLD_COLS, WORLD_ROWS, 0xdeadbeef);
    let grid = Grid::from_world(&world, viewport_canvas_w, viewport_canvas_h, CELL_PX);
    let simulation = Simulation::new(&ctx.device, &ctx.queue, &grid, &world);
    let grid_pitch = CELL_PX as f32;
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
        world,
        simulation,
        renderers: vec![renderer],
        zones_json: String::new(),
    })
}

#[wasm_bindgen]
impl GpuGameOfLife {
    /// Create from an HtmlCanvasElement (main-thread usage).
    ///
    /// `_grid_pitch` is preserved in the JS-facing signature for backward
    /// compatibility but is now ignored — cell pixel size is fixed by the
    /// CELL_PX constant.  Drop the parameter from the worker side in a
    /// future cleanup.
    pub async fn new(
        canvas: web_sys::HtmlCanvasElement,
        _grid_pitch: f32,
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
        from_surface(instance, surface, width, height).await
    }

    /// Create from an OffscreenCanvas (Web Worker usage).
    ///
    /// `_grid_pitch` ignored as in `new` — see comment there.
    pub async fn new_offscreen(
        canvas: web_sys::OffscreenCanvas,
        _grid_pitch: f32,
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
        from_surface(instance, surface, width, height).await
    }

    /// Presents the current simulation state without advancing a generation.
    /// Call this on render frames that fall between simulation ticks so the
    /// display stays at vsync rate while the simulation runs at a lower rate.
    pub fn render_only(&mut self) {
        self.present();
    }

    /// Advances one GoL generation and presents.
    ///
    /// Split into phases with separate `queue.submit()` calls so that
    /// storage buffer writes are guaranteed visible between phases.
    pub fn tick_and_render(&mut self) {
        self.flush_edits_if_pending();
        self.snapshot_pre_tick();
        self.tick_base();
        self.present();
    }

    /// Updates the vertical scroll offset (canvas pixels). Call on every scroll event.
    pub fn set_scroll(&self, scroll_y: f32) {
        self.primary().set_scroll(&self.ctx.queue, scroll_y);
    }

    pub fn set_transition(&self, t: f32) {
        self.primary().set_transition(&self.ctx.queue, t.clamp(0.0, 1.0));
    }

    /// Update the viewport when the canvas dimensions change.  The world
    /// itself is fixed, so this only updates the renderer's viewport
    /// uniforms — no buffer reallocation, no simulation reset.  Pattern
    /// stamps survive resize unchanged.
    pub fn resize(&mut self, width: u32, height: u32) {
        if width == 0 || height == 0 {
            return;
        }
        // Viewport origin stays at (0, 0) for now — the world's top-left
        // corner.  A future enhancement could pan the viewport based on
        // scroll, but that's a Phase 3 concern.
        self.grid.set_viewport(width, height, 0, 0);
        self.renderers[0].resize(&self.ctx.device, &self.ctx.queue, &self.grid);
        // Zones reference world cells, not canvas pixels — re-parse if the
        // user-set zones list is non-empty so the renderer's bounds are
        // updated against current grid dims.
        if self.zones_json.is_empty() {
            self.renderers[0].clear_zones(&self.ctx.queue);
        } else if let Ok(entries) = parse_zone_entries_json(&self.zones_json, &self.grid) {
            self.renderers[0].set_zones(&self.ctx.queue, &entries);
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
        // Now constant — cell pixel size is fixed at world creation.
        CELL_PX as f32
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

    /// Apply a theme palette. Accepts a JSON object with OKLab endpoints and
    /// grid lerp positions; all color relationships are derived from these.
    /// Schema: `{ surface: [L,a,b], ink: [L,a,b], minor_t, major_t, border_t, ink_opacity }`.
    pub fn set_theme_json(&mut self, theme_json: &str) -> Result<(), JsValue> {
        let theme = parse_theme_json(theme_json)?;
        self.renderers[0].set_theme(&self.ctx.queue, &theme);
        Ok(())
    }
}

// ── Renderer accessors ───────────────────────────────────────────────────────
impl GpuGameOfLife {
    fn primary(&self) -> &GpuRenderer { &self.renderers[0] }
}

// ── Composable GPU phases ────────────────────────────────────────────────────
//
// Each phase owns a single concern (flush, snapshot, tick, present).
// The public entry points (`tick_and_render`, `render_only`) compose these
// phases in the order required by their scheduling context.  Each phase that
// dispatches GPU work creates its own CommandEncoder and calls
// `queue.submit()` to guarantee storage buffer visibility between phases.
impl GpuGameOfLife {
    /// Flush any pending cell edits to the GPU.
    fn flush_edits_if_pending(&mut self) {
        if self.simulation.has_pending_edits() {
            self.simulation.flush_edits(&self.ctx.device, &self.ctx.queue);
        }
    }

    /// Snapshot pre-tick state for transition animation.
    fn snapshot_pre_tick(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_snapshot") },
        );
        self.renderers[0].capture_previous_state(
            &mut enc, self.simulation.current_visible_buffer(), &self.grid,
        );
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

    /// Render the current state and present the frame.
    fn present(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_present") },
        );
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
}

fn parse_theme_json(theme_json: &str) -> Result<ThemeParams, JsValue> {
    use js_sys::{Array, Reflect};

    let parsed = js_sys::JSON::parse(theme_json)
        .map_err(|_| JsValue::from_str("Invalid theme JSON payload"))?;
    if !parsed.is_object() {
        return Err(JsValue::from_str("Theme JSON must be an object"));
    }

    let read_lab = |key: &str| -> Result<[f32; 4], JsValue> {
        let v = Reflect::get(&parsed, &JsValue::from_str(key))
            .map_err(|_| JsValue::from_str(&format!("theme.{key} missing")))?;
        if !Array::is_array(&v) {
            return Err(JsValue::from_str(&format!("theme.{key} must be [L,a,b]")));
        }
        let arr = Array::from(&v);
        if arr.length() < 3 {
            return Err(JsValue::from_str(&format!("theme.{key} needs [L,a,b]")));
        }
        let l = arr.get(0).as_f64().unwrap_or(0.0) as f32;
        let a = arr.get(1).as_f64().unwrap_or(0.0) as f32;
        let b = arr.get(2).as_f64().unwrap_or(0.0) as f32;
        Ok([l, a, b, 0.0])
    };
    let read_f32 = |key: &str, default: f32| -> f32 {
        Reflect::get(&parsed, &JsValue::from_str(key))
            .ok()
            .and_then(|v| v.as_f64())
            .map(|n| n as f32)
            .unwrap_or(default)
    };

    Ok(ThemeParams {
        surface: read_lab("surface")?,
        ink: read_lab("ink")?,
        minor_t: read_f32("minor_t", 0.08),
        major_t: read_f32("major_t", 0.14),
        border_t: read_f32("border_t", 0.24),
        ink_opacity: read_f32("ink_opacity", 0.88),
        grain_intensity: read_f32("grain_intensity", 0.0),
        _pad0: 0.0, _pad1: 0.0, _pad2: 0.0,
    })
}
