import type { BlankZone } from '../types/blankZones';
import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';

export class BlankZoneState {
  private zones: BlankZone[] = [];

  getAll(): BlankZone[] {
    return this.zones;
  }

  setAll(zones: unknown): BlankZone[] {
    this.zones = normalizeZones(zones);
    return this.zones;
  }

  add(zone: unknown): { zones: BlankZone[]; error?: string } {
    const next = normalizeZone(zone);
    if (!next) {
      return { zones: this.zones, error: 'Invalid zone payload' };
    }
    const withoutSameId = this.zones.filter((zoneEntry) => zoneEntry.id !== next.id);
    this.zones = normalizeZones([...withoutSameId, next]);
    return { zones: this.zones };
  }

  update(zone: unknown): { zones: BlankZone[]; error?: string } {
    const next = normalizeZone(zone);
    if (!next) {
      return { zones: this.zones, error: 'Invalid zone payload' };
    }
    const idx = this.zones.findIndex((zoneEntry) => zoneEntry.id === next.id);
    if (idx < 0) {
      return { zones: this.zones, error: `Zone not found: ${next.id}` };
    }
    const updated = this.zones.slice();
    updated[idx] = next;
    this.zones = normalizeZones(updated);
    return { zones: this.zones };
  }

  remove(id: string): BlankZone[] {
    this.zones = this.zones.filter((zone) => zone.id !== id);
    return this.zones;
  }

  clear(): BlankZone[] {
    this.zones = [];
    return this.zones;
  }
}
