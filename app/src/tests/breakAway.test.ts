import {
  overscrollDirection,
  stepBreakAccumulator,
  ZERO_ACCUMULATOR,
  lockedAxis,
  tugCameraX,
  horizontalBreakDir,
  type ScrollEdgeState,
} from '../space/breakAway';
import { verticalNeighbor, horizontalNeighbor } from '../space/waypoints';

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

// overscrollDirection only fires when AT the edge and pushing PAST it; mid-scroll
// and pushing-into-the-content both yield 0 (the browser scrolls natively there).
function testOverscrollDirection(): void {
  const mid: ScrollEdgeState = { scrollTop: 200, scrollHeight: 2000, clientHeight: 800 };
  assertEq(overscrollDirection(mid, 100), 0, 'mid + down → 0');
  assertEq(overscrollDirection(mid, -100), 0, 'mid + up → 0');

  const atTop: ScrollEdgeState = { scrollTop: 0, scrollHeight: 2000, clientHeight: 800 };
  assertEq(overscrollDirection(atTop, -100), -1, 'top + up → break up');
  assertEq(overscrollDirection(atTop, 100), 0, 'top + down → scrolls in, no break');

  const atBottom: ScrollEdgeState = { scrollTop: 1200, scrollHeight: 2000, clientHeight: 800 };
  assertEq(overscrollDirection(atBottom, 100), 1, 'bottom + down → break down');
  assertEq(overscrollDirection(atBottom, -100), 0, 'bottom + up → scrolls in, no break');

  // Content that fits the viewport is at top AND bottom — wheel either way breaks.
  const fits: ScrollEdgeState = { scrollTop: 0, scrollHeight: 800, clientHeight: 800 };
  assertEq(overscrollDirection(fits, 100), 1, 'fits + down → break down');
  assertEq(overscrollDirection(fits, -100), -1, 'fits + up → break up');
}

// The accumulator is the magnetic tension: accumulate same-direction magnitude,
// reset on flip or no-overscroll, fire (and reset) at threshold.
function testAccumulator(): void {
  const T = 280;

  let r = stepBreakAccumulator(ZERO_ACCUMULATOR, 1, 100, T);
  assertEq(r.fire, 0, 'below threshold → no fire');
  assertEq(r.acc, { dir: 1, amount: 100 }, 'accumulates');

  r = stepBreakAccumulator(r.acc, 1, 100, T);
  assertEq(r.acc, { dir: 1, amount: 200 }, 'accumulates same direction');

  r = stepBreakAccumulator(r.acc, 1, 100, T); // 300 ≥ 280
  assertEq(r.fire, 1, 'crossing threshold fires the break direction');
  assertEq(r.acc, ZERO_ACCUMULATOR, 'fire resets the accumulator');

  // A direction flip discards the old accumulation.
  const built = stepBreakAccumulator(ZERO_ACCUMULATOR, 1, 200, T).acc;
  const flipped = stepBreakAccumulator(built, -1, 100, T);
  assertEq(flipped.acc, { dir: -1, amount: 100 }, 'flip resets to the new direction');

  // Not over-scrolling (dir 0) resets, never fires.
  const zeroed = stepBreakAccumulator({ dir: 1, amount: 200 }, 0, 100, T);
  assertEq(zeroed.acc, ZERO_ACCUMULATOR, 'dir 0 resets');
  assertEq(zeroed.fire, 0, 'dir 0 never fires');
}

// The unit-grid topology is the navigation graph.
function testVerticalNeighbor(): void {
  assertEq(verticalNeighbor('hero', 1)?.id, 'contact', 'hero down → contact');
  assertEq(verticalNeighbor('hero', -1)?.id, 'about', 'hero up → about');
  assertEq(verticalNeighbor('contact', 1), null, 'contact down → none (no gy=2)');
  assertEq(verticalNeighbor('about', -1), null, 'about up → none');
  assertEq(verticalNeighbor('resume', 1), null, 'resume (horizontal lane) → none');
  assertEq(verticalNeighbor('projects', -1), null, 'projects (horizontal lane) → none');
}

// Biased dominant-axis lock: below threshold undetermined; horizontal only when
// it dominates by the bias, so a wobbly vertical scroll stays vertical.
function testLockedAxis(): void {
  const T = 24;
  const B = 1.4;
  assertEq(lockedAxis(5, 5, T, B), 'none', 'below threshold → none');
  assertEq(lockedAxis(40, 10, T, B), 'horizontal', 'clearly horizontal → horizontal');
  assertEq(lockedAxis(10, 40, T, B), 'vertical', 'clearly vertical → vertical');
  assertEq(lockedAxis(30, 28, T, B), 'vertical', 'near-diagonal favours vertical (bias)');
  assertEq(lockedAxis(-50, 12, T, B), 'horizontal', 'sign-agnostic horizontal');
}

// The tug: positive displacement (scroll right) moves the camera east, damped.
function testTugCameraX(): void {
  assertEq(tugCameraX(1000, 200, 0.6), 1120, 'scroll right → camera east, damped');
  assertEq(tugCameraX(1000, -200, 0.6), 880, 'scroll left → camera west, damped');
  assertEq(tugCameraX(0, 0, 0.6), 0, 'no scroll → no move');
}

// Break boundary: |displacement| ≥ dist fires the gx-delta (right → east).
function testHorizontalBreakDir(): void {
  const D = 300;
  assertEq(horizontalBreakDir(300, D), 1, 'scroll right at distance → +1 (east)');
  assertEq(horizontalBreakDir(-300, D), -1, 'scroll left at distance → -1 (west)');
  assertEq(horizontalBreakDir(299, D), 0, 'just short → spring back');
  assertEq(horizontalBreakDir(0, D), 0, 'no scroll → no break');
}

// The unit-grid topology is the navigation graph (horizontal axis).
function testHorizontalNeighbor(): void {
  assertEq(horizontalNeighbor('hero', 1)?.id, 'projects', 'hero east → projects');
  assertEq(horizontalNeighbor('hero', -1)?.id, 'resume', 'hero west → resume');
  assertEq(horizontalNeighbor('projects', 1), null, 'projects east → none (no gx=2)');
  assertEq(horizontalNeighbor('contact', 1), null, 'contact (vertical lane) → none');
}

function run(): void {
  testOverscrollDirection();
  testAccumulator();
  testVerticalNeighbor();
  testLockedAxis();
  testTugCameraX();
  testHorizontalBreakDir();
  testHorizontalNeighbor();
  // eslint-disable-next-line no-console
  console.log('breakAway.test.ts passed');
}

run();
