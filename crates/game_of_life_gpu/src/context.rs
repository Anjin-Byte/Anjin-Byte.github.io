use wasm_bindgen::prelude::*;

/// Shared GPU infrastructure: device + queue.
///
/// Owned by `GpuGameOfLife` and borrowed by subsystems (Simulation,
/// GpuRenderer, HiResManager). Multiple renderers targeting different
/// canvases can share one context.
pub struct GpuContext {
    pub device: wgpu::Device,
    pub queue: wgpu::Queue,
}

impl GpuContext {
    /// Probe the given surface for a compatible adapter, then request a device.
    ///
    /// Returns both the context and the adapter (needed briefly by
    /// `GpuRenderer::new` for surface capability queries).
    pub async fn from_compatible_surface(
        instance: &wgpu::Instance,
        surface: &wgpu::Surface<'_>,
    ) -> Result<(Self, wgpu::Adapter), JsValue> {
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::HighPerformance,
                compatible_surface: Some(surface),
                force_fallback_adapter: false,
            })
            .await
            .ok_or_else(|| JsValue::from_str("No WebGPU adapter found"))?;

        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: Some("gol_device"),
                    required_features: wgpu::Features::empty(),
                    required_limits: wgpu::Limits::default(),
                    memory_hints: wgpu::MemoryHints::default(),
                },
                None,
            )
            .await
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        Ok((Self { device, queue }, adapter))
    }
}
