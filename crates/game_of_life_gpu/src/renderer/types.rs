use crate::grid::Grid;

/// 64-byte uniform layout, must match the `RenderUniforms` struct in
/// `render.wgsl`.  Fields are ordered so `scroll_y` (offset 28) and
/// `transition_t` (offset 32) keep their byte positions — `set_scroll`
/// and `set_transition` in pipeline.rs do partial uniform writes at
/// those exact offsets.
///
/// Viewport fields are scalar `u32` × 4, not `vec2<u32>` × 2, because
/// `vec2<u32>` in `var<uniform>` has 8-byte alignment and would shift
/// downstream offsets unpredictably.  See CLAUDE.md "WGSL uniform
/// alignment" gotcha.
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct RenderUniforms {
    pub world_cols: u32,          // offset 0
    pub world_rows: u32,          // 4
    pub padded_rows: u32,         // 8
    pub words_per_row: u32,       // 12
    pub cell_px: u32,             // 16
    pub canvas_width: u32,        // 20  (viewport canvas width)
    pub canvas_height: u32,       // 24  (viewport canvas height)
    pub scroll_y: f32,            // 28  ← set_scroll() writes here
    pub transition_t: f32,        // 32  ← set_transition() writes here
    pub viewport_origin_x: u32,   // 36  (in world cells)
    pub viewport_origin_y: u32,   // 40
    pub viewport_size_x: u32,     // 44  (in world cells)
    pub viewport_size_y: u32,     // 48
    pub pad0: u32,                // 52
    pub pad1: u32,                // 56
    pub pad2: u32,                // 60
    // total: 64 bytes (16-byte aligned)
}

impl RenderUniforms {
    pub fn from_grid(grid: &Grid) -> Self {
        let viewport_size_x = grid.canvas_width.div_ceil(grid.cell_px.max(1));
        let viewport_size_y = grid.canvas_height.div_ceil(grid.cell_px.max(1));
        RenderUniforms {
            world_cols: grid.world_cols,
            world_rows: grid.world_rows,
            padded_rows: grid.padded_rows,
            words_per_row: grid.words_per_row,
            cell_px: grid.cell_px,
            canvas_width: grid.canvas_width,
            canvas_height: grid.canvas_height,
            scroll_y: 0.0,
            transition_t: 1.0,
            viewport_origin_x: grid.viewport_origin_x,
            viewport_origin_y: grid.viewport_origin_y,
            viewport_size_x,
            viewport_size_y,
            pad0: 0,
            pad1: 0,
            pad2: 0,
        }
    }
}

/// Paper rendering parameters — must match `PaperParams` struct in render.wgsl.
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct PaperParams {
    pub noise_scale: f32,   // UV tiling frequency for fiber noise
    pub ink_od: f32,        // Beer-Lambert optical depth at full ink coverage
    pub grid_pitch_px: f32, // minor grid pitch in canvas pixels
    pub major_every: f32,   // major line every N minor lines
    pub minor_half_px: f32, // half-width of minor grid lines (pixels)
    pub major_half_px: f32, // half-width of major grid lines (pixels)
    pub spec_power: f32,    // Blinn-Phong exponent for fiber specular highlight
    pub spec_weight: f32,   // specular contribution scale
}

impl PaperParams {
    /// Build paper parameters from the exact float grid pitch (canvas pixels per cell).
    ///
    /// Takes a float rather than a rounded integer so the shader grid pitch matches
    /// the analytically aligned pitch computed from canvas width, ensuring both
    /// margin borders land on major grid lines.
    pub fn for_pitch(pitch: f32) -> Self {
        PaperParams {
            noise_scale: 4.0,
            ink_od: 2.5,
            grid_pitch_px: pitch,
            major_every: 5.0,
            minor_half_px: pitch * 0.02,
            major_half_px: pitch * 0.06,
            spec_power: 80.0,
            spec_weight: 0.012,
        }
    }
}

/// Palette parameters — must match `ThemeParams` struct in render.wgsl.
///
/// All colors are expressed in OKLab (L, a, b). The grid lines are derived
/// proportionally by interpolating along the surface→ink lightness axis.
/// Swapping light ↔ dark is a single substitution of `surface` and `ink`.
///
/// Size: 64 bytes, 16-byte aligned. Grain + three pad scalars round out the
/// tail block so the uniform layout stays on a 16-byte boundary (WGSL rule).
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct ThemeParams {
    pub surface: [f32; 4],    // paper color OKLab (L, a, b, _pad)
    pub ink: [f32; 4],        // cell ink OKLab (L, a, b, _pad)
    pub minor_t: f32,         // lerp position surface→ink for minor grid
    pub major_t: f32,         // lerp position surface→ink for major grid
    pub border_t: f32,        // lerp position surface→ink for page border
    pub ink_opacity: f32,     // max alpha of cell ink at full coverage
    pub grain_intensity: f32, // ± dither amplitude added before gamma encode
    pub _pad0: f32,
    pub _pad1: f32,
    pub _pad2: f32,
}

impl ThemeParams {
    /// Default light palette. Grain off — bright surface has no banding.
    pub fn light() -> Self {
        ThemeParams {
            surface: [0.985, -0.001,  0.004, 0.0],
            ink:     [0.280,  0.001,  0.005, 0.0],
            minor_t:  0.08,
            major_t:  0.14,
            border_t: 0.24,
            ink_opacity: 0.88,
            grain_intensity: 0.0,
            _pad0: 0.0, _pad1: 0.0, _pad2: 0.0,
        }
    }
}

