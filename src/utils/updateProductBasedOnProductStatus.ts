import { ShopifyProduct, UpdateProductStatus } from '@types';
import { createVariantsSize } from '@utils';
import { logger } from '@services/pino';
import { deleteShopifyProduct, updateShopifyProduct } from '@requests/shopify';
import { SummaryProps } from '@scripts/createProducts';

export const updateProductBasedOnProductStatus = async (
  product: ShopifyProduct,
  sizes: string[],
  updateProductStatus: UpdateProductStatus,
  summary?: SummaryProps,
  currentProductLink?: string
): Promise<void> => {
  switch (updateProductStatus) {
    case UpdateProductStatus.DO_NOT_UPDATE:
      break;

    case UpdateProductStatus.SOLD_OUT: {
      await deleteShopifyProduct(product.id);

      logger.info(
        `Sold out product ${product.title} was deleted with success!`
      );

      if (summary) {
        summary.deleted.amount++;
        summary.deleted.products = [
          ...summary!.deleted.products,
          currentProductLink
        ];
      }

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
