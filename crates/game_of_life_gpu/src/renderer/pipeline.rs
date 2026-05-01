use bytemuck::{bytes_of, cast_slice};
use wgpu::util::DeviceExt;

use crate::grid::Grid;
use crate::shaders;
use crate::zones::{ZoneEntryGpu, ZoneMetaGpu, MAX_BLANK_ZONES};

use super::bindings::{
    core_bind_group_layout, overlay_bind_group_layout,
    make_core_bind_group, make_overlay_bind_group,
    CoreBindGroupResources, OverlayBindGroupResources,
};
use super::noise::make_noise_texture;
use super::types::{PaperParams, RenderUniforms, ThemeParams};

pub struct GpuRenderer {
    pub surface: wgpu::Surface<'static>,
    surface_config: wgpu::SurfaceConfiguration,
    pipeline: wgpu::RenderPipeline,
    // Core resources (group 0).  `paper_buf`, `theme_buf`, `noise_view`,
    // `noise_sampler`, `core_bgl`, `prev_visible_buf` are referenced by
    // the bind groups (which hold them by GPU handle); the Rust fields
    // hold ownership so the resources outlive the bind groups.  They're
    // not read directly after construction now that resize doesn't
    // rebuild bind groups, hence the dead_code allows.
    uniform_buf: wgpu::Buffer,
    #[allow(dead_code)]
    paper_buf: wgpu::Buffer,
    theme_buf: wgpu::Buffer,
    #[allow(dead_code)]
    prev_visible_buf: wgpu::Buffer,
    _noise_texture: wgpu::Texture,
    #[allow(dead_code)]
    noise_view: wgpu::TextureView,
    #[allow(dead_code)]
    noise_sampler: wgpu::Sampler,
    #[allow(dead_code)]
    core_bgl: wgpu::BindGroupLayout,
    core_bg_a: wgpu::BindGroup,
    core_bg_b: wgpu::BindGroup,
    // Overlay resources (group 1)
    zone_meta_buf: wgpu::Buffer,
    zone_buf: wgpu::Buffer,
    overlay_bg: wgpu::BindGroup,
    #[allow(dead_code)]
    grid_pitch: f32,
}

impl GpuRenderer {
    #[allow(clippy::too_many_arguments)]
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
        // Prefer PreMultiplied so the canvas composites over the themed page
        // background.  With Opaque (Chrome's default first-listed mode), the
        // freshly-allocated backing texture flashes black during resize before
        // the next frame paints — masking the html background underneath.
        // The shader emits alpha=1, so PreMultiplied is visually identical to
        // Opaque for fully-painted frames.
        let alpha_mode = caps.alpha_modes.iter().copied()
            .find(|m| *m == wgpu::CompositeAlphaMode::PreMultiplied)
            .unwrap_or(caps.alpha_modes[0]);
        let surface_config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT, format,
            width: grid.canvas_width, height: grid.canvas_height,
            present_mode: wgpu::PresentMode::AutoVsync, alpha_mode,
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
        let theme_buf = mk_uniform("theme_params", bytes_of(&ThemeParams::light()));
        let prev_visible_buf = mk_storage("prev_visible_cells", grid.buffer_bytes());
        let (noise_texture, noise_view, noise_sampler) = make_noise_texture(device, queue);

        // Overlay resources
        let zone_meta_buf = mk_uniform("blank_zone_meta", bytes_of(&ZoneMetaGpu::default()));
        let zone_buf = mk_storage("blank_zone_entries", (MAX_BLANK_ZONES * std::mem::size_of::<ZoneEntryGpu>()) as u64);

        // Seed prev_visible from buf_a
        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("seed_prev_visible_cells"),
        });
        encoder.copy_buffer_to_buffer(buf_a, 0, &prev_visible_buf, 0, grid.buffer_bytes());
        queue.submit([encoder.finish()]);

        // Create bind group layouts
        let core_bgl = core_bind_group_layout(device);
        let overlay_bgl = overlay_bind_group_layout(device);

        // Create bind groups
        let core_bg_a = make_core_bind_group(device, &core_bgl, &CoreBindGroupResources {
            uniform_buf: &uniform_buf, current_buf: buf_a, previous_buf: &prev_visible_buf,
            paper_buf: &paper_buf, noise_view: &noise_view, noise_sampler: &noise_sampler,
            theme_buf: &theme_buf,
        }, "core_bg_a");
        let core_bg_b = make_core_bind_group(device, &core_bgl, &CoreBindGroupResources {
            uniform_buf: &uniform_buf, current_buf: buf_b, previous_buf: &prev_visible_buf,
            paper_buf: &paper_buf, noise_view: &noise_view, noise_sampler: &noise_sampler,
            theme_buf: &theme_buf,
        }, "core_bg_b");

        let overlay_bg = make_overlay_bind_group(device, &overlay_bgl, &OverlayBindGroupResources {
            zone_meta_buf: &zone_meta_buf, zone_buf: &zone_buf,
        }, "overlay_bg");

        // Pipeline uses 2 bind group layouts (core + overlay)
        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("render_shader"),
            source: wgpu::ShaderSource::Wgsl(shaders::RENDER.into()),
        });

        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("render_layout"),
            bind_group_layouts: &[&core_bgl, &overlay_bgl],
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
            uniform_buf, paper_buf, theme_buf, prev_visible_buf,
            _noise_texture: noise_texture, noise_view, noise_sampler,
            core_bgl, core_bg_a, core_bg_b,
            zone_meta_buf, zone_buf,
            overlay_bg,
            grid_pitch,
        }
    }

    pub fn render(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        current_visible_is_a: bool,
        timestamp_query_set: Option<&wgpu::QuerySet>,
    ) -> Result<wgpu::SurfaceTexture, wgpu::SurfaceError> {
        let output = self.surface.get_current_texture()?;
        let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());

        let core_bg = if current_visible_is_a { &self.core_bg_a } else { &self.core_bg_b };

        let timestamp_writes = timestamp_query_set.map(|qs| {
            wgpu::RenderPassTimestampWrites {
                query_set: qs,
                beginning_of_pass_write_index: Some(crate::perf::SLOT_RENDER_BEGIN),
                end_of_pass_write_index: Some(crate::perf::SLOT_RENDER_END),
            }
        });

        let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("gol_render"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view: &view,
                resolve_target: None,
                ops: wgpu::Operations {
                    // Transparent clear so any unwritten pixel composites over
                    // the themed html background (via PreMultiplied alpha mode
                    // configured above).  The shader fills every pixel with
                    // alpha=1, so the visible-frame result is unchanged; this
                    // only matters in the gap between OffscreenCanvas resize
                    // and the next presented frame, where opaque-black would
                    // otherwise flash through.
                    load: wgpu::LoadOp::Clear(wgpu::Color::TRANSPARENT),
                    store: wgpu::StoreOp::Store,
                },
            })],
            depth_stencil_attachment: None,
            timestamp_writes,
            occlusion_query_set: None,
        });
        pass.set_pipeline(&self.pipeline);
        pass.set_bind_group(0, core_bg, &[]);
        pass.set_bind_group(1, &self.overlay_bg, &[]);
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

    /// Update the per-pixel cell-ink fade multiplier.  The render shader
    /// multiplies the cell `coverage` term by this, so 0.0 hides cells
    /// entirely while paper / grid stay visible, and 1.0 is the normal
    /// rendered state.  Driven by the worker as a one-shot ramp on first
    /// paint; see backgroundRenderer.ts.
    pub fn set_init_fade(&self, queue: &wgpu::Queue, t: f32) {
        queue.write_buffer(&self.uniform_buf, 52, bytemuck::bytes_of(&t));
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

    /// Update the WebGPU surface and viewport uniforms to match the new
    /// canvas dimensions.  The world-sized buffers (`prev_visible_buf`,
    /// the simulation's ping-pong) are unchanged — only the surface
    /// configuration and the viewport-derived uniforms change.
    pub fn resize(&mut self, device: &wgpu::Device, queue: &wgpu::Queue, grid: &Grid) {
        self.surface_config.width = grid.canvas_width;
        self.surface_config.height = grid.canvas_height;
        self.surface.configure(device, &self.surface_config);
        queue.write_buffer(&self.uniform_buf, 0, bytes_of(&RenderUniforms::from_grid(grid)));
        // PaperParams pitch is constant now (CELL_PX), so no per-resize update.
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

    pub fn set_theme(&self, queue: &wgpu::Queue, theme: &ThemeParams) {
        queue.write_buffer(&self.theme_buf, 0, bytes_of(theme));
    }

    // (rebuild_core_bind_groups removed: previously called only from
    // resize() to swap in newly-allocated cell buffers.  After the
    // world-decouple, cell buffers are allocated once at startup and
    // never reallocated, so the bind groups built in `new()` stay valid
    // forever.)
}
