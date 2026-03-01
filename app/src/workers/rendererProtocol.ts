// Shared message types between AppBackground (main thread) and backgroundRenderer (worker).

export type RendererBackend = 'gpu' | 'cpu';

export type WorkerInMsg =
  | { type: 'init'; canvas: OffscreenCanvas; cellPx: number }
  | { type: 'frame' }
  | { type: 'resize'; width: number; height: number }
  | { type: 'stop' };

export type WorkerOutMsg =
  | { type: 'ready'; backend: RendererBackend }
  // Non-fatal diagnostic: the named phase failed and a fallback was (or was not) attempted.
  | { type: 'error'; phase: string; message: string };
