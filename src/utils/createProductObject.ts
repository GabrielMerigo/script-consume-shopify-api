import {
  ExpectedCollections,
  ProductImage,
  ProductInfoFromHTML,
  ProductToInsertIntoShopify
} from '../types';
import { createVariantsSize } from './createVariantsSize';
import { getProductPriceFromCollection } from './getProductPriceFromCollection';

export const createProductObject = (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[],
  collection: ExpectedCollections
): ProductToInsertIntoShopify => ({
  title: productInfoFromHTML.item_name,
  vendor: productInfoFromHTML.item_category,
  images: productImages,
  inventory_quantity: 1,
  variants: createVariantsSize(
    productSizes,
    getProductPriceFromCollection(collection),
    productInfoFromHTML.item_id
  )
});
