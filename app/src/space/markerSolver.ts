// Pure particle solver for the compass waymarkers — no Vue, no DOM, unit-tested
// (app/src/tests/markerSolver.test.ts).
//
// General 2-D position-based dynamics (Verlet). Each marker is a circle that
// carries momentum (velocity is the implicit `pos − prevPos`), is pulled toward
// its bearing target on the rim, is contained inside the box, and is separated
// from its neighbours and from fixed obstacles. EVERYTHING resolves in
// continuous 2-D — there is no discrete "which wall am I pinned to" mode, so a
// target sweeping around a corner during a camera fly moves the marker smoothly
// instead of teleporting it from one edge to the perpendicular one (the old
// wall-pinned model spiked the velocity on every corner crossing).
//
// The rim look still falls out for free: a marker pulled to a rim target rests
// on the edge (containment holds it there), and two markers sharing an edge
// repel ALONG it because their centre-to-centre normal is tangential. A few
// Gauss-Seidel passes per frame; at n ≤ 5 it's trivial. Containment is applied
// last each pass, so a marker with nowhere to go (e.g. a viewport-filling
// island under it) settles on the rim rather than oscillating.

import type { Box } from './compass';
import { resolveCircleRect, type RoundedRect, type Vec2 } from './collision';

// Re-exported so existing importers (useCompass, the solver tests) keep their
// path; the canonical definition now lives in collision.ts.
export type { Vec2 };

export interface Marker {
  /** Current position (integration state). */
  pos: Vec2;
  /** Previous-frame position — `pos − prevPos` is the implicit velocity. */
  prevPos: Vec2;
  /** Resting target — the bearing point on the rim. */
  target: Vec2;
  radius: number;
}

export interface SolveOptions {
  /** Spring acceleration toward the target each frame. */
  stiffness: number;
  /** Velocity retained frame-to-frame (Verlet momentum), in (0, 1). */
  friction: number;
  /** Constraint passes resolving overlaps (3–5 is plenty). */
  iterations: number;
}

interface Particle {
  x: number;
  y: number;
  r: number;
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

/** Keep a circle fully inside the box (radius-aware, continuous — no wall mode). */
function contain(p: Particle, box: Box): void {
  p.x = clamp(p.x, box.minX + p.r, box.maxX - p.r);
  p.y = clamp(p.y, box.minY + p.r, box.maxY - p.r);
}

/**
 * Mutually separate two overlapping circles along their centre line. Coincident
 * circles (zero distance) break the tie along +x so they never stick together;
 * in practice distinct bearings give distinct targets, so this only guards the
 * degenerate case.
 */
function separate(a: Particle, b: Particle): void {
  const gap = a.r + b.r;
  let dx = b.x - a.x;
  let dy = b.y - a.y;
  let dist = Math.hypot(dx, dy);
  if (dist >= gap) return;
  if (dist < 1e-6) {
    dx = 1;
    dy = 0;
    dist = 1;
  }
  const push = (gap - dist) / 2;
  const nx = dx / dist;
  const ny = dy / dist;
  a.x -= nx * push;
  a.y -= ny * push;
  b.x += nx * push;
  b.y += ny * push;
}

/** Push a marker out of each fixed obstacle along the shortest axis (2-D). */
function pushFromObstacles(p: Particle, obstacles: readonly RoundedRect[]): void {
  for (const ob of obstacles) {
    const mtv = resolveCircleRect(p.x, p.y, p.r, ob);
    p.x += mtv.x;
    p.y += mtv.y;
  }
}

/**
 * Step the markers one frame: integrate (momentum + attraction toward target),
 * then relax (contain, separate neighbours, clear obstacles) re-containing each
 * pass. Returns the new positions (same order); the caller keeps these as the
 * next `pos` and the old `pos` as `prevPos` to carry velocity. Pure.
 */
export function solveMarkers(
  markers: readonly Marker[],
  box: Box,
  opts: SolveOptions,
  obstacles: readonly RoundedRect[] = [],
): Vec2[] {
  const p: Particle[] = markers.map((m) => {
    const vx = (m.pos.x - m.prevPos.x) * opts.friction;
    const vy = (m.pos.y - m.prevPos.y) * opts.friction;
    const ax = (m.target.x - m.pos.x) * opts.stiffness;
    const ay = (m.target.y - m.pos.y) * opts.stiffness;
    return { x: m.pos.x + vx + ax, y: m.pos.y + vy + ay, r: m.radius };
  });

  for (const m of p) contain(m, box);
  for (let it = 0; it < opts.iterations; it++) {
    for (let i = 0; i < p.length; i++) {
      for (let j = i + 1; j < p.length; j++) separate(p[i], p[j]);
    }
    if (obstacles.length) {
      for (const m of p) pushFromObstacles(m, obstacles);
    }
    for (const m of p) contain(m, box);
  }

  return p.map((m) => ({ x: m.x, y: m.y }));
}
