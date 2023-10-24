import { ShopifyVariant } from '../../types';

export class MockVariant implements ShopifyVariant {
  option1 = 'P';
  price = '12.00';
  sku = 'VARIANT_SKU';
  inventory_management: 'shopify' | null;
  inventory_quantity: 0 | null = null;

  constructor(
    option1?: string,
    price?: string,
    sku?: string,
    inventory_management?: 'shopify' | null,
    inventory_quantity?: 0 | null
  ) {
    this.option1 = option1 || this.option1;
    this.price = price || this.price;
    this.sku = sku || this.sku;
    this.inventory_management = inventory_management || null;
    this.inventory_quantity = inventory_quantity === 0 ? 0 : null;
  }
}
