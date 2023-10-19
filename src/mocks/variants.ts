import { ShopifyVariant } from '../types';

export class VariantStub implements ShopifyVariant {
  option1 = 'P';
  price = '12.00';
  sku = 'VARIANT_SKU';

  constructor(option1?: string, price?: string, sku?: string) {
    this.option1 = option1 || this.option1;
    this.price = price || this.price;
    this.sku = sku || this.sku;
  }
}
