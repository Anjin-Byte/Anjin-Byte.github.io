use wasm_bindgen::prelude::*;

/// Shared GPU infrastructure: device + queue.
///
/// Owned by `GpuGameOfLife` and borrowed by subsystems (Simulation,
/// GpuRenderer). Multiple renderers targeting different canvases can
/// share one context.
pub struct GpuContext {
    pub device: wgpu::Device,
    pub queue: wgpu::Queue,
    /// `true` when the device was created with the `TIMESTAMP_QUERY` feature
    /// enabled — i.e. the adapter advertised it AND the browser granted it.
    /// Consumed by `perf::TimestampPanel`; if `false`, the panel becomes a
    /// cheap no-op and per-pass GPU timing is unavailable.
    pub timestamp_query_supported: bool,
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

        // Opt into TIMESTAMP_QUERY only when the adapter advertises support.
        // On browsers without the feature granted (the common case unless a
        // dev flag like Chrome's `chrome://flags/#enable-unsafe-webgpu` is
        // toggled), we proceed without it — `perf::TimestampPanel` then runs
        // in disabled mode and the per-pass breakdown simply isn't emitted.
        let timestamp_query_supported = adapter
            .features()
            .contains(wgpu::Features::TIMESTAMP_QUERY);
        let mut required_features = wgpu::Features::empty();
        if timestamp_query_supported {
            required_features |= wgpu::Features::TIMESTAMP_QUERY;
        }

        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: Some("gol_device"),
                    required_features,
                    required_limits: wgpu::Limits::default(),
                    memory_hints: wgpu::MemoryHints::default(),
                },
                None,
            )
            .await
            .map_err(|e| JsValue::from_str(&e.to_string()))?;

        Ok((Self { device, queue, timestamp_query_supported }, adapter))
    }
}
