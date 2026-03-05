import type { Decal } from '../types/decals';
import { normalizeDecal, normalizeDecals } from '../utils/decalNormalization';

export class DecalState {
  private decals: Decal[] = [];

  getAll(): Decal[] {
    return this.decals;
  }

  setAll(decals: unknown): Decal[] {
    this.decals = normalizeDecals(decals);
    return this.decals;
  }

  add(decal: unknown): { decals: Decal[]; error?: string } {
    const next = normalizeDecal(decal);
    if (!next) return { decals: this.decals, error: 'Invalid decal payload' };
    const withoutSameId = this.decals.filter((d) => d.id !== next.id);
    this.decals = normalizeDecals([...withoutSameId, next]);
    return { decals: this.decals };
  }

  update(decal: unknown): { decals: Decal[]; error?: string } {
    const next = normalizeDecal(decal);
    if (!next) return { decals: this.decals, error: 'Invalid decal payload' };
    const idx = this.decals.findIndex((d) => d.id === next.id);
    if (idx < 0) return { decals: this.decals, error: `Decal not found: ${next.id}` };
    const updated = this.decals.slice();
    updated[idx] = next;
    this.decals = normalizeDecals(updated);
    return { decals: this.decals };
  }

  remove(id: string): Decal[] {
    this.decals = this.decals.filter((d) => d.id !== id);
    return this.decals;
  }

  clear(): Decal[] {
    this.decals = [];
    return this.decals;
  }
}
