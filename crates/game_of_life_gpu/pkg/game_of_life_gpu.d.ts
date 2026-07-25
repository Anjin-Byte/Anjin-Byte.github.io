/* tslint:disable */
/* eslint-disable */

/**
 * WebGPU-accelerated Game of Life, exported to JavaScript.
 *
 * Init order required by wgpu ≥ 22:
 *   1. Instance
 *   2. Surface  ← must exist before adapter request
 *   3. Adapter (compatible_surface = &surface)
 *   4. Device + Queue
 *
 * `ctx` holds the shared device + queue.  `world` owns the canonical
 * cell state (CPU-side); `simulation` mirrors that state into GPU
 * buffers and runs the compute shader.  Resize updates the renderer's
 * viewport uniforms only — the World and its GPU buffers are never
 * reallocated, which is what makes pattern stamps survive resize.
 */
export class GpuGameOfLife {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Flush pending cell edits to the GPU and re-render immediately.
     *
     * Call this after `toggle_cell` when you want instant visual feedback
     * without waiting for the next simulation tick.
     */
    flush_and_render(): void;
    grid_pitch(): number;
    /**
     * Sub-phase wall-clock breakdown of `from_surface`.  Read once after
     * init by the worker for inclusion in the `startup_breakdown`
     * message; each value is ms.  See `InitPhases` field docs for what
     * each phase covers.
     */
    init_device_request_ms(): number;
    init_panel_ms(): number;
    init_renderer_ms(): number;
    init_seeding_ms(): number;
    init_simulation_ms(): number;
    /**
     * Most-recent compute-tick GPU duration in milliseconds, or `None`
     * if no sample has completed yet (or the feature is unavailable).
     */
    last_compute_tick_ms(): number | undefined;
    last_or_edit_ms(): number | undefined;
    /**
     * DEV: wall-clock ms of the most recent present/submit block (render +
     * `get_current_texture` + present) — i.e. GPU/compositor back-pressure.
     */
    last_present_ms(): number;
    last_render_pass_ms(): number | undefined;
    /**
     * DEV: wall-clock ms of the most recent `auto_reseed()` (CPU) inside
     * `tick_and_render`; `0.0` on ticks where no reseed fired.
     */
    last_reseed_ms(): number;
    last_xor_edit_ms(): number | undefined;
    /**
     * Create from an HtmlCanvasElement (main-thread usage).
     *
     * `_grid_pitch` is preserved in the JS-facing signature for backward
     * compatibility but is now ignored — cell pixel size is fixed by the
     * CELL_PX constant.  `seed` initialises the auto-reseed RNG; the JS
     * caller typically passes `Math.floor(Math.random() * 0x1_0000_0000)`
     * for per-session randomness, or a fixed value for reproducibility.
     */
    static new(canvas: HTMLCanvasElement, _grid_pitch: number, seed: number): Promise<GpuGameOfLife>;
    /**
     * Create from an OffscreenCanvas (Web Worker usage).  See `new`
     * for the `_grid_pitch` and `seed` parameter notes.
     */
    static new_offscreen(canvas: OffscreenCanvas, _grid_pitch: number, seed: number): Promise<GpuGameOfLife>;
    padded_rows(): number;
    /**
     * Presents the current simulation state without advancing a generation.
     * Call this on render frames that fall between simulation ticks so the
     * display stays at vsync rate while the simulation runs at a lower rate.
     */
    render_only(): void;
    /**
     * Update the viewport when the canvas dimensions change.  The world
     * itself is fixed, so this only updates the renderer's viewport
     * uniforms — no buffer reallocation, no simulation reset.  Pattern
     * stamps survive resize unchanged.
     */
    resize(width: number, height: number): void;
    /**
     * Updates the full 2-D camera offset (canvas pixels) so the grid pans in
     * lockstep with the content. The 1024² toroidal world wraps on both axes,
     * so panning in any direction is edgeless.
     */
    set_camera(x: number, y: number): void;
    /**
     * Drive the first-paint cell-ink fade.  `t` ramps 0 → 1 over ~1.2 s
     * after the first painted frame, gradually revealing cells while the
     * paper / grid layers are already at full opacity.  Worker stops
     * calling this once `t` saturates at 1.0.
     */
    set_init_fade(t: number): void;
    /**
     * Updates the vertical scroll offset (canvas pixels). Call on every scroll event.
     */
    set_scroll(scroll_y: number): void;
    /**
     * Apply a theme palette (a JS object, deserialized via serde). OKLab
     * endpoints + grid lerp positions; all color relationships derive from these.
     * Schema: `{ surface: [L,a,b], ink: [L,a,b], minor_t, major_t, ink_opacity, grain_intensity }`.
     */
    set_theme(theme: any): void;
    set_transition(t: number): void;
    /**
     * Accepts a JS array of blank-zone records (deserialized via serde), caches
     * the typed inputs, and uploads the derived GPU entries. Malformed payloads
     * fail at the boundary with a typed `JsError`.
     */
    set_zones(zones: any): void;
    /**
     * Advances one GoL generation and presents.
     *
     * Split into phases with separate `queue.submit()` calls so that
     * storage buffer writes are guaranteed visible between phases.
     * Periodic auto-reseed (every `RESEED_INTERVAL_TICKS` base ticks)
     * queues a Methuselah stamp; the OR-edit shader applies it on the
     * next `flush_edits_if_pending()` call.
     */
    tick_and_render(): void;
    /**
     * True iff the adapter granted `TIMESTAMP_QUERY` and the panel is
     * actually sampling.  When false, the `last_*_pass_ms` getters
     * return `None` for every call.  The worker uses this to log a
     * one-time hint about enabling the dev flag.
     */
    timestamp_query_supported(): boolean;
    /**
     * Queue a cell toggle.  `cx` and `cy` are world-cell coordinates
     * already wrapped into `[0, world_cols) × [0, world_rows)` by the
     * JS caller (see `wrapCell` in `app/src/utils/gridCoords.ts`).
     *
     * The edit is deferred until the next `tick_and_render` or an explicit
     * `flush_edits` call, so rapid clicks accumulate cheaply.
     */
    toggle_cell(cx: number, cy: number): void;
    words_per_row(): number;
    /**
     * Return grid dimensions for the main thread's coordinate mapping.
     */
    world_cols(): number;
    world_rows(): number;
}

/**
 * WebGL2-backed Game of Life renderer.
 */
export class WebglGameOfLife {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    free(): void;
    grid_pitch(): number;
    /**
     * Create from an OffscreenCanvas (Web Worker usage). Creates a WebGL2
     * context on the canvas — mutually exclusive with WebGPU/2D contexts, so
     * only reach here after the WebGPU probe has failed.
     */
    static new_offscreen(canvas: OffscreenCanvas, seed: number): Promise<WebglGameOfLife>;
    /**
     * Present the current generation (no advance).
     */
    render_only(): void;
    resize(width: number, height: number): void;
    /**
     * Camera/scroll offset in device px (world = frag + scroll). The main
     * thread ships the same offset it gives the WebGPU renderer.
     */
    set_camera(x: number, y: number): void;
    set_init_fade(t: number): void;
    /**
     * Apply a theme. Accepts the same JSON the WebGPU path parses; only the
     * fields this simpler shader uses are read (surface, ink, minor/major
     * lerps, ink opacity).
     */
    set_theme(theme: any): void;
    set_transition(t: number): void;
    /**
     * Advance one generation and present.
     */
    tick_and_render(): void;
    toggle_cell(_cx: number, _cy: number): void;
    world_cols(): number;
    world_rows(): number;
}
