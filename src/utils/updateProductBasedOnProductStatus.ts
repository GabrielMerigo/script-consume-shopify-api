import { ShopifyProduct, UpdateProductStatus } from '@types';
import { createVariantsSize } from '@utils';
import { logger } from '@services/pino';
import { deleteShopifyProduct, updateShopifyProduct } from '@requests/shopify';

export const updateProductBasedOnProductStatus = async (
  product: ShopifyProduct,
  sizes: string[],
  updateProductStatus: UpdateProductStatus
): Promise<void> => {
  switch (updateProductStatus) {
    case UpdateProductStatus.DO_NOT_UPDATE:
      break;

    case UpdateProductStatus.SOLD_OUT: {
      await deleteShopifyProduct(product.id);

      logger.info(
        `Sold out product ${product.title} was deleted with success!`
      );
      break;
    }

    case UpdateProductStatus.UPDATE: {
      const variants = createVariantsSize(
        sizes,
        product.variants[0].price,
        product.variants[0].sku
      );

      const updatedProductId = await updateShopifyProduct(product.id, variants);

      logger.info(`Product ${updatedProductId} updated with success!`);

      break;
    }
  }
};
