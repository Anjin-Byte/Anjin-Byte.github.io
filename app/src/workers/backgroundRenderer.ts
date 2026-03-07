// Web Worker: owns all background rendering logic.
// Receives OffscreenCanvas from main thread and drives GPU or CPU rendering.
// Main thread sends 'frame' messages at requestAnimationFrame rate for vsync sync.

import { createLogger } from '../logger';
import { PERF_ENABLED, PerfSampler } from '../perf';
import type { WorkerInMsg, WorkerOutMsg, GridInfo } from './rendererProtocol';
import type { BlankZone } from '../types/blankZones';
import type { Decal } from '../types/decals';
import type { HiResRegion } from '../types/hiresRegion';
import type { TextBlock } from '../types/text';
import { BlankZoneState } from './BlankZoneState';
import { DecalState } from './DecalState';
import { HiResState } from './HiResState';
import { TextState } from './TextState';
import { rasterizeTextBlocks, rasterizeTextBlocksForRegion } from './textRasterizer';
import { generateSdf } from './textSdfGenerator';
import { makeCpuRenderer } from './cpuRenderer';

const log = createLogger('Renderer');
const ws  = self as unknown as DedicatedWorkerGlobalScope;
const perf: PerfSampler | null = PERF_ENABLED ? new PerfSampler(log) : null;

// ── Renderer interface ────────────────────────────────────────────────────────

interface Renderer {
  tick(): void;
  renderOnly?(): void;
  resize(w: number, h: number): void;
  setScroll?(scrollY: number): void;
  setTransition?(transitionT: number): void;
  toggleCell?(cx: number, cy: number): void;
  setZones?(zones: BlankZone[]): void;
  setDecals?(decals: Decal[]): void;
  setHiResRegions?(regions: HiResRegion[]): void;
  setText?(blocks: TextBlock[]): void;
  gridInfo?(): GridInfo;
  free(): void;
}

let renderer: Renderer | null = null;
// Latest scroll offset (canvas px). Cached so it can be re-applied when the
// renderer becomes available (init is async) or after a resize (resize rewrites
// the uniform buffer, resetting scroll_y to 0).
let pendingScrollY = 0;
// Simulation tick rate throttle. The display renders every frame for smooth
// scrolling; the GoL simulation only advances every TICK_EVERY frames.
// At 60 Hz: TICK_EVERY=32 → ~1.9 sim fps. Adjust to taste.
const TICK_EVERY = 210;
let frameCount  = 0;
const zoneState  = new BlankZoneState();
const decalState = new DecalState();
const hiresState = new HiResState();
const textState  = new TextState();

// ── Helpers ───────────────────────────────────────────────────────────────────

function post(msg: WorkerOutMsg): void {
  ws.postMessage(msg);
}

function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

function easeTransition(t: number): number {
  const clamped = Math.min(1, Math.max(0, t));
  return clamped * clamped * (3 - 2 * clamped);
}

function postZonesState(): void {
  post({ type: 'zones_state', zones: zoneState.getAll() });
}

function postZonesError(message: string): void {
  post({ type: 'zones_error', message });
}

function applyZonesToRenderer(): void {
  renderer?.setZones?.(zoneState.getAll());
}

function setZonesState(next: unknown): void {
  zoneState.setAll(next);
  applyZonesToRenderer();
  postZonesState();
}

function postDecalsState(): void {
  post({ type: 'decals_state', decals: decalState.getAll() });
}

function postDecalsError(message: string): void {
  post({ type: 'decals_error', message });
}

function applyDecalsToRenderer(): void {
  renderer?.setDecals?.(decalState.getAll());
}

function setDecalsState(next: unknown): void {
  decalState.setAll(next);
  applyDecalsToRenderer();
  postDecalsState();
}

function postHiResState(): void { post({ type: 'hires_state', regions: hiresState.getAll() }); }
function postHiResError(message: string): void { post({ type: 'error', phase: 'hires', message }); }
function applyHiResToRenderer(): void { renderer?.setHiResRegions?.(hiresState.getAll()); }

function postTextState(): void { post({ type: 'text_state', blocks: textState.getAll() }); }
function postTextError(message: string): void { post({ type: 'text_error', message }); }
function applyTextToRenderer(): void { renderer?.setText?.(textState.getAll()); }

// ── Message handler ───────────────────────────────────────────────────────────

ws.onmessage = async (e: MessageEvent<WorkerInMsg>) => {
  switch (e.data.type) {

    case 'init': {
      const { canvas, cellPx } = e.data;
      log.debug('Init received — canvas', canvas.width, 'x', canvas.height, 'cell_px', cellPx);

      // ── WebGPU pre-probe (no canvas involved) ─────────────────────────
      // We must verify WebGPU works BEFORE calling new_offscreen(), because
      // create_surface() permanently claims the canvas as a WebGPU context.
      // If that call succeeds but requestDevice() then fails, getContext('2d')
      // can never be obtained on the same canvas, breaking the CPU fallback.
      log.debug('GPU: probing WebGPU availability...');
      let gpuProbeOk = false;
      try {
        const probeAdapter = await navigator.gpu?.requestAdapter() ?? null;
        if (!probeAdapter) throw new Error('No WebGPU adapter');
        gpuProbeOk = true;
        log.debug('GPU: probe passed — adapter found');
      } catch (probeErr) {
        log.info('GPU: probe failed, will use CPU renderer:', errorMessage(probeErr));
        post({ type: 'error', phase: 'gpu-probe', message: errorMessage(probeErr) });
      }

      // ── GPU path (canvas committed here) ──────────────────────────────
      if (gpuProbeOk) {
        log.debug('GPU: loading wasm module...');
        try {
          const { GpuGameOfLife } = await import('@gpu-pkg/game_of_life_gpu.js');
          log.debug('GPU: module loaded, initialising surface...');
          const gpu = await GpuGameOfLife.new_offscreen(canvas, cellPx);
          // Verify set_zones_json is present at init time so a future rename/removal
          // produces a visible warning rather than silently failing on every zone update.
          const gpuExt = gpu as unknown as {
            set_zones_json?: (zonesJson: string) => void;
            set_decals_json?: (decalsJson: string) => void;
            add_hires_region?: (id: number, x1: number, y1: number, x2: number, y2: number, m: number, showGrid: boolean, showBaseGrid: boolean, showBorder: boolean) => void;
            remove_hires_region?: (id: number) => void;
            update_hires_flags?: (id: number, showGrid: boolean, showBaseGrid: boolean, showBorder: boolean) => void;
            set_hires_paused?: (id: number, paused: boolean) => void;
            clear_hires_regions?: () => void;
            set_hires_frozen_cells?: (regionId: number, cellsJson: string) => void;
            clear_hires_frozen_cells?: (regionId: number) => void;
            set_frozen_cells?: (cellsJson: string) => void;
            clear_frozen_cells?: () => void;
            set_text_glyphs?: (glyphsJson: string) => void;
            clear_text_glyphs?: () => void;
            upload_text_atlas?: (data: Uint8Array, width: number, height: number) => void;
          };
          const setZonesOnGpu = (zones: BlankZone[]): void => {
            if (typeof gpuExt.set_zones_json !== 'function') return;
            try {
              gpuExt.set_zones_json(JSON.stringify(zones));
            } catch (err) {
              postZonesError(`GPU zone update failed: ${errorMessage(err)}`);
            }
          };
          const setDecalsOnGpu = (decals: Decal[]): void => {
            if (typeof gpuExt.set_decals_json !== 'function') return;
            try {
              gpuExt.set_decals_json(JSON.stringify(decals));
            } catch (err) {
              postDecalsError(`GPU decal update failed: ${errorMessage(err)}`);
            }
          };
          // Track active region geometry per id so we can detect flag-only updates.
          const activeHiResKeys = new Map<string, string>();
          const hiresGeomKey = (r: HiResRegion): string =>
            `${r.x1},${r.y1},${r.x2},${r.y2},${r.multiplier}`;
          const hiresIdNum = (id: string): number => {
            // Hash string id to a u32 for the Rust API
            let h = 0;
            for (let i = 0; i < id.length; i++) h = ((h << 5) - h + id.charCodeAt(i)) | 0;
            return h >>> 0;
          };
          const setHiResRegionsOnGpu = (regions: HiResRegion[]): void => {
            const currentIds = new Set(regions.map((r) => r.id));
            // Remove regions no longer present
            for (const [id] of activeHiResKeys) {
              if (!currentIds.has(id)) {
                gpuExt.remove_hires_region?.(hiresIdNum(id));
                activeHiResKeys.delete(id);
              }
            }
            if (regions.length === 0) {
              gpuExt.clear_hires_regions?.();
              activeHiResKeys.clear();
              return;
            }
            for (const r of regions) {
              const key = hiresGeomKey(r);
              const nid = hiresIdNum(r.id);
              if (activeHiResKeys.get(r.id) !== key) {
                // Geometry changed or new — (re)create on GPU
                gpuExt.remove_hires_region?.(nid);
                gpuExt.add_hires_region?.(nid, r.x1, r.y1, r.x2, r.y2, r.multiplier, r.showGrid ?? true, r.showBaseGrid ?? true, r.showBorder ?? true);
                activeHiResKeys.set(r.id, key);
              } else {
                gpuExt.update_hires_flags?.(nid, r.showGrid ?? true, r.showBaseGrid ?? true, r.showBorder ?? true);
              }
              gpuExt.set_hires_paused?.(nid, !r.enabled);
            }
          };
          const setTextOnGpu = (blocks: TextBlock[]): void => {
            // Frozen cells (cells/both modes) — base grid
            const cellBlocks = blocks.filter((b) => b.enabled && b.renderMode !== 'sdf');
            if (cellBlocks.length === 0) { gpuExt.clear_frozen_cells?.(); }
            else {
              try {
                gpuExt.set_frozen_cells?.(JSON.stringify(rasterizeTextBlocks(cellBlocks)));
              } catch (err) { postTextError(`Frozen cell rasterization failed: ${errorMessage(err)}`); }
            }
            // Frozen cells — hi-res regions (fine resolution)
            for (const region of hiresState.getAll()) {
              const nid = hiresIdNum(region.id);
              if (cellBlocks.length === 0) {
                gpuExt.clear_hires_frozen_cells?.(nid);
                continue;
              }
              try {
                const fineCells = rasterizeTextBlocksForRegion(cellBlocks, region);
                if (fineCells.length === 0) { gpuExt.clear_hires_frozen_cells?.(nid); }
                else { gpuExt.set_hires_frozen_cells?.(nid, JSON.stringify(fineCells)); }
              } catch (err) { postTextError(`Hi-res frozen rasterization failed: ${errorMessage(err)}`); }
            }
            // SDF glyphs (sdf/both modes)
            try {
              const sdf = generateSdf(blocks);
              if (!sdf) { gpuExt.clear_text_glyphs?.(); return; }
              gpuExt.upload_text_atlas?.(sdf.atlas, sdf.atlasWidth, sdf.atlasHeight);
              gpuExt.set_text_glyphs?.(JSON.stringify(sdf.glyphs));
            } catch (err) { postTextError(`SDF generation failed: ${errorMessage(err)}`); }
          };
          const getGridInfo = (): GridInfo => ({
            screenCols:  gpu.screen_cols(),
            screenRows:  gpu.screen_rows(),
            paddedRows:  gpu.padded_rows(),
            wordsPerRow: gpu.words_per_row(),
            gridPitch:   gpu.grid_pitch(),
          });

          renderer = {
            tick:       () => gpu.tick_and_render(),
            renderOnly: () => gpu.render_only(),
            resize:     (w, h) => { canvas.width = w; canvas.height = h; gpu.resize(w, h); },
            setScroll:  (scrollY) => gpu.set_scroll(scrollY),
            setTransition: (transitionT) => gpu.set_transition(transitionT),
            toggleCell: (cx, cy) => { gpu.toggle_cell(cx, cy); gpu.flush_and_render(); },
            setZones:   (zones)  => setZonesOnGpu(zones),
            setDecals:  (decals) => setDecalsOnGpu(decals),
            setHiResRegions: (regions) => setHiResRegionsOnGpu(regions),
            setText:    (blocks) => setTextOnGpu(blocks),
            gridInfo:   getGridInfo,
            free:       () => gpu.free(),
          };
          // Scroll messages sent during async GPU init were dropped (renderer was null).
          // Re-apply the latest position now that the renderer is accepting commands.
          renderer.setScroll?.(pendingScrollY);
          renderer.setTransition?.(1);
          renderer.setZones?.(zoneState.getAll());
          renderer.setDecals?.(decalState.getAll());
          renderer.setHiResRegions?.(hiresState.getAll());
          renderer.setText?.(textState.getAll());
          log.info('GPU renderer ready');
          post({ type: 'ready', backend: 'gpu', gridInfo: getGridInfo() });
          break;
        } catch (gpuErr) {
          const message = errorMessage(gpuErr);
          // Unexpected: probe passed but WASM init failed.
          // Canvas is likely locked to WebGPU — CPU canvas fallback unavailable.
          log.error('GPU init failed after probe passed (canvas may be locked):', message);
          post({ type: 'error', phase: 'gpu-init', message });
          break;
        }
      }

      // ── CPU fallback (canvas is clean — probe failed before canvas commit) ──
      log.debug('CPU: starting software renderer...');
      try {
        renderer = await makeCpuRenderer(canvas);
        renderer.setScroll?.(pendingScrollY);
        renderer.setZones?.(zoneState.getAll());
        renderer.setDecals?.(decalState.getAll());
        renderer.setHiResRegions?.(hiresState.getAll());
        renderer.setText?.(textState.getAll());
        log.info('CPU renderer ready');
        // CPU renderer has no grid info; supply zeroed placeholder.
        post({ type: 'ready', backend: 'cpu', gridInfo: { screenCols: 0, screenRows: 0, paddedRows: 0, wordsPerRow: 0, gridPitch: 0 } });
      } catch (cpuErr) {
        const message = errorMessage(cpuErr);
        log.error('CPU init failed:', message);
        post({ type: 'error', phase: 'cpu-init', message });
      }
      break;
    }

    case 'frame':
      if (!renderer) break;
      perf?.beginFrame();
      frameCount++;
      if (renderer.renderOnly && frameCount % TICK_EVERY !== 0) {
        renderer.setTransition?.(easeTransition((frameCount % TICK_EVERY) / TICK_EVERY));
        if (perf) { perf.time('render', () => renderer!.renderOnly!()); }
        else { renderer.renderOnly(); }
      } else {
        renderer.setTransition?.(0);
        if (perf) { perf.time('tick', () => renderer!.tick()); }
        else { renderer.tick(); }
      }
      perf?.endFrame();
      break;

    case 'resize':
      log.debug('Resize →', e.data.width, 'x', e.data.height);
      renderer?.resize(e.data.width, e.data.height);
      // resize() rewrites the uniform buffer (scroll_y resets to 0); re-apply.
      renderer?.setScroll?.(pendingScrollY);
      renderer?.setTransition?.(1);
      renderer?.setZones?.(zoneState.getAll());
      renderer?.setDecals?.(decalState.getAll());
      renderer?.setHiResRegions?.(hiresState.getAll());
      renderer?.setText?.(textState.getAll());
      // Grid dimensions change on resize; notify main thread.
      if (renderer?.gridInfo) {
        post({ type: 'grid_info', gridInfo: renderer.gridInfo() });
      }
      break;

    case 'scroll':
      pendingScrollY = e.data.scrollY;
      renderer?.setScroll?.(pendingScrollY);
      break;

    case 'toggle_cell':
      renderer?.toggleCell?.(e.data.cx, e.data.cy);
      break;

    case 'set_zones': setZonesState(e.data.zones); break;
    case 'add_zone': {
      const result = zoneState.add(e.data.zone);
      if (result.error) { postZonesError(result.error); break; }
      applyZonesToRenderer(); postZonesState(); break;
    }
    case 'update_zone': {
      const result = zoneState.update(e.data.zone);
      if (result.error) { postZonesError(result.error); break; }
      applyZonesToRenderer(); postZonesState(); break;
    }
    case 'remove_zone': zoneState.remove(e.data.id); applyZonesToRenderer(); postZonesState(); break;
    case 'clear_zones': zoneState.clear(); applyZonesToRenderer(); postZonesState(); break;

    case 'set_decals': setDecalsState(e.data.decals); break;
    case 'add_decal': {
      const result = decalState.add(e.data.decal);
      if (result.error) { postDecalsError(result.error); break; }
      applyDecalsToRenderer(); postDecalsState(); break;
    }
    case 'update_decal': {
      const result = decalState.update(e.data.decal);
      if (result.error) { postDecalsError(result.error); break; }
      applyDecalsToRenderer(); postDecalsState(); break;
    }
    case 'remove_decal': decalState.remove(e.data.id); applyDecalsToRenderer(); postDecalsState(); break;
    case 'clear_decals': decalState.clear(); applyDecalsToRenderer(); postDecalsState(); break;

    case 'set_hires_regions': hiresState.setAll(e.data.regions); applyHiResToRenderer(); postHiResState(); break;
    case 'add_hires': {
      const result = hiresState.add(e.data.region);
      if (result.error) { postHiResError(result.error); break; }
      applyHiResToRenderer(); postHiResState(); break;
    }
    case 'update_hires': {
      const result = hiresState.update(e.data.region);
      if (result.error) { postHiResError(result.error); break; }
      applyHiResToRenderer(); postHiResState(); break;
    }
    case 'remove_hires': hiresState.remove(e.data.id); applyHiResToRenderer(); postHiResState(); break;
    case 'clear_hires': hiresState.clear(); applyHiResToRenderer(); postHiResState(); break;

    case 'set_text': textState.setAll(e.data.blocks); applyTextToRenderer(); postTextState(); break;
    case 'add_text': {
      const result = textState.add(e.data.block);
      if (result.error) { postTextError(result.error); break; }
      applyTextToRenderer(); postTextState(); break;
    }
    case 'update_text': {
      const result = textState.update(e.data.block);
      if (result.error) { postTextError(result.error); break; }
      applyTextToRenderer(); postTextState(); break;
    }
    case 'remove_text': textState.remove(e.data.id); applyTextToRenderer(); postTextState(); break;
    case 'clear_text': textState.clear(); applyTextToRenderer(); postTextState(); break;

    case 'perf_snapshot':
      if (perf) {
        post({ type: 'perf_snapshot', stats: perf.snapshot() });
      }
      break;

    case 'stop':
      log.debug('Stop received, freeing renderer');
      renderer?.free();
      renderer = null;
      break;
  }
};
