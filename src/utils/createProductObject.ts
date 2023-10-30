import {
  ExpectedCollections,
  ProductImage,
  ProductInfoFromHTML,
  ProductToInsertIntoShopify
} from '../types';
import { createVariantsSize, getProductPriceFromCollection } from '.';

export const createProductObject = (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[],
  collection: ExpectedCollections
): ProductToInsertIntoShopify => ({
  title: productInfoFromHTML.item_name,
  vendor: productInfoFromHTML.item_category,
  images: productImages,
  // body_html: getProductDescriptionByCollection(),
  body_html: '',
  inventory_quantity: 1,
  variants: createVariantsSize(
    productSizes,
    getProductPriceFromCollection(collection),
    productInfoFromHTML.item_id
  )
});
