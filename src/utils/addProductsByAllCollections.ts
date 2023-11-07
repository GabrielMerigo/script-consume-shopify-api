import { BaseCollections } from '@types';
import { createProducts } from '../index';

export const addProductsByAllCollections = (): void => {
  BaseCollections.forEach((collection) => {
    createProducts(collection);
  });
};
