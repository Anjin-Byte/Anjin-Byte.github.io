// The constellation — the ONE place the spatial layout lives.
//
// Each waypoint sits in the constellation at a FREE position (gx, gy) — floats,
// composed for aesthetics, not a rigid unit grid. The physical world coordinate
// is derived at runtime via `gridToWorld(wp, responsiveSpacing(viewport))`, so
// spacing scales with the viewport (see space/layout.ts). The compass derives
// each marker's bearing/distance from these positions; `icon` is its glyph.
// Adding a page = add an entry here, a matching route in router/index.ts, and a
// <WorldPanel> in WorldStage.vue.
//
// `WaypointId` is DERIVED from this table (`as const`), so the table is the
// single source of truth and the union can never drift from the data.

import {
  mdiHome,
  mdiViewGridOutline,
  mdiFileAccountOutline,
  mdiEmailOutline,
  mdiNotebookOutline,
} from '@mdi/js';
import type { Waypoint } from '../types/space';

export const WAYPOINTS = [
  { id: 'hero', route: '/', label: 'Home', gx: 0, gy: 0, icon: mdiHome },
  { id: 'projects', route: '/projects', label: 'Demos', gx: 1, gy: 0, icon: mdiViewGridOutline },
  { id: 'resume', route: '/resume', label: 'Resume', gx: -1, gy: 0, icon: mdiFileAccountOutline },
  { id: 'contact', route: '/contact', label: 'Contact', gx: 0, gy: 1, icon: mdiEmailOutline },
  { id: 'notebook', route: '/notebook', label: 'Notebook', gx: 0, gy: -1, icon: mdiNotebookOutline },
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

// Neighbour lookup is no longer grid-based: the compass derives each island's
// bearing/distance from the live camera (see space/compass.ts + useCompass.ts),
// and break-away picks the nearest bearing (useLaneScroll.ts).

/** Look up a waypoint by route path, or `null` if no route matches. */
export function findByRoute(route: string): Waypoint | null {
  return BY_ROUTE.get(route) ?? null;
}

/**
 * Stable DOM id for a panel keyed by its route — `/notebook/hashdag` →
 * `panel-notebook-hashdag`, `/` → `panel-home`. The route is the one key both
 * core waypoints and dynamic entry nodes share, so cameraSync can move focus to
 * any panel on arrival regardless of which layer it belongs to.
 */
export function panelDomId(route: string): string {
  const slug = route.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '');
  return `panel-${slug || 'home'}`;
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
