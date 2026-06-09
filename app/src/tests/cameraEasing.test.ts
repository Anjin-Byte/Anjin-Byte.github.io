import {
  stepCamera,
  isSettled,
  cssTransformFor,
  cameraToDeviceOffset,
  dragPanTarget,
} from '../space/cameraEasing';
import type { Camera } from '../types/space';

function assert(condition: unknown, message: string): void {
  if (!condition) throw new Error(message);
}

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

function distance(a: Camera, b: Camera): number {
  return Math.hypot(a.x - b.x, a.y - b.y, a.zoom - b.zoom);
}

// Sharp oracle: easing must STRICTLY reduce the distance every step and reach
// the settled state within a bounded number of frames — never overshoot, never
// stall. This is the property the rAF loop in useCamera relies on.
function testMonotonicConvergence(): void {
  // Arrange
  const target: Camera = { x: 1700, y: -1300, zoom: 1.4 };
  let cur: Camera = { x: 0, y: 0, zoom: 1 };
  let prev = distance(cur, target);
  let steps = 0;

  // Act / Assert
  while (!isSettled(cur, target) && steps < 1000) {
    cur = stepCamera(cur, target, 0.18);
    const d = distance(cur, target);
    assert(d < prev, `distance must strictly decrease at step ${steps}: ${d} !< ${prev}`);
    prev = d;
    steps++;
  }
  assert(isSettled(cur, target), 'camera must settle on the target');
  assert(steps < 1000, `must settle within bound, took ${steps} steps`);
}

// A single step moves exactly the ease fraction toward the target and never
// past it.
function testStepFractionNoOvershoot(): void {
  const cur: Camera = { x: 0, y: 0, zoom: 1 };
  const target: Camera = { x: 100, y: 0, zoom: 1 };
  const next = stepCamera(cur, target, 0.18);
  assertEq(Math.round(next.x * 1e6) / 1e6, 18, 'x eases by the ease fraction');
  assert(next.x > cur.x && next.x < target.x, 'no overshoot past the target');
}

// The CSS transform centers the camera point in the viewport, scaled by zoom.
function testCssTransform(): void {
  const t = cssTransformFor({ x: 100, y: 50, zoom: 2 }, { w: 800, h: 600 });
  assertEq(t, 'translate(400px, 300px) scale(2) translate(-100px, -50px)', 'transform string');
}

// Phase 1 keeps the grid fixed (rate 0 → zero offset); lockstep (rate 1) maps
// the camera to canvas/device px via dpr.
function testDeviceOffset(): void {
  assertEq(cameraToDeviceOffset({ x: 100, y: 50, zoom: 1 }, 2, 0), { x: 0, y: 0 }, 'rate 0 → grid fixed');
  assertEq(cameraToDeviceOffset({ x: 100, y: 50, zoom: 1 }, 2, 1), { x: 200, y: 100 }, 'rate 1 → camera × dpr');
}

// Drag-to-pan moves the camera by −Δscreen/zoom so the grabbed world point
// stays under the cursor. At zoom 2, a +60/−20 px drag moves the camera −30/+10.
function testDragPanTarget(): void {
  const result = dragPanTarget({ x: 100, y: 50, zoom: 2 }, { x: 200, y: 200 }, { x: 260, y: 180 });
  assertEq(result, { x: 70, y: 60, zoom: 2 }, 'drag-pan: camera moves -Δscreen/zoom');
}

function run(): void {
  testMonotonicConvergence();
  testStepFractionNoOvershoot();
  testCssTransform();
  testDeviceOffset();
  testDragPanTarget();
  // eslint-disable-next-line no-console
  console.log('cameraEasing.test.ts passed');
}

run();
