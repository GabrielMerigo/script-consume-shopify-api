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

// src/utils/getProductSizesFromPage.ts
var getProductSizesFromPage_exports = {};
__export(getProductSizesFromPage_exports, {
  getProductSizesFromPage: () => getProductSizesFromPage
});
module.exports = __toCommonJS(getProductSizesFromPage_exports);

// src/constants/selector.ts
var PRODUCT_SIZE = ".product_options_list .sizes";

// src/utils/getProductSizesFromPage.ts
var getProductSizesFromPage = async (page) => {
  const thereIsSize = await page.$(PRODUCT_SIZE);
  if (!thereIsSize)
    return [];
  const sizes = await page.$$eval(PRODUCT_SIZE, (elements) => {
    return elements.map((element) => element.textContent?.trim() || "");
  });
  return sizes.length ? sizes : [];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProductSizesFromPage
});
