import { BaseCollections } from '@types';
import { createProducts } from 'index';

export const addProductsByAllCollections = (): void => {
  for (let i = 0; i < BaseCollections.length; i++) {
    createProducts(BaseCollections[i]);
  }
};
