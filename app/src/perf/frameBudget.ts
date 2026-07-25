// The frame-budget model: what "butter smooth" actually costs, in numbers.
//
// Pure functions only (no timers, no DOM), so the budget rules are unit-tested
// rather than eyeballed — see tests/frameBudget.test.ts.
//
// ── The budget ─────────────────────────────────────────────────────────────
// Smoothness is not an average. A 60 Hz display hands you a 16.67ms slot and a
// 120 Hz one hands you 8.33ms; miss the slot and the compositor shows the
// previous frame again, which is the stutter you SEE. So the metric that
// matters is "what fraction of frames missed their slot", not "what was the
// mean frame time". A run averaging 6ms with one 40ms spike per second looks
// great on paper and feels broken.
//
// The budget must cover EVERYTHING in the frame, not just our render: the
// worker's tick/render submission, the GPU actually executing it, the browser
// compositing, plus whatever the main thread is doing (Vue updates, scroll,
// layout). Our own share therefore has to sit well under the raw slot, which is
// what `TARGET_UTILISATION` encodes.

/** Refresh rates we snap a measured interval to. Anything else is reported as
 *  its raw measured rate — these just stop 59.7 and 61.2 reading as different
 *  displays. */
const COMMON_REFRESH_HZ = [60, 75, 90, 100, 120, 144, 165, 240] as const;

/** Fraction of the frame slot our own work should occupy, leaving headroom for
 *  compositing, main-thread work, and the inevitable bad frame. Exceeding this
 *  is not yet dropping frames, but it is the point where there is no slack
 *  left to absorb a hiccup. */
export const TARGET_UTILISATION = 0.5;

/** A frame is counted LATE past this multiple of the budget. Slightly above 1
 *  because a frame landing at exactly the slot boundary is normal jitter, not a
 *  dropped frame. */
export const LATE_FRAME_FACTOR = 1.5;

/** …and JANKY past this one: a visible hitch rather than a missed beat. */
export const JANK_FRAME_FACTOR = 3;

export type FrameVerdict = 'ok' | 'late' | 'jank';

/** Milliseconds available per frame at a given refresh rate. */
export function budgetMs(refreshHz: number): number {
  return 1000 / refreshHz;
}

/** Infer the display's refresh rate from a typical (median) rAF interval,
 *  snapping to a common rate when close. Uses the MEDIAN, not the mean: a few
 *  long frames must not drag the inferred rate down, or the budget silently
 *  relaxes exactly when the page is struggling. */
export function inferRefreshHz(medianDeltaMs: number): number {
  if (!(medianDeltaMs > 0)) return 60;
  const raw = 1000 / medianDeltaMs;
  for (const hz of COMMON_REFRESH_HZ) {
    // Within 8% snaps — wide enough for jitter, narrow enough that 60 and 75
    // never collide.
    if (Math.abs(raw - hz) / hz < 0.08) return hz;
  }
  return Math.round(raw);
}

/** Classify one observed frame interval against the budget. */
export function classifyFrame(deltaMs: number, budget: number): FrameVerdict {
  if (deltaMs >= budget * JANK_FRAME_FACTOR) return 'jank';
  if (deltaMs >= budget * LATE_FRAME_FACTOR) return 'late';
  return 'ok';
}

export interface SmoothnessReport {
  /** Rate frames are CURRENTLY being delivered at (Hz) and the slot it implies. */
  refreshHz: number;
  budgetMs: number;
  /** Fastest sustained rate this session — what the display has DEMONSTRATED it
   *  can do. Judging only against the current rate is a trap: a run pinned at a
   *  degraded 30fps looks flawlessly regular and scores "smooth", because the
   *  yardstick degrades with the thing it is measuring. */
  capableHz: number;
  /** Delivery is materially below what the display has shown it can do. Benign
   *  while static (ProMotion and low-power modes legitimately downclock a
   *  motionless view); a real fault during motion. */
  downclocked: boolean;
  /** Frames actually delivered per second over the window. */
  fps: number;
  /** Typical and tail frame intervals (ms). */
  medianDeltaMs: number;
  p95DeltaMs: number;
  worstDeltaMs: number;
  /** Share of frames that missed their slot / visibly hitched, in [0,1]. */
  lateRatio: number;
  jankRatio: number;
  /** Share of the budget consumed by OUR measured work (worker render cost),
   *  where 1 = the entire slot. Compare against TARGET_UTILISATION. */
  utilisation: number;
  /** True when the window met the smoothness bar (see `SMOOTH_LATE_RATIO`). */
  smooth: boolean;
}

/** Above this share of late frames the run is not "butter smooth" any more.
 *  2% ≈ one missed frame per second at 60 Hz, which is about the threshold
 *  where motion stops reading as continuous. */
export const SMOOTH_LATE_RATIO = 0.02;

/** Jank is judged separately and far more harshly than lateness, because the
 *  two are qualitatively different: a frame a little past its slot is a missed
 *  beat you may not consciously see, while one at 3x budget is a visible
 *  freeze. Averaging them into a single percentage lets a periodic hitch hide
 *  behind a good ratio — which is exactly the failure this model exists to
 *  catch. This threshold sits below one frame in a full sample window, so a
 *  SINGLE visible hitch in the window is enough to fail. */
export const SMOOTH_JANK_RATIO = 0.002;

/** Delivery below this fraction of the demonstrated capability counts as
 *  downclocked. 0.8 tolerates ProMotion's small adaptive steps while catching a
 *  halving (120 → 60) or worse. */
export const DOWNCLOCK_RATIO = 0.8;

/**
 * Reduce a window of observed rAF intervals into a smoothness verdict.
 *
 * `ourCostMs` is the measured cost of our own per-frame work (the worker's
 * render), used only for the utilisation figure — it does not affect the
 * late/jank counts, which come from what the display actually did.
 *
 * `capableHz` is the fastest sustained rate seen this session, and `moving`
 * whether the camera was in motion. Together they close the hole where a run
 * pinned at a degraded-but-steady rate scored "smooth": frames are judged
 * against what the display has PROVEN it can deliver, not against whatever it
 * happens to be delivering right now. Downclocking is only treated as a fault
 * during motion, since a motionless view is legitimately allowed to drop rate.
 */
export function summarise(
  deltasMs: readonly number[],
  ourCostMs: number,
  capableHz = 0,
  moving = false,
): SmoothnessReport {
  if (deltasMs.length === 0) {
    return {
      refreshHz: 60, budgetMs: budgetMs(60), capableHz: capableHz || 60,
      downclocked: false, fps: 0,
      medianDeltaMs: 0, p95DeltaMs: 0, worstDeltaMs: 0,
      lateRatio: 0, jankRatio: 0, utilisation: 0, smooth: true,
    };
  }
  const sorted = [...deltasMs].sort((a, b) => a - b);
  const n = sorted.length;
  const at = (q: number): number => sorted[Math.min(Math.floor(n * q), n - 1)] ?? 0;

  const median = at(0.5);
  const refreshHz = inferRefreshHz(median);
  const budget = budgetMs(refreshHz);

  let late = 0;
  let jank = 0;
  let total = 0;
  for (const d of deltasMs) {
    total += d;
    const verdict = classifyFrame(d, budget);
    if (verdict === 'jank') { jank++; late++; } else if (verdict === 'late') { late++; }
  }

  const capable = Math.max(capableHz, refreshHz);
  const downclocked = refreshHz < capable * DOWNCLOCK_RATIO;

  return {
    refreshHz,
    budgetMs: budget,
    capableHz: capable,
    downclocked,
    fps: total > 0 ? (n * 1000) / total : 0,
    medianDeltaMs: median,
    p95DeltaMs: at(0.95),
    worstDeltaMs: sorted[n - 1] ?? 0,
    lateRatio: late / n,
    jankRatio: jank / n,
    utilisation: ourCostMs / budget,
    // Steady delivery is necessary but NOT sufficient: dropping to half rate
    // during motion is the stutter being chased, however regular the intervals.
    smooth: late / n <= SMOOTH_LATE_RATIO
      && jank / n <= SMOOTH_JANK_RATIO
      && !(downclocked && moving),
  };
}
