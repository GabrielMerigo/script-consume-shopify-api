import { instance } from '@services/axios';
import { ProductCreationResponse, ShopifyVariant } from '@types';

export const updateShopifyProduct = async (
  productId: string,
  variants: ShopifyVariant[]
): Promise<number> => {
  const {
    data: { product: productUpdated }
  } = await instance.put<ProductCreationResponse>(
    `/admin/api/2023-07/products/${productId}.json`,
    {
      product: {
        id: productId,
        variants
      }
    }
  );

  return productUpdated.id;
};
