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
  removeEmojiFromText
} from '@utils';

export const createProductObject = (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[],
  collection: ExpectedCollections
): ProductToInsertIntoShopify => ({
  title: removeEmojiFromText(productInfoFromHTML.item_name),
  vendor: productInfoFromHTML.item_category,
  images: productImages,
  body_html: getProductDescriptionByCollection(
    collection,
    removeEmojiFromText(productInfoFromHTML.item_name)
  ),
  inventory_quantity: 1,
  variants: createVariantsSize(
    productSizes,
    getProductPriceFromCollection(collection),
    productInfoFromHTML.item_id
  )
});
