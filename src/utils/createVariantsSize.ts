import { CreateVariantSizeParams, ShopifyVariant } from '../types';
import { getProductSizes } from './getProductSizes';

export const createVariantsSize = async ({
  page,
  price,
  sku
}: CreateVariantSizeParams): Promise<ShopifyVariant[]> => {
  const sizes = await getProductSizes(page);

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
