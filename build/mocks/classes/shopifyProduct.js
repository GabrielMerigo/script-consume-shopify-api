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

// src/mocks/classes/shopifyProduct.ts
var shopifyProduct_exports = {};
__export(shopifyProduct_exports, {
  MockShopifyProduct: () => MockShopifyProduct
});
module.exports = __toCommonJS(shopifyProduct_exports);
var MockShopifyProduct = class {
  constructor(id, title, vendor, variants, images) {
    this.id = "PRODUCT_ID";
    this.inventory_quantity = 1;
    this.title = "PRODUCT_TITLE";
    this.vendor = "VENDOR";
    this.images = [];
    this.variants = [];
    this.id = id || this.id;
    this.title = title || this.title;
    this.variants = variants || this.variants;
    this.images = images || this.images;
    this.vendor = vendor || this.vendor;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MockShopifyProduct
});
