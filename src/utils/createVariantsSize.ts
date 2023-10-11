import { PRODUCT_SIZE } from '../constants';
import { CreateVariantSizeParams, ShopifyVariant } from '../types';

export const createVariantsSize = async ({
  page,
  price,
  sku
}: CreateVariantSizeParams) => {
  const thereIsSize = await page.$(PRODUCT_SIZE);
  let sizes;

  if (thereIsSize) {
    sizes = await page.$eval(PRODUCT_SIZE, (element) => element.textContent);
  }else{
    return []
  }

  const arrayOfSize = sizes!.split(' ').filter((item: string) => Boolean(item));

  const variants: ShopifyVariant[] = arrayOfSize.map(
    (size: string, index: number) => ({
      [`option${index + 1}`]: size,
      price: price,
      sku: sku
    })
  );

  return variants;
};
