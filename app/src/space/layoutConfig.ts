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
