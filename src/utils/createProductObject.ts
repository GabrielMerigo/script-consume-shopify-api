import {
  ProductImage,
  ProductInfoFromHTML,
  ProductToInsertIntoShopify
} from '../types';
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
}: CreateProductObjectParams): Promise<ProductToInsertIntoShopify> => ({
  title: productInfo.item_name,
  images: productImages,
  vendor: productInfo.item_category,
  inventory_quantity: 1,
  variants: await createVariantsSize(
    productSizes,
    productInfo.item_id,
    productInfo.price
  )
});
