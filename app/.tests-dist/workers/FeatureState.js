"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureState = void 0;
class FeatureState {
    constructor(normalizeOne, normalizeAll) {
        Object.defineProperty(this, "normalizeOne", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: normalizeOne
        });
        Object.defineProperty(this, "normalizeAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: normalizeAll
        });
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    getAll() {
        return this.items;
    }
    setAll(raw) {
        this.items = this.normalizeAll(raw);
        return this.items;
    }
    add(raw) {
        const item = this.normalizeOne(raw);
        if (!item)
            return { error: 'Invalid payload' };
        const withoutSameId = this.items.filter((i) => i.id !== item.id);
        this.items = this.normalizeAll([...withoutSameId, item]);
        return {};
    }
    update(raw) {
        const item = this.normalizeOne(raw);
        if (!item)
            return { error: 'Invalid payload' };
        const idx = this.items.findIndex((i) => i.id === item.id);
        if (idx < 0)
            return { error: `Item ${item.id} not found` };
        const updated = this.items.slice();
        updated[idx] = item;
        this.items = this.normalizeAll(updated);
        return {};
    }
    remove(id) {
        this.items = this.items.filter((i) => i.id !== id);
        return this.items;
    }
    clear() {
        this.items = [];
        return this.items;
    }
}
exports.FeatureState = FeatureState;
