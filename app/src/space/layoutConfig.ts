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

// ── Waymarker compass (Phase 4) ──────────────────────────────────────────────

// Marker radii live in space/tokens.ts now — the hybrid floor/cap/lift the
// compass computes per frame (touch-safe + viewport-aware). See useCompass.ts.

/** World-px distance below which an island is the *current* one — its marker is
 *  suppressed (you're on it). */
export const SUPPRESS_DIST = 40;

/** World-px band above `SUPPRESS_DIST` over which a marker fades 0→1, so the
 *  destination fades out on arrival and the origin fades in on departure. */
export const FADE_BAND = 240;

/** Spring acceleration toward the bearing target each frame (Verlet). Higher =
 *  snappier pull to the rim. */
export const COMPASS_STIFFNESS = 0.14;

/** Velocity retained frame-to-frame (Verlet momentum), in (0, 1). Higher =
 *  floatier glide + more jostle; lower = snappier settle. */
export const COMPASS_FRICTION = 0.7;

/** Relaxation passes per frame resolving overlaps + walls (n ≤ 5 → cheap). */
export const COMPASS_ITERATIONS = 6;

/** Box margin (CSS px) on all four edges of the compass solver box. The top
 *  formerly reserved an 84px `COMPASS_HEADER_INSET` for the app-bar; that bar
 *  dissolved into floating corner chrome (wordmark + theme/menu) that sits
 *  z-above the compass, so the top is now a normal edge like the others. */
export const COMPASS_EDGE_MARGIN = 18;

/** Break-away angular tolerance (radians): a scroll/swipe breaks to the island
 *  whose bearing is within this of the gesture direction (~60°). */
export const BEARING_TOLERANCE = Math.PI / 3;
