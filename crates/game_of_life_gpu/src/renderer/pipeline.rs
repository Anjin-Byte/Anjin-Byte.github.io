use bytemuck::{bytes_of, cast_slice};
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;
use crate::simulation::Simulation;
use crate::decals::{DecalEntryGpu, DecalMetaGpu, MAX_DECALS};
use crate::zones::{ZoneEntryGpu, ZoneMetaGpu, MAX_BLANK_ZONES};

use super::bindings::{
    core_bind_group_layout, overlay_bind_group_layout, hires_bind_group_layout,
    make_core_bind_group, make_overlay_bind_group, make_hires_bind_group,
    CoreBindGroupResources, OverlayBindGroupResources, HiResBindGroupResources,
};
use super::noise::make_noise_texture;
use super::types::{
    HiResGlobalMetaGpu, HiResRegionMetaGpu, MAX_HIRES_REGIONS,
    PaperParams, RenderUniforms, SdfTextMetaGpu,
    TextGlyphGpu, MAX_TEXT_GLYPHS,
};

pub struct GpuRenderer {
    pub surface: wgpu::Surface<'static>,
    surface_config: wgpu::SurfaceConfiguration,
    pipeline: wgpu::RenderPipeline,
    // Core resources (group 0)
    uniform_buf: wgpu::Buffer,
    paper_buf: wgpu::Buffer,
    prev_visible_buf: wgpu::Buffer,
    _noise_texture: wgpu::Texture,
    noise_view: wgpu::TextureView,
    noise_sampler: wgpu::Sampler,
    core_bgl: wgpu::BindGroupLayout,
    core_bg_a: wgpu::BindGroup,
    core_bg_b: wgpu::BindGroup,
    // Overlay resources (group 1)
    zone_meta_buf: wgpu::Buffer,
    zone_buf: wgpu::Buffer,
    decal_meta_buf: wgpu::Buffer,
    decal_buf: wgpu::Buffer,
    sdf_meta_buf: wgpu::Buffer,
    sdf_glyphs_buf: wgpu::Buffer,
    _sdf_atlas_texture: wgpu::Texture,
    sdf_atlas_view: wgpu::TextureView,
    sdf_sampler: wgpu::Sampler,
    overlay_bgl: wgpu::BindGroupLayout,
    overlay_bg: wgpu::BindGroup,
    // Hi-res resources (group 2)
    hires_meta_buf: wgpu::Buffer,
    hires_regions_buf: wgpu::Buffer,
    hires_cells_buf: wgpu::Buffer,
    hires_cells_prev_buf: wgpu::Buffer,
    hires_bgl: wgpu::BindGroupLayout,
    hires_bg: wgpu::BindGroup,
    grid_pitch: f32,
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
        let format = caps.formats.iter().copied().find(|f| !f.is_srgb()).unwrap_or(caps.formats[0]);
        let surface_config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT, format,
            width: grid.canvas_width, height: grid.canvas_height,
            present_mode: wgpu::PresentMode::AutoVsync, alpha_mode: caps.alpha_modes[0],
            view_formats: vec![], desired_maximum_frame_latency: 2,
        };
        surface.configure(device, &surface_config);

        let mk_uniform = |l, c: &[u8]| device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some(l), contents: c, usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });
        let mk_storage = |l, sz| device.create_buffer(&wgpu::BufferDescriptor {
            label: Some(l), size: sz, usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        // Core resources
        let uniform_buf = mk_uniform("render_uniforms", bytes_of(&RenderUniforms::from_grid(grid)));
        let paper_buf = mk_uniform("paper_params", bytes_of(&PaperParams::for_pitch(grid_pitch)));
        let prev_visible_buf = mk_storage("prev_visible_cells", grid.buffer_bytes());
        let (noise_texture, noise_view, noise_sampler) = make_noise_texture(device, queue);

        // Overlay resources
        let zone_meta_buf = mk_uniform("blank_zone_meta", bytes_of(&ZoneMetaGpu::default()));
        let zone_buf = mk_storage("blank_zone_entries", (MAX_BLANK_ZONES * std::mem::size_of::<ZoneEntryGpu>()) as u64);
        let decal_meta_buf = mk_uniform("decal_meta", bytes_of(&DecalMetaGpu::default()));
        let decal_buf = mk_storage("decal_entries", (MAX_DECALS * std::mem::size_of::<DecalEntryGpu>()) as u64);
        let sdf_meta_buf = mk_uniform("sdf_text_meta", bytes_of(&SdfTextMetaGpu::default()));
        let sdf_glyphs_buf = mk_storage("sdf_glyphs", (MAX_TEXT_GLYPHS * std::mem::size_of::<TextGlyphGpu>()) as u64);
        let sdf_atlas_texture = device.create_texture(&wgpu::TextureDescriptor {
            label: Some("sdf_atlas"),
            size: wgpu::Extent3d { width: 1, height: 1, depth_or_array_layers: 1 },
            mip_level_count: 1, sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::R8Unorm,
            usage: wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
            view_formats: &[],
        });
        let sdf_atlas_view = sdf_atlas_texture.create_view(&wgpu::TextureViewDescriptor::default());
        let sdf_sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            label: Some("sdf_sampler"),
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Linear,
            ..Default::default()
        });

        // Hi-res resources
        let hires_meta_buf = mk_uniform("hires_meta", bytes_of(&HiResGlobalMetaGpu::default()));
        let hires_regions_buf = mk_storage("hires_regions", (MAX_HIRES_REGIONS * std::mem::size_of::<HiResRegionMetaGpu>()) as u64);
        let hires_cells_buf = mk_storage("hires_cells", 4);
        let hires_cells_prev_buf = mk_storage("hires_cells_prev", 4);

        // Seed prev_visible from buf_a
        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("seed_prev_visible_cells"),
        });
        encoder.copy_buffer_to_buffer(buf_a, 0, &prev_visible_buf, 0, grid.buffer_bytes());
        queue.submit([encoder.finish()]);

        // Create bind group layouts
        let core_bgl = core_bind_group_layout(device);
        let overlay_bgl = overlay_bind_group_layout(device);
        let hires_bgl = hires_bind_group_layout(device);

        // Create bind groups
        let core_bg_a = make_core_bind_group(device, &core_bgl, &CoreBindGroupResources {
            uniform_buf: &uniform_buf, current_buf: buf_a, previous_buf: &prev_visible_buf,
            paper_buf: &paper_buf, noise_view: &noise_view, noise_sampler: &noise_sampler,
        }, "core_bg_a");
        let core_bg_b = make_core_bind_group(device, &core_bgl, &CoreBindGroupResources {
            uniform_buf: &uniform_buf, current_buf: buf_b, previous_buf: &prev_visible_buf,
            paper_buf: &paper_buf, noise_view: &noise_view, noise_sampler: &noise_sampler,
        }, "core_bg_b");

        let overlay_bg = make_overlay_bind_group(device, &overlay_bgl, &OverlayBindGroupResources {
            zone_meta_buf: &zone_meta_buf, zone_buf: &zone_buf,
            decal_meta_buf: &decal_meta_buf, decal_buf: &decal_buf,
            sdf_meta_buf: &sdf_meta_buf, sdf_glyphs_buf: &sdf_glyphs_buf,
            sdf_atlas_view: &sdf_atlas_view, sdf_sampler: &sdf_sampler,
        }, "overlay_bg");

        let hires_bg = make_hires_bind_group(device, &hires_bgl, &HiResBindGroupResources {
            hires_meta_buf: &hires_meta_buf, hires_regions_buf: &hires_regions_buf,
            hires_cells_buf: &hires_cells_buf, hires_cells_prev_buf: &hires_cells_prev_buf,
        }, "hires_bg");

        // Pipeline uses all 3 bind group layouts
        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("render_shader"),
            source: wgpu::ShaderSource::Wgsl(shaders::RENDER.into()),
        });

        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("render_layout"),
            bind_group_layouts: &[&core_bgl, &overlay_bgl, &hires_bgl],
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
            surface, surface_config, pipeline,
            uniform_buf, paper_buf, prev_visible_buf,
            _noise_texture: noise_texture, noise_view, noise_sampler,
            core_bgl, core_bg_a, core_bg_b,
            zone_meta_buf, zone_buf,
            decal_meta_buf, decal_buf,
            sdf_meta_buf, sdf_glyphs_buf,
            _sdf_atlas_texture: sdf_atlas_texture, sdf_atlas_view, sdf_sampler,
            overlay_bgl, overlay_bg,
            hires_meta_buf, hires_regions_buf,
            hires_cells_buf, hires_cells_prev_buf,
            hires_bgl, hires_bg,
            grid_pitch,
        }
    }

    pub fn render(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        current_visible_is_a: bool,
    ) -> Result<wgpu::SurfaceTexture, wgpu::SurfaceError> {
        let output = self.surface.get_current_texture()?;
        let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());

        let core_bg = if current_visible_is_a { &self.core_bg_a } else { &self.core_bg_b };

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
        pass.set_bind_group(0, core_bg, &[]);
        pass.set_bind_group(1, &self.overlay_bg, &[]);
        pass.set_bind_group(2, &self.hires_bg, &[]);
        pass.draw(0..3, 0..1);
        drop(pass);

        Ok(output)
    }

    pub fn set_scroll(&self, queue: &wgpu::Queue, scroll_y: f32) {
        queue.write_buffer(&self.uniform_buf, 28, bytemuck::bytes_of(&scroll_y));
    }

    pub fn set_transition(&self, queue: &wgpu::Queue, transition_t: f32) {
        queue.write_buffer(&self.uniform_buf, 32, bytemuck::bytes_of(&transition_t));
    }

    pub fn capture_previous_state(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        current_visible_buf: &wgpu::Buffer,
        grid: &Grid,
    ) {
        encoder.copy_buffer_to_buffer(
            current_visible_buf, 0,
            &self.prev_visible_buf, 0,
            grid.buffer_bytes(),
        );
    }

    pub fn reconfigure(&mut self, device: &wgpu::Device) {
        self.surface.configure(device, &self.surface_config);
    }

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
        queue.write_buffer(&self.uniform_buf, 0, bytes_of(&RenderUniforms::from_grid(grid)));
        queue.write_buffer(&self.paper_buf, 0, bytes_of(&PaperParams::for_pitch(grid_pitch)));
        self.prev_visible_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("prev_visible_cells"),
            size: grid.buffer_bytes(),
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        self.rebuild_core_bind_groups(device, &simulation.buf_a, &simulation.buf_b);
        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("resize_prev_visible_cells"),
        });
        self.capture_previous_state(&mut encoder, simulation.current_visible_buffer(), grid);
        queue.submit([encoder.finish()]);
    }

    pub fn set_zones(&self, queue: &wgpu::Queue, zones: &[ZoneEntryGpu]) {
        let count = zones.len().min(MAX_BLANK_ZONES);
        let meta = ZoneMetaGpu { zone_count: count as u32, ..ZoneMetaGpu::default() };
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
        let meta = DecalMetaGpu { decal_count: count as u32, ..DecalMetaGpu::default() };
        queue.write_buffer(&self.decal_meta_buf, 0, bytes_of(&meta));
        if count > 0 {
            queue.write_buffer(&self.decal_buf, 0, cast_slice(&decals[..count]));
        }
    }

    pub fn clear_decals(&self, queue: &wgpu::Queue) {
        self.set_decals(queue, &[]);
    }

    pub fn set_text_glyphs(&self, queue: &wgpu::Queue, glyphs: &[TextGlyphGpu]) {
        let count = glyphs.len().min(MAX_TEXT_GLYPHS);
        let meta = SdfTextMetaGpu { glyph_count: count as u32, ..Default::default() };
        queue.write_buffer(&self.sdf_meta_buf, 0, bytes_of(&meta));
        if count > 0 {
            queue.write_buffer(&self.sdf_glyphs_buf, 0, cast_slice(&glyphs[..count]));
        }
    }

    pub fn clear_text_glyphs(&self, queue: &wgpu::Queue) {
        self.set_text_glyphs(queue, &[]);
    }

    pub fn upload_text_atlas(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        data: &[u8],
        width: u32,
        height: u32,
    ) {
        let tex = device.create_texture(&wgpu::TextureDescriptor {
            label: Some("sdf_atlas"),
            size: wgpu::Extent3d { width, height, depth_or_array_layers: 1 },
            mip_level_count: 1, sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::R8Unorm,
            usage: wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
            view_formats: &[],
        });
        queue.write_texture(
            wgpu::ImageCopyTexture {
                texture: &tex, mip_level: 0,
                origin: wgpu::Origin3d::ZERO, aspect: wgpu::TextureAspect::All,
            },
            data,
            wgpu::ImageDataLayout {
                offset: 0, bytes_per_row: Some(width), rows_per_image: Some(height),
            },
            wgpu::Extent3d { width, height, depth_or_array_layers: 1 },
        );
        self._sdf_atlas_texture = tex;
        self.sdf_atlas_view = self._sdf_atlas_texture.create_view(&wgpu::TextureViewDescriptor::default());
        // Only rebuild overlay bind group — core and hires are unaffected
        self.rebuild_overlay_bind_group(device);
    }

    pub fn hires_cells_buf(&self) -> &wgpu::Buffer { &self.hires_cells_buf }
    pub fn hires_cells_prev_buf(&self) -> &wgpu::Buffer { &self.hires_cells_prev_buf }

    pub fn set_hires(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
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
            // Only rebuild hires bind group — core and overlay are unaffected
            self.rebuild_hires_bind_group(device);
        }
    }

    pub fn clear_hires(&self, queue: &wgpu::Queue) {
        queue.write_buffer(&self.hires_meta_buf, 0, bytes_of(&HiResGlobalMetaGpu::default()));
    }

    // ── Group-specific bind group rebuilds ──────────────────────────────────

    fn rebuild_core_bind_groups(
        &mut self,
        device: &wgpu::Device,
        buf_a: &wgpu::Buffer,
        buf_b: &wgpu::Buffer,
    ) {
        let shared = CoreBindGroupResources {
            uniform_buf: &self.uniform_buf, current_buf: buf_a,
            previous_buf: &self.prev_visible_buf, paper_buf: &self.paper_buf,
            noise_view: &self.noise_view, noise_sampler: &self.noise_sampler,
        };
        self.core_bg_a = make_core_bind_group(device, &self.core_bgl, &shared, "core_bg_a");
        let res_b = CoreBindGroupResources { current_buf: buf_b, ..shared };
        self.core_bg_b = make_core_bind_group(device, &self.core_bgl, &res_b, "core_bg_b");
    }

    fn rebuild_overlay_bind_group(&mut self, device: &wgpu::Device) {
        self.overlay_bg = make_overlay_bind_group(device, &self.overlay_bgl, &OverlayBindGroupResources {
            zone_meta_buf: &self.zone_meta_buf, zone_buf: &self.zone_buf,
            decal_meta_buf: &self.decal_meta_buf, decal_buf: &self.decal_buf,
            sdf_meta_buf: &self.sdf_meta_buf, sdf_glyphs_buf: &self.sdf_glyphs_buf,
            sdf_atlas_view: &self.sdf_atlas_view, sdf_sampler: &self.sdf_sampler,
        }, "overlay_bg");
    }

    fn rebuild_hires_bind_group(&mut self, device: &wgpu::Device) {
        self.hires_bg = make_hires_bind_group(device, &self.hires_bgl, &HiResBindGroupResources {
            hires_meta_buf: &self.hires_meta_buf, hires_regions_buf: &self.hires_regions_buf,
            hires_cells_buf: &self.hires_cells_buf, hires_cells_prev_buf: &self.hires_cells_prev_buf,
        }, "hires_bg");
    }
}
