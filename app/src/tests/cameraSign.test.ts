import { useCamera } from '../composables/useCamera';
import { screenToCell, type CoordSnapshot } from '../utils/gridCoords';

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

// Sharp oracle: panning the camera by +G world-px in X must move the cell
// resolved under a FIXED screen point by exactly +round(G·dpr/pitch) cells —
// the same direction the shader samples (world = frag + scroll). This pins the
// sign of the whole camera → worldOffsetDevicePx → screenToCell chain, so a
// future sign flip in either useCamera or gridCoords fails here. (Node has no
// `window`, so useCamera's dpr falls back to 1.)
function testPanShiftsCellSameDirectionAsShader(): void {
  const camera = useCamera();
  const dpr = 1;
  const pitch = 12.5;
  const px = 400; // px·dpr is a multiple of pitch → exact floor arithmetic
  const py = 300;

  const snapAt = (): CoordSnapshot => {
    const off = camera.worldOffsetDevicePx.value;
    return { gridPitch: pitch, offsetX: off.x, offsetY: off.y, dpr, worldCols: 1024, worldRows: 1024 };
  };

  camera.snapTo(0, 0, 1);
  const before = screenToCell(px, py, snapAt());

  const G = 250; // multiple of pitch → integer cell shift
  camera.snapTo(G, 0, 1);
  const after = screenToCell(px, py, snapAt());

  const expectedShift = Math.round((G * dpr) / pitch); // 250 / 12.5 = 20
  assertEq(after.cx - before.cx, expectedShift, '+X pan shifts cell by +G·dpr/pitch');
  assertEq(after.cy - before.cy, 0, 'no Y pan → no Y cell shift');

  // Reset shared singleton so test ordering can't leak camera state.
  camera.snapTo(0, 0, 1);
}

function run(): void {
  testPanShiftsCellSameDirectionAsShader();
  // eslint-disable-next-line no-console
  console.log('cameraSign.test.ts passed');
}

run();
