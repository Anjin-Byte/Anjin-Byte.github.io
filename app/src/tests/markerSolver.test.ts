import { solveMarkers, type Marker } from '../space/markerSolver';
import type { Box } from '../space/compass';
import type { RoundedRect } from '../space/collision';

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

// Separated markers on the rim stay put (fixed point).
function testRest(): void {
  const out = solveMarkers([still(15, 60, 15, 60, 15), still(15, 140, 15, 140, 15)], BOX, SNAP);
  assertClose(out[0].x, 15, 'rest 0 on edge');
  assertClose(out[0].y, 60, 'rest 0 y');
  assertClose(out[1].x, 15, 'rest 1 on edge');
  assertClose(out[1].y, 140, 'rest 1 y');
}

// Two markers with distinct targets on the SAME edge that overlap spread ALONG
// the edge (Y), staying on it (x) — the tangential spread emerges from general
// 2-D separation, no wall mode needed.
function testSpreadAlongEdge(): void {
  const out = solveMarkers([still(15, 95, 15, 95, 15), still(15, 105, 15, 105, 15)], BOX, SNAP);
  assertClose(out[0].x, 15, 'stays on the edge (0)');
  assertClose(out[1].x, 15, 'stays on the edge (1)');
  assert(Math.abs(out[0].y - out[1].y) >= 30 - 1e-6, `spread along edge: ${Math.abs(out[0].y - out[1].y)} ≥ 30`);
}

// A target outside the box is contained (clamped inside, radius-aware).
function testContainment(): void {
  const out = solveMarkers([still(-50, -50, -50, -50, 10)], BOX, SNAP);
  assertClose(out[0].x, 10, 'clamped to minX + r');
  assertClose(out[0].y, 10, 'clamped to minY + r');
}

// Momentum: a marker moving glides further by its retained velocity (Verlet).
function testMomentum(): void {
  const m: Marker = { pos: { x: 15, y: 100 }, prevPos: { x: 15, y: 90 }, target: { x: 15, y: 100 }, radius: 15 };
  const out = solveMarkers([m], BOX, { stiffness: 0, friction: 0.5, iterations: 4 });
  assertClose(out[0].x, 15, 'stays on the edge');
  assert(out[0].y > 100, `glided forward by momentum: ${out[0].y} > 100`);
}

// A marker sitting on an obstacle is pushed clear of it (general 2-D, shortest
// axis out).
function testObstacleClear(): void {
  const ob: RoundedRect = { cx: 100, cy: 15, halfW: 30, halfH: 15, cornerR: 0 };
  const out = solveMarkers([still(100, 15, 100, 15, 12)], BOX, SNAP, [ob]);
  assert(out[0].y > ob.cy + ob.halfH, `pushed below the obstacle: ${out[0].y} > ${ob.cy + ob.halfH}`);
}

function run(): void {
  testRest();
  testSpreadAlongEdge();
  testContainment();
  testMomentum();
  testObstacleClear();
  // eslint-disable-next-line no-console
  console.log('markerSolver.test.ts passed');
}

run();
