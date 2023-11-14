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

      console.log(`Product ${product.title} was got from page: ${link}`);
      console.log(`Starting Shopify process`);

      const productExists = productAlreadyExistsInShopify(
        product,
        shopifyProducts
      );

      if (productExists) {
        const updateProductStatus = compareShopifyProductAndSizesFromPage(
          productExists,
          sortedSizes
        );

        console.log(
          `Product ${productExists.title} (${productExists.id}) updateProductStatus is equal to ${updateProductStatus}`
        );

        await updateProductSizes(
          productExists,
          sortedSizes,
          updateProductStatus
        );
      } else {
        if (!sortedSizes.length) {
          console.log(
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

      console.log(`Ending Shopify process`);

      await page.close();
      index++;
    } catch (e) {
      console.log(`Error no link: ${link}`, e);
      continue;
    }
  }

  await browser.close();
};
