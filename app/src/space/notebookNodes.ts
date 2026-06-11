import { notebookEntries } from '../data/notebook';
import { findWaypoint } from './waypoints';
import type { NotebookEntry } from '../types/notebook';
import type { PanelNode } from '../types/space';

// The dynamic coordinate layer: each notebook entry becomes a spatial node — a
// PanelNode (route + grid position + label) carrying its rendered content. The
// core WAYPOINTS stay statically typed; THIS is where a growing, content-driven
// set of islands lives, with positions GENERATED rather than hand-placed.
//
// Layout: entries trail out along the NE diagonal from the notebook index
// waypoint, newest nearest the index — a readable "spine" of pages. Adding a
// post shifts nothing; its coordinate is computed from its index in the
// date-sorted collection.

export interface NotebookNode extends NotebookEntry, PanelNode {}

/** Diagonal step (grid units) between consecutive entry islands. */
const LANE_STEP = 0.9;

// The index waypoint's constellation slot is the single source of truth for
// where the lane begins; entries extend NE (increasing gx, decreasing gy).
const base = findWaypoint('notebook');

export const notebookNodes: readonly NotebookNode[] = notebookEntries.map((entry, i) => {
  const k = i + 1; // first entry sits one step out from the index
  return {
    ...entry,
    route: `/notebook/${entry.slug}`,
    label: entry.title,
    gx: base.gx + k * LANE_STEP,
    gy: base.gy - k * LANE_STEP,
  };
});

const byRoute = new Map<string, NotebookNode>(notebookNodes.map((node) => [node.route, node]));

/** Look up an entry node by its route (`/notebook/<slug>`), or `undefined`. */
export function findNodeByRoute(route: string): NotebookNode | undefined {
  return byRoute.get(route);
}
