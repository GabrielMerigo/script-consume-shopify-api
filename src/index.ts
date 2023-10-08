import puppeteer from 'puppeteer';

import { createVariants, resizeImage } from './utils';
import { Product } from './types';
import {
  ANCOR_TAG_PRODUCT_IMAGE,
  PRODUCT_COLLECTION_SELECTOR_ID,
  PRODUCT_IMAGE_TAG,
  PRODUCT_SIZE,
  BASE_URL,
  PAGE_PARAMS
} from './constants';
import { instance } from './services/axios';

const createProducts = async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/camisetas?${PAGE_PARAMS}`);
  await page.waitForSelector(PRODUCT_COLLECTION_SELECTOR_ID);

  const products = [];

  const productsLinks = await page.evaluate(() => {
    const anchorElements = document.querySelectorAll(ANCOR_TAG_PRODUCT_IMAGE);
    const values: string[] = [];

    anchorElements.forEach((anchor) => {
      if (anchor instanceof HTMLAnchorElement) values.push(anchor.href);
    });

    return values;
  });

  for (const link of productsLinks) {
    const page = await browser.newPage();
    await page.goto(link);

    const images = await page.$$eval(PRODUCT_IMAGE_TAG, (elements) => {
      return elements.map((element) => {
        return element.getAttribute('src');
      });
    });

    const imagesResized = images.map((image) => resizeImage(image as string));
    const productInfo: Product[] = await page.evaluate(() => params.items);
    const thereIsSize = await page.$(PRODUCT_SIZE);

    let sizes: string | null = '';

    if (thereIsSize) {
      sizes = await page.$eval(PRODUCT_SIZE, (element) => element.textContent);
    }

    const imagesFormatted = imagesResized.map((imageUrl: string) => ({
      src: imageUrl
    }));

    const product = {
      title: productInfo[0].item_name,
      images: imagesFormatted,
      vendor: productInfo[0].item_category,
      inventory_quantity: sizes?.length ? 1 : 0,
      collection: 'Camiseta',
      variants:
        sizes && sizes.length
          ? createVariants({
              sizes,
              price: productInfo[0].price,
              sku: productInfo[0].item_id
            })
          : []
    };

    products.push(product);

    console.log(`Produto ${product.title} criado com sucesso!`);

    instance.post('/admin/api/2023-07/products.json', { product });

    await page.close();
    break;
  }

  console.log(products);

  await browser.close();
};

createProducts();
