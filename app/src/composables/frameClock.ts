// The app's single frame driver, with an explicit two-phase ordering.
//
// ── The bug this exists to make impossible ───────────────────────────────────
// There used to be TWO independent rAF loops sharing mutable camera state: the
// easing loop in `useCamera` WROTE `cameraRef`, and the background's loop READ
// it and shipped the offset to the render worker. rAF runs callbacks in
// registration order, and the background's loop re-registers at the top of its
// own callback (so it is queued early, during the previous frame) while the
// easing loop was registered later, from a click handler. The reader therefore
// ran BEFORE the writer, and the worker was sent the PREVIOUS frame's camera
// position for the entire duration of a fly — while the DOM transform, being a
// Vue computed off the same ref, showed the current one.
//
// That is a one-frame canvas-vs-DOM disagreement: invisible during a slow pan
// (one easing step is sub-pixel) and pronounced during a fast fly (one step is
// a large jump). It was never a deliberate design — it was whatever the rAF
// queue happened to contain, so it could differ between flies.
//
// ── The contract ─────────────────────────────────────────────────────────────
// Every frame runs in two phases, and ALL of the first completes before ANY of
// the second:
//
//   1. ADVANCE — move simulation/animation state forward (camera easing).
//   2. SAMPLE  — read the now-current state and act on it (post the frame to
//                the worker, drive anything that must agree with the DOM).
//
// A sampler is therefore guaranteed to observe THIS frame's advanced state, by
// construction rather than by registration luck. `frameClock.test.ts` pins it.
//
// The clock self-starts on first subscription and stops when the last
// subscriber leaves, so nothing has to remember to boot it — and, importantly,
// camera easing no longer depends on the background canvas having mounted
// (it previously would have, had the loop simply been moved into that component).

// ── The clock is deliberately UNTHROTTLED (inherited from useAnimationLoop, ──
// which this module replaced). Sampling must happen on every native rAF tick:
// the offset shipped to the worker must never go stale relative to the DOM's
// per-frame camera transform, or the two visibly drift apart during a pan —
// exactly what happened when an earlier version throttled the loop directly
// (grid position lagged the smoothly-moving foreground, then snapped to catch
// up, reading as ghosting/chugging until the camera settled). Note that is the
// SAME symptom class as the ordering bug above, from a different cause, which
// is why frame-timing changes here need real scrutiny.
//
// The expensive-render throttle belongs downstream in the worker's 'frame'
// handler (see frameGate.ts / backgroundRenderer.ts), which can skip the costly
// tick/render while still consuming every message's camera offset, so the GPU
// uniform is current whenever a frame does render. Do NOT reintroduce a
// throttle here.

type FrameFn = (nowMs: number) => void;

const advancers = new Set<FrameFn>();
const samplers = new Set<FrameFn>();

let rafId = 0;
let visibilityBound = false;

/**
 * Run one frame's phases in contract order. Exported so the ordering guarantee
 * is directly testable without a real rAF — this IS the frame body, not a
 * test-only shim.
 */
export function runFrame(nowMs: number): void {
  // Iterate over copies: a subscriber may unsubscribe (or subscribe) during its
  // own callback — e.g. the camera easing settling mid-frame — and mutating a
  // Set while iterating it would skip or repeat entries.
  for (const fn of [...advancers]) fn(nowMs);
  for (const fn of [...samplers]) fn(nowMs);
}

function loop(nowMs: number): void {
  rafId = requestAnimationFrame(loop);
  runFrame(nowMs);
}

function onVisibility(): void {
  if (document.hidden) {
    if (rafId !== 0) { cancelAnimationFrame(rafId); rafId = 0; }
  } else if (rafId === 0 && (advancers.size > 0 || samplers.size > 0)) {
    rafId = requestAnimationFrame(loop);
  }
}

function ensureRunning(): void {
  if (rafId !== 0 || typeof requestAnimationFrame !== 'function') return;
  if (!visibilityBound && typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', onVisibility);
    visibilityBound = true;
  }
  rafId = requestAnimationFrame(loop);
}

function stopIfIdle(): void {
  if (advancers.size > 0 || samplers.size > 0) return;
  if (rafId !== 0) { cancelAnimationFrame(rafId); rafId = 0; }
}

/** Phase 1: advance animation/simulation state. Returns an unsubscribe fn. */
export function onAdvance(fn: FrameFn): () => void {
  advancers.add(fn);
  ensureRunning();
  return () => { advancers.delete(fn); stopIfIdle(); };
}

/** Phase 2: read the advanced state and act on it. Returns an unsubscribe fn. */
export function onSample(fn: FrameFn): () => void {
  samplers.add(fn);
  ensureRunning();
  return () => { samplers.delete(fn); stopIfIdle(); };
}

/** Test seam: drop all subscribers and stop the loop. */
export function resetFrameClock(): void {
  advancers.clear();
  samplers.clear();
  if (rafId !== 0) { cancelAnimationFrame(rafId); rafId = 0; }
}
