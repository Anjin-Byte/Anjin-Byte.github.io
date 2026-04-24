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

// ── Theme ─────────────────────────────────────────────────────────────────────
//
// Palette is defined by two OKLab endpoints — `surface` (paper) and `ink` (cell
// fill) — plus three lerp positions that place the grid lines and page border
// along the surface→ink axis. Every color in the scene is derived from these.
//
// Swapping light ↔ dark is a single substitution of `surface` and `ink`; the
// `*_t` positions stay the same, so the *proportional* relationships between
// paper, grid, and ink are preserved across themes.

struct ThemeParams {
    surface:         vec4f,  // OKLab (L, a, b, _pad) — paper color
    ink:             vec4f,  // OKLab (L, a, b, _pad) — cell fill color
    minor_t:         f32,    // lerp position for minor grid (surface→ink)
    major_t:         f32,    // lerp position for major grid
    border_t:        f32,    // lerp position for page border
    ink_opacity:     f32,    // max alpha of cell ink at full coverage
    grain_intensity: f32,    // ± dither amplitude added before gamma encode
    _pad0:           f32,
    _pad1:           f32,
    _pad2:           f32,
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

// ── Hi-res region metadata ───────────────────────────────────────────────────

struct HiResGlobalMeta {
    region_count: u32,
    pad0:         u32,
    pad1:         u32,
    pad2:         u32,
}

struct HiResRegionMeta {
    rect:          vec4i,  // [x1, y1, x2, y2] base cell-space
    multiplier:    u32,
    buffer_offset: u32,    // word offset into hires_cells
    cols:          u32,
    wpr:           u32,    // fine-grid words per row (padded)
    flags:         u32,    // bit 0: show_grid
    pad0:          u32,
    pad1:          u32,
    pad2:          u32,
}

// ── Bindings ─────────────────────────────────────────────────────────────────
//
// Split into 3 bind groups by ownership:
//   group(0) = core rendering (uniforms, cells, paper, noise)
//   group(1) = overlays (zones, decals, SDF text)
//   group(2) = hi-res regions

// Core rendering
@group(0) @binding(0)  var<uniform>       uniforms:       RenderUniforms;
@group(0) @binding(1)  var<storage, read> current_cells:  array<u32>;
@group(0) @binding(2)  var<storage, read> previous_cells: array<u32>;
@group(0) @binding(3)  var<uniform>       paper:          PaperParams;
@group(0) @binding(4)  var                noise_tex:      texture_2d<f32>;
@group(0) @binding(5)  var                noise_smp:      sampler;
@group(0) @binding(6)  var<uniform>       theme:          ThemeParams;

// Overlays (zones)
@group(1) @binding(0)  var<uniform>       zone_meta:      ZoneMeta;
@group(1) @binding(1)  var<storage, read> zones:          array<ZoneEntry>;

// Hi-res regions
@group(2) @binding(0)  var<uniform>       hires_meta:     HiResGlobalMeta;
@group(2) @binding(1)  var<storage, read> hires_regions:  array<HiResRegionMeta>;
@group(2) @binding(2)  var<storage, read> hires_cells:      array<u32>;
@group(2) @binding(3)  var<storage, read> hires_cells_prev: array<u32>;

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

// sRGB → Linear sRGB (IEC 61966-2-1).
fn srgb_to_linear(c: vec3f) -> vec3f {
    let lo = c / 12.92;
    let hi = pow((c + 0.055) / 1.055, vec3f(2.4));
    return select(hi, lo, c < vec3f(0.04045));
}

// Linear sRGB → sRGB (IEC 61966-2-1). Applied at output for non-sRGB surfaces.
fn linear_to_srgb(c: vec3f) -> vec3f {
    let lo = c * 12.92;
    let hi = 1.055 * pow(max(c, vec3f(0.0031308)), vec3f(1.0 / 2.4)) - 0.055;
    return select(hi, lo, c < vec3f(0.0031308));
}

// ── Theme helpers ─────────────────────────────────────────────────────────────
// Linear sRGB colors derived from the palette, expressed as proportions along
// the surface→ink OKLab axis. These stay correct under light/dark swap because
// the lerp positions are invariant; only the endpoints change.

fn theme_surface_linear() -> vec3f {
    return oklab_to_linear(theme.surface.xyz);
}

fn theme_ink_linear() -> vec3f {
    return oklab_to_linear(theme.ink.xyz);
}

// Compute a linear-sRGB grid color at lerp position `t` between surface and ink.
// The mix runs in OKLab so perceived brightness steps are uniform.
fn theme_grid_linear(t: f32) -> vec3f {
    return oklab_to_linear(mix(theme.surface.xyz, theme.ink.xyz, t));
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

// ── Hi-res cell lookup ───────────────────────────────────────────────────
// Returns vec2f(alive, in_hires).  x = fine cell alive (0 or 1),
// y = 1.0 if the fragment falls inside a hi-res region, else 0.0.

// Returns vec3f(curr_alive, prev_alive, in_hires).
fn read_hires_cell(px: f32, world_y: f32, gp: f32) -> vec3f {
    for (var ri: u32 = 0u; ri < hires_meta.region_count; ri = ri + 1u) {
        let reg = hires_regions[ri];
        // Unwrapped cell coords — hi-res regions appear only at their canonical position.
        let gcx = i32(floor(px / gp));
        let gcy = i32(floor(world_y / gp));
        if gcx >= reg.rect.x && gcx <= reg.rect.z
           && gcy >= reg.rect.y && gcy <= reg.rect.w {
            let m  = reg.multiplier;
            let fm = f32(m);
            let lfx = u32(floor(fract(px / gp) * fm));
            let lfy = u32(floor(fract(world_y / gp) * fm));
            let fx = u32(gcx - reg.rect.x) * m + lfx;
            let fy = u32(gcy - reg.rect.y) * m + lfy;
            let wi = reg.buffer_offset + fy * reg.wpr + (fx >> 5u);
            let bit = fx & 31u;
            let curr = f32((hires_cells[wi] >> bit) & 1u);
            let prev = f32((hires_cells_prev[wi] >> bit) & 1u);
            return vec3f(curr, prev, 1.0);
        }
    }
    return vec3f(0.0, 0.0, 0.0);
}

// Returns vec4f(in_region, fine_pitch, flags, 0).
// If not in a region, .x = 0. No toroidal wrap — regions appear once.
fn hires_region_grid(px: f32, world_y: f32, gp: f32) -> vec4f {
    for (var ri: u32 = 0u; ri < hires_meta.region_count; ri = ri + 1u) {
        let reg = hires_regions[ri];
        let gcx = i32(floor(px / gp));
        let gcy = i32(floor(world_y / gp));
        if gcx >= reg.rect.x && gcx <= reg.rect.z
           && gcy >= reg.rect.y && gcy <= reg.rect.w {
            let fp = gp / f32(reg.multiplier);
            return vec4f(1.0, fp, f32(reg.flags), 0.0);
        }
    }
    return vec4f(0.0, 0.0, 0.0, 0.0);
}

// Compute the region border coverage for a bold-major-style rectangle.
// No toroidal wrap — border appears only at the canonical region position.
//
// Uses a constant 1-pixel feather (`smoothstep(half_w - 1.0, half_w + 1.0, …)`)
// instead of fwidth-based aastep.  This function is called from inside the
// non-uniform `if hr_show_border { … }` branch in fs_main, and fwidth requires
// uniform control flow across a quad of fragments.  Since px/world_y are
// linear screen-space coords, fwidth(d) ≈ 1.0 canvas pixel, so the constant
// feather produces visually-equivalent AA without the uniformity hazard.
fn hires_border_cov(px: f32, world_y: f32, gp: f32, half_w: f32) -> f32 {
    var cov = 0.0;
    for (var ri: u32 = 0u; ri < hires_meta.region_count; ri = ri + 1u) {
        let reg = hires_regions[ri];
        let lx = f32(reg.rect.x) * gp;
        let ty = f32(reg.rect.y) * gp;
        let rx = f32(reg.rect.z + 1) * gp;
        let by = f32(reg.rect.w + 1) * gp;
        let dl = 1.0 - smoothstep(half_w - 1.0, half_w + 1.0, abs(px - lx));
        let dr = 1.0 - smoothstep(half_w - 1.0, half_w + 1.0, abs(px - rx));
        let dt = 1.0 - smoothstep(half_w - 1.0, half_w + 1.0, abs(world_y - ty));
        let db = 1.0 - smoothstep(half_w - 1.0, half_w + 1.0, abs(world_y - by));
        let in_y = step(ty - half_w, world_y) * (1.0 - step(by + half_w, world_y));
        let in_x = step(lx - half_w, px) * (1.0 - step(rx + half_w, px));
        cov = max(cov, max(max(dl, dr) * in_y, max(dt, db) * in_x));
    }
    return cov;
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
    let cell_x = u32(floor(px / pitch_minor)) % uniforms.screen_cols;
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

    // ── 3. Paper albedo (theme-driven, OKLab → linear) ───────────────────────
    let paper_base   = theme_surface_linear();
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
    let margin = 0.0 * pitch_major;
    // 0 inside margin band, 1 inside content area.
    // Grid lines and cell ink are only drawn inside the content area.
    // Horizontal is aligned via alignedPitch (canvas width is an integer
    // number of major pitches).  Vertical is not — partial major cells are
    // expected at the viewport bottom, which is natural when the page scrolls
    // past a grid that extends infinitely.  A shader-level clip to hide them
    // creates a visible paper/grid seam worse than the problem it solves.
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

    let zone_cx = u32(floor(px / pitch_minor)) % uniforms.screen_cols;
    let zone_world_row = i32(floor(world_y / pitch_minor));
    let zone_mask_raw = zone_mask_for_cell(zone_cx, zone_world_row);
    // Hi-res regions override zone suppression — check early so we can bypass.
    // flags bit 1: show_base_grid — when clear, suppress minor+major base lines inside region.
    let hr_pre = hires_region_grid(px, world_y, pitch_minor);
    let hr_base_grid = select(1.0, f32((u32(hr_pre.z) >> 1u) & 1u), hr_pre.x > 0.5);
    let zone_mask = select(zone_mask_raw, vec4f(hr_base_grid, hr_base_grid, 0.0, 1.0), hr_pre.x > 0.5);
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

    // ── 4b. Hi-res region grid overlay ───────────────────────────────────────
    let hr = hr_pre;
    let hr_flags = u32(hr.z);
    let hr_show_grid   = (hr_flags & 1u) != 0u;  // bit 0
    let hr_show_border = (hr_flags & 4u) != 0u;  // bit 2
    // Compute the fine-grid coverage unconditionally so grid_line_aa's internal
    // fwidth sits in uniform control flow, then gate the contribution with
    // select().  When hr.x is 0 (not inside a region) hr.y is also 0, which
    // would divide-by-zero in grid_line_aa; max(hr.y, 1.0) keeps the math
    // defined — the result is discarded by the select anyway.
    let fine_pitch   = max(hr.y, 1.0);
    let fine_half    = fine_pitch * 0.015 + fiber_bleed;
    let fine_x_raw   = grid_line_aa(px,      fine_pitch, fine_half) * print_fade_x;
    let fine_y_raw   = grid_line_aa(world_y, fine_pitch, fine_half) * print_fade_y;
    let fine_cov     = max(fine_x_raw, fine_y_raw) * content_mask;
    let show_fine    = hr.x > 0.5 && hr_show_grid;
    minor_cov = select(minor_cov, max(minor_cov, fine_cov), show_fine);
    // Region border — bold rectangle around the hi-res area.
    if hr_show_border {
        let hr_bdr_half = paper.major_half_px * 2.0 + fiber_bleed;
        let hr_bdr = hires_border_cov(px, world_y, pitch_minor, hr_bdr_half)
                   * max(major_fade_x, major_fade_y) * content_mask;
        major_cov = max(major_cov, hr_bdr);
    }

    // ── 5. Cell coverage (computed early so it can mask grid lines) ──────────
    // Cells should take visual precedence over grid: inside an alive cell, the
    // grid line underneath is suppressed proportionally to cell coverage. This
    // lets us keep `ink_opacity` low (atmospheric) while still giving cells
    // distinct visual identity — cells "clear" the grid rather than tint over
    // it.
    let gp     = paper.grid_pitch_px;
    let in_hires = hr.x > 0.5;
    let eff_gp = select(gp, hr.y, in_hires);
    let pCell  = vec2f(fract(px / eff_gp) - 0.5, fract(world_y / eff_gp) - 0.5);

    // Hi-res cell lookup — vec3f(curr, prev, in_hires).
    let hires    = read_hires_cell(px, world_y, gp);
    let base_cx  = u32(floor(px      / gp));
    let base_cy  = u32(floor(world_y / gp));
    let prev_state = select(cell_alive_prev(base_cx, base_cy), u32(hires.y), in_hires);
    let curr_state = select(cell_alive_current(base_cx, base_cy), u32(hires.x), in_hires);

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
    // toroidal wrap (screen_cols-1 instead of -1) so left/top of column/row 0
    // wrap cleanly without u32 underflow.  Hi-res cells keep their standard
    // AA boundary — hi-res neighbor lookup is a separate concern.
    //
    // Critical: we OR prev + curr so the extension stays active during a
    // neighbor's death animation.  Using curr alone would yank the extension
    // the instant a neighbor ticks dead, popping the grid line in on this
    // cell's side while the dying neighbor is still visually fading out.
    // With prev-OR-curr, the grid reveals from the dying cell's side only
    // (as its disk retreats past the boundary), which reads as a natural
    // fade rather than a hard pop.
    let right_cx = base_cx + 1u;
    let left_cx  = base_cx + uniforms.screen_cols - 1u;
    let top_cy   = base_cy + uniforms.screen_rows - 1u;
    let bot_cy   = base_cy + 1u;
    let right_alive  = cell_alive_current(right_cx, base_cy) | cell_alive_prev(right_cx, base_cy);
    let left_alive   = cell_alive_current(left_cx,  base_cy) | cell_alive_prev(left_cx,  base_cy);
    let top_alive    = cell_alive_current(base_cx,  top_cy)  | cell_alive_prev(base_cx,  top_cy);
    let bottom_alive = cell_alive_current(base_cx,  bot_cy)  | cell_alive_prev(base_cx,  bot_cy);
    // Extension amount: 0.1 in cell-local space pushes d_square ~2 px past the
    // AA band for our typical ~20px grid pitch.  Scales with fill_t so the
    // join matures with the cell during birth/death transitions.
    let ext_scale    = fill_t * select(0.1, 0.0, in_hires);
    let ext_r        = f32(right_alive)  * ext_scale;
    let ext_l        = f32(left_alive)   * ext_scale;
    let ext_top      = f32(top_alive)    * ext_scale;
    let ext_bot      = f32(bottom_alive) * ext_scale;

    let coverage  = cell_fill(pCell, fill_t, ext_r, ext_l, ext_top, ext_bot)
                  * content_mask * zone_mask.w;
    let grid_mask = 1.0 - coverage;  // grid fades proportionally inside cells

    // ── 6. Grid lines (composited with cell-aware suppression) ───────────────
    // Grid blends in OKLab toward the theme's minor/major lerp positions,
    // multiplied by `grid_mask` so cells replace rather than overlay the grid.
    let minor_color = theme_grid_linear(theme.minor_t);
    let major_color = theme_grid_linear(theme.major_t);
    let after_minor = oklab_mix(paper_lit,   minor_color, minor_cov * grid_mask);
    let paper_grid  = oklab_mix(after_minor, major_color, major_cov * grid_mask);

    // ── 7. Border margin ──────────────────────────────────────────────────────
    // Bold rectangle inset exactly 2 major squares from each edge. Also masked
    // by cell coverage for the same reason as the grid — visual consistency.
    let bdr_half = paper.major_half_px * 2.5 + fiber_bleed;
    let bdr_l = 1.0 - aastep(bdr_half, abs(px - margin));
    let bdr_r = 1.0 - aastep(bdr_half, abs(px - (cw - margin)));
    let bdr_t = 1.0 - aastep(bdr_half, abs(world_y - margin));
    let border_cov     = max(max(bdr_l, bdr_r), bdr_t);
    let border_color   = theme_grid_linear(theme.border_t);
    let paper_bordered = oklab_mix(paper_grid, border_color, border_cov * 0.88 * grid_mask);

    // ── 8. Ink application (theme-driven) ────────────────────────────────────
    // The cell ink color comes from the theme's `ink` endpoint, modulated by
    // `ink_opacity` so the overall contrast stays in the atmospheric band.
    let ink_color  = theme_ink_linear();
    let result_lin = oklab_mix(paper_bordered, ink_color, coverage * theme.ink_opacity);

    // ── 9. Material grain ─────────────────────────────────────────────────────
    // Procedural value noise at a high spatial frequency gives fine-grained
    // variation (~1.5-2 px features on canvas, roughly 1 CSS-px on 2× DPI)
    // with proper inter-pixel correlation — each feature is smoothly shaded
    // rather than a single isolated pixel.  That reads as material texture
    // (film grain, canvas weave) instead of either digital static (per-pixel
    // hash) or splotchy low-frequency blobs (dense sample of the fiber noise
    // texture, which only has 8 features per tile and is too low-frequency
    // to look like grain).
    //
    // Perturbation is applied to OKLab L (perceptual lightness) so the same
    // `grain_intensity` reads equivalently on light and dark surfaces. Light
    // mode ships with grain_intensity=0 — its bright surface has no banding.
    let grain_sample = value_noise(vec2f(px, world_y) * 0.6) - 0.5;
    let result_lab   = linear_to_oklab(result_lin);
    let grained_lab  = vec3f(
        result_lab.x + grain_sample * theme.grain_intensity,
        result_lab.y,
        result_lab.z,
    );
    let grained      = oklab_to_linear(grained_lab);

    // ── 10. Gamma encode for non-sRGB surface ─────────────────────────────────
    return vec4f(linear_to_srgb(clamp(grained, vec3f(0.0), vec3f(1.0))), 1.0);
}
