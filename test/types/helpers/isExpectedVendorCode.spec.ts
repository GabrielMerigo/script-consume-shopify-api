import { VENDOR_CODES } from '@constants';
import { isExpectedVendorCode } from '@utils';

describe('isExpectedVendorCode', () => {
  it('should validate if the code is a expected vendor code', () => {
    const expectedVendorCode = VENDOR_CODES[0];

    expect(isExpectedVendorCode(expectedVendorCode)).toBeTruthy();
  });

  it('should return false if the code is not a expected vendor code', () => {
    const expectedVendorCode = 'Hugo Boss';

    expect(isExpectedVendorCode(expectedVendorCode)).toBeFalsy();
  });
});
