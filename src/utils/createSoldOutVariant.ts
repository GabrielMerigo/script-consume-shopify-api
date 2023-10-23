import { ShopifyVariant } from '../types';

export const createSoldOutVariant = (
  price: string,
  sku: string
): ShopifyVariant => ({
  option1: 'Esgotado',
  inventory_management: 'shopify',
  inventory_quantity: 0,
  price,
  sku
});
