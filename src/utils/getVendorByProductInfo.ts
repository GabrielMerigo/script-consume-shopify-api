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

const removeAllKeyWordsFromString = (contentToCheck: string): string => {
  return contentToCheck.replace(/tactel|black friday|DFC|dfc/gi, '');
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

  const contentToCheckFiltered = removeAllKeyWordsFromString(contentToCheck);

  let vendorCode;

  for (let i = 0; i < VENDOR_CODES.length; i++) {
    const currentVendorCode = VENDOR_CODES[i];

    if (
      compareVendorNameAndCode(
        vendors[currentVendorCode].name.toLowerCase(),
        vendors[currentVendorCode].code.toLowerCase(),
        contentToCheckFiltered
      )
    ) {
      vendorCode = vendors[currentVendorCode].name;
    }
  }

  return vendorCode ? vendorCode : productInfoFromHTML.item_category;
};
