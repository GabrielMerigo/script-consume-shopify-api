
import { createVariants, resizeImage } from './utils';
import { ProductInfoFromHTML, ShopifyProduct } from './types/product';
import {
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
import { getProductsInformationBasedOnUrl } from './utils/puppeteer';

const params: {
  items: ProductInfoFromHTML[];
} = { items: [] };

const createProducts = async () => {
  const products: ShopifyProduct[] = [];

  const { browser, productsLinks } = await getProductsInformationBasedOnUrl({
    url: `${BASE_URL}/camisetas?${PAGE_PARAMS}`
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
