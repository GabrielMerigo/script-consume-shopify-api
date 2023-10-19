import { instance } from '../../services/axios';
import { ShopifyProduct } from '../../types';

export const getShopifyProducts = async (): Promise<ShopifyProduct[]> => {
  const response = await instance.get('/admin/api/2023-10/products.json');

  return response.data.products ? response.data.products : [];
};
