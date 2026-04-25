// Game of Life compute shader — bitpacked ping-pong, 1 thread per u32 word (32 cells).
//
// Grid layout: cell (x, y) = bit (x % 32) of word at [y * words_per_row + x/32].
// Wrapping uses power-of-2 bitmasks — no division, no ghost cells, fully branch-free.

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

@group(0) @binding(0) var<uniform>            uniforms: Uniforms;
@group(0) @binding(1) var<storage, read>      src: array<u32>;
@group(0) @binding(2) var<storage, read_write> dst: array<u32>;
@group(0) @binding(3) var<storage, read>      frozen: array<u32>;

// Half-adder: returns (sum, carry).
fn ha(a: u32, b: u32) -> vec2<u32> {
    return vec2<u32>(a ^ b, a & b);
}

// Full-adder: returns (sum, carry).
fn fa(a: u32, b: u32, c: u32) -> vec2<u32> {
    return vec2<u32>(a ^ b ^ c, (a & b) | (b & c) | (a & c));
}

// 8-input bit-parallel carry-save adder tree.
// Returns a 4-bit count (bits 0-3) for each of the 32 cell positions in parallel.
fn count8(a: u32, b: u32, c: u32, d: u32,
          e: u32, f: u32, g: u32, h: u32) -> vec4<u32> {
    let r1  = fa(a, b, c);
    let r2  = fa(d, e, f);
    let r3  = ha(g, h);
    let lo  = fa(r1.x, r2.x, r3.x);   // lo.x = bit0,  lo.y = carry → bit1
    let hi1 = fa(r1.y, r2.y, r3.y);   // hi1.x = partial bit1, hi1.y = carry → bit2
    let hi  = ha(hi1.x, lo.y);        // hi.x = bit1,  hi.y = carry → bit2
    let b2  = ha(hi1.y, hi.y);        // b2.x = bit2,  b2.y = bit3 (set only for count=8)
    return vec4<u32>(lo.x, hi.x, b2.x, b2.y);
}

// West-shift: result.bit_i = west-neighbor of cell i  (= cell at bit i-1).
// Layout: bit 0 = westmost cell, bit 31 = eastmost cell.
// Shift word LEFT by 1 so each bit moves to the slot of its east successor,
// then insert bit 31 of the left word into bit 0.
fn ws(word: u32, left: u32) -> u32 {
    return (word << 1u) | (left >> 31u);
}

// East-shift: result.bit_i = east-neighbor of cell i  (= cell at bit i+1).
// Shift word RIGHT by 1, then insert bit 0 of the right word into bit 31.
fn es(word: u32, right: u32) -> u32 {
    return (word >> 1u) | (right << 31u);
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let wx = gid.x;  // word column index
    let wy = gid.y;  // row index

    // Guard: threads beyond the padded grid do nothing.
    if wx >= uniforms.words_per_row || wy >= uniforms.padded_rows {
        return;
    }

    // Power-of-2 wrapping masks (no division, no branch).
    let mask_x = uniforms.words_per_row - 1u;
    let mask_y = uniforms.padded_rows   - 1u;

    let wx_l = (wx - 1u) & mask_x;
    let wx_r = (wx + 1u) & mask_x;
    let wy_n = (wy - 1u) & mask_y;
    let wy_s = (wy + 1u) & mask_y;

    // Load the 3×3 word neighbourhood.
    let wpr = uniforms.words_per_row;
    let nw = src[wy_n * wpr + wx_l];
    let n  = src[wy_n * wpr + wx];
    let ne = src[wy_n * wpr + wx_r];
    let w  = src[wy   * wpr + wx_l];
    let c  = src[wy   * wpr + wx];
    let e  = src[wy   * wpr + wx_r];
    let sw = src[wy_s * wpr + wx_l];
    let s  = src[wy_s * wpr + wx];
    let se = src[wy_s * wpr + wx_r];

    // Build 8 neighbor bitfields (bit i = neighbor state for cell at bit i of word wx,wy).
    let b_n  = n;
    let b_nw = ws(n, nw);
    let b_ne = es(n, ne);
    let b_w  = ws(c, w);
    let b_e  = es(c, e);
    let b_s  = s;
    let b_sw = ws(s, sw);
    let b_se = es(s, se);

    // Count neighbors (4-bit per cell, bit-parallel across all 32 cells).
    let bits = count8(b_n, b_ne, b_e, b_se, b_s, b_sw, b_w, b_nw);

    // Branch-free GoL rule:
    //   count == 3  (0b0011): always alive
    //   count == 2  (0b0010): keep current
    let count3 = ~bits.w & ~bits.z &  bits.y &  bits.x;
    let count2 = ~bits.w & ~bits.z &  bits.y & ~bits.x;
    let raw = count3 | (count2 & c);
    let idx = wy * wpr + wx;
    // Frozen cells forced alive: one OR per word, branch-free.
    dst[idx] = raw | frozen[idx];
}
