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

// src/types/product.ts
var product_exports = {};
__export(product_exports, {
  UpdateProductStatus: () => UpdateProductStatus
});
module.exports = __toCommonJS(product_exports);
var UpdateProductStatus = /* @__PURE__ */ ((UpdateProductStatus2) => {
  UpdateProductStatus2["SOLD_OUT"] = "SOLD_OUT";
  UpdateProductStatus2["UPDATE"] = "UPDATE";
  UpdateProductStatus2["DO_NOT_UPDATE"] = "DO_NOT_UPDATE";
  return UpdateProductStatus2;
})(UpdateProductStatus || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateProductStatus
});
