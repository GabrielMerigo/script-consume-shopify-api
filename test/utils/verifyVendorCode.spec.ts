import { VENDOR_CODES } from '@constants';
import { verifyVendorCode } from '@utils';

describe('verifyVendorCode', () => {
  it('should return false when the string does not include in the array of vendors', () => {
    const code = verifyVendorCode('CODE');

    expect(code).toEqual(false);
  });

  it('should return true when the string includes in the array of vendors', () => {
    const code = verifyVendorCode(VENDOR_CODES[0]);

    expect(code).toEqual(true);
  });
});
