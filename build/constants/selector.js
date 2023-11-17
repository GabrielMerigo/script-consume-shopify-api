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

// src/constants/selector.ts
var selector_exports = {};
__export(selector_exports, {
  PRODUCT_COLLECTION_SELECTOR_ID: () => PRODUCT_COLLECTION_SELECTOR_ID,
  PRODUCT_IMAGE_TAG: () => PRODUCT_IMAGE_TAG,
  PRODUCT_SIZE: () => PRODUCT_SIZE
});
module.exports = __toCommonJS(selector_exports);
var PRODUCT_COLLECTION_SELECTOR_ID = "#shelf-list-product";
var PRODUCT_IMAGE_TAG = "li.image-additional img";
var PRODUCT_SIZE = ".product_options_list .sizes";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PRODUCT_COLLECTION_SELECTOR_ID,
  PRODUCT_IMAGE_TAG,
  PRODUCT_SIZE
});
