import { Page } from 'puppeteer';

export const getProductsLink = async (page: Page): Promise<string[]> => {
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
