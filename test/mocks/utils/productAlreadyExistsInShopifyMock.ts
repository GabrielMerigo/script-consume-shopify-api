import { ProductInfoFromHTML, ShopifyProduct } from '../../../src/types';

const FOUND_PRODUCT_TITLE = 'found_product';

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

export {
  notFoundProduct,
  shopifyProducts,
  foundProductFromHTML,
  notFoundProductFromHTML
};
