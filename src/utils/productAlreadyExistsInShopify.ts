import { ProductToInsertIntoShopify, ShopifyProduct } from '@types';

export const productAlreadyExistsInShopify = (
  product: ProductToInsertIntoShopify,
  shopifyProducts: ShopifyProduct[]
): ShopifyProduct | null => {
  const foundProduct = shopifyProducts.find((i) => i.title == product.title);

  return foundProduct || null;
};
