import {
  getProductsInformationBasedOnUrl,
  getProductImage,
  getProductInfo,
  shouldCreateNewShopifyProduct
} from './utils';
import { ShopifyProduct } from './types';
import { BASE_URL, PAGE_PARAMS } from './constants';
import {
  createShopifyProduct,
  getShopifyProducts,
  putProductIntoCollection
} from './requests/shopify';
import { collections } from './data';
import { createProductObject } from './utils/createProductObject';

const createProducts = async (): Promise<void> => {
  const shopifyProducts = await getShopifyProducts();

  const products: ShopifyProduct[] = [];

  const { browser, productsLinks } = await getProductsInformationBasedOnUrl({
    url: `${BASE_URL}/camisetas?${PAGE_PARAMS}`
  });

  let index = 0;
  for (const link of productsLinks) {
    const page = await browser.newPage();
    await page.goto(link);

    const productInfo = await getProductInfo({
      currentProductPage: page
    });

    const { productImages } = await getProductImage({
      currentProductPage: page
    });

    const productToInsertIntoShopify = await createProductObject({
      page,
      productImages,
      productInfo
    });

    products.push(productToInsertIntoShopify);

    console.log(
      `Product ${productToInsertIntoShopify.title} was got from page`
    );
    console.log(`Starting Shopify process`);

    if (shouldCreateNewShopifyProduct(productInfo, shopifyProducts)) {
      const createProductId = await createShopifyProduct(
        productToInsertIntoShopify
      );
      await putProductIntoCollection(
        createProductId,
        collections.camisetas.id,
        index
      );
    } else {
      console.log('Add update logic');
      console.log('Only update if the sizes changed');
    }

    console.log(`Ending Shopify process`);

    await page.close();
    index++;
    break;
  }

  await browser.close();
};

createProducts();
