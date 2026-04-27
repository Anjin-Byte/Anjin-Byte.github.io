//! Bitpacked toroidal cell grid with a pure-Rust tick rule.

use crate::pattern::{Pattern, Transform};

/// A toroidal grid of cells, bit-packed at one bit per cell.
///
/// The bit layout matches the GPU compute shader exactly: cell `(cx, cy)`
/// lives at bit `cx & 31` of word `cy * words_per_row + cx / 32`.
/// `padded_rows` and `words_per_row` are both rounded to the next power of
/// two so wrap math is branch-free.
///
/// Cell coordinates passed in here are kept as bare `u32` for now —
/// promoting them to checked newtypes (`WorldCell`, etc.) is a Phase 3
/// task per the codex's Push Correctness Left principle.  Today, callers
/// must pre-wrap or accept that `set_cell(world.cols(), 0, true)` does
/// nothing (the bounds check returns early).
pub struct World {
    cols: u32,
    rows: u32,
    padded_rows: u32,
    words_per_row: u32,
    cells: Vec<u32>,
}

impl World {
    /// Create an empty world of the given logical dimensions.
    ///
    /// The backing buffer is sized to the padded power-of-two layout the
    /// GPU compute shader expects.  `cols` and `rows` may be any positive
    /// values; the padded dimensions are derived internally.
    pub fn new(cols: u32, rows: u32) -> Self {
        let cols = cols.max(1);
        let rows = rows.max(1);
        let padded_cols = next_pow2(cols).max(32);
        let padded_rows = next_pow2(rows).max(1);
        let words_per_row = padded_cols / 32;
        let total_words = (padded_rows * words_per_row) as usize;
        World {
            cols,
            rows,
            padded_rows,
            words_per_row,
            cells: vec![0; total_words],
        }
    }

    /// Create a world filled from the same LCG seed pattern the original GPU
    /// init used (`make_cell_buffers` in `game_of_life_gpu/src/simulation.rs`).
    /// Bit-identical output to the previous implementation, given identical
    /// dimensions and seed.
    pub fn from_seed(cols: u32, rows: u32, seed: u32) -> Self {
        let mut world = Self::new(cols, rows);
        let mut state = seed;
        for word in &mut world.cells {
            state = lcg(state);
            *word = state;
        }
        world
    }

    pub fn cols(&self) -> u32 {
        self.cols
    }

    pub fn rows(&self) -> u32 {
        self.rows
    }

    pub fn padded_rows(&self) -> u32 {
        self.padded_rows
    }

    pub fn words_per_row(&self) -> u32 {
        self.words_per_row
    }

    /// Total number of u32 words in the backing buffer.
    pub fn total_words(&self) -> u32 {
        self.padded_rows * self.words_per_row
    }

    /// Buffer size in bytes — what GPU adapters allocate for their mirror.
    pub fn buffer_bytes(&self) -> u64 {
        self.total_words() as u64 * 4
    }

    /// Read-only access to the packed buffer.  GPU adapters use this to
    /// upload state to the device.  The slice length is `total_words()`.
    pub fn buffer(&self) -> &[u32] {
        &self.cells
    }

    /// Mutable access to the packed buffer.  Used by GPU adapters that need
    /// to mirror device state back into the world (e.g. after a tick on
    /// the GPU side, before stamping a pattern that needs to read current
    /// state).
    pub fn buffer_mut(&mut self) -> &mut [u32] {
        &mut self.cells
    }

    pub fn cell_at(&self, cx: u32, cy: u32) -> bool {
        if cx >= self.cols || cy >= self.rows {
            return false;
        }
        let (word_idx, bit) = self.address(cx, cy);
        (self.cells[word_idx] >> bit) & 1 == 1
    }

    pub fn set_cell(&mut self, cx: u32, cy: u32, alive: bool) {
        if cx >= self.cols || cy >= self.rows {
            return;
        }
        let (word_idx, bit) = self.address(cx, cy);
        let mask = 1u32 << bit;
        if alive {
            self.cells[word_idx] |= mask;
        } else {
            self.cells[word_idx] &= !mask;
        }
    }

    pub fn toggle_cell(&mut self, cx: u32, cy: u32) {
        if cx >= self.cols || cy >= self.rows {
            return;
        }
        let (word_idx, bit) = self.address(cx, cy);
        self.cells[word_idx] ^= 1u32 << bit;
    }

    /// Stamp a pattern at world cell `(ox, oy)` with the given orientation.
    /// Pattern-local coordinates are translated to world coordinates via
    /// `transform.apply(...)`, then offset by `(ox, oy)` and wrapped into
    /// the toroidal world.  Cells already alive in the world stay alive
    /// (this is a "set" not a "toggle" — stamping is additive).
    pub fn stamp(&mut self, pattern: &Pattern, ox: u32, oy: u32, transform: Transform) {
        let pw = pattern.width();
        let ph = pattern.height();
        for (px, py) in pattern.alive_cells() {
            let (tx, ty) = transform.apply(px, py, pw, ph);
            let wx = (ox + tx) % self.cols;
            let wy = (oy + ty) % self.rows;
            self.set_cell(wx, wy, true);
        }
    }

    /// Total alive cells in the world.  Cheap — one popcount per word.
    pub fn alive_count(&self) -> u64 {
        self.cells.iter().map(|w| w.count_ones() as u64).sum()
    }

    /// Advance one generation using the standard B3/S23 rule with toroidal
    /// wrap.  Pure CPU implementation — this is the reference that the GPU
    /// compute shader is checked against in Phase 2's differential oracle
    /// test.  Not currently called from the GPU adapter; the GPU shader runs
    /// against its own buffer mirror.
    pub fn tick(&mut self) {
        let mut next = vec![0u32; self.cells.len()];
        for cy in 0..self.rows {
            for cx in 0..self.cols {
                let live = self.live_neighbor_count(cx, cy);
                let alive = self.cell_at(cx, cy);
                let next_alive = matches!((alive, live), (true, 2) | (true, 3) | (false, 3));
                if next_alive {
                    let (word_idx, bit) = self.address(cx, cy);
                    next[word_idx] |= 1u32 << bit;
                }
            }
        }
        self.cells = next;
    }

    fn address(&self, cx: u32, cy: u32) -> (usize, u32) {
        let word_idx = (cy * self.words_per_row + cx / 32) as usize;
        let bit = cx & 31;
        (word_idx, bit)
    }

    fn live_neighbor_count(&self, cx: u32, cy: u32) -> u8 {
        let mut count = 0u8;
        // Toroidal wrap: subtract via add-modulo to avoid u32 underflow.
        let cols = self.cols;
        let rows = self.rows;
        for dy in [rows - 1, 0, 1] {
            for dx in [cols - 1, 0, 1] {
                if dx == 0 && dy == 0 {
                    continue;
                }
                let nx = (cx + dx) % cols;
                let ny = (cy + dy) % rows;
                if self.cell_at(nx, ny) {
                    count += 1;
                }
            }
        }
        count
    }
}

fn next_pow2(n: u32) -> u32 {
    if n <= 1 {
        return 1;
    }
    n.next_power_of_two()
}

/// Linear-congruential generator matching the original GPU init at
/// game_of_life_gpu/src/simulation.rs.  Kept here so World::from_seed
/// produces bit-identical bytes for the same dimensions and seed.
fn lcg(s: u32) -> u32 {
    s.wrapping_mul(1664525).wrapping_add(1013904223)
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::patterns;

    #[test]
    fn new_world_padded_dims() {
        let w = World::new(100, 60);
        assert_eq!(w.cols(), 100);
        assert_eq!(w.rows(), 60);
        // padded_cols = next_pow2(100) = 128 → words_per_row = 4
        assert_eq!(w.words_per_row(), 4);
        // padded_rows = next_pow2(60) = 64
        assert_eq!(w.padded_rows(), 64);
        assert_eq!(w.total_words(), 256);
        assert_eq!(w.alive_count(), 0);
    }

    #[test]
    fn small_dims_meet_minimum_padding() {
        // padded_cols floor is 32 so words_per_row >= 1
        let w = World::new(5, 1);
        assert_eq!(w.words_per_row(), 1);
        assert_eq!(w.padded_rows(), 1);
    }

    #[test]
    fn from_seed_is_deterministic() {
        let a = World::from_seed(64, 64, 0xdeadbeef);
        let b = World::from_seed(64, 64, 0xdeadbeef);
        assert_eq!(a.buffer(), b.buffer());
    }

    #[test]
    fn from_seed_first_word_matches_lcg() {
        // The first word should be lcg(seed) per the original GPU init pattern.
        let w = World::from_seed(64, 64, 0xdeadbeef);
        let expected_first = lcg(0xdeadbeef);
        assert_eq!(w.buffer()[0], expected_first);
    }

    #[test]
    fn cell_round_trip() {
        let mut w = World::new(64, 64);
        assert!(!w.cell_at(5, 7));
        w.set_cell(5, 7, true);
        assert!(w.cell_at(5, 7));
        w.toggle_cell(5, 7);
        assert!(!w.cell_at(5, 7));
        w.toggle_cell(5, 7);
        assert!(w.cell_at(5, 7));
        w.set_cell(5, 7, false);
        assert!(!w.cell_at(5, 7));
    }

    #[test]
    fn cell_out_of_bounds_is_silent() {
        let mut w = World::new(10, 10);
        // Coordinates beyond cols/rows are dropped, not panicked.
        w.set_cell(100, 0, true);
        w.set_cell(0, 100, true);
        assert_eq!(w.alive_count(), 0);
        assert!(!w.cell_at(100, 0));
    }

    #[test]
    fn alive_count_matches_brute_force() {
        let mut w = World::new(32, 32);
        // Sparse pattern across multiple words.
        for cx in 0..32u32 {
            for cy in 0..32u32 {
                if (cx + cy) % 3 == 0 {
                    w.set_cell(cx, cy, true);
                }
            }
        }
        let expected = (0..32u32)
            .flat_map(|cx| (0..32u32).map(move |cy| (cx, cy)))
            .filter(|&(cx, cy)| (cx + cy) % 3 == 0)
            .count() as u64;
        assert_eq!(w.alive_count(), expected);
    }

    #[test]
    fn block_still_life_is_stable() {
        // A 2x2 block at (1, 1)-(2, 2) is the canonical still life.
        let mut w = World::new(8, 8);
        w.set_cell(1, 1, true);
        w.set_cell(2, 1, true);
        w.set_cell(1, 2, true);
        w.set_cell(2, 2, true);
        let before = w.buffer().to_vec();
        w.tick();
        assert_eq!(w.buffer(), before.as_slice(), "block should be stable");
    }

    #[test]
    fn blinker_oscillates() {
        // A 1x3 horizontal line oscillates between horizontal and vertical.
        let mut w = World::new(8, 8);
        w.set_cell(2, 3, true);
        w.set_cell(3, 3, true);
        w.set_cell(4, 3, true);
        let initial_alive_count = w.alive_count();
        assert_eq!(initial_alive_count, 3);

        w.tick();
        assert_eq!(w.alive_count(), 3);
        // Now vertical: (3,2), (3,3), (3,4)
        assert!(w.cell_at(3, 2));
        assert!(w.cell_at(3, 3));
        assert!(w.cell_at(3, 4));
        assert!(!w.cell_at(2, 3));
        assert!(!w.cell_at(4, 3));

        w.tick();
        // Back to horizontal.
        assert!(w.cell_at(2, 3));
        assert!(w.cell_at(3, 3));
        assert!(w.cell_at(4, 3));
    }

    #[test]
    fn r_pentomino_has_five_cells() {
        let mut w = World::new(16, 16);
        w.stamp(&patterns::R_PENTOMINO, 5, 5, Transform::Identity);
        assert_eq!(w.alive_count(), 5);
    }

    #[test]
    fn stamp_wraps_at_world_edge() {
        // A pattern stamped near the right edge wraps into column 0.
        let mut w = World::new(10, 10);
        w.stamp(&patterns::R_PENTOMINO, 9, 5, Transform::Identity);
        // R-pentomino is 3 wide; cells at pattern x=1, x=2 wrap to world x=0, x=1.
        assert_eq!(w.alive_count(), 5);
    }
}
