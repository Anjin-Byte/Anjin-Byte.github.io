use serde::Deserialize;
use wasm_bindgen::{JsError, JsValue};

use crate::grid::Grid;

pub const MAX_BLANK_ZONES: usize = 128;

pub const MODE_MINOR: u32 = 0;
pub const MODE_MAJOR: u32 = 1;
pub const MODE_BOTH: u32 = 2;

pub const EDGE_NONE: u32 = 0;
pub const EDGE_BOLD_MAJOR: u32 = 1;
pub const EDGE_FADE: u32 = 2;
pub const EDGE_NOTED: u32 = 3;

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct ZoneMetaGpu {
    pub zone_count: u32,
    pub pad0: u32,
    pub pad1: u32,
    pub pad2: u32,
}

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct ZoneEntryGpu {
    // x1, y1, x2, y2 (inclusive). x is wrapped to viewport cols, y is world-row.
    pub rect: [i32; 4],
    // mode, edge_style, hide_interior_border, reserved.
    pub style: [u32; 4],
    // edge_width_cells, edge_opacity, fade_strength, note_pitch_cells.
    pub edge: [f32; 4],
}

/// Typed wire form of a `BlankZone` (mirrors app/src/types/blankZones.ts). Only
/// the fields the renderer consumes are declared; unknown fields (id,
/// timestamps) are ignored. serde replaces the old hand-rolled Reflect walking
/// (interface-audit #3).
#[derive(Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct BlankZoneInput {
    #[serde(default = "default_true")]
    pub enabled: bool,
    pub x1: f64,
    pub y1: f64,
    pub x2: f64,
    pub y2: f64,
    #[serde(default)]
    pub mode: Option<String>,
    #[serde(default)]
    pub edge: Option<EdgeInput>,
}

#[derive(Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct EdgeInput {
    #[serde(default)]
    pub style: Option<String>,
    #[serde(default)]
    pub width_cells: Option<f64>,
    #[serde(default)]
    pub opacity: Option<f64>,
    #[serde(default)]
    pub fade_strength: Option<f64>,
    #[serde(default)]
    pub note_pitch_cells: Option<f64>,
    #[serde(default)]
    pub hide_interior_border: Option<bool>,
}

fn default_true() -> bool {
    true
}

/// Deserialize the zones payload (a JS array of BlankZone) into typed inputs,
/// capped at `MAX_BLANK_ZONES`. The caller caches these and re-derives GPU
/// entries against the live grid via [`zone_entries_from_inputs`] — rects are
/// grid-relative, so a resize must recompute them.
pub fn deserialize_zone_inputs(zones: JsValue) -> Result<Vec<BlankZoneInput>, JsError> {
    let mut all: Vec<BlankZoneInput> =
        serde_wasm_bindgen::from_value(zones).map_err(|e| JsError::new(&e.to_string()))?;
    all.truncate(MAX_BLANK_ZONES);
    Ok(all)
}

/// Convert cached typed inputs to packed GPU entries against the current grid.
/// Disabled zones are dropped; coordinate/mode/edge normalization is unchanged.
pub fn zone_entries_from_inputs(inputs: &[BlankZoneInput], grid: &Grid) -> Vec<ZoneEntryGpu> {
    inputs
        .iter()
        .filter_map(|z| zone_entry_from_input(z, grid))
        .collect()
}

fn zone_entry_from_input(z: &BlankZoneInput, grid: &Grid) -> Option<ZoneEntryGpu> {
    if !z.enabled {
        return None;
    }
    let rect = normalize_rect_coords(z.x1 as i64, z.y1 as i64, z.x2 as i64, z.y2 as i64, grid);
    let mode = normalize_mode(z.mode.as_deref());
    let edge = z.edge.as_ref();
    let edge_style = normalize_edge_style(edge.and_then(|e| e.style.as_deref()));
    let hide_interior = edge.and_then(|e| e.hide_interior_border).unwrap_or(false);
    let edge_data = normalize_edge_data(
        edge.and_then(|e| e.width_cells),
        edge.and_then(|e| e.opacity),
        edge.and_then(|e| e.fade_strength),
        edge.and_then(|e| e.note_pitch_cells),
    );
    Some(ZoneEntryGpu {
        rect,
        style: [mode, edge_style, u32::from(hide_interior), 0],
        edge: edge_data,
    })
}

fn normalize_mode(mode: Option<&str>) -> u32 {
    match mode {
        Some("minor") => MODE_MINOR,
        Some("major") => MODE_MAJOR,
        Some("both") | None => MODE_BOTH,
        _ => MODE_BOTH,
    }
}

fn normalize_edge_style(style: Option<&str>) -> u32 {
    match style {
        Some("none") | None => EDGE_NONE,
        Some("bold-major") => EDGE_BOLD_MAJOR,
        Some("fade") => EDGE_FADE,
        Some("noted") => EDGE_NOTED,
        _ => EDGE_NONE,
    }
}

fn normalize_rect_coords(x1: i64, y1: i64, x2: i64, y2: i64, grid: &Grid) -> [i32; 4] {
    // Clamp X to [0, world_cols - 1]. Wrapping both endpoints independently
    // would invert a zone that straddles the world edge into a full-width zone.
    let max_col = grid.world_cols.saturating_sub(1) as i64;
    let cx1 = x1.clamp(0, max_col) as i32;
    let cx2 = x2.clamp(0, max_col) as i32;
    let nx1 = cx1.min(cx2);
    let nx2 = cx1.max(cx2);
    let ny1 = y1.min(y2).clamp(i32::MIN as i64, i32::MAX as i64) as i32;
    let ny2 = y1.max(y2).clamp(i32::MIN as i64, i32::MAX as i64) as i32;
    [nx1, ny1, nx2, ny2]
}

fn normalize_edge_data(
    width_cells: Option<f64>,
    opacity: Option<f64>,
    fade_strength: Option<f64>,
    note_pitch_cells: Option<f64>,
) -> [f32; 4] {
    let edge_width = width_cells.map(|v| v.clamp(1.0, 4.0) as f32).unwrap_or(1.0);
    let edge_opacity = opacity.map(|v| v.clamp(0.0, 1.0) as f32).unwrap_or(1.0);
    let fade_strength = fade_strength
        .map(|v| v.clamp(0.0, 1.0) as f32)
        .unwrap_or(0.6);
    let note_pitch = note_pitch_cells.map(|v| v.max(1.0) as f32).unwrap_or(2.0);
    [edge_width, edge_opacity, fade_strength, note_pitch]
}

#[cfg(test)]
mod tests {
    use super::*;
    use wasm_bindgen_test::wasm_bindgen_test;

    fn test_grid(cols: u32, rows: u32) -> Grid {
        Grid {
            canvas_width: cols * 5,
            canvas_height: rows * 5,
            cell_px: 5,
            world_cols: cols,
            world_rows: rows,
            words_per_row: cols.div_ceil(32),
            padded_rows: rows.max(1).next_power_of_two(),
            viewport_origin_x: 0,
            viewport_origin_y: 0,
        }
    }

    #[wasm_bindgen_test]
    fn normalize_rect_clamps_and_orders_coords() {
        let grid = test_grid(10, 8);
        // Negative x clamped to 0; x2=3 in range; y values sorted.
        let rect = normalize_rect_coords(-1, 9, 3, -2, &grid);
        assert_eq!(rect, [0, -2, 3, 9]);
    }

    #[wasm_bindgen_test]
    fn normalize_rect_clamp_prevents_inversion() {
        // x1 just below range, x2 just above range — should NOT produce a full-width zone.
        let grid = test_grid(10, 8);
        let rect = normalize_rect_coords(-1, 0, 10, 5, &grid);
        // Both clamped to [0, 9]; min/max gives [0, 9].
        assert_eq!(rect, [0, 0, 9, 5]);
    }

    #[wasm_bindgen_test]
    fn normalize_mode_defaults_to_both() {
        assert_eq!(normalize_mode(Some("minor")), MODE_MINOR);
        assert_eq!(normalize_mode(Some("major")), MODE_MAJOR);
        assert_eq!(normalize_mode(Some("both")), MODE_BOTH);
        assert_eq!(normalize_mode(Some("invalid")), MODE_BOTH);
        assert_eq!(normalize_mode(None), MODE_BOTH);
    }

    #[wasm_bindgen_test]
    fn normalize_edge_style_defaults_to_none() {
        assert_eq!(normalize_edge_style(Some("none")), EDGE_NONE);
        assert_eq!(normalize_edge_style(Some("bold-major")), EDGE_BOLD_MAJOR);
        assert_eq!(normalize_edge_style(Some("fade")), EDGE_FADE);
        assert_eq!(normalize_edge_style(Some("noted")), EDGE_NOTED);
        assert_eq!(normalize_edge_style(Some("invalid")), EDGE_NONE);
        assert_eq!(normalize_edge_style(None), EDGE_NONE);
    }

    #[wasm_bindgen_test]
    fn normalize_edge_data_clamps_all_values() {
        let edge = normalize_edge_data(Some(99.0), Some(-1.0), Some(2.0), Some(0.3));
        assert_eq!(edge, [4.0, 0.0, 1.0, 1.0]);

        let defaults = normalize_edge_data(None, None, None, None);
        assert_eq!(defaults, [1.0, 1.0, 0.6, 2.0]);
    }
}
