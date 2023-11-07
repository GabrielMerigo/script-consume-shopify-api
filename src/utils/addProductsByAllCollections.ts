import { COLLECTIONS } from '@constants';
import { createProducts } from '../index';

export const addProductsByAllCollections = (): void => {
  COLLECTIONS.forEach((collection) => {
    createProducts(collection);
  });
};
