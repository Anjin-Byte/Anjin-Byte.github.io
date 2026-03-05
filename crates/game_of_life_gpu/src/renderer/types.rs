use crate::grid::Grid;

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct RenderUniforms {
    pub screen_cols: u32,
    pub screen_rows: u32,
    pub padded_rows: u32,
    pub words_per_row: u32,
    pub cell_px: u32,
    pub canvas_width: u32,
    pub canvas_height: u32,
    pub scroll_y: f32,
    pub transition_t: f32,
    pub pad0: f32,
    pub pad1: f32,
    pub pad2: f32,
}

impl RenderUniforms {
    pub fn from_grid(grid: &Grid) -> Self {
        RenderUniforms {
            screen_cols: grid.screen_cols,
            screen_rows: grid.screen_rows,
            padded_rows: grid.padded_rows,
            words_per_row: grid.words_per_row,
            cell_px: grid.cell_px,
            canvas_width: grid.canvas_width,
            canvas_height: grid.canvas_height,
            scroll_y: 0.0,
            transition_t: 1.0,
            pad0: 0.0,
            pad1: 0.0,
            pad2: 0.0,
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
