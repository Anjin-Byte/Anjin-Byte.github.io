// Tunables for the spatial layout. Spacing/gutter feed `responsiveSpacing`
// (app/src/space/layout.ts); the focus values drive WorldPanel's focal
// falloff — "centered island is crisp, neighbours recede." Adjust freely.

/** Panel width is `min(100vw, PANEL_MAX_WIDTH)` (CSS px) — mirrors the SFC. */
export const PANEL_MAX_WIDTH = 1200;

/** Extra breathing room added to spacing per axis, as a fraction of viewport. */
export const GUTTER_FRACTION = 0.55;

/** Minimum opacity for an off-centre panel (a faint presence, not gone). */
export const FOCUS_FLOOR = .7;

/** Focus radius (screen px) = this × min(col, row) spacing. */
export const FOCUS_RADIUS_FRACTION = 0.7;

/** Off-centre panels shrink to this scale, recovering to 1 at focus. */
export const FOCUS_SCALE_MIN = 0.5;

// ── Vertical break-away (Phase 2) ────────────────────────────────────────────

/** Over-scroll past an island edge (CSS px, accumulated) needed to fly to the
 *  vertical neighbour — the "magnetic tension." Higher = stiffer. */
export const BREAK_THRESHOLD = 280;

/** Idle gap (ms) with no over-scroll that resets the accumulator, so only a
 *  sustained push breaks — a slow drift never accrues to a break. */
export const ACCUM_RESET_MS = 180;

// ── Horizontal lane navigation — two-finger scroll (Phase 3) ─────────────────

/** Accumulated scroll (px) before a gesture locks to an axis — enough for a
 *  stable read of direction, not so much it feels laggy. */
export const AXIS_LOCK_THRESHOLD = 24;

/** Horizontal must dominate vertical by this factor to lock horizontal, so a
 *  normal (never perfectly straight) vertical scroll never drifts sideways. */
export const HORIZONTAL_BIAS = 1.4;

/** Camera follows a horizontal tug at this fraction of the accumulated scroll
 *  (< 1 = magnetic resistance / "heaviness"). */
export const HORIZONTAL_DAMPING = 0.6;

/** Accumulated horizontal scroll (px) to break to the east/west neighbour;
 *  below it the camera springs back to the lane on idle. */
export const HORIZONTAL_BREAK_THRESHOLD = 300;
