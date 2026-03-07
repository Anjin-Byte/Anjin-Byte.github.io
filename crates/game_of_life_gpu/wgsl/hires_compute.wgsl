// Fine-cell GoL compute — one thread per cell (not per word).
//
// Each fine cell reads its 8 neighbors. Interior cells read from the fine
// grid directly. Edge cells read from the outward boundary ring, which
// contains virtual fine cells expanded from neighboring base cells.
//
// Outward ring layout (bits, packed sequentially):
//   [0 .. W*N)         north edge (cols fine cells)
//   [W*N .. (W+H)*N)   east edge  (rows fine cells)
//   [(W+H)*N .. (2W+H)*N)  south edge
//   [(2W+H)*N .. (2W+2H)*N) west edge
//   corners: TL(N²), TR(N²), BR(N²), BL(N²)

struct Params {
    cols:       u32,   // actual fine columns
    rows:       u32,   // actual fine rows
    wpr:        u32,   // fine words per row (padded)
    base_w:     u32,   // region base-cell width
    base_h:     u32,   // region base-cell height
    multiplier: u32,
    _pad0:      u32,
    _pad1:      u32,
}

@group(0) @binding(0) var<uniform>             params:  Params;
@group(0) @binding(1) var<storage, read>       src:     array<u32>;
@group(0) @binding(2) var<storage, read_write> dst:     array<atomic<u32>>;
@group(0) @binding(3) var<storage, read>       outward: array<u32>;

fn read_fine(x: u32, y: u32) -> u32 {
    return (src[y * params.wpr + (x >> 5u)] >> (x & 31u)) & 1u;
}

fn read_outward_bit(idx: u32) -> u32 {
    return (outward[idx >> 5u] >> (idx & 31u)) & 1u;
}

fn neighbor(x: i32, y: i32) -> u32 {
    let c = i32(params.cols);
    let r = i32(params.rows);

    if x >= 0 && x < c && y >= 0 && y < r {
        return read_fine(u32(x), u32(y));
    }

    let N  = params.multiplier;
    let W  = params.base_w;
    let H  = params.base_h;
    let N2 = N * N;

    let edge_n = 0u;
    let edge_e = W * N;
    let edge_s = (W + H) * N;
    let edge_w = (2u * W + H) * N;
    let corner = (2u * W + 2u * H) * N;

    if y == -1 && x >= 0 && x < c { return read_outward_bit(edge_n + u32(x)); }
    if y == r  && x >= 0 && x < c { return read_outward_bit(edge_s + u32(x)); }
    if x == -1 && y >= 0 && y < r { return read_outward_bit(edge_w + u32(y)); }
    if x == c  && y >= 0 && y < r { return read_outward_bit(edge_e + u32(y)); }

    // Diagonal corners (all N² bits in each block are identical)
    if x == -1 && y == -1 { return read_outward_bit(corner); }
    if x == c  && y == -1 { return read_outward_bit(corner + N2); }
    if x == c  && y == r  { return read_outward_bit(corner + 2u * N2); }
    if x == -1 && y == r  { return read_outward_bit(corner + 3u * N2); }

    return 0u;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if x >= params.cols || y >= params.rows { return; }

    let ix = i32(x);
    let iy = i32(y);

    let count = neighbor(ix - 1, iy - 1) + neighbor(ix, iy - 1) + neighbor(ix + 1, iy - 1)
              + neighbor(ix - 1, iy)                              + neighbor(ix + 1, iy)
              + neighbor(ix - 1, iy + 1) + neighbor(ix, iy + 1) + neighbor(ix + 1, iy + 1);

    let alive = read_fine(x, y);
    let lives = count == 3u || (count == 2u && alive == 1u);

    if lives {
        let word_idx = y * params.wpr + (x >> 5u);
        atomicOr(&dst[word_idx], 1u << (x & 31u));
    }
    // Dead cells: bit stays 0 (dst pre-cleared before dispatch).
}
