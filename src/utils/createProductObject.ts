import {
  ProductImage,
  ProductInfoFromHTML,
  ProductToInsertIntoShopify
} from '../types';
import { createVariantsSize } from '.';

export const createProductObject = (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[]
): ProductToInsertIntoShopify => ({
  title: productInfoFromHTML.item_name,
  vendor: productInfoFromHTML.item_category,
  images: productImages,
  // body_html: getProductDescriptionByCollection(),
  body_html: '',
  inventory_quantity: 1,
  variants: createVariantsSize(
    productSizes,
    productInfoFromHTML.price,
    productInfoFromHTML.item_id
  )
});
