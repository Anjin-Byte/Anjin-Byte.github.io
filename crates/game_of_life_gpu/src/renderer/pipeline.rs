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
    /// The -srgb sibling of the surface format (or the surface format itself
    /// when no sibling exists).  Frames render through a view of this format
    /// so gamma encode happens in fixed-function hardware on store; the
    /// shader outputs linear and does no manual encode.
    view_format: wgpu::TextureFormat,
    pipeline: wgpu::RenderPipeline,
    // Core resources (group 0).  `paper_buf`, `theme_buf`, `noise_view`,
    // `noise_sampler`, `core_bgl` are referenced by the bind group (which
    // holds them by GPU handle); the Rust fields hold ownership so the
    // resources outlive it.  They're not read directly after construction
    // now that resize doesn't rebuild bind groups, hence the dead_code
    // allows.  Cell state (both planes) lives in the Simulation's packed
    // buffer — the renderer no longer owns any cell buffer.
    uniform_buf: wgpu::Buffer,
    #[allow(dead_code)]
    paper_buf: wgpu::Buffer,
    theme_buf: wgpu::Buffer,
    _noise_texture: wgpu::Texture,
    #[allow(dead_code)]
    noise_view: wgpu::TextureView,
    #[allow(dead_code)]
    noise_sampler: wgpu::Sampler,
    #[allow(dead_code)]
    core_bgl: wgpu::BindGroupLayout,
    core_bg: wgpu::BindGroup,
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
        packed_buf: &wgpu::Buffer,
    ) -> Self {
        let caps = surface.get_capabilities(adapter);
        let format = caps.formats.iter().copied().find(|f| !f.is_srgb()).unwrap_or(caps.formats[0]);
        // Render through the format's -srgb sibling view so gamma encode is
        // fixed-function hardware, not shader ALU.  The surface format itself
        // must stay non-sRGB (WebGPU canvas configuration only accepts unorm
        // formats); the sibling is declared via `view_formats`.  When the
        // format has no sibling (add_srgb_suffix returns it unchanged) the
        // view list stays empty and rendering targets the surface directly.
        let view_format = format.add_srgb_suffix();
        let view_formats = if view_format != format { vec![view_format] } else { vec![] };
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
            view_formats, desired_maximum_frame_latency: 2,
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
        let (noise_texture, noise_view, noise_sampler) = make_noise_texture(device, queue);

        // Overlay resources
        let zone_meta_buf = mk_uniform("blank_zone_meta", bytes_of(&ZoneMetaGpu::default()));
        let zone_buf = mk_storage("blank_zone_entries", (MAX_BLANK_ZONES * std::mem::size_of::<ZoneEntryGpu>()) as u64);

        // Create bind group layouts
        let core_bgl = core_bind_group_layout(device);
        let overlay_bgl = overlay_bind_group_layout(device);

        // One core bind group: the packed buffer carries both cell-state
        // planes, so nothing in group 0 depends on the ping-pong phase any
        // more (the a/b bind-group pair and the prev-visible snapshot buffer
        // are gone with it).
        let core_bg = make_core_bind_group(device, &core_bgl, &CoreBindGroupResources {
            uniform_buf: &uniform_buf, packed_buf,
            paper_buf: &paper_buf, noise_view: &noise_view, noise_sampler: &noise_sampler,
            theme_buf: &theme_buf,
        }, "core_bg");

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
                    // Matches the -srgb view the render pass targets, so the
                    // shader's linear output is hardware-encoded on store.
                    format: view_format,
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
            surface, surface_config, view_format, pipeline,
            uniform_buf, paper_buf, theme_buf,
            _noise_texture: noise_texture, noise_view, noise_sampler,
            core_bgl, core_bg,
            zone_meta_buf, zone_buf,
            overlay_bg,
            grid_pitch,
        }
    }

    pub fn render(
        &self,
        encoder: &mut wgpu::CommandEncoder,
        timestamp_query_set: Option<&wgpu::QuerySet>,
    ) -> Result<wgpu::SurfaceTexture, wgpu::SurfaceError> {
        let output = self.surface.get_current_texture()?;
        // View through the -srgb sibling format: the store performs the gamma
        // encode the shader used to do manually with pow().
        let view = output.texture.create_view(&wgpu::TextureViewDescriptor {
            format: Some(self.view_format),
            ..Default::default()
        });

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
        pass.set_bind_group(0, &self.core_bg, &[]);
        pass.set_bind_group(1, &self.overlay_bg, &[]);
        pass.draw(0..3, 0..1);
        drop(pass);

        Ok(output)
    }

    pub fn set_scroll(&self, queue: &wgpu::Queue, scroll_y: f32) {
        queue.write_buffer(&self.uniform_buf, 28, bytemuck::bytes_of(&scroll_y));
    }

    /// Set the full 2-D camera offset (canvas px). `scroll_y` (offset 28) and
    /// `scroll_x` (offset 56) are non-adjacent — the fields between them hold
    /// transition/viewport/init-fade state — so this is two scalar writes, not
    /// one slice. The shader applies them as `world = frag + scroll`.
    pub fn set_camera(&self, queue: &wgpu::Queue, scroll_x: f32, scroll_y: f32) {
        queue.write_buffer(&self.uniform_buf, 28, bytemuck::bytes_of(&scroll_y));
        queue.write_buffer(&self.uniform_buf, 56, bytemuck::bytes_of(&scroll_x));
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

    // (capture_previous_state is gone: the tick compute shader now writes the
    // previous plane into the Simulation's packed buffer itself, so there is
    // no pre-tick snapshot copy — one fewer encoder + submit per tick.)

    pub fn reconfigure(&mut self, device: &wgpu::Device) {
        self.surface.configure(device, &self.surface_config);
    }

    /// Update the WebGPU surface and viewport uniforms to match the new
    /// canvas dimensions.  The world-sized buffers (the simulation's
    /// ping-pong + packed planes) are unchanged — only the surface
    /// configuration and the viewport-derived uniforms change.
    pub fn resize(&mut self, device: &wgpu::Device, queue: &wgpu::Queue, grid: &Grid) {
        self.surface_config.width = grid.canvas_width;
        self.surface_config.height = grid.canvas_height;
        self.surface.configure(device, &self.surface_config);
        // Write ONLY the geometry-derived fields, preserving the dynamic state
        // that set_camera()/set_init_fade()/set_scroll() wrote at fixed offsets.
        // Rewriting the whole struct here reset init_fade_t to 0 (filled cells
        // vanished) and scroll_x/scroll_y to 0 (the grid jumped to the origin)
        // on every resize. Geometry occupies [0, 28) (…canvas_height) and
        // [36, 52) (the viewport fields); the dynamic fields sit at 28/32/52/56.
        // See the RenderUniforms layout + offset asserts in types.rs.
        let u = RenderUniforms::from_grid(grid);
        let bytes = bytes_of(&u);
        queue.write_buffer(&self.uniform_buf, 0, &bytes[0..28]);
        queue.write_buffer(&self.uniform_buf, 36, &bytes[36..52]);
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
