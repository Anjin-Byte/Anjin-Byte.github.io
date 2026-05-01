import { ref, type Ref } from 'vue';
import { createLogger } from '../logger';
import type { WorkerInMsg, WorkerOutMsg, GridInfo } from '../workers/rendererProtocol';
import type { ThemePalette } from '../types/theme';

const log = createLogger('WorkerBridge');

type OutMsgType = WorkerOutMsg['type'];
type HandlerFn = (data: any) => void;

export interface WorkerBridge {
  gridInfo: Ref<GridInfo | null>;
  post(msg: WorkerInMsg, transfer?: Transferable[]): void;
  on<T extends OutMsgType>(type: T, handler: (data: Extract<WorkerOutMsg, { type: T }>) => void): () => void;
  init(canvas: OffscreenCanvas, cellPx: number, theme: ThemePalette): void;
  terminate(): void;
}

export function useWorkerBridge(): WorkerBridge {
  let worker: Worker | null = null;
  const gridInfo = ref<GridInfo | null>(null);
  const handlers = new Map<string, Set<HandlerFn>>();

  function post(msg: WorkerInMsg, transfer?: Transferable[]): void {
    if (!worker) return;
    try {
      if (transfer && transfer.length > 0) {
        worker.postMessage(msg, transfer);
      } else {
        worker.postMessage(msg);
      }
    } catch (err) {
      log.error('Worker postMessage failed:', err instanceof Error ? err.message : String(err));
    }
  }

  function on<T extends OutMsgType>(type: T, handler: (data: Extract<WorkerOutMsg, { type: T }>) => void): () => void {
    if (!handlers.has(type)) handlers.set(type, new Set());
    handlers.get(type)!.add(handler as HandlerFn);
    return () => handlers.get(type)?.delete(handler as HandlerFn);
  }

  function dispatch(data: WorkerOutMsg): void {
    // Update gridInfo for 'ready' and 'grid_info' messages
    if (data.type === 'ready' || data.type === 'grid_info') {
      gridInfo.value = data.gridInfo;
    }
    const fns = handlers.get(data.type);
    if (fns) {
      for (const fn of fns) fn(data);
    }
  }

  function init(canvas: OffscreenCanvas, cellPx: number, theme: ThemePalette): void {
    const w = new Worker(
      new URL('../workers/backgroundRenderer.ts', import.meta.url),
      { type: 'module' },
    );
    w.onmessage = (e: MessageEvent<WorkerOutMsg>) => dispatch(e.data);
    w.onerror = (e: ErrorEvent) => {
      log.error('Worker uncaught exception:', e.message, `at ${e.filename}:${e.lineno}`);
    };
    worker = w;
    post({ type: 'init', canvas, cellPx, theme }, [canvas]);
  }

  function terminate(): void {
    post({ type: 'stop' });
    worker?.terminate();
    worker = null;
  }

  return { gridInfo, post, on, init, terminate };
}
