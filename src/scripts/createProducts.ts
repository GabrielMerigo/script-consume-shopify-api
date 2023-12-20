import {
  getProductsInformationBasedOnUrl,
  productAlreadyExistsInShopify,
  compareShopifyProductAndSizesFromPage,
  getFormattedProductInformationFromPage,
  formatPageUrlWithCollection,
  updateProductBasedOnProductStatus
} from '@utils';
import {
  createShopifyProduct,
  getShopifyProductsByCollectionId,
  putProductIntoCollection
} from '@requests/shopify';
import { collections } from '@data';

import { ExpectedCollections } from '@types';
import { logger } from '@services/pino';

type ProductStatus = {
  amount: number;
  products: Array<string | undefined>;
};

export type SummaryProps = {
  updated: {
    amount: number;
  };
  created: {
    amount: number;
  };
  failed: ProductStatus;
  soldOut: ProductStatus;
  deleted: ProductStatus;
};

export const createProducts = async (
  collection: ExpectedCollections
): Promise<void> => {
  const summary: SummaryProps = {
    updated: {
      amount: 0
    },
    created: {
      amount: 0
    },
    failed: {
      amount: 0,
      products: []
    },
    soldOut: {
      amount: 0,
      products: []
    },
    deleted: {
      amount: 0,
      products: []
    }
  };

  const shopifyProducts = await getShopifyProductsByCollectionId(
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

        await updateProductBasedOnProductStatus(
          productExists,
          sortedSizes,
          updateProductStatus,
          summary,
          link
        );
      } else {
        if (!sortedSizes.length) {
          logger.warn(
            `Product ${product.title} wasn't created because is SOLD_OUT`
          );

          summary.soldOut.amount++;
          summary.soldOut.products = [...summary.soldOut.products, link];

          continue;
        }

        const createdProductId = await createShopifyProduct(product);
        await putProductIntoCollection(
          createdProductId,
          collections[collection].id,
          index
        );

        summary.created.amount++;
      }

      logger.info(`Ending Shopify process`);

      await page.close();
      index++;
    } catch (e) {
      summary.failed.amount++;
      summary.failed.products = [...summary.failed.products, link];

      logger.error(`Error link: ${link}`);
      console.log(e);
      continue;
    }
  }

  logger.info(`
    ------------------- SUMMARY OF THE SCRIPT -------------------------
    FAILED PRODUCTS AMOUNT: ${summary.failed.amount}
    LINK OF THE PRODUCTS FAILED: ${summary.failed.products.join(', ')}
    -------------------------------------------------------------------
    DELETED PRODUCTS AMOUNT: ${summary.deleted.amount}
    LINK OF THE PRODUCTS DELETED: ${summary.deleted.products.join(', ')}
    -------------------------------------------------------------------
    SOLD OUT PRODUCTS AMOUNT: ${summary.soldOut.amount}
    LINK OF THE PRODUCTS SOLD OUT: ${summary.soldOut.products.join(', ')}
    -------------------------------------------------------------------
    UPDATED PRODUCTS AMOUNT: ${summary.updated.amount}
    -------------------------------------------------------------------
    CREATED PRODUCTS AMOUNT: ${summary.created.amount}
    -------------------------------------------------------------------
  `);

  await browser.close();
};
