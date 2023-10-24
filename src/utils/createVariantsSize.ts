import { ShopifyVariant } from '../types';

export const createVariantsSize = (
  sizes: string[],
  price: string,
  sku: string
): ShopifyVariant[] => {
  if (!sizes.length) return [];

  const variants: ShopifyVariant[] = sizes.map((size: string) => ({
    option1: size,
    price: price,
    sku: sku,
    inventory_management: null,
    inventory_quantity: null
  }));

  return variants;
};
