import { instance } from '../../services/axios';
import { ProductCreationResponse, ShopifyProduct } from '../../types';
import { createVariantsSize } from '../../utils';

export const updateProductSizes = async (
  product: ShopifyProduct,
  sizes: string[]
): Promise<void> => {
  const {
    data: { product: productUpdated }
  } = await instance.put<ProductCreationResponse>(
    `/admin/api/2023-07/products/${product.id}.json`,
    {
      product: {
        id: product.id,
        variants: createVariantsSize(
          sizes,
          product.variants[0].price,
          product.variants[0].sku
        )
      }
    }
  );

  console.log(`Product ${productUpdated} updated with success!`);
};
