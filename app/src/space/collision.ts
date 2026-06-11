// Pure geometry for element collision — no Vue, no DOM. The shared footprint
// every collidable thing reduces to is an axis-aligned rounded rectangle (a
// circle is the degenerate `halfW === halfH === cornerR` case). The compass
// waymarkers (circles) resolve against these in general 2-D; see markerSolver.ts.
// Unit-tested alongside the solver.

export interface Vec2 {
  x: number;
  y: number;
}

/**
 * A collider footprint in the compass's CSS-px space. `cornerR` records the
 * element's bevel so the interface honestly describes a beveled rectangle; v1
 * collision treats the footprint as its bounding box (cornerR ignored), which
 * is conservative and imperceptible at these sizes. It's the hook for corner-
 * exact resolution (or rectangular markers) later.
 */
export interface RoundedRect {
  cx: number;
  cy: number;
  halfW: number;
  halfH: number;
  cornerR: number;
}

/**
 * Minimum-translation vector to push a circle of radius `r` at (cx, cy) clear of
 * `rect`, or {0, 0} when they don't overlap. General 2-D: the circle is pushed
 * along the axis of LEAST penetration (the shorter way out), so it can round an
 * obstacle in any direction rather than only sliding along a fixed axis. This is
 * the AABB form (cornerR ignored — see RoundedRect).
 */
export function resolveCircleRect(cx: number, cy: number, r: number, rect: RoundedRect): Vec2 {
  const penX = rect.halfW + r - Math.abs(cx - rect.cx);
  const penY = rect.halfH + r - Math.abs(cy - rect.cy);
  if (penX <= 0 || penY <= 0) return { x: 0, y: 0 };
  if (penX < penY) return { x: cx >= rect.cx ? penX : -penX, y: 0 };
  return { x: 0, y: cy >= rect.cy ? penY : -penY };
}
