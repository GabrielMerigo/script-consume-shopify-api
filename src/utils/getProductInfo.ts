import { Page } from 'puppeteer';
import { ProductInfoFromHTML } from '../types';

const params: {
  items: ProductInfoFromHTML[];
} = { items: [] };

export const getProductInfo = async (
  currentProductPage: Page
): Promise<ProductInfoFromHTML> => {
  const productInfo = await currentProductPage.evaluate(() => params.items);

  return productInfo[0];
};
