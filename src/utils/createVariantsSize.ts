import { ShopifyVariant } from '../types';

interface CreateVariantSizeParams {
  price: number;
  sku: string;
  sizes: string[];
}

export const createVariantsSize = async ({
  sizes,
  price,
  sku
}: CreateVariantSizeParams): Promise<ShopifyVariant[]> => {
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
