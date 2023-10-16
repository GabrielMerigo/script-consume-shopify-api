import { CreateProductObjectParams, ShopifyProduct } from '../types';
import { createVariantsSize } from './createVariantsSize';

export const createProductObject = async ({
  productInfo,
  productImages,
  page
}: CreateProductObjectParams): Promise<ShopifyProduct> => ({
  title: productInfo.item_name,
  images: productImages,
  vendor: productInfo.item_category,
  inventory_quantity: 1,
  variants: await createVariantsSize({
    page,
    price: productInfo.price,
    sku: productInfo.item_id
  })
});
