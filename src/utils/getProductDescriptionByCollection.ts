import { PRODUCT_TITLE_SELECTOR } from '../constants';
import { collections } from '../data';
import { ExpectedCollections } from '../types';

export const getProductDescriptionByCollection = (
  collection: ExpectedCollections,
  productTitle: string
): string => {
  const productTitleSelectorRegex = new RegExp(PRODUCT_TITLE_SELECTOR, 'g');
  const formattedDescription = collections[collection].productBodyHtml.replace(
    productTitleSelectorRegex,
    productTitle
  );

  return formattedDescription;
};
