import { instance } from '@services/axios';
import { ProductCreationResponse, ProductToInsertIntoShopify } from '@types';
import { logger } from '@services/pino';

export const createShopifyProduct = async (
  product: ProductToInsertIntoShopify
): Promise<number> => {
  const {
    data: { product: productCreated }
  } = await instance.post<ProductCreationResponse>(
    '/admin/api/2023-07/products.json',
    { product }
  );

  logger.info(
    `Product ID ${productCreated.id} title ${product.title} created inside the shopify`
  );

  return productCreated.id;
};
