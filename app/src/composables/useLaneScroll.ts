import { onMounted, onUnmounted, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCamera } from './useCamera';
import { WAYPOINTS, type WaypointId } from '../space/waypoints';
import { gridToWorld } from '../space/layout';
import { bearingTo, bearingNeighbor } from '../space/compass';
import {
  overscrollDirection,
  stepBreakAccumulator,
  ZERO_ACCUMULATOR,
  lockedAxis,
  tugCameraX,
  horizontalBreakDir,
  type BreakAccumulator,
  type Axis,
} from '../space/breakAway';
import {
  BREAK_THRESHOLD,
  ACCUM_RESET_MS,
  AXIS_LOCK_THRESHOLD,
  HORIZONTAL_BIAS,
  HORIZONTAL_DAMPING,
  HORIZONTAL_BREAK_THRESHOLD,
  BEARING_TOLERANCE,
} from '../space/layoutConfig';

/**
 * Lane navigation by two-finger scroll for the captured island. One wheel
 * listener drives BOTH axes, with a biased dominant-axis lock so a normal
 * (never perfectly straight) vertical scroll never drifts sideways:
 *
 *  - vertical-locked → native scroll runs; an over-scroll past the top/bottom
 *    edge breaks to the north/south neighbour (Phase 2 logic).
 *  - horizontal-locked → the camera tugs off the lane with damping; past the
 *    break threshold it flies to the east/west neighbour, else springs back on
 *    idle. preventDefault on horizontal events (plus overscroll-behavior-x in
 *    App.vue) suppresses the browser's two-finger back/forward swipe.
 *
 * The gesture resets after `ACCUM_RESET_MS` of idle, so each scroll re-decides
 * its axis. This complements the on-screen compass (CompassNav — the primary,
 * accessible, cross-browser path) and the header links; the fly snaps under
 * prefers-reduced-motion (existing panTo/fly behaviour).
 */
export function useLaneScroll(opts: {
  el: Ref<HTMLElement | null>;
  isActive: Ref<boolean>;
  waypointId: WaypointId;
}): void {
  const router = useRouter();
  const camera = useCamera();

  // Per-gesture state, reset after ACCUM_RESET_MS of idle.
  let active = false;
  let accX = 0;
  let accY = 0;
  let axis: Axis = 'none';
  let laneX = 0;
  let laneY = 0;
  let vacc: BreakAccumulator = ZERO_ACCUMULATOR;
  let broke = false;
  let idleTimer: number | null = null;

  function resetGesture(springBack: boolean): void {
    if (springBack && active && axis === 'horizontal' && !broke) {
      camera.panTo(laneX, laneY); // ease back to the lane — the magnetic snap-back
    }
    active = false;
    accX = 0;
    accY = 0;
    axis = 'none';
    vacc = ZERO_ACCUMULATOR;
    broke = false;
    if (idleTimer !== null) {
      clearTimeout(idleTimer);
      idleTimer = null;
    }
  }

  // Break-away target: the island whose screen-bearing best matches the gesture
  // direction (replaces the old grid vertical/horizontal neighbour lookup).
  function breakToBearing(gestureBearing: number): boolean {
    const cam = camera.camera.value;
    const vp = camera.viewport.value;
    const sp = camera.spacing.value;
    const candidates = WAYPOINTS.filter((w) => w.id !== opts.waypointId).map((w) => ({
      route: w.route,
      bearing: bearingTo(gridToWorld(w, sp), cam, vp),
    }));
    const hit = bearingNeighbor(candidates, gestureBearing, BEARING_TOLERANCE);
    if (hit) void router.push(hit.route);
    return hit !== null;
  }

  function onWheel(e: WheelEvent): void {
    const el = opts.el.value;
    // No navigation unless this island is captured and the camera is at rest
    // (the isAnimating guard also swallows the trackpad momentum tail mid-fly).
    if (!opts.isActive.value || camera.isAnimating.value || !el) {
      resetGesture(false);
      return;
    }

    if (!active) {
      active = true;
      laneX = camera.camera.value.x;
      laneY = camera.camera.value.y;
    }
    accX += e.deltaX;
    accY += e.deltaY;

    if (idleTimer !== null) clearTimeout(idleTimer);
    idleTimer = window.setTimeout(() => resetGesture(true), ACCUM_RESET_MS);

    if (axis === 'none') {
      axis = lockedAxis(accX, accY, AXIS_LOCK_THRESHOLD, HORIZONTAL_BIAS);
    }

    // Claim horizontal gestures — including a clearly-sideways one pre-lock — so
    // Safari/Chrome never commit their two-finger back/forward swipe (CSS
    // overscroll-behavior alone doesn't stop it in Safari). Vertical is never
    // prevented, so it stays native scroll. (On desktop the on-screen chevrons
    // are the primary horizontal nav; this trackpad gesture is a complement and
    // the basis for a future mobile touch-swipe.)
    if (axis === 'horizontal' || (axis === 'none' && Math.abs(e.deltaX) > Math.abs(e.deltaY) * HORIZONTAL_BIAS)) {
      e.preventDefault();
    }

    if (axis === 'horizontal') {
      if (broke) return;
      camera.snapTo(tugCameraX(laneX, accX, HORIZONTAL_DAMPING), laneY);
      const dir = horizontalBreakDir(accX, HORIZONTAL_BREAK_THRESHOLD);
      // dir > 0 = scroll right → bearing 0 (east); dir < 0 = left → π (west).
      if (dir !== 0 && breakToBearing(dir > 0 ? 0 : Math.PI)) broke = true;
    } else if (axis === 'vertical') {
      const sdir = overscrollDirection(
        { scrollTop: el.scrollTop, scrollHeight: el.scrollHeight, clientHeight: el.clientHeight },
        e.deltaY,
      );
      const stepped = stepBreakAccumulator(vacc, sdir, e.deltaY, BREAK_THRESHOLD);
      vacc = stepped.acc;
      // fire > 0 = over-scroll down → bearing π/2; fire < 0 = up → −π/2.
      if (stepped.fire !== 0 && breakToBearing(stepped.fire > 0 ? Math.PI / 2 : -Math.PI / 2)) broke = true;
    }
  }

  let attachedEl: HTMLElement | null = null;
  onMounted(() => {
    attachedEl = opts.el.value;
    attachedEl?.addEventListener('wheel', onWheel, { passive: false });
  });
  onUnmounted(() => {
    attachedEl?.removeEventListener('wheel', onWheel);
    attachedEl = null;
    resetGesture(false);
  });
}
