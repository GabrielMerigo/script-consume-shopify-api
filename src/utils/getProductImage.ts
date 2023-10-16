import { PRODUCT_IMAGE_TAG } from '../constants';
import {
  GetProductImageTypeParams,
  GetProductImageTypeResponse
} from '../types';
import { resizeImage } from './resizeImage';

export const getProductImage = async ({
  currentProductPage
}: GetProductImageTypeParams): Promise<GetProductImageTypeResponse> => {
  const images = await currentProductPage.$$eval(
    PRODUCT_IMAGE_TAG,
    (elements) => {
      return elements.map((element) => {
        return element.getAttribute('src');
      });
    }
  );

  const imagesResized = images.map((image) => resizeImage(image || ''));
  const imagesFormatted = imagesResized.map((imageUrl: string) => ({
    src: imageUrl
  }));

  return {
    productImages: imagesFormatted
  };
};
