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

// src/types/collection.ts
var collection_exports = {};
__export(collection_exports, {
  SizeTypes: () => SizeTypes
});
module.exports = __toCommonJS(collection_exports);
var SizeTypes = /* @__PURE__ */ ((SizeTypes2) => {
  SizeTypes2["SHIRT_LETTER"] = "SHIRT_LETTER";
  SizeTypes2["PANTS_NUMBER"] = "PANTS_NUMBER";
  return SizeTypes2;
})(SizeTypes || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SizeTypes
});
