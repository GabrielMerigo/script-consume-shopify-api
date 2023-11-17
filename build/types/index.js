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

// src/types/index.ts
var types_exports = {};
__export(types_exports, {
  SizeTypes: () => SizeTypes,
  UpdateProductStatus: () => UpdateProductStatus
});
module.exports = __toCommonJS(types_exports);

// src/types/product.ts
var UpdateProductStatus = /* @__PURE__ */ ((UpdateProductStatus2) => {
  UpdateProductStatus2["SOLD_OUT"] = "SOLD_OUT";
  UpdateProductStatus2["UPDATE"] = "UPDATE";
  UpdateProductStatus2["DO_NOT_UPDATE"] = "DO_NOT_UPDATE";
  return UpdateProductStatus2;
})(UpdateProductStatus || {});

// src/types/collection.ts
var SizeTypes = /* @__PURE__ */ ((SizeTypes2) => {
  SizeTypes2["SHIRT_LETTER"] = "SHIRT_LETTER";
  SizeTypes2["PANTS_NUMBER"] = "PANTS_NUMBER";
  return SizeTypes2;
})(SizeTypes || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SizeTypes,
  UpdateProductStatus
});
