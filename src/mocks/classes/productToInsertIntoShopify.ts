import {
  ProductImage,
  ProductToInsertIntoShopify,
  ShopifyMetafield,
  ShopifyVariant
} from '@types';

export class MockProductToInsertIntoShopify
  implements ProductToInsertIntoShopify
{
  title: string = 'ITEM_NAME';
  price: string = '12.00';
  body_html: string = '<body/>';
  vendor: string = '<body/>';
  inventory_quantity: number = 1;
  images: ProductImage[] = [];
  variants: ShopifyVariant[] = [];
  metafields: ShopifyMetafield[] = [];

  constructor(
    title?: string,
    price?: string,
    vendor?: string,
    inventory_quantity?: number,
    images?: ProductImage[],
    variants?: ShopifyVariant[],
    body_html?: string,
    metafields?: ShopifyMetafield[]
  ) {
    this.title = title || this.title;
    this.price = price || this.price;
    this.vendor = vendor || this.vendor;
    this.inventory_quantity = inventory_quantity || this.inventory_quantity;
    this.images = images || this.images;
    this.variants = variants || this.variants;
    this.body_html = body_html || this.body_html;
    this.metafields = metafields || this.metafields;
  }
}
