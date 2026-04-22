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

/// Hi-res region global meta.
pub const MAX_HIRES_REGIONS: usize = 8;

#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct HiResGlobalMetaGpu {
    pub region_count: u32,
    pub pad0: u32,
    pub pad1: u32,
    pub pad2: u32,
}

/// Hi-res region entry — binding 15 (array).
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy, Default)]
pub struct HiResRegionMetaGpu {
    pub rect: [i32; 4],       // [x1, y1, x2, y2] base cell-space
    pub multiplier: u32,
    pub buffer_offset: u32,   // word offset into concatenated hires_cells buffer
    pub cols: u32,
    pub wpr: u32,             // fine-grid words per row (padded)
    pub flags: u32,           // bit 0: show_grid
    pub pad0: u32,
    pub pad1: u32,
    pub pad2: u32,
}
