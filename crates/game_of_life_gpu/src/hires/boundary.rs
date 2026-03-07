/// Layout offsets for one region's boundary ring in the shared boundary buffer.
///
/// The ring surrounds a region of W×H base cells:
/// - 4 edges: north (W cells), east (H cells), south (W cells), west (H cells)
/// - 4 corners: TL, TR, BR, BL
/// Total ring cells = 2(W+H) + 4
pub struct BoundaryRegionLayout {
    pub outward_offset: u32,   // word offset to expanded base→fine ring
    pub outward_count: u32,    // number of virtual fine cells in outward ring
    pub inward_offset: u32,    // word offset to aggregated fine→base ring
    pub inward_count: u32,     // number of base cells in inward ring
}

impl BoundaryRegionLayout {
    /// Compute layout for a region with given base-cell dimensions and multiplier.
    pub fn for_region(base_w: u32, base_h: u32, multiplier: u32) -> Self {
        let ring_cells = 2 * (base_w + base_h) + 4;
        let edge_cells = 2 * (base_w + base_h);
        // Outward: each edge cell → N virtual fine cells, each corner → N×N
        let outward_count = edge_cells * multiplier + 4 * multiplier * multiplier;
        // Inward: one aggregated bit per ring base cell
        let inward_count = ring_cells;

        BoundaryRegionLayout {
            outward_offset: 0,
            outward_count,
            inward_offset: 0,
            inward_count,
        }
    }
}

/// Pre-allocated boundary state buffers for cross-resolution communication.
///
/// Written once per frame by the boundary extraction dispatch.
/// Read by subsequent base-grid and fine-cell compute dispatches.
pub struct BoundaryState {
    /// Expanded base→fine virtual cells (outward ring).
    pub outward_buf: wgpu::Buffer,
    /// Aggregated fine→base majority-vote results (inward ring).
    pub inward_buf: wgpu::Buffer,
    /// Placeholder frozen mask (Phase 1: zero-length, unused).
    pub frozen_placeholder_buf: wgpu::Buffer,
    pub layout: BoundaryRegionLayout,
}

impl BoundaryState {
    /// Allocate boundary buffers for a single region.
    pub fn new(device: &wgpu::Device, base_w: u32, base_h: u32, multiplier: u32) -> Self {
        let layout = BoundaryRegionLayout::for_region(base_w, base_h, multiplier);

        // Outward ring: bitpacked, ceil to whole u32 words
        let outward_words = (layout.outward_count + 31) / 32;
        let outward_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_boundary_outward"),
            size: (outward_words.max(1) * 4) as u64,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        // Inward ring: bitpacked, ceil to whole u32 words
        let inward_words = (layout.inward_count + 31) / 32;
        let inward_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_boundary_inward"),
            size: (inward_words.max(1) * 4) as u64,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        // Phase 1: frozen mask placeholder (4 bytes, unused)
        let frozen_placeholder_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_frozen_placeholder"),
            size: 4,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        BoundaryState {
            outward_buf,
            inward_buf,
            frozen_placeholder_buf,
            layout,
        }
    }

    /// Zero both ring buffers via command encoder (GPU-side, no heap allocation).
    pub fn clear_enc(&self, encoder: &mut wgpu::CommandEncoder) {
        encoder.clear_buffer(&self.outward_buf, 0, None);
        encoder.clear_buffer(&self.inward_buf, 0, None);
    }
}
