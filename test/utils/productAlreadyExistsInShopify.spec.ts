import {
  MockProductToInsertIntoShopify,
  MockShopifyProduct,
  MockVariant
} from '@mocks/classes';
import { ProductToInsertIntoShopify, ShopifyProduct } from '@types';
import { productAlreadyExistsInShopify } from '@utils';

const mockSKU = 'found-SKU';

const mockFoundProduct: ProductToInsertIntoShopify =
  new MockProductToInsertIntoShopify(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    [new MockVariant('M', '12.00', mockSKU)]
  );
const mockNotFoundProduct: ProductToInsertIntoShopify =
  new MockProductToInsertIntoShopify(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    [new MockVariant('M', '12.00', 'NOT_FOUND')]
  );

const mockEmptyVariantsProduct: ProductToInsertIntoShopify =
  new MockProductToInsertIntoShopify();

const mockFoundShopifyProduct = new MockShopifyProduct(
  undefined,
  undefined,
  undefined,
  [new MockVariant('P', '12.00', mockSKU)]
);
const mockNotFoundShopifyProduct = new MockShopifyProduct();

const shopifyProducts: ShopifyProduct[] = [
  mockNotFoundShopifyProduct,
  mockNotFoundShopifyProduct,
  mockFoundShopifyProduct
];

describe('productAlreadyExistsInShopify', () => {
  it('should return a Shopify product if productInfoFromHTML title is the same as one of our Shopify products', () => {
    const foundProduct = productAlreadyExistsInShopify(
      mockFoundProduct,
      shopifyProducts
    );

    expect(foundProduct).toBe(shopifyProducts[2]);
  });

  it("should return null if product isn't found", () => {
    const notFoundProduct = productAlreadyExistsInShopify(
      mockNotFoundProduct,
      shopifyProducts
    );

    expect(notFoundProduct).toBeNull();
  });

  it("should return null if product don't have variants", () => {
    const notFoundProduct = productAlreadyExistsInShopify(
      mockEmptyVariantsProduct,
      shopifyProducts
    );

    expect(notFoundProduct).toBeNull();
  });
});
