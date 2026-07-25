// The internal renderer-adapter contract. Each backend (WebGPU, WebGL2, static)
// is wrapped in an object of this shape so the worker's frame loop drives them
// uniformly. This is the boundary between the worker's orchestration and the
// backend-specific wasm handles — distinct from rendererProtocol.ts, which is
// the main-thread ↔ worker message protocol.

import type { BlankZone } from '../types/blankZones';
import type { ThemePalette } from '../types/theme';
import type { GridInfo } from './rendererProtocol';

// Function-property syntax (not methods): this-less, so callers may detach them
// (e.g. capturing an optional method into a const to satisfy the compiler).
export interface Renderer {
  tick: () => void;
  renderOnly?: () => void;
  resize: (w: number, h: number) => void;
  setCamera?: (x: number, y: number) => void;
  setTransition?: (transitionT: number) => void;
  /** First-paint cell-ink fade: ramps 0 → 1 to gradually reveal cells.
   *  Optional — CPU fallback doesn't implement it. */
  setInitFade?: (t: number) => void;
  toggleCell?: (cx: number, cy: number) => void;
  setZones?: (zones: BlankZone[]) => void;
  setTheme?: (theme: ThemePalette) => void;
  gridInfo?: () => GridInfo;
  /** DEV-only: pull most recent per-pass GPU durations.  `null` when the
   *  renderer doesn't support timestamp queries (CPU fallback, or
   *  WebGPU adapter without `TIMESTAMP_QUERY` granted). */
  pullGpuPassDurations?: () => {
    computeTickMs: number | null;
    xorEditMs:     number | null;
    orEditMs:      number | null;
    renderPassMs:  number | null;
  } | null;
  /** DEV-only: CPU-reseed vs GPU-present split (ms) of the last tick_and_render. */
  pullTickBreakdown?: () => { reseedMs: number; presentMs: number } | null;
  free: () => void;
}
