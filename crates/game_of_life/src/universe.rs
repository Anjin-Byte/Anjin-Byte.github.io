use wasm_bindgen::prelude::*;

use game_of_life_core::World;

use crate::utils::set_panic_hook;

/// CPU-side Game of Life facade for the JavaScript fallback path.
///
/// Wraps a `World` (the canonical bit-packed representation shared with
/// the GPU adapter) and maintains a `Vec<u8>` byte mirror that JS can
/// read directly via the `cells()` pointer.  The mirror is refreshed
/// after every `tick()`.  Mirror length = `width × height` bytes,
/// 1 byte per cell (0 = dead, 1 = alive) — matches the contract the
/// JS-side `WasmBridge` and `cpuRenderer.ts` expect.
#[wasm_bindgen]
pub struct Universe {
    world: World,
    cells: Vec<u8>,
}

impl Default for Universe {
    fn default() -> Self {
        Self::new()
    }
}

#[wasm_bindgen]
impl Universe {
    /// Construct the production-default 128×128 Universe.  The initial
    /// pattern (cells where `i % 2 == 0 || i % 7 == 0`) is preserved
    /// from the pre-Phase-2 implementation so the CPU-fallback canvas
    /// looks identical to before this refactor.
    pub fn new() -> Universe {
        Self::with_dims(128, 128)
    }

    pub fn width(&self) -> u32 {
        self.world.cols()
    }

    pub fn height(&self) -> u32 {
        self.world.rows()
    }

    /// Pointer to the byte-per-cell mirror in WASM linear memory.
    /// JS reads it as `new Uint8Array(memory.buffer, ptr, w * h)`.
    pub fn cells(&self) -> *const u8 {
        self.cells.as_ptr()
    }

    /// Advance one generation.  Delegates to `World::tick()`, then
    /// refreshes the byte mirror so the next `cells()` read sees the
    /// new state.
    pub fn tick(&mut self) {
        self.world.tick();
        self.refresh_mirror();
    }
}

impl Universe {
    /// Construct with arbitrary dimensions.  Tests use this; production
    /// goes through `Universe::new()` at 128×128.
    pub fn with_dims(cols: u32, rows: u32) -> Universe {
        set_panic_hook();
        let mut world = World::new(cols, rows);
        // Preserve the pre-refactor seed pattern so the CPU fallback
        // produces visually-identical initial state to the pre-Phase-2
        // implementation.  Iterating in row-major order matches the
        // original index math (i % cols / i / cols).
        for i in 0..(cols * rows) {
            if i % 2 == 0 || i % 7 == 0 {
                let cy = i / cols;
                let cx = i % cols;
                world.set_cell(cx, cy, true);
            }
        }
        let mut universe = Universe {
            world,
            cells: vec![0; (cols * rows) as usize],
        };
        universe.refresh_mirror();
        universe
    }

    fn refresh_mirror(&mut self) {
        let cols = self.world.cols();
        let rows = self.world.rows();
        for cy in 0..rows {
            for cx in 0..cols {
                let idx = (cy * cols + cx) as usize;
                self.cells[idx] = self.world.cell_at(cx, cy) as u8;
            }
        }
    }
}
