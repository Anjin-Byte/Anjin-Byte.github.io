// Game of Life render shader.
// Vertex stage: fullscreen triangle from vertex index (no vertex buffer).
// Fragment stage: maps pixel → cell → packed bit → color, branch-free.

struct Uniforms {
    screen_cols:   u32,
    screen_rows:   u32,
    padded_rows:   u32,
    words_per_row: u32,
    cell_px:       u32,
    canvas_width:  u32,
    canvas_height: u32,
    _pad:          u32,
}

@group(0) @binding(0) var<uniform>       uniforms: Uniforms;
@group(0) @binding(1) var<storage, read> cells:    array<u32>;

// Emit a single fullscreen triangle covering NDC [-1,1] × [-1,1].
@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4<f32> {
    var positions = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>( 3.0, -1.0),
        vec2<f32>(-1.0,  3.0),
    );
    return vec4<f32>(positions[vi], 0.0, 1.0);
}

const DEAD_COLOR  = vec4<f32>(0.039, 0.039, 0.059, 1.0);  // #0a0a0f
const ALIVE_COLOR = vec4<f32>(0.486, 0.302, 1.000, 1.0);  // #7c4dff

@fragment
fn fs_main(@builtin(position) frag_pos: vec4<f32>) -> @location(0) vec4<f32> {
    // Exact integer pixel coordinate from the rasterizer (center at 0.5, 1.5, ...).
    // u32(0.5) = 0, u32(1.5) = 1, etc. — no floating-point drift at cell edges.
    let px = u32(frag_pos.x);
    let py = u32(frag_pos.y);

    // Cell coordinate.
    let cx = px / uniforms.cell_px;
    let cy = py / uniforms.cell_px;

    // Pixels beyond the visible cell grid render as dead.
    let oob = u32(cx >= uniforms.screen_cols || cy >= uniforms.screen_rows);

    let word_idx = cy * uniforms.words_per_row + cx / 32u;
    let bit_idx  = cx & 31u;

    // Clamp word_idx to avoid OOB read when oob=1 (result discarded by select).
    let safe_idx = word_idx & (uniforms.words_per_row * uniforms.padded_rows - 1u);
    let alive = ((cells[safe_idx] >> bit_idx) & 1u) & (1u - oob);

    return select(DEAD_COLOR, ALIVE_COLOR, alive == 1u);
}
