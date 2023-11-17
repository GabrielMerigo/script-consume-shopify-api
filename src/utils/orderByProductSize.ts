import {
  PRODUCT_SHIRT_SIZE_LETTERS,
  PRODUCT_PANTS_SIZE_NUMBERS
} from '@constants';
import { SizeTypes } from '@types';

export const orderByProductSize = (
  sizes: string[],
  sizeType: SizeTypes
): string[] => {
  if (!sizes.length) return [];

  switch (sizeType) {
    case SizeTypes.SHIRT_LETTER:
      return sizes.sort((a, b) => {
        const indexA = PRODUCT_SHIRT_SIZE_LETTERS.indexOf(a);
        const indexB = PRODUCT_SHIRT_SIZE_LETTERS.indexOf(b);
        return indexA - indexB;
      });
    case SizeTypes.PANTS_NUMBER:
      return sizes.sort((a, b) => {
        const indexA = PRODUCT_PANTS_SIZE_NUMBERS.indexOf(a);
        const indexB = PRODUCT_PANTS_SIZE_NUMBERS.indexOf(b);
        return indexA - indexB;
      });
  }
};
