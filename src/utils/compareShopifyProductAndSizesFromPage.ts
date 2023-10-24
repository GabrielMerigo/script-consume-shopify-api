import { ShopifyProduct, UpdateProductStatus } from '../types';
import { convertShopifyVariantsToSize } from './convertShopifyVariantsToSizes';

export const compareShopifyProductAndSizesFromPage = (
  shopifyProduct: ShopifyProduct,
  sizes: string[]
): UpdateProductStatus => {
  const convertedShopifyProductVariants =
    convertShopifyVariantsToSize(shopifyProduct);

  if (!sizes.length) return UpdateProductStatus.SOLD_OUT;

  const shopifyProductVariantsString = convertedShopifyProductVariants.join('');
  const sizesString = sizes.join('');

  return shopifyProductVariantsString === sizesString
    ? UpdateProductStatus.DO_NOT_UPDATE
    : UpdateProductStatus.UPDATE;
};
