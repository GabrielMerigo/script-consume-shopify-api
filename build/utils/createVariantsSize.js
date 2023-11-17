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

// src/utils/createVariantsSize.ts
var createVariantsSize_exports = {};
__export(createVariantsSize_exports, {
  createVariantsSize: () => createVariantsSize
});
module.exports = __toCommonJS(createVariantsSize_exports);
var createVariantsSize = (sizes, price, sku) => {
  if (!sizes.length)
    return [];
  const variants = sizes.map((size) => ({
    option1: size,
    price,
    sku,
    inventory_management: null,
    inventory_quantity: null
  }));
  return variants;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createVariantsSize
});
