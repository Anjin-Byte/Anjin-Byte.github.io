// Web Worker: owns all background rendering logic.
// Receives OffscreenCanvas from main thread and drives GPU or CPU rendering.
// Main thread sends 'frame' messages at requestAnimationFrame rate for vsync sync.

import { createLogger } from '../logger';
import { PERF_ENABLED, PerfSampler } from '../perf';
import { SUMMARY_INTERVAL_FRAMES } from '../perf/constants';
import { TICK_EVERY } from './rendererProtocol';
import type { WorkerInMsg, WorkerOutMsg, GridInfo } from './rendererProtocol';
import type { ThemePalette } from '../types/theme';
import { LIGHT_THEME } from '../types/theme';
import { devicePx, worldCell } from '../utils/units';
import { BlankZoneState } from './BlankZoneState';
import { FeatureRegistry } from './featureRegistry';
import { makeStaticRenderer } from './staticRenderer';
import { makeGpuRenderer } from './gpuRenderer';
import { makeWebglRenderer } from './webglRenderer';
import { shouldRenderFrame } from './frameGate';
import { errorMessage, easeTransition, resolveFrameAction } from './renderHelpers';
import type { Renderer } from './renderer';

const log = createLogger('Renderer');
const ws  = self as unknown as DedicatedWorkerGlobalScope;
const perf: PerfSampler | null = PERF_ENABLED ? new PerfSampler(log) : null;

let renderer: Renderer | null = null;
// `canvas` is hoisted to module scope so the resize handler can update its
// dimensions even before the renderer is initialised.  Writes to
// `canvas.width/height` are observable by `from_surface` when it later
// constructs the WebGPU surface, so a resize that arrives during the async
// GPU-init window is no longer dropped silently.
let canvas: OffscreenCanvas | null = null;
// Latest camera offset (canvas px). Cached so it can be re-applied when the
// renderer becomes available (init is async) or after a resize (resize rewrites
// the uniform buffer, resetting scroll_x/scroll_y to 0).
let pendingCameraX = 0;
let pendingCameraY = 0;
// Latest resize dims received before the renderer materialised.  Drained by
// the init handler after the renderer object is assigned.
let pendingResize: { width: number; height: number } | null = null;
let frameCount  = 0;
// Render-gate state (the decision itself is the pure, tested
// `shouldRenderFrame` in frameGate.ts — the throttle/motion/burst rationale
// lives there): timestamp of the last render, the camera offset of the last
// RENDERED frame (NaN-seeded so the first frame always renders), and the
// burst deadline armed by 'set_theme'.
let lastRenderTime = 0;
let lastRenderedCameraX = Number.NaN;
let lastRenderedCameraY = Number.NaN;
// Present-burst deadline: while performance.now() is below this, the throttle
// is bypassed and every 'frame' message renders. Armed by 'set_theme' — after
// a theme flip the swapchain's 2-3 buffers in rotation still hold OLD-theme
// frames, and Firefox (unlike Chrome, which always composites the latest
// present) can alternate those stale buffers with the already-flipped page
// background behind the PreMultiplied canvas, flashing old/new until every
// buffer has been re-rendered. A short unthrottled run of presents refreshes
// the whole rotation back-to-back — the same cure the camera-motion bypass
// applies to the identical stale-buffer ghosting during pans and scrolls.
const THEME_PRESENT_BURST_MS = 300;
let forceRenderUntil = 0;
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
const INIT_FADE_DURATION_MS = 1000;
let firstFrameAt = 0;
let initFadeT = 0;

// ── Helpers ───────────────────────────────────────────────────────────────────

function post(msg: WorkerOutMsg): void {
  ws.postMessage(msg);
}

// Collection features driven over the generic `feature` channel. Registering one
// wires its worker state + renderer push; the `case 'feature'` handler and
// `features.applyAll()` (renderer-swap re-apply) then cover it with no per-
// feature message/switch/re-apply edits. Blank zones is the only one today.
const features = new FeatureRegistry();
features.register('blankZones', zoneState, (items) => renderer?.setZones?.(items));

// ── Memory reporting (DEV) ─────────────────────────────────────────────────────
// wgpu exposes no VRAM total, so GPU allocations are estimated from canvas + grid
// dims. The dominant buffers are all derivable: the surface texture (canvas
// w×h×4, the lion's share), 5 cell-plane-sized buffers (the ping-pong pair +
// frozen + the interleaved 2-plane packed render buffer), and the 256² RGBA8
// paper-noise texture.
const SURFACE_BYTES_PER_PX = 4; // 8-bit RGBA/BGRA surface
const NOISE_TEX_BYTES = 256 * 256 * 4;
const CELL_BUFFER_COUNT = 5;

function workerHeapBytes(): number | null {
  const mem = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
  return mem ? mem.usedJSHeapSize : null;
}

function postMemoryBreakdown(): void {
  if (!canvas) return;
  const grid = renderer?.gridInfo?.();
  const cellBytes = grid ? grid.wordsPerRow * grid.paddedRows * 4 * CELL_BUFFER_COUNT : 0;
  post({
    type: 'memory_breakdown',
    frame: frameCount,
    mem: {
      canvasW: canvas.width,
      canvasH: canvas.height,
      surfaceBytes: canvas.width * canvas.height * SURFACE_BYTES_PER_PX,
      cellBytes,
      noiseBytes: NOISE_TEX_BYTES,
      workerHeapBytes: workerHeapBytes(),
    },
  });
}

// Grid info for backends with no addressable cell grid (static fallback, and
// the WebGL2 renderer until its sim lands). gridPitch 0 makes the main
// thread's coordinate snapshot null, so click-to-toggle cleanly no-ops.
const ZERO_GRID_INFO: GridInfo = { worldCols: worldCell(0), worldRows: worldCell(0), paddedRows: 0, wordsPerRow: 0, gridPitch: devicePx(0) };

/**
 * Probe WebGL2 availability WITHOUT touching the presentation canvas — a
 * throwaway 1x1 OffscreenCanvas, mirroring the WebGPU pre-probe. A context can
 * only be claimed once per canvas, so we must know WebGL2 works before
 * committing the real canvas to it.
 */
function webgl2Available(): boolean {
  try {
    return new OffscreenCanvas(1, 1).getContext('webgl2') != null;
  } catch {
    return false;
  }
}

/**
 * Build the WebGL2 ping-pong fallback renderer, assign it to `renderer`, and
 * post `ready` on success. The canvas is committed to a WebGL2 context here, so
 * only call this after the WebGPU probe has been declined and `webgl2Available`
 * confirmed the context can be created. Returns true on success.
 */
async function initWebgl2Renderer(): Promise<boolean> {
  if (!canvas) return false;
  try {
    const { WebglGameOfLife } = await import('@gpu-pkg/game_of_life_gpu.js');
    const seed = Math.floor(Math.random() * 0x1_0000_0000);
    const gl = await WebglGameOfLife.new_offscreen(canvas, seed);
    renderer = makeWebglRenderer(gl);
    renderer.setCamera?.(pendingCameraX, pendingCameraY);
    renderer.setTheme?.(currentTheme);
    log.info('WebGL2 fallback renderer ready');
    // Real grid info: worldCols/Rows + gridPitch drive click→cell mapping and
    // the CSS-grid pitch cross-check. paddedRows/wordsPerRow are unused by the
    // main thread's coordinate math, so 0 is fine.
    post({
      type: 'ready',
      backend: 'webgl2',
      gridInfo: {
        worldCols: worldCell(gl.world_cols()),
        worldRows: worldCell(gl.world_rows()),
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: devicePx(gl.grid_pitch()),
      },
    });
    return true;
  } catch (err) {
    log.error('WebGL2 init failed:', errorMessage(err));
    post({ type: 'error', phase: 'gpu-init', message: errorMessage(err) });
    return false;
  }
}

// ── Message handler ───────────────────────────────────────────────────────────

/** Structural guard for the inbound-message boundary (interface-audit C). This
 *  channel is same-origin — only our own `WorkerBridge` posts here — so we
 *  validate SHAPE (a non-null object carrying a string discriminant) rather than
 *  deep-parsing every variant. It replaces the previous blind
 *  `MessageEvent<WorkerInMsg>` type-assertion with a real runtime check, so a
 *  malformed message is rejected at the boundary instead of trusted. The switch
 *  below stays exhaustive over the union (compile-time, finding D); an unknown
 *  `type` string that passes this guard simply matches no case and is ignored. */
function isWorkerInMsg(data: unknown): data is WorkerInMsg {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as { type?: unknown }).type === 'string'
  );
}

ws.onmessage = async (e: MessageEvent<unknown>) => {
  if (!isWorkerInMsg(e.data)) {
    log.warn('worker: ignored malformed inbound message', e.data);
    return;
  }
  switch (e.data.type) {

    case 'init': {
      // Hoist the OffscreenCanvas to module scope so the resize handler can
      // update its dimensions even before the renderer is created.
      canvas = e.data.canvas;
      // Take the resolved theme from the main thread before any GPU work,
      // so the first `renderer.setTheme(currentTheme)` call below sends
      // the correct palette and the first rendered frame doesn't flash
      // light against a dark html background on dark-OS users with the
      // `system` default.
      currentTheme = e.data.theme;
      log.debug('Init received — canvas', canvas.width, 'x', canvas.height);

      // Tier 1 perf timing markers — capture a stamp before each major
      // async phase of init so the main thread can render a startup
      // breakdown.  DEV-only via PERF_ENABLED gate further down.
      const startupT0 = performance.now();
      const force = e.data.forceBackend;

      // ── Forced WebGL2 (dev/testing via ?renderer=webgl2) ──────────────
      // Build the ping-pong fallback directly, skipping the WebGPU probe.
      // (initWebgl2Renderer posts `ready` itself.)
      if (force === 'webgl2') {
        await initWebgl2Renderer();
        break;
      }

      // ── WebGPU pre-probe (no canvas involved) ─────────────────────────
      // We must verify WebGPU works BEFORE calling new_offscreen(), because
      // create_surface() permanently claims the canvas as a WebGPU context.
      // If that call succeeds but requestDevice() then fails, getContext('2d')
      // can never be obtained on the same canvas, breaking the CPU fallback.
      // `?renderer=static` forces the static fallback by skipping the probe.
      log.debug('GPU: probing WebGPU availability...');
      let gpuProbeOk = false;
      if (force !== 'static') {
        try {
          const probeAdapter = await navigator.gpu?.requestAdapter() ?? null;
          if (!probeAdapter) throw new Error('No WebGPU adapter');
          gpuProbeOk = true;
          log.debug('GPU: probe passed — adapter found');
        } catch (probeErr) {
          log.info('GPU: probe failed, will use CPU renderer:', errorMessage(probeErr));
          post({ type: 'error', phase: 'gpu-probe', message: errorMessage(probeErr) });
        }
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
          // Second arg is the legacy `_grid_pitch` parameter — gpu.rs ignores
          // it (cell size is its own CELL_PX constant, reported back via
          // GridInfo.gridPitch); 0 is passed only to satisfy the generated
          // signature until the next wasm rebuild drops the parameter.
          const gpu = await GpuGameOfLife.new_offscreen(canvas, 0, seed);
          const startupT3 = performance.now();
          const gpuRenderer = makeGpuRenderer(gpu, (message) =>
            post({ type: 'feature_error', feature: 'blankZones', message }),
          );
          renderer = gpuRenderer;
          // A resize that arrived during the async init window updated
          // canvas.width/height directly, but its `gpu.resize()` call was
          // deferred — drain it now so the surface uniforms catch up.
          if (pendingResize) {
            renderer.resize(pendingResize.width, pendingResize.height);
            pendingResize = null;
          }
          // Camera messages sent during async GPU init were dropped (renderer was null).
          // Re-apply the latest offset now that the renderer is accepting commands.
          renderer.setCamera?.(pendingCameraX, pendingCameraY);
          renderer.setTransition?.(1);
          features.applyAll();
          renderer.setTheme?.(currentTheme);
          log.info('GPU renderer ready');
          post({ type: 'ready', backend: 'gpu', gridInfo: gpuRenderer.gridInfo() });
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

      // ── WebGL2 fallback (WebGPU unavailable, canvas still clean) ──────────
      // The GPU pre-probe touches no canvas, so on WebGPU-absent browsers the
      // canvas is uncommitted here and we can try the WebGL2 ping-pong tier.
      // Probe on a throwaway canvas FIRST (a context claims the canvas
      // permanently), then commit. `?renderer=static` skips this.
      if (force !== 'static' && webgl2Available()) {
        log.debug('WebGL2: WebGPU unavailable, trying WebGL2 fallback...');
        if (await initWebgl2Renderer()) break;
        // If init failed after the probe passed, the canvas may now be a dead
        // WebGL2 context; the static path's getContext('2d') would then fail
        // and post its own error. Rare, and better than not trying WebGL2.
      }

      // ── Static fallback (last resort) ─────────────────────────────────────
      // No simulation: a frozen, theme-aware image in the GPU effect's visual
      // language. See staticRenderer.ts for why this replaced the CPU GoL port.
      log.debug('CPU: starting static fallback renderer...');
      try {
        renderer = makeStaticRenderer(canvas);
        renderer.setCamera?.(pendingCameraX, pendingCameraY);
        renderer.setTheme?.(currentTheme);
        log.info('Static fallback renderer ready');
        // gridPitch 0 makes the main thread's coordinate snapshot null, so
        // click-to-toggle cleanly no-ops (nothing to toggle).
        post({ type: 'ready', backend: 'cpu', gridInfo: ZERO_GRID_INFO });
      } catch (cpuErr) {
        const message = errorMessage(cpuErr);
        log.error('Static fallback init failed:', message);
        post({ type: 'error', phase: 'cpu-init', message });
      }
      break;
    }

    case 'frame': {
      if (!renderer) break;
      // Narrowed non-null renderer, captured so the perf-timing closures below
      // don't re-widen it (control-flow narrowing doesn't hold across closures
      // on a reassignable `let`).
      const r = renderer;
      // Apply the frame-locked camera offset before rendering, so the grid pans
      // in sync with this exact render. Also cache it so resize re-applies it.
      pendingCameraX = e.data.cameraX;
      pendingCameraY = e.data.cameraY;
      renderer.setCamera?.(pendingCameraX, pendingCameraY);

      // Render/tick gate (pure decision + rationale in frameGate.ts) — placed
      // AFTER setCamera so a throttled-out frame still leaves the GPU uniform
      // fresh; only the expensive tick/render + its bookkeeping (frameCount,
      // and hence TICK_EVERY's cadence) are skipped.
      const nowMs = performance.now();
      const render = shouldRenderFrame(nowMs, pendingCameraX, pendingCameraY, {
        lastRenderTime,
        lastCameraX: lastRenderedCameraX,
        lastCameraY: lastRenderedCameraY,
        forceRenderUntil,
      });
      if (!render) break;
      lastRenderTime = nowMs;
      lastRenderedCameraX = pendingCameraX;
      lastRenderedCameraY = pendingCameraY;

      perf?.beginFrame();
      frameCount++;

      // Drive the shader-side init fade until it saturates.  After ~60
      // frames (1 s at 60 Hz) we stop calling setInitFade entirely; the
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
          if (perf) { perf.time('tick', () => r.tick()); }
          else { r.tick(); }
          // Post the CPU-reseed vs GPU-present split for this tick so the spike
          // can be attributed. Ticks are rare (~every 175 frames), so low volume.
          if (PERF_ENABLED) {
            const tb = renderer.pullTickBreakdown?.();
            if (tb) post({ type: 'tick_breakdown', frame: frameCount, reseedMs: tb.reseedMs, presentMs: tb.presentMs });
          }
          break;
        case 'render_only':
          renderer.setTransition?.(easeTransition((frameCount % TICK_EVERY) / TICK_EVERY));
          if (r.renderOnly) {
            const renderOnly = r.renderOnly;
            if (perf) { perf.time('render', () => renderOnly()); }
            else { renderOnly(); }
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
        // Memory estimate logs every interval regardless of timestamp support.
        postMemoryBreakdown();
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
      // resize() rewrites the uniform buffer (scroll_x/scroll_y reset to 0); re-apply.
      renderer.setCamera?.(pendingCameraX, pendingCameraY);
      renderer.setTransition?.(1);
      features.applyAll();
      renderer.setTheme?.(currentTheme);
      // Grid dimensions change on resize; notify main thread.
      if (renderer.gridInfo) {
        post({ type: 'grid_info', gridInfo: renderer.gridInfo() });
      }
      break;
    }

    case 'camera':
      pendingCameraX = e.data.x;
      pendingCameraY = e.data.y;
      renderer?.setCamera?.(pendingCameraX, pendingCameraY);
      break;

    case 'toggle_cell':
      renderer?.toggleCell?.(e.data.cx, e.data.cy);
      break;

    case 'feature': {
      const entry = features.get(e.data.feature);
      if (!entry) {
        post({ type: 'feature_error', feature: e.data.feature, message: `unknown feature: ${e.data.feature}` });
        break;
      }
      const error = entry.dispatch(e.data.op, e.data.payload);
      if (error) {
        post({ type: 'feature_error', feature: e.data.feature, message: error });
        break;
      }
      // Op accepted: push the new collection to the renderer, then echo the
      // authoritative post-op state back for the composable to reconcile.
      entry.apply();
      post({ type: 'feature_state', feature: e.data.feature, items: entry.snapshot() });
      break;
    }

    case 'set_theme':
      currentTheme = e.data.theme;
      renderer?.setTheme?.(currentTheme);
      // Arm the present burst (see THEME_PRESENT_BURST_MS): every 'frame'
      // message inside the window renders, so the swapchain's whole buffer
      // rotation is refreshed with the new theme back-to-back. A single
      // forced render was tried and did NOT cure the Firefox old/new flicker
      // — it refreshes one buffer while the others in rotation still hold
      // old-theme frames that Firefox may re-composite on non-presenting
      // ticks. All presents stay on the normal per-'frame' path (no extra
      // out-of-band submit here), so present ordering is never in question.
      forceRenderUntil = performance.now() + THEME_PRESENT_BURST_MS;
      lastRenderTime = 0;
      break;

    case 'perf_snapshot':
      if (perf) {
        post({ type: 'perf_snapshot', stats: perf.snapshot() });
      }
      break;

    // (No 'stop' message: WorkerBridge.terminate() kills the thread
    // synchronously, so a farewell message could never be processed — the
    // browser reclaims the GPU device with the worker.)
  }
};
