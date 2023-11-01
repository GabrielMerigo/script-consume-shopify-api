import { instance } from '@services/axios';

export const putProductIntoCollection = async (
  productId: number,
  collectionId: number,
  positionIndex: number
): Promise<void> => {
  await instance.put(
    '/admin/api/2023-10/custom_collections/457099477296.json',
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

  console.log(`Product ID ${productId} added to collection ID ${collectionId}`);
};
