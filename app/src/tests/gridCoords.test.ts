import { screenToCell, cellToScreen, wrapCell, type CoordSnapshot } from '../utils/gridCoords';

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

const SNAP: CoordSnapshot = {
  gridPitch: 12.5,
  offsetX: 137,
  offsetY: -89,
  dpr: 2,
  worldCols: 1024,
  worldRows: 1024,
};

// Sharp oracle: cell → screen → cell is a TRUE identity (modulo toroidal wrap).
// screen → cell → screen is NOT, because screenToCell floors to a cell. This
// pins the inverse relationship between cellToScreen and screenToCell with both
// offset axes engaged.
function testRoundTripIdentity(): void {
  for (const cx of [0, 1, 17, 512, 1023]) {
    for (const cy of [0, 5, 200, 1023]) {
      const screen = cellToScreen(cx, cy, SNAP);
      const back = wrapCell(screenToCell(screen.cssX, screen.cssY, SNAP), SNAP);
      assertEq(back.cx, cx, `cx round-trip @(${cx},${cy})`);
      assertEq(back.cy, cy, `cy round-trip @(${cx},${cy})`);
    }
  }
}

// Sharp oracle: applying the camera offset must be equivalent to shifting the
// pointer by the same amount with zero offset — proving offsetX enters the math
// symmetrically with the pre-existing offsetY.
function testOffsetSymmetry(): void {
  const zero: CoordSnapshot = { ...SNAP, offsetX: 0, offsetY: 0 };
  const px = 321;
  const py = 210;
  const withOffset = wrapCell(screenToCell(px, py, SNAP), SNAP);
  const shifted = wrapCell(
    screenToCell(px + SNAP.offsetX / SNAP.dpr, py + SNAP.offsetY / SNAP.dpr, zero),
    zero,
  );
  assertEq(withOffset.cx, shifted.cx, 'x offset symmetry');
  assertEq(withOffset.cy, shifted.cy, 'y offset symmetry');
}

function run(): void {
  testRoundTripIdentity();
  testOffsetSymmetry();
  // eslint-disable-next-line no-console
  console.log('gridCoords.test.ts passed');
}

run();
