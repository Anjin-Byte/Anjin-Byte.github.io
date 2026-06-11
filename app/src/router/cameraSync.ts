import { watch } from 'vue';
import type { Router } from 'vue-router';
import { useCamera } from '../composables/useCamera';
import { coerceWaypointId, panelDomId } from '../space/waypoints';
import { findNodeByRoute } from '../space/notebookNodes';

/**
 * Bind the router to the camera. Every navigation moves the camera to the routed
 * coordinate — a core waypoint OR a notebook entry — snapping on the initial
 * load (and under reduced-motion via useCamera) so a deep link lands instantly
 * without a fly from origin, flying otherwise. On arrival, focus moves to the
 * panel so screen-reader users hear the new location.
 *
 * Resolution is by route PATH — the one key both layers share: an entry route
 * resolves to a generated node; otherwise the route NAME is treated as an
 * untrusted waypoint id and coerced through `coerceWaypointId` (home on miss).
 */
export function installCameraRouteSync(router: Router): void {
  const camera = useCamera();
  let isFirst = true;
  let pendingFocusRoute: string | null = null;

  const focusPanel = (route: string): void => {
    document.getElementById(panelDomId(route))?.focus({ preventScroll: true });
  };

  router.afterEach((to) => {
    const node = findNodeByRoute(to.path);
    if (node) {
      camera.panToNode({ gx: node.gx, gy: node.gy }, { snap: isFirst });
    } else {
      camera.panToWaypoint(coerceWaypointId(to.name), { snap: isFirst });
    }
    if (!isFirst) {
      // If the move snapped (reduced-motion), focus now; otherwise defer to the
      // settle watcher below so focus lands when the fly completes.
      if (camera.isAnimating.value) {
        pendingFocusRoute = to.path;
      } else {
        focusPanel(to.path);
      }
    }
    isFirst = false;
  });

  watch(camera.isAnimating, (animating) => {
    if (!animating && pendingFocusRoute !== null) {
      focusPanel(pendingFocusRoute);
      pendingFocusRoute = null;
    }
  });
}
