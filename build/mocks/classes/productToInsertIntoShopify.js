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

// src/mocks/classes/productToInsertIntoShopify.ts
var productToInsertIntoShopify_exports = {};
__export(productToInsertIntoShopify_exports, {
  MockProductToInsertIntoShopify: () => MockProductToInsertIntoShopify
});
module.exports = __toCommonJS(productToInsertIntoShopify_exports);
var MockProductToInsertIntoShopify = class {
  constructor(title, price, vendor, inventory_quantity, images, variants, body_html, metafields) {
    this.title = "ITEM_NAME";
    this.price = "12.00";
    this.body_html = "<body/>";
    this.vendor = "<body/>";
    this.inventory_quantity = 1;
    this.images = [];
    this.variants = [];
    this.metafields = [];
    this.title = title || this.title;
    this.price = price || this.price;
    this.vendor = vendor || this.vendor;
    this.inventory_quantity = inventory_quantity || this.inventory_quantity;
    this.images = images || this.images;
    this.variants = variants || this.variants;
    this.body_html = body_html || this.body_html;
    this.metafields = metafields || this.metafields;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MockProductToInsertIntoShopify
});
