import {
  getProductsInformationBasedOnUrl,
  productAlreadyExistsInShopify,
  compareShopifyProductAndSizesFromPage,
  getFormattedProductInformationFromPage,
  formatPageUrlWithCollection
} from '@utils';
import {
  createShopifyProduct,
  getShopifyProductsByCollection,
  putProductIntoCollection,
  updateProductSizes
} from '@requests/shopify';
import { collections } from '@data';

import { ExpectedCollections } from '@types';
import logger from '../../logger';

export const createProducts = async (
  collection: ExpectedCollections
): Promise<void> => {
  const shopifyProducts = await getShopifyProductsByCollection(
    collections[collection].id
  );

  const { browser, productsLinks } = await getProductsInformationBasedOnUrl({
    url: formatPageUrlWithCollection(collections[collection].urlHandle)
  });

  let index = 0;
  for (const link of productsLinks) {
    try {
      const page = await browser.newPage();
      await page.goto(link);

      const [product, sortedSizes] =
        await getFormattedProductInformationFromPage(page, collection);

      logger.info(`Product ${product.title} was got from page: ${link}`);
      logger.info(`Starting Shopify process`);

      const productExists = productAlreadyExistsInShopify(
        product,
        shopifyProducts
      );

      if (productExists) {
        const updateProductStatus = compareShopifyProductAndSizesFromPage(
          productExists,
          sortedSizes
        );

        logger.info(
          `Product ${productExists.title} (${productExists.id}) updateProductStatus is equal to ${updateProductStatus}`
        );

        await updateProductSizes(
          productExists,
          sortedSizes,
          updateProductStatus
        );
      } else {
        if (!sortedSizes.length) {
          logger.warn(
            `Product ${product.title} wasn't created because is SOLD_OUT`
          );

          continue;
        }

        const createdProductId = await createShopifyProduct(product);
        await putProductIntoCollection(
          createdProductId,
          collections[collection].id,
          index
        );
      }

      logger.info(`Ending Shopify process`);

      await page.close();
      index++;
    } catch (e) {
      logger.error(`Error no link: ${link}`);
      console.log(e);
      continue;
    }
  }

  await browser.close();
};
