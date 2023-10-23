import { instance } from '../../services/axios';
import {
  ProductCreationResponse,
  ShopifyProduct,
  UpdateProductCase
} from '../../types';
import { createSoldOutVariant, createVariantsSize } from '../../utils';

export const updateProductSizes = async (
  product: ShopifyProduct,
  sizes: string[],
  updateProductCase: UpdateProductCase
): Promise<void> => {
  if (updateProductCase === UpdateProductCase.DO_NOT_UPDATE) return;

  const variants =
    updateProductCase === UpdateProductCase.UPDATE
      ? createVariantsSize(
          sizes,
          product.variants[0].price,
          product.variants[0].sku
        )
      : [
          createSoldOutVariant(
            product.variants[0].price,
            product.variants[0].price
          )
        ];

  const {
    data: { product: productUpdated }
  } = await instance.put<ProductCreationResponse>(
    `/admin/api/2023-07/products/${product.id}.json`,
    {
      product: {
        id: product.id,
        variants
      }
    }
  );

  console.log(`Product ${productUpdated} updated with success!`);
};
