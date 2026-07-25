// Main-thread frame-delivery monitor: the GROUND TRUTH for "is it smooth".
//
// Every other number we collect (worker render cost, GPU pass timings) is an
// input to smoothness. This measures the output — how far apart frames actually
// landed on screen. It needs no GPU features, no adapter flags, and no browser
// support beyond rAF, which matters because per-pass GPU timing requires
// TIMESTAMP_QUERY and is simply absent on most machines (Chrome gates it behind
// chrome://flags/#enable-unsafe-webgpu). When those numbers are unavailable,
// this one still tells you whether the page is janking.
//
// Deliberately allocation-free per frame (ring buffer, no closures created in
// the loop) so the monitor cannot become the thing it is measuring.

import { SAMPLE_BUFFER_SIZE } from './constants';
import { inferRefreshHz, summarise, type SmoothnessReport } from './frameBudget';

export class RafMonitor {
  private readonly buf = new Float64Array(SAMPLE_BUFFER_SIZE);
  private head = 0;
  private count = 0;
  private lastT = 0;
  /** Fastest sustained interval seen this session, as the p25 of a window (a
   *  single short delta is scheduling noise, not proof of capability). Kept
   *  across resets: a display that has hit 120Hz once can do it again, and
   *  forgetting that is what let a degraded-but-steady run pass as smooth. */
  private bestP25 = Number.POSITIVE_INFINITY;

  /** Record a frame boundary. Pass the rAF timestamp. */
  sample(nowMs: number): void {
    if (this.lastT !== 0) {
      const dt = nowMs - this.lastT;
      // Guard against the tab-restore case: a hidden tab resumes with a
      // multi-second gap that is not a dropped frame and would swamp the tail
      // percentiles for the next 256 samples.
      if (dt > 0 && dt < 1000) {
        this.buf[this.head] = dt;
        this.head = (this.head + 1) & (SAMPLE_BUFFER_SIZE - 1);
        if (this.count < SAMPLE_BUFFER_SIZE) this.count++;
      }
    }
    this.lastT = nowMs;
  }

  /** Drop history — used when resuming from a hidden tab. */
  reset(): void {
    this.head = 0;
    this.count = 0;
    this.lastT = 0;
  }

  /** Summarise the window against the frame budget. `ourCostMs` is the worker's
   *  measured per-frame render cost (utilisation); `moving` whether the camera
   *  was in motion, which decides whether a downclock is benign or a fault. */
  report(ourCostMs: number, moving = false): SmoothnessReport {
    const n = this.count;
    const out: number[] = new Array<number>(n);
    const start = n < SAMPLE_BUFFER_SIZE ? 0 : this.head;
    for (let i = 0; i < n; i++) {
      out[i] = this.buf[(start + i) & (SAMPLE_BUFFER_SIZE - 1)] ?? 0;
    }
    // Update the demonstrated capability from this window's fast quartile.
    // Needs a reasonable sample count, or the first few frames of a session
    // (often unusually quick) would set an unreachable bar.
    if (n >= 32) {
      const sorted = [...out].sort((a, b) => a - b);
      const p25 = sorted[Math.floor(n * 0.25)] ?? Number.POSITIVE_INFINITY;
      if (p25 > 0 && p25 < this.bestP25) this.bestP25 = p25;
    }
    const capableHz = Number.isFinite(this.bestP25) ? inferRefreshHz(this.bestP25) : 0;
    return summarise(out, ourCostMs, capableHz, moving);
  }
}
