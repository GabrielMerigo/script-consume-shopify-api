import { COLLECTIONS } from '@constants';
import { createProducts } from '../index';

export const addProductsByAllCollections = (): void => {
  COLLECTIONS.forEach((collection) => {
    console.log(`Starting ${collection} create product process`);
    createProducts(collection);
    console.log(`Finishing ${collection} create product process`);
  });
};
