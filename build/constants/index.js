"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  BASE_URL: () => BASE_URL,
  COLLECTIONS: () => COLLECTIONS,
  GET_PRODUCTS_LIMIT: () => GET_PRODUCTS_LIMIT,
  METAFIELD_KEY: () => METAFIELD_KEY,
  METAFIELD_NAMESPACE: () => METAFIELD_NAMESPACE,
  METAFIELD_TYPE: () => METAFIELD_TYPE,
  PAGE_PARAMS: () => PAGE_PARAMS,
  PRODUCT_COLLECTION_SELECTOR_ID: () => PRODUCT_COLLECTION_SELECTOR_ID,
  PRODUCT_IMAGE_TAG: () => PRODUCT_IMAGE_TAG,
  PRODUCT_PANTS_SIZE_NUMBERS: () => PRODUCT_PANTS_SIZE_NUMBERS,
  PRODUCT_SHIRT_SIZE_LETTERS: () => PRODUCT_SHIRT_SIZE_LETTERS,
  PRODUCT_SIZE: () => PRODUCT_SIZE,
  PRODUCT_TITLE_SELECTOR: () => PRODUCT_TITLE_SELECTOR,
  SHOPIFY_INVENTORY_MANAGEMENT: () => SHOPIFY_INVENTORY_MANAGEMENT,
  VENDOR_CODES: () => VENDOR_CODES
});
module.exports = __toCommonJS(constants_exports);

// src/constants/selector.ts
var PRODUCT_COLLECTION_SELECTOR_ID = "#shelf-list-product";
var PRODUCT_IMAGE_TAG = "li.image-additional img";
var PRODUCT_SIZE = ".product_options_list .sizes";

// src/constants/url.ts
var BASE_URL = "https://www.dropaaqui.com.br";
var PAGE_PARAMS = "?limit=100&page=1";
var GET_PRODUCTS_LIMIT = 250;

// src/constants/product.ts
var PRODUCT_SHIRT_SIZE_LETTERS = [
  "PP",
  "P",
  "M",
  "G",
  "GG",
  "EG",
  "G3",
  "G5",
  "G7"
];
var PRODUCT_PANTS_SIZE_NUMBERS = ["38", "40", "42", "44", "46", "48"];
var SHOPIFY_INVENTORY_MANAGEMENT = "shopify";
var PRODUCT_TITLE_SELECTOR = "{{PRODUCT_TITLE}}";
var VENDOR_CODES = [
  "LCT",
  "PRL",
  "CK",
  "HB",
  "TH",
  "ACT",
  "DG",
  "DIOR",
  "ABERCROMBIE",
  "DIESEL",
  "GUCCI"
];
var COLLECTIONS = [
  "blusoes",
  "calcas-jeans",
  "calcas-sarja",
  "camisas-sociais",
  "camisetas",
  "polos"
];
var METAFIELD_TYPE = "list.single_line_text_field";
var METAFIELD_NAMESPACE = "custom";
var METAFIELD_KEY = "tamanhos";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BASE_URL,
  COLLECTIONS,
  GET_PRODUCTS_LIMIT,
  METAFIELD_KEY,
  METAFIELD_NAMESPACE,
  METAFIELD_TYPE,
  PAGE_PARAMS,
  PRODUCT_COLLECTION_SELECTOR_ID,
  PRODUCT_IMAGE_TAG,
  PRODUCT_PANTS_SIZE_NUMBERS,
  PRODUCT_SHIRT_SIZE_LETTERS,
  PRODUCT_SIZE,
  PRODUCT_TITLE_SELECTOR,
  SHOPIFY_INVENTORY_MANAGEMENT,
  VENDOR_CODES
});
