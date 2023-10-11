import puppeteer, { Browser } from 'puppeteer';
import { PRODUCT_COLLECTION_SELECTOR_ID } from '../constants';
import { GetProductsInformationBasedOnUrlType } from '../types';
import { getProductsLink } from './getProductsLink';

export const getProductsInformationBasedOnUrl = async ({
  url
}: GetProductsInformationBasedOnUrlType): Promise<{
  productsLinks: string[];
  browser: Browser;
}> => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector(PRODUCT_COLLECTION_SELECTOR_ID);

  const productsLinks = await getProductsLink(page);

  return {
    productsLinks,
    browser
  };
};
