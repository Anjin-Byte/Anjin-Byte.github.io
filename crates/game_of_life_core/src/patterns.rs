//! Named Game of Life pattern library.
//!
//! Patterns are sourced at build time from LifeWiki RLE URLs declared in
//! `patterns.toml`.  See `build.rs` for the fetch / cache / parse / emit
//! pipeline.  Cached RLEs live under `patterns_cache/` (checked into the
//! repo for offline reproducibility); the generated Rust constants land
//! at `OUT_DIR/patterns_generated.rs` and are textually included below.
//!
//! Categories carry distinct visual roles:
//!   - **Methuselahs** evolve into long-running chaos — the "field is
//!     alive and unpredictable" feel.
//!   - **Spaceships** translate across the world forever — recognisable
//!     forms moving across the canvas.
//!   - **Oscillators** cycle through phases forever — rhythmic visual
//!     interest, more collision-resistant than Methuselahs.
//!   - **Guns** emit spaceships forever — excluded from the auto-reseed
//!     pool because they accumulate alive-count too aggressively.
//!   - **Still lifes** never change — excluded from the auto-reseed pool
//!     because nothing decays them away.
//!
//! `ALL_SEED_PATTERNS` is the union of methuselahs, spaceships, and
//! oscillators — the curated mix that gives chaos, motion, and rhythm
//! without piling up immortal static shapes.

use crate::pattern::Pattern;

include!(concat!(env!("OUT_DIR"), "/patterns_generated.rs"));
