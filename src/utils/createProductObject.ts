import { ProductImage, ProductInfoFromHTML, ShopifyProduct } from '../types';
import { createVariantsSize } from './createVariantsSize';

interface CreateProductObjectParams {
  productInfo: ProductInfoFromHTML;
  productImages: ProductImage[];
  productSizes: string[];
}

export const createProductObject = async ({
  productInfo,
  productImages,
  productSizes
}: CreateProductObjectParams): Promise<ShopifyProduct> => ({
  title: productInfo.item_name,
  images: productImages,
  vendor: productInfo.item_category,
  inventory_quantity: 1,
  variants: await createVariantsSize({
    sizes: productSizes,
    price: productInfo.price,
    sku: productInfo.item_id
  })
});
