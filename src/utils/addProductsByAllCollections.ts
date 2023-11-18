import { COLLECTIONS } from '@constants';
import { createProducts } from '../scripts/createProducts';

export const addProductsByAllCollections = (): void => {
  COLLECTIONS.forEach((collection) => {
    createProducts(collection);
  });
};
