//! Browser-targeted integration tests for the game_of_life crate.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    #[allow(clippy::eq_op)]
    let actual = 1 + 1;
    assert_eq!(actual, 2);
}
