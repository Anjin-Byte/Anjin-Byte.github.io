import {
  bearingTo,
  worldDistance,
  markerRadius,
  rayBoxIntersection,
  bearingTarget,
  angleDelta,
  bearingNeighbor,
  type Box,
} from '../space/compass';
import type { Camera } from '../types/space';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}
function assertClose(actual: number, expected: number, message: string, eps = 1e-6): void {
  if (Math.abs(actual - expected) > eps) throw new Error(`${message}: ${actual} !≈ ${expected}`);
}
function assertCloseP(a: { x: number; y: number }, e: { x: number; y: number }, m: string): void {
  assertClose(a.x, e.x, `${m} x`);
  assertClose(a.y, e.y, `${m} y`);
}

const CAM: Camera = { x: 0, y: 0, zoom: 1 };
const VP = { w: 800, h: 600 };

// Bearing is the screen direction from centre to the island: 0 = right, +π/2 =
// down (screen-y grows downward), π = left, −π/2 = up.
function testBearingTo(): void {
  assertClose(bearingTo({ x: 100, y: 0 }, CAM, VP), 0, 'right → 0');
  assertClose(bearingTo({ x: 0, y: 100 }, CAM, VP), Math.PI / 2, 'down → π/2');
  assertClose(bearingTo({ x: -100, y: 0 }, CAM, VP), Math.PI, 'left → π');
  assertClose(bearingTo({ x: 0, y: -100 }, CAM, VP), -Math.PI / 2, 'up → −π/2');
}

function testWorldDistance(): void {
  assertClose(worldDistance({ x: 3, y: 4 }, CAM), 5, '3-4-5');
}

// Inverted + clamped: nearest → maxR, farthest → minR.
function testMarkerRadius(): void {
  assertClose(markerRadius(0, 0, 100, 10, 50), 50, 'nearest → maxR');
  assertClose(markerRadius(100, 0, 100, 10, 50), 10, 'farthest → minR');
  assertClose(markerRadius(50, 0, 100, 10, 50), 30, 'mid → mid');
  assertClose(markerRadius(200, 0, 100, 10, 50), 10, 'beyond → clamp to minR');
  assertClose(markerRadius(5, 5, 5, 10, 50), 50, 'degenerate range → maxR');
}

function testRayBox(): void {
  const box: Box = { minX: 0, minY: 0, maxX: 100, maxY: 100 };
  const c = { x: 50, y: 50 };
  assertCloseP(rayBoxIntersection(c, { x: 1, y: 0 }, box), { x: 100, y: 50 }, 'right wall');
  assertCloseP(rayBoxIntersection(c, { x: 0, y: 1 }, box), { x: 50, y: 100 }, 'bottom wall');
  assertCloseP(rayBoxIntersection(c, { x: -1, y: 0 }, box), { x: 0, y: 50 }, 'left wall');
  const d = 1 / Math.SQRT2;
  assertCloseP(rayBoxIntersection(c, { x: d, y: d }, box), { x: 100, y: 100 }, 'corner');
}

// The rest target sits on the wall along the bearing, inset by the radius.
function testBearingTarget(): void {
  const box: Box = { minX: 0, minY: 0, maxX: 100, maxY: 100 };
  const c = { x: 50, y: 50 };
  assertCloseP(bearingTarget(c, 0, box, 10), { x: 90, y: 50 }, 'right inset');
  assertCloseP(bearingTarget(c, Math.PI / 2, box, 10), { x: 50, y: 90 }, 'down inset');
}

function testAngleDelta(): void {
  assertClose(angleDelta(0.1, Math.PI * 2 - 0.1), 0.2, 'wrap-around');
  assertClose(angleDelta(0, Math.PI), Math.PI, 'opposite');
  assertClose(angleDelta(0.5, 0.5), 0, 'same');
}

// Break-away picks the island whose bearing best matches the gesture, else null.
function testBearingNeighbor(): void {
  const islands = [
    { id: 'a', bearing: 0 },
    { id: 'b', bearing: Math.PI / 2 },
    { id: 'c', bearing: -Math.PI / 2 },
  ];
  assert(bearingNeighbor(islands, Math.PI / 2, 0.5)?.id === 'b', 'down → b');
  assert(bearingNeighbor(islands, 0, 0.5)?.id === 'a', 'right → a');
  assert(bearingNeighbor(islands, Math.PI, 0.5) === null, 'no match in tolerance → null');
}

function run(): void {
  testBearingTo();
  testWorldDistance();
  testMarkerRadius();
  testRayBox();
  testBearingTarget();
  testAngleDelta();
  testBearingNeighbor();
  // eslint-disable-next-line no-console
  console.log('compass.test.ts passed');
}

run();
