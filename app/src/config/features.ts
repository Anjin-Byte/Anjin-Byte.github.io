// Build-time feature flags.
//
// Values here are evaluated at build time.  Vite's dead-code elimination
// removes any branch guarded by a literal `false` constant from the
// production bundle — so flipping a flag off reliably strips the guarded
// code paths without leaving runtime checks behind.
//
// Convention: a flag being `false` should mean the corresponding subsystem
// is unreachable from the app surface.  No UI, no worker messages, no
// shader uniforms set.  The underlying infrastructure (composables, Rust
// modules, shader bindings) may still exist as dead code waiting for the
// flag to be flipped — this is intentional, so re-enabling is a one-line
// change rather than a re-implementation.
//
// To toggle a feature, flip the value here and rebuild.

/** Hi-res cell regions — the sub-grid zoom tool that lets a rectangular
 *  area of the canvas render at a finer simulation resolution.  The system
 *  is fully wired (Rust compute pipelines, WGSL bindings, TS state, dev-only
 *  UI panel) but currently has no production use case.  Flip to `true` to
 *  re-enable the dev panel tab and worker sync. */
export const FEATURE_HIRES = false as const;
