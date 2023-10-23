import { ShopifyProduct, UpdateProductCase } from '../types';
import { convertShopifyVariantsToSize } from './convertShopifyVariantsToSizes';

export const compareShopifyProductAndSizesFromPage = (
  shopifyProduct: ShopifyProduct,
  sizes: string[]
): UpdateProductCase => {
  const convertedShopifyProductVariants =
    convertShopifyVariantsToSize(shopifyProduct);

  if (!sizes.length) return UpdateProductCase.SOLD_OUT;

  const shopifyProductVariantsString = convertedShopifyProductVariants.join('');
  const sizesString = sizes.join('');

  // IMPROVE TO SEE IF CHANGED - NOT CHANGED - SOLD OFF

  return shopifyProductVariantsString === sizesString
    ? UpdateProductCase.DO_NOT_UPDATE
    : UpdateProductCase.UPDATE;
};
