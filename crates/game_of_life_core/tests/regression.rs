//! Regression anchor: a known seed, a known number of ticks, a known
//! hash of the resulting bitmap.  If `World::tick` or `World::from_seed`
//! ever changes — even subtly — this test fails and forces an explicit
//! re-acknowledgement of the new behavior.
//!
//! When the algorithm is intentionally changed, run this test, copy the
//! actual hash from the failure message, and paste it as the expected.
//! That re-anchors the test to the new behavior.

use std::hash::{DefaultHasher, Hasher};

use game_of_life_core::World;

const SEED: u32 = 0xdeadbeef;
const COLS: u32 = 128;
const ROWS: u32 = 128;
const TICKS: u32 = 1000;

fn hash_buffer(buf: &[u32]) -> u64 {
    let mut h = DefaultHasher::new();
    for w in buf {
        h.write_u32(*w);
    }
    h.finish()
}

#[test]
fn world_tick_is_stable_across_refactors() {
    let mut world = World::from_seed(COLS, ROWS, SEED);
    for _ in 0..TICKS {
        world.tick();
    }
    let actual = hash_buffer(world.buffer());

    // Captured 2026-04-27 from the World::tick implementation introduced
    // in Phase 1.  When intentionally changing the tick algorithm, re-run
    // this test, copy the printed hash from the failure message, and
    // paste it here.
    const EXPECTED: u64 = 0xed81_6082_662b_aac2;

    assert_eq!(
        actual, EXPECTED,
        "World::tick output changed.  Actual hash: 0x{:016x}.  \
         Update EXPECTED if this is intentional, otherwise debug.",
        actual,
    );
}
