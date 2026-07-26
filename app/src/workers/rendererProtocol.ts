// Shared message types between AppBackground (main thread) and backgroundRenderer (worker).

import type { ThemePalette } from '../types/theme';
import type { FrameStats } from '../perf';
import type { DevicePx, WorldCell } from '../utils/units';

// 'gpu' = WebGPU (compute); 'webgl2' = WebGL2 GPGPU ping-pong fallback;
// 'cpu' = the static (no-simulation) fallback of last resort.
export type RendererBackend = 'gpu' | 'webgl2' | 'cpu';

/** Dev/testing override (via `?renderer=` on the page URL) that pins the
 *  worker to one backend instead of probing. Threaded through the init msg. */
export type ForcedBackend = 'webgpu' | 'webgl2' | 'static';

/** CRUD operations on a worker-backed collection feature (see the `feature`
 *  message). `set` replaces the whole collection; `add`/`update` key on item
 *  `id`; `remove` takes an id; `clear` empties it. Switched exhaustively in one
 *  place (the worker's feature dispatch), so a new op is a compile error there. */
export type FeatureOp = 'set' | 'add' | 'update' | 'remove' | 'clear';

/** Frames between base simulation ticks. At 60 Hz: ~3.5 s per tick. */
export const TICK_EVERY = 175;

/**
 * Grid dimensions needed by the main thread for pixel → cell coordinate
 * mapping. `worldCols` / `worldRows` are the toroidal-wrap modulus for
 * world cell coordinates (currently 1024 × 1024); `paddedRows` /
 * `wordsPerRow` describe the bitpacked buffer layout.
 */
export interface GridInfo {
  worldCols:   WorldCell;
  worldRows:   WorldCell;
  paddedRows:  number;      // bitpacked buffer layout, not a coordinate space
  wordsPerRow: number;      // bitpacked buffer layout, not a coordinate space
  gridPitch:   DevicePx;    // float cell pitch; matches PaperParams.grid_pitch_px
}

export type WorkerInMsg =
  // `theme` carries the resolved palette at boot so the worker can apply
  // it to the GPU before the first frame, avoiding a light-flash on
  // dark-OS users when their stored preference is `system`.  Subsequent
  // theme changes flow through the `set_theme` message.
  | { type: 'init'; canvas: OffscreenCanvas; theme: ThemePalette; forceBackend?: ForcedBackend | undefined }
  // The camera offset (device px) is frame-locked: the main thread samples
  // scroll + camera on its render rAF and ships it WITH the frame, so the grid
  // renders the exact position the DOM is at this frame (no separate, lagging
  // 'camera' message during scroll). The worker throttles its render/tick
  // rate to ~60fps only while the offset is STATIC (it detects motion by
  // comparing offsets across messages — fly, native scroll, free-pan alike),
  // so the canvas never falls a display-refresh behind the always-uncapped
  // DOM while the two are visibly moving together.
  | { type: 'frame'; cameraX: number; cameraY: number }
  | { type: 'resize'; width: number; height: number }
  // 2-D camera offset (canvas/device px). Drives the grid's scroll_x/scroll_y
  // uniforms so the world pans in lockstep with the content plane.
  | { type: 'camera'; x: number; y: number }
  // Toggle a cell's alive/dead state. cx/cy are world-cell coordinates
  // already wrapped into [0, worldCols) × [0, worldRows) by the main thread.
  | { type: 'toggle_cell'; cx: number; cy: number }
  // ── Feature channel ─────────────────────────────────────────────────────
  // Generic CRUD envelope for worker-backed collection features (blank zones is
  // the only one today). One variant + one switch case + one worker registry
  // entry replaces the per-feature explosion of {set,add,update,remove,clear}_X
  // messages. `payload` is `unknown` by design: it crosses the structured-clone
  // boundary and is validated worker-side by the feature's `FeatureState`
  // normalizers — the same boundary validation the bespoke zone messages relied
  // on. `op` is a small closed union, switched exhaustively in ONE place.
  | { type: 'feature'; feature: string; op: FeatureOp; payload?: unknown }
  | { type: 'set_theme'; theme: ThemePalette }
  // `prefers-reduced-motion`, crossing the worker boundary the same way the
  // theme does. Without it the worker cannot know, and the simulation animates
  // forever for a reader who asked the platform for less motion (R11).
  // Singleton value, fire-and-forget: bespoke by design, NOT a feature-channel
  // candidate (that channel is only for `FeatureState<HasId>` collections).
  | { type: 'set_motion'; reduced: boolean }
  | { type: 'perf_snapshot' };

/**
 * One-shot perf signal emitted by the worker after the renderer is ready.
 * Each phase is the wall-clock ms spent in that segment of the worker's
 * `init` handler.  Sums to approximately `total`.  DEV-only.
 *
 * `newOffscreenPhases` (when present) splits the GPU `new_offscreen`
 * call further into the Rust-side phases — populated only when the GPU
 * path was taken, `null` for CPU-fallback sessions.
 */
export interface StartupBreakdown {
  total:        number;
  gpuProbe:     number;
  wasmImport:   number;
  newOffscreen: number;
  readyPost:    number;
  newOffscreenPhases: NewOffscreenPhases | null;
}

export interface NewOffscreenPhases {
  /** Adapter request + device creation. */
  deviceRequest:  number;
  /** TimestampPanel creation (no-op when feature absent). */
  panelInit:      number;
  /** World allocation + Methuselah seeding. */
  seeding:        number;
  /** Grid + Simulation (compute pipeline build, ping-pong buffers). */
  simulationInit: number;
  /** GpuRenderer (render pipeline, paper/theme params, surface configure). */
  rendererInit:   number;
}

/**
 * Per-pass GPU times sampled via WebGPU `timestamp-query`.  Each field is
 * milliseconds, or `null` when the corresponding pass did not run during
 * the sampled frame (e.g. the OR-edit queue was empty).  Emitted on the
 * same cadence as the worker's existing perf summary log.  DEV-only,
 * gated on adapter feature support — `null` from end to end on browsers
 * that don't grant `timestamp-query`.
 */
export interface GpuPassDurations {
  computeTickMs: number | null;
  xorEditMs:     number | null;
  orEditMs:      number | null;
  renderPassMs:  number | null;
}

/**
 * DEV-only memory estimate.  GPU buffer sizes are derived from canvas + grid
 * dims (wgpu exposes no VRAM total), so they're close estimates of the dominant
 * allocations, not exact driver figures.  Emitted on the perf-summary cadence.
 */
export interface MemoryBreakdown {
  canvasW: number;
  canvasH: number;
  surfaceBytes: number;            // canvas w×h×4 — ONE frame; swapchain is ×2–3
  cellBytes: number;               // 5 cell-plane-sized buffers (a/b pair + packed×2 + frozen)
  noiseBytes: number;              // paper-noise texture (256² RGBA8)
  workerHeapBytes: number | null;  // worker JS/WASM heap, if performance.memory exists
}

/**
 * Live worker-side render cost, emitted on a low fixed cadence (a few Hz) for
 * the dev perf HUD. Distinct from `perf_snapshot`, which is a pull-based dump
 * of the whole FrameTimer table: this is a small push used to drive a live
 * readout while you scroll, which is when the numbers actually matter.
 *
 * `rendered` vs `received` is the load-shedding signal — the gap is frames the
 * gate declined because the device could not sustain them (see frameGate.ts).
 */
export interface RenderCostStats {
  /** EMA the frame gate uses for its sustainable-rate decision (ms). */
  sustainedMs: number;
  /** Tail cost over the recent window (ms). */
  p95Ms: number;
  worstMs: number;
  /** 'frame' messages received vs actually rendered since the last emit. */
  received: number;
  rendered: number;
  /** Whether the camera was moving for the majority of the window — the
   *  expensive, uncapped case worth judging smoothness on. */
  moving: boolean;
}

export type WorkerOutMsg =
  | { type: 'ready'; backend: RendererBackend; gridInfo: GridInfo }
  // DEV-only: live render cost for the perf HUD (see RenderCostStats).
  | { type: 'render_cost'; stats: RenderCostStats }
  // Sent after resize so the main thread can update its CoordSnapshot.
  | { type: 'grid_info'; gridInfo: GridInfo }
  // Feature-channel replies (see the `feature` inbound message). `feature_state`
  // echoes the authoritative post-op collection back for the composable to
  // reconcile; `feature_error` reports a rejected op (invalid payload / missing
  // item). `items` is `unknown[]`: the main-thread composable re-normalizes on
  // receipt (`createFeatureComposable.syncFromWorker`), so the wire stays untyped
  // and the boundary owns validation.
  | { type: 'feature_state'; feature: string; items: unknown[] }
  | { type: 'feature_error'; feature: string; message: string }
  | { type: 'perf_snapshot'; stats: FrameStats[] }
  // DEV-only perf signals — see StartupBreakdown / GpuPassDurations.
  | { type: 'startup_breakdown'; phases: StartupBreakdown }
  | { type: 'gpu_pass_breakdown'; frame: number; durations: GpuPassDurations }
  | { type: 'memory_breakdown'; frame: number; mem: MemoryBreakdown }
  // DEV-only: CPU-reseed vs GPU-present split of the last tick_and_render,
  // to attribute the periodic tick spike. Posted on every base tick.
  | { type: 'tick_breakdown'; frame: number; reseedMs: number; presentMs: number }
  // One-shot signal: the worker successfully painted its first frame.
  // Used by AppBackground.vue to crossfade the canvas in from
  // `opacity: 0`, smoothing the otherwise-instantaneous reveal.
  | { type: 'first_frame_painted' }
  // Non-fatal diagnostic: the named phase failed and a fallback was (or was not) attempted.
  | { type: 'error'; phase: string; message: string };
