import { collections } from '@data';
import { ExpectedCollections } from '@types';

export const getProductPriceFromCollection = (
  collection: ExpectedCollections
): string => collections[collection].productPrice;
