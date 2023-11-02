import { Page } from 'puppeteer';
import { ProductImage, ProductInfoFromHTML } from '@types';
import {
  getProductInfoFromPage,
  getProductSizesFromPage,
  getProductImageFromPage
} from '@utils';

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
