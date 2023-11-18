import { Page } from 'puppeteer';
import { PRODUCT_SIZE } from '@constants';

export const getProductSizesFromPage = async (
  page: Page
): Promise<string[]> => {
  const thereIsSize = await page.$(PRODUCT_SIZE);

  if (!thereIsSize) return [];

  const sizes = await page.$$eval(PRODUCT_SIZE, (elements) => {
    return elements.map((element) => element.textContent?.trim() || '');
  });

  return sizes.length ? sizes : [];
};
