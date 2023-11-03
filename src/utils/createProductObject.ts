import {
  ExpectedCollections,
  ProductImage,
  ProductInfoFromHTML,
  ProductToInsertIntoShopify
} from '@types';
import {
  getProductPriceFromCollection,
  createVariantsSize,
  getProductDescriptionByCollection,
  getVendorByCode
} from '@utils';

export const createProductObject = (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[],
  collection: ExpectedCollections
): ProductToInsertIntoShopify => ({
  title: productInfoFromHTML.item_name,
  vendor: getVendorByCode(productInfoFromHTML.item_category),
  images: productImages,
  body_html: getProductDescriptionByCollection(
    collection,
    productInfoFromHTML.item_name
  ),
  inventory_quantity: 1,
  variants: createVariantsSize(
    productSizes,
    getProductPriceFromCollection(collection),
    productInfoFromHTML.item_id
  )
});
