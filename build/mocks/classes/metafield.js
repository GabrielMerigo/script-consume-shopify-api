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

// src/mocks/classes/metafield.ts
var metafield_exports = {};
__export(metafield_exports, {
  MockMetafield: () => MockMetafield
});
module.exports = __toCommonJS(metafield_exports);

// src/constants/product.ts
var METAFIELD_TYPE = "list.single_line_text_field";
var METAFIELD_NAMESPACE = "custom";
var METAFIELD_KEY = "tamanhos";

// src/mocks/classes/metafield.ts
var MockMetafield = class {
  constructor(value) {
    this.value = "[]";
    this.key = METAFIELD_KEY, this.namespace = METAFIELD_NAMESPACE, this.type = METAFIELD_TYPE, this.value = JSON.stringify(value) || this.value;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MockMetafield
});