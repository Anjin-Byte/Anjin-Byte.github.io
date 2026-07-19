// WebGL2 fallback render — the cut-paper look (themed paper + engineering grid
// + atmospheric ink cells) reading cell state from the ping-pong textures.
//
// A deliberately simpler cousin of render.wgsl: it reproduces the DESIGN
// (OKLab-derived paper/grid/ink, the same grid pitch, birth/death cell
// transitions, the first-paint fade) but omits the atmospheric micro-detail of
// the WebGPU path (fiber-noise paper texture, sponge-stamp ink porosity,
// print-roller fades, dithering, blank zones). A degraded tier is allowed to
// be clean rather than pixel-identical, and this keeps the shader self-
// contained — no shared includes, no risk to the working WebGPU shader.
//
// Cells come from two R8Uint textures: `cells_cur` (this generation) and
// `cells_prev` (the previous one), so the fill can stage a birth/death
// transition exactly as render.wgsl does.

struct RenderU {
    surface:      vec4f,   // OKLab paper (L,a,b,_)
    ink:          vec4f,   // OKLab cell/ink (L,a,b,_)
    scroll:       vec2f,   // world offset (device px): world = frag + scroll
    world:        vec2u,   // world_cols, world_rows (toroidal modulus)
    cell_px:      f32,     // device px per cell (grid pitch)
    transition_t: f32,     // 0..1 birth/death stage within the current tick
    init_fade_t:  f32,     // 0..1 first-paint cell reveal
    minor_t:      f32,     // OKLab lerp position: minor grid line
    major_t:      f32,     // OKLab lerp position: major grid line
    ink_opacity:  f32,     // max cell-ink alpha
    scale:        vec2f,   // frag→canvas scale (WebGL2 surface-clamp compensation)
}

@group(0) @binding(0) var<uniform> u:          RenderU;
@group(0) @binding(1) var          cells_cur:  texture_2d<u32>;
@group(0) @binding(2) var          cells_prev: texture_2d<u32>;

// ── Color space (OKLab ↔ linear sRGB ↔ sRGB) — same math as render.wgsl ──────
fn oklab_to_linear(lab: vec3f) -> vec3f {
    let l_ = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
    let m_ = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
    let s_ = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
    let l = l_ * l_ * l_;
    let m = m_ * m_ * m_;
    let s = s_ * s_ * s_;
    return vec3f(
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    );
}
fn linear_to_oklab(c: vec3f) -> vec3f {
    let l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
    let m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
    let s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
    let l_ = pow(max(l, 0.0), 1.0 / 3.0);
    let m_ = pow(max(m, 0.0), 1.0 / 3.0);
    let s_ = pow(max(s, 0.0), 1.0 / 3.0);
    return vec3f(
        0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
        1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
        0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    );
}
fn oklab_mix(a: vec3f, b: vec3f, t: f32) -> vec3f {
    return oklab_to_linear(mix(linear_to_oklab(a), linear_to_oklab(b), t));
}
fn linear_to_srgb(c: vec3f) -> vec3f {
    let lo = c * 12.92;
    let hi = 1.055 * pow(max(c, vec3f(0.0031308)), vec3f(1.0 / 2.4)) - 0.055;
    return select(hi, lo, c < vec3f(0.0031308));
}

// ── Value noise (for the print-roller grid fades) — same as render.wgsl ───────
fn hash21(p: vec2f) -> f32 {
    let x = fract(p.x * 0.1031);
    let y = fract(p.y * 0.1030);
    let z = fract((x + y) * 0.0973);
    let t = x * (y + 33.33) + z * (x + 17.17);
    return fract(t);
}
fn fade2(t: vec2f) -> vec2f {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn value_noise(p: vec2f) -> f32 {
    let i = floor(p);
    let f = fract(p);
    let u = fade2(f);
    let a = mix(hash21(i),                   hash21(i + vec2f(1.0, 0.0)), u.x);
    let b = mix(hash21(i + vec2f(0.0, 1.0)), hash21(i + vec2f(1.0, 1.0)), u.x);
    return mix(a, b, u.y);
}

// ── AA + grid + cell fill — ported from render.wgsl ──────────────────────────
fn aastep(threshold: f32, value: f32) -> f32 {
    let w = fwidth(value);
    return smoothstep(threshold - w, threshold + w, value);
}
fn grid_line_aa(coord: f32, pitch: f32, half_w: f32) -> f32 {
    let d = abs(fract(coord / pitch + 0.5) - 0.5) * pitch;
    let w = fwidth(d);
    return 1.0 - smoothstep(half_w - w, half_w + w, d);
}
// Cell fill: disk growing to a square, with per-side extensions so an alive
// cell joins seamlessly into alive orthogonal neighbours (matches render.wgsl).
fn cell_fill(
    pCell: vec2f, t: f32,
    ext_r: f32, ext_l: f32, ext_top: f32, ext_bot: f32,
) -> f32 {
    let radius   = t * 0.8;
    let d_disk   = length(pCell) - radius;
    let d_right  = pCell.x - (0.5 + ext_r);
    let d_left   = -pCell.x - (0.5 + ext_l);
    let d_top    = -pCell.y - (0.5 + ext_top);
    let d_bottom = pCell.y - (0.5 + ext_bot);
    let d_square = max(max(d_right, d_left), max(d_top, d_bottom));
    let d        = max(d_disk, d_square);
    return 1.0 - aastep(0.0, d);
}

// ── Vertex: fullscreen triangle ──────────────────────────────────────────────
@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {
    var pos = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
    return vec4f(pos[vi], 0.0, 1.0);
}

fn cell_at(tex: texture_2d<u32>, cx: i32, cy: i32) -> u32 {
    let w = i32(u.world.x);
    let h = i32(u.world.y);
    let xx = ((cx % w) + w) % w;
    let yy = ((cy % h) + h) % h;
    return textureLoad(tex, vec2i(xx, yy), 0).r;
}

@fragment
fn fs_main(@builtin(position) frag: vec4f) -> @location(0) vec4f {
    // Screen pixel → intended-canvas px (undo the WebGL2 surface clamp) →
    // world px (camera offset). Matches render.wgsl's `world = frag + scroll`,
    // with `scale` compensating for the clamped surface (see RenderU.scale).
    let px = frag.x * u.scale.x + u.scroll.x;
    let py = frag.y * u.scale.y + u.scroll.y;
    let gp = u.cell_px;

    // Paper.
    let paper = oklab_to_linear(u.surface.xyz);

    // Grid lines. Half-widths mirror PaperParams::for_pitch (minor = pitch*0.02,
    // major = pitch*0.06). Each axis is dimmed by a low-frequency value-noise
    // "print-roller" fade so lines vary softly rather than reading as a
    // mechanical uniform grid (matches render.wgsl).
    let pitch_major = gp * 5.0;
    let minor_half = gp * 0.02;
    let major_half = gp * 0.06;
    let print_fade_x = mix(0.70, 1.0, value_noise(vec2f(px * 0.005,  7.3)));
    let print_fade_y = mix(0.70, 1.0, value_noise(vec2f(3.9, py * 0.005)));
    let minor_cov = max(
        grid_line_aa(px, gp, minor_half) * print_fade_x,
        grid_line_aa(py, gp, minor_half) * print_fade_y,
    );
    let major_fade_x = mix(0.45, 1.0, value_noise(vec2f(px * 0.004 + 11.7, 23.1)));
    let major_fade_y = mix(0.45, 1.0, value_noise(vec2f(19.4, py * 0.004 + 11.7)));
    let major_cov = max(
        grid_line_aa(px, pitch_major, major_half) * major_fade_x,
        grid_line_aa(py, pitch_major, major_half) * major_fade_y,
    );

    // Cell + birth/death transition.
    let cx = i32(floor(px / gp));
    let cy = i32(floor(py / gp));
    let cur = cell_at(cells_cur, cx, cy);
    let prev = cell_at(cells_prev, cx, cy);
    let pCell = vec2f(fract(px / gp) - 0.5, fract(py / gp) - 0.5);

    let t = smoothstep(0.0, 1.0, u.transition_t);
    let out_t = smoothstep(0.0, 1.0, clamp(t * 2.0, 0.0, 1.0));
    let in_t = smoothstep(0.0, 1.0, clamp((t - 0.5) * 2.0, 0.0, 1.0));
    let changed = prev != cur;
    let is_birth = cur == 1u;
    var fill_t = f32(cur);
    fill_t = select(fill_t, in_t, changed && is_birth);
    fill_t = select(fill_t, 1.0 - out_t, changed && !is_birth);

    // Per-side extensions: an alive cell reaches ~0.1 into an alive orthogonal
    // neighbour so a block of cells joins seamlessly. OR cur|prev so the join
    // holds through a neighbour's death fade (matches render.wgsl).
    let ext_scale = fill_t * 0.1;
    let right_alive = cell_at(cells_cur, cx + 1, cy) | cell_at(cells_prev, cx + 1, cy);
    let left_alive  = cell_at(cells_cur, cx - 1, cy) | cell_at(cells_prev, cx - 1, cy);
    let top_alive   = cell_at(cells_cur, cx, cy - 1) | cell_at(cells_prev, cx, cy - 1);
    let bot_alive   = cell_at(cells_cur, cx, cy + 1) | cell_at(cells_prev, cx, cy + 1);
    let coverage = cell_fill(
        pCell, fill_t,
        f32(right_alive) * ext_scale, f32(left_alive) * ext_scale,
        f32(top_alive) * ext_scale, f32(bot_alive) * ext_scale,
    ) * u.init_fade_t;
    let grid_mask = 1.0 - coverage;

    // Compose in OKLab: paper → grid lines (suppressed under cells) → ink.
    let minor_color = oklab_to_linear(mix(u.surface.xyz, u.ink.xyz, u.minor_t));
    let major_color = oklab_to_linear(mix(u.surface.xyz, u.ink.xyz, u.major_t));
    var col = oklab_mix(paper, minor_color, minor_cov * grid_mask);
    col = oklab_mix(col, major_color, major_cov * grid_mask);
    let ink_color = oklab_to_linear(u.ink.xyz);
    col = oklab_mix(col, ink_color, coverage * u.ink_opacity);

    return vec4f(linear_to_srgb(clamp(col, vec3f(0.0), vec3f(1.0))), 1.0);
}
