// Pure geometry for the waymarker compass — no Vue, no DOM, unit-tested
// (app/src/tests/compass.test.ts).
//
// Each reachable island gets a circular marker whose SCREEN POSITION encodes its
// bearing (where it sits relative to you) and whose SIZE encodes its distance
// (nearer = bigger). Everything derives from the same camera transform the rest
// of the layout uses (see space/layout.ts `worldToScreen`).

import type { Camera } from '../types/space';
import { worldToScreen, type Viewport, type WorldPoint, type ScreenPoint } from './layout';

/** The marker containment region (the safe frame), in screen px. */
export interface Box {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

/**
 * Screen-space bearing (radians) from the viewport centre toward where `world`
 * projects under `camera`. `0` = +x (right), `+π/2` = down (+y is screen-down).
 */
export function bearingTo(world: WorldPoint, camera: Camera, viewport: Viewport): number {
  const s = worldToScreen(world, camera, viewport);
  return Math.atan2(s.y - viewport.h / 2, s.x - viewport.w / 2);
}

/** World-space distance from the camera focus to an island — drives marker size. */
export function worldDistance(world: WorldPoint, camera: Camera): number {
  return Math.hypot(world.x - camera.x, world.y - camera.y);
}

/**
 * Inverted, clamped marker radius: nearest island (`minDist`) → `maxR`, farthest
 * (`maxDist`) → `minR`. Distances are normalised across the constellation, and
 * `minR` is the click-target floor so far markers stay comfortably hittable.
 */
export function markerRadius(
  dist: number,
  minDist: number,
  maxDist: number,
  minR: number,
  maxR: number,
): number {
  if (maxDist <= minDist) return maxR;
  const t = Math.min(1, Math.max(0, (dist - minDist) / (maxDist - minDist)));
  return maxR + (minR - maxR) * t; // t=0 (near) → maxR, t=1 (far) → minR
}

/**
 * Point where a ray from `center` along unit `dir` first meets the `box`. The
 * centre is assumed inside the box, so exactly one wall is hit (smallest t > 0).
 */
export function rayBoxIntersection(center: ScreenPoint, dir: { x: number; y: number }, box: Box): ScreenPoint {
  let best = Infinity;
  const consider = (t: number): void => {
    if (t > 0 && t < best) best = t;
  };
  if (dir.x > 1e-9) consider((box.maxX - center.x) / dir.x);
  if (dir.x < -1e-9) consider((box.minX - center.x) / dir.x);
  if (dir.y > 1e-9) consider((box.maxY - center.y) / dir.y);
  if (dir.y < -1e-9) consider((box.minY - center.y) / dir.y);
  if (!Number.isFinite(best)) return { x: center.x, y: center.y };
  return { x: center.x + dir.x * best, y: center.y + dir.y * best };
}

/**
 * A marker's resting target: on the box edge along `bearing`, pulled inward by
 * `radius` so the circle sits flush inside the wall. `center` is the box centre.
 */
export function bearingTarget(center: ScreenPoint, bearing: number, box: Box, radius: number): ScreenPoint {
  const dir = { x: Math.cos(bearing), y: Math.sin(bearing) };
  const edge = rayBoxIntersection(center, dir, box);
  const tx = edge.x - dir.x * radius;
  const ty = edge.y - dir.y * radius;
  // Keep within the box even near corners (the perpendicular wall can clip).
  return {
    x: Math.min(box.maxX - radius, Math.max(box.minX + radius, tx)),
    y: Math.min(box.maxY - radius, Math.max(box.minY + radius, ty)),
  };
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
