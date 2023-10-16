import { Page } from 'puppeteer';
import { PRODUCT_SIZE } from '../constants';

export const getProductSizes = async (page: Page): Promise<string[]> => {
  const thereIsSize = await page.$(PRODUCT_SIZE);

  if (thereIsSize) {
    const sizes = await page.$eval(
      PRODUCT_SIZE,
      (element) => element.textContent
    );

    if (sizes) {
      const arrayOfSize = sizes!
        .split(' ')
        .filter((item: string) => Boolean(item));

      return arrayOfSize;
    }

    return [];
  }
  return [];
};
