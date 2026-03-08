export interface FeatureStorageConfig<T> {
  key: string;
  version: number;
  normalize: (raw: unknown) => T[];
  itemsKey: string;
  migrate?: (raw: Record<string, unknown>) => Record<string, unknown>;
}

export interface FeatureStorage<T> {
  load(): T[];
  save(items: T[]): void;
  clear(): void;
}

function storageAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}

export function createFeatureStorage<T>(config: FeatureStorageConfig<T>): FeatureStorage<T> {
  return {
    load(): T[] {
      if (!storageAvailable()) return [];
      try {
        const json = localStorage.getItem(config.key);
        if (!json) return [];
        let parsed = JSON.parse(json) as Record<string, unknown>;
        const version = parsed.version as number | undefined;
        if (typeof version !== 'number' || version > config.version) return [];
        if (config.migrate && version < config.version) {
          parsed = config.migrate(parsed);
        }
        return config.normalize(parsed[config.itemsKey]);
      } catch {
        return [];
      }
    },

    save(items: T[]): void {
      if (!storageAvailable()) return;
      const payload: Record<string, unknown> = {
        version: config.version,
        [config.itemsKey]: config.normalize(items),
      };
      localStorage.setItem(config.key, JSON.stringify(payload));
    },

    clear(): void {
      if (!storageAvailable()) return;
      localStorage.removeItem(config.key);
    },
  };
}
