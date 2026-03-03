// Engineering-paper Game of Life renderer — sponge-stamp ink model.
//
// Ink model: each alive cell renders as a sponge-stamped ink patch.
//   Porous interior + pressure falloff + drying ring + ragged perimeter.
//   All edges use fwidth-based AA (no constant feather needed at this scale).
//
// Color pipeline (linear light throughout):
//   Colors are defined in OKLab — perceptually uniform, correct gamut path.
//   Converted to linear sRGB for all lighting/filtering math.
//   Paper→ink transition mixed in OKLab for perceptual linearity.
//   Output gamma-encodes to sRGB (non-sRGB surface format, manual encode).
//
// Fragment pipeline:
//   1. Paper fiber noise  (textureSample — must be first; uniform control flow)
//   2. Fiber lighting     (ambient-dominant; tiny directional; matte specular)
//   3. Paper albedo       (OKLab → linear; ±1.25% fiber variation)
//   4. Grid lines         (cyan-blue dye: multiplicative transmittance filter)
//   5. Sponge stamp       (computed unconditionally, then masked by cell_alive)
//   6. Ink absorption     (Beer-Lambert; paper→ink mix in OKLab)
//   7. sRGB encode

struct RenderUniforms {
    screen_cols:   u32,
    screen_rows:   u32,
    padded_rows:   u32,
    words_per_row: u32,
    cell_px:       u32,
    canvas_width:  u32,
    canvas_height: u32,
    scroll_y:      f32,   // vertical scroll offset in canvas pixels
    transition_t:  f32,   // progress between previous/current generations
    pad0:          f32,
    pad1:          f32,
    pad2:          f32,
}

struct PaperParams {
    noise_scale:   f32,  // UV tiling frequency for fiber noise (paper texture)
    ink_od:        f32,  // Beer-Lambert optical depth at full stamp coverage
    grid_pitch_px: f32,  // minor grid pitch in canvas pixels (= cell_px)
    major_every:   f32,  // major grid line every N minor lines
    minor_half_px: f32,  // half-width of minor grid lines (canvas pixels)
    major_half_px: f32,  // half-width of major grid lines (canvas pixels)
    spec_power:    f32,  // Blinn-Phong exponent for fiber specular
    spec_weight:   f32,  // specular contribution scale
}

@group(0) @binding(0) var<uniform>       uniforms: RenderUniforms;
@group(0) @binding(1) var<storage, read> current_cells: array<u32>;
@group(0) @binding(2) var<storage, read> previous_cells: array<u32>;
@group(0) @binding(3) var<uniform>       paper:         PaperParams;
@group(0) @binding(4) var                noise_tex:     texture_2d<f32>;
@group(0) @binding(5) var                noise_smp:     sampler;

// ── Vertex ────────────────────────────────────────────────────────────────────

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {
    var pos = array<vec2f, 3>(
        vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0),
    );
    return vec4f(pos[vi], 0.0, 1.0);
}

// ── Color space ───────────────────────────────────────────────────────────────
// All colors are defined in OKLab (perceptually uniform).
// All lighting and filtering math runs in linear sRGB.
// OKLab is used for any mix that must traverse perceptual space.

// OKLab → linear sRGB. https://bottosson.github.io/posts/oklab/
fn oklab_to_linear(lab: vec3f) -> vec3f {
    let l_ = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
    let m_ = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
    let s_ = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
    let l  = l_ * l_ * l_;
    let m  = m_ * m_ * m_;
    let s  = s_ * s_ * s_;
    return vec3f(
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
       -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
       -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    );
}

// Linear sRGB → OKLab (inverse of above).
fn linear_to_oklab(c: vec3f) -> vec3f {
    let l  = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
    let m  = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
    let s  = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
    let l_ = pow(max(l, 0.0), 1.0 / 3.0);
    let m_ = pow(max(m, 0.0), 1.0 / 3.0);
    let s_ = pow(max(s, 0.0), 1.0 / 3.0);
    return vec3f(
        0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
        1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
        0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    );
}

// Mix two linear-sRGB colors along a perceptually uniform path through OKLab.
fn oklab_mix(a: vec3f, b: vec3f, t: f32) -> vec3f {
    return oklab_to_linear(mix(linear_to_oklab(a), linear_to_oklab(b), t));
}

// Linear sRGB → sRGB (IEC 61966-2-1). Applied at output for non-sRGB surfaces.
fn linear_to_srgb(c: vec3f) -> vec3f {
    let lo = c * 12.92;
    let hi = 1.055 * pow(max(c, vec3f(0.0031308)), vec3f(1.0 / 2.4)) - 0.055;
    return select(hi, lo, c < vec3f(0.0031308));
}

// ── Hash / noise ──────────────────────────────────────────────────────────────

fn hash11(p: f32) -> f32 {
    let x = fract(p * 0.1031);
    let y = x * (x + 33.33);
    return fract(y * (y + y));
}

fn hash21(p: vec2f) -> f32 {
    let x = fract(p.x * 0.1031);
    let y = fract(p.y * 0.1030);
    let z = fract((x + y) * 0.0973);
    let t = x * (y + 33.33) + z * (x + 17.17);
    return fract(t);
}

fn hash22(p: vec2f) -> vec2f {
    let n = hash21(p);
    return vec2f(n, hash11(n + 19.19));
}

// Quintic smoothstep for value noise (C2 continuous).
fn fade2(t: vec2f) -> vec2f {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// Value noise: bilinear interpolation of random lattice values.
fn value_noise(p: vec2f) -> f32 {
    let i = floor(p);
    let f = fract(p);
    let u = fade2(f);
    let a = mix(hash21(i),                   hash21(i + vec2f(1.0, 0.0)), u.x);
    let b = mix(hash21(i + vec2f(0.0, 1.0)), hash21(i + vec2f(1.0, 1.0)), u.x);
    return mix(a, b, u.y);
}

// Fractional Brownian Motion: 4 octaves (quality/perf balance for real-time).
fn fbm(p: vec2f) -> f32 {
    var s = 0.0; var amp = 0.5; var pp = p;
    for (var k: i32 = 0; k < 4; k++) {
        s += amp * value_noise(pp);
        pp *= 2.0;
        amp *= 0.5;
    }
    return s;
}

// Worley (cellular) noise: distance to nearest Poisson-disk feature point.
fn worley(p: vec2f) -> f32 {
    let i  = floor(p);
    let f  = fract(p);
    var md = 9.0;
    for (var oy: i32 = -1; oy <= 1; oy++) {
        for (var ox: i32 = -1; ox <= 1; ox++) {
            let cell = i + vec2f(f32(ox), f32(oy));
            let rnd  = hash22(cell);
            let feat = vec2f(f32(ox), f32(oy)) + rnd - f;
            let d    = dot(feat, feat);
            if d < md { md = d; }
        }
    }
    return sqrt(md);  // normalised to ≈[0, 1]
}

// ── AA helpers ────────────────────────────────────────────────────────────────
// fwidth-based: adapts automatically to cell size and display density.
// Safe because all callers are in unconditional (uniform) control flow.

fn aastep(threshold: f32, value: f32) -> f32 {
    let w = fwidth(value);
    return smoothstep(threshold - w, threshold + w, value);
}

// Signed distance to an axis-aligned box (centered at origin, half-extents).
// Negative inside, positive outside, zero at the boundary.
fn sd_box(p: vec2f, half: vec2f) -> f32 {
    let q = abs(p) - half;
    return length(max(q, vec2f(0.0))) + min(max(q.x, q.y), 0.0);
}

// Grid line coverage: fwidth-AA, no hardcoded feather.
// coord: pixel position along one axis. pitch: line period. half_w: half-width.
fn grid_line_aa(coord: f32, pitch: f32, half_w: f32) -> f32 {
    let d = abs(fract(coord / pitch + 0.5) - 0.5) * pitch;
    let w = fwidth(d);
    return 1.0 - smoothstep(half_w - w, half_w + w, d);
}

// ── Cell helpers ──────────────────────────────────────────────────────────────

fn cell_alive_current(cx: u32, cy: u32) -> u32 {
    let cx_w = cx % uniforms.screen_cols;
    let cy_w = cy % uniforms.screen_rows;
    let word_idx = cy_w * uniforms.words_per_row + cx_w / 32u;
    let safe_idx = word_idx & (uniforms.words_per_row * uniforms.padded_rows - 1u);
    return (current_cells[safe_idx] >> (cx_w & 31u)) & 1u;
}

fn cell_alive_prev(cx: u32, cy: u32) -> u32 {
    let cx_w = cx % uniforms.screen_cols;
    let cy_w = cy % uniforms.screen_rows;
    let word_idx = cy_w * uniforms.words_per_row + cx_w / 32u;
    let safe_idx = word_idx & (uniforms.words_per_row * uniforms.padded_rows - 1u);
    return (previous_cells[safe_idx] >> (cx_w & 31u)) & 1u;
}

// ── Sponge stamp ──────────────────────────────────────────────────────────────
//
// Models a rubber/foam stamp loaded with ink and pressed onto paper.
//
// pCell  — pixel in cell-local space [-0.5, 0.5].
// cellId — integer cell coordinate as vec2f (for per-cell randomness).
//
// Each cell gets a random stroke direction so marks look hand-applied rather
// than uniformly aligned.  Noise coordinates are stretched 3:1 along the
// stroke axis, producing elongated fiber features that follow the direction.
// The SDF box is similarly elongated, and pressure tapers from the leading
// end to the trailing end as in a real pen/brush stroke.
//
// Returns coverage in [0, ~1.5].  Caller multiplies by f32(cell_alive).
// Computed unconditionally so all fwidth calls are in uniform control flow.

fn sponge_stamp(pCell: vec2f, cellId: vec2f) -> f32 {
    // ── Per-cell stroke direction — right-handed motor bias ──────────────────
    // A human filling small cells doesn't choose angles uniformly.
    // Right-handed writers favor left-to-right sweeps and downward-diagonal
    // pulls; leftward / upward strokes are biomechanically awkward.
    //
    // We approximate a right-handed distribution with a triangular distribution
    // (sum of two uniform samples → cheap bell shape, no trig/tables needed):
    //   preferred:  +25°  — slightly below horizontal (most natural motion)
    //   spread:     ±40°  — triangular range [−15°, +65°] in screen space
    // Result: most marks look horizontal-ish or diagonal-down-right; steep
    // leftward strokes are essentially absent, matching real handwriting.
    let u1    = hash21(cellId);
    let u2    = hash21(cellId + vec2f(17.0, 53.0));
    let angle = 0.436 + (u1 + u2 - 1.0) * 0.349;  // preferred=25°, spread=±20°
    let dir   = vec2f(cos(angle), sin(angle));   // unit vector along stroke
    let perp  = vec2f(-dir.y, dir.x);            // unit vector across stroke

    // Project cell-local position onto stroke/perpendicular axes.
    let p_s = dot(pCell, dir);    // [-~0.5, ~0.5] along stroke
    let p_p = dot(pCell, perp);   // [-~0.5, ~0.5] perpendicular

    // ── Anisotropic noise coordinates ─────────────────────────────────────────
    // Slow along stroke (×2), fast perpendicular (×6) → elongated features.
    // Large per-cell offsets push each cell into a unique noise region.
    let shiftA = hash22(cellId) * 97.0;
    let shiftB = hash22(cellId + vec2f(31.0, 71.0)) * 97.0;
    let noiseA = vec2f(p_s * 2.0, p_p * 6.0) + shiftA;
    let noiseB = vec2f(p_s * 2.0, p_p * 6.0) + shiftB;

    // ── Box SDF: grid-aligned square (shape stays natural, only texture rotates)
    let d = sd_box(pCell, vec2f(0.48));

    // ── Pores (cellular gaps in the foam) ─────────────────────────────────────
    let pore_a = aastep(0.60, 1.0 - worley(noiseA * 2.0));
    let pore_b = aastep(0.60, 1.0 - worley(noiseB * 2.0));
    let pores  = 0.5 * pore_a + 0.5 * pore_b;

    // ── Density field (uneven ink loading on the foam) ────────────────────────
    let dens_a  = smoothstep(0.25, 0.85, fbm(noiseA));
    let dens_b  = smoothstep(0.25, 0.85, fbm(noiseB));
    let density = mix(dens_a, dens_b, 0.5);

    // ── Foam field drives both interior fill and edge displacement ────────────
    let foam      = density * pores;
    let edge_disp = (foam - 0.4) * 0.20;
    let d_foam    = d - edge_disp;
    let edge      = 1.0 - aastep(0.0, d_foam);

    // ── Directional pressure: leading end (p_s < 0) hits harder ──────────────
    // Offsetting the radial distance by +p_s*0.08 makes the trailing half
    // (p_s > 0) look lighter, as ink drags off toward the end of the stroke.
    let pressure = 1.0 - smoothstep(0.10, 0.50, length(pCell) + p_s * 0.08);

    // ── Drying ring: faint rim tracing the foam-displaced boundary ────────────
    let ring = smoothstep(-0.06, -0.01, d_foam) * (1.0 - aastep(0.0, d_foam));

    // ── Combine ───────────────────────────────────────────────────────────────
    var C  = edge * (0.65 * density + 0.35 * pores) * mix(0.6, 1.15, pressure);
    C     += 0.12 * ring;
    return clamp(C, 0.0, 1.5);
}

fn stroke_noise_reveal(pCell: vec2f, cellId: vec2f, t: f32) -> f32 {
    let u1    = hash21(cellId);
    let u2    = hash21(cellId + vec2f(17.0, 53.0));
    let angle = 0.436 + (u1 + u2 - 1.0) * 0.349;
    let dir   = vec2f(cos(angle), sin(angle));
    let perp  = vec2f(-dir.y, dir.x);

    let p_s = dot(pCell, dir);
    let p_p = dot(pCell, perp);

    let shiftA = hash22(cellId) * 97.0;
    let shiftB = hash22(cellId + vec2f(31.0, 71.0)) * 97.0;
    let noiseA = vec2f(p_s * 2.0, p_p * 6.0) + shiftA;
    let noiseB = vec2f(p_s * 2.0, p_p * 6.0) + shiftB;

    let pore_a = aastep(0.60, 1.0 - worley(noiseA * 2.0));
    let pore_b = aastep(0.60, 1.0 - worley(noiseB * 2.0));
    let pores  = 0.5 * pore_a + 0.5 * pore_b;

    let dens_a   = smoothstep(0.25, 0.85, fbm(noiseA));
    let dens_b   = smoothstep(0.25, 0.85, fbm(noiseB));
    let density  = mix(dens_a, dens_b, 0.5);
    let foam     = density * pores;
    let material = mix(density, foam, 0.65);

    // Directional reveal front moves from the leading end of the stroke toward
    // the trailing end, while the foam field perturbs the frontier so it fills
    // as an irregular hand-drawn mark instead of a clean wipe.
    let front        = mix(-0.78, 0.78, t);
    let noise_bias   = (0.5 - material) * 0.22 + (hash21(cellId + vec2f(5.0, 29.0)) - 0.5) * 0.04;
    let directional  = 1.0 - smoothstep(front - 0.09, front + 0.09, p_s + noise_bias);
    let materialGate = smoothstep(0.10, 1.02, t * 1.12 + (material - 0.5) * 0.38);

    return clamp(directional * materialGate, 0.0, 1.0);
}

// ── Fragment ──────────────────────────────────────────────────────────────────

@fragment
fn fs_main(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {
    let px       = frag_pos.x;
    let py       = frag_pos.y;
    let world_y  = py + uniforms.scroll_y;   // world coordinate (scrolled)

    // ── 1. Paper fiber noise ──────────────────────────────────────────────────
    // textureSample must come before any fwidth/derivative call (uniformity).
    // Use world_y so fiber texture is fixed in world space, not viewport space.
    let uv   = vec2f(px, world_y) / f32(uniforms.canvas_width) * paper.noise_scale;
    let ns   = textureSample(noise_tex, noise_smp, uv);
    let dNdx = ns.g * 2.0 - 1.0;   // analytic dNoise/dx packed into G
    let dNdy = ns.b * 2.0 - 1.0;   // analytic dNoise/dy packed into B

    // ── 2. Fiber normal + lighting ────────────────────────────────────────────
    // Paper is nearly flat. XY scaled to ≈4° deviation from vertical.
    let fiber_N = normalize(vec3f(-dNdx * 0.08, -dNdy * 0.08, 1.0));
    let L       = normalize(vec3f(0.3, -0.5, 1.8));
    let V       = vec3f(0.0, 0.0, 1.0);
    let H       = normalize(L + V);
    let NdotL   = max(dot(fiber_N, L), 0.0);
    let NdotH   = max(dot(fiber_N, H), 0.0);
    let diffuse = 0.85 + 0.15 * NdotL;        // 85% ambient + 15% directional
    let spec    = pow(NdotH, paper.spec_power) * paper.spec_weight;

    // ── 3. Paper albedo (OKLab → linear) ─────────────────────────────────────
    // Clearprint-style engineering pad: pale jade-green.
    // OKLab (0.953, -0.024, 0.028) ≈ sRGB (0.902, 0.941, 0.872)
    let paper_base   = oklab_to_linear(vec3f(0.953, -0.024, 0.028));
    let fiber_albedo = mix(0.975, 1.0, ns.r);  // ±1.25% cellulose density variation
    let paper_lit    = paper_base * (diffuse * fiber_albedo) + vec3f(spec);

    // ── 4. Grid lines — cyan-blue dye as transmittance filter (linear) ────────
    // Ink absorbs red/orange, transmits cyan/blue.  Multiplicative: fiber
    // texture stays visible through the printed lines.
    let pitch_minor = paper.grid_pitch_px;
    let pitch_major = pitch_minor * paper.major_every;

    // Canvas dimensions, margin, and content mask — computed once; used by both
    // the grid suppression and the border drawing below.
    let cw = f32(uniforms.canvas_width);
    let ch = f32(uniforms.canvas_height);
    // grid_pitch_px is computed from canvas_width so cw = n_total * pitch_major exactly.
    // 2 major squares per margin → both left and right borders land on major lines.
    let margin = .8 * pitch_major;
    // 0 inside margin band, 1 inside content area.
    // Grid lines and cell ink are only drawn inside the content area.
    let in_cx = step(margin, px) * (1.0 - step(cw - margin, px));
    let in_cy = step(margin, world_y);
    let content_mask = in_cx * in_cy;

    // Fiber-dependent ink bleed: open fiber absorbs more dye, spreading the edge.
    // ns.r is already in [0,1]; 0.3px max bleed keeps lines recognisably straight.
    let fiber_bleed = ns.r * 0.3;

    // Low-frequency printing variation: ink roller/ribbon inconsistency during
    // manufacture.  Each axis fades independently — the print head's condition
    // varies per pass.  Period ≈ 200px (spans ~25 cells); range [0.80, 1.00].
    let print_fade_x = mix(0.70, 1.0, value_noise(vec2f(px       * 0.005,  7.3)));
    let print_fade_y = mix(0.70, 1.0, value_noise(vec2f(3.9, world_y * 0.005)));

    let minor_x   = grid_line_aa(px,      pitch_minor, paper.minor_half_px + fiber_bleed) * print_fade_x;
    let minor_y   = grid_line_aa(world_y, pitch_minor, paper.minor_half_px + fiber_bleed) * print_fade_y;
    let minor_cov = max(minor_x, minor_y) * content_mask;

    // Major lines get a separate, more aggressive fade — they're bolder so need
    // a lower floor to show the same perceptual variation as the minor lines.
    let major_fade_x = mix(0.45, 1.0, value_noise(vec2f(px       * 0.004 + 11.7, 23.1)));
    let major_fade_y = mix(0.45, 1.0, value_noise(vec2f(19.4, world_y * 0.004 + 11.7)));
    let major_x   = grid_line_aa(px,      pitch_major, paper.major_half_px + fiber_bleed) * major_fade_x;
    let major_y   = grid_line_aa(world_y, pitch_major, paper.major_half_px + fiber_bleed) * major_fade_y;
    let major_cov = max(major_x, major_y) * content_mask;

    // Transmittance (linear sRGB): (R, G, B) = fraction transmitted per channel.
    // Minor: (0.52, 0.82, 0.92) — faint teal tint.
    // Major: (0.34, 0.68, 0.86) — more visible every 5th line.
    let after_minor = mix(paper_lit, paper_lit * vec3f(0.52, 0.82, 0.92), minor_cov);
    let paper_grid  = mix(after_minor, after_minor * vec3f(0.34, 0.68, 0.86), major_cov);

    // ── 5. Border margin ──────────────────────────────────────────────────────
    // Bold rectangle inset exactly 2 major squares from each edge.
    // `margin`, `cw`, and `ch` were computed above alongside the content mask.
    let bdr_half = paper.major_half_px * 2.5 + fiber_bleed;

    // Left/right borders span the full viewport height.
    // Top border uses world_y so it scrolls with the page content.
    // Bottom border omitted until page_height is added as a uniform.
    let bdr_l = 1.0 - aastep(bdr_half, abs(px - margin));
    let bdr_r = 1.0 - aastep(bdr_half, abs(px - (cw - margin)));
    let bdr_t = 1.0 - aastep(bdr_half, abs(world_y - margin));

    let border_cov = max(max(bdr_l, bdr_r), bdr_t);
    // Heavier teal absorption than major grid lines — border reads as bolder.
    let paper_bordered = mix(paper_grid, paper_grid * vec3f(0.18, 0.48, 0.70), border_cov * 0.88);

    // ── 6. Sponge stamp ───────────────────────────────────────────────────────
    // Computed unconditionally so all fwidth calls inside are in uniform flow.
    // Use paper.grid_pitch_px (float) so stamps stay phase-aligned with grid lines.
    let gp     = paper.grid_pitch_px;
    let cx     = u32(floor(px      / gp));
    let cy     = u32(floor(world_y / gp));
    let pCell  = vec2f(fract(px / gp) - 0.5, fract(world_y / gp) - 0.5);
    let cellId = vec2f(f32(cx), f32(cy));

    let raw_cov    = sponge_stamp(pCell, cellId);
    let prev_state = cell_alive_prev(cx, cy);
    let curr_state = cell_alive_current(cx, cy);
    let prev_alive = f32(prev_state);
    let curr_alive = f32(curr_state);
    let t          = smoothstep(0.0, 1.0, uniforms.transition_t);
    // Stage the transition: fully fade the old state out before the new state starts.
    let out_t      = smoothstep(0.0, 1.0, clamp(t * 2.0, 0.0, 1.0));
    let in_t       = smoothstep(0.0, 1.0, clamp((t - 0.5) * 2.0, 0.0, 1.0));
    let death_mix  = prev_alive * stroke_noise_reveal(pCell, cellId, 1.0 - out_t);
    let birth_mix  = curr_alive * stroke_noise_reveal(pCell, cellId, in_t);
    let changed    = prev_state != curr_state;
    let is_birth   = curr_state == 1u;
    var alive_mix  = curr_alive;
    alive_mix      = select(alive_mix, birth_mix, changed && is_birth);
    alive_mix      = select(alive_mix, death_mix, changed && !is_birth);
    let coverage   = raw_cov * alive_mix * content_mask;

    // ── 7. Ink shading: anisotropic graphite specular + Beer-Lambert mix ────────
    //
    // Graphite crystallite plates orient along the pencil stroke direction,
    // creating a narrow specular band *across* the stroke (Ward anisotropic BRDF).
    // The highlight color is neutral grey-silver — graphite is semi-metallic.
    //
    // Stroke direction: re-derive from the same hash as sponge_stamp so the
    // specular aligns with the mark's texture.  The trig is cheap and avoids
    // plumbing a new return value through sponge_stamp.
    let u1_g = hash21(cellId);
    let u2_g = hash21(cellId + vec2f(17.0, 53.0));
    let a_g  = 0.436 + (u1_g + u2_g - 1.0) * 0.349;
    let T_g  = vec3f( cos(a_g), sin(a_g), 0.0);   // tangent:   along stroke
    let B_g  = vec3f(-sin(a_g), cos(a_g), 0.0);   // bitangent: across stroke

    // Ward-simplified: exponent is -((H·T/αt)² + (H·B/αb)²).
    // αt large → soft/blurry along stroke  (smeared deposit).
    // αb small → sharp across stroke       (metallic sheen band).
    let alpha_t = 0.55;
    let alpha_b = 0.04;
    let HdotT = dot(H, T_g);
    let HdotB = dot(H, B_g);
    let graphite_hi  = exp(-(HdotT * HdotT / (alpha_t * alpha_t)
                            + HdotB * HdotB / (alpha_b * alpha_b)))
                     * max(NdotH, 0.0) * 0.40;
    // Slightly cool grey — graphite's metallic-tinted specular.
    let graphite_col = vec3f(0.50, 0.52, 0.56);

    let ink_albedo = oklab_to_linear(vec3f(0.15, 0.003, -0.012));
    let ink_lit    = ink_albedo * (diffuse * mix(0.88, 1.0, ns.r))   // dark diffuse body
                   + graphite_col * graphite_hi                       // anisotropic sheen
                   + vec3f(spec * 0.08);                              // residual fiber spec
    let transmit   = exp(-paper.ink_od * coverage);
    // Mix in OKLab: perceptual uniformity across the paper→ink transition.
    // At t=0 (transmit=1, no ink): paper color.
    // At t=1 (transmit→0, full ink): ink color.
    let result_lin = oklab_mix(paper_bordered, ink_lit, 1.0 - transmit);

    // ── 8. Greyscale (BT.709 luminance in linear light) ──────────────────────
    //let luma   = dot(result_lin, vec3f(0.2126, 0.7152, 0.0722));
    //let result = vec3f(luma);

    // ── 9. Gamma encode for non-sRGB surface ──────────────────────────────────
    return vec4f(linear_to_srgb(clamp(result_lin, vec3f(0.0), vec3f(1.0))), 1.0);
}
