import { productAlreadyExistsInShopify } from '../../src/utils';
import {
  foundProductFromHTML,
  notFoundProductFromHTML,
  shopifyProducts
} from '../mocks/utils/productAlreadyExistsInShopifyMock';

describe('productAlreadyExistsInShopify', () => {
  it('should return a Shopify product if productInfoFromHTML title is the same as one of our Shopify products', () => {
    const foundProduct = productAlreadyExistsInShopify(
      foundProductFromHTML,
      shopifyProducts
    );

    expect(foundProduct).toBe(shopifyProducts[2]);
  });

  it("should return null if product isn't found", () => {
    const notFoundProduct = productAlreadyExistsInShopify(
      notFoundProductFromHTML,
      shopifyProducts
    );

    expect(notFoundProduct).toBeNull();
  });
});
