import { Page } from 'puppeteer';
import { PRODUCT_SIZE } from '../constants';

export const getProductSizesFromPage = async (
  page: Page
): Promise<string[]> => {
  const thereIsSize = await page.$(PRODUCT_SIZE);

  if (!thereIsSize) return [];

  const sizes = await page.$eval(
    PRODUCT_SIZE,
    (element) => element.textContent
  );

  if (!sizes) return [];

  return sizes.split(' ').filter((item: string) => Boolean(item));
};
