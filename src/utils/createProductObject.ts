import {
  ProductImage,
  ProductInfoFromHTML,
  ProductToInsertIntoShopify
} from '../types';
import { createVariantsSize } from './createVariantsSize';

export const createProductObject = async (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[]
): Promise<ProductToInsertIntoShopify> => ({
  title: productInfoFromHTML.item_name,
  vendor: productInfoFromHTML.item_category,
  images: productImages,
  inventory_quantity: 1,
  variants: await createVariantsSize(
    productSizes,
    productInfoFromHTML.item_id,
    productInfoFromHTML.price
  )
});
