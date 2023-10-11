import { GetProductInfo, ProductInfoFromHTML } from "../types";

const params: {
  items: ProductInfoFromHTML[];
} = { items: [] };

export const getProductInfo = async ({ currentProductPage }: GetProductInfo) => {
  const productInfo = await currentProductPage.evaluate(
    () => params.items
  );

  return productInfo[0]
}
