import { PRODUCT_SIZE_LETTERS } from '../constants';

export const orderByProductSize = (sizes: string[]): string[] => {
  if (!sizes.length) return [];

  // adicionar logica para tamanhos diferentes

  return sizes.sort((a, b) => {
    const indexA = PRODUCT_SIZE_LETTERS.indexOf(a);
    const indexB = PRODUCT_SIZE_LETTERS.indexOf(b);
    return indexA - indexB;
  });
};
