import { ProductToInsertIntoShopify, ShopifyProduct } from '@types';

export const productAlreadyExistsInShopify = (
  product: ProductToInsertIntoShopify,
  shopifyProducts: ShopifyProduct[]
): ShopifyProduct | null => {
  const foundProduct = shopifyProducts.find(
    (i) => i?.variants[0]?.sku == product?.variants[0]?.sku
  );

  return foundProduct || null;
};
