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

// src/mocks/classes/variants.ts
var variants_exports = {};
__export(variants_exports, {
  MockVariant: () => MockVariant
});
module.exports = __toCommonJS(variants_exports);
var MockVariant = class {
  constructor(option1, price, sku, inventory_management, inventory_quantity) {
    this.option1 = "P";
    this.price = "12.00";
    this.sku = "VARIANT_SKU";
    this.inventory_quantity = null;
    this.option1 = option1 || this.option1;
    this.price = price || this.price;
    this.sku = sku || this.sku;
    this.inventory_management = inventory_management || null;
    this.inventory_quantity = inventory_quantity === 0 ? 0 : null;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MockVariant
});
