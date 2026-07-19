// Pure render-gate decision for the worker's 'frame' handler — no worker
// globals, no Date/performance, so the frame-lock contract is unit-testable
// in the node harness (see tests/frameGate.test.ts). Extracted after this
// logic shipped two regressions in one day while it lived inline: a throttle
// that ignored camera flies (pan ghosting), then one that ignored native
// scroll (grid jitter). The invariant the tests encode permanently:
//
//   WHILE THE CAMERA OFFSET IS MOVING, EVERY FRAME RENDERS.
//
// The ~60fps cap exists only to bound the CONTINUOUS cost of a static view
// (the background runs for the whole session; a 120 Hz display would pay
// double for nothing). Motion is transient and must track the DOM exactly —
// rendererProtocol's frame-lock contract.

/** Cap interval for the static-view throttle (~60fps). */
export const MIN_RENDER_INTERVAL_MS = 1000 / 60;

/** Subtracted from the interval in the gate comparison so rAF timestamp
 *  jitter on a true 60 Hz display (frames at 16.4ms, 16.9ms, …) never trips
 *  the throttle into skipping a frame it should keep. On 120 Hz the
 *  half-step frames (~8.3ms) still fall well under the tolerated window, so
 *  the cap stays an exact every-other-frame 60fps there. Skipped presents
 *  are not harmless cosmetically: Firefox's WebGPU compositor can re-show a
 *  stale swapchain buffer on frames where the worker didn't present. */
export const RENDER_GATE_TOLERANCE_MS = 2;

export interface FrameGateState {
  /** Timestamp of the last rendered frame (0 before any render). */
  lastRenderTime: number;
  /** Camera offset of the last RENDERED frame — NaN before the first render,
   *  so the first frame always renders (NaN !== anything). */
  lastCameraX: number;
  lastCameraY: number;
  /** Deadline (ms timestamp) below which every frame renders — armed by
   *  set_theme so the swapchain's whole buffer rotation is refreshed with
   *  the new theme back-to-back (Firefox stale-buffer flicker). */
  forceRenderUntil: number;
}

/** Should this 'frame' message run the (expensive) tick/render? The caller
 *  updates its state (lastRenderTime + lastCamera*) only when this is true. */
export function shouldRenderFrame(
  nowMs: number,
  cameraX: number,
  cameraY: number,
  state: FrameGateState,
): boolean {
  const cameraMoved = cameraX !== state.lastCameraX || cameraY !== state.lastCameraY;
  if (cameraMoved) return true;
  if (nowMs < state.forceRenderUntil) return true;
  return nowMs - state.lastRenderTime >= MIN_RENDER_INTERVAL_MS - RENDER_GATE_TOLERANCE_MS;
}
