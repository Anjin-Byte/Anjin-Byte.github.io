import {
  budgetMs,
  inferRefreshHz,
  classifyFrame,
  summarise,
  LATE_FRAME_FACTOR,
  JANK_FRAME_FACTOR,
} from '../perf/frameBudget';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}

function close(a: number, b: number, tol: number, message: string): void {
  if (Math.abs(a - b) > tol) throw new Error(`${message}\nexpected ≈${b}, got ${a}`);
}

function testBudget(): void {
  close(budgetMs(60), 16.67, 0.01, '60Hz slot');
  close(budgetMs(120), 8.33, 0.01, '120Hz slot');
}

// The inferred rate drives the budget, so a wrong inference silently moves the
// pass/fail line. Jittery real-world intervals must still snap to the display.
function testInferRefresh(): void {
  assert(inferRefreshHz(16.67) === 60, '16.67ms → 60Hz');
  assert(inferRefreshHz(8.33) === 120, '8.33ms → 120Hz');
  assert(inferRefreshHz(16.2) === 60, 'jittery 16.2ms still snaps to 60Hz');
  assert(inferRefreshHz(8.6) === 120, 'jittery 8.6ms still snaps to 120Hz');
  assert(inferRefreshHz(0) === 60, 'degenerate input falls back to 60Hz');
  // An unusual panel is reported as measured rather than force-snapped.
  assert(inferRefreshHz(1000 / 47) === 47, 'uncommon rate reported as measured');
}

function testClassify(): void {
  const b = budgetMs(60);
  assert(classifyFrame(b, b) === 'ok', 'exactly on budget is ok (boundary jitter)');
  assert(classifyFrame(b * 1.2, b) === 'ok', 'mild overrun is still ok');
  assert(classifyFrame(b * LATE_FRAME_FACTOR, b) === 'late', 'past the late factor → late');
  assert(classifyFrame(b * JANK_FRAME_FACTOR, b) === 'jank', 'past the jank factor → jank');
}

// The headline claim of the whole model: a good AVERAGE must not be allowed to
// hide periodic hitching. This is the case the HUD exists to expose.
function testSpikesBeatAverages(): void {
  // 59 good 120Hz frames + one 40ms stall. Mean is ~8.9ms — inside a 60Hz
  // budget, and utterly misleading.
  const deltas = [...Array<number>(59).fill(8.33), 40];
  const r = summarise(deltas, 4);
  assert(r.refreshHz === 120, 'median (not mean) keeps the 120Hz inference');
  assert(r.jankRatio > 0, 'the 40ms stall is counted as jank at 120Hz');
  assert(!r.smooth, 'one visible hitch in 60 frames is NOT smooth');
  assert(r.worstDeltaMs === 40, 'worst frame surfaced verbatim');
}

function testSteadyRunIsSmooth(): void {
  const r = summarise(Array<number>(120).fill(8.33), 3);
  assert(r.smooth, 'a steady 120Hz run is smooth');
  assert(r.lateRatio === 0, 'no late frames in a steady run');
  close(r.fps, 120, 1, 'fps matches the interval');
  close(r.utilisation, 3 / budgetMs(120), 0.01, 'utilisation is cost/slot');
}

// A device sustaining a lower rate CLEANLY is smooth at that rate — that is the
// whole point of the adaptive gate (steady 60 beats stuttering toward 120).
// Lateness and jank are judged on different scales on purpose: a run can sit
// under the late-frame allowance and still be disqualified by one real freeze.
function testJankIsJudgedSeparatelyFromLateness(): void {
  // 1 jank frame in 200 → lateRatio 0.5% (well under the 2% allowance), but the
  // hitch is visible, so the verdict must still be "not smooth".
  const withJank = [...Array<number>(199).fill(16.67), 60];
  const rj = summarise(withJank, 5);
  assert(rj.lateRatio <= 0.02, 'a single hitch stays under the late-frame allowance');
  assert(!rj.smooth, 'but one visible freeze still fails the verdict');

  // Meanwhile a run of merely-late frames at the same ratio is tolerated.
  const withLate = [...Array<number>(199).fill(16.67), 16.67 * 1.6];
  assert(summarise(withLate, 5).smooth, 'an equally rare merely-late frame is tolerated');
}

function testSteadyLowerRateIsSmooth(): void {
  const r = summarise(Array<number>(60).fill(16.67), 10);
  assert(r.refreshHz === 60, 'steady 16.67ms reads as a 60Hz device');
  assert(r.smooth, 'a steady 60Hz run is smooth, not penalised for not being 120');
  assert(r.utilisation > 0.5, '10ms of work in a 16.67ms slot exceeds the headroom target');
}

// REGRESSION: a real HUD reading of a steady 33ms cadence reported "30Hz,
// smooth" — the yardstick had degraded along with the thing it was measuring,
// so a 4x miss on a 120Hz panel scored a pass. Steadiness alone is not
// smoothness; the comparison must be against demonstrated capability.
function testSteadyButDownclockedIsNotSmoothWhileMoving(): void {
  const at30 = Array<number>(120).fill(33.3);

  // No knowledge of the display yet → the old, and still correct, reading:
  // nothing observed contradicts a genuine 30Hz panel.
  const naive = summarise(at30, 2);
  assert(naive.smooth, 'with no capability evidence, a steady rate is all we can call smooth');

  // Having seen 120Hz, the same intervals during MOTION are a fault.
  const moving = summarise(at30, 2, 120, true);
  assert(moving.downclocked, 'delivery at 30 against a demonstrated 120 is downclocked');
  assert(!moving.smooth, 'half-rate-or-worse delivery while moving is NOT smooth');
  assert(moving.capableHz === 120, 'capability is reported, not overwritten by current rate');
  assert(moving.lateRatio === 0, 'and it is not smooth DESPITE zero late frames — the point');

  // Static, though, is allowed to downclock: the OS saving power on a
  // motionless view is not a rendering fault.
  const still = summarise(at30, 2, 120, false);
  assert(still.downclocked, 'still flagged as downclocked for visibility');
  assert(still.smooth, 'but not a fault while static');
}

// Capability must never be understated by the current window.
function testCapabilityIsAHighWaterMark(): void {
  const fast = summarise(Array<number>(120).fill(8.33), 2, 60, true);
  assert(fast.capableHz === 120, 'observing 120 raises capability above a stale 60');
  assert(!fast.downclocked, 'delivering at capability is not downclocked');
}

function testEmptyWindow(): void {
  const r = summarise([], 0);
  assert(r.smooth, 'no samples → no complaint');
  assert(r.fps === 0, 'no samples → no fps');
}

function run(): void {
  testBudget();
  testInferRefresh();
  testClassify();
  testSpikesBeatAverages();
  testJankIsJudgedSeparatelyFromLateness();
  testSteadyRunIsSmooth();
  testSteadyLowerRateIsSmooth();
  testSteadyButDownclockedIsNotSmoothWhileMoving();
  testCapabilityIsAHighWaterMark();
  testEmptyWindow();

  console.log('frameBudget.test.ts passed');
}

run();
