interface ProductInfoFromHTML {
  item_id: string;
  item_name: string;
  price: string;
  item_category: string;
  item_category2: string;
  item_category3: string;
  item_category4: string;
  item_category5: string;
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
  id: string;
  title: string;
  images: ProductImage[];
  vendor: string;
  variants: ShopifyVariant[];
}

interface ProductToInsertIntoShopify {
  title: string;
  images: ProductImage[];
  vendor: string;
  inventory_quantity: number;
  variants: ShopifyVariant[];
  body_html: string;
  metafields: ShopifyMetafield[];
}

interface ShopifyVariant {
  option1: string;
  price: string;
  sku: string;
  inventory_management: 'shopify' | null;
  inventory_quantity: 0 | null;
}

interface ShopifyMetafield {
  namespace: 'custom';
  key: 'tamanhos';
  value: string; // '["P","M"]' should be this format
  type: 'list.single_line_text_field';
}

enum UpdateProductStatus {
  SOLD_OUT = 'SOLD_OUT',
  UPDATE = 'UPDATE',
  DO_NOT_UPDATE = 'DO_NOT_UPDATE'
}

export {
  ProductCreationResponse,
  ProductInfoFromHTML,
  ProductImage,
  ShopifyProduct,
  ShopifyVariant,
  ProductToInsertIntoShopify,
  UpdateProductStatus,
  ShopifyMetafield
};
