import { onAdvance, onSample, runFrame, resetFrameClock } from '../composables/frameClock';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}

function assertEq<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}\nexpected: ${String(expected)}\nactual:   ${String(actual)}`);
  }
}

// THE contract, and the reason this module exists. Two independent rAF loops
// used to share the camera ref: the easing loop WROTE it, the background loop
// READ it and shipped the offset to the render worker, and rAF registration
// order put the reader first — so the worker got the PREVIOUS frame's camera
// position for the whole duration of a fly while the DOM had the current one.
// Invisible when panning slowly, a visible canvas-vs-DOM split during fast
// motion. Ordering must be structural, never a function of who registered first.
function testAdvanceAlwaysPrecedesSample(): void {
  resetFrameClock();
  let state = 0;
  let sampled = -1;

  // Register the SAMPLER FIRST — i.e. reproduce the exact registration order
  // that caused the original bug. The phases must still run advance-then-sample.
  onSample(() => { sampled = state; });
  onAdvance(() => { state += 1; });

  runFrame(0);
  assertEq(sampled, 1, 'sampler must observe THIS frame\'s advanced state, not the previous one');

  runFrame(16);
  assertEq(sampled, 2, 'holds on subsequent frames');
  resetFrameClock();
}

// Every advancer completes before any sampler — not merely interleaved pairwise.
function testAllAdvancesBeforeAnySample(): void {
  resetFrameClock();
  const order: string[] = [];
  onSample(() => order.push('sample-1'));
  onAdvance(() => order.push('advance-1'));
  onSample(() => order.push('sample-2'));
  onAdvance(() => order.push('advance-2'));

  runFrame(0);
  assertEq(
    order.join(','),
    'advance-1,advance-2,sample-1,sample-2',
    'all advancers run before all samplers, regardless of registration interleaving',
  );
  resetFrameClock();
}

// The camera easing unsubscribes from inside its own advance callback when it
// settles. Mutating the subscriber set mid-iteration must not skip or repeat
// anyone — hence runFrame iterating over copies.
function testSubscriberMayUnsubscribeDuringItsOwnCallback(): void {
  resetFrameClock();
  const seen: string[] = [];
  let off: (() => void) | null = null;
  off = onAdvance(() => { seen.push('self-removing'); off?.(); });
  onAdvance(() => seen.push('survivor'));

  runFrame(0);
  assertEq(seen.join(','), 'self-removing,survivor', 'removal mid-frame must not skip the next subscriber');

  runFrame(16);
  assertEq(seen.join(','), 'self-removing,survivor,survivor', 'removed subscriber does not run again');
  resetFrameClock();
}

function testUnsubscribeStopsDelivery(): void {
  resetFrameClock();
  let advances = 0;
  let samples = 0;
  const offA = onAdvance(() => { advances += 1; });
  const offS = onSample(() => { samples += 1; });

  runFrame(0);
  assertEq(advances, 1, 'advancer ran once');
  assertEq(samples, 1, 'sampler ran once');

  offA();
  offS();
  runFrame(16);
  assertEq(advances, 1, 'unsubscribed advancer stops running');
  assertEq(samples, 1, 'unsubscribed sampler stops running');
  resetFrameClock();
}

function testEmptyFrameIsSafe(): void {
  resetFrameClock();
  runFrame(0); // must not throw with no subscribers
  assert(true, 'empty frame is a no-op');
}

function run(): void {
  testAdvanceAlwaysPrecedesSample();
  testAllAdvancesBeforeAnySample();
  testSubscriberMayUnsubscribeDuringItsOwnCallback();
  testUnsubscribeStopsDelivery();
  testEmptyFrameIsSafe();

  console.log('frameClock.test.ts passed');
}

run();
