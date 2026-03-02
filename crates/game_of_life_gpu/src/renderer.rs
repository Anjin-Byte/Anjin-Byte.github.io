use bytemuck::bytes_of;
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;
use crate::simulation::Uniforms;

// ── PaperParams ───────────────────────────────────────────────────────────────

/// Paper rendering parameters — must match `PaperParams` struct in render.wgsl.
#[repr(C)]
#[derive(bytemuck::Pod, bytemuck::Zeroable, Clone, Copy)]
pub struct PaperParams {
    pub noise_scale:   f32,  // UV tiling frequency for fiber noise
    pub ink_od:        f32,  // Beer-Lambert optical depth at full ink coverage
    pub grid_pitch_px: f32,  // minor grid pitch in canvas pixels
    pub major_every:   f32,  // major line every N minor lines
    pub minor_half_px: f32,  // half-width of minor grid lines (pixels)
    pub major_half_px: f32,  // half-width of major grid lines (pixels)
    pub spec_power:    f32,  // Blinn-Phong exponent for fiber specular highlight
    pub spec_weight:   f32,  // specular contribution scale
}

impl PaperParams {
    /// Build paper parameters from the exact float grid pitch (canvas pixels per cell).
    ///
    /// Takes a float rather than a rounded integer so the shader grid pitch matches
    /// the analytically aligned pitch computed from canvas width, ensuring both
    /// margin borders land on major grid lines.
    pub fn for_pitch(pitch: f32) -> Self {
        PaperParams {
            noise_scale:   4.0,
            ink_od:        2.5,
            grid_pitch_px: pitch,
            major_every:   5.0,
            minor_half_px: pitch * 0.02,
            major_half_px: pitch * 0.06,
            spec_power:    80.0,
            spec_weight:   0.012,
        }
    }
}

// ── GpuRenderer ───────────────────────────────────────────────────────────────

pub struct GpuRenderer {
    pub surface:    wgpu::Surface<'static>,
    surface_config: wgpu::SurfaceConfiguration,
    pipeline:       wgpu::RenderPipeline,
    uniform_buf:    wgpu::Buffer,
    paper_buf:      wgpu::Buffer,
    grid_pitch:     f32,             // stored so resize can recompute PaperParams
    _noise_texture: wgpu::Texture,
    noise_view:     wgpu::TextureView,
    noise_sampler:  wgpu::Sampler,
    bind_group_a:   wgpu::BindGroup,   // render reads buf_a (frame even)
    bind_group_b:   wgpu::BindGroup,   // render reads buf_b (frame odd)
    bgl:            wgpu::BindGroupLayout,
}

impl GpuRenderer {
    pub fn new(
        device:     &wgpu::Device,
        queue:      &wgpu::Queue,
        adapter:    &wgpu::Adapter,
        surface:    wgpu::Surface<'static>,
        grid:       &Grid,
        grid_pitch: f32,
        buf_a:      &wgpu::Buffer,
        buf_b:      &wgpu::Buffer,
    ) -> Self {
        let caps   = surface.get_capabilities(adapter);
        let format = caps.formats.iter()
            .copied()
            .find(|f| !f.is_srgb())
            .unwrap_or(caps.formats[0]);

        let surface_config = wgpu::SurfaceConfiguration {
            usage:        wgpu::TextureUsages::RENDER_ATTACHMENT,
            format,
            width:        grid.canvas_width,
            height:       grid.canvas_height,
            present_mode: wgpu::PresentMode::AutoVsync,
            alpha_mode:   caps.alpha_modes[0],
            view_formats: vec![],
            desired_maximum_frame_latency: 2,
        };
        surface.configure(device, &surface_config);

        let uniform_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label:    Some("render_uniforms"),
            contents: bytes_of(&Uniforms::from_grid(grid)),
            usage:    wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let paper_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label:    Some("paper_params"),
            contents: bytes_of(&PaperParams::for_pitch(grid_pitch)),
            usage:    wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let (noise_texture, noise_view, noise_sampler) = make_noise_texture(device, queue);

        let bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label:   Some("render_bgl"),
            entries: &[
                uniform_bgl_entry(0),
                storage_bgl_entry(1),
                uniform_bgl_entry(2),
                texture_bgl_entry(3),
                sampler_bgl_entry(4),
            ],
        });

        let bind_group_a = make_bind_group(
            device, &bgl, &uniform_buf, buf_a, &paper_buf, &noise_view, &noise_sampler, "rbg_a",
        );
        let bind_group_b = make_bind_group(
            device, &bgl, &uniform_buf, buf_b, &paper_buf, &noise_view, &noise_sampler, "rbg_b",
        );

        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label:  Some("render_shader"),
            source: wgpu::ShaderSource::Wgsl(shaders::RENDER.into()),
        });

        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label:                Some("render_layout"),
            bind_group_layouts:   &[&bgl],
            push_constant_ranges: &[],
        });

        let pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label:  Some("render_pipeline"),
            layout: Some(&layout),
            vertex: wgpu::VertexState {
                module:              &shader,
                entry_point:         "vs_main",
                buffers:             &[],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            },
            fragment: Some(wgpu::FragmentState {
                module:      &shader,
                entry_point: "fs_main",
                targets: &[Some(wgpu::ColorTargetState {
                    format,
                    blend:      None,
                    write_mask: wgpu::ColorWrites::ALL,
                })],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            }),
            primitive:     wgpu::PrimitiveState::default(),
            depth_stencil: None,
            multisample:   wgpu::MultisampleState::default(),
            multiview:     None,
            cache:          None,
        });

        GpuRenderer {
            surface, surface_config, pipeline,
            uniform_buf, paper_buf, grid_pitch,
            _noise_texture: noise_texture, noise_view, noise_sampler,
            bind_group_a, bind_group_b, bgl,
        }
    }

    /// Encodes and presents one render frame.
    pub fn render(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        frame:   u32,
    ) -> Result<wgpu::SurfaceTexture, wgpu::SurfaceError> {
        let output = self.surface.get_current_texture()?;
        let view   = output.texture.create_view(&wgpu::TextureViewDescriptor::default());

        let bg = if frame & 1 == 0 { &self.bind_group_b } else { &self.bind_group_a };

        let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label:             Some("gol_render"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view:           &view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load:  wgpu::LoadOp::Clear(wgpu::Color::BLACK),
                    store: wgpu::StoreOp::Store,
                },
            })],
            depth_stencil_attachment: None,
            timestamp_writes:         None,
            occlusion_query_set:      None,
        });
        pass.set_pipeline(&self.pipeline);
        pass.set_bind_group(0, bg, &[]);
        pass.draw(0..3, 0..1);
        drop(pass);

        Ok(output)
    }

    /// Updates the scroll offset in the render uniform buffer.
    /// scroll_y is the vertical scroll in canvas pixels.
    pub fn set_scroll(&self, queue: &wgpu::Queue, scroll_y: f32) {
        // scroll_y is the last field in Uniforms (offset 7 * 4 = 28 bytes).
        queue.write_buffer(&self.uniform_buf, 28, bytemuck::bytes_of(&scroll_y));
    }

    /// Re-applies the current surface configuration (e.g. after Lost/Outdated error).
    pub fn reconfigure(&mut self, device: &wgpu::Device) {
        self.surface.configure(device, &self.surface_config);
    }

    /// Reconfigures the surface and rebuilds render bind groups for a new grid size.
    pub fn resize(
        &mut self,
        device:     &wgpu::Device,
        queue:      &wgpu::Queue,
        grid:       &Grid,
        grid_pitch: f32,
        buf_a:      &wgpu::Buffer,
        buf_b:      &wgpu::Buffer,
    ) {
        self.grid_pitch = grid_pitch;
        self.surface_config.width  = grid.canvas_width;
        self.surface_config.height = grid.canvas_height;
        self.surface.configure(device, &self.surface_config);
        queue.write_buffer(&self.uniform_buf, 0, bytes_of(&Uniforms::from_grid(grid)));
        queue.write_buffer(&self.paper_buf,   0, bytes_of(&PaperParams::for_pitch(grid_pitch)));
        self.bind_group_a = make_bind_group(
            device, &self.bgl, &self.uniform_buf, buf_a,
            &self.paper_buf, &self.noise_view, &self.noise_sampler, "rbg_a",
        );
        self.bind_group_b = make_bind_group(
            device, &self.bgl, &self.uniform_buf, buf_b,
            &self.paper_buf, &self.noise_view, &self.noise_sampler, "rbg_b",
        );
    }
}

// ── Noise texture ─────────────────────────────────────────────────────────────

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
fn make_noise_texture(
    device: &wgpu::Device,
    queue:  &wgpu::Queue,
) -> (wgpu::Texture, wgpu::TextureView, wgpu::Sampler) {
    const SIZE: u32 = 256;
    const FREQ: f32 = 8.0;  // lattice frequency within the 256×256 tile

    let mut data = vec![0u8; (SIZE * SIZE * 4) as usize];

    for py in 0..SIZE {
        for px in 0..SIZE {
            // UV in [0,1)
            let u = px as f32 / SIZE as f32;
            let v = py as f32 / SIZE as f32;

            // Lattice position
            let t_x = u * FREQ;
            let t_y = v * FREQ;
            let i   = t_x.floor() as i32;
            let j   = t_y.floor() as i32;
            let fx  = t_x - i as f32;
            let fy  = t_y - j as f32;

            // Smoothstep and its derivative
            let sx  = fx * fx * (3.0 - 2.0 * fx);
            let sy  = fy * fy * (3.0 - 2.0 * fy);
            let dsx = 6.0 * fx * (1.0 - fx);
            let dsy = 6.0 * fy * (1.0 - fy);

            // Lattice corner values (tileable: modulo FREQ)
            let v00 = hash2(i,     j    );
            let v10 = hash2(i + 1, j    );
            let v01 = hash2(i,     j + 1);
            let v11 = hash2(i + 1, j + 1);

            // Bilinear blend
            let a    = v00 + (v10 - v00) * sx;
            let b    = v01 + (v11 - v01) * sx;
            let val  = a + (b - a) * sy;

            // Analytic partial derivatives
            let da_x = (v10 - v00) * dsx;
            let db_x = (v11 - v01) * dsx;
            let dn_x = (da_x + (db_x - da_x) * sy) / SIZE as f32 * FREQ;

            let da_y = (v01 - v00) * dsy;
            let db_y = (v11 - v10) * dsy;
            let dn_y = (da_y + (db_y - da_y) * sx) / SIZE as f32 * FREQ;

            let base = ((py * SIZE + px) * 4) as usize;
            data[base    ] = (val.clamp(0.0, 1.0) * 255.0) as u8;
            data[base + 1] = ((dn_x * 0.5 + 0.5).clamp(0.0, 1.0) * 255.0) as u8;
            data[base + 2] = ((dn_y * 0.5 + 0.5).clamp(0.0, 1.0) * 255.0) as u8;
            data[base + 3] = 255;
        }
    }

    let texture = device.create_texture_with_data(
        queue,
        &wgpu::TextureDescriptor {
            label:           Some("paper_noise"),
            size:            wgpu::Extent3d { width: SIZE, height: SIZE, depth_or_array_layers: 1 },
            mip_level_count: 1,
            sample_count:    1,
            dimension:       wgpu::TextureDimension::D2,
            format:          wgpu::TextureFormat::Rgba8Unorm,
            usage:           wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
            view_formats:    &[],
        },
        wgpu::util::TextureDataOrder::LayerMajor,
        &data,
    );

    let view    = texture.create_view(&wgpu::TextureViewDescriptor::default());
    let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
        label:          Some("paper_noise_smp"),
        address_mode_u: wgpu::AddressMode::Repeat,
        address_mode_v: wgpu::AddressMode::Repeat,
        mag_filter:     wgpu::FilterMode::Linear,
        min_filter:     wgpu::FilterMode::Linear,
        ..Default::default()
    });

    (texture, view, sampler)
}

/// Simple integer hash → [0,1]. Tileable at period FREQ via wrapping modulo.
fn hash2(x: i32, y: i32) -> f32 {
    // Wrap to period so the noise tiles cleanly.
    const P: i32 = 8;  // must equal FREQ as i32
    let xi = x.rem_euclid(P);
    let yi = y.rem_euclid(P);
    let n  = xi.wrapping_mul(127) ^ yi.wrapping_mul(311);
    let n  = n.wrapping_mul(
        n.wrapping_mul(n).wrapping_mul(15731).wrapping_add(789221)
    ).wrapping_add(1376312589);
    ((n & 0x0fff_ffff) as f32) / (0x0fff_ffff as f32)
}

// ── BGL helpers ───────────────────────────────────────────────────────────────

fn make_bind_group(
    device:        &wgpu::Device,
    bgl:           &wgpu::BindGroupLayout,
    uniform_buf:   &wgpu::Buffer,
    cell_buf:      &wgpu::Buffer,
    paper_buf:     &wgpu::Buffer,
    noise_view:    &wgpu::TextureView,
    noise_sampler: &wgpu::Sampler,
    label:         &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label:   Some(label),
        layout:  bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: uniform_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: cell_buf.as_entire_binding()    },
            wgpu::BindGroupEntry { binding: 2, resource: paper_buf.as_entire_binding()   },
            wgpu::BindGroupEntry {
                binding:  3,
                resource: wgpu::BindingResource::TextureView(noise_view),
            },
            wgpu::BindGroupEntry {
                binding:  4,
                resource: wgpu::BindingResource::Sampler(noise_sampler),
            },
        ],
    })
}

fn uniform_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT | wgpu::ShaderStages::VERTEX,
        ty: wgpu::BindingType::Buffer {
            ty:                 wgpu::BufferBindingType::Uniform,
            has_dynamic_offset: false,
            min_binding_size:   None,
        },
        count: None,
    }
}

fn storage_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT,
        ty: wgpu::BindingType::Buffer {
            ty:                 wgpu::BufferBindingType::Storage { read_only: true },
            has_dynamic_offset: false,
            min_binding_size:   None,
        },
        count: None,
    }
}

fn texture_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT,
        ty: wgpu::BindingType::Texture {
            sample_type:    wgpu::TextureSampleType::Float { filterable: true },
            view_dimension: wgpu::TextureViewDimension::D2,
            multisampled:   false,
        },
        count: None,
    }
}

fn sampler_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT,
        ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
        count: None,
    }
}
