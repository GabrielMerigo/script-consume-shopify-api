import { instance } from '../../services/axios';
import { ProductCreationResponse, ShopifyProduct } from '../../types';

export const createShopifyProduct = async (
  product: ShopifyProduct
): Promise<number> => {
  const {
    data: { product: productCreated }
  } = await instance.post<ProductCreationResponse>(
    '/admin/api/2023-07/products.json',
    { product }
  );

  console.log(
    `Product ID ${productCreated.id} title ${product.title} created inside the shopify`
  );

  return productCreated.id;
};
