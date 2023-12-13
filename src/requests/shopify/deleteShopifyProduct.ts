import { instance } from '@services/axios';

export const deleteShopifyProduct = async (
  productId: string
): Promise<void> => {
  await instance.delete(`/admin/api/2023-07/products/${productId}.json`);
};
