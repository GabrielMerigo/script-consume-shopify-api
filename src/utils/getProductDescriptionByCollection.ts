import { PRODUCT_TITLE_SELECTOR } from '@constants';
import { collections } from '@data';
import { ExpectedCollections } from '@types';

export const getProductDescriptionByCollection = (
  collection: ExpectedCollections,
  productTitle: string
): string => {
  const GLOBAL_REGEX_FLAG = 'g';

  const productTitleSelectorRegex = new RegExp(
    PRODUCT_TITLE_SELECTOR,
    GLOBAL_REGEX_FLAG
  );
  const formattedDescription = collections[collection].productBodyHtml.replace(
    productTitleSelectorRegex,
    productTitle
  );

  return formattedDescription;
};
