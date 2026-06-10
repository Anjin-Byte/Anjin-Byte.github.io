// Build-time feature flags. A flag that folds to a literal `false` lets the
// bundler dead-code-eliminate the gated code, so a disabled feature is ABSENT
// from the production bundle — not merely inactive at runtime.
//
// Re-enable options for a flag:
//   = true                  → on everywhere
//   = import.meta.env.DEV   → on in `vite` dev, stripped from `vite build`

/**
 * Gesture navigation — scroll/swipe break-away between islands (useLaneScroll):
 * over-scroll a tall island, or two-finger-scroll sideways, to fly to a
 * neighbour. Gated off for now; the compass and header links are the
 * navigation. `false` removes it everywhere and strips it from production
 * (the native scroll WITHIN an island is unaffected — that's not this).
 */
export const GESTURE_NAV_ENABLED = false;
