import {
  getProductsInformationBasedOnUrl,
  productAlreadyExistsInShopify,
  createProductObject,
  compareShopifyProductAndSizesFromPage,
  orderByProductSize,
  getInformationFromPage,
  formatPageUrlWithCollection
} from './utils';
import {
  createShopifyProduct,
  getShopifyProductsByCollection,
  putProductIntoCollection,
  updateProductSizes
} from './requests/shopify';
import { collections } from './data';
import { ExpectedCollections } from './types';

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

    const { productImages, productInfo, productSizes } =
      await getInformationFromPage(page);

    const sortedSizes = orderByProductSize(
      productSizes,
      collections[COLLECTION].sizeType
    );

    console.log(`Product ${productInfo.item_name} was got from page: ${link}`);
    console.log(`Starting Shopify process`);

    const productExists = productAlreadyExistsInShopify(
      productInfo,
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
          `Product ${productInfo.item_name} wasn't created because is SOLD_OUT`
        );

        return;
      }

      const productToInsertIntoShopify = createProductObject(
        productInfo,
        productImages,
        sortedSizes,
        COLLECTION
      );

      const createdProductId = await createShopifyProduct(
        productToInsertIntoShopify
      );
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
