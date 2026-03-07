use js_sys::{Array, Reflect};
use wasm_bindgen::JsValue;

use crate::grid::Grid;
use crate::renderer::types::{TextGlyphGpu, MAX_TEXT_GLYPHS};

/// Parse a JSON string of `[{cx, cy}, ...]` frozen cell coordinates and pack
/// them into a bitpacked `Vec<u32>` matching the grid's cell buffer layout.
///
/// Returns a zero-filled buffer of `grid.total_words()` words with the
/// appropriate bits set for each valid coordinate.
pub fn parse_frozen_cells_json(
    cells_json: &str,
    grid: &Grid,
) -> Result<Vec<u32>, JsValue> {
    let val: JsValue = js_sys::JSON::parse(cells_json)?;
    let arr = Array::from(&val);
    let total = grid.total_words() as usize;
    let mut buf = vec![0u32; total];

    for i in 0..arr.length() {
        let entry = arr.get(i);
        let cx = get_i32(&entry, "cx");
        let cy = get_i32(&entry, "cy");
        let (cx, cy) = match (cx, cy) {
            (Some(x), Some(y)) => (x, y),
            _ => continue,
        };
        if cx < 0 || cy < 0 {
            continue;
        }
        let cx = cx as u32;
        let cy = cy as u32;
        // Wrap into the padded grid (same layout as compute.wgsl).
        let wy = cy & (grid.padded_rows - 1);
        let wx = cx / 32;
        if wx >= grid.words_per_row {
            continue;
        }
        let bit = cx & 31;
        let idx = (wy * grid.words_per_row + wx) as usize;
        if idx < total {
            buf[idx] |= 1u32 << bit;
        }
    }

    Ok(buf)
}

/// Parse frozen cell coords in fine-cell space for a hi-res region.
/// Coordinates are region-relative (0-based). `wpr` and `padded_rows`
/// describe the region's fine-cell grid layout.
pub fn parse_hires_frozen_cells_json(
    cells_json: &str,
    wpr: u32,
    padded_rows: u32,
) -> Result<Vec<u32>, JsValue> {
    let val: JsValue = js_sys::JSON::parse(cells_json)?;
    let arr = Array::from(&val);
    let total = (wpr * padded_rows) as usize;
    let mut buf = vec![0u32; total];

    for i in 0..arr.length() {
        let entry = arr.get(i);
        let cx = get_i32(&entry, "cx");
        let cy = get_i32(&entry, "cy");
        let (cx, cy) = match (cx, cy) {
            (Some(x), Some(y)) => (x, y),
            _ => continue,
        };
        if cx < 0 || cy < 0 { continue; }
        let cx = cx as u32;
        let cy = cy as u32;
        let wy = cy & (padded_rows - 1);
        let wx = cx / 32;
        if wx >= wpr { continue; }
        let bit = cx & 31;
        let idx = (wy * wpr + wx) as usize;
        if idx < total {
            buf[idx] |= 1u32 << bit;
        }
    }
    Ok(buf)
}

fn get_i32(obj: &JsValue, key: &str) -> Option<i32> {
    let v = Reflect::get(obj, &JsValue::from_str(key)).ok()?;
    v.as_f64().map(|f| f as i32)
}

fn get_f32(obj: &JsValue, key: &str) -> Option<f32> {
    let v = Reflect::get(obj, &JsValue::from_str(key)).ok()?;
    v.as_f64().map(|f| f as f32)
}

/// Parse a JSON array of `[{cellX, cellY, cellW, cellH, uvX, uvY, uvW, uvH}, ...]`
/// into a `Vec<TextGlyphGpu>`, capped at `MAX_TEXT_GLYPHS`.
pub fn parse_text_glyphs_json(json: &str) -> Result<Vec<TextGlyphGpu>, JsValue> {
    let val: JsValue = js_sys::JSON::parse(json)?;
    let arr = Array::from(&val);
    let count = (arr.length() as usize).min(MAX_TEXT_GLYPHS);
    let mut out = Vec::with_capacity(count);

    for i in 0..count as u32 {
        let entry = arr.get(i);
        let cell_x = get_f32(&entry, "cellX").unwrap_or(0.0);
        let cell_y = get_f32(&entry, "cellY").unwrap_or(0.0);
        let cell_w = get_f32(&entry, "cellW").unwrap_or(0.0);
        let cell_h = get_f32(&entry, "cellH").unwrap_or(0.0);
        let uv_x   = get_f32(&entry, "uvX").unwrap_or(0.0);
        let uv_y   = get_f32(&entry, "uvY").unwrap_or(0.0);
        let uv_w   = get_f32(&entry, "uvW").unwrap_or(0.0);
        let uv_h   = get_f32(&entry, "uvH").unwrap_or(0.0);
        let color_r = get_f32(&entry, "colorR").unwrap_or(0.1);
        let color_g = get_f32(&entry, "colorG").unwrap_or(0.1);
        let color_b = get_f32(&entry, "colorB").unwrap_or(0.18);
        out.push(TextGlyphGpu {
            cell_x, cell_y, cell_w, cell_h,
            uv_x, uv_y, uv_w, uv_h,
            color_r, color_g, color_b, pad0: 0.0,
        });
    }

    Ok(out)
}
