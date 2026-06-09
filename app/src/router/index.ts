import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { defineComponent } from 'vue';
import { WAYPOINTS } from '../space/waypoints';

// Routes exist purely for addressability — deep links, back/forward, sharing.
// They carry NO visible component: every panel is always mounted in WorldStage
// so the camera can fly past it, so a route is a COORDINATE, not a view. The
// camera move is performed by installCameraRouteSync (see ./cameraSync).
const RouteCoordinate = defineComponent({ name: 'RouteCoordinate', render: () => null });

const routes: RouteRecordRaw[] = [
  ...WAYPOINTS.map((w) => ({ path: w.route, name: w.id, component: RouteCoordinate })),
  // Unknown paths land at home rather than 404 — there is only one space.
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { installCameraRouteSync } from './cameraSync';
