use crate::shaders;

pub fn ensure_bnd_pipeline(
    device: &wgpu::Device,
    pipeline: &mut Option<wgpu::ComputePipeline>,
    bgl: &mut Option<wgpu::BindGroupLayout>,
) {
    if pipeline.is_some() { return; }
    let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
        label: Some("boundary_extract_shader"),
        source: wgpu::ShaderSource::Wgsl(shaders::BOUNDARY_EXTRACT.into()),
    });
    let new_bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("boundary_extract_bgl"),
        entries: &[
            bgl_compute(0, wgpu::BufferBindingType::Uniform),
            bgl_compute(1, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(2, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(3, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(4, wgpu::BufferBindingType::Storage { read_only: false }),
            bgl_compute(5, wgpu::BufferBindingType::Storage { read_only: false }),
            bgl_compute(6, wgpu::BufferBindingType::Storage { read_only: false }),
        ],
    });
    let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some("boundary_extract_layout"),
        bind_group_layouts: &[&new_bgl],
        push_constant_ranges: &[],
    });
    *pipeline = Some(device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some("boundary_extract_pipeline"),
        layout: Some(&layout),
        module: &shader,
        entry_point: "main",
        compilation_options: wgpu::PipelineCompilationOptions::default(),
        cache: None,
    }));
    *bgl = Some(new_bgl);
}

pub fn ensure_fine_pipeline(
    device: &wgpu::Device,
    pipeline: &mut Option<wgpu::ComputePipeline>,
    bgl: &mut Option<wgpu::BindGroupLayout>,
) {
    if pipeline.is_some() { return; }
    let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
        label: Some("hires_compute_shader"),
        source: wgpu::ShaderSource::Wgsl(shaders::HIRES_COMPUTE.into()),
    });
    let new_bgl = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("hires_compute_bgl"),
        entries: &[
            bgl_compute(0, wgpu::BufferBindingType::Uniform),
            bgl_compute(1, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(2, wgpu::BufferBindingType::Storage { read_only: false }),
            bgl_compute(3, wgpu::BufferBindingType::Storage { read_only: true }),
            bgl_compute(4, wgpu::BufferBindingType::Storage { read_only: true }),
        ],
    });
    let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some("hires_compute_layout"),
        bind_group_layouts: &[&new_bgl],
        push_constant_ranges: &[],
    });
    *pipeline = Some(device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some("hires_compute_pipeline"),
        layout: Some(&layout),
        module: &shader,
        entry_point: "main",
        compilation_options: wgpu::PipelineCompilationOptions::default(),
        cache: None,
    }));
    *bgl = Some(new_bgl);
}

pub fn bgl_compute(binding: u32, ty: wgpu::BufferBindingType) -> wgpu::BindGroupLayoutEntry {
    wgpu::BindGroupLayoutEntry {
        binding,
        visibility: wgpu::ShaderStages::COMPUTE,
        ty: wgpu::BindingType::Buffer { ty, has_dynamic_offset: false, min_binding_size: None },
        count: None,
    }
}
