// Shared message types between AppBackground (main thread) and backgroundRenderer (worker).

import type { BlankZone } from '../types/blankZones';
import type { ThemePalette } from '../types/theme';
import type { FrameStats } from '../perf';

export type RendererBackend = 'gpu' | 'cpu';

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
  | { type: 'init'; canvas: OffscreenCanvas; cellPx: number; theme: ThemePalette }
  | { type: 'frame' }
  | { type: 'resize'; width: number; height: number }
  | { type: 'scroll'; scrollY: number }
  // Toggle a cell's alive/dead state. cx/cy are world-cell coordinates
  // already wrapped into [0, worldCols) × [0, worldRows) by the main
  // thread. scrollCanvasPx is the scroll offset at click time so the
  // worker can validate/log if needed.
  | { type: 'toggle_cell'; cx: number; cy: number; scrollCanvasPx: number }
  | { type: 'set_zones';    zones: BlankZone[] }
  | { type: 'add_zone';    zone:  BlankZone   }
  | { type: 'update_zone'; zone:  BlankZone   }
  | { type: 'remove_zone'; id:    string      }
  | { type: 'clear_zones' }
  | { type: 'set_theme'; theme: ThemePalette }
  | { type: 'perf_snapshot' }
  | { type: 'stop' };

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
  // One-shot signal: the worker successfully painted its first frame.
  // Used by AppBackground.vue to crossfade the canvas in from
  // `opacity: 0`, smoothing the otherwise-instantaneous reveal.
  | { type: 'first_frame_painted' }
  // Non-fatal diagnostic: the named phase failed and a fallback was (or was not) attempted.
  | { type: 'error'; phase: string; message: string };
