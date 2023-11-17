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

// src/mocks/classes/productInfoFromHTML.ts
var productInfoFromHTML_exports = {};
__export(productInfoFromHTML_exports, {
  MockProductInfoFromHTML: () => MockProductInfoFromHTML
});
module.exports = __toCommonJS(productInfoFromHTML_exports);
var MockProductInfoFromHTML = class {
  constructor(item_id, item_name, price, item_category, item_category2, item_category3, item_category4, item_category5) {
    this.item_id = "ITEM_ID";
    this.item_name = "ITEM_NAME";
    this.price = "12.00";
    this.item_category = "ITEM_CATEGORY";
    this.item_category2 = "ITEM_CATEGORY_2";
    this.item_category3 = "ITEM_CATEGORY_3";
    this.item_category4 = "ITEM_CATEGORY_2";
    this.item_category5 = "ITEM_CATEGORY_3";
    this.item_id = item_id || this.item_id;
    this.item_name = item_name || this.item_name;
    this.price = price || this.price;
    this.item_category = item_category || this.item_category;
    this.item_category2 = item_category2 || this.item_category2;
    this.item_category3 = item_category3 || this.item_category3;
    this.item_category4 = item_category4 || this.item_category4;
    this.item_category5 = item_category5 || this.item_category5;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MockProductInfoFromHTML
});
