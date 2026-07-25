import {
  shouldRenderFrame,
  MIN_RENDER_INTERVAL_MS,
  RENDER_GATE_TOLERANCE_MS,
  type FrameGateState,
} from '../workers/frameGate';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}

const GATE = MIN_RENDER_INTERVAL_MS - RENDER_GATE_TOLERANCE_MS;

function state(over: Partial<FrameGateState> = {}): FrameGateState {
  return {
    lastRenderTime: 1000,
    lastCameraX: 100,
    lastCameraY: 200,
    forceRenderUntil: 0,
    // Default: a device that keeps up. Every pre-existing test below asserts
    // the ORIGINAL frame-lock behaviour and must keep passing unchanged under
    // this default — that is the regression guard on the adaptive rule.
    sustainedRenderMs: 0,
    ...over,
  };
}

// THE frame-lock invariant — encoded permanently after it was broken twice in
// one day (pan ghosting, then scroll jitter): any camera movement at all, on
// either axis, however small, renders regardless of how recently we rendered.
function testMovingCameraAlwaysRenders(): void {
  const justRendered = 1000 + 0.1; // 0.1ms after the last render
  assert(
    shouldRenderFrame(justRendered, 101, 200, state()),
    'x moved → render, even 0.1ms after the last render',
  );
  assert(
    shouldRenderFrame(justRendered, 100, 201, state()),
    'y moved → render, even 0.1ms after the last render',
  );
  assert(
    shouldRenderFrame(justRendered, 100.0001, 200, state()),
    'sub-pixel motion still counts as motion (native scroll deltas can be tiny)',
  );
}

// First frame: NaN-seeded camera compares unequal to anything → renders.
function testFirstFrameRenders(): void {
  assert(
    shouldRenderFrame(0, 0, 0, state({ lastCameraX: Number.NaN, lastCameraY: Number.NaN, lastRenderTime: 0 })),
    'NaN-seeded state → first frame renders at t=0',
  );
}

// Static view: the ~60fps cap applies, with jitter tolerance.
function testStaticThrottle(): void {
  assert(
    !shouldRenderFrame(1000 + GATE - 0.01, 100, 200, state()),
    'static + under the tolerated window → skipped',
  );
  // Probe just past the boundary, not AT it: (1000 + GATE) - 1000 rounds a
  // hair below GATE in float64, and the exact boundary is behaviourally
  // meaningless (the 2ms tolerance exists to swallow sub-ms jitter).
  assert(
    shouldRenderFrame(1000 + GATE + 0.01, 100, 200, state()),
    'static + past the tolerated window → renders',
  );
  // 60 Hz rAF jitter: 16.0ms is under the raw interval but must NOT skip.
  assert(
    shouldRenderFrame(1000 + 16.0, 100, 200, state()),
    '16.0ms (60Hz frame with jitter) → renders despite < 16.67ms',
  );
  // 120 Hz half-step: 8.3ms must skip — that IS the cap working.
  assert(
    !shouldRenderFrame(1000 + 8.3, 100, 200, state()),
    '8.3ms (120Hz half-step) → skipped',
  );
}

// Theme-change burst: static view renders unconditionally inside the window,
// and returns to throttling the moment it expires.
function testBurstWindow(): void {
  const s = state({ forceRenderUntil: 1010 });
  assert(shouldRenderFrame(1005, 100, 200, s), 'inside burst window → renders while static');
  assert(!shouldRenderFrame(1010, 100, 200, s), 'window expired (>=) + 10ms since render → throttled again');
}

// Adaptive shedding while moving. The gate must never demand frames the device
// cannot finish, because the main thread posts one 'frame' per rAF unthrottled
// and the worker handles them serially — an overrunning render leaves the rest
// queued, each carrying an offset the DOM has already left behind.
function testSustainableRateWhileMoving(): void {
  // A device comfortably inside the frame budget behaves exactly as before:
  // motion renders on every real frame, at 120Hz as well as 60Hz.
  assert(
    shouldRenderFrame(1000 + 8.3, 101, 200, state({ sustainedRenderMs: 4 })),
    'fast device (4ms renders) → motion renders every frame at 120Hz',
  );
  assert(
    shouldRenderFrame(1000 + 16.7, 101, 200, state({ sustainedRenderMs: 4 })),
    'fast device → motion renders every frame at 60Hz',
  );
  // A render arriving sooner than the previous one could possibly have finished
  // is shed even on a fast device. rAF cannot deliver frames this close, and a
  // second render inside the first one's cost would be overwritten before it is
  // ever displayed — the gate must not spend the device's budget on it.
  assert(
    !shouldRenderFrame(1000 + 0.1, 101, 200, state({ sustainedRenderMs: 4 })),
    'sub-cost double render is shed (waste, not smoothness)',
  );
  // The boundary case that matters most: a device that can just about hold
  // 60fps must not be pushed at 120Hz, or it over-subscribes and queues.
  assert(
    !shouldRenderFrame(1000 + 8.3, 101, 200, state({ sustainedRenderMs: 10 })),
    '10ms renders on a 120Hz display → half the frames shed (60fps sustained, no backlog)',
  );
  assert(
    shouldRenderFrame(1000 + 16.6, 101, 200, state({ sustainedRenderMs: 10 })),
    '10ms renders → renders on the next 120Hz frame pair (sustainable 60fps)',
  );

  // A struggling device (renders cost ~25ms) must NOT try to render again
  // 8.3ms later just because the camera moved — that is what builds the queue.
  assert(
    !shouldRenderFrame(1000 + 8.3, 101, 200, state({ sustainedRenderMs: 25 })),
    'slow device → motion frame arriving inside the render cost is shed',
  );
  // …but it must still render as soon as it plausibly can.
  assert(
    shouldRenderFrame(1000 + 25, 101, 200, state({ sustainedRenderMs: 25 })),
    'slow device → renders again once the sustainable interval has passed',
  );

  // Shedding is a RATE limit, never a position compromise: whenever the gate
  // does open, it opens for the latest offset (the worker overwrites
  // pendingCamera* on every message, rendered or not). Encoded here as: a
  // large camera jump during shedding is not special-cased or fast-tracked.
  assert(
    !shouldRenderFrame(1000 + 1, 9999, 9999, state({ sustainedRenderMs: 25 })),
    'even a large jump is shed while over budget (position freshness comes from pendingCamera*, not extra renders)',
  );
}

// The static-view cap and the theme burst must be unaffected by render cost —
// a slow device still gets its ~60fps ceiling and its flicker-cure burst.
function testCostDoesNotLeakIntoStaticPaths(): void {
  assert(
    !shouldRenderFrame(1000 + 8.3, 100, 200, state({ sustainedRenderMs: 25 })),
    'static + slow device → still throttled by the 60fps cap',
  );
  assert(
    shouldRenderFrame(1000 + GATE + 0.01, 100, 200, state({ sustainedRenderMs: 25 })),
    'static + slow device → still renders past the 60fps window (cost does not gate static)',
  );
  assert(
    shouldRenderFrame(1005, 100, 200, state({ forceRenderUntil: 1010, sustainedRenderMs: 25 })),
    'theme burst still bypasses everything on a slow device',
  );
}

function run(): void {
  testMovingCameraAlwaysRenders();
  testFirstFrameRenders();
  testStaticThrottle();
  testBurstWindow();
  testSustainableRateWhileMoving();
  testCostDoesNotLeakIntoStaticPaths();
   
  console.log('frameGate.test.ts passed');
}

run();
