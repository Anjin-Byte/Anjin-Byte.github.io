// WebGL2 ping-pong fallback renderer adapter. Wraps a constructed
// `WebglGameOfLife` wasm handle in the worker's `Renderer` contract. Pure
// factory, mirroring makeGpuRenderer: orchestration (canvas commit, ready post,
// camera/theme re-apply) stays in backgroundRenderer.ts.

import type { WebglGameOfLife } from '@gpu-pkg/game_of_life_gpu.js';
import { createLogger } from '../logger';
import type { ThemePalette } from '../types/theme';
import { serializeTheme } from '../types/theme';
import { errorMessage } from './renderHelpers';
import type { Renderer } from './renderer';

const log = createLogger('Renderer');

export function makeWebglRenderer(gl: WebglGameOfLife): Renderer {
  return {
    tick: () => gl.tick_and_render(),
    renderOnly: () => gl.render_only(),
    resize: (w, h) => gl.resize(w, h),
    setCamera: (x, y) => gl.set_camera(x, y),
    setTransition: (t) => gl.set_transition(t),
    setInitFade: (t) => gl.set_init_fade(t),
    toggleCell: (cx, cy) => gl.toggle_cell(cx, cy),
    setTheme: (theme: ThemePalette) => {
      try {
        gl.set_theme(serializeTheme(theme));
      } catch (err) {
        log.error('WebGL2 theme update failed:', errorMessage(err));
      }
    },
    free: () => gl.free(),
  };
}
