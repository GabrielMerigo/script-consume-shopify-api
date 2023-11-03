import { isExpectedVendorCode } from '@utils';
import { vendors } from '@data';

export const getVendorByCode = (code: string): string => {
  if (isExpectedVendorCode(code)) {
    return vendors[code].name;
  }

  return code;
};
