// Web Worker: owns all background rendering logic.
// Receives OffscreenCanvas from main thread and drives GPU or CPU rendering.
// Main thread sends 'frame' messages at requestAnimationFrame rate for vsync sync.

import { createLogger } from '../logger';
import { PERF_ENABLED, PerfSampler } from '../perf';
import { SUMMARY_INTERVAL_FRAMES } from '../perf/constants';
import { TICK_EVERY } from './rendererProtocol';
import type { WorkerInMsg, WorkerOutMsg, GridInfo } from './rendererProtocol';
import type { BlankZone } from '../types/blankZones';
import type { ThemePalette } from '../types/theme';
import { LIGHT_THEME, serializeTheme } from '../types/theme';
import { BlankZoneState } from './BlankZoneState';
import { makeCpuRenderer } from './cpuRenderer';

const log = createLogger('Renderer');
const ws  = self as unknown as DedicatedWorkerGlobalScope;
const perf: PerfSampler | null = PERF_ENABLED ? new PerfSampler(log) : null;

// ── Renderer interface ────────────────────────────────────────────────────────

interface Renderer {
  tick(): void;
  renderOnly?(): void;
  resize(w: number, h: number): void;
  setScroll?(scrollY: number): void;
  setTransition?(transitionT: number): void;
  /** First-paint cell-ink fade: ramps 0 → 1 to gradually reveal cells.
   *  Optional — CPU fallback doesn't implement it. */
  setInitFade?(t: number): void;
  toggleCell?(cx: number, cy: number): void;
  setZones?(zones: BlankZone[]): void;
  setTheme?(theme: ThemePalette): void;
  gridInfo?(): GridInfo;
  /** DEV-only: pull most recent per-pass GPU durations.  `null` when the
   *  renderer doesn't support timestamp queries (CPU fallback, or
   *  WebGPU adapter without `TIMESTAMP_QUERY` granted). */
  pullGpuPassDurations?(): {
    computeTickMs: number | null;
    xorEditMs:     number | null;
    orEditMs:      number | null;
    renderPassMs:  number | null;
  } | null;
  free(): void;
}

let renderer: Renderer | null = null;
// `canvas` is hoisted to module scope so the resize handler can update its
// dimensions even before the renderer is initialised.  Writes to
// `canvas.width/height` are observable by `from_surface` when it later
// constructs the WebGPU surface, so a resize that arrives during the async
// GPU-init window is no longer dropped silently.
let canvas: OffscreenCanvas | null = null;
// Latest scroll offset (canvas px). Cached so it can be re-applied when the
// renderer becomes available (init is async) or after a resize (resize rewrites
// the uniform buffer, resetting scroll_y to 0).
let pendingScrollY = 0;
// Latest resize dims received before the renderer materialised.  Drained by
// the init handler after the renderer object is assigned.
let pendingResize: { width: number; height: number } | null = null;
let frameCount  = 0;
const zoneState  = new BlankZoneState();
// Cached so the current theme survives renderer hand-offs (GPU→CPU fallback,
// resize, etc). Defaults to light until the main thread sends `set_theme`.
let currentTheme: ThemePalette = LIGHT_THEME;
// One-shot first-paint signal: posted exactly once after the first
// successful render (tick or render_only).  Drives the canvas-CSS fade
// in AppBackground.vue.
let firstFramePosted = false;
// Time-based ramp for the shader-side cell-ink fade.  `firstFrameAt` is
// captured on the first frame we render; `initFadeT` walks 0 → 1 over
// `INIT_FADE_DURATION_MS`.  Once it saturates we stop calling
// `renderer.setInitFade` for the rest of the session.
const INIT_FADE_DURATION_MS = 3000;
let firstFrameAt = 0;
let initFadeT = 0;

// ── Helpers ───────────────────────────────────────────────────────────────────

function post(msg: WorkerOutMsg): void {
  ws.postMessage(msg);
}

function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

function easeTransition(t: number): number {
  const clamped = Math.min(1, Math.max(0, t));
  return clamped * clamped * (3 - 2 * clamped);
}

/** Frame action resolved by the scheduler — separates "what frame" from "do thing". */
type FrameAction = 'base_tick' | 'render_only';

function resolveFrameAction(frame: number): FrameAction {
  if (frame % TICK_EVERY === 0) return 'base_tick';
  return 'render_only';
}

function postZonesState(): void {
  post({ type: 'zones_state', zones: zoneState.getAll() });
}

function postZonesError(message: string): void {
  post({ type: 'zones_error', message });
}

function applyZonesToRenderer(): void {
  renderer?.setZones?.(zoneState.getAll());
}

function setZonesState(next: unknown): void {
  zoneState.setAll(next);
  applyZonesToRenderer();
  postZonesState();
}

// ── Message handler ───────────────────────────────────────────────────────────

ws.onmessage = async (e: MessageEvent<WorkerInMsg>) => {
  switch (e.data.type) {

    case 'init': {
      // Hoist the OffscreenCanvas to module scope so the resize handler can
      // update its dimensions even before the renderer is created.
      canvas = e.data.canvas;
      const { cellPx } = e.data;
      // Take the resolved theme from the main thread before any GPU work,
      // so the first `renderer.setTheme(currentTheme)` call below sends
      // the correct palette and the first rendered frame doesn't flash
      // light against a dark html background on dark-OS users with the
      // `system` default.
      currentTheme = e.data.theme;
      log.debug('Init received — canvas', canvas.width, 'x', canvas.height, 'cell_px', cellPx);

      // Tier 1 perf timing markers — capture a stamp before each major
      // async phase of init so the main thread can render a startup
      // breakdown.  DEV-only via PERF_ENABLED gate further down.
      const startupT0 = performance.now();

      // ── WebGPU pre-probe (no canvas involved) ─────────────────────────
      // We must verify WebGPU works BEFORE calling new_offscreen(), because
      // create_surface() permanently claims the canvas as a WebGPU context.
      // If that call succeeds but requestDevice() then fails, getContext('2d')
      // can never be obtained on the same canvas, breaking the CPU fallback.
      log.debug('GPU: probing WebGPU availability...');
      let gpuProbeOk = false;
      try {
        const probeAdapter = await navigator.gpu?.requestAdapter() ?? null;
        if (!probeAdapter) throw new Error('No WebGPU adapter');
        gpuProbeOk = true;
        log.debug('GPU: probe passed — adapter found');
      } catch (probeErr) {
        log.info('GPU: probe failed, will use CPU renderer:', errorMessage(probeErr));
        post({ type: 'error', phase: 'gpu-probe', message: errorMessage(probeErr) });
      }
      const startupT1 = performance.now();

      // ── GPU path (canvas committed here) ──────────────────────────────
      if (gpuProbeOk) {
        log.debug('GPU: loading wasm module...');
        try {
          const { GpuGameOfLife } = await import('@gpu-pkg/game_of_life_gpu.js');
          const startupT2 = performance.now();
          log.debug('GPU: module loaded, initialising surface...');
          // Per-session random seed for the auto-reseed RNG.  u32 range
          // is enough variety; the Rust side widens it to u64.  A future
          // URL-seeded mode would parse `?seed=` here instead.
          const seed = Math.floor(Math.random() * 0x1_0000_0000);
          const gpu = await GpuGameOfLife.new_offscreen(canvas, cellPx, seed);
          const startupT3 = performance.now();
          // Verify set_zones_json is present at init time so a future rename/removal
          // produces a visible warning rather than silently failing on every zone update.
          const gpuExt = gpu as unknown as {
            set_zones_json?: (zonesJson: string) => void;
            set_theme_json?: (themeJson: string) => void;
          };
          const setZonesOnGpu = (zones: BlankZone[]): void => {
            if (typeof gpuExt.set_zones_json !== 'function') return;
            try {
              gpuExt.set_zones_json(JSON.stringify(zones));
            } catch (err) {
              postZonesError(`GPU zone update failed: ${errorMessage(err)}`);
            }
          };
          const setThemeOnGpu = (theme: ThemePalette): void => {
            if (typeof gpuExt.set_theme_json !== 'function') return;
            try {
              gpuExt.set_theme_json(serializeTheme(theme));
            } catch (err) {
              log.error('GPU theme update failed:', errorMessage(err));
            }
          };
          const getGridInfo = (): GridInfo => ({
            worldCols:   gpu.world_cols(),
            worldRows:   gpu.world_rows(),
            paddedRows:  gpu.padded_rows(),
            wordsPerRow: gpu.words_per_row(),
            gridPitch:   gpu.grid_pitch(),
          });

          // Track if we've logged the timestamp-query availability hint
          // already (one-shot — DEV log to point developers at the flag).
          let timestampHintLogged = false;
          const pullGpuPassDurations = (): {
            computeTickMs: number | null;
            xorEditMs:     number | null;
            orEditMs:      number | null;
            renderPassMs:  number | null;
          } | null => {
            if (!gpu.timestamp_query_supported()) {
              if (!timestampHintLogged && PERF_ENABLED) {
                timestampHintLogged = true;
                log.info(
                  'GPU timestamp queries unavailable (adapter did not grant ' +
                  'TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/' +
                  '#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown ' +
                  'will not be emitted.',
                );
              }
              return null;
            }
            const computeTick = gpu.last_compute_tick_ms();
            const xorEdit     = gpu.last_xor_edit_ms();
            const orEdit      = gpu.last_or_edit_ms();
            const renderPass  = gpu.last_render_pass_ms();
            // Coerce undefined → null for the message contract; treat all-null
            // as "no sample yet" and skip emitting upstream.
            const out = {
              computeTickMs: computeTick ?? null,
              xorEditMs:     xorEdit ?? null,
              orEditMs:      orEdit ?? null,
              renderPassMs:  renderPass ?? null,
            };
            if (out.computeTickMs === null && out.xorEditMs === null
              && out.orEditMs === null && out.renderPassMs === null) {
              return null;
            }
            return out;
          };

          renderer = {
            tick:       () => gpu.tick_and_render(),
            renderOnly: () => gpu.render_only(),
            // Canvas dim writes happen in the top-level 'resize' handler so
            // they apply even when the renderer is mid-init.  This closure
            // only updates the GPU surface and viewport uniforms.
            resize:     (w, h) => gpu.resize(w, h),
            setScroll:  (scrollY) => gpu.set_scroll(scrollY),
            setTransition: (transitionT) => gpu.set_transition(transitionT),
            setInitFade: (t) => gpu.set_init_fade(t),
            toggleCell: (cx, cy) => { gpu.toggle_cell(cx, cy); gpu.flush_and_render(); },
            setZones:   (zones)  => setZonesOnGpu(zones),
            setTheme:   (theme)  => setThemeOnGpu(theme),
            gridInfo:   getGridInfo,
            pullGpuPassDurations,
            free:       () => gpu.free(),
          };
          // A resize that arrived during the async init window updated
          // canvas.width/height directly, but its `gpu.resize()` call was
          // deferred — drain it now so the surface uniforms catch up.
          if (pendingResize) {
            renderer.resize(pendingResize.width, pendingResize.height);
            pendingResize = null;
          }
          // Scroll messages sent during async GPU init were dropped (renderer was null).
          // Re-apply the latest position now that the renderer is accepting commands.
          renderer.setScroll?.(pendingScrollY);
          renderer.setTransition?.(1);
          renderer.setZones?.(zoneState.getAll());
          renderer.setTheme?.(currentTheme);
          log.info('GPU renderer ready');
          post({ type: 'ready', backend: 'gpu', gridInfo: getGridInfo() });
          if (PERF_ENABLED) {
            const startupT4 = performance.now();
            post({
              type: 'startup_breakdown',
              phases: {
                total:        startupT4 - startupT0,
                gpuProbe:     startupT1 - startupT0,
                wasmImport:   startupT2 - startupT1,
                newOffscreen: startupT3 - startupT2,
                readyPost:    startupT4 - startupT3,
                newOffscreenPhases: {
                  deviceRequest:  gpu.init_device_request_ms(),
                  panelInit:      gpu.init_panel_ms(),
                  seeding:        gpu.init_seeding_ms(),
                  simulationInit: gpu.init_simulation_ms(),
                  rendererInit:   gpu.init_renderer_ms(),
                },
              },
            });
          }
          break;
        } catch (gpuErr) {
          const message = errorMessage(gpuErr);
          // Unexpected: probe passed but WASM init failed.
          // Canvas is likely locked to WebGPU — CPU canvas fallback unavailable.
          log.error('GPU init failed after probe passed (canvas may be locked):', message);
          post({ type: 'error', phase: 'gpu-init', message });
          break;
        }
      }

      // ── CPU fallback (canvas is clean — probe failed before canvas commit) ──
      log.debug('CPU: starting software renderer...');
      try {
        renderer = await makeCpuRenderer(canvas);
        renderer.setScroll?.(pendingScrollY);
        renderer.setZones?.(zoneState.getAll());
        renderer.setTheme?.(currentTheme);
        log.info('CPU renderer ready');
        // CPU renderer has no grid info; supply zeroed placeholder.
        post({ type: 'ready', backend: 'cpu', gridInfo: { worldCols: 0, worldRows: 0, paddedRows: 0, wordsPerRow: 0, gridPitch: 0 } });
      } catch (cpuErr) {
        const message = errorMessage(cpuErr);
        log.error('CPU init failed:', message);
        post({ type: 'error', phase: 'cpu-init', message });
      }
      break;
    }

    case 'frame': {
      if (!renderer) break;
      perf?.beginFrame();
      frameCount++;

      // Drive the shader-side init fade until it saturates.  After ~72
      // frames (1.2 s at 60 Hz) we stop calling setInitFade entirely; the
      // uniform stays at 1.0 for the rest of the session.  No-op on the
      // CPU fallback (setInitFade is undefined there).
      if (initFadeT < 1) {
        const now = performance.now();
        if (firstFrameAt === 0) firstFrameAt = now;
        initFadeT = Math.min(1, (now - firstFrameAt) / INIT_FADE_DURATION_MS);
        renderer.setInitFade?.(initFadeT);
      }

      const action = resolveFrameAction(frameCount);
      switch (action) {
        case 'base_tick':
          renderer.setTransition?.(0);
          if (perf) { perf.time('tick', () => renderer!.tick()); }
          else { renderer.tick(); }
          break;
        case 'render_only':
          renderer.setTransition?.(easeTransition((frameCount % TICK_EVERY) / TICK_EVERY));
          if (renderer.renderOnly) {
            if (perf) { perf.time('render', () => renderer!.renderOnly!()); }
            else { renderer.renderOnly(); }
          }
          break;
      }
      perf?.endFrame();

      // First-paint signal: emitted exactly once after the first
      // successful render (either backend) so the main thread can
      // crossfade the canvas in from `opacity: 0`.
      if (!firstFramePosted) {
        firstFramePosted = true;
        post({ type: 'first_frame_painted' });
      }
      // GPU pass breakdown: piggyback on the perf-summary cadence.
      // Pull `last_*_pass_ms` from the renderer (Rust-side TimestampPanel)
      // and post if a fresh sample arrived since the last poll.  Skipped
      // when PERF is off, the renderer doesn't support the API, or the
      // panel hasn't completed its first readback yet.
      if (PERF_ENABLED && frameCount % SUMMARY_INTERVAL_FRAMES === 0) {
        const durations = renderer.pullGpuPassDurations?.();
        if (durations) {
          post({
            type: 'gpu_pass_breakdown',
            frame: frameCount,
            durations,
          });
        }
      }
      break;
    }

    case 'resize': {
      log.debug('Resize →', e.data.width, 'x', e.data.height);
      // No 'init' yet — main thread should always send 'init' first, but
      // bail safely if that contract is ever violated.
      if (!canvas) break;
      // Always update the canvas backing texture, even when the renderer
      // hasn't materialised yet.  `from_surface` reads `canvas.width()` at
      // construction time, so the GPU surface gets configured for the
      // most-recent dims if init is still in flight.
      canvas.width = e.data.width;
      canvas.height = e.data.height;
      if (!renderer) {
        // Renderer may finish init *after* `from_surface` returned; drained
        // by the init handler once the renderer object is assigned.
        pendingResize = { width: e.data.width, height: e.data.height };
        break;
      }
      renderer.resize(e.data.width, e.data.height);
      // resize() rewrites the uniform buffer (scroll_y resets to 0); re-apply.
      renderer.setScroll?.(pendingScrollY);
      renderer.setTransition?.(1);
      renderer.setZones?.(zoneState.getAll());
      renderer.setTheme?.(currentTheme);
      // Grid dimensions change on resize; notify main thread.
      if (renderer.gridInfo) {
        post({ type: 'grid_info', gridInfo: renderer.gridInfo() });
      }
      break;
    }

    case 'scroll':
      pendingScrollY = e.data.scrollY;
      renderer?.setScroll?.(pendingScrollY);
      break;

    case 'toggle_cell':
      renderer?.toggleCell?.(e.data.cx, e.data.cy);
      break;

    case 'set_zones': setZonesState(e.data.zones); break;
    case 'add_zone': {
      const result = zoneState.add(e.data.zone);
      if (result.error) { postZonesError(result.error); break; }
      applyZonesToRenderer(); postZonesState(); break;
    }
    case 'update_zone': {
      const result = zoneState.update(e.data.zone);
      if (result.error) { postZonesError(result.error); break; }
      applyZonesToRenderer(); postZonesState(); break;
    }
    case 'remove_zone': zoneState.remove(e.data.id); applyZonesToRenderer(); postZonesState(); break;
    case 'clear_zones': zoneState.clear(); applyZonesToRenderer(); postZonesState(); break;

    case 'set_theme':
      currentTheme = e.data.theme;
      renderer?.setTheme?.(currentTheme);
      break;

    case 'perf_snapshot':
      if (perf) {
        post({ type: 'perf_snapshot', stats: perf.snapshot() });
      }
      break;

    case 'stop':
      log.debug('Stop received, freeing renderer');
      renderer?.free();
      renderer = null;
      break;
  }
};
