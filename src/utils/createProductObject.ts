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
  getVendorByProductInfo,
  removeEmojiFromText,
  formatProductTitleVendor,
  createShopifyMetafield
} from '@utils';

export const createProductObject = (
  productInfoFromHTML: ProductInfoFromHTML,
  productImages: ProductImage[],
  productSizes: string[],
  collection: ExpectedCollections
): ProductToInsertIntoShopify => {
  const titleWithoutEmoji = removeEmojiFromText(productInfoFromHTML.item_name);
  const titleFormatted = formatProductTitleVendor(titleWithoutEmoji);

  return {
    title: titleFormatted,
    vendor: getVendorByProductInfo(productInfoFromHTML),
    images: productImages,
    body_html: getProductDescriptionByCollection(collection, titleFormatted),
    inventory_quantity: 1,
    variants: createVariantsSize(
      productSizes,
      getProductPriceFromCollection(collection),
      productInfoFromHTML.item_id
    ),
    metafields: [createShopifyMetafield(productSizes)]
  };
};
