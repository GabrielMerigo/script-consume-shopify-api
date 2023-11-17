"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/requests/shopify/putProductIntoCollection.ts
var putProductIntoCollection_exports = {};
__export(putProductIntoCollection_exports, {
  putProductIntoCollection: () => putProductIntoCollection
});
module.exports = __toCommonJS(putProductIntoCollection_exports);

// src/services/axios.ts
var import_axios = __toESM(require("axios"));

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");

// logger.ts
var import_pino = __toESM(require("pino"));
var logger = (0, import_pino.default)({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyyy HH:mm:ss",
      ignore: "pid,hostname"
    }
  }
});
var logger_default = logger;

// src/env/index.ts
var envSchema = import_zod.z.object({
  SHOPIFY_ACCESS_TOKEN: import_zod.z.string(),
  STORE_ID: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  logger_default.error("\u26A0\uFE0F Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables.");
}
var env = _env.data;

// src/services/axios.ts
var instance = import_axios.default.create({
  baseURL: `https://${env.STORE_ID}.myshopify.com/`,
  headers: { "X-Shopify-Access-Token": env.SHOPIFY_ACCESS_TOKEN }
});

// src/requests/shopify/putProductIntoCollection.ts
var putProductIntoCollection = async (productId, collectionId, positionIndex) => {
  await instance.put(
    `/admin/api/2023-10/custom_collections/${collectionId}.json`,
    {
      custom_collection: {
        id: collectionId,
        collects: [
          {
            product_id: productId,
            position: positionIndex
          }
        ]
      }
    }
  );
  logger_default.info(`Product ID ${productId} added to collection ID ${collectionId}`);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  putProductIntoCollection
});
