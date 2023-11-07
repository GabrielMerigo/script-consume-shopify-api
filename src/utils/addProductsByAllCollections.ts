import { COLLECTIONS } from '@constants';
import { createProducts } from '../index';

export const addProductsByAllCollections = async (): Promise<void> => {
  for (let i = 0; i < COLLECTIONS.length; i++) {
    console.log(`Starting ${COLLECTIONS[i]} create products process`);
    await createProducts(COLLECTIONS[i]);
    console.log(`Finishing ${COLLECTIONS[i]} create products process`);
  }
};
