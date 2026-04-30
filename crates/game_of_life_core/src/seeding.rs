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

/// Edge length in world cells of one `SpatialGrid` bucket.
///
/// Constraints honoured here:
///   - **≥ `MIN_PATTERN_DISTANCE`.**  Guarantees the 3×3 toroidal
///     neighbourhood around a candidate's bucket fully covers the
///     `min_distance` reach in any direction (so an O(1) check is
///     correct, not just fast).
///   - **Divides 1024 evenly.**  Avoids an odd-shaped seam bucket at
///     the wrap on the production world; integer arithmetic stays
///     clean.  16 = 1024/64 is the smallest such value ≥ 12.
pub const SPATIAL_BUCKET_SIZE: u32 = 16;

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
/// (toroidal) from every origin already inserted into `grid`.  Falls
/// back to an unconstrained pick after `max_attempts` rejections —
/// better to risk one collision than to miss a stamp and undershoot
/// density.
///
/// Per-attempt cost is O(1): the spatial hash only inspects the 3×3
/// bucket neighbourhood around the candidate, not the full set of
/// previously-placed origins.
pub fn pick_random_stamp_spaced(
    rng: &mut impl RngCore,
    cols: u32,
    rows: u32,
    grid: &SpatialGrid,
    min_distance: u32,
    max_attempts: u32,
) -> StampDecision {
    let min_d2 = (min_distance as i64) * (min_distance as i64);
    for _ in 0..max_attempts {
        let candidate = pick_random_stamp(rng, cols, rows);
        if !grid.any_within(candidate.ox, candidate.oy, min_d2) {
            return candidate;
        }
    }
    pick_random_stamp(rng, cols, rows)
}

fn toroidal_axis_dist(a: u32, b: u32, m: u32) -> u32 {
    let d = a.abs_diff(b);
    d.min(m - d)
}

/// Spatial hash over toroidal world cell coords.  Used as the
/// rejection set for `pick_random_stamp_spaced`: stamps are bucketed
/// by their origin and a candidate's distance check inspects only the
/// 3×3 bucket neighbourhood (toroidal-wrapped).  Per-check cost is
/// O(1) regardless of total stamp count, so seeding scales linearly.
pub struct SpatialGrid {
    cols: u32,
    rows: u32,
    bucket_size: u32,
    nx: u32,
    ny: u32,
    /// Row-major: `buckets[by * nx + bx]` contains every origin whose
    /// bucket coords land at `(bx, by)`.  Most buckets stay empty;
    /// at design density most occupied buckets hold 1–2 stamps.
    buckets: Vec<Vec<(u32, u32)>>,
}

impl SpatialGrid {
    /// Construct an empty grid over a `cols × rows` toroidal world,
    /// bucketed at `bucket_size` cells per edge.
    ///
    /// **Panics** if `bucket_size < MIN_PATTERN_DISTANCE` (the 3×3
    /// neighbour scan would no longer cover the spacing reach), or if
    /// either world dimension is `< 3 × bucket_size` (the 3×3
    /// neighbourhood would wrap-overlap itself, breaking the
    /// neighbour iteration).
    pub fn new(cols: u32, rows: u32, bucket_size: u32) -> Self {
        assert!(
            bucket_size >= MIN_PATTERN_DISTANCE,
            "bucket_size {} must be ≥ MIN_PATTERN_DISTANCE = {}",
            bucket_size, MIN_PATTERN_DISTANCE,
        );
        assert!(
            cols >= 3 * bucket_size && rows >= 3 * bucket_size,
            "world {}×{} too small for SpatialGrid with bucket_size = {} \
             (each dim must be ≥ 3 × bucket_size = {})",
            cols, rows, bucket_size, 3 * bucket_size,
        );
        let nx = cols.div_ceil(bucket_size);
        let ny = rows.div_ceil(bucket_size);
        let mut buckets = Vec::with_capacity((nx * ny) as usize);
        buckets.resize_with((nx * ny) as usize, Vec::new);
        Self { cols, rows, bucket_size, nx, ny, buckets }
    }

    pub fn insert(&mut self, ox: u32, oy: u32) {
        let (bx, by) = (ox / self.bucket_size, oy / self.bucket_size);
        let idx = (by * self.nx + bx) as usize;
        self.buckets[idx].push((ox, oy));
    }

    /// True iff any inserted origin is at toroidal distance < `sqrt(min_d2)`
    /// from `(ox, oy)`.  Iterates only the 3×3 toroidal-wrapped bucket
    /// neighbourhood around `(ox, oy)`'s bucket — at most 9 buckets,
    /// each typically holding 0–2 origins.
    pub fn any_within(&self, ox: u32, oy: u32, min_d2: i64) -> bool {
        let (bx, by) = (ox / self.bucket_size, oy / self.bucket_size);
        let nx = self.nx as i32;
        let ny = self.ny as i32;
        let cols = self.cols;
        let rows = self.rows;
        for dy in -1..=1i32 {
            for dx in -1..=1i32 {
                let nbx = ((bx as i32 + dx).rem_euclid(nx)) as u32;
                let nby = ((by as i32 + dy).rem_euclid(ny)) as u32;
                let idx = (nby * self.nx + nbx) as usize;
                for &(qx, qy) in &self.buckets[idx] {
                    let dxi = toroidal_axis_dist(ox, qx, cols) as i64;
                    let dyi = toroidal_axis_dist(oy, qy, rows) as i64;
                    if dxi * dxi + dyi * dyi < min_d2 {
                        return true;
                    }
                }
            }
        }
        false
    }

    /// Iterate all inserted origins.  Order is bucket-major and
    /// otherwise unspecified — useful for tests that need the placed
    /// set for all-pairs verification.
    pub fn iter(&self) -> impl Iterator<Item = (u32, u32)> + '_ {
        self.buckets.iter().flat_map(|b| b.iter().copied())
    }
}

/// Apply N random Methuselah stamps to `world`, spaced so each pattern
/// gets to evolve in isolation through its named-pattern phase.  Used
/// for the initial seed and reusable for any "scatter some patterns"
/// operation.  Spacing constraint: see `MIN_PATTERN_DISTANCE`.
pub fn seed_world_with_methuselahs(world: &mut World, rng: &mut impl RngCore, count: u32) {
    let mut grid = SpatialGrid::new(world.cols(), world.rows(), SPATIAL_BUCKET_SIZE);
    for _ in 0..count {
        let d = pick_random_stamp_spaced(
            rng,
            world.cols(),
            world.rows(),
            &grid,
            MIN_PATTERN_DISTANCE,
            MAX_REJECTION_ATTEMPTS,
        );
        world.stamp(d.pattern, d.ox, d.oy, d.transform);
        grid.insert(d.ox, d.oy);
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

        let mut grid = SpatialGrid::new(256, 256, SPATIAL_BUCKET_SIZE);
        let mut placed = Vec::new();
        for _ in 0..20 {
            let d = pick_random_stamp_spaced(
                &mut rng, 256, 256, &grid, MIN_PATTERN_DISTANCE, MAX_REJECTION_ATTEMPTS,
            );
            grid.insert(d.ox, d.oy);
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

    // ── SpatialGrid coverage ────────────────────────────────────────

    #[test]
    fn spatial_grid_basic_insert_and_query() {
        // Insert one origin at (50, 50) on a 256² world (no wrap effects
        // for this test — both query points are far from edges).  Query
        // at sqrt(min_d2) = 10:
        //   (55, 55): squared distance 7² + 7² = 98 < 100 → within.
        //   (60, 60): squared distance 14² + 14² = 392 ≥ 100 → not within.
        let mut grid = SpatialGrid::new(256, 256, SPATIAL_BUCKET_SIZE);
        grid.insert(50, 50);
        assert!(grid.any_within(55, 55, 100), "(55,55) should detect (50,50)");
        assert!(!grid.any_within(60, 60, 100), "(60,60) should not detect (50,50)");
    }

    #[test]
    fn spatial_grid_toroidal_wrap() {
        // Insert near the left edge; query near the right edge.  At
        // 1024² with bucket_size=16, (5,5) is in bucket (0,0), (1020,5)
        // is in bucket (63,0).  Toroidal x distance = min(1015, 9) = 9.
        // Squared toroidal distance = 81 < 144 → must be detected.
        let mut grid = SpatialGrid::new(1024, 1024, SPATIAL_BUCKET_SIZE);
        grid.insert(5, 5);
        assert!(grid.any_within(1020, 5, 144), "wrap-around proximity should be detected");
        // And confirm a far-apart pair is *not* detected: (5, 5) and
        // (500, 500) are nowhere near each other in either direction.
        assert!(!grid.any_within(500, 500, 144));
    }

    #[test]
    fn spatial_grid_neighbourhood_correctness() {
        // Place one stamp just inside MIN_PATTERN_DISTANCE — must be
        // detected.  Place another just outside — must not be.
        let min = MIN_PATTERN_DISTANCE;
        let min_d2 = (min as i64) * (min as i64);
        let mut grid = SpatialGrid::new(256, 256, SPATIAL_BUCKET_SIZE);
        // Just inside: dx = min - 1, dy = 0 → d² = (min-1)² < min².
        grid.insert(100 + (min - 1), 100);
        assert!(grid.any_within(100, 100, min_d2));
        // Reset; just outside: dx = min, dy = 0 → d² = min² ≥ min² (not <).
        let mut grid = SpatialGrid::new(256, 256, SPATIAL_BUCKET_SIZE);
        grid.insert(100 + min, 100);
        assert!(!grid.any_within(100, 100, min_d2));
    }

    #[test]
    fn spatial_grid_iter_round_trip() {
        // Inserting N points and collecting via iter() yields the same
        // set (order unspecified).  Origins picked to land in distinct
        // buckets (16-cell stride) so no per-bucket Vec ordering matters.
        let mut grid = SpatialGrid::new(256, 256, SPATIAL_BUCKET_SIZE);
        let inputs = [(5, 5), (50, 5), (5, 50), (100, 100), (200, 200)];
        for &(ox, oy) in &inputs {
            grid.insert(ox, oy);
        }
        let mut got: Vec<(u32, u32)> = grid.iter().collect();
        got.sort();
        let mut want: Vec<(u32, u32)> = inputs.to_vec();
        want.sort();
        assert_eq!(got, want);
    }

    #[test]
    #[should_panic(expected = "too small for SpatialGrid")]
    fn spatial_grid_panics_on_too_small_world() {
        // World below 3 × bucket_size violates the 3×3 neighbourhood
        // assumption — must panic at construction rather than silently
        // produce wrong rejection-set semantics.
        let _ = SpatialGrid::new(20, 20, SPATIAL_BUCKET_SIZE);
    }

    #[test]
    #[should_panic(expected = "must be ≥ MIN_PATTERN_DISTANCE")]
    fn spatial_grid_panics_on_undersized_bucket() {
        // bucket_size < MIN_PATTERN_DISTANCE breaks the 3×3 reach
        // guarantee — must panic.
        let _ = SpatialGrid::new(256, 256, MIN_PATTERN_DISTANCE - 1);
    }

    #[test]
    fn pick_random_stamp_spaced_in_bounds() {
        let mut rng = Xoshiro256StarStar::seed_from_u64(42);
        let grid = SpatialGrid::new(128, 128, SPATIAL_BUCKET_SIZE);
        for _ in 0..1000 {
            let d = pick_random_stamp_spaced(
                &mut rng, 128, 128, &grid, MIN_PATTERN_DISTANCE, MAX_REJECTION_ATTEMPTS,
            );
            assert!(d.ox < 128);
            assert!(d.oy < 128);
        }
    }

    #[test]
    fn pick_random_stamp_spaced_respects_distance_at_scale() {
        // Stronger version of `seed_world_respects_min_pattern_distance`:
        // 50 picks on a wider world so the rejection budget is comfortable.
        let mut rng = Xoshiro256StarStar::seed_from_u64(0xa11ce);
        let mut grid = SpatialGrid::new(512, 512, SPATIAL_BUCKET_SIZE);
        let mut placed = Vec::new();
        for _ in 0..50 {
            let d = pick_random_stamp_spaced(
                &mut rng, 512, 512, &grid, MIN_PATTERN_DISTANCE, MAX_REJECTION_ATTEMPTS,
            );
            grid.insert(d.ox, d.oy);
            placed.push((d.ox, d.oy));
        }
        let min_d2 = (MIN_PATTERN_DISTANCE as i64) * (MIN_PATTERN_DISTANCE as i64);
        for i in 0..placed.len() {
            for j in (i + 1)..placed.len() {
                let dx = toroidal_axis_dist(placed[i].0, placed[j].0, 512) as i64;
                let dy = toroidal_axis_dist(placed[i].1, placed[j].1, 512) as i64;
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
    fn seed_world_pairs_within_min_distance_at_production_scale() {
        // Drive the full seeding helper with N=100 stamps on a 1024²
        // world (production scale, modest count) and confirm all-pairs
        // spacing.  At this density the rejection budget is comfortable;
        // any failure indicates a SpatialGrid correctness regression.
        let mut world = World::new(1024, 1024);
        let mut rng = Xoshiro256StarStar::seed_from_u64(0xfeed_face);
        // Side-channel: build a parallel grid + placed list to inspect.
        let mut grid = SpatialGrid::new(1024, 1024, SPATIAL_BUCKET_SIZE);
        let mut placed = Vec::new();
        for _ in 0..100 {
            let d = pick_random_stamp_spaced(
                &mut rng, 1024, 1024, &grid, MIN_PATTERN_DISTANCE, MAX_REJECTION_ATTEMPTS,
            );
            world.stamp(d.pattern, d.ox, d.oy, d.transform);
            grid.insert(d.ox, d.oy);
            placed.push((d.ox, d.oy));
        }
        let min_d2 = (MIN_PATTERN_DISTANCE as i64) * (MIN_PATTERN_DISTANCE as i64);
        for i in 0..placed.len() {
            for j in (i + 1)..placed.len() {
                let dx = toroidal_axis_dist(placed[i].0, placed[j].0, 1024) as i64;
                let dy = toroidal_axis_dist(placed[i].1, placed[j].1, 1024) as i64;
                assert!(
                    dx * dx + dy * dy >= min_d2,
                    "stamps at {:?} and {:?} closer than min_distance",
                    placed[i], placed[j],
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
