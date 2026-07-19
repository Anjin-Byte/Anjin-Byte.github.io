pub const COMPUTE: &str = include_str!("../wgsl/compute.wgsl");
pub const RENDER: &str = include_str!("../wgsl/render.wgsl");

// WebGL2 fallback tier (see webgl.rs).
pub const GOL_TICK: &str = include_str!("../wgsl/gol_tick.wgsl");
pub const RENDER_GLES: &str = include_str!("../wgsl/render_gles.wgsl");
