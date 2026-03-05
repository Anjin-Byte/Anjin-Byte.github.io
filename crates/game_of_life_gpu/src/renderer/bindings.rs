pub(super) fn make_bind_group(
    device: &wgpu::Device,
    bgl: &wgpu::BindGroupLayout,
    uniform_buf: &wgpu::Buffer,
    current_buf: &wgpu::Buffer,
    previous_buf: &wgpu::Buffer,
    paper_buf: &wgpu::Buffer,
    noise_view: &wgpu::TextureView,
    noise_sampler: &wgpu::Sampler,
    zone_meta_buf: &wgpu::Buffer,
    zone_buf: &wgpu::Buffer,
    decal_meta_buf: &wgpu::Buffer,
    decal_buf: &wgpu::Buffer,
    label: &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: Some(label),
        layout: bgl,
        entries: &[
            wgpu::BindGroupEntry {
                binding: 0,
                resource: uniform_buf.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 1,
                resource: current_buf.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 2,
                resource: previous_buf.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 3,
                resource: paper_buf.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 4,
                resource: wgpu::BindingResource::TextureView(noise_view),
            },
            wgpu::BindGroupEntry {
                binding: 5,
                resource: wgpu::BindingResource::Sampler(noise_sampler),
            },
            wgpu::BindGroupEntry {
                binding: 6,
                resource: zone_meta_buf.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 7,
                resource: zone_buf.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 8,
                resource: decal_meta_buf.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 9,
                resource: decal_buf.as_entire_binding(),
            },
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
