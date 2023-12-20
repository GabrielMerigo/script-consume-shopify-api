import { ShopifyVariant } from '@types';
import { createSoldOutVariant } from './createSoldOutVariant';

export const createVariantsSize = (
  sizes: string[],
  price: string,
  sku: string
): ShopifyVariant[] => {
  if (!sizes.length) return [createSoldOutVariant(price, sku)];

  const variants: ShopifyVariant[] = sizes.map((size: string) => ({
    option1: size,
    price: price,
    sku: sku.trim(),
    inventory_management: null,
    inventory_quantity: null
  }));

  return variants;
};
