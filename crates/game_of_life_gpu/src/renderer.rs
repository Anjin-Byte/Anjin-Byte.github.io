use bytemuck::bytes_of;
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;
use crate::simulation::Uniforms;

pub struct GpuRenderer {
    pub surface:        wgpu::Surface<'static>,
    surface_config:     wgpu::SurfaceConfiguration,
    pipeline:           wgpu::RenderPipeline,
    uniform_buf:        wgpu::Buffer,
    bind_group_a:       wgpu::BindGroup,   // render reads buf_a (frame even)
    bind_group_b:       wgpu::BindGroup,   // render reads buf_b (frame odd)
    bgl:                wgpu::BindGroupLayout,
}

impl GpuRenderer {
    pub fn new(
        device:    &wgpu::Device,
        adapter:   &wgpu::Adapter,
        surface:   wgpu::Surface<'static>,
        grid:      &Grid,
        buf_a:     &wgpu::Buffer,
        buf_b:     &wgpu::Buffer,
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

        let bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label:   Some("render_bgl"),
            entries: &[
                uniform_bgl_entry(0),
                storage_bgl_entry(1),
            ],
        });

        let bind_group_a = make_bind_group(device, &bgl, &uniform_buf, buf_a, "rbg_a");
        let bind_group_b = make_bind_group(device, &bgl, &uniform_buf, buf_b, "rbg_b");

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
                module:             &shader,
                entry_point:        "vs_main",
                buffers:            &[],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            },
            fragment: Some(wgpu::FragmentState {
                module:             &shader,
                entry_point:        "fs_main",
                targets: &[Some(wgpu::ColorTargetState {
                    format,
                    blend:      None,
                    write_mask: wgpu::ColorWrites::ALL,
                })],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            }),
            primitive:    wgpu::PrimitiveState::default(),
            depth_stencil: None,
            multisample:  wgpu::MultisampleState::default(),
            multiview:    None,
            cache:        None,
        });

        GpuRenderer { surface, surface_config, pipeline, uniform_buf, bind_group_a, bind_group_b, bgl }
    }

    /// Encodes and presents one render frame. Returns the surface texture (must be dropped after present).
    pub fn render(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        frame:   u32,
    ) -> Result<wgpu::SurfaceTexture, wgpu::SurfaceError> {
        let output = self.surface.get_current_texture()?;
        let view   = output.texture.create_view(&wgpu::TextureViewDescriptor::default());

        let bg = if frame & 1 == 0 { &self.bind_group_b } else { &self.bind_group_a };

        let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label:                    Some("gol_render"),
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

    /// Re-applies the current surface configuration (e.g. after a Lost/Outdated error).
    pub fn reconfigure(&mut self, device: &wgpu::Device) {
        self.surface.configure(device, &self.surface_config);
    }

    /// Reconfigures the surface and rebuilds render bind groups for a new grid size.
    pub fn resize(
        &mut self,
        device: &wgpu::Device,
        queue:  &wgpu::Queue,
        grid:   &Grid,
        buf_a:  &wgpu::Buffer,
        buf_b:  &wgpu::Buffer,
    ) {
        self.surface_config.width  = grid.canvas_width;
        self.surface_config.height = grid.canvas_height;
        self.surface.configure(device, &self.surface_config);
        queue.write_buffer(&self.uniform_buf, 0, bytes_of(&Uniforms::from_grid(grid)));
        self.bind_group_a = make_bind_group(device, &self.bgl, &self.uniform_buf, buf_a, "rbg_a");
        self.bind_group_b = make_bind_group(device, &self.bgl, &self.uniform_buf, buf_b, "rbg_b");
    }
}

// ── helpers ──────────────────────────────────────────────────────────────────

fn make_bind_group(
    device:      &wgpu::Device,
    bgl:         &wgpu::BindGroupLayout,
    uniform_buf: &wgpu::Buffer,
    cell_buf:    &wgpu::Buffer,
    label:       &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label:   Some(label),
        layout:  bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: uniform_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: cell_buf.as_entire_binding()    },
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
