//! Named Game of Life patterns + 8-orientation transforms.
//!
//! Patterns are stored as plaintext rows ('O' = alive, '.' = dead) — the
//! shape is visible at a glance in source, which matters for small named
//! patterns like Methuselahs (3x3 to 8x4).  The cost of a parser-per-stamp
//! is negligible at this scale; all alive cells fit in a single small Vec
//! during the stamp call.
//!
//! `Transform` enumerates the 8 orientations a 2D pattern can take —
//! 4 rotations × an optional horizontal flip.  Patterns rendered with
//! a random transform get visual variety from the same 5 canonical
//! patterns, which is what the Methuselah seeding feature needs.

/// A pattern defined as plaintext rows.  `'O'` is an alive cell, anything
/// else (typically `'.'`) is dead.  Rows must all be the same length.
pub struct Pattern {
    pub name: &'static str,
    pub rows: &'static [&'static str],
}

impl Pattern {
    pub fn width(&self) -> u32 {
        self.rows.first().map_or(0, |r| r.len() as u32)
    }

    pub fn height(&self) -> u32 {
        self.rows.len() as u32
    }

    /// Iterate over the alive cells in pattern-local coordinates.
    /// Top-left is (0, 0); x increases rightward, y increases downward.
    pub fn alive_cells(&self) -> impl Iterator<Item = (u32, u32)> + '_ {
        self.rows.iter().enumerate().flat_map(|(y, row)| {
            row.chars()
                .enumerate()
                .filter_map(move |(x, c)| (c == 'O').then_some((x as u32, y as u32)))
        })
    }
}

/// 8 orientations of a 2D pattern: 4 rotations × an optional horizontal flip.
///
/// Composition order: `Rot*` rotates the original; `FlipH*` first mirrors
/// horizontally, then rotates.  For a square pattern, the 8 transforms
/// produce 8 distinct orientations (the dihedral group D4); for non-square
/// patterns the same 8 transforms produce 8 results, some of which may be
/// non-axis-aligned with the world grid (which is fine — the transform
/// returns world-relative coordinates).
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum Transform {
    Identity,
    Rot90,
    Rot180,
    Rot270,
    FlipH,
    FlipHRot90,
    FlipHRot180,
    FlipHRot270,
}

impl Transform {
    /// Apply this transform to pattern-local coords `(x, y)` within a
    /// pattern of size `(w, h)`.  Returns coords still in [0, w'×h')
    /// where `(w', h')` are the post-transform dimensions
    /// (swapped for 90°/270° rotations).
    pub fn apply(self, x: u32, y: u32, w: u32, h: u32) -> (u32, u32) {
        // Note: rotations swap the bounding box for 90°/270°.
        // (x, y) → (x', y') such that the rotated cell stays in-bounds.
        match self {
            Transform::Identity => (x, y),
            Transform::Rot90 => (h - 1 - y, x),     // 90° clockwise: (x, y) → (h-1-y, x)
            Transform::Rot180 => (w - 1 - x, h - 1 - y),
            Transform::Rot270 => (y, w - 1 - x),
            Transform::FlipH => (w - 1 - x, y),
            Transform::FlipHRot90 => (h - 1 - y, w - 1 - x),
            Transform::FlipHRot180 => (x, h - 1 - y),
            Transform::FlipHRot270 => (y, x),
        }
    }

    /// Pick one of the 8 transforms based on a single byte.  Phase 3 will
    /// take a full `RngCore`; one byte is enough for now.
    pub fn from_byte(b: u8) -> Self {
        match b & 0b111 {
            0 => Transform::Identity,
            1 => Transform::Rot90,
            2 => Transform::Rot180,
            3 => Transform::Rot270,
            4 => Transform::FlipH,
            5 => Transform::FlipHRot90,
            6 => Transform::FlipHRot180,
            _ => Transform::FlipHRot270,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::patterns::R_PENTOMINO;

    #[test]
    fn pattern_dims() {
        assert_eq!(R_PENTOMINO.width(), 3);
        assert_eq!(R_PENTOMINO.height(), 3);
    }

    #[test]
    fn r_pentomino_alive_cells() {
        // R-pentomino canonical layout (LifeWiki):
        //   .OO
        //   OO.
        //   .O.
        let cells: Vec<_> = R_PENTOMINO.alive_cells().collect();
        let expected = [(1, 0), (2, 0), (0, 1), (1, 1), (1, 2)];
        for c in &expected {
            assert!(cells.contains(c), "missing cell {:?}", c);
        }
        assert_eq!(cells.len(), 5);
    }

    #[test]
    fn transform_identity_round_trip() {
        for x in 0..5u32 {
            for y in 0..5u32 {
                assert_eq!(Transform::Identity.apply(x, y, 5, 5), (x, y));
            }
        }
    }

    #[test]
    fn transform_rot90_four_times_is_identity() {
        // Four 90° rotations on a square pattern should return to start.
        for x in 0..5u32 {
            for y in 0..5u32 {
                let (x1, y1) = Transform::Rot90.apply(x, y, 5, 5);
                let (x2, y2) = Transform::Rot90.apply(x1, y1, 5, 5);
                let (x3, y3) = Transform::Rot90.apply(x2, y2, 5, 5);
                let (x4, y4) = Transform::Rot90.apply(x3, y3, 5, 5);
                assert_eq!((x4, y4), (x, y), "Rot90⁴ ≠ id at ({}, {})", x, y);
            }
        }
    }

    #[test]
    fn transform_rot180_is_self_inverse() {
        for x in 0..4u32 {
            for y in 0..6u32 {
                let (x1, y1) = Transform::Rot180.apply(x, y, 4, 6);
                let (x2, y2) = Transform::Rot180.apply(x1, y1, 4, 6);
                assert_eq!((x2, y2), (x, y));
            }
        }
    }

    #[test]
    fn transform_fliph_self_inverse() {
        for x in 0..4u32 {
            for y in 0..6u32 {
                let (x1, y1) = Transform::FlipH.apply(x, y, 4, 6);
                let (x2, y2) = Transform::FlipH.apply(x1, y1, 4, 6);
                assert_eq!((x2, y2), (x, y));
            }
        }
    }

    #[test]
    fn from_byte_covers_all_eight_variants() {
        let mut seen = std::collections::HashSet::new();
        for b in 0..255u8 {
            seen.insert(Transform::from_byte(b));
        }
        assert_eq!(seen.len(), 8);
    }
}
