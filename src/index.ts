import {
  getProductsInformationBasedOnUrl,
  getProductImageFromPage,
  getProductInfoFromPage,
  productAlreadyExistsInShopify,
  getProductSizesFromPage,
  createProductObject,
  compareShopifyProductAndSizesFromPage,
  orderByProductSize
} from './utils';
import { BASE_URL, PAGE_PARAMS } from './constants';
import {
  createShopifyProduct,
  getShopifyProducts,
  putProductIntoCollection,
  updateProductSizes
} from './requests/shopify';
import { collections } from './data';
import { SizeTypes } from './types';

const createProducts = async (): Promise<void> => {
  const shopifyProducts = await getShopifyProducts();

  const { browser, productsLinks } = await getProductsInformationBasedOnUrl({
    url: `${BASE_URL}/polos?${PAGE_PARAMS}`
  });

  let index = 0;
  for (const link of productsLinks) {
    const page = await browser.newPage();
    await page.goto(link);

    const productInfo = await getProductInfoFromPage(page);
    const productSizes = await getProductSizesFromPage(page);
    const productImages = await getProductImageFromPage(page);

    const orderedSizes = orderByProductSize(
      productSizes,
      SizeTypes.SHIRT_LETTER
    );

    const productToInsertIntoShopify = await createProductObject(
      productInfo,
      productImages,
      orderedSizes
    );

    console.log(`Product ${productInfo.item_name} was got from page`);
    console.log(`Starting Shopify process`);

    const productExists = productAlreadyExistsInShopify(
      productInfo,
      shopifyProducts
    );

    if (productExists) {
      const updateProductCase = compareShopifyProductAndSizesFromPage(
        productExists,
        orderedSizes
      );

      await updateProductSizes(productExists, orderedSizes, updateProductCase);
    } else {
      const createProductId = await createShopifyProduct(
        productToInsertIntoShopify
      );
      await putProductIntoCollection(
        createProductId,
        collections.camisetas.id,
        index
      );
    }

    console.log(`Ending Shopify process`);

    await page.close();
    index++;
    break;
  }

  await browser.close();
};

createProducts();
