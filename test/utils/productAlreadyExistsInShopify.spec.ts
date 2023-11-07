import {
  MockProductToInsertIntoShopify,
  MockShopifyProduct
} from '@mocks/classes';
import { ProductToInsertIntoShopify, ShopifyProduct } from '@types';
import { productAlreadyExistsInShopify } from '@utils';

const mockFoundTitle = 'found-title';

const mockFoundProductFromHTML: ProductToInsertIntoShopify =
  new MockProductToInsertIntoShopify(mockFoundTitle);
const mockNotFoundProductFromHTML: ProductToInsertIntoShopify =
  new MockProductToInsertIntoShopify();

const mockFoundShopifyProduct = new MockShopifyProduct(
  undefined,
  mockFoundTitle
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
      mockFoundProductFromHTML,
      shopifyProducts
    );

    expect(foundProduct).toBe(shopifyProducts[2]);
  });

  it("should return null if product isn't found", () => {
    const notFoundProduct = productAlreadyExistsInShopify(
      mockNotFoundProductFromHTML,
      shopifyProducts
    );

    expect(notFoundProduct).toBeNull();
  });
});
