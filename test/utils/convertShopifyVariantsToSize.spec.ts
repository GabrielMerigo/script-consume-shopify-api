import { VariantStub } from '../../src/mocks';
import { ShopifyProductStub } from '../../src/mocks/shopifyProduct';
import { ShopifyVariant } from '../../src/types';
import { convertShopifyVariantsToSize } from '../../src/utils';

const variants: ShopifyVariant[] = [
  new VariantStub('P'),
  new VariantStub('M'),
  new VariantStub('G')
];

const shopifyProduct = new ShopifyProductStub();

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
