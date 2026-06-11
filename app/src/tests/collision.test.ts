import { resolveCircleRect, type RoundedRect } from '../space/collision';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}
function assertClose(actual: number, expected: number, message: string, eps = 1e-6): void {
  if (Math.abs(actual - expected) > eps) throw new Error(`${message}: ${actual} !≈ ${expected}`);
}

// An 80×40 rect centred at (100, 100); cornerR ignored by v1 collision.
const RECT: RoundedRect = { cx: 100, cy: 100, halfW: 40, halfH: 20, cornerR: 8 };

// A circle clear of the rect produces no push.
function testNoOverlap(): void {
  const out = resolveCircleRect(200, 100, 10, RECT);
  assertClose(out.x, 0, 'clear → no x push');
  assertClose(out.y, 0, 'clear → no y push');
}

// Shallow horizontal overlap → pushed out along x (the shorter axis), signed by
// which side the circle sits on.
function testPushX(): void {
  const right = resolveCircleRect(135, 100, 10, RECT); // x-pen 15, y-pen 30
  assertClose(right.x, 15, 'right overlap → +x by penetration');
  assertClose(right.y, 0, 'no y component on x push');
  const left = resolveCircleRect(65, 100, 10, RECT);
  assertClose(left.x, -15, 'left overlap → −x by penetration');
}

// Shallow vertical overlap → pushed out along y (now the shorter axis).
function testPushY(): void {
  const below = resolveCircleRect(100, 124, 10, RECT); // x-pen 50, y-pen 6
  assertClose(below.y, 6, 'below overlap → +y by penetration');
  assertClose(below.x, 0, 'no x component on y push');
}

function run(): void {
  testNoOverlap();
  testPushX();
  testPushY();
  // eslint-disable-next-line no-console
  console.log('collision.test.ts passed');
}

run();
