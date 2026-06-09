import {
  clearanceSpacing,
  responsiveSpacing,
  gridToWorld,
  worldToScreen,
  panelClearsViewport,
  focusWeight,
  type Viewport,
} from '../space/layout';
import type { Camera } from '../types/space';

function assert(condition: unknown, message: string): void {
  if (!condition) throw new Error(message);
}
function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}
function assertClose(actual: number, expected: number, message: string, eps = 1e-9): void {
  if (Math.abs(actual - expected) > eps) throw new Error(`${message}\nexpected: ${expected}\nactual:   ${actual}`);
}

const VP: Viewport = { w: 1440, h: 900 };
const cam = (x: number, y: number, zoom = 1): Camera => ({ x, y, zoom });

// Closed-form oracle for the clearance formula.
function testClearanceFormula(): void {
  assertClose(clearanceSpacing(1440, 1200, 1, 200), 1520, 'clearance(1440,1200,1,200)');
  assertClose(clearanceSpacing(1440, 1200, 1, 0), 1320, 'clearance with no gutter = (extent+size)/2');
  // Halving zoom doubles the world spacing needed (screen distance = world×zoom).
  assertClose(clearanceSpacing(1440, 1200, 0.5, 0), 2640, 'half zoom → double spacing');
}

// Sharp boundary oracle: at exactly clearanceSpacing(…, gutter=0) the neighbour
// touches the viewport edge; a hair past it fully clears, a hair short doesn't.
function testClearanceIsTheExactBoundary(): void {
  const W = 1200;
  const threshold = clearanceSpacing(VP.w, W, 1, 0); // 1320
  const panel = { w: W, h: 800 };
  const just = 0.5;
  assert(panelClearsViewport({ x: threshold + just, y: 0 }, panel, cam(0, 0), VP), 'just past threshold clears');
  assert(!panelClearsViewport({ x: threshold - just, y: 0 }, panel, cam(0, 0), VP), 'just short does not clear');
}

// Spacing tracks the viewport linearly (the whole point).
function testResponsiveScalesWithViewport(): void {
  const opts = { panelMaxWidth: 1200, gutterX: 200, gutterY: 150 };
  const a = responsiveSpacing({ w: 1440, h: 900 }, opts);
  const b = responsiveSpacing({ w: 2560, h: 1440 }, opts);
  assertClose(a.col, (1440 + 1200) / 2 + 200, 'col @1440');
  assertClose(b.col, (2560 + 1200) / 2 + 200, 'col @2560 (panel clamped at 1200)');
  // Below the clamp, panel width = viewport width.
  const small = responsiveSpacing({ w: 768, h: 1024 }, opts);
  assertClose(small.col, (768 + 768) / 2 + 200, 'col @768 (panel = viewport)');
  assert(b.col > a.col && a.col > small.col, 'col grows monotonically with viewport');
}

// gridToWorld and worldToScreen are exact inverses of the camera transform.
function testGridAndScreenMapping(): void {
  const spacing = { col: 1500, row: 1200 };
  assertEq(gridToWorld({ gx: 1, gy: -1 }, spacing), { x: 1500, y: -1200 }, 'grid → world');
  // A world point equal to the camera maps to the viewport center.
  assertEq(worldToScreen({ x: 1500, y: -1200 }, cam(1500, -1200), VP), { x: 720, y: 450 }, 'centered → viewport center');
  // Offset maps by zoom.
  assertEq(worldToScreen({ x: 1500, y: 0 }, cam(0, 0, 2), VP), { x: 720 + 3000, y: 450 }, 'offset scales by zoom');
}

// Focal weight: 1 at center, floor at the radius, monotonically decreasing.
function testFocusWeight(): void {
  const opts = { radius: 1000, floor: 0.15 };
  assertClose(focusWeight({ x: 0, y: 0 }, cam(0, 0), VP, opts), 1, 'centered → 1');
  assertClose(focusWeight({ x: 1000, y: 0 }, cam(0, 0), VP, opts), 0.15, 'at radius → floor');
  const near = focusWeight({ x: 300, y: 0 }, cam(0, 0), VP, opts);
  const far = focusWeight({ x: 700, y: 0 }, cam(0, 0), VP, opts);
  assert(near > far && far > 0.15, 'weight decreases with distance, stays above floor inside radius');
}

function run(): void {
  testClearanceFormula();
  testClearanceIsTheExactBoundary();
  testResponsiveScalesWithViewport();
  testGridAndScreenMapping();
  testFocusWeight();
  // eslint-disable-next-line no-console
  console.log('layout.test.ts passed');
}

run();
