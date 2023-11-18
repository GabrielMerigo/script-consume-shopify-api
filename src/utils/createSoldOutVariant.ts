import { SHOPIFY_INVENTORY_MANAGEMENT } from '@constants';
import { ShopifyVariant } from '@types';

export const createSoldOutVariant = (
  price: string,
  sku: string
): ShopifyVariant => ({
  option1: 'Esgotado',
  inventory_management: SHOPIFY_INVENTORY_MANAGEMENT,
  inventory_quantity: 0,
  price,
  sku
});
