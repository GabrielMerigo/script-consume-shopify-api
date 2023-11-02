import {
  ProductImage,
  ProductInfoFromHTML,
  ProductToInsertIntoShopify
} from '../types';
import { createVariantsSize } from './createVariantsSize';

import { removeEmojiFromProductTitleFormatter } from './removeEmojiFromProductTitleFormatter';

export const createProductObject = (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[]
): ProductToInsertIntoShopify => ({
  title: removeEmojiFromProductTitleFormatter(productInfoFromHTML.item_name),
  vendor: productInfoFromHTML.item_category,
  images: productImages,
  inventory_quantity: 1,
  variants: createVariantsSize(
    productSizes,
    productInfoFromHTML.price,
    productInfoFromHTML.item_id
  )
});
