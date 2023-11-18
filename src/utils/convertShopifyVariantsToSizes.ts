import { ShopifyProduct } from '@types';

export const convertShopifyVariantsToSize = (
  shopifyProduct: ShopifyProduct
): string[] => {
  if (!shopifyProduct.variants.length) return [];

  return shopifyProduct.variants.map((i) => i.option1);
};
