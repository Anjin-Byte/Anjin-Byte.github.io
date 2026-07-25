"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_BLANK_ZONES = exports.BLANK_ZONE_STORAGE_KEY = exports.BLANK_ZONE_STORAGE_VERSION = exports.asZoneId = void 0;
const asZoneId = (s) => s;
exports.asZoneId = asZoneId;
exports.BLANK_ZONE_STORAGE_VERSION = 1;
exports.BLANK_ZONE_STORAGE_KEY = `gol.gridBlankZones.v${exports.BLANK_ZONE_STORAGE_VERSION}`;
exports.MAX_BLANK_ZONES = 128;
