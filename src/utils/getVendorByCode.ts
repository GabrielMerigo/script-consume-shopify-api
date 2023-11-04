import { isExpectedVendorCode } from '@utils';
import { vendors } from '@data';

export const getVendorByCode = (code: string): string => {
  const upperCaseCode = code.toUpperCase();

  if (isExpectedVendorCode(upperCaseCode)) {
    return vendors[upperCaseCode].name;
  }

  return code;
};
