import { Universe } from '../../../crates/game_of_life/pkg/game_of_life.js';
import { memory } from '../../../crates/game_of_life/pkg/game_of_life_bg.wasm';

export class WasmBridge {
  private universe: Universe;
  readonly width: number;
  readonly height: number;

  private constructor(universe: Universe) {
    this.universe = universe;
    this.width = universe.width();
    this.height = universe.height();
  }

  // WASM is initialized at module load time by the bundler target.
  // Async signature kept for future-proofing.
  static async create(): Promise<WasmBridge> {
    return new WasmBridge(Universe.new());
  }

  tick(): void {
    this.universe.tick();
  }

  getCells(): Uint8Array {
    return new Uint8Array(memory.buffer, this.universe.cells(), this.width * this.height);
  }
}
