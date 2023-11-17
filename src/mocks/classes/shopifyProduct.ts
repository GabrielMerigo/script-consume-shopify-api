import { ProductImage, ShopifyProduct, ShopifyVariant } from '@types';

export class MockShopifyProduct implements ShopifyProduct {
  id = 'PRODUCT_ID';
  inventory_quantity = 1;
  title = 'PRODUCT_TITLE';
  vendor = 'VENDOR';
  images = [] as ProductImage[];
  variants = [] as ShopifyVariant[];

  constructor(
    id?: string,
    title?: string,
    vendor?: string,
    variants?: ShopifyVariant[],
    images?: ProductImage[]
  ) {
    this.id = id || this.id;
    this.title = title || this.title;
    this.variants = variants || this.variants;
    this.images = images || this.images;
    this.vendor = vendor || this.vendor;
  }
}
