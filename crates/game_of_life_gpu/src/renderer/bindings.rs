/// Resources for the core bind group (group 0):
/// uniforms, current/previous cells, paper params, noise texture+sampler.
pub(super) struct CoreBindGroupResources<'a> {
    pub uniform_buf: &'a wgpu::Buffer,
    pub current_buf: &'a wgpu::Buffer,
    pub previous_buf: &'a wgpu::Buffer,
    pub paper_buf: &'a wgpu::Buffer,
    pub noise_view: &'a wgpu::TextureView,
    pub noise_sampler: &'a wgpu::Sampler,
}

/// Resources for the overlay bind group (group 1):
/// zones, decals, SDF text.
pub(super) struct OverlayBindGroupResources<'a> {
    pub zone_meta_buf: &'a wgpu::Buffer,
    pub zone_buf: &'a wgpu::Buffer,
    pub decal_meta_buf: &'a wgpu::Buffer,
    pub decal_buf: &'a wgpu::Buffer,
    pub sdf_meta_buf: &'a wgpu::Buffer,
    pub sdf_glyphs_buf: &'a wgpu::Buffer,
    pub sdf_atlas_view: &'a wgpu::TextureView,
    pub sdf_sampler: &'a wgpu::Sampler,
}

/// Resources for the hi-res bind group (group 2):
/// hires metadata, regions, cells, cells_prev.
pub(super) struct HiResBindGroupResources<'a> {
    pub hires_meta_buf: &'a wgpu::Buffer,
    pub hires_regions_buf: &'a wgpu::Buffer,
    pub hires_cells_buf: &'a wgpu::Buffer,
    pub hires_cells_prev_buf: &'a wgpu::Buffer,
}

// ── Core bind group (group 0) ──────────────────────────────────────────────

pub(super) fn core_bind_group_layout(device: &wgpu::Device) -> wgpu::BindGroupLayout {
    device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("core_bgl"),
        entries: &[
            uniform_bgl_entry(0),   // RenderUniforms
            storage_bgl_entry(1),   // current_cells
            storage_bgl_entry(2),   // previous_cells
            uniform_bgl_entry(3),   // PaperParams
            texture_bgl_entry(4),   // noise_tex
            sampler_bgl_entry(5),   // noise_smp
        ],
    })
}

pub(super) fn make_core_bind_group(
    device: &wgpu::Device,
    bgl: &wgpu::BindGroupLayout,
    res: &CoreBindGroupResources,
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
        ],
    })
}

// ── Overlay bind group (group 1) ───────────────────────────────────────────

pub(super) fn overlay_bind_group_layout(device: &wgpu::Device) -> wgpu::BindGroupLayout {
    device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("overlay_bgl"),
        entries: &[
            uniform_bgl_entry(0),   // zone_meta
            storage_bgl_entry(1),   // zones
            uniform_bgl_entry(2),   // decal_meta
            storage_bgl_entry(3),   // decals
            uniform_bgl_entry(4),   // sdf_text_meta
            storage_bgl_entry(5),   // sdf_glyphs
            texture_bgl_entry(6),   // sdf_atlas
            sampler_bgl_entry(7),   // sdf_smp
        ],
    })
}

pub(super) fn make_overlay_bind_group(
    device: &wgpu::Device,
    bgl: &wgpu::BindGroupLayout,
    res: &OverlayBindGroupResources,
    label: &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: Some(label),
        layout: bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: res.zone_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: res.zone_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 2, resource: res.decal_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 3, resource: res.decal_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 4, resource: res.sdf_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 5, resource: res.sdf_glyphs_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 6, resource: wgpu::BindingResource::TextureView(res.sdf_atlas_view) },
            wgpu::BindGroupEntry { binding: 7, resource: wgpu::BindingResource::Sampler(res.sdf_sampler) },
        ],
    })
}

// ── Hi-res bind group (group 2) ────────────────────────────────────────────

pub(super) fn hires_bind_group_layout(device: &wgpu::Device) -> wgpu::BindGroupLayout {
    device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("hires_bgl"),
        entries: &[
            uniform_bgl_entry(0),   // hires_meta
            storage_bgl_entry(1),   // hires_regions
            storage_bgl_entry(2),   // hires_cells
            storage_bgl_entry(3),   // hires_cells_prev
        ],
    })
}

pub(super) fn make_hires_bind_group(
    device: &wgpu::Device,
    bgl: &wgpu::BindGroupLayout,
    res: &HiResBindGroupResources,
    label: &str,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: Some(label),
        layout: bgl,
        entries: &[
            wgpu::BindGroupEntry { binding: 0, resource: res.hires_meta_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 1, resource: res.hires_regions_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 2, resource: res.hires_cells_buf.as_entire_binding() },
            wgpu::BindGroupEntry { binding: 3, resource: res.hires_cells_prev_buf.as_entire_binding() },
        ],
    })
}

// ── Layout entry helpers ───────────────────────────────────────────────────

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
