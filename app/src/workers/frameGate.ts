// Pure render-gate decision for the worker's 'frame' handler — no worker
// globals, no Date/performance, so the frame-lock contract is unit-testable
// in the node harness (see tests/frameGate.test.ts). Extracted after this
// logic shipped two regressions in one day while it lived inline: a throttle
// that ignored camera flies (pan ghosting), then one that ignored native
// scroll (grid jitter). The invariant the tests encode permanently:
//
//   WHILE THE CAMERA OFFSET IS MOVING, RENDER AS FAST AS THE DEVICE CAN
//   ACTUALLY SUSTAIN — on hardware that keeps up, that is EVERY FRAME.
//
// The ~60fps cap exists only to bound the CONTINUOUS cost of a static view
// (the background runs for the whole session; a 120 Hz display would pay
// double for nothing). Motion is transient and must track the DOM exactly —
// rendererProtocol's frame-lock contract.
//
// ── Why "as fast as it can sustain" and not literally every frame ──────────
// The original rule was an unconditional `cameraMoved → render`. That assumed
// render time always fits inside the frame interval. When it does not (dev
// builds, low-power mode, weak GPUs), the assumption fails badly: the main
// thread posts a 'frame' every rAF unthrottled, the worker handles them
// serially, and each render that overruns leaves more messages queued behind
// it. The backlog only drains when motion stops, and every message in it
// carries a STALE camera offset — so the grid renders positions the DOM has
// already left, falling further behind the longer you scroll. That reads as
// exactly the thing frame-lock exists to prevent, plus stutter.
//
// Shedding does NOT lower the achievable render rate: a device that can only
// finish 30 renders/sec finishes 30 either way. It only stops us spending
// those 30 renders on stale positions. So the gate is strictly better for the
// frame-lock's real goal ("the grid shows where the DOM is now"), and on
// hardware that keeps up (`sustainedRenderMs` at or below the frame interval)
// the behaviour is bit-for-bit the old one.

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
  /** Smoothed cost of a recent rendered frame (ms) — the worker's EMA of how
   *  long tick/render actually takes on THIS device right now. `0` means "no
   *  measurement yet", which reproduces the original always-render behaviour.
   *  Used only while moving, to avoid demanding frames the device cannot
   *  finish (see the header note). */
  sustainedRenderMs: number;
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
  if (cameraMoved) {
    // Sustainable-rate check: never START a render sooner than the last one
    // took to finish. With `sustainedRenderMs` at 0 (no measurement yet) this
    // is `>= 0` — always true — i.e. exactly the old unconditional rule, which
    // is also what any device comfortably inside its frame interval sees.
    //
    // Deliberately NO tolerance subtraction here, unlike the static cap below.
    // There the 2ms absorbs rAF jitter against a fixed 60fps ceiling; here it
    // would license starting renders fractionally faster than they complete,
    // which is precisely the over-subscription that builds the stale-frame
    // backlog. The whole point of this branch is to not over-subscribe.
    return nowMs - state.lastRenderTime >= state.sustainedRenderMs;
  }
  if (nowMs < state.forceRenderUntil) return true;
  return nowMs - state.lastRenderTime >= MIN_RENDER_INTERVAL_MS - RENDER_GATE_TOLERANCE_MS;
}
