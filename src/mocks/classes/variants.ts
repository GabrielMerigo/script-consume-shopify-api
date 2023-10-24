import { ShopifyVariant } from '../../types';

export class MockVariant implements ShopifyVariant {
  option1 = 'P';
  price = '12.00';
  sku = 'VARIANT_SKU';
  inventory_management?: string | null;
  inventory_quantity?: number | undefined;

  constructor(
    option1?: string,
    price?: string,
    sku?: string,
    inventory_management?: string | null,
    inventory_quantity?: number
  ) {
    this.option1 = option1 || this.option1;
    this.price = price || this.price;
    this.sku = sku || this.sku;
    this.inventory_management = inventory_management;
    this.inventory_quantity = inventory_quantity;
  }
}
