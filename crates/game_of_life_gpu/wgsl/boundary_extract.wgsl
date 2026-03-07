// Boundary extraction — one dispatch per region per frame.
// Each thread handles one base cell in the ring surrounding the region.
// Thread ID maps to ring index: 0..ring_size-1.
//
// Ring layout: [north_edge(W cells), east_edge(H cells),
//              south_edge(W cells), west_edge(H cells),
//              TL_corner, TR_corner, BR_corner, BL_corner]

struct Params {
    region_x1:     i32,
    region_y1:     i32,
    region_x2:     i32,
    region_y2:     i32,
    multiplier:    u32,
    base_wpr:      u32,   // base grid words_per_row
    fine_wpr:      u32,   // region fine words_per_row
    fine_rows:     u32,   // region fine rows
    ring_size:     u32,   // total base cells in ring (edges + corners)
    padded_rows:   u32,   // base grid padded_rows
    frozen_vote:   u32,   // 0 = exclude frozen, 1 = include (Phase 1: always 0)
    _pad:          u32,
}

@group(0) @binding(0) var<uniform>            params: Params;
@group(0) @binding(1) var<storage, read>      base_cells: array<u32>;
@group(0) @binding(2) var<storage, read>      fine_cells: array<u32>;
@group(0) @binding(3) var<storage, read>      fine_frozen: array<u32>;
@group(0) @binding(4) var<storage, read_write> outward_ring: array<u32>;
@group(0) @binding(5) var<storage, read_write> inward_ring: array<u32>;
@group(0) @binding(6) var<storage, read_write> inward_grid: array<atomic<u32>>;

fn read_bit_fine(x: u32, y: u32) -> u32 {
    let word_idx = y * params.fine_wpr + (x >> 5u);
    let bit_idx = x & 31u;
    return (fine_cells[word_idx] >> bit_idx) & 1u;
}

fn read_bit_base(cx: u32, cy: u32) -> u32 {
    let wrapped_y = cy & (params.padded_rows - 1u);
    let wrapped_x = cx & (params.base_wpr * 32u - 1u);
    let word_idx = wrapped_y * params.base_wpr + (wrapped_x >> 5u);
    let bit_idx = wrapped_x & 31u;
    return (base_cells[word_idx] >> bit_idx) & 1u;
}

// Count alive fine cells along one edge of a base cell within the region.
// edge: 0=north (first row), 1=east (last col), 2=south (last row), 3=west (first col)
fn count_fine_edge(base_cx: i32, base_cy: i32, edge: u32) -> u32 {
    let N = params.multiplier;
    var count = 0u;
    let fine_ox = u32(base_cx - params.region_x1) * N;
    let fine_oy = u32(base_cy - params.region_y1) * N;

    for (var i = 0u; i < N; i = i + 1u) {
        var fx: u32; var fy: u32;
        if edge == 0u      { fx = fine_ox + i; fy = fine_oy; }
        else if edge == 1u { fx = fine_ox + N - 1u; fy = fine_oy + i; }
        else if edge == 2u { fx = fine_ox + i; fy = fine_oy + N - 1u; }
        else               { fx = fine_ox; fy = fine_oy + i; }

        count = count + read_bit_fine(fx, fy);
    }
    return count;
}

// Count alive fine cells in the NxN corner block of the region.
// corner: 0=TL, 1=TR, 2=BR, 3=BL
fn count_fine_corner(corner: u32) -> u32 {
    let N = params.multiplier;
    let W = u32(params.region_x2 - params.region_x1 + 1);
    let H = u32(params.region_y2 - params.region_y1 + 1);
    let fc = W * N;  // actual fine columns
    let fr = H * N;  // actual fine rows
    var fx0: u32; var fy0: u32;
    if corner == 0u      { fx0 = 0u;       fy0 = 0u; }
    else if corner == 1u { fx0 = fc - N;   fy0 = 0u; }
    else if corner == 2u { fx0 = fc - N;   fy0 = fr - N; }
    else                 { fx0 = 0u;       fy0 = fr - N; }

    var count = 0u;
    for (var dy = 0u; dy < N; dy = dy + 1u) {
        for (var dx = 0u; dx < N; dx = dx + 1u) {
            count = count + read_bit_fine(fx0 + dx, fy0 + dy);
        }
    }
    return count;
}

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x;
    if idx >= params.ring_size { return; }

    let N = params.multiplier;
    let threshold = N / 2u;

    let W = u32(params.region_x2 - params.region_x1 + 1);
    let H = u32(params.region_y2 - params.region_y1 + 1);

    var base_cx: i32; var base_cy: i32;
    var edge: u32;
    var is_corner = false;
    var corner_id: u32;
    var out_count: u32;

    if idx < W {
        // North edge — base cells just above the region
        base_cx = params.region_x1 + i32(idx);
        base_cy = params.region_y1 - 1;
        edge = 0u; out_count = N;
    } else if idx < W + H {
        // East edge — base cells just right of the region
        base_cx = params.region_x2 + 1;
        base_cy = params.region_y1 + i32(idx - W);
        edge = 1u; out_count = N;
    } else if idx < 2u * W + H {
        // South edge — base cells just below the region
        base_cx = params.region_x1 + i32(idx - W - H);
        base_cy = params.region_y2 + 1;
        edge = 2u; out_count = N;
    } else if idx < 2u * W + 2u * H {
        // West edge — base cells just left of the region
        base_cx = params.region_x1 - 1;
        base_cy = params.region_y1 + i32(idx - 2u * W - H);
        edge = 3u; out_count = N;
    } else {
        // Corner
        is_corner = true;
        corner_id = idx - 2u * W - 2u * H;
        out_count = N * N;
        if corner_id == 0u      { base_cx = params.region_x1 - 1; base_cy = params.region_y1 - 1; }
        else if corner_id == 1u { base_cx = params.region_x2 + 1; base_cy = params.region_y1 - 1; }
        else if corner_id == 2u { base_cx = params.region_x2 + 1; base_cy = params.region_y2 + 1; }
        else                    { base_cx = params.region_x1 - 1; base_cy = params.region_y2 + 1; }
        edge = 0u;
    }

    // ── Outward: expand base cell into virtual fine cells ──
    var out_offset: u32;
    if idx < 2u * W + 2u * H {
        out_offset = idx * N;
    } else {
        out_offset = (2u * W + 2u * H) * N + (idx - 2u * W - 2u * H) * N * N;
    }
    let val = read_bit_base(u32(base_cx), u32(base_cy));
    for (var i = 0u; i < out_count; i = i + 1u) {
        let word_idx = (out_offset + i) >> 5u;
        let bit_idx = (out_offset + i) & 31u;
        outward_ring[word_idx] = outward_ring[word_idx] | (val << bit_idx);
    }

    // ── Inward: aggregate fine edge into one base cell value ──
    var fine_count: u32;
    var grid_cx: i32;
    var grid_cy: i32;

    if is_corner {
        fine_count = count_fine_corner(corner_id);
        let corner_threshold = (N * N) / 2u;
        let alive = select(0u, 1u, fine_count >= corner_threshold);
        let word_idx = idx >> 5u;
        let bit_idx = idx & 31u;
        inward_ring[word_idx] = inward_ring[word_idx] | (alive << bit_idx);

        if corner_id == 0u      { grid_cx = params.region_x1; grid_cy = params.region_y1; }
        else if corner_id == 1u { grid_cx = params.region_x2; grid_cy = params.region_y1; }
        else if corner_id == 2u { grid_cx = params.region_x2; grid_cy = params.region_y2; }
        else                    { grid_cx = params.region_x1; grid_cy = params.region_y2; }

        if alive == 1u {
            let gw = u32(grid_cy) * params.base_wpr + (u32(grid_cx) >> 5u);
            atomicOr(&inward_grid[gw], 1u << (u32(grid_cx) & 31u));
        }
    } else {
        var inward_edge: u32;
        var inward_cx: i32; var inward_cy: i32;
        if edge == 0u {
            inward_edge = 2u;
            inward_cx = base_cx;
            inward_cy = params.region_y1;
        } else if edge == 1u {
            inward_edge = 3u;
            inward_cx = params.region_x2;
            inward_cy = base_cy;
        } else if edge == 2u {
            inward_edge = 0u;
            inward_cx = base_cx;
            inward_cy = params.region_y2;
        } else {
            inward_edge = 1u;
            inward_cx = params.region_x1;
            inward_cy = base_cy;
        }

        fine_count = count_fine_edge(inward_cx, inward_cy, inward_edge);
        let alive = select(0u, 1u, fine_count >= threshold);
        let word_idx = idx >> 5u;
        let bit_idx = idx & 31u;
        inward_ring[word_idx] = inward_ring[word_idx] | (alive << bit_idx);

        grid_cx = inward_cx;
        grid_cy = inward_cy;
        if alive == 1u {
            let gw = u32(grid_cy) * params.base_wpr + (u32(grid_cx) >> 5u);
            atomicOr(&inward_grid[gw], 1u << (u32(grid_cx) & 31u));
        }
    }
}
