// Engineering-paper Game of Life renderer — sponge-stamp ink model.
//
// Ink model: each alive cell renders as a sponge-stamped ink patch.
//   Porous interior + pressure falloff + drying ring + ragged perimeter.
//   All edges use fwidth-based AA (no constant feather needed at this scale).
//
// Color pipeline (linear light for lighting, OKLab for compositing):
//   Palette endpoints arrive PRE-CONVERTED from the CPU (ThemeParams in
//   types.rs mirrors this file's OKLab math): paper as linear sRGB (it feeds
//   the lighting), grid + ink endpoints as OKLab (they feed the compositing
//   mixes). Per pixel, the lit paper converts to OKLab once, every mix runs
//   in OKLab, and the result converts back to linear once. Output goes
//   through an -srgb surface VIEW, so gamma encode is fixed-function
//   hardware on store — no manual pow-based encode.
//
// Fragment pipeline:
//   1. Paper fiber noise  (textureSample — must be first; uniform control flow)
//   2. Fiber lighting     (ambient-dominant; tiny directional; matte specular)
//   3. Paper albedo       (precomputed linear; ±1.25% fiber variation)
//   4. Grid lines         (cyan-blue dye: multiplicative transmittance filter)
//   5. Sponge stamp       (computed unconditionally, then masked by cell_alive)
//   6. Ink absorption     (Beer-Lambert; paper→ink mix in OKLab)
//   7. Grain (uniform-gated) + hardware sRGB encode via the surface view

struct RenderUniforms {
    world_cols:         u32,
    world_rows:         u32,
    padded_rows:        u32,
    words_per_row:      u32,
    cell_px:            u32,  // fixed; same for every fragment
    canvas_width:       u32,  // viewport canvas width
    canvas_height:      u32,  // viewport canvas height
    scroll_y:           f32,
    transition_t:       f32,
    viewport_origin_x:  u32,  // viewport top-left in world cells
    viewport_origin_y:  u32,
    viewport_size_x:    u32,  // viewport width in world cells
    viewport_size_y:    u32,
    init_fade_t:        f32,    // 52  first-paint ink fade; 0 hides cells, 1 normal
    scroll_x:           f32,    // 56  horizontal camera offset (canvas px)
    pad2:               u32,    // 60
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

// ── Theme ─────────────────────────────────────────────────────────────────────
//
// Palette colors are PRECOMPUTED on the CPU from the two OKLab endpoints and
// the grid lerp positions (see ThemeParams::from_endpoints in types.rs, which
// mirrors this file's OKLab math). They're uniforms — converting them per
// fragment was pure waste. `surface_linear` is linear sRGB because it feeds
// the lighting math; the grid/ink endpoints stay OKLab because they feed the
// perceptual compositing mixes.
//
// Swapping light ↔ dark is still a single palette substitution upstream; the
// proportional surface→ink relationships are baked in by the CPU.

struct ThemeParams {
    surface_linear:  vec4f,  // linear sRGB (r, g, b, _pad) — paper color
    ink_lab:         vec4f,  // OKLab (L, a, b, _pad) — cell fill color
    minor_lab:       vec4f,  // OKLab — minor grid line color
    major_lab:       vec4f,  // OKLab — major grid line color
    ink_opacity:     f32,    // max alpha of cell ink at full coverage
    grain_intensity: f32,    // ± dither amplitude; 0 skips the grain block
    _pad0:           f32,
    _pad1:           f32,
}

struct ZoneMeta {
    zone_count: u32,
    pad0:       u32,
    pad1:       u32,
    pad2:       u32,
}

struct ZoneEntry {
    // x1, y1, x2, y2 (inclusive). x is wrapped viewport col; y is world row.
    rect:  vec4i,
    // mode, edge_style, hide_interior_border, reserved.
    style: vec4u,
    // edge_width_cells, edge_opacity, fade_strength, note_pitch_cells.
    edge:  vec4f,
}

// ── Bindings ─────────────────────────────────────────────────────────────────
//
// Split into 2 bind groups by ownership:
//   group(0) = core rendering (uniforms, cells, paper, noise)
//   group(1) = overlays (zones)

// Core rendering.  `packed_cells` interleaves both cell-state planes per
// word — .x = current, .y = previous — so one 8-byte fetch answers both
// "is it alive" and "was it alive" for 32 cells.  The tick compute shader
// and the edit shaders maintain the interleaving (they view the same
// buffer as flat u32 pairs); see compute.wgsl and simulation.rs.
@group(0) @binding(0)  var<uniform>       uniforms:      RenderUniforms;
@group(0) @binding(1)  var<storage, read> packed_cells:  array<vec2<u32>>;
@group(0) @binding(3)  var<uniform>       paper:         PaperParams;
@group(0) @binding(4)  var                noise_tex:     texture_2d<f32>;
@group(0) @binding(5)  var                noise_smp:     sampler;
@group(0) @binding(6)  var<uniform>       theme:         ThemeParams;

// Overlays (zones)
@group(1) @binding(0)  var<uniform>       zone_meta:      ZoneMeta;
@group(1) @binding(1)  var<storage, read> zones:          array<ZoneEntry>;

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

// (No sRGB encode/decode helpers: gamma encode happens in hardware via the
// -srgb surface view, and every palette color arrives pre-converted from the
// CPU. The two OKLab transforms above are the only color-space code left —
// linear_to_oklab for the lit paper, oklab_to_linear for the final result.)

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

// One fetch answers both planes: returns (current, previous) as 0/1 for the
// cell.  The packed buffer interleaves the planes per word (vec2 element =
// one 8-byte load), halving the storage reads of the old two-buffer scheme.
fn cell_states(cx: u32, cy: u32) -> vec2<u32> {
    let cx_w = cx % uniforms.world_cols;
    let cy_w = cy % uniforms.world_rows;
    let word_idx = cy_w * uniforms.words_per_row + cx_w / 32u;
    let safe_idx = word_idx & (uniforms.words_per_row * uniforms.padded_rows - 1u);
    let words = packed_cells[safe_idx];
    let bit = cx_w & 31u;
    return vec2<u32>((words.x >> bit) & 1u, (words.y >> bit) & 1u);
}

// ── Blank-zone helpers ───────────────────────────────────────────────────────
// mode: 0=minor, 1=major, 2=both
// edge: 0=none, 1=bold-major, 2=fade, 3=noted
//
// NOTE: Both helpers below do a linear scan over all active zones (O(zone_count)
// per fragment). With MAX_BLANK_ZONES=128 this is fine for current use.
// A future optimisation could pre-filter to only zones that overlap the current
// screen row and upload a compact per-row index instead.

fn zone_mask_for_cell(cx: u32, world_row: i32) -> vec4f {
    var minor_mask = 1.0;
    var major_mask = 1.0;
    var major_edge_boost = 0.0;
    var ink_mask = 1.0;

    for (var i: u32 = 0u; i < zone_meta.zone_count; i = i + 1u) {
        let zone = zones[i];
        let rect = zone.rect;
        let rect_x1 = u32(rect.x);
        let rect_x2 = u32(rect.z);
        let inside = cx >= rect_x1 && cx <= rect_x2 && world_row >= rect.y && world_row <= rect.w;
        if !inside {
            continue;
        }

        let mode = zone.style.x;
        let edge_style = zone.style.y;

        let edge_width = max(1.0, zone.edge.x);
        let edge_opacity = clamp(zone.edge.y, 0.0, 1.0);
        let fade_strength = clamp(zone.edge.z, 0.0, 1.0);
        let note_pitch = max(1.0, zone.edge.w);

        let d_left = i32(cx) - rect.x;
        let d_right = rect.z - i32(cx);
        let d_top = world_row - rect.y;
        let d_bottom = rect.w - world_row;
        let d_edge = min(min(d_left, d_right), min(d_top, d_bottom));
        let in_edge_band = f32(d_edge) < edge_width;

        var visibility = 0.0;
        if edge_style == 2u {
            // At the boundary, lines remain visible; deeper inside, hide toward 0.
            let depth = clamp((f32(d_edge) + 1.0) / edge_width, 0.0, 1.0);
            let hidden = depth * fade_strength;
            visibility = 1.0 - hidden;
        }

        if edge_style == 2u {
            // Fade-style zones keep a soft ink transition at the boundary band.
            ink_mask = min(ink_mask, visibility);
        } else {
            // Non-fade zones fully hide cell ink inside the zone interior.
            ink_mask = 0.0;
        }

        if mode == 0u || mode == 2u {
            if edge_style == 2u {
                minor_mask = min(minor_mask, visibility);
            } else {
                minor_mask = 0.0;
            }
        }
        if mode == 1u || mode == 2u {
            if edge_style == 2u {
                major_mask = min(major_mask, visibility);
            } else {
                major_mask = 0.0;
            }
        }

        if in_edge_band && edge_style == 3u {
            // Noted: single ↗ diagonal hatch.
            // When hideInteriorBorder is set, suppress hatching wherever this fragment
            // also falls inside another active zone.
            var not_interior = 1.0;
            if zone.style.z == 1u {
                var inside_other: u32 = 0u;
                for (var j: u32 = 0u; j < zone_meta.zone_count; j = j + 1u) {
                    let or = zones[j].rect;
                    inside_other += select(0u, 1u,
                        j != i
                        && cx >= u32(or.x) && cx <= u32(or.z)
                        && world_row >= or.y && world_row <= or.w);
                }
                not_interior = select(0.0, 1.0, inside_other == 0u);
            }
            let hatch_phase = fract((f32(cx) + f32(world_row)) / note_pitch);
            let hatch = select(0.0, 1.0, hatch_phase >= 0.5);
            major_edge_boost = max(major_edge_boost, hatch * edge_opacity * 0.75 * not_interior);
        }
    }

    return vec4f(minor_mask, major_mask, major_edge_boost, ink_mask);
}

fn zone_bold_major_edge_cov(px: f32, world_y: f32, pitch_minor: f32, half_px: f32) -> f32 {
    var edge_cov = 0.0;
    // Pre-compute integer cell coordinates for the interior-suppression inner loop.
    let cell_x = u32(floor(px / pitch_minor)) % uniforms.world_cols;
    let cell_y = i32(floor(world_y / pitch_minor));

    for (var i: u32 = 0u; i < zone_meta.zone_count; i = i + 1u) {
        let zone = zones[i];
        if zone.style.y != 1u {
            continue;
        }

        let rect = zone.rect;
        let edge_opacity = clamp(zone.edge.y, 0.0, 1.0);
        if edge_opacity <= 0.0 {
            continue;
        }

        // Rectangle boundary in world pixel space. x2/y2 are inclusive cell
        // indices, so the right/bottom boundary is at +1 cell.
        let left_x = f32(rect.x) * pitch_minor;
        let right_x = f32(rect.z + 1) * pitch_minor;
        let top_y = f32(rect.y) * pitch_minor;
        let bottom_y = f32(rect.w + 1) * pitch_minor;

        // Fast reject when fragment is not near this zone boundary.
        if px < left_x - half_px || px > right_x + half_px
            || world_y < top_y - half_px || world_y > bottom_y + half_px {
            continue;
        }

        let in_vertical_span = select(0.0, 1.0, world_y >= top_y && world_y <= bottom_y);
        let in_horizontal_span = select(0.0, 1.0, px >= left_x && px <= right_x);

        // Use smoothstep with a fixed 1.0-pixel feather instead of aastep/fwidth.
        // fwidth requires uniform control flow, which the continue-guarded loop above
        // cannot guarantee. Since px/world_y are linear screen-space coords,
        // fwidth(d) ≈ 1.0 canvas pixel, so the constant feather is equivalent.
        let line_l = (1.0 - smoothstep(half_px - 1.0, half_px + 1.0, abs(px - left_x))) * in_vertical_span;
        let line_r = (1.0 - smoothstep(half_px - 1.0, half_px + 1.0, abs(px - right_x))) * in_vertical_span;
        let line_t = (1.0 - smoothstep(half_px - 1.0, half_px + 1.0, abs(world_y - top_y))) * in_horizontal_span;
        let line_b = (1.0 - smoothstep(half_px - 1.0, half_px + 1.0, abs(world_y - bottom_y))) * in_horizontal_span;

        // When hideInteriorBorder is set (style.z == 1), suppress this zone's border
        // for any fragment that falls inside another active zone's rect. This lets
        // adjacent zones share a unified outer boundary instead of showing interior lines.
        var interior_weight = 1.0;
        if zone.style.z == 1u {
            var inside_other: u32 = 0u;
            for (var j: u32 = 0u; j < zone_meta.zone_count; j = j + 1u) {
                let or = zones[j].rect;
                inside_other += select(0u, 1u,
                    j != i
                    && cell_x >= u32(or.x) && cell_x <= u32(or.z)
                    && cell_y >= or.y && cell_y <= or.w);
            }
            interior_weight = select(0.0, 1.0, inside_other == 0u);
        }
        let zone_edge_cov = max(max(line_l, line_r), max(line_t, line_b)) * edge_opacity * interior_weight;
        edge_cov = max(edge_cov, zone_edge_cov);
    }

    return edge_cov;
}

// ── Cell fill ─────────────────────────────────────────────────────────────────
//
// A single function that describes both the cell's shape AND its birth/death
// animation. The fill grows from a point, expands radially into a disk, and
// finishes by squaring off the corners into a unit cell.
//
// pCell — pixel in cell-local space [-0.5, 0.5].
// t     — fill progress in [0, 1]. 0 = invisible, 1 = full square.
// ext_* — per-side square extensions.  The default square covers [-0.5, 0.5]
//         on each axis; extensions push the corresponding side outward so
//         d_square stays negative past the shared boundary with an alive
//         neighbor. Set by the caller based on neighbor cell state: 0 for
//         "neighbor dead" (standard AA edge) and ~0.1 for "neighbor alive"
//         (seamless join — the AA transition happens past the boundary,
//         inside the neighbor's cell where its own extension makes the pixel
//         fully filled).
//
// Radius is `t × 0.8` rather than `t × √½`.  At t=1 this gives d_disk ≈
// -0.093 at the corner — comfortably past the AA band (fwidth ≈ 0.05 for
// our grid pitch) — so a 2x2 block of alive cells has coverage = 1.0 at the
// central corner rather than the 0.5 AA bleed the inscribed-circle radius
// would produce.  Isolated cells still have softly AA'd corners because no
// extension is applied; only mutually-alive cells join seamlessly.

fn cell_fill(
    pCell: vec2f,
    t: f32,
    ext_r: f32,
    ext_l: f32,
    ext_top: f32,
    ext_bot: f32,
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

// ── Fragment ──────────────────────────────────────────────────────────────────

@fragment
fn fs_main(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {
    // Translate fragment pixel coords into world pixel coords by adding
    // the viewport origin (in cells) × cell_px.  At viewport origin (0,0)
    // — the default — this is a no-op and behaviour matches the
    // pre-decouple shader exactly.  Resize updates only the viewport
    // uniforms, never the cell buffers; everything downstream computes
    // in world space, so a moving viewport is just a sliding window.
    let vp_off_x = f32(uniforms.viewport_origin_x * uniforms.cell_px);
    let vp_off_y = f32(uniforms.viewport_origin_y * uniforms.cell_px);
    let px       = frag_pos.x + vp_off_x + uniforms.scroll_x;   // world X (scrolled)
    let py       = frag_pos.y + vp_off_y;
    let world_y  = py + uniforms.scroll_y;                      // world Y (scrolled)

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

    // ── 3. Paper albedo (pre-converted linear from the theme uniform) ────────
    let paper_base   = theme.surface_linear.rgb;
    let fiber_albedo = mix(0.975, 1.0, ns.r);  // ±1.25% cellulose density variation
    let paper_lit    = paper_base * (diffuse * fiber_albedo) + vec3f(spec);

    // ── 4. Grid lines — cyan-blue dye as transmittance filter (linear) ────────
    // Ink absorbs red/orange, transmits cyan/blue.  Multiplicative: fiber
    // texture stays visible through the printed lines.
    let pitch_minor = paper.grid_pitch_px;
    let pitch_major = pitch_minor * paper.major_every;

    // The grid is an omnipresent toroidal backdrop for the spatial layout, so
    // there is no single-page clip. Previously a `content_mask` confined the
    // grid + cells to the [0, canvas_width] × [0, infinity) footprint of the old
    // single-vertical-scroll page, which left bare background everywhere the 2-D
    // camera panned beyond that rectangle. The world is toroidal (cells wrap)
    // and the grid lines are periodic, so the grid tiles infinitely in every
    // direction and fills wherever the camera looks.
    let content_mask = 1.0;

    // Fiber-dependent ink bleed: open fiber absorbs more dye, spreading the edge.
    // ns.r is already in [0,1]; 0.3px max bleed keeps lines recognisably straight.
    let fiber_bleed = ns.r * 0.3;

    // Low-frequency printing variation: ink roller/ribbon inconsistency during
    // manufacture.  Each axis fades independently — the print head's condition
    // varies per pass.  Period ≈ 200px (spans ~25 cells); range [0.80, 1.00].
    let print_fade_x = mix(0.70, 1.0, value_noise(vec2f(px       * 0.005,  7.3)));
    let print_fade_y = mix(0.70, 1.0, value_noise(vec2f(3.9, world_y * 0.005)));

    let minor_x = grid_line_aa(px,      pitch_minor, paper.minor_half_px + fiber_bleed) * print_fade_x;
    let minor_y = grid_line_aa(world_y, pitch_minor, paper.minor_half_px + fiber_bleed) * print_fade_y;
    var minor_cov = max(minor_x, minor_y) * content_mask;

    // Major lines get a separate, more aggressive fade — they're bolder so need
    // a lower floor to show the same perceptual variation as the minor lines.
    let major_fade_x = mix(0.45, 1.0, value_noise(vec2f(px       * 0.004 + 11.7, 23.1)));
    let major_fade_y = mix(0.45, 1.0, value_noise(vec2f(19.4, world_y * 0.004 + 11.7)));
    let major_x = grid_line_aa(px,      pitch_major, paper.major_half_px + fiber_bleed) * major_fade_x;
    let major_y = grid_line_aa(world_y, pitch_major, paper.major_half_px + fiber_bleed) * major_fade_y;
    var major_cov = max(major_x, major_y) * content_mask;

    let zone_cx = u32(floor(px / pitch_minor)) % uniforms.world_cols;
    let zone_world_row = i32(floor(world_y / pitch_minor));
    let zone_mask = zone_mask_for_cell(zone_cx, zone_world_row);
    minor_cov *= zone_mask.x;
    // Zone edge overlays share the same factory roller fade profile as regular
    // major grid lines.
    let major_roller_fade = max(major_fade_x, major_fade_y);
    let bold_major_edge_cov = zone_bold_major_edge_cov(
        px,
        world_y,
        pitch_minor,
        paper.major_half_px + fiber_bleed,
    );
    let edge_major_cov = max(zone_mask.z, bold_major_edge_cov) * major_roller_fade * content_mask;
    major_cov = max(major_cov * zone_mask.y, edge_major_cov);

    // ── 5. Cell coverage (computed early so it can mask grid lines) ──────────
    // Cells should take visual precedence over grid: inside an alive cell, the
    // grid line underneath is suppressed proportionally to cell coverage. This
    // lets us keep `ink_opacity` low (atmospheric) while still giving cells
    // distinct visual identity — cells "clear" the grid rather than tint over
    // it.
    let gp       = paper.grid_pitch_px;
    let pCell    = vec2f(fract(px / gp) - 0.5, fract(world_y / gp) - 0.5);
    // floor() goes negative when the camera pans into negative world space, and
    // u32(negativeFloat) is undefined in WGSL — it streaks cells to the edges.
    // Wrap the signed cell index into [0, world_cols/rows) before the u32 cast
    // (the old content_mask hid this by guaranteeing non-negative coords).
    let wcols    = i32(uniforms.world_cols);
    let wrows    = i32(uniforms.world_rows);
    let base_cx  = u32(((i32(floor(px      / gp)) % wcols) + wcols) % wcols);
    let base_cy  = u32(((i32(floor(world_y / gp)) % wrows) + wrows) % wrows);
    let center     = cell_states(base_cx, base_cy);
    let curr_state = center.x;
    let prev_state = center.y;

    // Transition staging: the old state fades before the new state fills in,
    // so a dying cell never overlaps with an arriving one.
    let t      = smoothstep(0.0, 1.0, uniforms.transition_t);
    let out_t  = smoothstep(0.0, 1.0, clamp(t * 2.0, 0.0, 1.0));
    let in_t   = smoothstep(0.0, 1.0, clamp((t - 0.5) * 2.0, 0.0, 1.0));
    let changed  = prev_state != curr_state;
    let is_birth = curr_state == 1u;

    // Fill progress per cell-state case:
    //   static alive    → 1.0
    //   static dead     → 0.0
    //   birth           → in_t  (0 → 1)
    //   death           → 1 - out_t (1 → 0)
    var fill_t = f32(curr_state);
    fill_t = select(fill_t, in_t,        changed && is_birth);
    fill_t = select(fill_t, 1.0 - out_t, changed && !is_birth);

    // Orthogonal neighbor state — used to extend this cell's square SDF into
    // alive neighbors so adjacent alive cells share a seamless boundary. Uses
    // toroidal wrap (world_cols-1 instead of -1) so left/top of column/row 0
    // wrap cleanly without u32 underflow.
    //
    // Critical: we OR prev + curr so the extension stays active during a
    // neighbor's death animation.  Using curr alone would yank the extension
    // the instant a neighbor ticks dead, popping the grid line in on this
    // cell's side while the dying neighbor is still visually fading out.
    // With prev-OR-curr, the grid reveals from the dying cell's side only
    // (as its disk retreats past the boundary), which reads as a natural
    // fade rather than a hard pop.
    let right_cx = base_cx + 1u;
    let left_cx  = base_cx + uniforms.world_cols - 1u;
    let top_cy   = base_cy + uniforms.world_rows - 1u;
    let bot_cy   = base_cy + 1u;
    let right_s  = cell_states(right_cx, base_cy);
    let left_s   = cell_states(left_cx,  base_cy);
    let top_s    = cell_states(base_cx,  top_cy);
    let bot_s    = cell_states(base_cx,  bot_cy);
    let right_alive  = right_s.x | right_s.y;
    let left_alive   = left_s.x  | left_s.y;
    let top_alive    = top_s.x   | top_s.y;
    let bottom_alive = bot_s.x   | bot_s.y;
    // Extension amount: 0.1 in cell-local space pushes d_square ~2 px past the
    // AA band for our typical ~20px grid pitch.  Scales with fill_t so the
    // join matures with the cell during birth/death transitions.
    let ext_scale    = fill_t * 0.1;
    let ext_r        = f32(right_alive)  * ext_scale;
    let ext_l        = f32(left_alive)   * ext_scale;
    let ext_top      = f32(top_alive)    * ext_scale;
    let ext_bot      = f32(bottom_alive) * ext_scale;

    // `init_fade_t` ramps 0 → 1 over ~1.2 s after the first painted frame
    // (driven from the worker), gradually revealing cells against a
    // paper/grid layer that's already at full opacity.  Once it saturates
    // at 1.0 the worker stops issuing the buffer write and this multiply
    // becomes a no-op for the rest of the session.
    let coverage  = cell_fill(pCell, fill_t, ext_r, ext_l, ext_top, ext_bot)
                  * content_mask * zone_mask.w
                  * uniforms.init_fade_t;
    let grid_mask = 1.0 - coverage;  // grid fades proportionally inside cells

    // ── 6-8. Compositing chain, entirely in OKLab ────────────────────────────
    // The lit paper converts to OKLab ONCE; the minor-grid, major-grid, and
    // ink mixes all run in OKLab against the pre-converted theme endpoints
    // (multiplied by `grid_mask` so cells replace rather than overlay the
    // grid), and the result converts back to linear ONCE at the end. The old
    // chain round-tripped through linear between every mix — mathematically
    // the identity, numerically just extra cube/cbrt work per pixel.
    // (The engineering-paper page border is gone: an infinite toroidal grid
    // has no page edge, so there is no border term in the chain.)
    let paper_lab       = linear_to_oklab(paper_lit);
    let after_minor_lab = mix(paper_lab,       theme.minor_lab.xyz, minor_cov * grid_mask);
    let paper_grid_lab  = mix(after_minor_lab, theme.major_lab.xyz, major_cov * grid_mask);
    let result_lab      = mix(paper_grid_lab,  theme.ink_lab.xyz,   coverage * theme.ink_opacity);

    // ── 9. Material grain (uniform-gated) ────────────────────────────────────
    // Procedural value noise at a high spatial frequency gives fine-grained
    // variation (~1.5-2 px features on canvas, roughly 1 CSS-px on 2× DPI)
    // with proper inter-pixel correlation — material texture rather than
    // digital static.  Perturbation is applied to OKLab L (perceptual
    // lightness) so the same `grain_intensity` reads equivalently on light
    // and dark surfaces.
    //
    // The branch is uniform control flow (`grain_intensity` is a uniform, and
    // no derivative/textureSample calls occur past this point), so themes
    // with grain off — light mode ships 0.0 — skip the noise evaluation
    // entirely instead of computing a term that multiplies to zero.
    var final_lab = result_lab;
    if theme.grain_intensity != 0.0 {
        let grain_sample = value_noise(vec2f(px, world_y) * 0.6) - 0.5;
        final_lab = vec3f(
            result_lab.x + grain_sample * theme.grain_intensity,
            result_lab.y,
            result_lab.z,
        );
    }

    // ── 10. Output ────────────────────────────────────────────────────────────
    // Written through the -srgb surface view: gamma encode happens in fixed-
    // function hardware on store, replacing the old manual linear_to_srgb.
    let result_lin = oklab_to_linear(final_lab);
    return vec4f(clamp(result_lin, vec3f(0.0), vec3f(1.0)), 1.0);
}
