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

// src/utils/verifyVendorCode.ts
var verifyVendorCode_exports = {};
__export(verifyVendorCode_exports, {
  verifyVendorCode: () => verifyVendorCode
});
module.exports = __toCommonJS(verifyVendorCode_exports);

// src/constants/product.ts
var VENDOR_CODES = [
  "LCT",
  "PRL",
  "CK",
  "HB",
  "TH",
  "ACT",
  "DG",
  "DIOR",
  "ABERCROMBIE",
  "DIESEL",
  "GUCCI"
];

// src/utils/verifyVendorCode.ts
var verifyVendorCode = (code) => {
  return VENDOR_CODES.includes(code);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  verifyVendorCode
});
