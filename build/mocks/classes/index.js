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

// src/mocks/classes/index.ts
var classes_exports = {};
__export(classes_exports, {
  MockMetafield: () => MockMetafield,
  MockProductImage: () => MockProductImage,
  MockProductInfoFromHTML: () => MockProductInfoFromHTML,
  MockProductToInsertIntoShopify: () => MockProductToInsertIntoShopify,
  MockShopifyProduct: () => MockShopifyProduct,
  MockVariant: () => MockVariant
});
module.exports = __toCommonJS(classes_exports);

// src/mocks/classes/shopifyProduct.ts
var MockShopifyProduct = class {
  constructor(id, title, vendor, variants, images) {
    this.id = "PRODUCT_ID";
    this.inventory_quantity = 1;
    this.title = "PRODUCT_TITLE";
    this.vendor = "VENDOR";
    this.images = [];
    this.variants = [];
    this.id = id || this.id;
    this.title = title || this.title;
    this.variants = variants || this.variants;
    this.images = images || this.images;
    this.vendor = vendor || this.vendor;
  }
};

// src/mocks/classes/variants.ts
var MockVariant = class {
  constructor(option1, price, sku, inventory_management, inventory_quantity) {
    this.option1 = "P";
    this.price = "12.00";
    this.sku = "VARIANT_SKU";
    this.inventory_quantity = null;
    this.option1 = option1 || this.option1;
    this.price = price || this.price;
    this.sku = sku || this.sku;
    this.inventory_management = inventory_management || null;
    this.inventory_quantity = inventory_quantity === 0 ? 0 : null;
  }
};

// src/mocks/classes/productImage.ts
var MockProductImage = class {
  constructor(src) {
    this.src = "/my-image-url";
    this.src = src || this.src;
  }
};

// src/mocks/classes/productInfoFromHTML.ts
var MockProductInfoFromHTML = class {
  constructor(item_id, item_name, price, item_category, item_category2, item_category3, item_category4, item_category5) {
    this.item_id = "ITEM_ID";
    this.item_name = "ITEM_NAME";
    this.price = "12.00";
    this.item_category = "ITEM_CATEGORY";
    this.item_category2 = "ITEM_CATEGORY_2";
    this.item_category3 = "ITEM_CATEGORY_3";
    this.item_category4 = "ITEM_CATEGORY_2";
    this.item_category5 = "ITEM_CATEGORY_3";
    this.item_id = item_id || this.item_id;
    this.item_name = item_name || this.item_name;
    this.price = price || this.price;
    this.item_category = item_category || this.item_category;
    this.item_category2 = item_category2 || this.item_category2;
    this.item_category3 = item_category3 || this.item_category3;
    this.item_category4 = item_category4 || this.item_category4;
    this.item_category5 = item_category5 || this.item_category5;
  }
};

// src/mocks/classes/productToInsertIntoShopify.ts
var MockProductToInsertIntoShopify = class {
  constructor(title, price, vendor, inventory_quantity, images, variants, body_html, metafields) {
    this.title = "ITEM_NAME";
    this.price = "12.00";
    this.body_html = "<body/>";
    this.vendor = "<body/>";
    this.inventory_quantity = 1;
    this.images = [];
    this.variants = [];
    this.metafields = [];
    this.title = title || this.title;
    this.price = price || this.price;
    this.vendor = vendor || this.vendor;
    this.inventory_quantity = inventory_quantity || this.inventory_quantity;
    this.images = images || this.images;
    this.variants = variants || this.variants;
    this.body_html = body_html || this.body_html;
    this.metafields = metafields || this.metafields;
  }
};

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
  MockMetafield,
  MockProductImage,
  MockProductInfoFromHTML,
  MockProductToInsertIntoShopify,
  MockShopifyProduct,
  MockVariant
});
