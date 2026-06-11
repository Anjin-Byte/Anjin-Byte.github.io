import { createLogger } from '../logger';
import type { WorkerBridge } from './useWorkerBridge';

const log = createLogger('AppBackground');

/**
 * Register the dev-only worker performance-log handlers: the one-shot startup
 * breakdown and the per-frame GPU pass timings. Visually a no-op — the logger's
 * debug/info channels are eliminated in production builds, so this is free in
 * prod. Extracted from AppBackground to keep that component a thin host.
 */
export function useWorkerDiagnostics(bridge: WorkerBridge): void {
  bridge.on('startup_breakdown', (msg) => {
    const fmt = (ms: number): string => `${ms.toFixed(0)}ms`;
    const lines: string[] = [
      `Startup breakdown:`,
      `  total            ${fmt(msg.phases.total)}`,
      `  gpu_probe        ${fmt(msg.phases.gpuProbe)}`,
      `  wasm_import      ${fmt(msg.phases.wasmImport)}`,
      `  new_offscreen    ${fmt(msg.phases.newOffscreen)}`,
      `  ready_post       ${fmt(msg.phases.readyPost)}`,
    ];
    const sub = msg.phases.newOffscreenPhases;
    if (sub) {
      lines.push(`  new_offscreen sub-phases:`);
      lines.push(`    device_request   ${fmt(sub.deviceRequest)}`);
      lines.push(`    panel_init       ${fmt(sub.panelInit)}`);
      lines.push(`    seeding          ${fmt(sub.seeding)}`);
      lines.push(`    simulation_init  ${fmt(sub.simulationInit)}`);
      lines.push(`    renderer_init    ${fmt(sub.rendererInit)}`);
    }
    log.info(lines.join('\n'));
  });

  bridge.on('gpu_pass_breakdown', (msg) => {
    const fmt = (v: number | null): string => (v === null ? '—' : `${v.toFixed(2)}ms`);
    const d = msg.durations;
    log.info(
      `GPU pass breakdown (frame ${msg.frame}):\n` +
        `  compute_tick   ${fmt(d.computeTickMs)}\n` +
        `  xor_edit       ${fmt(d.xorEditMs)}\n` +
        `  or_edit        ${fmt(d.orEditMs)}\n` +
        `  render_pass    ${fmt(d.renderPassMs)}`,
    );
  });

  bridge.on('tick_breakdown', (msg) => {
    log.info(
      `Tick breakdown (frame ${msg.frame}):  ` +
        `reseed ${msg.reseedMs.toFixed(1)}ms  ·  present ${msg.presentMs.toFixed(1)}ms`,
    );
  });

  bridge.on('memory_breakdown', (msg) => {
    const mb = (b: number): string => `${(b / 1048576).toFixed(2)} MB`;
    const m = msg.mem;
    const lines: string[] = [
      `Memory (frame ${msg.frame}):`,
      `  GPU surface    ${m.canvasW}×${m.canvasH} × 4B = ${mb(m.surfaceBytes)}  (×2–3 swapchain, browser-managed)`,
      `  GPU cells      ${mb(m.cellBytes)}  (3 buffers)`,
      `  GPU noise      ${mb(m.noiseBytes)}`,
    ];
    if (m.workerHeapBytes !== null) lines.push(`  worker heap    ${mb(m.workerHeapBytes)} used`);
    // Main-thread JS heap (Chrome-only `performance.memory`; absent elsewhere).
    const main = (performance as Performance & {
      memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number };
    }).memory;
    if (main) {
      lines.push(
        `  main heap      ${mb(main.usedJSHeapSize)} / ${mb(main.totalJSHeapSize)}  (limit ${mb(main.jsHeapSizeLimit)})`,
      );
    }
    log.info(lines.join('\n'));
  });
}
