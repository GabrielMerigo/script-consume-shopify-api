import { ProductInfoFromHTML, ShopifyProduct } from '@types';

export const productAlreadyExistsInShopify = (
  productInfoFromHTML: ProductInfoFromHTML,
  shopifyProducts: ShopifyProduct[]
): ShopifyProduct | null => {
  const foundProduct = shopifyProducts.find(
    (i) => i.title == productInfoFromHTML.item_name
  );

  return foundProduct || null;
};
