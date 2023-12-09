import puppeteer, { Browser, PuppeteerLaunchOptions } from 'puppeteer';
import { PRODUCT_COLLECTION_SELECTOR_ID } from '@constants';
import { GetProductsInformationBasedOnUrlType } from '@types';
import { getProductsLink } from '@utils';
import { env } from '@env';

export const getProductsInformationBasedOnUrl = async ({
  url
}: GetProductsInformationBasedOnUrlType): Promise<{
  productsLinks: string[];
  browser: Browser;
}> => {
  const puppeteerLaunchOptions: PuppeteerLaunchOptions =
    env.ENV != 'macos_development'
      ? {
          headless: 'new'
          // args: ['--no-sandbox'],
          // executablePath: '/usr/bin/chromium-browser'
        }
      : {
          headless: 'new'
        };

  const browser = await puppeteer.launch(puppeteerLaunchOptions);

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector(PRODUCT_COLLECTION_SELECTOR_ID);

  const productsLinks = await getProductsLink(page);

  return {
    productsLinks,
    browser
  };
};
