// Pure spatial-layout math for the waypoint constellation. No Vue, no DOM —
// trivially unit-testable (see app/src/tests/layout.test.ts).
//
// Everything here derives from ONE relation — the camera transform. A panel at
// world (x, y), with the camera centered at (cx, cy), lands on screen at:
//
//     screen = viewport_center + zoom × (world − camera)
//
// (the point-wise form of `cameraEasing.cssTransformFor`). Because screen
// distance = world distance × zoom, fixed world spacing crowds differently on
// different viewports — so spacing must be a function of viewport size.

import type { Camera } from '../types/space';

export interface Viewport {
  w: number;
  h: number;
}

/** A waypoint's position on the abstract unit grid (hero (0,0), east (1,0), …). */
export interface GridCoord {
  gx: number;
  gy: number;
}

export interface WorldPoint {
  x: number;
  y: number;
}

export interface ScreenPoint {
  x: number;
  y: number;
}

/** Physical center-to-center spacing (world px) per axis. */
export interface Spacing {
  col: number;
  row: number;
}

export interface SpacingOptions {
  /** Panel width = min(viewport.w, panelMaxWidth) — mirrors the CSS clamp. */
  panelMaxWidth: number;
  /** Panel height used for the (fuzzy) vertical axis; defaults to viewport.h. */
  panelHeight?: number;
  /** Breathing room beyond the off-screen threshold, per axis (CSS px). */
  gutterX: number;
  gutterY: number;
  /** Camera zoom the spacing is computed for (default 1). */
  zoom?: number;
}

/** Effective panel width — mirrors the CSS `min(100vw, panelMaxWidth)`. */
export function panelWidth(viewport: Viewport, panelMaxWidth: number): number {
  return Math.min(viewport.w, panelMaxWidth);
}

/**
 * Minimum center-to-center spacing (world px) so a neighbour of on-screen
 * `size` clears a viewport `extent` (same axis) at `zoom`, plus `gutter`.
 *
 * From the clearance condition `zoom·D − size/2 ≥ extent/2`:
 *     D ≥ (extent + size) / (2·zoom) + gutter
 *
 * At `gutter = 0` the neighbour's near edge sits exactly on the viewport edge.
 */
export function clearanceSpacing(extent: number, size: number, zoom: number, gutter: number): number {
  return (extent + size) / (2 * Math.max(zoom, 1e-6)) + gutter;
}

/**
 * Viewport-responsive spacing. Horizontal keys off the (bounded) panel width;
 * vertical keys off `panelHeight` (default viewport height) because real panel
 * heights vary — the deliberately conservative, fuzzy axis.
 */
export function responsiveSpacing(viewport: Viewport, opts: SpacingOptions): Spacing {
  const zoom = opts.zoom ?? 1;
  const pw = panelWidth(viewport, opts.panelMaxWidth);
  const ph = opts.panelHeight ?? viewport.h;
  return {
    col: clearanceSpacing(viewport.w, pw, zoom, opts.gutterX),
    row: clearanceSpacing(viewport.h, ph, zoom, opts.gutterY),
  };
}

/** Unit-grid coordinate → world position, given physical spacing. */
export function gridToWorld(grid: GridCoord, spacing: Spacing): WorldPoint {
  return { x: grid.gx * spacing.col, y: grid.gy * spacing.row };
}

/**
 * World point → screen position under a camera — the camera transform as a
 * point map (consistent with `cameraEasing.cssTransformFor`).
 */
export function worldToScreen(world: WorldPoint, camera: Camera, viewport: Viewport): ScreenPoint {
  return {
    x: viewport.w / 2 + (world.x - camera.x) * camera.zoom,
    y: viewport.h / 2 + (world.y - camera.y) * camera.zoom,
  };
}

/**
 * True when a panel of CSS size `(w, h)` centered at `world` is entirely
 * outside the viewport under `camera` — the crowding predicate. On-screen size
 * is the CSS size scaled by zoom.
 */
export function panelClearsViewport(
  world: WorldPoint,
  panel: { w: number; h: number },
  camera: Camera,
  viewport: Viewport,
): boolean {
  const s = worldToScreen(world, camera, viewport);
  const halfW = (panel.w * camera.zoom) / 2;
  const halfH = (panel.h * camera.zoom) / 2;
  return s.x + halfW < 0 || s.x - halfW > viewport.w || s.y + halfH < 0 || s.y - halfH > viewport.h;
}

/**
 * Focal-falloff weight in `[floor, 1]`: 1 when the island is centered under the
 * camera, easing to `floor` as it leaves a screen-space focus `radius`. Drives
 * the "active destination is crisp, neighbours recede" effect. Smoothstep gives
 * a soft pull; distance is measured in screen px from the viewport center.
 */
export function focusWeight(
  world: WorldPoint,
  camera: Camera,
  viewport: Viewport,
  opts: { radius: number; floor: number },
): number {
  const s = worldToScreen(world, camera, viewport);
  const dist = Math.hypot(s.x - viewport.w / 2, s.y - viewport.h / 2);
  const t = Math.min(1, dist / Math.max(opts.radius, 1e-6));
  const eased = t * t * (3 - 2 * t); // smoothstep
  return opts.floor + (1 - opts.floor) * (1 - eased);
}
