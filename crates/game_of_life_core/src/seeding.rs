//! Methuselah seeding primitives.  Pure functions over (rng, world dims)
//! that decide which pattern to stamp where with what orientation.  All
//! randomness is injected via a `RngCore` reference per the codex's
//! Pure Core / Effectful Edges principle.
//!
//! `stamp_cells` is the geometric translator (pattern + origin + transform
//! → list of world cells with toroidal wrap), used both by `World::stamp`
//! and by GPU adapters that want the cell list without writing into a
//! `World` directly (so they can route the writes through their own GPU
//! edit pipeline).

use rand::{Rng, RngCore};

use crate::pattern::{Pattern, Transform};
use crate::patterns::ALL_SEED_PATTERNS;
use crate::world::World;

/// Minimum toroidal distance (in cells) between stamp origins for
/// patterns to evolve in isolation through their named-pattern phase
/// (~10 generations).  Below this, two stamps collide before either
/// is recognizable as its source pattern, and both immediately become
/// chaos noise — failing the "recognizable forms" aesthetic.
pub const MIN_PATTERN_DISTANCE: u32 = 12;

/// Maximum rejection-sampling attempts when looking for a stamp
/// position that respects `MIN_PATTERN_DISTANCE`.  After this many
/// failures we fall back to an unconstrained random placement —
/// better to have one collision than to skip a stamp entirely, and
/// the caller's density target is preserved.
pub const MAX_REJECTION_ATTEMPTS: u32 = 10;

/// A decided-but-not-yet-applied stamp.  Separating "decide" from
/// "apply" keeps the random selection pure and testable.
pub struct StampDecision {
    pub pattern: &'static Pattern,
    pub ox: u32,
    pub oy: u32,
    pub transform: Transform,
}

/// Compute the world-cell coordinates a pattern would occupy when
/// stamped at `(ox, oy)` with the given `transform`, with toroidal wrap
/// applied at world boundaries.  Pure — no World mutation.
pub fn stamp_cells(
    pattern: &Pattern,
    ox: u32,
    oy: u32,
    transform: Transform,
    cols: u32,
    rows: u32,
) -> Vec<(u32, u32)> {
    let pw = pattern.width();
    let ph = pattern.height();
    pattern
        .alive_cells()
        .map(|(px, py)| {
            let (tx, ty) = transform.apply(px, py, pw, ph);
            ((ox + tx) % cols, (oy + ty) % rows)
        })
        .collect()
}

/// Pick a random pattern, position, and orientation appropriate for a
/// world of `(cols, rows)`.  Returns the choice without applying it.
/// Position is uniformly random — no spacing constraint applied.
/// Pattern is drawn from `ALL_SEED_PATTERNS`, the curated mix of
/// Methuselahs, spaceships, and oscillators; still lifes are
/// intentionally excluded because they never decay and would
/// accumulate.
pub fn pick_random_stamp(rng: &mut impl RngCore, cols: u32, rows: u32) -> StampDecision {
    let pattern_idx = rng.gen_range(0..ALL_SEED_PATTERNS.len());
    let pattern: &'static Pattern = ALL_SEED_PATTERNS[pattern_idx];
    let ox = rng.gen_range(0..cols);
    let oy = rng.gen_range(0..rows);
    let transform = Transform::from_byte(rng.gen());
    StampDecision { pattern, ox, oy, transform }
}

/// Pick a random stamp whose origin is at least `min_distance` cells
/// (toroidal) from every position in `occupied`.  Falls back to an
/// unconstrained pick after `max_attempts` rejections — better to
/// risk one collision than to miss a stamp and undershoot density.
pub fn pick_random_stamp_spaced(
    rng: &mut impl RngCore,
    cols: u32,
    rows: u32,
    occupied: &[(u32, u32)],
    min_distance: u32,
    max_attempts: u32,
) -> StampDecision {
    let min_d2 = (min_distance as i64) * (min_distance as i64);
    for _ in 0..max_attempts {
        let candidate = pick_random_stamp(rng, cols, rows);
        if !any_within_squared(candidate.ox, candidate.oy, occupied, min_d2, cols, rows) {
            return candidate;
        }
    }
    pick_random_stamp(rng, cols, rows)
}

fn toroidal_axis_dist(a: u32, b: u32, m: u32) -> u32 {
    let d = a.abs_diff(b);
    d.min(m - d)
}

fn any_within_squared(
    x: u32,
    y: u32,
    others: &[(u32, u32)],
    min_d2: i64,
    cols: u32,
    rows: u32,
) -> bool {
    others.iter().any(|&(ox, oy)| {
        let dx = toroidal_axis_dist(x, ox, cols) as i64;
        let dy = toroidal_axis_dist(y, oy, rows) as i64;
        dx * dx + dy * dy < min_d2
    })
}

/// Apply N random Methuselah stamps to `world`, spaced so each pattern
/// gets to evolve in isolation through its named-pattern phase.  Used
/// for the initial seed and reusable for any "scatter some patterns"
/// operation.  Spacing constraint: see `MIN_PATTERN_DISTANCE`.
pub fn seed_world_with_methuselahs(world: &mut World, rng: &mut impl RngCore, count: u32) {
    let mut placed: Vec<(u32, u32)> = Vec::with_capacity(count as usize);
    for _ in 0..count {
        let d = pick_random_stamp_spaced(
            rng,
            world.cols(),
            world.rows(),
            &placed,
            MIN_PATTERN_DISTANCE,
            MAX_REJECTION_ATTEMPTS,
        );
        world.stamp(d.pattern, d.ox, d.oy, d.transform);
        placed.push((d.ox, d.oy));
    }
}

/// Recommended initial-stamp count for a world of `cols × rows` cells.
///
/// Calibrated to leave the viewport feeling populated at startup —
/// roughly **20 visible patterns** in a typical 8000-cell viewport
/// (1080p × dpr=2 of a 1024×1024 world, viewport ≈ 0.77% of world).
/// One pattern per 400 world cells gives `visible_target` ≈
/// `viewport_cells / 400` ≈ 20.  Density is constant across world
/// sizes because the viewport size is bounded by the display, not
/// by the world.
///
/// Floor at 4 protects tiny worlds (test fixtures, headless harnesses)
/// from getting an empty initial state.  No upper bound: the
/// pre-Phase-1 cap at 20 was sized for a viewport-shaped world and
/// became stale post world-decouple.
///
/// To dial: divisor 250 ≈ 32 visible (very busy), 1000 ≈ 8 visible
/// (sparse), 2000 ≈ 4 visible (calm).
pub fn recommended_initial_count(cols: u32, rows: u32) -> u32 {
    (cols.saturating_mul(rows) / 400).max(4)
}

#[cfg(test)]
mod tests {
    use super::*;
    use rand::SeedableRng;
    use rand_xoshiro::Xoshiro256StarStar;

    use crate::patterns::R_PENTOMINO;

    #[test]
    fn stamp_cells_matches_world_stamp() {
        // The geometric output of stamp_cells must match what World::stamp
        // writes into a world.  This guarantees the two paths can never
        // diverge (the GPU adapter uses stamp_cells; the World uses both).
        let cells = stamp_cells(&R_PENTOMINO, 5, 5, Transform::Identity, 32, 32);
        let mut world = World::new(32, 32);
        world.stamp(&R_PENTOMINO, 5, 5, Transform::Identity);
        for (cx, cy) in &cells {
            assert!(world.cell_at(*cx, *cy), "expected ({}, {}) to be alive", cx, cy);
        }
        assert_eq!(world.alive_count(), cells.len() as u64);
    }

    #[test]
    fn stamp_cells_wraps_at_world_edge() {
        // Pattern at the right edge wraps into column 0.
        let cells = stamp_cells(&R_PENTOMINO, 9, 5, Transform::Identity, 10, 10);
        // R-pentomino is 3 wide; cells at pattern x=2 land at world x=11 → wraps to 1.
        assert!(cells.iter().any(|&(cx, _)| cx == 1));
    }

    #[test]
    fn pick_random_stamp_is_in_bounds() {
        let mut rng = Xoshiro256StarStar::seed_from_u64(42);
        for _ in 0..1000 {
            let d = pick_random_stamp(&mut rng, 100, 80);
            assert!(d.ox < 100);
            assert!(d.oy < 80);
        }
    }

    #[test]
    fn seed_world_is_deterministic_for_same_rng_seed() {
        let mut a = World::new(64, 64);
        let mut b = World::new(64, 64);
        let mut rng_a = Xoshiro256StarStar::seed_from_u64(0xc0_ffee);
        let mut rng_b = Xoshiro256StarStar::seed_from_u64(0xc0_ffee);
        seed_world_with_methuselahs(&mut a, &mut rng_a, 5);
        seed_world_with_methuselahs(&mut b, &mut rng_b, 5);
        assert_eq!(a.buffer(), b.buffer());
    }

    #[test]
    fn seed_world_alive_count_in_expected_range() {
        // The seed pool ranges from 3-cell blinkers up to ~48-cell
        // pulsars (cell counts grow further as patterns.toml expands),
        // so an exact count is RNG- and library-dependent.  This is a
        // wide sanity bound: catches the "stamping silently produced
        // zero cells" regression and the "oh god everything is alive"
        // regression, but doesn't overconstrain on pool composition.
        let mut world = World::new(128, 128);
        let mut rng = Xoshiro256StarStar::seed_from_u64(0xc0_ffee);
        seed_world_with_methuselahs(&mut world, &mut rng, 10);
        let n = world.alive_count();
        assert!(
            (30..=400).contains(&n),
            "alive_count {} outside expected [30, 400] range",
            n,
        );
    }

    #[test]
    fn seed_world_respects_min_pattern_distance() {
        // With spacing enforced, every pair of stamp origins should be
        // at least MIN_PATTERN_DISTANCE apart (toroidal) — barring the
        // rare fallback when rejection sampling exhausts attempts.
        // We use a world large enough that the rejection-sampling
        // budget should never run out for 20 stamps at min_distance=12.
        let mut rng = Xoshiro256StarStar::seed_from_u64(0x5eed);

        // Capture stamp origins by manually mirroring seed_world's logic
        // so we can inspect the decisions, since seed_world_with_methuselahs
        // doesn't return the placement list.
        let mut placed = Vec::new();
        for _ in 0..20 {
            let d = pick_random_stamp_spaced(
                &mut rng, 256, 256, &placed, MIN_PATTERN_DISTANCE, MAX_REJECTION_ATTEMPTS,
            );
            placed.push((d.ox, d.oy));
        }

        // Verify all-pairs spacing.  At a 256×256 world with min_d=12,
        // the rejection budget is enormous (density 20 / 65k ≪ 1) so
        // no fallback should fire.
        let min_d2 = (MIN_PATTERN_DISTANCE as i64) * (MIN_PATTERN_DISTANCE as i64);
        for i in 0..placed.len() {
            for j in (i + 1)..placed.len() {
                let dx = toroidal_axis_dist(placed[i].0, placed[j].0, 256) as i64;
                let dy = toroidal_axis_dist(placed[i].1, placed[j].1, 256) as i64;
                assert!(
                    dx * dx + dy * dy >= min_d2,
                    "stamps at {:?} and {:?} closer than min_distance",
                    placed[i],
                    placed[j],
                );
            }
        }
    }

    #[test]
    fn recommended_initial_count_scales_with_world_size() {
        // Tiny worlds clamp to the floor of 4.
        assert_eq!(recommended_initial_count(10, 10), 4);
        // Production world (1024²) → ~2621 stamps → ≈20 visible at startup.
        assert_eq!(recommended_initial_count(1024, 1024), 2621);
        // Half-resolution world: ~4× fewer (area-proportional).
        assert_eq!(recommended_initial_count(512, 512), 655);
        // No upper clamp — count grows with world area.
        assert_eq!(recommended_initial_count(2048, 2048), 10485);
    }
}
