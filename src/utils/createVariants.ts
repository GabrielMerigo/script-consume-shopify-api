import { ShopifyVariant, Variant } from "../types";

export const createVariants = ({ price, sizes, sku }: Variant) => {
  const arrayOfSize = sizes.split(' ').filter((item: string) => Boolean(item));

  const variants: ShopifyVariant[] = arrayOfSize.map(
    (size: string, index: number) => ({
      [`option${index + 1}`]: size,
      price: price,
      sku: sku
    })
  );

  return variants;
};
