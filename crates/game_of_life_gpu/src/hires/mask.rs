use crate::grid::Grid;

/// Pre-computed bitpacked mask for the base grid.
///
/// Bit = 1 means "this cell is owned by a hi-res region — skip in base compute."
/// Same word layout as the cell buffers: cell (x, y) = bit (x % 32) of
/// word at `y * words_per_row + x / 32`.
pub struct RegionMask {
    buf: wgpu::Buffer,
    data: Vec<u32>,
    words_per_row: u32,
    padded_rows: u32,
}

impl RegionMask {
    /// Create an empty mask matching the base grid dimensions.
    pub fn new(device: &wgpu::Device, grid: &Grid) -> Self {
        let total = grid.total_words() as usize;
        let data = vec![0u32; total];
        let buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_region_mask"),
            size: (total.max(1) * 4) as u64,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        RegionMask {
            buf,
            data,
            words_per_row: grid.words_per_row,
            padded_rows: grid.padded_rows,
        }
    }

    pub fn buffer(&self) -> &wgpu::Buffer {
        &self.buf
    }

    /// Rebuild the mask for multiple region rects, then upload to GPU.
    ///
    /// Pass an empty slice to clear (no regions active).
    pub fn rebuild(&mut self, queue: &wgpu::Queue, rects: &[[i32; 4]]) {
        self.data.fill(0);

        for r in rects {
            let x1 = r[0].max(0) as u32;
            let y1 = r[1].max(0) as u32;
            let x2 = r[2].max(0) as u32;
            let y2 = r[3].max(0) as u32;

            for y in y1..=y2 {
                if y >= self.padded_rows {
                    break;
                }
                for x in x1..=x2 {
                    let word_idx = y * self.words_per_row + x / 32;
                    let bit = x & 31;
                    if (word_idx as usize) < self.data.len() {
                        self.data[word_idx as usize] |= 1 << bit;
                    }
                }
            }
        }

        queue.write_buffer(&self.buf, 0, bytemuck::cast_slice(&self.data));
    }

    /// Resize the mask to match a new grid. Clears all bits.
    pub fn resize(&mut self, device: &wgpu::Device, queue: &wgpu::Queue, grid: &Grid) {
        let total = grid.total_words() as usize;
        self.data = vec![0u32; total];
        self.words_per_row = grid.words_per_row;
        self.padded_rows = grid.padded_rows;
        self.buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_region_mask"),
            size: (total.max(1) * 4) as u64,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        queue.write_buffer(&self.buf, 0, bytemuck::cast_slice(&self.data));
    }
}
