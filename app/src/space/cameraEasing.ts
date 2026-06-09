// Pure camera math — no Vue, no DOM. Kept side-effect-free so it is trivially
// unit-testable (see app/src/tests/cameraEasing.test.ts) and reusable by both
// the rAF easing loop and the worker grid-sync mapping.

import type { Camera } from '../types/space';

/** Convergence threshold (world-CSS-px for x/y, scalar for zoom). */
export const SETTLE_EPSILON = 0.01;

/**
 * Exponential-ease one step from `cur` toward `tgt` by fraction `ease`
 * (0 < ease < 1). Monotonically reduces the per-axis distance every call, so
 * repeated application converges; pair with {@link isSettled} to stop.
 */
export function stepCamera(cur: Camera, tgt: Camera, ease: number): Camera {
  return {
    x: cur.x + (tgt.x - cur.x) * ease,
    y: cur.y + (tgt.y - cur.y) * ease,
    zoom: cur.zoom + (tgt.zoom - cur.zoom) * ease,
  };
}

/** True once every axis is within `eps` of the target. */
export function isSettled(cur: Camera, tgt: Camera, eps: number = SETTLE_EPSILON): boolean {
  return (
    Math.abs(cur.x - tgt.x) < eps &&
    Math.abs(cur.y - tgt.y) < eps &&
    Math.abs(cur.zoom - tgt.zoom) < eps
  );
}

/**
 * CSS transform that maps the world plane so the world point `(cam.x, cam.y)`
 * lands at the viewport center, scaled by `cam.zoom`. Applied to the plane
 * element (whose children sit at their world coordinates) with
 * `transform-origin: 0 0`. Content at +x drifts left as `cam.x` grows.
 */
export function cssTransformFor(cam: Camera, viewport: { w: number; h: number }): string {
  const tx = viewport.w / 2;
  const ty = viewport.h / 2;
  return `translate(${tx}px, ${ty}px) scale(${cam.zoom}) translate(${-cam.x}px, ${-cam.y}px)`;
}

/**
 * Camera position → the grid renderer's scroll offset, in canvas/device px
 * (the unit the shader's `scroll_x`/`scroll_y` uniforms expect). `rate` is the
 * grid-follow factor: 0 keeps the grid fixed (Phase 1), 1 is lockstep.
 *
 * Sign matches the shader (`world = frag + scroll`): a positive camera offset
 * increases `scroll`, sampling further into the world, so the grid drifts the
 * same direction as the content plane's `translate(-cam)`.
 */
export function cameraToDeviceOffset(
  cam: Camera,
  dpr: number,
  rate: number,
): { x: number; y: number } {
  return { x: cam.x * dpr * rate, y: cam.y * dpr * rate };
}
