import { useCamera } from '../composables/useCamera';

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

// Sharp oracle: the captured island's scrollTop folds into the camera's vertical
// world offset — the single offset feeding BOTH the GoL grid (via
// useCameraGridSync) and click-mapping (via useCoordinateMapper) — so the grid
// pans with native scrolling. Node has no window → dpr 1, GRID_FOLLOW_RATE = 1,
// so the device offset equals (camera + scroll) px exactly.
function testScrollFoldsIntoOffset(): void {
  const camera = useCamera();

  camera.snapTo(0, 0, 1);
  camera.setCaptureScroll(0);
  assertEq(camera.worldOffsetDevicePx.value, { x: 0, y: 0 }, 'no scroll → no extra offset');

  camera.setCaptureScroll(150);
  assertEq(camera.worldOffsetDevicePx.value, { x: 0, y: 150 }, 'scrollTop folds into offset.y');

  // Horizontal offset is untouched by vertical scroll.
  camera.snapTo(400, 0, 1);
  camera.setCaptureScroll(150);
  assertEq(camera.worldOffsetDevicePx.value, { x: 400, y: 150 }, 'scroll affects only y');

  // Negative scrollTop is clamped to 0 (defensive at the DOM boundary).
  camera.snapTo(0, 0, 1);
  camera.setCaptureScroll(-40);
  assertEq(camera.worldOffsetDevicePx.value, { x: 0, y: 0 }, 'negative scroll clamps to 0');

  // Reset the shared singleton so test ordering can't leak state.
  camera.setCaptureScroll(0);
  camera.snapTo(0, 0, 1);
}

function run(): void {
  testScrollFoldsIntoOffset();
  // eslint-disable-next-line no-console
  console.log('captureScroll.test.ts passed');
}

run();
