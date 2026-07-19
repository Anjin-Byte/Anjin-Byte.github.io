// Shared message types between AppBackground (main thread) and backgroundRenderer (worker).

import type { BlankZone } from '../types/blankZones';
import type { ThemePalette } from '../types/theme';
import type { FrameStats } from '../perf';

// 'gpu' = WebGPU (compute); 'webgl2' = WebGL2 GPGPU ping-pong fallback;
// 'cpu' = the static (no-simulation) fallback of last resort.
export type RendererBackend = 'gpu' | 'webgl2' | 'cpu';

/** Dev/testing override (via `?renderer=` on the page URL) that pins the
 *  worker to one backend instead of probing. Threaded through the init msg. */
export type ForcedBackend = 'webgpu' | 'webgl2' | 'static';

/** Frames between base simulation ticks. At 60 Hz: ~3.5 s per tick. */
export const TICK_EVERY = 175;

/**
 * Grid dimensions needed by the main thread for pixel → cell coordinate
 * mapping. `worldCols` / `worldRows` are the toroidal-wrap modulus for
 * world cell coordinates (currently 1024 × 1024); `paddedRows` /
 * `wordsPerRow` describe the bitpacked buffer layout.
 */
export interface GridInfo {
  worldCols:   number;
  worldRows:   number;
  paddedRows:  number;
  wordsPerRow: number;
  gridPitch:   number;  // float, matches PaperParams.grid_pitch_px
}

export type WorkerInMsg =
  // `theme` carries the resolved palette at boot so the worker can apply
  // it to the GPU before the first frame, avoiding a light-flash on
  // dark-OS users when their stored preference is `system`.  Subsequent
  // theme changes flow through the `set_theme` message.
  | { type: 'init'; canvas: OffscreenCanvas; theme: ThemePalette; forceBackend?: ForcedBackend }
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
  | { type: 'set_zones';    zones: BlankZone[] }
  | { type: 'add_zone';    zone:  BlankZone   }
  | { type: 'update_zone'; zone:  BlankZone   }
  | { type: 'remove_zone'; id:    string      }
  | { type: 'clear_zones' }
  | { type: 'set_theme'; theme: ThemePalette }
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

export type WorkerOutMsg =
  | { type: 'ready'; backend: RendererBackend; gridInfo: GridInfo }
  // Sent after resize so the main thread can update its CoordSnapshot.
  | { type: 'grid_info'; gridInfo: GridInfo }
  | { type: 'zones_state';  zones: BlankZone[] }
  | { type: 'zones_error';  message: string }
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
