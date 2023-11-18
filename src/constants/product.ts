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

const VENDOR_CODES = [
  'LCT',
  'PRL',
  'CK',
  'HB',
  'TH',
  'JJ',
  'ACT',
  'DG',
  'DIOR',
  'ABERCROMBIE',
  'DIESEL',
  'GUCCI'
] as const;

const COLLECTIONS = [
  'blusoes',
  'calcas-jeans',
  'calcas-sarja',
  'camisas-manga-longa',
  'camisas-manga-curta',
  'camisetas',
  'polos',
  'cuecas',
  'kit-cuecas',
  'bermuda-jeans',
  'bermuda-sarja',
  'bermuda-short-sarja',
  // 'bermuda-linho', I didnt add because we dont have a good quantity of products in DROPAQUI
  'bermuda-tactel'
] as const;

const METAFIELD_TYPE = 'list.single_line_text_field';
const METAFIELD_NAMESPACE = 'custom';
const METAFIELD_KEY = 'tamanhos';

export {
  PRODUCT_TITLE_SELECTOR,
  PRODUCT_PANTS_SIZE_NUMBERS,
  PRODUCT_SHIRT_SIZE_LETTERS,
  SHOPIFY_INVENTORY_MANAGEMENT,
  VENDOR_CODES,
  COLLECTIONS,
  METAFIELD_KEY,
  METAFIELD_NAMESPACE,
  METAFIELD_TYPE
};
