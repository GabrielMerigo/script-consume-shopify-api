import { Variant } from './types';

const removeEmoji = (text: string) => {
  const emojiRegex = /[\u2B1B\u2B50]/g;

  return text.replace(emojiRegex, '');
};

export const resizeImage = (url: string) => {
  return url.replace(/\/fit-in\/\d+x\d+/, '/fit-in/1000x1000');
};

export const createVariants = ({ price, sizes, sku }: Variant) => {
  const arrayOfSize = sizes.split(' ').filter((item: string) => Boolean(item));

  const variants = arrayOfSize.map((size: string, index: number) => ({
    [`option${index + 1}`]: size,
    price: price,
    sku: sku
  }));

  return variants;
};
