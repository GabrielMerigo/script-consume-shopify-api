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

  if (compareVendorNameAndCode('hugo boss', 'hb', contentToCheck))
    return vendors.HB.name;

  if (compareVendorNameAndCode('lacoste', 'lct', contentToCheck))
    return vendors.LCT.name;

  if (compareVendorNameAndCode('rauph lauren', 'prl', contentToCheck))
    return vendors.PRL.name;

  if (compareVendorNameAndCode('tommy hilfiger', 'th', contentToCheck))
    return vendors.TH.name;

  if (compareVendorNameAndCode('calvin klein', 'ck', contentToCheck))
    return vendors.CK.name;

  if (compareVendorNameAndCode('acostamento', 'act', contentToCheck))
    return vendors.ACT.name;

  if (compareVendorNameAndCode('dolce &amp; gabbana', 'dg', contentToCheck))
    return vendors.DG.name;

  if (compareVendorNameAndCode('dior', 'dior', contentToCheck))
    return vendors.DIOR.name;

  if (compareVendorNameAndCode('abercrombie', 'abercrombie', contentToCheck))
    return vendors.ABERCROMBIE.name;

  if (compareVendorNameAndCode('diesel', 'diesel', contentToCheck))
    return vendors.DIESEL.name;

  if (compareVendorNameAndCode('gucci', 'gucci', contentToCheck))
    return vendors.GUCCI.name;

  return productInfoFromHTML.item_category;
};
