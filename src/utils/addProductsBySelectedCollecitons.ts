import { logger } from '@services/pino';
import { createProducts } from '@scripts/createProducts';
import { verifyExpectedCollection } from './verifyExpectedCollection';

export const addProductsBySelectedCollections = async (
  selectedCollections: string[]
): Promise<void> => {
  for await (const collection of selectedCollections) {
    if (verifyExpectedCollection(collection)) {
      logger.info(`Starting ${collection.toLocaleUpperCase()}`);
      await createProducts(collection);
      logger.info(`Finishing ${collection.toLocaleUpperCase()}`);
    } else {
      logger.error(
        `Don't running ${collection.toLocaleUpperCase()} because is not a expected collection`
      );
    }
  }
};
