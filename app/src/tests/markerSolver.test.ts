import { solveMarkers, type Marker } from '../space/markerSolver';
import type { Box } from '../space/compass';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}
function assertClose(actual: number, expected: number, message: string, eps = 1e-6): void {
  if (Math.abs(actual - expected) > eps) throw new Error(`${message}: ${actual} !≈ ${expected}`);
}

const BOX: Box = { minX: 0, minY: 0, maxX: 200, maxY: 200 };

// Markers already pinned to a wall and spread stay put (fixed point).
function testRest(): void {
  const markers: Marker[] = [
    { pos: { x: 15, y: 60 }, target: { x: 15, y: 60 }, radius: 15 }, // left wall
    { pos: { x: 15, y: 140 }, target: { x: 15, y: 140 }, radius: 15 }, // left wall
  ];
  const out = solveMarkers(markers, BOX, { attraction: 0.5, iterations: 4 });
  assertClose(out[0].x, 15, 'rest 0 stays on wall');
  assertClose(out[0].y, 60, 'rest 0 y');
  assertClose(out[1].x, 15, 'rest 1 stays on wall');
  assertClose(out[1].y, 140, 'rest 1 y');
}

// Collinear markers (same bearing → same wall target) spread ALONG the wall (Y),
// staying pinned to the edge (x) — the "settle at the edge" fix.
function testSpreadAlongWall(): void {
  const markers: Marker[] = [
    { pos: { x: 15, y: 100 }, target: { x: 15, y: 100 }, radius: 15 },
    { pos: { x: 15, y: 100 }, target: { x: 15, y: 100 }, radius: 15 },
  ];
  const out = solveMarkers(markers, BOX, { attraction: 0.5, iterations: 20 });
  assertClose(out[0].x, 15, 'stays pinned to wall (0)');
  assertClose(out[1].x, 15, 'stays pinned to wall (1)');
  assert(Math.abs(out[0].y - out[1].y) >= 30 - 1e-6, `spread along the wall: ${Math.abs(out[0].y - out[1].y)} ≥ 30`);
}

// A target outside the box is snapped to its wall and clamped inside.
function testContainment(): void {
  const markers: Marker[] = [{ pos: { x: -50, y: -50 }, target: { x: -50, y: -50 }, radius: 10 }];
  const out = solveMarkers(markers, BOX, { attraction: 1, iterations: 4 });
  assertClose(out[0].x, 10, 'snapped to left wall (minX + r)');
  assertClose(out[0].y, 10, 'clamped y into the box (minY + r)');
}

function run(): void {
  testRest();
  testSpreadAlongWall();
  testContainment();
  // eslint-disable-next-line no-console
  console.log('markerSolver.test.ts passed');
}

run();
