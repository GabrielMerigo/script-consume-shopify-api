import { PRODUCT_TITLE_SELECTOR } from '../constants';
import { collections } from '../data';
import { ExpectedCollections } from '../types';

export const getProductDescriptionByCollection = (
  collection: ExpectedCollections,
  productTitle: string
): string => {
  const formattedDescription = collections[
    collection
  ].productBodyHtml.replaceAll(PRODUCT_TITLE_SELECTOR, productTitle);

  return formattedDescription;
};
