import { VENDOR_CODES } from '@constants';
import { ExpectedVendorCodes } from '@types';

export const verifyVendorCode = (code: string): code is ExpectedVendorCodes => {
  return VENDOR_CODES.includes(code as ExpectedVendorCodes);
};
