import { VENDOR_CODES } from '@constants';
import { vendors } from '@data';
import { getVendorByCode } from '@utils';

describe('getVendorByCode', () => {
  it('should return the vendor name if the code match', () => {
    const mockVendorCode = VENDOR_CODES[0];

    const result = getVendorByCode(mockVendorCode);

    expect(result).toStrictEqual(vendors[mockVendorCode].name);
  });

  it("should return the code if the code don't match", () => {
    const mockVendorCode = 'Hugo Boss';

    const result = getVendorByCode(mockVendorCode);

    expect(result).toStrictEqual(mockVendorCode);
  });
});
