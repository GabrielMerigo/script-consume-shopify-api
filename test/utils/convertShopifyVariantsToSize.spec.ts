import { MockVariant } from '../../src/mocks';
import { MockShopifyProduct } from '../../src/mocks/shopifyProduct';
import { ShopifyVariant } from '../../src/types';
import { convertShopifyVariantsToSize } from '../../src/utils';

const variants: ShopifyVariant[] = [
  new MockVariant('P'),
  new MockVariant('M'),
  new MockVariant('G')
];

const shopifyProduct = new MockShopifyProduct();

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
