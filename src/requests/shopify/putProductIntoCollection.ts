import { instance } from '@services/axios';
import logger from '../../../logger';

export const putProductIntoCollection = async (
  productId: number,
  collectionId: number,
  positionIndex: number
): Promise<void> => {
  await instance.put(
    `/admin/api/2023-10/custom_collections/${collectionId}.json`,
    {
      custom_collection: {
        id: collectionId,
        collects: [
          {
            product_id: productId,
            position: positionIndex
          }
        ]
      }
    }
  );

  logger.info(`Product ID ${productId} added to collection ID ${collectionId}`);
};
