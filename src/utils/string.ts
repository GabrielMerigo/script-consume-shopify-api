import { Variant } from "../types";

export const resizeImage = (url: string) => {
  return url.replace(/\/fit-in\/\d+x\d+/, "/fit-in/1000x1000");
};

export const createVariants = ({ price, sizes, sku }: Variant) => {
  const arrayOfSize = sizes.split(" ").filter((item: string) => Boolean(item));

  const variants: Variant = arrayOfSize.map((size: string, index: number) => ({
    [`option${index + 1}`]: size,
    price: price,
    sku: sku,
  }));

  return variants;
};
