import { Page } from 'puppeteer';
import { ProductImage, ProductInfoFromHTML } from '../types';
import { getProductInfoFromPage } from './getProductInfoFromPage';
import { getProductSizesFromPage } from './getProductSizesFromPage';
import { getProductImageFromPage } from './getProductImageFromPage';

interface GetInformationFromPageReturn {
  productInfo: ProductInfoFromHTML;
  productSizes: string[];
  productImages: ProductImage[];
}

export const getInformationFromPage = async (
  page: Page
): Promise<GetInformationFromPageReturn> => {
  const productInfo = await getProductInfoFromPage(page);
  const productSizes = await getProductSizesFromPage(page);
  const productImages = await getProductImageFromPage(page);

  return {
    productImages,
    productInfo,
    productSizes
  };
};
