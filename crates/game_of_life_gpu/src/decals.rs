use js_sys::{Array, Reflect};
use wasm_bindgen::JsValue;

use crate::grid::Grid;

pub const MAX_DECALS: usize = 32;

pub const KIND_SOLID: u32 = 0;
pub const KIND_CHECKERBOARD: u32 = 1;
pub const KIND_STRIPES: u32 = 2;
pub const KIND_DOTS: u32 = 3;

pub const BLEND_ALPHA: u32 = 0;
pub const BLEND_MULTIPLY: u32 = 1;
pub const BLEND_SCREEN: u32 = 2;

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct DecalMetaGpu {
    pub decal_count: u32,
    pub pad: [u32; 3],
}

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct DecalEntryGpu {
    // Inclusive cell-space rect: [x1, y1, x2, y2].
    // x is clamped to [0, screen_cols-1]; y is world row.
    pub rect: [i32; 4],

    // [kind, blend_mode, suppress_cells, reserved]
    // kind:           0=solid, 1=checkerboard, 2=stripes, 3=dots
    // blend_mode:     0=alpha-over, 1=multiply, 2=screen
    // suppress_cells: 1=zero cell ink inside rect, 0=leave cells visible
    pub flags: [u32; 4],

    // Pattern parameters (kind-specific):
    //   solid:        [coverage, r, g, b]  — coverage in [0,1], rgb linear sRGB [0,1]
    //   checkerboard: [cell_size, _, _, _] — cell_size >= 1
    //   stripes:      [pitch, _, _, _]     — pitch >= 2 (cells)
    //   dots:         [radius, spacing, _, _] — radius_frac, spacing >= 2 (cells)
    pub params: [f32; 4],

    // RGBA tint (linear sRGB, all channels [0,1]).
    // Default: [0.49, 0.30, 1.0, 0.6] (primary accent at 60% opacity).
    // Multiplied into pattern output for all kinds.
    pub tint: [f32; 4],
}

pub fn parse_decal_entries_json(
    decals_json: &str,
    grid: &Grid,
) -> Result<Vec<DecalEntryGpu>, JsValue> {
    let parsed = js_sys::JSON::parse(decals_json)
        .map_err(|_| JsValue::from_str("Invalid decals JSON payload"))?;
    if !Array::is_array(&parsed) {
        return Err(JsValue::from_str("Decals JSON must be an array"));
    }

    let arr = Array::from(&parsed);
    let mut out = Vec::with_capacity(arr.length().min(MAX_DECALS as u32) as usize);
    for idx in 0..arr.length() {
        if out.len() >= MAX_DECALS {
            break;
        }
        if let Some(entry) = parse_decal_entry(&arr.get(idx), grid) {
            out.push(entry);
        }
    }
    Ok(out)
}

fn parse_decal_entry(decal: &JsValue, grid: &Grid) -> Option<DecalEntryGpu> {
    if !decal.is_object() {
        return None;
    }

    // Disabled decals are excluded at parse time — not sent to GPU.
    if !get_bool(decal, "enabled").unwrap_or(true) {
        return None;
    }

    let x1 = get_number(decal, "x1")?;
    let y1 = get_number(decal, "y1")?;
    let x2 = get_number(decal, "x2")?;
    let y2 = get_number(decal, "y2")?;
    let rect = normalize_rect(x1 as i64, y1 as i64, x2 as i64, y2 as i64, grid);

    let pattern = get_object(decal, "pattern");
    let kind = normalize_kind(
        pattern
            .as_ref()
            .and_then(|p| get_string(p, "kind"))
            .as_deref(),
    );
    let params = normalize_params(kind, pattern.as_ref());

    let blend_mode = normalize_blend_mode(get_string(decal, "blendMode").as_deref());
    let suppress_cells = get_bool(decal, "suppressCells").unwrap_or(false);

    let tint = normalize_tint(get_object(decal, "tint_array").as_ref(), decal);

    Some(DecalEntryGpu {
        rect,
        flags: [kind, blend_mode, u32::from(suppress_cells), 0],
        params,
        tint,
    })
}

fn normalize_kind(kind: Option<&str>) -> u32 {
    match kind {
        Some("solid") | None => KIND_SOLID,
        Some("checkerboard") => KIND_CHECKERBOARD,
        Some("stripes") => KIND_STRIPES,
        Some("dots") => KIND_DOTS,
        _ => KIND_SOLID,
    }
}

fn normalize_blend_mode(mode: Option<&str>) -> u32 {
    match mode {
        Some("alpha") | None => BLEND_ALPHA,
        Some("multiply") => BLEND_MULTIPLY,
        Some("screen") => BLEND_SCREEN,
        _ => BLEND_ALPHA,
    }
}

fn normalize_params(kind: u32, pattern: Option<&JsValue>) -> [f32; 4] {
    let p = pattern;
    match kind {
        KIND_SOLID => {
            let coverage = p
                .and_then(|v| get_number(v, "coverage"))
                .map(|v| v.clamp(0.0, 1.0) as f32)
                .unwrap_or(1.0);
            let r = p
                .and_then(|v| get_number(v, "solidR"))
                .map(|v| v.clamp(0.0, 1.0) as f32)
                .unwrap_or(0.49);
            let g = p
                .and_then(|v| get_number(v, "solidG"))
                .map(|v| v.clamp(0.0, 1.0) as f32)
                .unwrap_or(0.30);
            let b = p
                .and_then(|v| get_number(v, "solidB"))
                .map(|v| v.clamp(0.0, 1.0) as f32)
                .unwrap_or(1.0);
            [coverage, r, g, b]
        }
        KIND_CHECKERBOARD => {
            let cell_size = p
                .and_then(|v| get_number(v, "cellSize"))
                .map(|v| v.max(1.0) as f32)
                .unwrap_or(2.0);
            [cell_size, 0.0, 0.0, 0.0]
        }
        KIND_STRIPES => {
            let pitch = p
                .and_then(|v| get_number(v, "pitchCells"))
                .map(|v| v.max(2.0) as f32)
                .unwrap_or(4.0);
            [pitch, 0.0, 0.0, 0.0]
        }
        KIND_DOTS => {
            let radius = p
                .and_then(|v| get_number(v, "dotRadius"))
                .map(|v| v.max(0.1) as f32)
                .unwrap_or(0.4);
            let spacing = p
                .and_then(|v| get_number(v, "dotSpacing"))
                .map(|v| v.max(2.0) as f32)
                .unwrap_or(3.0);
            [radius, spacing, 0.0, 0.0]
        }
        _ => [0.0; 4],
    }
}

/// Reads `tint` as a JSON array [r, g, b, a] from the decal object.
/// The TS type stores it as `tint: [number, number, number, number]`.
fn normalize_tint(tint_array: Option<&JsValue>, decal: &JsValue) -> [f32; 4] {
    // The TS interface stores tint as a plain array property.
    let arr_val = Reflect::get(decal, &JsValue::from_str("tint")).ok();
    if let Some(arr_v) = arr_val {
        if Array::is_array(&arr_v) {
            let arr = Array::from(&arr_v);
            if arr.length() >= 4 {
                let r = arr.get(0).as_f64().map(|v| v.clamp(0.0, 1.0) as f32).unwrap_or(0.49);
                let g = arr.get(1).as_f64().map(|v| v.clamp(0.0, 1.0) as f32).unwrap_or(0.30);
                let b = arr.get(2).as_f64().map(|v| v.clamp(0.0, 1.0) as f32).unwrap_or(1.0);
                let a = arr.get(3).as_f64().map(|v| v.clamp(0.0, 1.0) as f32).unwrap_or(0.6);
                return [r, g, b, a];
            }
        }
    }
    let _ = tint_array; // suppress unused warning
    [0.49, 0.30, 1.0, 0.6] // default: primary accent
}

fn normalize_rect(x1: i64, y1: i64, x2: i64, y2: i64, grid: &Grid) -> [i32; 4] {
    let max_col = grid.screen_cols.saturating_sub(1) as i64;
    let cx1 = x1.clamp(0, max_col) as i32;
    let cx2 = x2.clamp(0, max_col) as i32;
    let nx1 = cx1.min(cx2);
    let nx2 = cx1.max(cx2);
    let ny1 = y1.min(y2).clamp(i32::MIN as i64, i32::MAX as i64) as i32;
    let ny2 = y1.max(y2).clamp(i32::MIN as i64, i32::MAX as i64) as i32;
    [nx1, ny1, nx2, ny2]
}

// ── JS reflection helpers (mirrors zones.rs) ──────────────────────────────────

fn get_prop(value: &JsValue, key: &str) -> Option<JsValue> {
    Reflect::get(value, &JsValue::from_str(key)).ok()
}

fn get_string(value: &JsValue, key: &str) -> Option<String> {
    get_prop(value, key)?.as_string()
}

fn get_bool(value: &JsValue, key: &str) -> Option<bool> {
    get_prop(value, key)?.as_bool()
}

fn get_number(value: &JsValue, key: &str) -> Option<f64> {
    get_prop(value, key)?.as_f64()
}

fn get_object(value: &JsValue, key: &str) -> Option<JsValue> {
    let v = get_prop(value, key)?;
    if v.is_object() { Some(v) } else { None }
}

// ── Tests ─────────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;
    use wasm_bindgen_test::wasm_bindgen_test;

    fn test_grid(cols: u32, rows: u32) -> Grid {
        Grid {
            canvas_width: cols * 5,
            canvas_height: rows * 5,
            cell_px: 5,
            screen_cols: cols,
            screen_rows: rows,
            words_per_row: cols.div_ceil(32),
            padded_rows: rows.max(1).next_power_of_two(),
        }
    }

    #[wasm_bindgen_test]
    fn normalize_kind_mappings() {
        assert_eq!(normalize_kind(Some("solid")), KIND_SOLID);
        assert_eq!(normalize_kind(Some("checkerboard")), KIND_CHECKERBOARD);
        assert_eq!(normalize_kind(Some("stripes")), KIND_STRIPES);
        assert_eq!(normalize_kind(Some("dots")), KIND_DOTS);
        assert_eq!(normalize_kind(Some("unknown")), KIND_SOLID);
        assert_eq!(normalize_kind(None), KIND_SOLID);
    }

    #[wasm_bindgen_test]
    fn normalize_blend_mode_mappings() {
        assert_eq!(normalize_blend_mode(Some("alpha")), BLEND_ALPHA);
        assert_eq!(normalize_blend_mode(Some("multiply")), BLEND_MULTIPLY);
        assert_eq!(normalize_blend_mode(Some("screen")), BLEND_SCREEN);
        assert_eq!(normalize_blend_mode(Some("unknown")), BLEND_ALPHA);
        assert_eq!(normalize_blend_mode(None), BLEND_ALPHA);
    }

    #[wasm_bindgen_test]
    fn normalize_params_solid_defaults() {
        let params = normalize_params(KIND_SOLID, None);
        assert_eq!(params, [1.0, 0.49, 0.30, 1.0]);
    }

    #[wasm_bindgen_test]
    fn normalize_params_checkerboard_defaults() {
        let params = normalize_params(KIND_CHECKERBOARD, None);
        assert_eq!(params[0], 2.0);
    }

    #[wasm_bindgen_test]
    fn normalize_params_stripes_defaults() {
        let params = normalize_params(KIND_STRIPES, None);
        assert_eq!(params[0], 4.0);
    }

    #[wasm_bindgen_test]
    fn normalize_params_dots_defaults() {
        let params = normalize_params(KIND_DOTS, None);
        assert_eq!(params[0], 0.4);
        assert_eq!(params[1], 3.0);
    }

    #[wasm_bindgen_test]
    fn normalize_rect_clamps_and_orders() {
        let grid = test_grid(10, 8);
        let rect = normalize_rect(-1, 5, 3, -2, &grid);
        assert_eq!(rect, [0, -2, 3, 5]);
    }

    #[wasm_bindgen_test]
    fn parse_decal_entries_json_invalid_json() {
        let grid = test_grid(10, 8);
        assert!(parse_decal_entries_json("not json", &grid).is_err());
    }

    #[wasm_bindgen_test]
    fn parse_decal_entries_json_not_array() {
        let grid = test_grid(10, 8);
        assert!(parse_decal_entries_json("{}", &grid).is_err());
    }

    #[wasm_bindgen_test]
    fn parse_decal_entries_json_empty_array() {
        let grid = test_grid(10, 8);
        let result = parse_decal_entries_json("[]", &grid).unwrap();
        assert!(result.is_empty());
    }

    #[wasm_bindgen_test]
    fn parse_decal_entries_json_disabled_excluded() {
        let grid = test_grid(10, 8);
        let json = r#"[{"enabled":false,"x1":0,"y1":0,"x2":3,"y2":3,"blendMode":"alpha","suppressCells":false,"tint":[1,1,1,1],"pattern":{"kind":"solid"}}]"#;
        let result = parse_decal_entries_json(json, &grid).unwrap();
        assert!(result.is_empty());
    }

    #[wasm_bindgen_test]
    fn parse_decal_entries_json_valid_solid() {
        let grid = test_grid(10, 8);
        let json = r#"[{"enabled":true,"x1":1,"y1":2,"x2":4,"y2":6,"blendMode":"multiply","suppressCells":true,"tint":[0.5,0.5,0.5,1.0],"pattern":{"kind":"solid","coverage":0.8,"solidR":0.2,"solidG":0.3,"solidB":0.9}}]"#;
        let result = parse_decal_entries_json(json, &grid).unwrap();
        assert_eq!(result.len(), 1);
        let d = &result[0];
        assert_eq!(d.rect, [1, 2, 4, 6]);
        assert_eq!(d.flags[0], KIND_SOLID);
        assert_eq!(d.flags[1], BLEND_MULTIPLY);
        assert_eq!(d.flags[2], 1u32); // suppress_cells = true
        assert!((d.params[0] - 0.8).abs() < 1e-5); // coverage
        assert!((d.tint[0] - 0.5).abs() < 1e-5);
    }

    #[wasm_bindgen_test]
    fn parse_decal_entries_json_max_capped() {
        let grid = test_grid(10, 8);
        let entry = r#"{"enabled":true,"x1":0,"y1":0,"x2":1,"y2":1,"blendMode":"alpha","suppressCells":false,"tint":[1,1,1,1],"pattern":{"kind":"solid"}}"#;
        let entries: Vec<&str> = (0..MAX_DECALS + 5).map(|_| entry).collect();
        let json = format!("[{}]", entries.join(","));
        let result = parse_decal_entries_json(&json, &grid).unwrap();
        assert_eq!(result.len(), MAX_DECALS);
    }
}
