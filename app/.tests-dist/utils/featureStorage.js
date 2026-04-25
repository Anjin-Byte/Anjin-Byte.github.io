"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeatureStorage = createFeatureStorage;
function storageAvailable() {
    return typeof localStorage !== 'undefined';
}
function createFeatureStorage(config) {
    return {
        load() {
            if (!storageAvailable())
                return [];
            try {
                const json = localStorage.getItem(config.key);
                if (!json)
                    return [];
                let parsed = JSON.parse(json);
                const version = parsed.version;
                if (typeof version !== 'number' || version > config.version)
                    return [];
                if (config.migrate && version < config.version) {
                    parsed = config.migrate(parsed);
                }
                return config.normalize(parsed[config.itemsKey]);
            }
            catch {
                return [];
            }
        },
        save(items) {
            if (!storageAvailable())
                return;
            const payload = {
                version: config.version,
                [config.itemsKey]: config.normalize(items),
            };
            localStorage.setItem(config.key, JSON.stringify(payload));
        },
        clear() {
            if (!storageAvailable())
                return;
            localStorage.removeItem(config.key);
        },
    };
}
