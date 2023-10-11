import puppeteer from 'puppeteer';

import { createVariants, resizeImage } from './utils';
import { ProductInfoFromHTML, ShopifyProduct } from './types/product';
import {
  PRODUCT_COLLECTION_SELECTOR_ID,
  PRODUCT_IMAGE_TAG,
  PRODUCT_SIZE,
  BASE_URL,
  PAGE_PARAMS
} from './constants';
import {
  createShopifyProduct,
  putProductIntoCollection
} from './requests/shopify';
import { collections } from './data';

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

  const products: ShopifyProduct[] = [];

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

    const product: ShopifyProduct = {
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

    console.log(`Product ${product.title} was got from page`);
    console.log(`Starting Shopify process`);

    const createProductId = await createShopifyProduct(product);
    await putProductIntoCollection(
      createProductId,
      collections.camisetas.id,
      index
    );
    console.log(`Endding Shopify process`);

    await page.close();
    index++;
    break;
  }

  await browser.close();
};

createProducts();
