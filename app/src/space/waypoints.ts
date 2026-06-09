// The constellation — the ONE place the spatial layout lives.
//
// Each waypoint sits on an abstract UNIT grid (gx, gy): hero at the origin,
// neighbours one cell away on the compass. The physical world coordinate is
// derived at runtime via `gridToWorld(wp, responsiveSpacing(viewport))`, so the
// spacing scales with the viewport (see space/layout.ts). Adding a page = add
// an entry here, a matching route in router/index.ts, and a <WorldPanel> in
// WorldStage.vue.
//
// `WaypointId` is DERIVED from this table (`as const`), so the table is the
// single source of truth and the union can never drift from the data.

import type { Waypoint } from '../types/space';

export const WAYPOINTS = [
  { id: 'hero', route: '/', label: 'Home', gx: 0, gy: 0 },
  { id: 'projects', route: '/projects', label: 'Demos', gx: 1, gy: 0 },
  { id: 'resume', route: '/resume', label: 'Resume', gx: -1, gy: 0 },
  { id: 'contact', route: '/contact', label: 'Contact', gx: 0, gy: 1 },
  { id: 'about', route: '/about', label: 'About', gx: 0, gy: -1 },
] as const satisfies readonly Waypoint[];

/** Strict union of valid waypoint ids, derived from the table above. */
export type WaypointId = (typeof WAYPOINTS)[number]['id'];

/** The origin / landing waypoint. */
export const homeWaypoint = WAYPOINTS[0];

const BY_ID = new Map<string, Waypoint>(WAYPOINTS.map((w) => [w.id, w]));
const BY_ROUTE = new Map<string, Waypoint>(WAYPOINTS.map((w) => [w.route, w]));

/** Look up a waypoint by id; falls back to home if the id is unknown. */
export function findWaypoint(id: WaypointId): Waypoint {
  return BY_ID.get(id) ?? homeWaypoint;
}

/** The waypoint at an exact unit-grid cell, or `null` if none. */
function findByGrid(gx: number, gy: number): Waypoint | null {
  return WAYPOINTS.find((w) => w.gx === gx && w.gy === gy) ?? null;
}

/** The waypoint offset from `id` by `(dgx, dgy)` on the unit grid, or `null`.
 *  The grid topology is the navigation graph for break-away and the chevrons. */
export function gridNeighbor(id: WaypointId, dgx: number, dgy: number): Waypoint | null {
  const wp = findWaypoint(id);
  return findByGrid(wp.gx + dgx, wp.gy + dgy);
}

/** Vertical neighbour (`dir -1` = up/north, `+1` = down/south), or `null`.
 *  hero has about (−1) and contact (+1); resume/projects have none. */
export function verticalNeighbor(id: WaypointId, dir: -1 | 1): Waypoint | null {
  return gridNeighbor(id, 0, dir);
}

/** Horizontal neighbour (`dir -1` = west, `+1` = east), or `null`.
 *  hero has resume (−1) and projects (+1); the others have none. */
export function horizontalNeighbor(id: WaypointId, dir: -1 | 1): Waypoint | null {
  return gridNeighbor(id, dir, 0);
}

/** Look up a waypoint by route path, or `null` if no route matches. */
export function findByRoute(route: string): Waypoint | null {
  return BY_ROUTE.get(route) ?? null;
}

/**
 * Boundary validator: parse an unknown route path to a `WaypointId`, or
 * `null` if it does not name a waypoint. Use at the router seam.
 */
export function parseRouteToWaypointId(route: unknown): WaypointId | null {
  if (typeof route !== 'string') return null;
  const wp = BY_ROUTE.get(route);
  return wp ? (wp.id as WaypointId) : null;
}

/**
 * Boundary validator for a route NAME (vue-router `RouteRecordName`): coerce
 * an unknown value to a valid `WaypointId`, falling back to home. Never throws.
 */
export function coerceWaypointId(value: unknown): WaypointId {
  if (typeof value === 'string' && BY_ID.has(value)) {
    return value as WaypointId;
  }
  return homeWaypoint.id;
}
