// Pure constrained solver for the compass waymarkers — no Vue, no DOM,
// unit-tested (app/src/tests/markerSolver.test.ts).
//
// Each marker is pinned to the box EDGE its bearing points at, then spread
// ALONG that edge so collinear islands (same bearing) settle side-by-side on the
// rim instead of stacking. Because two markers on one wall sit at different
// perpendicular offsets (each inset by its own radius), overlap must be resolved
// in the TANGENTIAL coordinate (along the wall) — resolving perpendicular would
// just be undone by the snap. Markers on different walls (near a corner) fall
// back to a 2-D push. A few Gauss-Seidel passes per frame; at n ≤ 5 it's
// trivial. The composable holds the previous positions, so `attraction` is also
// the damping.

import type { Box } from './compass';

export interface Vec2 {
  x: number;
  y: number;
}

export interface Marker {
  /** Previous-frame resolved position (the integration state). */
  pos: Vec2;
  /** Resting target — the bearing point on the rim (also picks the wall). */
  target: Vec2;
  radius: number;
}

export interface SolveOptions {
  /** Spring/damping toward the target per step, in (0, 1]. */
  attraction: number;
  /** Relaxation passes resolving overlaps (3–5 is plenty). */
  iterations: number;
}

type Wall = 'L' | 'R' | 'T' | 'B';

interface Solved {
  x: number;
  y: number;
  r: number;
  wall: Wall;
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

/** The wall the target rests on (nearest edge of the box). */
function wallOf(t: Vec2, box: Box, r: number): Wall {
  const dl = Math.abs(t.x - (box.minX + r));
  const dr = Math.abs(t.x - (box.maxX - r));
  const dt = Math.abs(t.y - (box.minY + r));
  const db = Math.abs(t.y - (box.maxY - r));
  const m = Math.min(dl, dr, dt, db);
  if (m === dl) return 'L';
  if (m === dr) return 'R';
  if (m === dt) return 'T';
  return 'B';
}

/** Pin perpendicular to the wall; clamp the tangential coord into the box. */
function snap(p: Solved, box: Box): void {
  if (p.wall === 'L') p.x = box.minX + p.r;
  else if (p.wall === 'R') p.x = box.maxX - p.r;
  else if (p.wall === 'T') p.y = box.minY + p.r;
  else p.y = box.maxY - p.r;
  p.x = clamp(p.x, box.minX + p.r, box.maxX - p.r);
  p.y = clamp(p.y, box.minY + p.r, box.maxY - p.r);
}

/** Resolve one pair: tangential if on the same wall, else a corner 2-D push. */
function resolvePair(a: Solved, b: Solved): void {
  const gap = a.r + b.r;
  if (a.wall === b.wall) {
    const tangentY = a.wall === 'L' || a.wall === 'R';
    const d = tangentY ? b.y - a.y : b.x - a.x;
    const ad = Math.abs(d);
    if (ad < gap) {
      const push = (gap - ad) / 2;
      const s = d >= 0 ? 1 : -1;
      if (tangentY) {
        a.y -= s * push;
        b.y += s * push;
      } else {
        a.x -= s * push;
        b.x += s * push;
      }
    }
    return;
  }
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  if (dist > 1e-6 && dist < gap) {
    const push = (gap - dist) / 2;
    a.x -= (dx / dist) * push;
    a.y -= (dy / dist) * push;
    b.x += (dx / dist) * push;
    b.y += (dy / dist) * push;
  }
}

/**
 * Step the markers one frame: spring toward targets, pin to walls, then relax
 * (tangential spread + corner pushes), re-pinning each pass. Returns the new
 * positions (same order). Pure — does not mutate inputs.
 */
export function solveMarkers(markers: readonly Marker[], box: Box, opts: SolveOptions): Vec2[] {
  const p: Solved[] = markers.map((m) => ({
    x: m.pos.x + (m.target.x - m.pos.x) * opts.attraction,
    y: m.pos.y + (m.target.y - m.pos.y) * opts.attraction,
    r: m.radius,
    wall: wallOf(m.target, box, m.radius),
  }));

  for (const m of p) snap(m, box);
  for (let it = 0; it < opts.iterations; it++) {
    for (let i = 0; i < p.length; i++) {
      for (let j = i + 1; j < p.length; j++) resolvePair(p[i], p[j]);
    }
    for (const m of p) snap(m, box);
  }

  return p.map((m) => ({ x: m.x, y: m.y }));
}
