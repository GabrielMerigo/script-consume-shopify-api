import { VENDOR_CODES } from '@constants';
import { vendors } from '@data';
import { ExpectedVendorCodes } from '@types';

export const formatProductTitleVendor = (productTitle: string): string => {
  let includedCode: string = '';

  VENDOR_CODES.forEach((code) => {
    const isCodeIncluded = productTitle.includes(code);

    if (isCodeIncluded) includedCode = code;
  });

  if (includedCode)
    return productTitle.replace(
      includedCode,
      vendors[includedCode as ExpectedVendorCodes].name
    );

  return productTitle;
};
