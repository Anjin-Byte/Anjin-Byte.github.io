// Shared message types between AppBackground (main thread) and backgroundRenderer (worker).

export type RendererBackend = 'gpu' | 'cpu';

/** Grid dimensions needed by the main thread for pixel→cell coordinate mapping. */
export interface GridInfo {
  screenCols:  number;
  screenRows:  number;
  paddedRows:  number;
  wordsPerRow: number;
  gridPitch:   number;  // float, matches PaperParams.grid_pitch_px
}

export type WorkerInMsg =
  | { type: 'init'; canvas: OffscreenCanvas; cellPx: number }
  | { type: 'frame' }
  | { type: 'resize'; width: number; height: number }
  | { type: 'scroll'; scrollY: number }
  // Toggle a cell's alive/dead state. cx/cy are already wrapped to the
  // visible grid by the main thread. scrollCanvasPx is the scroll offset
  // at click time so the worker can validate/log if needed.
  | { type: 'toggle_cell'; cx: number; cy: number; scrollCanvasPx: number }
  | { type: 'stop' };

export type WorkerOutMsg =
  | { type: 'ready'; backend: RendererBackend; gridInfo: GridInfo }
  // Sent after resize so the main thread can update its CoordSnapshot.
  | { type: 'grid_info'; gridInfo: GridInfo }
  // Non-fatal diagnostic: the named phase failed and a fallback was (or was not) attempted.
  | { type: 'error'; phase: string; message: string };
