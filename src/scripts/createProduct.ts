import puppeteer from 'puppeteer';
import {
  compareShopifyProductAndSizesFromPage,
  getFormattedProductInformationFromPage,
  productAlreadyExistsInShopify
} from '@utils';
import { ExpectedCollections } from '@types';
import { logger } from '@services/pino';
import { collections } from '@data';
import {
  createShopifyProduct,
  getShopifyProductsByCollectionId,
  putProductIntoCollection,
  updateProductBasedOnProductStatus
} from '@requests/shopify';

type CreateOnlyOneProductProps = {
  link: string;
  collection: ExpectedCollections;
};

export const createProduct = async ({
  link,
  collection
}: CreateOnlyOneProductProps): Promise<never> => {
  const shopifyProducts = await getShopifyProductsByCollectionId(
    collections[collection].id
  );
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.goto(link);

  const [product, sortedSizes] = await getFormattedProductInformationFromPage(
    page,
    collection
  );

  logger.info(`Product ${product.title} was got from page: ${link}`);
  logger.info(`Starting Shopify process`);

  const productExists = productAlreadyExistsInShopify(product, shopifyProducts);

  if (productExists) {
    const updateProductStatus = compareShopifyProductAndSizesFromPage(
      productExists,
      sortedSizes
    );

    logger.info(
      `Product ${productExists.title} (${productExists.id}) updateProductStatus is equal to ${updateProductStatus}`
    );

    await updateProductBasedOnProductStatus(
      productExists,
      sortedSizes,
      updateProductStatus
    );
  } else {
    if (!sortedSizes.length) {
      logger.warn(
        `Product ${product.title} wasn't created because is SOLD_OUT`
      );
    }

    const createdProductId = await createShopifyProduct(product);
    await putProductIntoCollection(
      createdProductId,
      collections[collection].id,
      1
    );
  }

  logger.info(`Ending Shopify process`);

  await page.close();
  process.exit();
};
