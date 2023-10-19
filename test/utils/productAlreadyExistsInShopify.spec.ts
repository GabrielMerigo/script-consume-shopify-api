import { ProductInfoFromHTML, ShopifyProduct } from '../../src/types';
import { productAlreadyExistsInShopify } from '../../src/utils';

const FOUND_PRODUCT_TITLE = 'founded_product';

const notFoundProduct: ShopifyProduct = {
  id: '1',
  title: 'not_found_product',
  images: [
    {
      src: ''
    }
  ],
  inventory_quantity: 1,
  variants: [],
  vendor: 'vendor'
};
const foundProduct: ShopifyProduct = {
  id: '1',
  title: FOUND_PRODUCT_TITLE,
  images: [
    {
      src: ''
    }
  ],
  inventory_quantity: 1,
  variants: [],
  vendor: 'vendor'
};

const shopifyProducts: ShopifyProduct[] = [
  notFoundProduct,
  notFoundProduct,
  foundProduct
];

const foundProductFromHTML: ProductInfoFromHTML = {
  item_name: FOUND_PRODUCT_TITLE,
  item_id: '1',
  price: '12',
  item_category: '1',
  item_category2: '1',
  item_category3: '1'
};

const notFoundProductFromHTML: ProductInfoFromHTML = {
  item_name: 'random_title',
  item_id: '1',
  price: '12',
  item_category: '1',
  item_category2: '1',
  item_category3: '1'
};

describe('productAlreadyExistsInShopify', () => {
  it('should return a Shopify product if productInfoFromHTML title is the same as one of our Shopify products', () => {
    const foundedProduct = productAlreadyExistsInShopify(
      foundProductFromHTML,
      shopifyProducts
    );

    expect(foundedProduct).toBe(foundProduct);
  });

  it("should return null if product isn't found", () => {
    const notFoundProduct = productAlreadyExistsInShopify(
      notFoundProductFromHTML,
      shopifyProducts
    );

    expect(notFoundProduct).toBeNull();
  });
});
