import { ShopifyVariant } from '../types';

export const createVariantsSize = async (
  sizes: string[],
  price: string,
  sku: string
): Promise<ShopifyVariant[]> => {
  if (!sizes.length) return [];

  const variants: ShopifyVariant[] = sizes.map((size: string) => ({
    option1: size,
    price: price,
    sku: sku
  }));

  return variants;
};
