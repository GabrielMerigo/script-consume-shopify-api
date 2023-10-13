import { Page } from 'puppeteer';

interface ProductInfoFromHTML {
  item_id: string;
  item_name: string;
  price: number;
  item_category: string;
  item_category2: string;
  item_category3: string;
}

interface ProductCreationResponse {
  product: {
    id: number;
  };
}

interface ProductImage {
  src: string;
}

interface ShopifyProduct {
  title: string;
  images: ProductImage[];
  vendor: string;
  inventory_quantity: number;
  variants: ShopifyVariant[];
}
interface CreateVariantSizeParams {
  price: number;
  sku: string;
  page: Page;
}

export interface CreateProductObjectParams {
  productInfo: ProductInfoFromHTML;
  productImages: ProductImage[];
  page: Page;
}

type ShopifyVariant = Record<string, string | number>;

export {
  ProductCreationResponse,
  ProductInfoFromHTML,
  ShopifyProduct,
  CreateVariantSizeParams,
  ShopifyVariant
};
