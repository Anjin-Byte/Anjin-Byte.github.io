use bytemuck::{bytes_of, cast_slice};
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;
use crate::simulation::Simulation;
use crate::decals::{DecalEntryGpu, DecalMetaGpu, MAX_DECALS};
use crate::zones::{ZoneEntryGpu, ZoneMetaGpu, MAX_BLANK_ZONES};

use super::bindings::{
    make_bind_group, sampler_bgl_entry, storage_bgl_entry, texture_bgl_entry, uniform_bgl_entry,
    BindGroupResources,
};
use super::noise::make_noise_texture;
use super::types::{
    HiResGlobalMetaGpu, HiResRegionMetaGpu, MAX_HIRES_REGIONS,
    PaperParams, RenderUniforms, SdfTextMetaGpu,
};

pub struct GpuRenderer {
    pub surface: wgpu::Surface<'static>,
    surface_config: wgpu::SurfaceConfiguration,
    pipeline: wgpu::RenderPipeline,
    uniform_buf: wgpu::Buffer,
    paper_buf: wgpu::Buffer,
    prev_visible_buf: wgpu::Buffer,
    zone_meta_buf: wgpu::Buffer,
    zone_buf: wgpu::Buffer,
    decal_meta_buf: wgpu::Buffer,
    decal_buf: wgpu::Buffer,
    // SDF text placeholders (bindings 10-13)
    sdf_meta_buf: wgpu::Buffer,
    sdf_glyphs_buf: wgpu::Buffer,
    _sdf_atlas_texture: wgpu::Texture,
    sdf_atlas_view: wgpu::TextureView,
    sdf_sampler: wgpu::Sampler,
    // Hi-res region (bindings 14-16)
    hires_meta_buf: wgpu::Buffer,
    hires_regions_buf: wgpu::Buffer,
    hires_cells_buf: wgpu::Buffer,
    hires_cells_prev_buf: wgpu::Buffer,
    grid_pitch: f32,
    _noise_texture: wgpu::Texture,
    noise_view: wgpu::TextureView,
    noise_sampler: wgpu::Sampler,
    bind_group_a: wgpu::BindGroup,
    bind_group_b: wgpu::BindGroup,
    bgl: wgpu::BindGroupLayout,
}

impl GpuRenderer {
    pub fn new(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        adapter: &wgpu::Adapter,
        surface: wgpu::Surface<'static>,
        grid: &Grid,
        grid_pitch: f32,
        buf_a: &wgpu::Buffer,
        buf_b: &wgpu::Buffer,
    ) -> Self {
        let caps = surface.get_capabilities(adapter);
        let format = caps
            .formats
            .iter()
            .copied()
            .find(|f| !f.is_srgb())
            .unwrap_or(caps.formats[0]);

        let surface_config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            format,
            width: grid.canvas_width,
            height: grid.canvas_height,
            present_mode: wgpu::PresentMode::AutoVsync,
            alpha_mode: caps.alpha_modes[0],
            view_formats: vec![],
            desired_maximum_frame_latency: 2,
        };
        surface.configure(device, &surface_config);

        let uniform_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("render_uniforms"),
            contents: bytes_of(&RenderUniforms::from_grid(grid)),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let paper_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("paper_params"),
            contents: bytes_of(&PaperParams::for_pitch(grid_pitch)),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let prev_visible_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("prev_visible_cells"),
            size: grid.buffer_bytes(),
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        let zone_meta_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("blank_zone_meta"),
            contents: bytes_of(&ZoneMetaGpu::default()),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });
        let zone_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("blank_zone_entries"),
            size: (MAX_BLANK_ZONES * std::mem::size_of::<ZoneEntryGpu>()) as u64,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        let decal_meta_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("decal_meta"),
            contents: bytes_of(&DecalMetaGpu::default()),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });
        let decal_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("decal_entries"),
            size: (MAX_DECALS * std::mem::size_of::<DecalEntryGpu>()) as u64,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        // SDF text placeholders (bindings 10-13)
        let sdf_meta_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("sdf_text_meta_placeholder"),
            contents: bytes_of(&SdfTextMetaGpu::default()),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });
        let sdf_glyphs_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("sdf_glyphs_placeholder"),
            size: 4,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        let sdf_atlas_texture = device.create_texture(&wgpu::TextureDescriptor {
            label: Some("sdf_atlas_placeholder"),
            size: wgpu::Extent3d { width: 1, height: 1, depth_or_array_layers: 1 },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::R8Unorm,
            usage: wgpu::TextureUsages::TEXTURE_BINDING,
            view_formats: &[],
        });
        let sdf_atlas_view = sdf_atlas_texture.create_view(&wgpu::TextureViewDescriptor::default());
        let sdf_sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            label: Some("sdf_sampler_placeholder"),
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Linear,
            ..Default::default()
        });

        // Hi-res region placeholders (bindings 14-16)
        let hires_meta_buf = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("hires_meta_placeholder"),
            contents: bytes_of(&HiResGlobalMetaGpu::default()),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });
        let hires_regions_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_regions_placeholder"),
            size: (MAX_HIRES_REGIONS * std::mem::size_of::<HiResRegionMetaGpu>()) as u64,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        let hires_cells_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_cells_placeholder"), size: 4,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        let hires_cells_prev_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_cells_prev_placeholder"), size: 4,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("seed_prev_visible_cells"),
        });
        encoder.copy_buffer_to_buffer(buf_a, 0, &prev_visible_buf, 0, grid.buffer_bytes());
        queue.submit([encoder.finish()]);

        let (noise_texture, noise_view, noise_sampler) = make_noise_texture(device, queue);

        let bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("render_bgl"),
            entries: &[
                uniform_bgl_entry(0),   // RenderUniforms
                storage_bgl_entry(1),   // current_cells
                storage_bgl_entry(2),   // previous_cells
                uniform_bgl_entry(3),   // PaperParams
                texture_bgl_entry(4),   // noise_tex
                sampler_bgl_entry(5),   // noise_smp
                uniform_bgl_entry(6),   // zone_meta
                storage_bgl_entry(7),   // zones
                uniform_bgl_entry(8),   // decal_meta
                storage_bgl_entry(9),   // decals
                // SDF text (reserved)
                uniform_bgl_entry(10),  // sdf_text_meta
                storage_bgl_entry(11),  // sdf_glyphs
                texture_bgl_entry(12),  // sdf_atlas
                sampler_bgl_entry(13),  // sdf_sampler
                // Hi-res regions
                uniform_bgl_entry(14),  // hires_meta
                storage_bgl_entry(15),  // hires_regions
                storage_bgl_entry(16),  // hires_cells
                storage_bgl_entry(17),  // hires_cells_prev
            ],
        });

        let bind_group_a = make_bind_group(device, &bgl, &BindGroupResources {
            uniform_buf: &uniform_buf, current_buf: buf_a, previous_buf: &prev_visible_buf,
            paper_buf: &paper_buf, noise_view: &noise_view, noise_sampler: &noise_sampler,
            zone_meta_buf: &zone_meta_buf, zone_buf: &zone_buf,
            decal_meta_buf: &decal_meta_buf, decal_buf: &decal_buf,
            sdf_meta_buf: &sdf_meta_buf, sdf_glyphs_buf: &sdf_glyphs_buf,
            sdf_atlas_view: &sdf_atlas_view, sdf_sampler: &sdf_sampler,
            hires_meta_buf: &hires_meta_buf, hires_regions_buf: &hires_regions_buf,
            hires_cells_buf: &hires_cells_buf, hires_cells_prev_buf: &hires_cells_prev_buf,
        }, "rbg_a");
        let bind_group_b = make_bind_group(device, &bgl, &BindGroupResources {
            uniform_buf: &uniform_buf, current_buf: buf_b, previous_buf: &prev_visible_buf,
            paper_buf: &paper_buf, noise_view: &noise_view, noise_sampler: &noise_sampler,
            zone_meta_buf: &zone_meta_buf, zone_buf: &zone_buf,
            decal_meta_buf: &decal_meta_buf, decal_buf: &decal_buf,
            sdf_meta_buf: &sdf_meta_buf, sdf_glyphs_buf: &sdf_glyphs_buf,
            sdf_atlas_view: &sdf_atlas_view, sdf_sampler: &sdf_sampler,
            hires_meta_buf: &hires_meta_buf, hires_regions_buf: &hires_regions_buf,
            hires_cells_buf: &hires_cells_buf, hires_cells_prev_buf: &hires_cells_prev_buf,
        }, "rbg_b");

        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("render_shader"),
            source: wgpu::ShaderSource::Wgsl(shaders::RENDER.into()),
        });

        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("render_layout"),
            bind_group_layouts: &[&bgl],
            push_constant_ranges: &[],
        });

        let pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("render_pipeline"),
            layout: Some(&layout),
            vertex: wgpu::VertexState {
                module: &shader,
                entry_point: "vs_main",
                buffers: &[],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            },
            fragment: Some(wgpu::FragmentState {
                module: &shader,
                entry_point: "fs_main",
                targets: &[Some(wgpu::ColorTargetState {
                    format,
                    blend: None,
                    write_mask: wgpu::ColorWrites::ALL,
                })],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            }),
            primitive: wgpu::PrimitiveState::default(),
            depth_stencil: None,
            multisample: wgpu::MultisampleState::default(),
            multiview: None,
            cache: None,
        });

        GpuRenderer {
            surface,
            surface_config,
            pipeline,
            uniform_buf,
            paper_buf,
            prev_visible_buf,
            zone_meta_buf,
            zone_buf,
            decal_meta_buf,
            decal_buf,
            sdf_meta_buf,
            sdf_glyphs_buf,
            _sdf_atlas_texture: sdf_atlas_texture,
            sdf_atlas_view,
            sdf_sampler,
            hires_meta_buf,
            hires_regions_buf,
            hires_cells_buf,
            hires_cells_prev_buf,
            grid_pitch,
            _noise_texture: noise_texture,
            noise_view,
            noise_sampler,
            bind_group_a,
            bind_group_b,
            bgl,
        }
    }

    /// Encodes and presents one render frame.
    pub fn render(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        current_visible_is_a: bool,
    ) -> Result<wgpu::SurfaceTexture, wgpu::SurfaceError> {
        let output = self.surface.get_current_texture()?;
        let view = output
            .texture
            .create_view(&wgpu::TextureViewDescriptor::default());

        let bg = if current_visible_is_a {
            &self.bind_group_a
        } else {
            &self.bind_group_b
        };

        let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("gol_render"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view: &view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Clear(wgpu::Color::BLACK),
                    store: wgpu::StoreOp::Store,
                },
            })],
            depth_stencil_attachment: None,
            timestamp_writes: None,
            occlusion_query_set: None,
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
        // scroll_y is the 8th scalar in RenderUniforms (offset 7 * 4 = 28 bytes).
        queue.write_buffer(&self.uniform_buf, 28, bytemuck::bytes_of(&scroll_y));
    }

    pub fn set_transition(&self, queue: &wgpu::Queue, transition_t: f32) {
        // transition_t follows scroll_y in RenderUniforms (offset 8 * 4 = 32 bytes).
        queue.write_buffer(&self.uniform_buf, 32, bytemuck::bytes_of(&transition_t));
    }

    pub fn capture_previous_state(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        current_visible_buf: &wgpu::Buffer,
        grid: &Grid,
    ) {
        encoder.copy_buffer_to_buffer(
            current_visible_buf,
            0,
            &self.prev_visible_buf,
            0,
            grid.buffer_bytes(),
        );
    }

    /// Re-applies the current surface configuration (e.g. after Lost/Outdated error).
    pub fn reconfigure(&mut self, device: &wgpu::Device) {
        self.surface.configure(device, &self.surface_config);
    }

    /// Reconfigures the surface and rebuilds render bind groups for a new grid size.
    pub fn resize(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        grid: &Grid,
        grid_pitch: f32,
        simulation: &Simulation,
    ) {
        self.grid_pitch = grid_pitch;
        self.surface_config.width = grid.canvas_width;
        self.surface_config.height = grid.canvas_height;
        self.surface.configure(device, &self.surface_config);
        queue.write_buffer(
            &self.uniform_buf,
            0,
            bytes_of(&RenderUniforms::from_grid(grid)),
        );
        queue.write_buffer(
            &self.paper_buf,
            0,
            bytes_of(&PaperParams::for_pitch(grid_pitch)),
        );
        self.prev_visible_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("prev_visible_cells"),
            size: grid.buffer_bytes(),
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        self.rebuild_bind_groups(device, &simulation.buf_a, &simulation.buf_b);
        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("resize_prev_visible_cells"),
        });
        self.capture_previous_state(&mut encoder, simulation.current_visible_buffer(), grid);
        queue.submit([encoder.finish()]);
    }

    pub fn set_zones(&self, queue: &wgpu::Queue, zones: &[ZoneEntryGpu]) {
        let count = zones.len().min(MAX_BLANK_ZONES);
        let meta = ZoneMetaGpu {
            zone_count: count as u32,
            ..ZoneMetaGpu::default()
        };
        queue.write_buffer(&self.zone_meta_buf, 0, bytes_of(&meta));
        if count > 0 {
            queue.write_buffer(&self.zone_buf, 0, cast_slice(&zones[..count]));
        }
    }

    pub fn clear_zones(&self, queue: &wgpu::Queue) {
        self.set_zones(queue, &[]);
    }

    pub fn set_decals(&self, queue: &wgpu::Queue, decals: &[DecalEntryGpu]) {
        let count = decals.len().min(MAX_DECALS);
        let meta = DecalMetaGpu {
            decal_count: count as u32,
            ..DecalMetaGpu::default()
        };
        queue.write_buffer(&self.decal_meta_buf, 0, bytes_of(&meta));
        if count > 0 {
            queue.write_buffer(&self.decal_buf, 0, cast_slice(&decals[..count]));
        }
    }

    pub fn clear_decals(&self, queue: &wgpu::Queue) {
        self.set_decals(queue, &[]);
    }

    pub fn hires_cells_buf(&self) -> &wgpu::Buffer { &self.hires_cells_buf }
    pub fn hires_cells_prev_buf(&self) -> &wgpu::Buffer { &self.hires_cells_prev_buf }

    pub fn set_hires(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        simulation: &Simulation,
        meta: &HiResGlobalMetaGpu,
        regions: &[HiResRegionMetaGpu],
        cells_size: u64,
    ) {
        queue.write_buffer(&self.hires_meta_buf, 0, bytes_of(meta));
        if !regions.is_empty() {
            queue.write_buffer(&self.hires_regions_buf, 0, cast_slice(regions));
        }
        if cells_size > self.hires_cells_buf.size() {
            let mk = |l| device.create_buffer(&wgpu::BufferDescriptor {
                label: Some(l), size: cells_size,
                usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
                mapped_at_creation: false,
            });
            self.hires_cells_buf = mk("hires_cells");
            self.hires_cells_prev_buf = mk("hires_cells_prev");
            self.rebuild_bind_groups(device, &simulation.buf_a, &simulation.buf_b);
        }
    }

    pub fn clear_hires(&self, queue: &wgpu::Queue) {
        queue.write_buffer(&self.hires_meta_buf, 0, bytes_of(&HiResGlobalMetaGpu::default()));
    }

    fn rebuild_bind_groups(
        &mut self,
        device: &wgpu::Device,
        buf_a: &wgpu::Buffer,
        buf_b: &wgpu::Buffer,
    ) {
        let res = BindGroupResources {
            uniform_buf: &self.uniform_buf, current_buf: buf_a,
            previous_buf: &self.prev_visible_buf, paper_buf: &self.paper_buf,
            noise_view: &self.noise_view, noise_sampler: &self.noise_sampler,
            zone_meta_buf: &self.zone_meta_buf, zone_buf: &self.zone_buf,
            decal_meta_buf: &self.decal_meta_buf, decal_buf: &self.decal_buf,
            sdf_meta_buf: &self.sdf_meta_buf, sdf_glyphs_buf: &self.sdf_glyphs_buf,
            sdf_atlas_view: &self.sdf_atlas_view, sdf_sampler: &self.sdf_sampler,
            hires_meta_buf: &self.hires_meta_buf, hires_regions_buf: &self.hires_regions_buf,
            hires_cells_buf: &self.hires_cells_buf, hires_cells_prev_buf: &self.hires_cells_prev_buf,
        };
        self.bind_group_a = make_bind_group(device, &self.bgl, &res, "rbg_a");
        let res_b = BindGroupResources { current_buf: buf_b, ..res };
        self.bind_group_b = make_bind_group(device, &self.bgl, &res_b, "rbg_b");
    }
}
