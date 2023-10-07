import { ElementHandle } from "puppeteer";

export interface ProductInfoFromHTML {
  item_id: string;
  item_name: string;
  price: number;
  item_category: string;
  item_category2: string;
  item_category3: string;
}

export interface ProductCreationResponse {
  product: {
    id: number;
  };
}

export interface CustomElement extends ElementHandle {
  getAttribute(name: string): string;
  textContent: string;
}

export interface Variant {
  sizes: string;
  price: number;
  sku: string;
}
