//! WebGL2 fallback renderer (GPGPU ping-pong).
//!
//! WebGL2 has no compute shaders, no storage buffers, and no shader atomics,
//! so the compute-based `GpuGameOfLife` cannot run on it (see
//! docs/canvas-island-audit-2026-07.md and the WGSL in simulation.rs). This is
//! a SEPARATE renderer for browsers that expose WebGL2 but not WebGPU: the
//! simulation runs as a fragment-shader ping-pong between two R8Uint cell
//! textures (`gol_tick.wgsl`), and the look is a texture-reading variant of
//! render.wgsl.
//!
//! STAGE 2: the ping-pong sim + a minimal debug render (paper/ink from the
//! current cell texture) to make the simulation visible. STAGE 3 swaps in the
//! full paper/ink/grid shader. The JS-facing method surface mirrors the subset
//! of `GpuGameOfLife` the worker drives.

use bytemuck::{Pod, Zeroable};
use game_of_life_core::{recommended_initial_count, seed_world_with_methuselahs, World};
use rand::SeedableRng;
use rand_xoshiro::Xoshiro256StarStar;
use wasm_bindgen::prelude::*;

use crate::shaders;

/// World dimensions in cells — mirror WORLD_COLS/ROWS in gpu.rs. Both are ≤ the
/// WebGL2 min texture size (2048), so the cell textures always fit.
const WORLD_COLS: u32 = 1024;
const WORLD_ROWS: u32 = 1024;
/// Device px per cell — mirrors CELL_PX in gpu.rs.
const CELL_PX: u32 = 32;
/// One texel per cell; alive = 1, dead = 0.
const CELL_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::R8Uint;

#[repr(C)]
#[derive(Pod, Zeroable, Copy, Clone)]
struct TickUniforms {
    world_cols: u32,
    world_rows: u32,
    _pad0: u32,
    _pad1: u32,
}

/// Mirrors `RenderU` in render_gles.wgsl (uniform). vec4s first for std140-friendly
/// 16-byte alignment (see the CLAUDE.md uniform-alignment note); total 80
/// bytes (multiple of 16).
#[repr(C)]
#[derive(Pod, Zeroable, Copy, Clone)]
struct RenderUniforms {
    surface: [f32; 4],
    ink: [f32; 4],
    scroll: [f32; 2],
    world: [u32; 2],
    cell_px: f32,
    transition_t: f32,
    init_fade_t: f32,
    minor_t: f32,
    major_t: f32,
    ink_opacity: f32,
    /// frag→canvas scale: the surface is clamped to WebGL2's max texture size,
    /// so surface px must be scaled up to the intended-canvas device-px space
    /// the camera offset lives in (`world = frag * scale + scroll`). [1,1] when
    /// the canvas fit without clamping.
    scale: [f32; 2],
}

impl RenderUniforms {
    fn initial() -> Self {
        // LIGHT_THEME defaults (theme.ts) so the first frame before set_theme
        // isn't garbage; the worker calls set_theme right after construction.
        RenderUniforms {
            surface: [0.985, -0.001, 0.004, 0.0],
            ink: [0.280, 0.001, 0.005, 0.0],
            scroll: [0.0, 0.0],
            world: [WORLD_COLS, WORLD_ROWS],
            cell_px: CELL_PX as f32,
            transition_t: 1.0, // settled until a tick animates
            init_fade_t: 0.0,  // worker ramps 0→1 on first paint
            minor_t: 0.08,
            major_t: 0.14,
            ink_opacity: 0.10,
            scale: [1.0, 1.0],
        }
    }
}

/// frag→canvas scale from the intended (pre-clamp) canvas dims vs the actual
/// (clamped) surface dims.
fn frag_scale(canvas_w: u32, canvas_h: u32, surface_w: u32, surface_h: u32) -> [f32; 2] {
    [
        canvas_w as f32 / surface_w.max(1) as f32,
        canvas_h as f32 / surface_h.max(1) as f32,
    ]
}

/// WebGL2-backed Game of Life renderer.
#[wasm_bindgen]
pub struct WebglGameOfLife {
    device: wgpu::Device,
    queue: wgpu::Queue,
    surface: wgpu::Surface<'static>,
    config: wgpu::SurfaceConfiguration,
    /// WebGL2's `max_texture_dimension_2d` — the surface must fit within it on
    /// both axes (2048 on the spec floor / plenty of mobile GPUs), far below
    /// WebGPU's, while the canvas is sized for WebGPU. Clamp or configure fails.
    max_dim: u32,

    // ── Ping-pong simulation ────────────────────────────────────────────────
    cell_view: [wgpu::TextureView; 2],
    /// Index of the texture holding the CURRENT generation. tick() renders the
    /// next generation into `1 - current`, then flips.
    current: usize,
    tick_pipeline: wgpu::RenderPipeline,
    /// `tick_bg[i]` samples `cell_view[i]` (the source generation).
    tick_bg: [wgpu::BindGroup; 2],

    // ── Presentation ────────────────────────────────────────────────────────
    render_pipeline: wgpu::RenderPipeline,
    /// `render_bg[i]` binds cur = `cell_view[i]`, prev = `cell_view[1-i]`, so
    /// it's indexed by `current` (which is cur after the last tick's flip).
    render_bg: [wgpu::BindGroup; 2],
    render_uniform_buf: wgpu::Buffer,
    /// CPU-side mirror; set_camera/theme/transition patch it, then re-upload.
    uniforms: RenderUniforms,
}

impl WebglGameOfLife {
    #[allow(clippy::too_many_lines)]
    async fn from_surface(
        instance: wgpu::Instance,
        surface: wgpu::Surface<'static>,
        width: u32,
        height: u32,
        seed: u32,
    ) -> Result<WebglGameOfLife, JsValue> {
        #[cfg(feature = "console_error_panic_hook")]
        console_error_panic_hook::set_once();

        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::HighPerformance,
                compatible_surface: Some(&surface),
                force_fallback_adapter: false,
            })
            .await
            .ok_or_else(|| JsValue::from_str("No WebGL2 adapter found"))?;

        // WebGL2 caps: NO compute, NO storage buffers. downlevel_webgl2_defaults
        // advertises exactly what WebGL2 provides, so any accidental use of an
        // unsupported feature fails loudly at pipeline creation.
        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: Some("gles_device"),
                    required_features: wgpu::Features::empty(),
                    required_limits: wgpu::Limits::downlevel_webgl2_defaults(),
                    memory_hints: wgpu::MemoryHints::default(),
                },
                None,
            )
            .await
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        let max_dim = device.limits().max_texture_dimension_2d;
        let cfg_w = width.clamp(1, max_dim);
        let cfg_h = height.clamp(1, max_dim);
        let mut config = surface
            .get_default_config(&adapter, cfg_w, cfg_h)
            .ok_or_else(|| JsValue::from_str("Surface not supported by the WebGL2 adapter"))?;
        let caps = surface.get_capabilities(&adapter);
        if let Some(non_srgb) = caps.formats.iter().copied().find(|f| !f.is_srgb()) {
            config.format = non_srgb;
        }
        surface.configure(&device, &config);

        // ── Seed the world (reuse the CPU core + Methuselah scatter) ─────────
        let mut rng =
            Xoshiro256StarStar::seed_from_u64(u64::from(seed) | (u64::from(!seed) << 32));
        let mut world = World::new(WORLD_COLS, WORLD_ROWS);
        let n_seeds = recommended_initial_count(WORLD_COLS, WORLD_ROWS);
        seed_world_with_methuselahs(&mut world, &mut rng, n_seeds);
        // Expand the bitpacked world into one byte per cell for the R8Uint tex.
        let mut seed_bytes = vec![0u8; (WORLD_COLS * WORLD_ROWS) as usize];
        for y in 0..WORLD_ROWS {
            for x in 0..WORLD_COLS {
                if world.cell_at(x, y) {
                    seed_bytes[(y * WORLD_COLS + x) as usize] = 1;
                }
            }
        }

        // ── Cell textures (ping-pong) ───────────────────────────────────────
        let make_cell_tex = |label: &str| {
            device.create_texture(&wgpu::TextureDescriptor {
                label: Some(label),
                size: wgpu::Extent3d {
                    width: WORLD_COLS,
                    height: WORLD_ROWS,
                    depth_or_array_layers: 1,
                },
                mip_level_count: 1,
                sample_count: 1,
                dimension: wgpu::TextureDimension::D2,
                format: CELL_FORMAT,
                usage: wgpu::TextureUsages::RENDER_ATTACHMENT
                    | wgpu::TextureUsages::TEXTURE_BINDING
                    | wgpu::TextureUsages::COPY_DST,
                view_formats: &[],
            })
        };
        let cell_tex = [make_cell_tex("cells_0"), make_cell_tex("cells_1")];
        let write_cells = |tex: &wgpu::Texture, data: &[u8]| {
            queue.write_texture(
                wgpu::ImageCopyTexture {
                    texture: tex,
                    mip_level: 0,
                    origin: wgpu::Origin3d::ZERO,
                    aspect: wgpu::TextureAspect::All,
                },
                data,
                wgpu::ImageDataLayout {
                    offset: 0,
                    bytes_per_row: Some(WORLD_COLS), // R8Uint = 1 byte/texel
                    rows_per_image: Some(WORLD_ROWS),
                },
                wgpu::Extent3d {
                    width: WORLD_COLS,
                    height: WORLD_ROWS,
                    depth_or_array_layers: 1,
                },
            );
        };
        // tex[0] = seed (current); tex[1] = zeros (initialised so LoadOp::Load
        // is valid on the first tick that renders into it).
        write_cells(&cell_tex[0], &seed_bytes);
        write_cells(&cell_tex[1], &vec![0u8; seed_bytes.len()]);
        let cell_view = [
            cell_tex[0].create_view(&wgpu::TextureViewDescriptor::default()),
            cell_tex[1].create_view(&wgpu::TextureViewDescriptor::default()),
        ];

        // ── Shared "uniform + uint texture" bind group layout ───────────────
        let sample_bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("gles_sample_bgl"),
            entries: &[
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::VERTEX_FRAGMENT,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Uniform,
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                },
                wgpu::BindGroupLayoutEntry {
                    binding: 1,
                    visibility: wgpu::ShaderStages::FRAGMENT,
                    ty: wgpu::BindingType::Texture {
                        sample_type: wgpu::TextureSampleType::Uint,
                        view_dimension: wgpu::TextureViewDimension::D2,
                        multisampled: false,
                    },
                    count: None,
                },
            ],
        });
        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("gles_pipeline_layout"),
            bind_group_layouts: &[&sample_bgl],
            push_constant_ranges: &[],
        });

        // ── Uniform buffers ─────────────────────────────────────────────────
        let mk_uniform = |label: &str, bytes: &[u8]| {
            wgpu::util::DeviceExt::create_buffer_init(
                &device,
                &wgpu::util::BufferInitDescriptor {
                    label: Some(label),
                    contents: bytes,
                    usage: wgpu::BufferUsages::UNIFORM,
                },
            )
        };
        let tick_uniform = mk_uniform(
            "gles_tick_u",
            bytemuck::bytes_of(&TickUniforms {
                world_cols: WORLD_COLS,
                world_rows: WORLD_ROWS,
                _pad0: 0,
                _pad1: 0,
            }),
        );
        let mut uniforms = RenderUniforms::initial();
        uniforms.scale = frag_scale(width, height, config.width, config.height);
        let render_uniform_buf = wgpu::util::DeviceExt::create_buffer_init(
            &device,
            &wgpu::util::BufferInitDescriptor {
                label: Some("gles_render_u"),
                contents: bytemuck::bytes_of(&uniforms),
                usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
            },
        );

        // Render bind group layout: uniform + cur cell texture + prev cell
        // texture (two texelFetch sources for the birth/death transition).
        let uint_tex_entry = |binding: u32| wgpu::BindGroupLayoutEntry {
            binding,
            visibility: wgpu::ShaderStages::FRAGMENT,
            ty: wgpu::BindingType::Texture {
                sample_type: wgpu::TextureSampleType::Uint,
                view_dimension: wgpu::TextureViewDimension::D2,
                multisampled: false,
            },
            count: None,
        };
        let render_bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("gles_render_bgl"),
            entries: &[
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::VERTEX_FRAGMENT,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Uniform,
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                },
                uint_tex_entry(1),
                uint_tex_entry(2),
            ],
        });
        let render_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("gles_render_layout"),
            bind_group_layouts: &[&render_bgl],
            push_constant_ranges: &[],
        });

        // ── Pipelines ───────────────────────────────────────────────────────
        let tick_shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("gol_tick"),
            source: wgpu::ShaderSource::Wgsl(shaders::GOL_TICK.into()),
        });
        let tick_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("gol_tick_pipeline"),
            layout: Some(&pipeline_layout),
            vertex: wgpu::VertexState {
                module: &tick_shader,
                entry_point: "vs_main",
                buffers: &[],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            },
            fragment: Some(wgpu::FragmentState {
                module: &tick_shader,
                entry_point: "fs_main",
                targets: &[Some(wgpu::ColorTargetState {
                    format: CELL_FORMAT,
                    blend: None, // integer targets cannot blend
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

        let render_shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("render_gles"),
            source: wgpu::ShaderSource::Wgsl(shaders::RENDER_GLES.into()),
        });
        let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("render_gles_pipeline"),
            layout: Some(&render_layout),
            vertex: wgpu::VertexState {
                module: &render_shader,
                entry_point: "vs_main",
                buffers: &[],
                compilation_options: wgpu::PipelineCompilationOptions::default(),
            },
            fragment: Some(wgpu::FragmentState {
                module: &render_shader,
                entry_point: "fs_main",
                targets: &[Some(wgpu::ColorTargetState {
                    format: config.format,
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

        // ── Bind groups ─────────────────────────────────────────────────────
        // Tick: sample source generation (one texture) — uses sample_bgl.
        let tick_bg = [
            device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("tick_bg_0"),
                layout: &sample_bgl,
                entries: &[
                    wgpu::BindGroupEntry { binding: 0, resource: tick_uniform.as_entire_binding() },
                    wgpu::BindGroupEntry { binding: 1, resource: wgpu::BindingResource::TextureView(&cell_view[0]) },
                ],
            }),
            device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("tick_bg_1"),
                layout: &sample_bgl,
                entries: &[
                    wgpu::BindGroupEntry { binding: 0, resource: tick_uniform.as_entire_binding() },
                    wgpu::BindGroupEntry { binding: 1, resource: wgpu::BindingResource::TextureView(&cell_view[1]) },
                ],
            }),
        ];
        // Render: cur + prev — indexed by `current` (cur = current, prev = other).
        let mk_render_bg = |label: &str, cur: usize, prev: usize| {
            device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some(label),
                layout: &render_bgl,
                entries: &[
                    wgpu::BindGroupEntry { binding: 0, resource: render_uniform_buf.as_entire_binding() },
                    wgpu::BindGroupEntry { binding: 1, resource: wgpu::BindingResource::TextureView(&cell_view[cur]) },
                    wgpu::BindGroupEntry { binding: 2, resource: wgpu::BindingResource::TextureView(&cell_view[prev]) },
                ],
            })
        };
        let render_bg = [
            mk_render_bg("render_bg_0", 0, 1),
            mk_render_bg("render_bg_1", 1, 0),
        ];

        Ok(WebglGameOfLife {
            device,
            queue,
            surface,
            config,
            max_dim,
            cell_view,
            current: 0,
            tick_pipeline,
            tick_bg,
            render_pipeline,
            render_bg,
            render_uniform_buf,
            uniforms,
        })
    }

    /// Advance one generation: render `1 - current` from `current`, then flip.
    fn tick(&mut self) {
        let src = self.current;
        let dst = 1 - self.current;
        let mut enc = self
            .device
            .create_command_encoder(&wgpu::CommandEncoderDescriptor { label: Some("gol_tick_enc") });
        {
            let mut pass = enc.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("gol_tick_pass"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &self.cell_view[dst],
                    resolve_target: None,
                    // Every texel is written by the fullscreen pass, so Load
                    // (over the already-initialised texture) is fine and avoids
                    // integer-clear-color awkwardness.
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Load,
                        store: wgpu::StoreOp::Store,
                    },
                })],
                depth_stencil_attachment: None,
                timestamp_writes: None,
                occlusion_query_set: None,
            });
            pass.set_pipeline(&self.tick_pipeline);
            pass.set_bind_group(0, &self.tick_bg[src], &[]);
            pass.draw(0..3, 0..1);
        }
        self.queue.submit([enc.finish()]);
        self.current = dst;
    }
}

#[wasm_bindgen]
impl WebglGameOfLife {
    /// Create from an OffscreenCanvas (Web Worker usage). Creates a WebGL2
    /// context on the canvas — mutually exclusive with WebGPU/2D contexts, so
    /// only reach here after the WebGPU probe has failed.
    pub async fn new_offscreen(
        canvas: web_sys::OffscreenCanvas,
        seed: u32,
    ) -> Result<WebglGameOfLife, JsValue> {
        let (width, height) = (canvas.width(), canvas.height());
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
            backends: wgpu::Backends::GL,
            ..Default::default()
        });
        let surface = instance
            .create_surface(wgpu::SurfaceTarget::OffscreenCanvas(canvas))
            .map_err(|e| JsValue::from_str(&e.to_string()))?;
        Self::from_surface(instance, surface, width, height, seed).await
    }

    /// Present the current generation (no advance).
    pub fn render_only(&mut self) {
        let output = match self.surface.get_current_texture() {
            Ok(o) => o,
            Err(_) => {
                self.surface.configure(&self.device, &self.config);
                return;
            }
        };
        let view = output
            .texture
            .create_view(&wgpu::TextureViewDescriptor::default());
        let mut enc = self
            .device
            .create_command_encoder(&wgpu::CommandEncoderDescriptor { label: Some("gles_frame") });
        {
            let mut pass = enc.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("gles_present"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Clear(wgpu::Color {
                            r: 0.96,
                            g: 0.96,
                            b: 0.95,
                            a: 1.0,
                        }),
                        store: wgpu::StoreOp::Store,
                    },
                })],
                depth_stencil_attachment: None,
                timestamp_writes: None,
                occlusion_query_set: None,
            });
            pass.set_pipeline(&self.render_pipeline);
            pass.set_bind_group(0, &self.render_bg[self.current], &[]);
            pass.draw(0..3, 0..1);
        }
        self.queue.submit([enc.finish()]);
        output.present();
    }

    /// Advance one generation and present.
    pub fn tick_and_render(&mut self) {
        self.tick();
        self.render_only();
    }

    pub fn resize(&mut self, width: u32, height: u32) {
        if width == 0 || height == 0 {
            return;
        }
        self.config.width = width.clamp(1, self.max_dim);
        self.config.height = height.clamp(1, self.max_dim);
        self.surface.configure(&self.device, &self.config);
        // Recompute the frag→canvas scale: the clamp ratio changes with size.
        self.uniforms.scale = frag_scale(width, height, self.config.width, self.config.height);
        self.upload_uniforms();
    }

    fn upload_uniforms(&self) {
        self.queue
            .write_buffer(&self.render_uniform_buf, 0, bytemuck::bytes_of(&self.uniforms));
    }

    /// Camera/scroll offset in device px (world = frag + scroll). The main
    /// thread ships the same offset it gives the WebGPU renderer.
    pub fn set_camera(&mut self, x: f32, y: f32) {
        self.uniforms.scroll = [x, y];
        self.upload_uniforms();
    }

    pub fn set_transition(&mut self, t: f32) {
        self.uniforms.transition_t = t.clamp(0.0, 1.0);
        self.upload_uniforms();
    }

    pub fn set_init_fade(&mut self, t: f32) {
        self.uniforms.init_fade_t = t.clamp(0.0, 1.0);
        self.upload_uniforms();
    }

    pub fn toggle_cell(&mut self, _cx: u32, _cy: u32) {}

    /// Apply a theme. Accepts the same JSON the WebGPU path parses; only the
    /// fields this simpler shader uses are read (surface, ink, minor/major
    /// lerps, ink opacity).
    pub fn set_theme_json(&mut self, theme_json: &str) -> Result<(), JsValue> {
        let parsed = js_sys::JSON::parse(theme_json)
            .map_err(|_| JsValue::from_str("Invalid theme JSON payload"))?;
        let read_lab = |key: &str| -> [f32; 4] {
            let v = js_sys::Reflect::get(&parsed, &JsValue::from_str(key)).unwrap_or(JsValue::NULL);
            if js_sys::Array::is_array(&v) {
                let a = js_sys::Array::from(&v);
                [
                    a.get(0).as_f64().unwrap_or(0.0) as f32,
                    a.get(1).as_f64().unwrap_or(0.0) as f32,
                    a.get(2).as_f64().unwrap_or(0.0) as f32,
                    0.0,
                ]
            } else {
                [0.0, 0.0, 0.0, 0.0]
            }
        };
        let read_f32 = |key: &str, default: f32| -> f32 {
            js_sys::Reflect::get(&parsed, &JsValue::from_str(key))
                .ok()
                .and_then(|v| v.as_f64())
                .map(|n| n as f32)
                .unwrap_or(default)
        };
        self.uniforms.surface = read_lab("surface");
        self.uniforms.ink = read_lab("ink");
        self.uniforms.minor_t = read_f32("minor_t", 0.08);
        self.uniforms.major_t = read_f32("major_t", 0.14);
        self.uniforms.ink_opacity = read_f32("ink_opacity", 0.10);
        self.upload_uniforms();
        Ok(())
    }

    pub fn world_cols(&self) -> u32 {
        WORLD_COLS
    }
    pub fn world_rows(&self) -> u32 {
        WORLD_ROWS
    }
    pub fn grid_pitch(&self) -> f32 {
        CELL_PX as f32
    }

    pub fn free(&self) {}
}
