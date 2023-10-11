import puppeteer, { Page } from 'puppeteer';
import { PRODUCT_COLLECTION_SELECTOR_ID } from '../constants';
import { GetProductsInformationBasedOnUrlType } from '../types';

const getProductsLink = async (page: Page) => {
  const productsLinks = await page.evaluate(() => {
    const anchorElements = document.querySelectorAll(
      '#shelf-list-product .image a'
    );
    const values: string[] = [];

    anchorElements.forEach((anchor) => {
      if (anchor instanceof HTMLAnchorElement) values.push(anchor.href);
    });

    return values;
  });

  return productsLinks;
};

export const getProductsInformationBasedOnUrl = async ({
  url
}: GetProductsInformationBasedOnUrlType) => {
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
