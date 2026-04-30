//! Pure-Rust core for the Game of Life simulation.
//!
//! This crate owns the canonical cell representation (bitpacked `Vec<u32>`),
//! the toroidal tick rule, and the pattern-stamping operations that the
//! Methuselah seeding feature needs.  It has no GPU dependencies and no
//! JS-facing exports — both CPU and GPU adapters consume `World` as their
//! shared representation.
//!
//! The bit layout matches the GPU compute shader's expectation:
//!   cell (cx, cy) lives at bit `cx & 31` of `cells[cy * words_per_row + cx / 32]`.
//! `padded_rows` and `words_per_row` are both rounded to powers of two so the
//! shader's wrap math stays branch-free.

mod pattern;
pub mod patterns;
mod seeding;
mod world;

pub use pattern::{Pattern, Transform};
pub use seeding::{
    pick_random_stamp, pick_random_stamp_spaced, recommended_initial_count,
    seed_world_with_methuselahs, stamp_cells, SpatialGrid, StampDecision,
    MAX_REJECTION_ATTEMPTS, MIN_PATTERN_DISTANCE, SPATIAL_BUCKET_SIZE,
};
pub use world::World;
