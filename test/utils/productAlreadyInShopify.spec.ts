import { ProductInfoFromHTML, ShopifyProduct } from '../../src/types';
import { productAlreadyInShopify } from '../../src/utils';

const FOUNDED_PRODUCT_TITLE = 'founded_product';

const notFoundedProduct: ShopifyProduct = {
  id: '1',
  title: 'not_founded_product',
  images: [
    {
      src: ''
    }
  ],
  inventory_quantity: 1,
  variants: [],
  vendor: 'vendor'
};
const mockedFounded: ShopifyProduct = {
  id: '1',
  title: FOUNDED_PRODUCT_TITLE,
  images: [
    {
      src: ''
    }
  ],
  inventory_quantity: 1,
  variants: [],
  vendor: 'vendor'
};

const mockedShopifyProducts: ShopifyProduct[] = [
  notFoundedProduct,
  notFoundedProduct,
  mockedFounded
];

const mockedFoundedProductFromHTML: ProductInfoFromHTML = {
  item_name: FOUNDED_PRODUCT_TITLE,
  item_id: '1',
  price: 12,
  item_category: '1',
  item_category2: '1',
  item_category3: '1'
};

const mockedNotFoundedProductFromHTML: ProductInfoFromHTML = {
  item_name: 'random_title',
  item_id: '1',
  price: 12,
  item_category: '1',
  item_category2: '1',
  item_category3: '1'
};

describe('productAlreadyInShopify test', () => {
  it('Should return a Shopify Product if productInfoFromHTML title is the same as one of our Shopify products', () => {
    const foundedProduct = productAlreadyInShopify(
      mockedFoundedProductFromHTML,
      mockedShopifyProducts
    );

    expect(foundedProduct).toBe(mockedFounded);
  });

  it("Should return null if product isn't found", () => {
    const notFoundedProduct = productAlreadyInShopify(
      mockedNotFoundedProductFromHTML,
      mockedShopifyProducts
    );

    expect(notFoundedProduct).toBeNull();
  });
});
