import { COLLECTIONS } from '@constants';
import { createProducts } from '../scripts/createProducts';
import { logger } from '@services/pino';

export const addProductsByAllCollections = async (): Promise<void> => {
  for await (const collection of COLLECTIONS) {
    logger.info(`Starting ${collection.toLocaleUpperCase()}`);
    await createProducts(collection);
    logger.info(`Finishing ${collection.toLocaleUpperCase()}`);
  }
};
