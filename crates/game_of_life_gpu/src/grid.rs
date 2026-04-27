//! GPU-side dimensional descriptor: cell-buffer layout (from World) plus
//! viewport state (from canvas resize events).
//!
//! Field naming preserves the pre-decouple terminology to minimise diff
//! across consumer files.  Semantic mapping after the world-decouple:
//!   - `screen_cols` / `screen_rows` ≡ World cell dimensions (stable for
//!     the lifetime of the GpuGameOfLife; never resize-derived).
//!   - `padded_rows` / `words_per_row` ≡ World buffer layout dims (also
//!     stable).
//!   - `cell_px` ≡ fixed device-pixel size of one world cell (constant).
//!   - `canvas_width` / `canvas_height` ≡ viewport dims in canvas pixels
//!     (updated on every resize).
//!   - `viewport_origin_x` / `viewport_origin_y` ≡ viewport origin in
//!     world cells (updated on resize / scroll into the world).
//!
//! Renaming the legacy fields is deferred to keep the world-decouple PR
//! focused; consumer touchpoints (zones.rs, simulation.rs, render.wgsl)
//! continue to read the same field names.

use game_of_life_core::World;

pub struct Grid {
    pub screen_cols: u32,
    pub screen_rows: u32,
    pub padded_rows: u32,
    pub words_per_row: u32,
    pub cell_px: u32,
    pub canvas_width: u32,
    pub canvas_height: u32,
    pub viewport_origin_x: u32,
    pub viewport_origin_y: u32,
}

impl Grid {
    /// Locate a cell in the bitpacked buffer.
    ///
    /// `cx` and `cy` must already be wrapped into [0, screen_cols) / [0, screen_rows).
    /// Returns (word_index, bit_offset) matching the layout used by compute.wgsl
    /// and render.wgsl.
    pub fn cell_address(&self, cx: u32, cy: u32) -> (u32, u32) {
        let word_idx = cy * self.words_per_row + cx / 32;
        let bit_off = cx & 31;
        (word_idx, bit_off)
    }

    /// Construct from a fixed-dimension World plus the current viewport state.
    /// Viewport origin defaults to (0, 0) — top-left corner of the world.
    pub fn from_world(world: &World, viewport_canvas_w: u32, viewport_canvas_h: u32, cell_px: u32) -> Self {
        Grid {
            screen_cols: world.cols(),
            screen_rows: world.rows(),
            padded_rows: world.padded_rows(),
            words_per_row: world.words_per_row(),
            cell_px: cell_px.max(1),
            canvas_width: viewport_canvas_w,
            canvas_height: viewport_canvas_h,
            viewport_origin_x: 0,
            viewport_origin_y: 0,
        }
    }

    /// Update the viewport portion of the grid in place (canvas dims and
    /// optionally the origin).  Does not change the world-derived dims.
    pub fn set_viewport(&mut self, canvas_w: u32, canvas_h: u32, origin_x: u32, origin_y: u32) {
        self.canvas_width = canvas_w;
        self.canvas_height = canvas_h;
        self.viewport_origin_x = origin_x;
        self.viewport_origin_y = origin_y;
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
