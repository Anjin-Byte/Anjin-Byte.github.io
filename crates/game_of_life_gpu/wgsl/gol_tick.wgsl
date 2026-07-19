// WebGL2 Game of Life tick — one fragment-shader pass per generation.
//
// WebGL2 has no compute shaders, so the sim runs as GPGPU ping-pong: each cell
// is one texel of an R8Uint texture (0 dead, 1 alive); a fullscreen pass reads
// the current texture's 3x3 neighbourhood and writes the next generation into
// the other texture, which then becomes current. Toroidal wrap is integer
// modulo on the sample coordinates (texelFetch ignores sampler wrap modes).

struct TickUniforms {
    world_cols: u32,
    world_rows: u32,
    _pad0:      u32,
    _pad1:      u32,
}

@group(0) @binding(0) var<uniform> u:   TickUniforms;
@group(0) @binding(1) var          cur: texture_2d<u32>;

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {
    var pos = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
    return vec4f(pos[vi], 0.0, 1.0);
}

// Alive-state of the cell at (x, y), wrapped toroidally into the world.
fn cell(x: i32, y: i32) -> u32 {
    let w = i32(u.world_cols);
    let h = i32(u.world_rows);
    let xx = ((x % w) + w) % w;
    let yy = ((y % h) + h) % h;
    return textureLoad(cur, vec2i(xx, yy), 0).r;
}

@fragment
fn fs_main(@builtin(position) pos: vec4f) -> @location(0) vec4u {
    let x = i32(floor(pos.x));
    let y = i32(floor(pos.y));

    let n = cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1)
          + cell(x - 1, y    )                  + cell(x + 1, y    )
          + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);

    let alive = cell(x, y);
    // Conway's rule: birth on exactly 3, survive on 2 or 3.
    var next: u32 = 0u;
    if (n == 3u) || (n == 2u && alive == 1u) {
        next = 1u;
    }
    return vec4u(next, 0u, 0u, 1u);
}
