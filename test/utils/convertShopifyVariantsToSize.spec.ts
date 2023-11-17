import { MockVariant } from '@mocks/classes';
import { MockShopifyProduct } from '@mocks/classes';
import { ShopifyVariant } from '@types';
import { convertShopifyVariantsToSize } from '@utils';

const variants: ShopifyVariant[] = [
  new MockVariant('P'),
  new MockVariant('M'),
  new MockVariant('G')
];

const shopifyProduct = new MockShopifyProduct();

describe('convertShopifyVariantsToSize', () => {
  it('should return an array of strings from Shopify variants', () => {
    const shopifyProductWithVariants = {
      ...shopifyProduct,
      variants
    };
    const convertedSizesArray = convertShopifyVariantsToSize(
      shopifyProductWithVariants
    );

    expect(convertedSizesArray).toStrictEqual(['P', 'M', 'G']);
  });
  it("should return an empty array if Shopify products don't have variants", () => {
    const emptyConvertedSizesArray =
      convertShopifyVariantsToSize(shopifyProduct);

    expect(emptyConvertedSizesArray).toStrictEqual([]);
  });
});
