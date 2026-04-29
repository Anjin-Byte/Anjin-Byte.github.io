//! GPU-side dimensional descriptor: cell-buffer layout (from World) plus
//! viewport state (from canvas resize events).
//!
//! ## Coordinate spaces
//!
//! Pixel/cell math in this crate moves through four spaces.  Every
//! consumer of `Grid` either reads from one or projects between two:
//!
//!   1. **CSS pixel** — what `MouseEvent.clientX/Y` reports.  Lives in
//!      the JS layer; never appears in this struct.
//!   2. **Canvas pixel** — CSS pixel multiplied by `devicePixelRatio`.
//!      `canvas_width` / `canvas_height` are the viewport's extent in
//!      this space; updated on resize.
//!   3. **World pixel** — canvas pixel offset by the current
//!      `scroll_y` (and, eventually, `scroll_x`).  Origin is world
//!      `(0, 0)`.  Not stored here; computed in the shader.
//!   4. **World cell** — world pixel divided by `cell_px`, then taken
//!      modulo `world_cols` / `world_rows` for toroidal wrap.  Cells
//!      live in `[0, world_cols) × [0, world_rows)`.  This is the
//!      space that addresses the bitpacked buffer.
//!
//! ## Field roles
//!
//!   - `world_cols` / `world_rows` ≡ world cell dimensions; the
//!     toroidal-wrap modulus.  Stable for the lifetime of the
//!     `GpuGameOfLife` — never resize-derived.
//!   - `padded_rows` / `words_per_row` ≡ buffer layout dims (rounded
//!     to powers of two for branch-free shader index math).  Also
//!     stable.
//!   - `cell_px` ≡ fixed device-pixel size of one world cell.
//!   - `canvas_width` / `canvas_height` ≡ viewport dims in canvas
//!     pixels.  Updated on every resize.
//!   - `viewport_origin_x` / `viewport_origin_y` ≡ viewport top-left
//!     in world cells.  Currently pinned at `(0, 0)`; the field exists
//!     so a future horizontal-pan PR can wire it without another
//!     rename round.

use game_of_life_core::World;

pub struct Grid {
    pub world_cols: u32,
    pub world_rows: u32,
    pub padded_rows: u32,
    pub words_per_row: u32,
    pub cell_px: u32,
    pub canvas_width: u32,
    pub canvas_height: u32,
    pub viewport_origin_x: u32,
    pub viewport_origin_y: u32,
}

impl Grid {
    /// Locate a world cell in the bitpacked buffer.
    ///
    /// `cx` and `cy` must already be wrapped into
    /// `[0, world_cols) × [0, world_rows)`.  Returns
    /// `(word_index, bit_offset)` matching the layout used by
    /// compute.wgsl and render.wgsl.
    pub fn cell_address(&self, cx: u32, cy: u32) -> (u32, u32) {
        let word_idx = cy * self.words_per_row + cx / 32;
        let bit_off = cx & 31;
        (word_idx, bit_off)
    }

    /// Construct from a fixed-dimension World plus the current viewport state.
    /// Viewport origin defaults to (0, 0) — top-left corner of the world.
    pub fn from_world(world: &World, viewport_canvas_w: u32, viewport_canvas_h: u32, cell_px: u32) -> Self {
        Grid {
            world_cols: world.cols(),
            world_rows: world.rows(),
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
