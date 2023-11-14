import { VENDOR_CODES } from '@constants';
import { vendors } from '@data';
import { ProductInfoFromHTML } from '@types';

const compareVendorNameAndCode = (
  name: string,
  code: string,
  stringToCompare: string
): boolean => {
  return stringToCompare.includes(name) || stringToCompare.includes(code)
    ? true
    : false;
};

export const getVendorByProductInfo = (
  productInfoFromHTML: ProductInfoFromHTML
): string => {
  const contentToCheck = [
    productInfoFromHTML.item_name,
    productInfoFromHTML.item_category,
    productInfoFromHTML.item_category2,
    productInfoFromHTML.item_category3,
    productInfoFromHTML.item_category4,
    productInfoFromHTML.item_category5
  ]
    .join()
    .toLowerCase();

  let vendorCode;

  for (let i = 0; i < VENDOR_CODES.length; i++) {
    const currentVendorCode = VENDOR_CODES[i];

    if (
      compareVendorNameAndCode(
        vendors[currentVendorCode].name.toLowerCase(),
        vendors[currentVendorCode].code.toLowerCase(),
        contentToCheck
      )
    ) {
      vendorCode = vendors[currentVendorCode].name;
    }
  }

  return vendorCode ? vendorCode : productInfoFromHTML.item_category;
};
