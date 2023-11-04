import {
  getProductsInformationBasedOnUrl,
  productAlreadyExistsInShopify,
  compareShopifyProductAndSizesFromPage,
  getProductFromPage,
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

const COLLECTION: ExpectedCollections = 'polos';

const createProducts = async (): Promise<void> => {
  const shopifyProducts = await getShopifyProductsByCollection(
    collections[COLLECTION].id
  );

  const { browser, productsLinks } = await getProductsInformationBasedOnUrl({
    url: formatPageUrlWithCollection(collections[COLLECTION].urlHandle)
  });

  let index = 0;
  for (const link of productsLinks) {
    const page = await browser.newPage();
    await page.goto(link);

    const [product, sortedSizes] = await getProductFromPage(page, COLLECTION);

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

      await updateProductSizes(productExists, sortedSizes, updateProductStatus);
    } else {
      if (!sortedSizes.length) {
        console.log(
          `Product ${product.title} wasn't created because is SOLD_OUT`
        );

        return;
      }

      const createdProductId = await createShopifyProduct(product);
      await putProductIntoCollection(
        createdProductId,
        collections[COLLECTION].id,
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
