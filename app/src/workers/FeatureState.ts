interface HasId {
  id: string;
}

export class FeatureState<T extends HasId> {
  private items: T[] = [];

  constructor(
    private normalizeOne: (raw: unknown) => T | null,
    private normalizeAll: (raw: unknown) => T[],
  ) {}

  getAll(): T[] {
    return this.items;
  }

  setAll(raw: unknown): T[] {
    this.items = this.normalizeAll(raw);
    return this.items;
  }

  add(raw: unknown): { error?: string } {
    const item = this.normalizeOne(raw);
    if (!item) return { error: 'Invalid payload' };
    const withoutSameId = this.items.filter((i) => i.id !== item.id);
    this.items = this.normalizeAll([...withoutSameId, item]);
    return {};
  }

  update(raw: unknown): { error?: string } {
    const item = this.normalizeOne(raw);
    if (!item) return { error: 'Invalid payload' };
    const idx = this.items.findIndex((i) => i.id === item.id);
    if (idx < 0) return { error: `Item ${item.id} not found` };
    const updated = this.items.slice();
    updated[idx] = item;
    this.items = this.normalizeAll(updated);
    return {};
  }

  remove(id: string): T[] {
    this.items = this.items.filter((i) => i.id !== id);
    return this.items;
  }

  clear(): T[] {
    this.items = [];
    return this.items;
  }
}
