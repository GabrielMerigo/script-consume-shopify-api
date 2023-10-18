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

interface ProductImage {
  src: string;
}

interface ShopifyProduct {
  id: string;
  title: string;
  images: ProductImage[];
  vendor: string;
  inventory_quantity: number;
  variants: ShopifyVariant[];
}

interface ProductToInsertIntoShopify {
  title: string;
  images: ProductImage[];
  vendor: string;
  inventory_quantity: number;
  variants: ShopifyVariant[];
}

type ShopifyVariant = Record<string, string | number>;

export {
  ProductCreationResponse,
  ProductInfoFromHTML,
  ProductImage,
  ShopifyProduct,
  ShopifyVariant,
  ProductToInsertIntoShopify
};
