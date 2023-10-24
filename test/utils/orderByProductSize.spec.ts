import { SizeTypes } from '../../src/types';
import { orderByProductSize } from '../../src/utils';

describe('orderByProductSize', () => {
  it(`should order sizes by t-shirt letters if is size type ${SizeTypes.SHIRT_LETTER}`, () => {
    const sizes: string[] = ['M', 'GG', 'P', 'G', 'EG', 'G3', 'G7', 'G5'];

    const sortedSizes = orderByProductSize(sizes, SizeTypes.SHIRT_LETTER);

    expect(sortedSizes).toStrictEqual([
      'P',
      'M',
      'G',
      'GG',
      'EG',
      'G3',
      'G5',
      'G7'
    ]);
  });

  it(`should order sizes by pant numbers if is size type ${SizeTypes.PANTS_NUMBER}`, () => {
    const sizes: string[] = ['38', '42', '40', '48', '46', '44'];

    const sortedSizes = orderByProductSize(sizes, SizeTypes.PANTS_NUMBER);

    expect(sortedSizes).toStrictEqual(['38', '40', '42', '44', '46', '48']);
  });

  it('should return a empty array if the sizes is empty', () => {
    const sortedSizes = orderByProductSize([], SizeTypes.PANTS_NUMBER);

    expect(sortedSizes).toStrictEqual([]);
  });
});
