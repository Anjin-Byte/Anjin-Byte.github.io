import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';
import { FeatureState } from './FeatureState';

export class BlankZoneState extends FeatureState<import('../types/blankZones').BlankZone> {
  constructor() {
    super(normalizeZone, normalizeZones);
  }
}
