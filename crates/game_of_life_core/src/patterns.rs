//! Named Game of Life pattern library.
//!
//! v1 includes the three Methuselahs we plan to seed with: R-pentomino
//! (1,103 generations), acorn (5,206), and diehard (130, dies completely).
//! See `docs/methuselah-seeding.md` §3 for the full rationale and the
//! larger pattern set deferred to a future expansion.
//!
//! Patterns are authored as plaintext (`'O'` = alive, `'.'` = dead) so the
//! shape is visible in source.  At Methuselah scale (3x3 to 8x4) plaintext
//! is the most readable format and the parser is trivial.

use crate::pattern::Pattern;

/// R-pentomino: 5 cells, runs 1,103 generations before stabilising.
/// The classic Methuselah.
pub const R_PENTOMINO: Pattern = Pattern {
    name: "r-pentomino",
    rows: &[
        ".OO",
        "OO.",
        ".O.",
    ],
};

/// Acorn: 7 cells, runs 5,206 generations.  The longest-living small
/// Methuselah.
pub const ACORN: Pattern = Pattern {
    name: "acorn",
    rows: &[
        ".O.....",
        "...O...",
        "OO..OOO",
    ],
};

/// Diehard: 7 cells, runs 130 generations and dies completely.  Useful as
/// a "drama beat" — the pattern explodes briefly and is gone.
pub const DIEHARD: Pattern = Pattern {
    name: "diehard",
    rows: &[
        "......O.",
        "OO......",
        ".O...OOO",
    ],
};

/// All Methuselahs in the v1 library.  Iterate over this for random
/// pattern selection in the auto-reseed loop (Phase 3).
pub const ALL_METHUSELAHS: &[&Pattern] = &[&R_PENTOMINO, &ACORN, &DIEHARD];
