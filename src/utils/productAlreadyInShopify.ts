import { ProductInfoFromHTML, ShopifyProduct } from '../types';

export const productAlreadyInShopify = (
  productInfoFromHTML: ProductInfoFromHTML,
  shopifyProducts: ShopifyProduct[]
): ShopifyProduct | null => {
  const foundedProduct = shopifyProducts.find(
    (i) => i.title == productInfoFromHTML.item_name
  );

  return foundedProduct || null;
};
