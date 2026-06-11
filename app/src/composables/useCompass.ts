import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCamera } from './useCamera';
import { WAYPOINTS } from '../space/waypoints';
import { gridToWorld } from '../space/layout';
import { bearingTo, worldDistance, markerRadius, bearingTarget, type Box } from '../space/compass';
import { solveMarkers, type Marker, type Vec2 } from '../space/markerSolver';
import { collectObstacles } from './useColliders';
import {
  SUPPRESS_DIST,
  FADE_BAND,
  COMPASS_STIFFNESS,
  COMPASS_FRICTION,
  COMPASS_ITERATIONS,
  COMPASS_EDGE_MARGIN,
} from '../space/layoutConfig';
import {
  MARKER_FLOOR_R,
  MARKER_CAP_R,
  MARKER_LIFT_K,
  MARKER_LIFT_BASE,
  MARKER_LIFT_MAX,
} from '../space/tokens';

/** A renderable waymarker: resolved screen position, size, true bearing (for the
 *  arrow), and fade opacity. */
export interface MarkerView {
  id: string;
  route: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  radius: number;
  bearing: number;
  opacity: number;
}

function safeBox(vp: { w: number; h: number }): Box {
  return {
    minX: COMPASS_EDGE_MARGIN,
    minY: COMPASS_EDGE_MARGIN,
    maxX: vp.w - COMPASS_EDGE_MARGIN,
    maxY: vp.h - COMPASS_EDGE_MARGIN,
  };
}

const reducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * The waymarker compass: one marker per reachable island, derived live from
 * `camera.value` (so it's calm while scrolling — `camera` doesn't move then —
 * and sweeps during a fly). Each frame computes bearing/size/target, steps the
 * constrained solver (rim-pull + repulsion + box containment), and exposes the
 * resolved markers. The current island (distance below `SUPPRESS_DIST`) is
 * dropped; markers in the fade band carry a sub-1 opacity. The rAF loop runs
 * only while the camera animates or the solver hasn't settled.
 */
export function useCompass(): Ref<MarkerView[]> {
  const camera = useCamera();
  const route = useRoute();
  const markers = ref<MarkerView[]>([]);
  const state = new Map<string, { pos: Vec2; prevPos: Vec2 }>();
  const reduced = reducedMotion();

  function compute(snap: boolean): boolean {
    const cam = camera.camera.value;
    const vp = camera.viewport.value;
    const sp = camera.spacing.value;
    const box = safeBox(vp);
    const center = { x: vp.w / 2, y: vp.h / 2 };

    // Visible = every island except the current one (we're on it).
    const visible = WAYPOINTS.map((wp) => {
      const world = gridToWorld(wp, sp);
      return { wp, dist: worldDistance(world, cam), bearing: bearingTo(world, cam, vp) };
    }).filter((g) => g.dist > SUPPRESS_DIST);

    const dists = visible.map((g) => g.dist);
    const minD = dists.length ? Math.min(...dists) : 0;
    const maxD = dists.length ? Math.max(...dists) : 1;

    // Hybrid radius: a constant touch-safe near/far range (floor → cap) plus a
    // gentle viewport lift that raises both ends together — keeps the range so
    // size still reads as distance, and far never drops below the touch floor.
    const vmin = Math.min(vp.w, vp.h);
    const lift = Math.min(MARKER_LIFT_MAX, Math.max(0, MARKER_LIFT_K * (vmin - MARKER_LIFT_BASE)));
    const farR = MARKER_FLOOR_R + lift;
    const nearR = MARKER_CAP_R + lift;

    const input: Marker[] = visible.map((g) => {
      const radius = markerRadius(g.dist, minD, maxD, farR, nearR);
      const target = bearingTarget(center, g.bearing, box, radius);
      const st = state.get(g.wp.id) ?? { pos: target, prevPos: target };
      return { pos: st.pos, prevPos: st.prevPos, target, radius };
    });

    // Fixed colliders (chrome, the active island) the markers must not overlap;
    // read at the effectful edge, resolved inside the pure solver.
    const obstacles = collectObstacles();
    const resolved = solveMarkers(
      input,
      box,
      {
        stiffness: snap ? 1 : COMPASS_STIFFNESS,
        friction: snap ? 0 : COMPASS_FRICTION,
        iterations: COMPASS_ITERATIONS,
      },
      obstacles,
    );

    // Drop state for islands that left the visible set (the current one), so
    // re-entry starts fresh at its target rather than a stale spot.
    const visibleIds = new Set<string>(visible.map((g) => g.wp.id));
    for (const id of [...state.keys()]) if (!visibleIds.has(id)) state.delete(id);

    let settled = true;
    markers.value = visible.map((g, i) => {
      const p = resolved[i];
      const before = input[i].pos;
      state.set(g.wp.id, { pos: p, prevPos: before });
      const t = input[i].target;
      const moving = Math.hypot(p.x - before.x, p.y - before.y) > 0.3;
      if (moving || Math.hypot(p.x - t.x, p.y - t.y) > 0.5) settled = false;
      return {
        id: g.wp.id,
        route: g.wp.route,
        label: g.wp.label,
        icon: g.wp.icon,
        x: p.x,
        y: p.y,
        radius: input[i].radius,
        bearing: g.bearing,
        opacity: Math.min(1, Math.max(0, (g.dist - SUPPRESS_DIST) / FADE_BAND)),
      };
    });
    return settled;
  }

  let rafId = 0;
  let running = false;

  function frame(): void {
    const settled = compute(false);
    if (!camera.isAnimating.value && settled) {
      running = false;
      rafId = 0;
      return;
    }
    rafId = requestAnimationFrame(frame);
  }

  function ensureRunning(): void {
    if (reduced) {
      compute(true); // snap — no animation under reduced-motion
      return;
    }
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(frame);
  }

  watch(
    [
      () => camera.camera.value.x,
      () => camera.camera.value.y,
      () => camera.viewport.value,
      () => camera.spacing.value,
      camera.isAnimating,
      () => route.name,
    ],
    ensureRunning,
  );
  onMounted(() => (reduced ? compute(true) : ensureRunning()));
  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId);
  });

  return markers;
}
