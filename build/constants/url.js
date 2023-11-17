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

// src/constants/url.ts
var url_exports = {};
__export(url_exports, {
  BASE_URL: () => BASE_URL,
  GET_PRODUCTS_LIMIT: () => GET_PRODUCTS_LIMIT,
  PAGE_PARAMS: () => PAGE_PARAMS
});
module.exports = __toCommonJS(url_exports);
var BASE_URL = "https://www.dropaaqui.com.br";
var PAGE_PARAMS = "?limit=100&page=1";
var GET_PRODUCTS_LIMIT = 250;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BASE_URL,
  GET_PRODUCTS_LIMIT,
  PAGE_PARAMS
});
