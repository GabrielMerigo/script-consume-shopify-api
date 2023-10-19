import { ShopifyProduct, ShopifyVariant } from '../../src/types';
import { convertShopifyVariantsToSize } from '../../src/utils/convertShopifyVariantsToSizes';

const variants: ShopifyVariant[] = [
  {
    option1: 'P',
    price: '12.00',
    sku: 'sku'
  },
  {
    option1: 'M',
    price: '12.00',
    sku: 'sku'
  },
  {
    option1: 'G',
    price: '12.00',
    sku: 'sku'
  }
];

const shopifyProduct: ShopifyProduct = {
  id: 'id',
  title: 'title',
  variants: [],
  vendor: 'vendor',
  inventory_quantity: 1,
  images: []
};

describe('convertShopifyVariantsToSize', () => {
  it('should return a string array from Shopify variants', () => {
    const shopifyProductWithVariants = {
      ...shopifyProduct,
      variants
    };
    const convertedSizesArray = convertShopifyVariantsToSize(
      shopifyProductWithVariants
    );

    expect(convertedSizesArray).toStrictEqual(['P', 'M', 'G']);
  });
  it("should return a empty array if Shopify products don't had variants", () => {
    const emptyConvertedSizesArray =
      convertShopifyVariantsToSize(shopifyProduct);

    expect(emptyConvertedSizesArray).toStrictEqual([]);
  });
});
