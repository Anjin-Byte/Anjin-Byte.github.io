// Pure geometry for bearing-based navigation — no Vue, no DOM, unit-tested
// (app/src/tests/compass.test.ts). Used by the dormant gesture break-away
// nav (useLaneScroll.ts): everything derives from the same camera transform
// the rest of the layout uses (see space/layout.ts `worldToScreen`).

import type { Camera } from '../types/space';
import { worldToScreen, type Viewport, type WorldPoint } from './layout';

/**
 * Screen-space bearing (radians) from the viewport centre toward where `world`
 * projects under `camera`. `0` = +x (right), `+π/2` = down (+y is screen-down).
 */
export function bearingTo(world: WorldPoint, camera: Camera, viewport: Viewport): number {
  const s = worldToScreen(world, camera, viewport);
  return Math.atan2(s.y - viewport.h / 2, s.x - viewport.w / 2);
}

/** Smallest absolute angular difference between two bearings, in `[0, π]`. */
export function angleDelta(a: number, b: number): number {
  let d = Math.abs(a - b) % (2 * Math.PI);
  if (d > Math.PI) d = 2 * Math.PI - d;
  return d;
}

/**
 * Of `islands` (each with a precomputed screen `bearing`), the one whose bearing
 * is nearest `gestureBearing` within `tolerance` radians — else `null`. This is
 * the break-away target ("over-scroll down → the island most below me").
 */
export function bearingNeighbor<T extends { bearing: number }>(
  islands: readonly T[],
  gestureBearing: number,
  tolerance: number,
): T | null {
  let best: T | null = null;
  let bestDelta = tolerance;
  for (const island of islands) {
    const d = angleDelta(island.bearing, gestureBearing);
    if (d <= bestDelta) {
      bestDelta = d;
      best = island;
    }
  }
  return best;
}
