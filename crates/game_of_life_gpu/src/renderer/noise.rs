use wgpu::util::DeviceExt;

/// Generates a 256×256 tileable RGBA8Unorm value-noise texture on the CPU.
///
/// Channels:
///   R = noise value
///   G = dNoise/dx packed [0,1] as (v * 0.5 + 0.5)
///   B = dNoise/dy packed [0,1] as (v * 0.5 + 0.5)
///   A = 255 (unused)
///
/// Packing analytic derivatives into GBA lets the shader read both value and
/// normals from a single `textureSample`, avoiding extra taps.
pub(super) fn make_noise_texture(
    device: &wgpu::Device,
    queue: &wgpu::Queue,
) -> (wgpu::Texture, wgpu::TextureView, wgpu::Sampler) {
    const SIZE: u32 = 256;
    const FREQ: f32 = 8.0; // lattice frequency within the 256×256 tile

    let mut data = vec![0u8; (SIZE * SIZE * 4) as usize];

    for py in 0..SIZE {
        for px in 0..SIZE {
            // UV in [0,1)
            let u = px as f32 / SIZE as f32;
            let v = py as f32 / SIZE as f32;

            // Lattice position
            let t_x = u * FREQ;
            let t_y = v * FREQ;
            let i = t_x.floor() as i32;
            let j = t_y.floor() as i32;
            let fx = t_x - i as f32;
            let fy = t_y - j as f32;

            // Smoothstep and its derivative
            let sx = fx * fx * (3.0 - 2.0 * fx);
            let sy = fy * fy * (3.0 - 2.0 * fy);
            let dsx = 6.0 * fx * (1.0 - fx);
            let dsy = 6.0 * fy * (1.0 - fy);

            // Lattice corner values (tileable: modulo FREQ)
            let v00 = hash2(i, j);
            let v10 = hash2(i + 1, j);
            let v01 = hash2(i, j + 1);
            let v11 = hash2(i + 1, j + 1);

            // Bilinear blend
            let a = v00 + (v10 - v00) * sx;
            let b = v01 + (v11 - v01) * sx;
            let val = a + (b - a) * sy;

            // Analytic partial derivatives
            let da_x = (v10 - v00) * dsx;
            let db_x = (v11 - v01) * dsx;
            let dn_x = (da_x + (db_x - da_x) * sy) / SIZE as f32 * FREQ;

            let da_y = (v01 - v00) * dsy;
            let db_y = (v11 - v10) * dsy;
            let dn_y = (da_y + (db_y - da_y) * sx) / SIZE as f32 * FREQ;

            let base = ((py * SIZE + px) * 4) as usize;
            data[base] = (val.clamp(0.0, 1.0) * 255.0) as u8;
            data[base + 1] = ((dn_x * 0.5 + 0.5).clamp(0.0, 1.0) * 255.0) as u8;
            data[base + 2] = ((dn_y * 0.5 + 0.5).clamp(0.0, 1.0) * 255.0) as u8;
            data[base + 3] = 255;
        }
    }

    let texture = device.create_texture_with_data(
        queue,
        &wgpu::TextureDescriptor {
            label: Some("paper_noise"),
            size: wgpu::Extent3d {
                width: SIZE,
                height: SIZE,
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::Rgba8Unorm,
            usage: wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
            view_formats: &[],
        },
        wgpu::util::TextureDataOrder::LayerMajor,
        &data,
    );

    let view = texture.create_view(&wgpu::TextureViewDescriptor::default());
    let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
        label: Some("paper_noise_smp"),
        address_mode_u: wgpu::AddressMode::Repeat,
        address_mode_v: wgpu::AddressMode::Repeat,
        mag_filter: wgpu::FilterMode::Linear,
        min_filter: wgpu::FilterMode::Linear,
        ..Default::default()
    });

    (texture, view, sampler)
}

/// Simple integer hash → [0,1]. Tileable at period FREQ via wrapping modulo.
fn hash2(x: i32, y: i32) -> f32 {
    // Wrap to period so the noise tiles cleanly.
    const P: i32 = 8; // must equal FREQ as i32
    let xi = x.rem_euclid(P);
    let yi = y.rem_euclid(P);
    let n = xi.wrapping_mul(127) ^ yi.wrapping_mul(311);
    let n = n
        .wrapping_mul(n.wrapping_mul(n).wrapping_mul(15731).wrapping_add(789221))
        .wrapping_add(1376312589);
    ((n & 0x0fff_ffff) as f32) / (0x0fff_ffff as f32)
}
