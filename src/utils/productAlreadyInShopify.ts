import { ProductInfoFromHTML, ShopifyProduct } from '../types';

export const productAlreadyInShopify = (
  product: ProductInfoFromHTML,
  shopifyProducts: ShopifyProduct[]
): ShopifyProduct | undefined => {
  const foundedProduct = shopifyProducts.find(
    (i) => i.title == product.item_name
  );

  return foundedProduct;
};
