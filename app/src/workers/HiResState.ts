import type { HiResRegion } from '../types/hiresRegion';
import { normalizeRegion } from '../utils/hiresNormalization';

export class HiResState {
  private region: HiResRegion | null = null;

  get(): HiResRegion | null {
    return this.region;
  }

  set(region: unknown): HiResRegion | null {
    this.region = normalizeRegion(region);
    return this.region;
  }

  clear(): null {
    this.region = null;
    return null;
  }
}
