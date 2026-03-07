// All perf infrastructure is gated behind this flag.
// Vite replaces import.meta.env.DEV at build time:
//   dev  → true  (profiling active)
//   prod → false (dead-code eliminated by tree-shaking)
export const PERF_ENABLED: boolean = import.meta.env.DEV;

// Ring buffer size for frame samples (power of 2 for modulo efficiency).
export const SAMPLE_BUFFER_SIZE = 256;

// How often (in frames) to emit a summary to the logger.
export const SUMMARY_INTERVAL_FRAMES = 300;
