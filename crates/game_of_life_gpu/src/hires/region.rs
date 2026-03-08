/// A single high-resolution simulation region.
///
/// Each region owns an independent pair of bitpacked cell buffers
/// (ping-pong) at `multiplier` × the base grid resolution.
///
/// Buffer roles are tracked explicitly via `current` index rather than
/// a frame counter, eliminating parity drift issues.
pub struct HiResRegion {
    pub id: u32,                  // unique identifier for CRUD
    pub rect: [i32; 4],           // [x1, y1, x2, y2] base cell-space (inclusive)
    pub multiplier: u32,          // 4 (Phase 1)
    /// The two cell buffers. `bufs[current]` is the latest simulation state.
    pub bufs: [wgpu::Buffer; 2],
    /// Index (0 or 1) of the buffer holding the current visible state.
    pub current: usize,
    pub cols: u32,                // fine-cell columns
    pub rows: u32,                // fine-cell rows
    pub words_per_row: u32,       // fine grid words per row (power of 2 / 32)
    pub padded_rows: u32,         // fine grid padded rows (power of 2)
    pub show_grid: bool,
    pub show_base_grid: bool,
    pub show_border: bool,
    pub paused: bool,
    pub tick_multiplier: u32,
    pub frozen_buf: Option<wgpu::Buffer>,
}

impl HiResRegion {
    /// Create a new region with random fine-cell initialization (~25% density).
    pub fn new(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        id: u32,
        rect: [i32; 4],
        multiplier: u32,
        show_grid: bool,
        show_base_grid: bool,
        show_border: bool,
    ) -> Self {
        let base_w = (rect[2] - rect[0] + 1) as u32;
        let base_h = (rect[3] - rect[1] + 1) as u32;
        let cols = base_w * multiplier;
        let rows = base_h * multiplier;

        let padded_cols = next_pow2(cols).max(32);
        let padded_rows = next_pow2(rows).max(1);
        let words_per_row = padded_cols / 32;
        let total_words = padded_rows * words_per_row;
        let buf_bytes = total_words as usize * 4;

        let init_data = random_cell_data(total_words);

        let buf_0 = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("hires_cells_0"),
            contents: bytemuck::cast_slice(&init_data),
            usage: wgpu::BufferUsages::STORAGE
                | wgpu::BufferUsages::COPY_DST
                | wgpu::BufferUsages::COPY_SRC,
        });
        let buf_1 = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("hires_cells_1"),
            size: buf_bytes as u64,
            usage: wgpu::BufferUsages::STORAGE
                | wgpu::BufferUsages::COPY_DST
                | wgpu::BufferUsages::COPY_SRC,
            mapped_at_creation: false,
        });
        // Copy initial state to buf_1 so both buffers are valid.
        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("hires_init_copy"),
        });
        encoder.copy_buffer_to_buffer(&buf_0, 0, &buf_1, 0, buf_bytes as u64);
        queue.submit([encoder.finish()]);

        HiResRegion {
            id,
            rect,
            multiplier,
            bufs: [buf_0, buf_1],
            current: 0,
            cols,
            rows,
            words_per_row,
            padded_rows,
            show_grid,
            show_base_grid,
            show_border,
            paused: false,
            tick_multiplier: 1,
            frozen_buf: None,
        }
    }

    /// Total u32 words in one fine-cell buffer plane.
    pub fn total_words(&self) -> u32 {
        self.padded_rows * self.words_per_row
    }

    /// Buffer size in bytes for one fine-cell plane.
    pub fn buffer_bytes(&self) -> u64 {
        self.total_words() as u64 * 4
    }

    /// Buffer holding the current (latest) simulation state.
    pub fn read_buf(&self) -> &wgpu::Buffer {
        &self.bufs[self.current]
    }

    /// Buffer that will be written to by the next compute step.
    pub fn write_buf(&self) -> &wgpu::Buffer {
        &self.bufs[1 - self.current]
    }

    /// Swap read/write roles after a compute step.
    pub fn swap(&mut self) {
        self.current = 1 - self.current;
    }

    /// Base-cell width of the region.
    pub fn base_width(&self) -> u32 {
        (self.rect[2] - self.rect[0] + 1) as u32
    }

    /// Base-cell height of the region.
    pub fn base_height(&self) -> u32 {
        (self.rect[3] - self.rect[1] + 1) as u32
    }

    /// Create or update the frozen cell buffer from bitpacked data.
    pub fn set_frozen(&mut self, device: &wgpu::Device, queue: &wgpu::Queue, data: &[u32]) {
        let expected = self.total_words() as usize;
        let buf_data = if data.len() >= expected {
            &data[..expected]
        } else {
            // Pad with zeros if data is shorter
            let mut padded = vec![0u32; expected];
            padded[..data.len()].copy_from_slice(data);
            self.frozen_buf = Some(device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                label: Some("hires_frozen"),
                contents: bytemuck::cast_slice(&padded),
                usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
            }));
            return;
        };
        match self.frozen_buf {
            Some(ref buf) if buf.size() == (expected * 4) as u64 => {
                queue.write_buffer(buf, 0, bytemuck::cast_slice(buf_data));
            }
            _ => {
                self.frozen_buf = Some(device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                    label: Some("hires_frozen"),
                    contents: bytemuck::cast_slice(buf_data),
                    usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
                }));
            }
        }
    }

    /// Clear the frozen cell buffer.
    pub fn clear_frozen(&mut self) {
        self.frozen_buf = None;
    }
}

/// Generate random bitpacked cell data with ~25% alive density.
fn random_cell_data(total_words: u32) -> Vec<u32> {
    use js_sys::Math;
    (0..total_words)
        .map(|_| {
            let r1 = (Math::random() * 4_294_967_296.0) as u32;
            let r2 = (Math::random() * 4_294_967_296.0) as u32;
            r1 & r2 // AND of two random u32s ≈ 25% density per bit
        })
        .collect()
}

fn next_pow2(n: u32) -> u32 {
    if n <= 1 { return 1; }
    n.next_power_of_two()
}

use wgpu::util::DeviceExt;
