/// Maps a viewport (canvas pixels, cell size) onto a power-of-2 padded word grid.
///
/// Cell layout: cell (x, y) occupies bit `x % 32` of the u32 at
/// `y * words_per_row + x / 32` in the flat cell buffer.
pub struct Grid {
    /// Visible cell columns (ceil(canvas_width / cell_px)).
    pub screen_cols: u32,
    /// Visible cell rows (ceil(canvas_height / cell_px)).
    pub screen_rows: u32,
    /// next_power_of_2(screen_rows) — enables bitmask wrapping.
    pub padded_rows: u32,
    /// next_power_of_2(screen_cols) / 32 (also a power of 2).
    pub words_per_row: u32,
    pub cell_px: u32,
    pub canvas_width: u32,
    pub canvas_height: u32,
}

impl Grid {
    /// Locate a cell in the bitpacked buffer.
    ///
    /// `cx` and `cy` must already be wrapped into [0, screen_cols) / [0, screen_rows).
    /// Returns (word_index, bit_offset) matching the layout used by compute.wgsl
    /// and render.wgsl.
    pub fn cell_address(&self, cx: u32, cy: u32) -> (u32, u32) {
        let word_idx = cy * self.words_per_row + cx / 32;
        let bit_off  = cx & 31;
        (word_idx, bit_off)
    }
}

impl Grid {
    pub fn new(canvas_width: u32, canvas_height: u32, cell_px: u32) -> Self {
        let cell_px = cell_px.max(1);
        let screen_cols = canvas_width.div_ceil(cell_px);
        let screen_rows = canvas_height.div_ceil(cell_px);

        // Minimum padded_cols = 32 so words_per_row >= 1.
        let padded_cols = next_pow2(screen_cols).max(32);
        let padded_rows = next_pow2(screen_rows).max(1);
        let words_per_row = padded_cols / 32;

        Grid { screen_cols, screen_rows, padded_rows, words_per_row, cell_px, canvas_width, canvas_height }
    }

    /// Total number of u32 words in the cell buffer.
    pub fn total_words(&self) -> u32 {
        self.padded_rows * self.words_per_row
    }

    /// Buffer size in bytes for one full ping-pong plane.
    pub fn buffer_bytes(&self) -> u64 {
        self.total_words() as u64 * 4
    }
}

fn next_pow2(n: u32) -> u32 {
    if n <= 1 { return 1; }
    n.next_power_of_two()
}
