//! GPU per-pass timing via WebGPU's `TIMESTAMP_QUERY` feature.
//!
//! Each sampled frame, the orchestrator (`gpu.rs`) calls
//! `TimestampPanel::try_start()` to enter sampling state, hands the panel's
//! `query_set()` reference to each pass that wants to be measured (compute
//! tick, XOR / OR edit dispatches, render pass), and then calls
//! `finish(encoder, mask)` before submit.  After submit the panel kicks off
//! an async readback; subsequent `poll()` calls drain it into
//! `PassDurations` (in nanoseconds).
//!
//! The panel is a no-op when `enabled` is false — i.e. when the adapter
//! didn't grant `TIMESTAMP_QUERY` (typical on browsers without the dev
//! flag) or `PERF_ENABLED` is off.  All public methods short-circuit
//! safely in that mode.

use std::sync::atomic::{AtomicI8, Ordering};
use std::sync::Arc;

/// Slot indices in the 8-entry query set.  Each pass writes a begin and end
/// timestamp at the corresponding pair.  Constants intentionally public so
/// the simulation / renderer can construct `*PassTimestampWrites` directly
/// without coupling to a panel-internal slot allocator.
pub const SLOT_COMPUTE_BEGIN: u32 = 0;
pub const SLOT_COMPUTE_END:   u32 = 1;
pub const SLOT_XOR_BEGIN:     u32 = 2;
pub const SLOT_XOR_END:       u32 = 3;
pub const SLOT_OR_BEGIN:      u32 = 4;
pub const SLOT_OR_END:        u32 = 5;
pub const SLOT_RENDER_BEGIN:  u32 = 6;
pub const SLOT_RENDER_END:    u32 = 7;

const SLOT_COUNT:    u32 = 8;
const RESOLVE_BYTES: u64 = SLOT_COUNT as u64 * 8; // u64 ticks

/// Bitmask of which passes were actually encoded with timestamp writes
/// during the current sample frame.  Passes that didn't fire (e.g. an
/// edit-shader dispatch with an empty queue) are excluded so we don't
/// later report bogus zero-or-negative durations from uninitialised slots.
#[derive(Default, Clone, Copy)]
pub struct PassMask(u8);

impl PassMask {
    pub const COMPUTE_TICK: u8 = 1 << 0;
    pub const XOR_EDIT:     u8 = 1 << 1;
    pub const OR_EDIT:      u8 = 1 << 2;
    pub const RENDER_PASS:  u8 = 1 << 3;

    pub fn set(&mut self, bit: u8) { self.0 |= bit; }
    pub fn contains(self, bit: u8) -> bool { (self.0 & bit) != 0 }
}

/// Per-pass GPU times in nanoseconds.  `None` means the corresponding pass
/// did not run during the sampled frame (e.g. an edit queue was empty).
#[derive(Default, Clone, Copy)]
pub struct PassDurations {
    pub compute_tick_ns: Option<u64>,
    pub xor_edit_ns:     Option<u64>,
    pub or_edit_ns:      Option<u64>,
    pub render_pass_ns:  Option<u64>,
}

impl PassDurations {
    pub fn compute_tick_ms(&self) -> Option<f64> { self.compute_tick_ns.map(ns_to_ms) }
    pub fn xor_edit_ms(&self) -> Option<f64> { self.xor_edit_ns.map(ns_to_ms) }
    pub fn or_edit_ms(&self) -> Option<f64> { self.or_edit_ns.map(ns_to_ms) }
    pub fn render_pass_ms(&self) -> Option<f64> { self.render_pass_ns.map(ns_to_ms) }
}

fn ns_to_ms(ns: u64) -> f64 { ns as f64 * 1e-6 }

enum PanelState {
    /// Not currently sampling; ready to begin a new sample on next frame.
    Idle,
    /// Caller has called `try_start`; passes are encoding their writes.
    Encoding,
    /// Submit done; map_async pending.  `ready` flips to `1` (ok) or `-1`
    /// (error) when the readback callback fires.
    AwaitingReadback { mask: PassMask, ready: Arc<AtomicI8> },
}

/// GPU-side timing collector.  See module docs.
pub struct TimestampPanel {
    enabled: bool,
    query_set: Option<wgpu::QuerySet>,
    resolve_buf: Option<wgpu::Buffer>,
    readback_buf: Option<wgpu::Buffer>,
    period_ns: f32,
    state: PanelState,
    latest: Option<PassDurations>,
}

impl TimestampPanel {
    /// Construct.  When `enabled` is false (feature absent or perf gate
    /// off), all GPU resources are skipped and every public method
    /// short-circuits.
    pub fn new(device: &wgpu::Device, queue: &wgpu::Queue, enabled: bool) -> Self {
        if !enabled {
            return Self {
                enabled: false,
                query_set: None,
                resolve_buf: None,
                readback_buf: None,
                period_ns: 0.0,
                state: PanelState::Idle,
                latest: None,
            };
        }
        let query_set = device.create_query_set(&wgpu::QuerySetDescriptor {
            label: Some("gol_perf_query_set"),
            ty: wgpu::QueryType::Timestamp,
            count: SLOT_COUNT,
        });
        let resolve_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("gol_perf_resolve"),
            size: RESOLVE_BYTES,
            usage: wgpu::BufferUsages::QUERY_RESOLVE | wgpu::BufferUsages::COPY_SRC,
            mapped_at_creation: false,
        });
        let readback_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("gol_perf_readback"),
            size: RESOLVE_BYTES,
            usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::MAP_READ,
            mapped_at_creation: false,
        });
        let period_ns = queue.get_timestamp_period();
        Self {
            enabled: true,
            query_set: Some(query_set),
            resolve_buf: Some(resolve_buf),
            readback_buf: Some(readback_buf),
            period_ns,
            state: PanelState::Idle,
            latest: None,
        }
    }

    pub fn enabled(&self) -> bool { self.enabled }

    /// Query-set reference for callers building `*PassTimestampWrites`.
    /// `None` when disabled or while a readback is in flight (we don't
    /// want a second sample writing into the same slots before the prior
    /// one is resolved).
    pub fn query_set(&self) -> Option<&wgpu::QuerySet> {
        if !matches!(self.state, PanelState::Encoding) {
            return None;
        }
        self.query_set.as_ref()
    }

    /// Try to enter Encoding state for this frame.  Returns true if the
    /// panel was idle and is now encoding (caller may use `query_set()`
    /// to populate timestamp_writes); false otherwise (disabled, or a
    /// previous readback is still in flight).
    pub fn try_start(&mut self) -> bool {
        if !self.enabled { return false; }
        if matches!(self.state, PanelState::Idle) {
            self.state = PanelState::Encoding;
            true
        } else {
            false
        }
    }

    /// Encode the resolve + readback copy into `encoder`, then transition
    /// to AwaitingReadback so subsequent `map_after_submit` arms the
    /// async map.  `mask` records which passes actually wrote their
    /// timestamp pairs this frame.
    pub fn finish(&mut self, encoder: &mut wgpu::CommandEncoder, mask: PassMask) {
        if !matches!(self.state, PanelState::Encoding) { return; }
        let (Some(qs), Some(resolve), Some(readback)) = (
            self.query_set.as_ref(),
            self.resolve_buf.as_ref(),
            self.readback_buf.as_ref(),
        ) else { return; };
        encoder.resolve_query_set(qs, 0..SLOT_COUNT, resolve, 0);
        encoder.copy_buffer_to_buffer(resolve, 0, readback, 0, RESOLVE_BYTES);
        self.state = PanelState::AwaitingReadback {
            mask,
            ready: Arc::new(AtomicI8::new(0)),
        };
    }

    /// Register the async-map callback after the encoder has been
    /// submitted.  Sets a shared atomic flag that `poll()` watches.
    pub fn map_after_submit(&mut self) {
        let PanelState::AwaitingReadback { ref ready, .. } = self.state else { return; };
        let Some(readback) = self.readback_buf.as_ref() else { return; };
        let flag = Arc::clone(ready);
        readback.slice(..).map_async(wgpu::MapMode::Read, move |result| {
            flag.store(if result.is_ok() { 1 } else { -1 }, Ordering::SeqCst);
        });
    }

    /// Drain any completed readback into `latest`.  Cheap to call every
    /// frame; does work only when a readback finished since the last poll.
    pub fn poll(&mut self) {
        let mask = match &self.state {
            PanelState::AwaitingReadback { mask, ready } => {
                match ready.load(Ordering::SeqCst) {
                    0 => return,            // still pending
                    v if v < 0 => {         // map error — drop the sample
                        if let Some(buf) = self.readback_buf.as_ref() { buf.unmap(); }
                        self.state = PanelState::Idle;
                        return;
                    }
                    _ => *mask,             // ready
                }
            }
            _ => return,
        };

        let Some(buf) = self.readback_buf.as_ref() else { return; };
        let mut ticks = [0u64; SLOT_COUNT as usize];
        {
            let slice = buf.slice(..);
            let view = slice.get_mapped_range();
            for (i, chunk) in view.chunks_exact(8).take(SLOT_COUNT as usize).enumerate() {
                ticks[i] = u64::from_le_bytes(chunk.try_into().unwrap_or([0; 8]));
            }
        }
        buf.unmap();

        let to_ns = |begin_idx: usize, end_idx: usize| -> u64 {
            let raw = ticks[end_idx].saturating_sub(ticks[begin_idx]);
            (raw as f32 * self.period_ns) as u64
        };

        let mut d = PassDurations::default();
        if mask.contains(PassMask::COMPUTE_TICK) {
            d.compute_tick_ns = Some(to_ns(0, 1));
        }
        if mask.contains(PassMask::XOR_EDIT) {
            d.xor_edit_ns = Some(to_ns(2, 3));
        }
        if mask.contains(PassMask::OR_EDIT) {
            d.or_edit_ns = Some(to_ns(4, 5));
        }
        if mask.contains(PassMask::RENDER_PASS) {
            d.render_pass_ns = Some(to_ns(6, 7));
        }
        self.latest = Some(d);
        self.state = PanelState::Idle;
    }

    pub fn latest(&self) -> Option<PassDurations> { self.latest }
}
