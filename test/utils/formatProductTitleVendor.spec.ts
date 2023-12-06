import { VENDOR_CODES } from '@constants';
import { vendors } from '@data';
import {
  capitalizeFirstLetterOfEachWord,
  formatProductTitleVendor
} from '@utils';

describe('formatProductTitleVendor', () => {
  VENDOR_CODES.forEach((vendorCode) => {
    it(`should return the vendor name formatted for ${vendorCode} vendor code`, () => {
      const mockTitle = `Polo ${vendorCode} Branca`;
      const expectedResult = `Polo ${vendors[vendorCode].name} Branca`;

      const result = formatProductTitleVendor(mockTitle);

      expect(capitalizeFirstLetterOfEachWord(result)).toStrictEqual(
        expectedResult
      );
    });
  });
  it('should not format title if is not necessary', () => {
    const mockTitle = 'Polo Hugo Boss Branca';
    const expectedResult = 'Polo Hugo Boss Branca';

    const result = formatProductTitleVendor(mockTitle);

    expect(capitalizeFirstLetterOfEachWord(result)).toStrictEqual(
      expectedResult
    );
  });
});
