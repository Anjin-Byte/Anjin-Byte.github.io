// Domain types for the spatial-navigation model ("The Lens").
//
// The site is one continuous 2-D space.  A `Camera` describes where we are
// looking; `Waypoint`s are the fixed locations (hero, demos, resume, …) laid
// out on the plane.  Navigating to a page = animating the camera to a
// waypoint's coordinate.  See `space/waypoints.ts` for the concrete layout
// and `composables/useCamera.ts` for the controller.

/**
 * The viewport's position over the world plane.  `x`/`y` are world-CSS-px of
 * the point centered in the viewport; `zoom` is a scalar (1 = native scale).
 */
export interface Camera {
  x: number;
  y: number;
  zoom: number;
}

/**
 * A fixed location in the space.  `id` is the stable key (also the route
 * name); `route` is its shareable URL path; `(gx, gy)` is its position on the
 * abstract UNIT grid (hero (0,0), east (1,0), south (0,1), …) — the physical
 * world coordinate is `gridToWorld(wp, responsiveSpacing(viewport))`, so
 * spacing breathes with the viewport (see `space/layout.ts`). `zoom` overrides
 * the arrival zoom when present.
 *
 * Declared with `id: string` (loose) so the `WAYPOINTS` table can be a
 * `satisfies readonly Waypoint[]` literal and the strict `WaypointId` union is
 * derived from that single source — see `space/waypoints.ts`.
 */
export interface Waypoint {
  id: string;
  route: string;
  label: string;
  gx: number;
  gy: number;
  zoom?: number;
}
