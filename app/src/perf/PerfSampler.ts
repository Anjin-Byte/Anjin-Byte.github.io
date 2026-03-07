// Aggregates multiple FrameTimers and periodically logs a summary table.
// Designed for the worker thread where requestAnimationFrame drives the loop.
//
// Usage:
//   const sampler = new PerfSampler(logger);
//   sampler.time('tick', () => renderer.tick());
//   sampler.time('render', () => renderer.renderOnly());
//   sampler.endFrame();   // call once per rAF — triggers periodic summary

import type { Logger } from '../logger';
import { SUMMARY_INTERVAL_FRAMES } from './constants';
import { FrameTimer, type FrameStats } from './FrameTimer';

export class PerfSampler {
  private readonly timers = new Map<string, FrameTimer>();
  private readonly frameTimer: FrameTimer;
  private readonly log: Logger;
  private frameCount = 0;

  constructor(log: Logger) {
    this.log = log;
    this.frameTimer = new FrameTimer('frame');
  }

  // Start the whole-frame timer. Call at the very beginning of the frame.
  beginFrame(): void {
    this.frameTimer.begin();
  }

  // Record a named sub-span within the frame.
  time<T>(label: string, fn: () => T): T {
    let timer = this.timers.get(label);
    if (!timer) {
      timer = new FrameTimer(label);
      this.timers.set(label, timer);
    }
    timer.begin();
    const result = fn();
    timer.end();
    return result;
  }

  // End the whole-frame timer and maybe log a summary.
  endFrame(): void {
    this.frameTimer.end();
    this.frameCount++;

    if (this.frameCount % SUMMARY_INTERVAL_FRAMES === 0) {
      this.logSummary();
    }
  }

  // Force a summary to the logger right now.
  logSummary(): void {
    const all: FrameStats[] = [this.frameTimer.stats()];
    for (const timer of this.timers.values()) {
      all.push(timer.stats());
    }

    const lines = all.map((s) =>
      `  ${s.label.padEnd(12)} avg=${fmt(s.avg)} p95=${fmt(s.p95)} p99=${fmt(s.p99)} min=${fmt(s.min)} max=${fmt(s.max)} n=${s.samples}`,
    );
    this.log.info(`Perf summary (frame ${this.frameCount}):\n${lines.join('\n')}`);
  }

  snapshot(): FrameStats[] {
    const all: FrameStats[] = [this.frameTimer.stats()];
    for (const timer of this.timers.values()) {
      all.push(timer.stats());
    }
    return all;
  }

  reset(): void {
    this.frameTimer.reset();
    for (const timer of this.timers.values()) {
      timer.reset();
    }
    this.frameCount = 0;
  }
}

function fmt(ms: number): string {
  return `${ms.toFixed(2)}ms`;
}
