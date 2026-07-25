use std::collections::VecDeque;

use game_of_life_core::{
    pick_random_stamp_spaced, recommended_initial_count, seed_world_with_methuselahs, stamp_cells,
    SpatialGrid, World, MAX_REJECTION_ATTEMPTS, MIN_PATTERN_DISTANCE, SPATIAL_BUCKET_SIZE,
};
use rand::SeedableRng;
use rand_xoshiro::Xoshiro256StarStar;
use wasm_bindgen::prelude::*;

use crate::context::GpuContext;
use crate::grid::Grid;
use crate::perf::{self, TimestampPanel};
use crate::renderer::GpuRenderer;
use crate::renderer::types::ThemeParams;
use crate::simulation::Simulation;
use crate::zones::{deserialize_zone_inputs, zone_entries_from_inputs, BlankZoneInput};

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

/// Base ticks between auto-reseed events.  At `TICK_EVERY = 175` frames
/// per base tick (≈2.9 s on a 60 Hz display), an interval of 1 means
/// the auto-reseed fires once per base tick.
///
/// Calibration rationale: world is 1024×1024 = ~1M cells, viewport is
/// ≈8000 cells (≈0.77% of world).  Stamps land uniformly at random
/// across the world (per docs/methuselah-seeding.md §7 — "no
/// location-picking heuristic"), so most stamps are off-screen.
/// To hit a visible-cadence target of ~1 stamp per minute in the
/// viewport, we need ≈2 world-wide stamps/sec; with a 2.9-s base tick
/// that's `RESEED_BATCH_SIZE = 6` stamps per reseed event.
const RESEED_INTERVAL_TICKS: u32 = 1;

/// Number of Methuselahs stamped per auto-reseed event.  Stamps are
/// scattered with `MIN_PATTERN_DISTANCE` spacing where the rejection
/// budget allows; visible cadence scales with this × visibility ratio.
/// Calibration math (recognizable lifetime ~50 ticks, viewport ≈0.77%):
///   visible_recognizable ≈ batch × 0.0077 × 50
/// At batch=20 → ~8 visible recognizable; at batch=500 → ~190 (mostly
/// chaos overlay); at the current value, the field is intentionally
/// saturated.  Dial down for "named-pattern visibility" aesthetic.
const RESEED_BATCH_SIZE: u32 = 50;

/// Stamps placed per frame while draining a reseed cycle (see `pump_reseed`).
///
/// At 1/frame the batch finishes in `RESEED_BATCH_SIZE` frames — 50 of the ~175
/// in a tick interval, so a cycle always completes with a wide margin before
/// the next one arms. Each stamp measured ~1.7ms in the burst that motivated
/// this (84ms / 50), which as a per-frame slice is comfortably inside even a
/// 120Hz budget, whereas the burst was 10x a whole frame.
///
/// Raising this shortens the drain but thickens the slice; the margin against
/// `TICK_EVERY` is the thing to preserve if it ever changes.
const RESEED_STAMPS_PER_FRAME: u32 = 1;

/// Bound on remembered recent stamp positions used as the rejection
/// set for `pick_random_stamp_spaced`.  Old stamps' chaos clouds
/// outgrow `MIN_PATTERN_DISTANCE` well before falling out of this
/// window, so trimming costs no spacing accuracy.  Sized to ~10× the
/// batch size of the codex-recommended cadence; for very high
/// `RESEED_BATCH_SIZE` values we just don't enforce spacing across
/// the entire batch — the early stamps in a tick get spaced, later
/// stamps may collide with them.  That's an acceptable degradation
/// given the user has already opted into "saturated" by raising the
/// batch this high.
const RECENT_STAMP_MEMORY: usize = 200;

/// Base ticks between GPU per-pass timestamp samples.  At
/// `TICK_EVERY = 175` frames per base tick that's roughly one
/// breakdown per `SAMPLE_INTERVAL_TICKS × TICK_EVERY` frames.  Set to
/// 1 so the perf panel produces a fresh sample every base tick (~3 s
/// at 60 Hz), aligning with the worker's existing perf-summary log
/// cadence.  Sampling is gated by `TimestampPanel::enabled` and only
/// activates when the adapter granted `TIMESTAMP_QUERY`.
const SAMPLE_INTERVAL_TICKS: u32 = 1;

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
    /// Canonical CPU-side cell state.  Used at construction to seed the
    /// GPU buffers and consulted at runtime for `World::cols/rows`
    /// during auto-reseed.  After init, the GPU buffer evolves
    /// independently — `world` is intentionally not kept in sync with
    /// per-tick GPU state.  Stamps update both: they queue OR-edits to
    /// the GPU buffer (live) and call World::stamp on the CPU side
    /// (so the stored seed-state stays semantically representative).
    world: World,
    simulation: Simulation,
    renderers: Vec<GpuRenderer>,
    // Cached deserialized zone inputs. Grid-relative rects are re-derived from
    // these on resize (below), so the parsed inputs are cached, not GPU entries.
    zones_input: Vec<BlankZoneInput>,
    /// RNG for auto-reseed pattern/position/orientation selection.
    /// Seeded from a u32 supplied by the JS caller at construction.
    rng: Xoshiro256StarStar,
    /// Count of base ticks since construction.  Drives the periodic
    /// auto-reseed in `tick_and_render`.
    tick_count: u32,
    /// Ring of recent stamp origins used as the rejection set for
    /// `pick_random_stamp_spaced` so newly-stamped patterns don't
    /// pile up on each other and immediately collide before
    /// reaching their named-pattern recognizable phase.
    recent_stamps: VecDeque<(u32, u32)>,
    /// Stamps still owed for the current reseed cycle.  The batch is placed a
    /// few at a time across the frames following a base tick rather than all at
    /// once — see `pump_reseed`.
    reseed_remaining: u32,
    /// Rejection set for the in-flight reseed cycle, built ONCE when the cycle
    /// is armed and carried across the frames that drain it.  Rebuilding it per
    /// frame would re-insert every remembered stamp (`RECENT_STAMP_MEMORY`)
    /// dozens of times and cost far more in total than the burst it replaced;
    /// `SpatialGrid` has no removal, so it cannot be kept permanently either.
    reseed_grid: Option<SpatialGrid>,
    /// Per-pass GPU timing collector.  Disabled (no-op) on browsers
    /// that didn't grant `TIMESTAMP_QUERY`.
    timestamp_panel: TimestampPanel,
    /// Wall-clock ms spent in each phase of `from_surface`.  Read once
    /// after construction by the worker and forwarded into the
    /// `startup_breakdown` message; not used at runtime.
    init_phases: InitPhases,
    /// DEV split-timing of the most recent `tick_and_render`: ms (Date::now
    /// resolution) spent ARMING the reseed (CPU) and in the present/submit
    /// block (GPU/compositor back-pressure).  Lets the worker attribute the
    /// periodic tick spike to CPU reseed vs GPU present.  `0.0` when a tick
    /// didn't reseed.  Since stamp placement moved to `pump_reseed`, the reseed
    /// half now covers only the rejection-set build — the placement cost is
    /// spread across later frames and shows up in ordinary frame cost instead.
    last_reseed_ms: f64,
    last_present_ms: f64,
}

/// Wall-clock breakdown of `from_surface` phases.  All values in
/// milliseconds, measured against `js_sys::Date::now()` (millisecond
/// resolution — sufficient for 100s-of-ms-scale init phases).
#[derive(Clone, Copy, Default)]
struct InitPhases {
    /// Adapter request + device creation (`GpuContext::from_compatible_surface`).
    device_request_ms: f64,
    /// `TimestampPanel::new` — query set + resolve/readback buffers
    /// when the feature was granted, otherwise a no-op.
    panel_init_ms: f64,
    /// `World::new` allocation + `seed_world_with_methuselahs` (the
    /// recommended_initial_count stamps with rejection sampling).
    seeding_ms: f64,
    /// `Grid::from_world` + `Simulation::new` (compute pipeline build,
    /// ping-pong buffers, frozen buffer, bind groups).
    simulation_init_ms: f64,
    /// `GpuRenderer::new` (render pipeline build, paper / theme params,
    /// noise texture, overlay bind groups, surface configure).
    renderer_init_ms: f64,
}

/// Shared init path: creates context + subsystems from a surface.
/// Called by both `new` (HtmlCanvasElement) and `new_offscreen` (OffscreenCanvas).
///
/// `seed` is a u32 from the JS caller.  We widen it to u64 by
/// concatenating `seed | (!seed << 32)` so all 64 bits of the
/// Xoshiro256 internal state get non-zero contribution — a 0 seed
/// would otherwise leave half the state zero, producing a less-mixed
/// initial output.
async fn from_surface(
    instance: wgpu::Instance,
    surface: wgpu::Surface<'static>,
    viewport_canvas_w: u32,
    viewport_canvas_h: u32,
    seed: u32,
) -> Result<GpuGameOfLife, JsValue> {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    // Wall-clock phase markers — bracketed around each major step so the
    // worker can post a sub-`new_offscreen` breakdown via the existing
    // `startup_breakdown` message.  ms-resolution from `Date::now()` is
    // fine; phases here are 10s-to-1000s of ms.
    let t0 = js_sys::Date::now();
    let (ctx, adapter) = GpuContext::from_compatible_surface(&instance, &surface).await?;
    let t1 = js_sys::Date::now();

    let timestamp_panel = TimestampPanel::new(
        &ctx.device,
        &ctx.queue,
        ctx.timestamp_query_supported,
    );
    let t2 = js_sys::Date::now();

    // RNG drives both the initial Methuselah scatter and the periodic
    // auto-reseed.  Using one RNG for both makes the entire session
    // reproducible from the JS-side seed (helpful for future URL-seeded
    // determinism — see methuselah-seeding.md §10 q7).
    let mut rng = Xoshiro256StarStar::seed_from_u64(
        u64::from(seed) | (u64::from(!seed) << 32),
    );

    // World is allocated empty, then sprinkled with Methuselah patterns.
    // Allocated once at startup; never reallocated on resize (Phase 1).
    let mut world = World::new(WORLD_COLS, WORLD_ROWS);
    let n_seeds = recommended_initial_count(WORLD_COLS, WORLD_ROWS);
    seed_world_with_methuselahs(&mut world, &mut rng, n_seeds);
    let t3 = js_sys::Date::now();

    let grid = Grid::from_world(&world, viewport_canvas_w, viewport_canvas_h, CELL_PX);
    let simulation = Simulation::new(&ctx.device, &ctx.queue, &grid, &world);
    let t4 = js_sys::Date::now();

    let grid_pitch = CELL_PX as f32;
    let renderer = GpuRenderer::new(
        &ctx.device,
        &ctx.queue,
        &adapter,
        surface,
        &grid,
        grid_pitch,
        &simulation.packed_buf,
    );
    let t5 = js_sys::Date::now();

    let init_phases = InitPhases {
        device_request_ms:  t1 - t0,
        panel_init_ms:      t2 - t1,
        seeding_ms:         t3 - t2,
        simulation_init_ms: t4 - t3,
        renderer_init_ms:   t5 - t4,
    };

    Ok(GpuGameOfLife {
        ctx,
        grid,
        world,
        simulation,
        renderers: vec![renderer],
        zones_input: Vec::new(),
        rng,
        tick_count: 0,
        recent_stamps: VecDeque::with_capacity(RECENT_STAMP_MEMORY),
        reseed_remaining: 0,
        reseed_grid: None,
        timestamp_panel,
        init_phases,
        last_reseed_ms: 0.0,
        last_present_ms: 0.0,
    })
}

#[wasm_bindgen]
impl GpuGameOfLife {
    /// Create from an HtmlCanvasElement (main-thread usage).
    ///
    /// `_grid_pitch` is preserved in the JS-facing signature for backward
    /// compatibility but is now ignored — cell pixel size is fixed by the
    /// CELL_PX constant.  `seed` initialises the auto-reseed RNG; the JS
    /// caller typically passes `Math.floor(Math.random() * 0x1_0000_0000)`
    /// for per-session randomness, or a fixed value for reproducibility.
    pub async fn new(
        canvas: web_sys::HtmlCanvasElement,
        _grid_pitch: f32,
        seed: u32,
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
        from_surface(instance, surface, width, height, seed).await
    }

    /// Create from an OffscreenCanvas (Web Worker usage).  See `new`
    /// for the `_grid_pitch` and `seed` parameter notes.
    pub async fn new_offscreen(
        canvas: web_sys::OffscreenCanvas,
        _grid_pitch: f32,
        seed: u32,
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
        from_surface(instance, surface, width, height, seed).await
    }

    /// Presents the current simulation state without advancing a generation.
    /// Call this on render frames that fall between simulation ticks so the
    /// display stays at vsync rate while the simulation runs at a lower rate.
    pub fn render_only(&mut self) {
        // Drain a slice of any armed reseed cycle. This is the frame type the
        // amortisation rides on: `render_only` runs on ~174 of every 175 frames,
        // so there is ample room to place the batch a stamp at a time. Queued
        // cells are not flushed here (only `tick_and_render` flushes), so they
        // still land on screen at the next base tick exactly as before.
        self.pump_reseed(RESEED_STAMPS_PER_FRAME);
        self.present();
    }

    /// Advances one GoL generation and presents.
    ///
    /// Split into phases with separate `queue.submit()` calls so that
    /// storage buffer writes are guaranteed visible between phases.
    /// Periodic auto-reseed (every `RESEED_INTERVAL_TICKS` base ticks)
    /// queues a Methuselah stamp; the OR-edit shader applies it on the
    /// next `flush_edits_if_pending()` call.
    pub fn tick_and_render(&mut self) {
        // Drain any prior frame's timestamp readback into `latest`.
        self.timestamp_panel.poll();

        // Decide whether this frame samples GPU pass timings.  `try_start`
        // also reserves the query set (returns false if a previous
        // sample's readback hasn't completed yet).
        let sample = self.tick_count.is_multiple_of(SAMPLE_INTERVAL_TICKS)
            && self.timestamp_panel.try_start();

        // Build the sample mask from passes that will actually fire this
        // frame.  Edit passes only run when their queue is non-empty; we
        // don't want to claim timestamps for skipped passes.
        let mut mask = perf::PassMask::default();
        if sample {
            if self.simulation.has_pending_edits() {
                mask.set(perf::PassMask::XOR_EDIT);
            }
            if self.simulation.has_pending_set_edits() {
                mask.set(perf::PassMask::OR_EDIT);
            }
            mask.set(perf::PassMask::COMPUTE_TICK);
            mask.set(perf::PassMask::RENDER_PASS);
        }

        // Each phase fetches a fresh query-set borrow so the &self borrows
        // don't outlive their phase call (allowing the panel to be
        // mutably borrowed for `finish` / `map_after_submit` later).
        if self.simulation.has_pending_edits() || self.simulation.has_pending_set_edits() {
            let qs = if sample { self.timestamp_panel.query_set() } else { None };
            self.simulation.flush_edits(&self.ctx.device, &self.ctx.queue, qs);
        }
        // (No pre-tick snapshot pass: the tick shader writes both cell-state
        // planes into the packed buffer itself — new state as current, its
        // src read as previous.)
        {
            let mut enc = self.ctx.device.create_command_encoder(
                &wgpu::CommandEncoderDescriptor { label: Some("gol_sim_tick") },
            );
            let qs = if sample { self.timestamp_panel.query_set() } else { None };
            self.simulation.tick(&mut enc, &self.grid, qs);
            self.ctx.queue.submit([enc.finish()]);
        }
        self.tick_count = self.tick_count.wrapping_add(1);
        self.last_reseed_ms = 0.0;
        if self.tick_count.is_multiple_of(RESEED_INTERVAL_TICKS) {
            let reseed_t0 = js_sys::Date::now();
            // Arm only — the stamps themselves are placed a slice at a time by
            // `pump_reseed` on the following frames. Deliberately no pump here:
            // the tick frame already carries the compute dispatch and present,
            // so it is the worst frame to add work to.
            self.arm_reseed();
            self.last_reseed_ms = js_sys::Date::now() - reseed_t0;
        }
        // Present + (optionally) resolve query set into the present's
        // encoder so the resolve submit happens after all the timestamp
        // writes are visible on the GPU timeline.  Timed separately from the
        // CPU reseed above so the worker can attribute the periodic tick spike
        // to GPU/compositor back-pressure (get_current_texture / present).
        let present_t0 = js_sys::Date::now();
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_present") },
        );
        let qs = if sample { self.timestamp_panel.query_set() } else { None };
        let render_result = self.renderers[0].render(&mut enc, qs);
        match render_result {
            Ok(output) => {
                if sample {
                    self.timestamp_panel.finish(&mut enc, mask);
                }
                self.ctx.queue.submit([enc.finish()]);
                output.present();
                if sample {
                    self.timestamp_panel.map_after_submit();
                }
            }
            Err(_) => {
                self.renderers[0].reconfigure(&self.ctx.device);
            }
        }
        self.last_present_ms = js_sys::Date::now() - present_t0;
    }

    /// Updates the vertical scroll offset (canvas pixels). Call on every scroll event.
    pub fn set_scroll(&self, scroll_y: f32) {
        self.primary().set_scroll(&self.ctx.queue, scroll_y);
    }

    /// Updates the full 2-D camera offset (canvas pixels) so the grid pans in
    /// lockstep with the content. The 1024² toroidal world wraps on both axes,
    /// so panning in any direction is edgeless.
    pub fn set_camera(&self, x: f32, y: f32) {
        self.primary().set_camera(&self.ctx.queue, x, y);
    }

    pub fn set_transition(&self, t: f32) {
        self.primary().set_transition(&self.ctx.queue, t.clamp(0.0, 1.0));
    }

    /// Drive the first-paint cell-ink fade.  `t` ramps 0 → 1 over ~1.2 s
    /// after the first painted frame, gradually revealing cells while the
    /// paper / grid layers are already at full opacity.  Worker stops
    /// calling this once `t` saturates at 1.0.
    pub fn set_init_fade(&self, t: f32) {
        self.primary().set_init_fade(&self.ctx.queue, t.clamp(0.0, 1.0));
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
        if self.zones_input.is_empty() {
            self.renderers[0].clear_zones(&self.ctx.queue);
        } else {
            let entries = zone_entries_from_inputs(&self.zones_input, &self.grid);
            self.renderers[0].set_zones(&self.ctx.queue, &entries);
        }
    }

    /// Queue a cell toggle.  `cx` and `cy` are world-cell coordinates
    /// already wrapped into `[0, world_cols) × [0, world_rows)` by the
    /// JS caller (see `wrapCell` in `app/src/utils/gridCoords.ts`).
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
            // No timestamp sampling on the click-toggle path — it's
            // user-driven and not on the perf-summary cadence.
            self.simulation.flush_edits(&self.ctx.device, &self.ctx.queue, None);
        }
        self.render_only();
    }

    /// Return grid dimensions for the main thread's coordinate mapping.
    pub fn world_cols(&self) -> u32 {
        self.grid.world_cols
    }
    pub fn world_rows(&self) -> u32 {
        self.grid.world_rows
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

    /// True iff the adapter granted `TIMESTAMP_QUERY` and the panel is
    /// actually sampling.  When false, the `last_*_pass_ms` getters
    /// return `None` for every call.  The worker uses this to log a
    /// one-time hint about enabling the dev flag.
    pub fn timestamp_query_supported(&self) -> bool {
        self.timestamp_panel.enabled()
    }

    /// Most-recent compute-tick GPU duration in milliseconds, or `None`
    /// if no sample has completed yet (or the feature is unavailable).
    pub fn last_compute_tick_ms(&self) -> Option<f64> {
        self.timestamp_panel.latest().and_then(|d| d.compute_tick_ms())
    }
    pub fn last_xor_edit_ms(&self) -> Option<f64> {
        self.timestamp_panel.latest().and_then(|d| d.xor_edit_ms())
    }
    pub fn last_or_edit_ms(&self) -> Option<f64> {
        self.timestamp_panel.latest().and_then(|d| d.or_edit_ms())
    }
    pub fn last_render_pass_ms(&self) -> Option<f64> {
        self.timestamp_panel.latest().and_then(|d| d.render_pass_ms())
    }

    /// DEV: wall-clock ms of the most recent `arm_reseed()` (CPU) inside
    /// `tick_and_render`; `0.0` on ticks where no reseed fired. Expect this to
    /// be small now — it times the rejection-set build only, not the stamping.
    pub fn last_reseed_ms(&self) -> f64 { self.last_reseed_ms }
    /// DEV: wall-clock ms of the most recent present/submit block (render +
    /// `get_current_texture` + present) — i.e. GPU/compositor back-pressure.
    pub fn last_present_ms(&self) -> f64 { self.last_present_ms }

    /// Sub-phase wall-clock breakdown of `from_surface`.  Read once after
    /// init by the worker for inclusion in the `startup_breakdown`
    /// message; each value is ms.  See `InitPhases` field docs for what
    /// each phase covers.
    pub fn init_device_request_ms(&self) -> f64  { self.init_phases.device_request_ms }
    pub fn init_panel_ms(&self) -> f64           { self.init_phases.panel_init_ms }
    pub fn init_seeding_ms(&self) -> f64         { self.init_phases.seeding_ms }
    pub fn init_simulation_ms(&self) -> f64      { self.init_phases.simulation_init_ms }
    pub fn init_renderer_ms(&self) -> f64        { self.init_phases.renderer_init_ms }

    /// Accepts a JS array of blank-zone records (deserialized via serde), caches
    /// the typed inputs, and uploads the derived GPU entries. Malformed payloads
    /// fail at the boundary with a typed `JsError`.
    pub fn set_zones(&mut self, zones: JsValue) -> Result<(), JsError> {
        let inputs = deserialize_zone_inputs(zones)?;
        let entries = zone_entries_from_inputs(&inputs, &self.grid);
        self.zones_input = inputs;
        self.renderers[0].set_zones(&self.ctx.queue, &entries);
        Ok(())
    }

    /// Apply a theme palette (a JS object, deserialized via serde). OKLab
    /// endpoints + grid lerp positions; all color relationships derive from these.
    /// Schema: `{ surface: [L,a,b], ink: [L,a,b], minor_t, major_t, ink_opacity, grain_intensity }`.
    pub fn set_theme(&mut self, theme: JsValue) -> Result<(), JsError> {
        let params = theme_params_from_value(theme)?;
        self.renderers[0].set_theme(&self.ctx.queue, &params);
        Ok(())
    }
}

// ── Renderer accessors ───────────────────────────────────────────────────────
impl GpuGameOfLife {
    fn primary(&self) -> &GpuRenderer { &self.renderers[0] }
}

// ── Composable GPU phases ────────────────────────────────────────────────────
//
// Each phase owns a single concern (flush, tick, present).
// The public entry points (`tick_and_render`, `render_only`) compose these
// phases in the order required by their scheduling context.  Each phase that
// dispatches GPU work creates its own CommandEncoder and calls
// `queue.submit()` to guarantee storage buffer visibility between phases.
impl GpuGameOfLife {
    /// Stamp `RESEED_BATCH_SIZE` random Methuselahs across the toroidal
    /// world, with `MIN_PATTERN_DISTANCE` spacing enforced against the
    /// most-recent stamps.  Spacing protects the "named-pattern
    /// recognizable" phase — without it, two stamps landing within
    /// ~5 cells of each other would collide before reaching gen 10
    /// and immediately become noise.
    ///
    /// Per docs/methuselah-seeding.md §7: no bounding-region clearing,
    /// no location-picking heuristic — just uniform random within the
    /// rejection set's spacing budget.  When the batch size pushes the
    /// rejection budget past saturation, `pick_random_stamp_spaced`
    /// falls back to unconstrained random — better one collision than
    /// a missing stamp.
    /// Arm a reseed cycle: build the rejection set and record how many stamps
    /// are owed.  Placement itself happens in `pump_reseed` over the following
    /// frames.
    ///
    /// Splitting arm from place is what removes the periodic hitch. Stamping
    /// the whole batch inside the tick blocked the worker for 55–160ms every
    /// `TICK_EVERY` frames (~2.9s), which showed up as a single ~84ms outlier
    /// in main-thread frame deltas — the last visible jank source once render
    /// cost was down to fractions of a millisecond.
    ///
    /// This is behaviour-preserving VISUALLY, which is the reason it is safe:
    /// `render_only` does not flush the edit queue (only `tick_and_render`
    /// does, at the top), so stamps queued at any point during the interval
    /// become visible at exactly the same moment they always did — the next
    /// base tick. Same stamps, same arrival frame, cost spread instead of
    /// spiked.
    fn arm_reseed(&mut self) {
        // A cycle still draining means the previous batch never finished
        // within one tick interval. Placing the remainder now would reintroduce
        // the burst, so drop it: skipping a few stamps is invisible (they are
        // scattered world-wide, mostly off-screen), a frame hitch is not.
        let cols = self.world.cols();
        let rows = self.world.rows();
        // Cross-tick recent stamps seed the set; each new placement inserts
        // itself as it is made. O(1) per check (versus the previous O(N) Vec
        // scan) means batch size isn't bounded by `RECENT_STAMP_MEMORY` for
        // performance reasons any more — only by aesthetic choice.
        let mut grid = SpatialGrid::new(cols, rows, SPATIAL_BUCKET_SIZE);
        for &(ox, oy) in &self.recent_stamps {
            grid.insert(ox, oy);
        }
        self.reseed_grid = Some(grid);
        self.reseed_remaining = RESEED_BATCH_SIZE;
    }

    /// Place at most `max_stamps` of the owed batch. Called every frame,
    /// including `render_only` frames, so the cost lands as a thin slice per
    /// frame instead of one blocking burst.
    fn pump_reseed(&mut self, max_stamps: u32) {
        if self.reseed_remaining == 0 {
            return;
        }
        // Take the grid out so `self` is not borrowed while stamping; it goes
        // back below unless the cycle finished.
        let Some(mut grid) = self.reseed_grid.take() else {
            self.reseed_remaining = 0;
            return;
        };
        let cols = self.world.cols();
        let rows = self.world.rows();

        let n = max_stamps.min(self.reseed_remaining);
        for _ in 0..n {
            let d = pick_random_stamp_spaced(
                &mut self.rng,
                cols,
                rows,
                &grid,
                MIN_PATTERN_DISTANCE,
                MAX_REJECTION_ATTEMPTS,
            );
            let cells = stamp_cells(d.pattern, d.ox, d.oy, d.transform, cols, rows);
            // Mirror the stamp on the CPU-side World so its state stays
            // representative.  GPU side gets the same cells via the OR
            // queue — flushed on the next `tick_and_render` cycle.
            self.world.stamp(d.pattern, d.ox, d.oy, d.transform);
            self.simulation.queue_pattern_stamp(&self.grid, cells);
            grid.insert(d.ox, d.oy);
            // Trim front of recent_stamps when over budget so the
            // cross-tick rolling window stays bounded.
            if self.recent_stamps.len() >= RECENT_STAMP_MEMORY {
                self.recent_stamps.pop_front();
            }
            self.recent_stamps.push_back((d.ox, d.oy));
        }

        self.reseed_remaining -= n;
        if self.reseed_remaining > 0 {
            self.reseed_grid = Some(grid);
        }
    }

    /// Render the current state and present the frame.  Used by
    /// `render_only` (not on the timestamp-sample path) and by
    /// `flush_and_render` after a click-driven edit.
    fn present(&mut self) {
        let mut enc = self.ctx.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("gol_present") },
        );
        match self.renderers[0].render(&mut enc, None) {
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

/// Typed wire form of the theme palette (matches app/src/types/theme.ts
/// `serializeTheme`). serde replaces the hand-rolled Reflect walking
/// (interface-audit #3). `border_t` is intentionally absent — the page border
/// was removed from the shader; any such field in the payload is ignored.
#[derive(serde::Deserialize)]
pub(crate) struct ThemeInput {
    pub(crate) surface: [f32; 3],
    pub(crate) ink: [f32; 3],
    #[serde(default = "default_minor_t")]
    pub(crate) minor_t: f32,
    #[serde(default = "default_major_t")]
    pub(crate) major_t: f32,
    #[serde(default = "default_ink_opacity")]
    pub(crate) ink_opacity: f32,
    #[serde(default)]
    pub(crate) grain_intensity: f32,
}

fn default_minor_t() -> f32 {
    0.08
}
fn default_major_t() -> f32 {
    0.14
}
fn default_ink_opacity() -> f32 {
    0.88
}

fn theme_params_from_value(theme: JsValue) -> Result<ThemeParams, JsError> {
    let t: ThemeInput =
        serde_wasm_bindgen::from_value(theme).map_err(|e| JsError::new(&e.to_string()))?;
    // OKLab endpoints are padded to [L, a, b, 0.0] for the 16-byte-aligned uniform.
    Ok(ThemeParams::from_endpoints(
        [t.surface[0], t.surface[1], t.surface[2], 0.0],
        [t.ink[0], t.ink[1], t.ink[2], 0.0],
        t.minor_t,
        t.major_t,
        t.ink_opacity,
        t.grain_intensity,
    ))
}
