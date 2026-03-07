/// Resources needed to build a render bind group.
pub(super) struct BindGroupResources<'a> {
    pub uniform_buf: &'a wgpu::Buffer,
    pub current_buf: &'a wgpu::Buffer,
    pub previous_buf: &'a wgpu::Buffer,
    pub paper_buf: &'a wgpu::Buffer,
    pub noise_view: &'a wgpu::TextureView,
    pub noise_sampler: &'a wgpu::Sampler,
    pub zone_meta_buf: &'a wgpu::Buffer,
    pub zone_buf: &'a wgpu::Buffer,
    pub decal_meta_buf: &'a wgpu::Buffer,
    pub decal_buf: &'a wgpu::Buffer,
    // SDF text placeholders (bindings 10-13)
    pub sdf_meta_buf: &'a wgpu::Buffer,
    pub sdf_glyphs_buf: &'a wgpu::Buffer,
    pub sdf_atlas_view: &'a wgpu::TextureView,
    pub sdf_sampler: &'a wgpu::Sampler,
    // Hi-res region (bindings 14-16)
    pub hires_meta_buf: &'a wgpu::Buffer,
    pub hires_regions_buf: &'a wgpu::Buffer,
    pub hires_cells_buf: &'a wgpu::Buffer,
    pub hires_cells_prev_buf: &'a wgpu::Buffer,
}

pub(super) fn make_bind_group(
    device: &wgpu::Device,
    bgl: &wgpu::BindGroupLayout,
    res: &BindGroupResources,
    label: &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: Some(label),
        layout: bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: res.uniform_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: res.current_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 2, resource: res.previous_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 3, resource: res.paper_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 4, resource: wgpu::BindingResource::TextureView(res.noise_view) },
            wgpu::BindGroupEntry { binding: 5, resource: wgpu::BindingResource::Sampler(res.noise_sampler) },
            wgpu::BindGroupEntry { binding: 6, resource: res.zone_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 7, resource: res.zone_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 8, resource: res.decal_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 9, resource: res.decal_buf.as_entire_binding() },
            // SDF text placeholders
            wgpu::BindGroupEntry { binding: 10, resource: res.sdf_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 11, resource: res.sdf_glyphs_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 12, resource: wgpu::BindingResource::TextureView(res.sdf_atlas_view) },
            wgpu::BindGroupEntry { binding: 13, resource: wgpu::BindingResource::Sampler(res.sdf_sampler) },
            // Hi-res region
            wgpu::BindGroupEntry { binding: 14, resource: res.hires_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 15, resource: res.hires_regions_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 16, resource: res.hires_cells_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 17, resource: res.hires_cells_prev_buf.as_entire_binding() },
        ],
    })
}

pub(super) fn uniform_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT | wgpu::ShaderStages::VERTEX,
        ty: wgpu::BindingType::Buffer {
            ty: wgpu::BufferBindingType::Uniform,
            has_dynamic_offset: false,
            min_binding_size: None,
        },
        count: None,
    }
}

pub(super) fn storage_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT,
        ty: wgpu::BindingType::Buffer {
            ty: wgpu::BufferBindingType::Storage { read_only: true },
            has_dynamic_offset: false,
            min_binding_size: None,
        },
        count: None,
    }
}

pub(super) fn texture_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT,
        ty: wgpu::BindingType::Texture {
            sample_type: wgpu::TextureSampleType::Float { filterable: true },
            view_dimension: wgpu::TextureViewDimension::D2,
            multisampled: false,
        },
        count: None,
    }
}

pub(super) fn sampler_bgl_entry(binding: u32) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::FRAGMENT,
        ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
        count: None,
    }
}
