// Pure decision logic for vertical break-away — no Vue, no DOM, unit-testable
// (app/src/tests/breakAway.test.ts).
//
// When a captured island is over-scrolled past its top/bottom edge with enough
// sustained intent, navigation "breaks away" to the vertical neighbour. The
// browser contains the over-scroll (`overscroll-behavior-y: contain` on the
// panel); these functions only decide *whether* an over-scroll should fire a
// break. All side effects (listening, navigating) live in the composable.

export interface ScrollEdgeState {
  scrollTop: number;
  scrollHeight: number;
  clientHeight: number;
}

/** -1 = over-scrolling up past the top, +1 = down past the bottom, 0 = neither. */
export type BreakDir = -1 | 0 | 1;

// Sub-pixel slack so fractional scrollTop / DPR rounding still reads as "at edge".
const EDGE_EPSILON = 1;

/**
 * Direction a wheel/drag is pushing PAST a scroll edge. `deltaY > 0` is downward
 * intent. Returns 0 unless the container is at the relevant edge AND the input
 * pushes further past it (when not at an edge, the browser scrolls natively).
 */
export function overscrollDirection(state: ScrollEdgeState, deltaY: number): BreakDir {
  const atTop = state.scrollTop <= EDGE_EPSILON;
  const atBottom = state.scrollTop >= state.scrollHeight - state.clientHeight - EDGE_EPSILON;
  if (atTop && deltaY < 0) return -1;
  if (atBottom && deltaY > 0) return 1;
  return 0;
}

export interface BreakAccumulator {
  dir: BreakDir;
  amount: number;
}

export const ZERO_ACCUMULATOR: BreakAccumulator = { dir: 0, amount: 0 };

/**
 * Fold one over-scroll step into the accumulator. Resets when not over-scrolling
 * (`dir === 0`) or when the direction flips. When the accumulated magnitude
 * reaches `threshold`, returns `fire` = the break direction (and a reset
 * accumulator); otherwise `fire = 0`. The threshold is the "magnetic tension" —
 * a weak nudge never accumulates to a break.
 */
export function stepBreakAccumulator(
  acc: BreakAccumulator,
  dir: BreakDir,
  magnitude: number,
  threshold: number,
): { acc: BreakAccumulator; fire: BreakDir } {
  if (dir === 0) return { acc: ZERO_ACCUMULATOR, fire: 0 };
  const amount = (acc.dir === dir ? acc.amount : 0) + Math.abs(magnitude);
  if (amount >= threshold) return { acc: ZERO_ACCUMULATOR, fire: dir };
  return { acc: { dir, amount }, fire: 0 };
}

// ── Horizontal lane navigation (two-finger scroll) ───────────────────────────

export type Axis = 'none' | 'horizontal' | 'vertical';

/**
 * Lock a scroll gesture to an axis once accumulated movement passes `threshold`.
 * Horizontal only wins when |accX| dominates by `bias` (> 1), so a normal —
 * never perfectly straight — vertical scroll stays vertical and the camera
 * never drifts sideways; only a deliberate sideways scroll navigates. Below the
 * threshold the axis is still undetermined ('none').
 */
export function lockedAxis(accX: number, accY: number, threshold: number, bias: number): Axis {
  if (Math.abs(accX) < threshold && Math.abs(accY) < threshold) return 'none';
  return Math.abs(accX) > Math.abs(accY) * bias ? 'horizontal' : 'vertical';
}

/**
 * Camera.x while tugging from the lane by accumulated horizontal `displacement`
 * (sum of wheel deltaX) at `damping` (< 1 = magnetic resistance). Positive
 * displacement → camera moves east.
 */
export function tugCameraX(laneX: number, displacement: number, damping: number): number {
  return laneX + displacement * damping;
}

/**
 * Break direction from accumulated horizontal `displacement`: `>= dist` → `+1`
 * (east neighbour), `<= -dist` → `-1` (west), else `0` (spring back to the lane).
 */
export function horizontalBreakDir(displacement: number, dist: number): -1 | 0 | 1 {
  if (displacement >= dist) return 1;
  if (displacement <= -dist) return -1;
  return 0;
}
