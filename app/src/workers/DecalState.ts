import { normalizeDecal, normalizeDecals } from '../utils/decalNormalization';
import { FeatureState } from './FeatureState';

export class DecalState extends FeatureState<import('../types/decals').Decal> {
  constructor() {
    super(normalizeDecal, normalizeDecals);
  }
}
