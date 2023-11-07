import { ProductToInsertIntoShopify, ShopifyProduct } from '@types';

export const productAlreadyExistsInShopify = (
  product: ProductToInsertIntoShopify,
  shopifyProducts: ShopifyProduct[]
): ShopifyProduct | null => {
  if (!product.variants.length) {
    console.log('ERROR: Product without variants' + product.title);

    return null;
  }

  const foundProduct = shopifyProducts.find(
    (i) => i.variants[0]?.sku == product.variants[0]?.sku
  );

  return foundProduct || null;
};
