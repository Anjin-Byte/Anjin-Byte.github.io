// Shared message types between AppBackground (main thread) and backgroundRenderer (worker).

import type { BlankZone } from '../types/blankZones';
import type { Decal } from '../types/decals';
import type { HiResRegion } from '../types/hiresRegion';
import type { TextBlock } from '../types/text';
import type { FrameStats } from '../perf';

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
  | { type: 'set_zones';    zones: BlankZone[] }
  | { type: 'add_zone';    zone:  BlankZone   }
  | { type: 'update_zone'; zone:  BlankZone   }
  | { type: 'remove_zone'; id:    string      }
  | { type: 'clear_zones' }
  | { type: 'set_decals';    decals: Decal[] }
  | { type: 'add_decal';    decal:  Decal   }
  | { type: 'update_decal'; decal:  Decal   }
  | { type: 'remove_decal'; id:     string  }
  | { type: 'clear_decals' }
  | { type: 'set_hires_regions'; regions: HiResRegion[] }
  | { type: 'add_hires';        region: HiResRegion }
  | { type: 'update_hires';     region: HiResRegion }
  | { type: 'remove_hires';     id: string }
  | { type: 'clear_hires' }
  | { type: 'set_text';    blocks: TextBlock[] }
  | { type: 'add_text';    block:  TextBlock   }
  | { type: 'update_text'; block:  TextBlock   }
  | { type: 'remove_text'; id:     string      }
  | { type: 'clear_text' }
  | { type: 'perf_snapshot' }
  | { type: 'stop' };

export type WorkerOutMsg =
  | { type: 'ready'; backend: RendererBackend; gridInfo: GridInfo }
  // Sent after resize so the main thread can update its CoordSnapshot.
  | { type: 'grid_info'; gridInfo: GridInfo }
  | { type: 'zones_state';  zones: BlankZone[] }
  | { type: 'zones_error';  message: string }
  | { type: 'decals_state'; decals: Decal[] }
  | { type: 'decals_error'; message: string }
  | { type: 'hires_state';  regions: HiResRegion[] }
  | { type: 'text_state';   blocks: TextBlock[] }
  | { type: 'text_error';   message: string }
  | { type: 'perf_snapshot'; stats: FrameStats[] }
  // Non-fatal diagnostic: the named phase failed and a fallback was (or was not) attempted.
  | { type: 'error'; phase: string; message: string };
