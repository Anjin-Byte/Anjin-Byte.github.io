import type { HiResRegion } from '../types/hiresRegion';
import { normalizeRegion, normalizeRegions } from '../utils/hiresNormalization';

export class HiResState {
  private regions: HiResRegion[] = [];

  getAll(): HiResRegion[] {
    return this.regions;
  }

  setAll(regions: unknown): HiResRegion[] {
    this.regions = normalizeRegions(regions);
    return this.regions;
  }

  add(region: unknown): { regions: HiResRegion[]; error?: string } {
    const next = normalizeRegion(region);
    if (!next) return { regions: this.regions, error: 'Invalid hi-res region payload' };
    const withoutSameId = this.regions.filter((r) => r.id !== next.id);
    this.regions = normalizeRegions([...withoutSameId, next]);
    return { regions: this.regions };
  }

  update(region: unknown): { regions: HiResRegion[]; error?: string } {
    const next = normalizeRegion(region);
    if (!next) return { regions: this.regions, error: 'Invalid hi-res region payload' };
    const idx = this.regions.findIndex((r) => r.id === next.id);
    if (idx < 0) return { regions: this.regions, error: `Region not found: ${next.id}` };
    const updated = this.regions.slice();
    updated[idx] = next;
    this.regions = normalizeRegions(updated);
    return { regions: this.regions };
  }

  remove(id: string): HiResRegion[] {
    this.regions = this.regions.filter((r) => r.id !== id);
    return this.regions;
  }

  clear(): HiResRegion[] {
    this.regions = [];
    return this.regions;
  }
}
