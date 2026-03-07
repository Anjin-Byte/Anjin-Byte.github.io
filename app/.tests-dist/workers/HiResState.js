"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiResState = void 0;
const hiresNormalization_1 = require("../utils/hiresNormalization");
class HiResState {
    constructor() {
        Object.defineProperty(this, "regions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    getAll() {
        return this.regions;
    }
    setAll(regions) {
        this.regions = (0, hiresNormalization_1.normalizeRegions)(regions);
        return this.regions;
    }
    add(region) {
        const next = (0, hiresNormalization_1.normalizeRegion)(region);
        if (!next)
            return { regions: this.regions, error: 'Invalid hi-res region payload' };
        const withoutSameId = this.regions.filter((r) => r.id !== next.id);
        this.regions = (0, hiresNormalization_1.normalizeRegions)([...withoutSameId, next]);
        return { regions: this.regions };
    }
    update(region) {
        const next = (0, hiresNormalization_1.normalizeRegion)(region);
        if (!next)
            return { regions: this.regions, error: 'Invalid hi-res region payload' };
        const idx = this.regions.findIndex((r) => r.id === next.id);
        if (idx < 0)
            return { regions: this.regions, error: `Region not found: ${next.id}` };
        const updated = this.regions.slice();
        updated[idx] = next;
        this.regions = (0, hiresNormalization_1.normalizeRegions)(updated);
        return { regions: this.regions };
    }
    remove(id) {
        this.regions = this.regions.filter((r) => r.id !== id);
        return this.regions;
    }
    clear() {
        this.regions = [];
        return this.regions;
    }
}
exports.HiResState = HiResState;
