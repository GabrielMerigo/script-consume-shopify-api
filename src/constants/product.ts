const PRODUCT_SHIRT_SIZE_LETTERS = [
  'PP',
  'P',
  'M',
  'G',
  'GG',
  'EG',
  'G3',
  'G5',
  'G7'
];
const PRODUCT_PANTS_SIZE_NUMBERS = ['38', '40', '42', '44', '46', '48'];
const SHOPIFY_INVENTORY_MANAGEMENT = 'shopify';
const PRODUCT_TITLE_SELECTOR = '{{PRODUCT_TITLE}}';
const VENDOR_CODES = ['LCT', 'PRL', 'CK', 'HB', 'TH'] as const;
const COLLECTIONS = [
  'blusoes',
  'calcas-jeans',
  'calcas-sarja',
  'camisas-sociais',
  'camisetas',
  'polos'
] as const;

export {
  PRODUCT_TITLE_SELECTOR,
  PRODUCT_PANTS_SIZE_NUMBERS,
  PRODUCT_SHIRT_SIZE_LETTERS,
  SHOPIFY_INVENTORY_MANAGEMENT,
  VENDOR_CODES,
  COLLECTIONS
};
