import { bearingTo, angleDelta, bearingNeighbor } from '../space/compass';
import type { Camera } from '../types/space';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}
function assertClose(actual: number, expected: number, message: string, eps = 1e-6): void {
  if (Math.abs(actual - expected) > eps) throw new Error(`${message}: ${actual} !≈ ${expected}`);
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
  testAngleDelta();
  testBearingNeighbor();
  // eslint-disable-next-line no-console
  console.log('compass.test.ts passed');
}

run();
