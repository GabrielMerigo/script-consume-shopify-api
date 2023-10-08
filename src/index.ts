import puppeteer from 'puppeteer';

import { createVariants, resizeImage } from './utils';
import { ProductCreationResponse, ProductInfoFromHTML } from './types';
import { instance } from './services/axios';
import {
  PRODUCT_COLLECTION_SELECTOR_ID,
  PRODUCT_IMAGE_TAG,
  PRODUCT_SIZE,
  BASE_URL,
  PAGE_PARAMS,
  collections
} from './constants';

const params: {
  items: ProductInfoFromHTML[];
} = { items: [] };

const createProducts = async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/camisetas?${PAGE_PARAMS}`);
  await page.waitForSelector(PRODUCT_COLLECTION_SELECTOR_ID);

  const products = [];

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

  let index = 0;
  for (const link of productsLinks) {
    const page = await browser.newPage();
    await page.goto(link);

    const images = await page.$$eval(PRODUCT_IMAGE_TAG, (elements) => {
      return elements.map((element) => {
        return element.getAttribute('src');
      });
    });

    const imagesResized = images.map((image) => resizeImage(image || ''));
    const productInfo: ProductInfoFromHTML[] = await page.evaluate(
      () => params.items
    );
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

    // const { data } = await instance.get(
    //   "admin/api/2023-10/custom_collections.json"
    // );

    const {
      data: { product: productCreated }
    } = await instance.post<ProductCreationResponse>(
      '/admin/api/2023-07/products.json',
      { product }
    );

    instance.put('/admin/api/2023-10/custom_collections/457099477296.json', {
      custom_collection: {
        id: collections.camisetas.id,
        collects: [
          {
            product_id: productCreated.id,
            position: index
          }
        ]
      }
    });

    await page.close();
    index++;
    break;
  }

  console.log(products);

  await browser.close();
};

createProducts();
