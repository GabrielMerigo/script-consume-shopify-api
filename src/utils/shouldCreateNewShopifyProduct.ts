import { ProductInfoFromHTML, ShopifyProduct } from '../types';

export const shouldCreateNewShopifyProduct = (
  product: ProductInfoFromHTML,
  shopifyProducts: ShopifyProduct[]
): boolean => {
  const foundedProduct = shopifyProducts.find(
    (i) => i.title == product.item_name
  );

  return !foundedProduct;
};
