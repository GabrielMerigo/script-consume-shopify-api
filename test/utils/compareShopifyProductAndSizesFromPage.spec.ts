import { MockShopifyProduct, MockVariant } from '../../src/mocks/classes';
import { UpdateProductStatus } from '../../src/types';
import { compareShopifyProductAndSizesFromPage } from '../../src/utils';

const variants = [
  new MockVariant('P'),
  new MockVariant('M'),
  new MockVariant('G')
];

const shopifyProduct = new MockShopifyProduct(
  undefined,
  undefined,
  undefined,
  variants
);

describe('compareShopifyProductAndSizesFromPage', () => {
  it(`should return ${UpdateProductStatus.DO_NOT_UPDATE} if sizes and products are equal`, () => {
    const isShopifyProductsVariantsSizeEqualToSizes =
      compareShopifyProductAndSizesFromPage(shopifyProduct, ['P', 'M', 'G']);

    expect(isShopifyProductsVariantsSizeEqualToSizes).toBe(
      UpdateProductStatus.DO_NOT_UPDATE
    );
  });

  it(`should return ${UpdateProductStatus.UPDATE} if sizes and products are different`, () => {
    const isShopifyProductsVariantsSizeDifferentFromSizes =
      compareShopifyProductAndSizesFromPage(shopifyProduct, [
        'P',
        'M',
        'G',
        'GG'
      ]);

    expect(isShopifyProductsVariantsSizeDifferentFromSizes).toBe(
      UpdateProductStatus.UPDATE
    );
  });

  it(`should return ${UpdateProductStatus.SOLD_OUT} if sizes is empty`, () => {
    const isSizesEmpty = compareShopifyProductAndSizesFromPage(
      shopifyProduct,
      []
    );

    expect(isSizesEmpty).toBe(UpdateProductStatus.SOLD_OUT);
  });
});
