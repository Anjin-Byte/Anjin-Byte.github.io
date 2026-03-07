// High-resolution frame timer. Records per-frame durations and computes
// rolling statistics (min, max, avg, p95, p99) over a fixed-size ring buffer.
//
// Usage:
//   const timer = new FrameTimer('render');
//   timer.begin();
//   doWork();
//   timer.end();
//   const stats = timer.stats();

import { SAMPLE_BUFFER_SIZE } from './constants';

export interface FrameStats {
  label: string;
  samples: number;
  avg: number;
  min: number;
  max: number;
  p95: number;
  p99: number;
}

export class FrameTimer {
  private readonly label: string;
  private readonly buf: Float64Array;
  private head = 0;
  private count = 0;
  private t0 = 0;

  constructor(label: string) {
    this.label = label;
    this.buf = new Float64Array(SAMPLE_BUFFER_SIZE);
  }

  begin(): void {
    this.t0 = performance.now();
  }

  end(): void {
    const dt = performance.now() - this.t0;
    this.buf[this.head] = dt;
    this.head = (this.head + 1) & (SAMPLE_BUFFER_SIZE - 1);
    if (this.count < SAMPLE_BUFFER_SIZE) this.count++;
  }

  stats(): FrameStats {
    if (this.count === 0) {
      return { label: this.label, samples: 0, avg: 0, min: 0, max: 0, p95: 0, p99: 0 };
    }

    // Copy live samples and sort for percentile computation.
    const n = this.count;
    const sorted = new Float64Array(n);
    const start = this.count < SAMPLE_BUFFER_SIZE ? 0 : this.head;
    for (let i = 0; i < n; i++) {
      sorted[i] = this.buf[(start + i) & (SAMPLE_BUFFER_SIZE - 1)];
    }
    sorted.sort();

    let sum = 0;
    for (let i = 0; i < n; i++) sum += sorted[i];

    return {
      label: this.label,
      samples: n,
      avg: sum / n,
      min: sorted[0],
      max: sorted[n - 1],
      p95: sorted[Math.min(Math.floor(n * 0.95), n - 1)],
      p99: sorted[Math.min(Math.floor(n * 0.99), n - 1)],
    };
  }

  reset(): void {
    this.head = 0;
    this.count = 0;
  }
}
