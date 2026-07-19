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

function run(): void {
  testMovingCameraAlwaysRenders();
  testFirstFrameRenders();
  testStaticThrottle();
  testBurstWindow();
  // eslint-disable-next-line no-console
  console.log('frameGate.test.ts passed');
}

run();
