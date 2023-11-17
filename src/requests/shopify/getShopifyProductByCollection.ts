import { GET_PRODUCTS_LIMIT } from '@constants';
import { instance } from '@services/axios';
import { ShopifyProduct } from '@types';

export const getShopifyProductsByCollection = async (
  collectionId: number
): Promise<ShopifyProduct[]> => {
  const response = await instance.get(
    `/admin/api/2023-10/products.json?limit=${GET_PRODUCTS_LIMIT}&collection_id=${collectionId}`
  );

  return response.data.products ? response.data.products : [];
};
