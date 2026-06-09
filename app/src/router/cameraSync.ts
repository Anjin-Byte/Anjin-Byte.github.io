import { watch } from 'vue';
import type { Router } from 'vue-router';
import { useCamera } from '../composables/useCamera';
import { coerceWaypointId } from '../space/waypoints';

/**
 * Bind the router to the camera. Every navigation moves the camera to the
 * routed waypoint — snapping on the initial load (and under reduced-motion via
 * useCamera) so a deep link lands instantly without a fly from origin, flying
 * otherwise. On arrival, focus moves to the panel so screen-reader users hear
 * the new location.
 *
 * The route NAME is treated as untrusted (`unknown`) and validated through
 * `coerceWaypointId`, which falls back to home for anything unrecognized.
 */
export function installCameraRouteSync(router: Router): void {
  const camera = useCamera();
  let isFirst = true;
  let pendingFocusId: string | null = null;

  const focusPanel = (id: string): void => {
    document.getElementById(`panel-${id}`)?.focus({ preventScroll: true });
  };

  router.afterEach((to) => {
    const id = coerceWaypointId(to.name);
    camera.panToWaypoint(id, { snap: isFirst });
    if (!isFirst) {
      // If the move snapped (reduced-motion), focus now; otherwise defer to the
      // settle watcher below so focus lands when the fly completes.
      if (camera.isAnimating.value) {
        pendingFocusId = id;
      } else {
        focusPanel(id);
      }
    }
    isFirst = false;
  });

  watch(camera.isAnimating, (animating) => {
    if (!animating && pendingFocusId !== null) {
      focusPanel(pendingFocusId);
      pendingFocusId = null;
    }
  });
}
