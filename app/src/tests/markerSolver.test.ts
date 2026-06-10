import { solveMarkers, type Marker } from '../space/markerSolver';
import type { Box } from '../space/compass';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}
function assertClose(actual: number, expected: number, message: string, eps = 1e-6): void {
  if (Math.abs(actual - expected) > eps) throw new Error(`${message}: ${actual} !≈ ${expected}`);
}

const BOX: Box = { minX: 0, minY: 0, maxX: 200, maxY: 200 };
// stiffness 1 + friction 0 → predicted = target, no momentum (tests the constraints).
const SNAP = { stiffness: 1, friction: 0, iterations: 8 };

/** A still marker (no velocity) at `(x,y)` heading to `(tx,ty)`. */
function still(x: number, y: number, tx: number, ty: number, r: number): Marker {
  return { pos: { x, y }, prevPos: { x, y }, target: { x: tx, y: ty }, radius: r };
}

// Markers already pinned to a wall and spread stay put (fixed point).
function testRest(): void {
  const out = solveMarkers([still(15, 60, 15, 60, 15), still(15, 140, 15, 140, 15)], BOX, SNAP);
  assertClose(out[0].x, 15, 'rest 0 on wall');
  assertClose(out[0].y, 60, 'rest 0 y');
  assertClose(out[1].x, 15, 'rest 1 on wall');
  assertClose(out[1].y, 140, 'rest 1 y');
}

// Collinear markers (same wall target) spread ALONG the wall (Y), staying pinned
// to the edge (x) — the "settle at the edge" fix.
function testSpreadAlongWall(): void {
  const out = solveMarkers([still(15, 100, 15, 100, 15), still(15, 100, 15, 100, 15)], BOX, SNAP);
  assertClose(out[0].x, 15, 'stays pinned to wall (0)');
  assertClose(out[1].x, 15, 'stays pinned to wall (1)');
  assert(Math.abs(out[0].y - out[1].y) >= 30 - 1e-6, `spread along wall: ${Math.abs(out[0].y - out[1].y)} ≥ 30`);
}

// A target outside the box is snapped to its wall and clamped inside.
function testContainment(): void {
  const out = solveMarkers([still(-50, -50, -50, -50, 10)], BOX, SNAP);
  assertClose(out[0].x, 10, 'snapped to left wall (minX + r)');
  assertClose(out[0].y, 10, 'clamped y into box (minY + r)');
}

// Momentum: a marker moving tangentially along its wall glides further (Verlet),
// while the wall keeps it pinned perpendicular.
function testTangentialMomentum(): void {
  const m: Marker = { pos: { x: 15, y: 100 }, prevPos: { x: 15, y: 90 }, target: { x: 15, y: 100 }, radius: 15 };
  const out = solveMarkers([m], BOX, { stiffness: 0, friction: 0.5, iterations: 4 });
  assertClose(out[0].x, 15, 'stays pinned to the wall');
  assert(out[0].y > 100, `glided forward by momentum: ${out[0].y} > 100`);
}

function run(): void {
  testRest();
  testSpreadAlongWall();
  testContainment();
  testTangentialMomentum();
  // eslint-disable-next-line no-console
  console.log('markerSolver.test.ts passed');
}

run();
