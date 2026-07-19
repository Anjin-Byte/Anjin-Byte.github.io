use crate::grid::Grid;

/// 64-byte uniform layout, must match the `RenderUniforms` struct in
/// `render.wgsl`.  Fields are ordered so `scroll_y` (28), `transition_t`
/// (32), `init_fade_t` (52), and `scroll_x` (56) keep their byte positions —
/// `set_scroll`, `set_transition`, `set_init_fade`, and `set_scroll_x` /
/// `set_camera` in pipeline.rs do partial uniform writes at those exact
/// offsets.  The `const _` assert below makes a wrong layout uncompilable.
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
    pub init_fade_t: f32,         // 52  ← set_init_fade() writes here
    pub scroll_x: f32,            // 56  ← set_scroll_x() / set_camera() writes here
    pub pad2: u32,                // 60
    // total: 64 bytes (16-byte aligned)
}

// Compile-time guard for the partial-write offsets in pipeline.rs (and the
// mirrored WGSL struct). A wrong offset silently corrupts every field past it,
// so make a bad layout fail to compile rather than fail at runtime. Checked by
// `cargo clippy --all-targets`, hence enforced by `make check`.
const _: () = {
    assert!(core::mem::offset_of!(RenderUniforms, scroll_y) == 28);
    assert!(core::mem::offset_of!(RenderUniforms, transition_t) == 32);
    assert!(core::mem::offset_of!(RenderUniforms, init_fade_t) == 52);
    assert!(core::mem::offset_of!(RenderUniforms, scroll_x) == 56);
    assert!(core::mem::size_of::<RenderUniforms>() == 64);
};

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
            // 0.0 makes cells invisible on the first painted frame; the
            // worker ramps this to 1.0 over ~1.2 s after first paint, so
            // cells emerge gradually.  See `set_init_fade` callers.
            init_fade_t: 0.0,
            scroll_x: 0.0,
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
/// The palette is authored as two OKLab endpoints (surface + ink) plus grid
/// lerp positions, but those are uniforms — converting them per fragment was
/// pure waste.  `from_endpoints` does the conversions ONCE here, mirroring
/// the shader's OKLab math exactly: the paper color ships as linear sRGB
/// (it feeds the lighting), the grid/ink endpoints ship as OKLab (they feed
/// the perceptual compositing mixes).
///
/// Size: 80 bytes, 16-byte aligned (4 × vec4 + 4 scalars).
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct ThemeParams {
    pub surface_linear: [f32; 4], // paper color, linear sRGB (r, g, b, _pad)
    pub ink_lab: [f32; 4],        // cell ink OKLab (L, a, b, _pad)
    pub minor_lab: [f32; 4],      // minor grid line OKLab
    pub major_lab: [f32; 4],      // major grid line OKLab
    pub ink_opacity: f32,         // max alpha of cell ink at full coverage
    pub grain_intensity: f32,     // ± dither amplitude; 0 skips grain in-shader
    pub _pad0: f32,
    pub _pad1: f32,
}

/// OKLab → linear sRGB, mirroring render.wgsl's `oklab_to_linear` with the
/// same literals (https://bottosson.github.io/posts/oklab/). f32 throughout
/// so the precomputed uniform matches what the shader would have produced
/// (up to the usual GPU/CPU last-ULP latitude).
#[allow(clippy::excessive_precision)]
fn oklab_to_linear(lab: [f32; 4]) -> [f32; 4] {
    let l_ = lab[0] + 0.3963377774_f32 * lab[1] + 0.2158037573_f32 * lab[2];
    let m_ = lab[0] - 0.1055613458_f32 * lab[1] - 0.0638541728_f32 * lab[2];
    let s_ = lab[0] - 0.0894841775_f32 * lab[1] - 1.2914855480_f32 * lab[2];
    let l = l_ * l_ * l_;
    let m = m_ * m_ * m_;
    let s = s_ * s_ * s_;
    [
        4.0767416621_f32 * l - 3.3077115913_f32 * m + 0.2309699292_f32 * s,
        -1.2684380046_f32 * l + 2.6097574011_f32 * m - 0.3413193965_f32 * s,
        -0.0041960863_f32 * l - 0.7034186147_f32 * m + 1.7076147010_f32 * s,
        0.0,
    ]
}

/// Component-wise `mix` on the Lab channels, using the WGSL spec formula
/// `e1 * (1 - t) + e2 * t` so the precomputed grid colors match what the
/// shader's per-pixel `mix` produced.
fn mix_lab(a: [f32; 4], b: [f32; 4], t: f32) -> [f32; 4] {
    [
        a[0] * (1.0 - t) + b[0] * t,
        a[1] * (1.0 - t) + b[1] * t,
        a[2] * (1.0 - t) + b[2] * t,
        0.0,
    ]
}

impl ThemeParams {
    /// Build the GPU-facing palette from OKLab endpoints + lerp positions.
    /// This is the single place the surface→ink axis is evaluated; the JSON
    /// theme path (gpu.rs `parse_theme_json`) and the built-in default both
    /// route through it.
    pub fn from_endpoints(
        surface_lab: [f32; 4],
        ink_lab: [f32; 4],
        minor_t: f32,
        major_t: f32,
        ink_opacity: f32,
        grain_intensity: f32,
    ) -> Self {
        ThemeParams {
            surface_linear: oklab_to_linear(surface_lab),
            ink_lab,
            minor_lab: mix_lab(surface_lab, ink_lab, minor_t),
            major_lab: mix_lab(surface_lab, ink_lab, major_t),
            ink_opacity,
            grain_intensity,
            _pad0: 0.0,
            _pad1: 0.0,
        }
    }

    /// Default light palette. Grain off — bright surface has no banding.
    pub fn light() -> Self {
        Self::from_endpoints(
            [0.985, -0.001, 0.004, 0.0], // surface OKLab
            [0.280, 0.001, 0.005, 0.0],  // ink OKLab
            0.08,                        // minor_t
            0.14,                        // major_t
            0.88,                        // ink_opacity
            0.0,                         // grain_intensity
        )
    }
}

