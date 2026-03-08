import { normalizeTextBlock, normalizeTextBlocks } from '../utils/textNormalization';
import { FeatureState } from './FeatureState';

export class TextState extends FeatureState<import('../types/text').TextBlock> {
  constructor() {
    super(normalizeTextBlock, normalizeTextBlocks);
  }
}
