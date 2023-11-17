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

// src/data/vendor.ts
var vendor_exports = {};
__export(vendor_exports, {
  vendors: () => vendors
});
module.exports = __toCommonJS(vendor_exports);
var vendors = {
  CK: {
    code: "CK",
    name: "Calvin Klein"
  },
  LCT: {
    code: "LCT",
    name: "Lacoste"
  },
  PRL: {
    code: "PRL",
    name: "Rauph Lauren"
  },
  HB: {
    code: "HB",
    name: "Hugo Boss"
  },
  TH: {
    code: "TH",
    name: "Tommy Hilfiger"
  },
  ACT: {
    code: "ACT",
    name: "Acostamento"
  },
  DG: {
    code: "DG",
    name: "Dolce & Gabanna"
  },
  ABERCROMBIE: {
    code: "ABERCROMBIE",
    name: "Abercrombie"
  },
  DIESEL: {
    code: "DIESEL",
    name: "Diesel"
  },
  DIOR: {
    code: "DIOR",
    name: "Dior"
  },
  GUCCI: {
    code: "GUCCI",
    name: "Gucci"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  vendors
});
