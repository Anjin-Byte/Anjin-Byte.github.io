// WebGPU renderer adapter. Wraps a constructed `GpuGameOfLife` wasm handle in
// the worker's `Renderer` contract. Pure factory: given the handle + an error
// sink, returns the adapter. Orchestration (canvas commit, ready post, camera
// re-apply, startup timing) stays in backgroundRenderer.ts — this only maps the
// handle's methods onto the contract.

import type { GpuGameOfLife } from '@gpu-pkg/game_of_life_gpu.js';
import { createLogger } from '../logger';
import { PERF_ENABLED } from '../perf';
import type { BlankZone } from '../types/blankZones';
import type { ThemePalette } from '../types/theme';
import { serializeTheme } from '../types/theme';
import { devicePx, worldCell } from '../utils/units';
import { errorMessage } from './renderHelpers';
import type { Renderer } from './renderer';
import type { GridInfo } from './rendererProtocol';

const log = createLogger('Renderer');

// The WebGPU backend always reports grid info (it owns the addressable cell
// grid), so the return type narrows `gridInfo` to required — the worker can call
// it without a non-null assertion at the ready-post.
export function makeGpuRenderer(
  gpu: GpuGameOfLife,
  postZonesError: (message: string) => void,
): Renderer & { gridInfo: () => GridInfo } {
  // Verify set_zones is present at init time so a future rename/removal produces
  // a visible warning rather than silently failing on every zone update.
  // Zones/theme cross as JS objects (serde-wasm-bindgen), not JSON strings —
  // these may not be in the generated .d.ts, so probe structurally.
  const gpuExt = gpu as unknown as {
    set_zones?: (zones: unknown) => void;
    set_theme?: (theme: unknown) => void;
  };
  const setZonesOnGpu = (zones: BlankZone[]): void => {
    if (typeof gpuExt.set_zones !== 'function') return;
    try {
      gpuExt.set_zones(zones);
    } catch (err) {
      postZonesError(`GPU zone update failed: ${errorMessage(err)}`);
    }
  };
  const setThemeOnGpu = (theme: ThemePalette): void => {
    if (typeof gpuExt.set_theme !== 'function') return;
    try {
      gpuExt.set_theme(serializeTheme(theme));
    } catch (err) {
      log.error('GPU theme update failed:', errorMessage(err));
    }
  };
  const getGridInfo = (): GridInfo => ({
    worldCols:   worldCell(gpu.world_cols()),
    worldRows:   worldCell(gpu.world_rows()),
    paddedRows:  gpu.padded_rows(),
    wordsPerRow: gpu.words_per_row(),
    gridPitch:   devicePx(gpu.grid_pitch()),
  });

  // Track if we've logged the timestamp-query availability hint already
  // (one-shot — DEV log to point developers at the flag).
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

  return {
    tick:       () => gpu.tick_and_render(),
    renderOnly: () => gpu.render_only(),
    // Canvas dim writes happen in the top-level 'resize' handler so
    // they apply even when the renderer is mid-init.  This closure
    // only updates the GPU surface and viewport uniforms.
    resize:     (w, h) => gpu.resize(w, h),
    setCamera:  (x, y) => gpu.set_camera(x, y),
    setTransition: (transitionT) => gpu.set_transition(transitionT),
    setInitFade: (t) => gpu.set_init_fade(t),
    toggleCell: (cx, cy) => { gpu.toggle_cell(cx, cy); gpu.flush_and_render(); },
    setZones:   (zones)  => setZonesOnGpu(zones),
    setTheme:   (theme)  => setThemeOnGpu(theme),
    gridInfo:   getGridInfo,
    pullGpuPassDurations,
    pullTickBreakdown: () => ({ reseedMs: gpu.last_reseed_ms(), presentMs: gpu.last_present_ms() }),
    free:       () => gpu.free(),
  };
}
