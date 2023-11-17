import { Page } from 'puppeteer';
import { ExpectedCollections, ProductToInsertIntoShopify } from '@types';
import {
  getProductInfoFromPage,
  getProductSizesFromPage,
  getProductImageFromPage,
  createProductObject,
  orderByProductSize
} from '@utils';
import { collections } from '@data';

export const getFormattedProductInformationFromPage = async (
  page: Page,
  collection: ExpectedCollections
): Promise<[ProductToInsertIntoShopify, string[]]> => {
  const productInfo = await getProductInfoFromPage(page);
  const productSizes = await getProductSizesFromPage(page);
  const productImages = await getProductImageFromPage(page);

  const sortedSizes = orderByProductSize(
    productSizes,
    collections[collection].sizeType
  );

  return [
    createProductObject(productInfo, productImages, sortedSizes, collection),
    sortedSizes
  ];
};
