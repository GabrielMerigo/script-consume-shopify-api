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

// src/utils/orderByProductSize.ts
var orderByProductSize_exports = {};
__export(orderByProductSize_exports, {
  orderByProductSize: () => orderByProductSize
});
module.exports = __toCommonJS(orderByProductSize_exports);

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

// src/utils/orderByProductSize.ts
var orderByProductSize = (sizes, sizeType) => {
  if (!sizes.length)
    return [];
  switch (sizeType) {
    case "SHIRT_LETTER" /* SHIRT_LETTER */:
      return sizes.sort((a, b) => {
        const indexA = PRODUCT_SHIRT_SIZE_LETTERS.indexOf(a);
        const indexB = PRODUCT_SHIRT_SIZE_LETTERS.indexOf(b);
        return indexA - indexB;
      });
    case "PANTS_NUMBER" /* PANTS_NUMBER */:
      return sizes.sort((a, b) => {
        const indexA = PRODUCT_PANTS_SIZE_NUMBERS.indexOf(a);
        const indexB = PRODUCT_PANTS_SIZE_NUMBERS.indexOf(b);
        return indexA - indexB;
      });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  orderByProductSize
});
