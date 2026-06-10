// Design tokens that JavaScript consumes. The CSS-side tokens (space/type/radius
// scales, etc.) are authored in App.vue's `:root` — this module holds ONLY the
// numbers the compass solver needs each frame, because reading CSS vars via
// getComputedStyle per frame would force layout and returns post-zoom values
// inconsistent with the solver's CSS-px box. Keep the two in sync: the values
// below mirror the matching `--*` tokens in App.vue.

/** Global page zoom (`html { zoom }`). Every absolute CSS px renders ×ZOOM. */
export const ZOOM = 0.875;

// ── Compass waymarker geometry (CSS-px radii; the hybrid law in useCompass) ──
// radius = markerRadius(dist, …, far, near), where:
//   far  = FLOOR + lift   (smallest, the most distant island)
//   near = CAP   + lift   (largest, the closest island)
//   lift = clamp(0, LIFT_K·(vmin − LIFT_BASE), LIFT_MAX)
// The lift raises near AND far together, so the size→distance RANGE is preserved
// (a flat `k·vmin` term would saturate the cap on normal screens and flatten the
// encoding). far never drops below FLOOR, so every marker stays touch-safe.

/** Far/floor radius → diameter 51 → 44.6 visual px after ZOOM (≥44 touch). */
export const MARKER_FLOOR_R = 25.5;

/** Near/cap base radius → diameter 80 → 70 visual; a legible near/far range. */
export const MARKER_CAP_R = 40;

/** Viewport lift: radius added per CSS px of `min(vp.w, vp.h)` above the base. */
export const MARKER_LIFT_K = 0.05;

/** vmin (CSS px) at which the viewport lift begins (≈ a laptop's short side). */
export const MARKER_LIFT_BASE = 720;

/** Cap on the lift, so near markers grow on a 4K canvas without ballooning. */
export const MARKER_LIFT_MAX = 12;
