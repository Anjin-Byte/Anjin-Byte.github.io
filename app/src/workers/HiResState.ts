import { normalizeRegion, normalizeRegions } from '../utils/hiresNormalization';
import { FeatureState } from './FeatureState';

export class HiResState extends FeatureState<import('../types/hiresRegion').HiResRegion> {
  constructor() {
    super(normalizeRegion, normalizeRegions);
  }
}
