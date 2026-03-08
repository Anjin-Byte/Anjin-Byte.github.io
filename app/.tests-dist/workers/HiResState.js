"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiResState = void 0;
const hiresNormalization_1 = require("../utils/hiresNormalization");
const FeatureState_1 = require("./FeatureState");
class HiResState extends FeatureState_1.FeatureState {
    constructor() {
        super(hiresNormalization_1.normalizeRegion, hiresNormalization_1.normalizeRegions);
    }
}
exports.HiResState = HiResState;
