//! Browser-targeted integration tests for the game_of_life crate.

#![cfg(target_arch = "wasm32")]

use game_of_life::Universe;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn universe_new_produces_default_dims() {
    let u = Universe::new();
    assert_eq!(u.width(), 128);
    assert_eq!(u.height(), 128);
}

#[wasm_bindgen_test]
fn universe_tick_does_not_panic() {
    let mut u = Universe::new();
    u.tick();
    // Smoke check: dimensions are preserved across tick.
    assert_eq!(u.width(), 128);
    assert_eq!(u.height(), 128);
}
