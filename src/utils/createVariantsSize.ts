import { ShopifyVariant } from '../types';

export const createVariantsSize = async (
  sizes: string[],
  price: string | number,
  sku: string | number
): Promise<ShopifyVariant[]> => {
  if (!sizes.length) return [];

  const variants: ShopifyVariant[] = sizes.map(
    (size: string, index: number) => ({
      [`option${index + 1}`]: size,
      price: price,
      sku: sku
    })
  );

  return variants;
};
