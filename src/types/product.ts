interface ProductInfoFromHTML {
  item_id: string;
  item_name: string;
  price: number;
  item_category: string;
  item_category2: string;
  item_category3: string;
}

interface ProductCreationResponse {
  product: {
    id: number;
  };
}

interface ShopifyProduct {
  title: string;
  images: {
    src: string;
  }[];
  vendor: string;
  inventory_quantity: number;
  variants: ShoppifyVariant[];
}

interface Variant {
  sizes: string;
  price: number;
  sku: string;
}

type ShoppifyVariant = Record<string, string | number>;

export {
  ProductCreationResponse,
  ProductInfoFromHTML,
  ShopifyProduct,
  Variant,
  ShoppifyVariant
};
