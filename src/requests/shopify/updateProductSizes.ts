import { instance } from '@services/axios';
import {
  ProductCreationResponse,
  ShopifyProduct,
  UpdateProductStatus
} from '@types';
import { createSoldOutVariant, createVariantsSize } from '@utils';
import logger from '../../../logger';

export const updateProductSizes = async (
  product: ShopifyProduct,
  sizes: string[],
  updateProductStatus: UpdateProductStatus
): Promise<void> => {
  if (updateProductStatus === UpdateProductStatus.DO_NOT_UPDATE) return;

  const variants =
    updateProductStatus === UpdateProductStatus.UPDATE
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

  logger.info(`Product ${productUpdated.id} updated with success!`);
};
