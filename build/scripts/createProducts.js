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

// src/scripts/createProducts.ts
var createProducts_exports = {};
__export(createProducts_exports, {
  createProducts: () => createProducts
});
module.exports = __toCommonJS(createProducts_exports);

// src/constants/selector.ts
var PRODUCT_COLLECTION_SELECTOR_ID = "#shelf-list-product";
var PRODUCT_IMAGE_TAG = "li.image-additional img";
var PRODUCT_SIZE = ".product_options_list .sizes";

// src/constants/url.ts
var BASE_URL = "https://www.dropaaqui.com.br";
var PAGE_PARAMS = "?limit=100&page=1";
var GET_PRODUCTS_LIMIT = 250;

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
var SHOPIFY_INVENTORY_MANAGEMENT = "shopify";
var PRODUCT_TITLE_SELECTOR = "{{PRODUCT_TITLE}}";
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
var METAFIELD_TYPE = "list.single_line_text_field";
var METAFIELD_NAMESPACE = "custom";
var METAFIELD_KEY = "tamanhos";

// src/utils/createVariantsSize.ts
var createVariantsSize = (sizes, price, sku) => {
  if (!sizes.length)
    return [];
  const variants = sizes.map((size) => ({
    option1: size,
    price,
    sku,
    inventory_management: null,
    inventory_quantity: null
  }));
  return variants;
};

// src/utils/getProductsInformationBasedOnUrl.ts
var import_puppeteer = __toESM(require("puppeteer"));
var getProductsInformationBasedOnUrl = async ({
  url
}) => {
  const browser = await import_puppeteer.default.launch({
    headless: "new",
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/chromium-browser"
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector(PRODUCT_COLLECTION_SELECTOR_ID);
  const productsLinks = await getProductsLink(page);
  return {
    productsLinks,
    browser
  };
};

// src/utils/getProductsLink.ts
var getProductsLink = async (page) => {
  const productsLinks = await page.evaluate(() => {
    const anchorElements = document.querySelectorAll(
      "#shelf-list-product .image a"
    );
    const values = [];
    anchorElements.forEach((anchor) => {
      if (anchor instanceof HTMLAnchorElement)
        values.push(anchor.href);
    });
    return values;
  });
  return productsLinks;
};

// src/utils/resizeImage.ts
var resizeImage = (url) => {
  return url.replace(/\/fit-in\/\d+x\d+/, "/fit-in/1000x1000");
};

// src/utils/getProductImageFromPage.ts
var getProductImageFromPage = async (currentProductPage) => {
  const images = await currentProductPage.$$eval(
    PRODUCT_IMAGE_TAG,
    (elements) => {
      return elements.map((element) => {
        return element.getAttribute("src");
      });
    }
  );
  const imagesResized = images.map((image) => resizeImage(image || ""));
  const imagesFormatted = imagesResized.map((imageUrl) => ({
    src: imageUrl
  }));
  return imagesFormatted;
};

// src/utils/getProductInfoFromPage.ts
var params = { items: [] };
var getProductInfoFromPage = async (currentProductPage) => {
  const productInfo = await currentProductPage.evaluate(() => params.items);
  return productInfo[0];
};

// src/utils/productAlreadyExistsInShopify.ts
var productAlreadyExistsInShopify = (product, shopifyProducts) => {
  const foundProduct = shopifyProducts.find(
    (i) => i?.variants[0]?.sku == product?.variants[0]?.sku
  );
  return foundProduct || null;
};

// src/utils/getProductSizesFromPage.ts
var getProductSizesFromPage = async (page) => {
  const thereIsSize = await page.$(PRODUCT_SIZE);
  if (!thereIsSize)
    return [];
  const sizes = await page.$$eval(PRODUCT_SIZE, (elements) => {
    return elements.map((element) => element.textContent?.trim() || "");
  });
  return sizes.length ? sizes : [];
};

// src/utils/createProductObject.ts
var createProductObject = (productInfoFromHTML, productImages, productSizes, collection) => {
  const titleWithoutEmoji = removeEmojiFromText(productInfoFromHTML.item_name);
  const titleFormatted = formatProductTitleVendor(titleWithoutEmoji);
  return {
    title: titleFormatted,
    vendor: getVendorByProductInfo(productInfoFromHTML),
    images: productImages,
    body_html: getProductDescriptionByCollection(collection, titleFormatted),
    inventory_quantity: 1,
    variants: createVariantsSize(
      productSizes,
      getProductPriceFromCollection(collection),
      productInfoFromHTML.item_id
    ),
    metafields: [createShopifyMetafield(productSizes)]
  };
};

// src/utils/compareShopifyProductAndSizesFromPage.ts
var compareShopifyProductAndSizesFromPage = (shopifyProduct, sizes) => {
  const convertedShopifyProductVariants = convertShopifyVariantsToSize(shopifyProduct);
  if (!sizes.length)
    return "SOLD_OUT" /* SOLD_OUT */;
  const shopifyProductVariantsString = convertedShopifyProductVariants.join("");
  const sizesString = sizes.join("");
  return shopifyProductVariantsString === sizesString ? "DO_NOT_UPDATE" /* DO_NOT_UPDATE */ : "UPDATE" /* UPDATE */;
};

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

// src/utils/convertShopifyVariantsToSizes.ts
var convertShopifyVariantsToSize = (shopifyProduct) => {
  if (!shopifyProduct.variants.length)
    return [];
  return shopifyProduct.variants.map((i) => i.option1);
};

// src/utils/createSoldOutVariant.ts
var createSoldOutVariant = (price, sku) => ({
  option1: "Esgotado",
  inventory_management: SHOPIFY_INVENTORY_MANAGEMENT,
  inventory_quantity: 0,
  price,
  sku
});

// src/utils/removeEmojiFromText.ts
var removeEmojiFromText = (title) => {
  return title.replace(/[^a-zA-ZÀ-ÿÇç\s]/g, "").trim();
};

// src/data/collections.ts
var collections = {
  blusoes: {
    id: 460110201136,
    urlHandle: "/inverno/blusa-de-frio",
    title: "Blus\xF5es",
    sizeType: "SHIRT_LETTER" /* SHIRT_LETTER */,
    productPrice: "159.90",
    productBodyHtml: `<meta charset="utf-8">
<div data-mce-fragment="1">
<div style="text-align: left;" data-mce-fragment="1"><span data-mce-fragment="1">Apresentamos o nosso blus\xE3o de inverno  ${PRODUCT_TITLE_SELECTOR}, uma pe\xE7a essencial para o seu guarda-roupa.</span></div>
<div style="text-align: left;" data-mce-fragment="1"><span data-mce-fragment="1"></span></div>
<div style="text-align: left;" data-mce-fragment="1">
<ul>
<li><span data-mce-fragment="1"><strong>Design Elegante</strong>: Com um design moderno e elegante, este blus\xE3o \xE9 perfeito para mant\xEA-lo aquecido e com estilo.</span></li>
<li><span data-mce-fragment="1"><strong>Tecido Quente e Confort\xE1vel</strong>: Fabricado com materiais de alta qualidade, o tecido proporciona calor e conforto em dias frios.</span></li>
<li><span data-mce-fragment="1"><strong>Versatilidade de Uso</strong>: Adequado para diversas ocasi\xF5es, desde passeios casuais at\xE9 aventuras ao ar livre.</span></li>
</ul>
</div>
<div style="text-align: left;" data-mce-fragment="1"><span data-mce-fragment="1"></span></div>
<div style="text-align: left;" data-mce-fragment="1"><span data-mce-fragment="1">Adquira o seu blus\xE3o agora e esteja preparado para enfrentar o inverno com estilo e conforto.</span></div>
<div data-mce-fragment="1"></div>
</div>
<div id="acfifjfajpekbmhmjppnmmjgmhjkildl" class="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>`
  },
  "calcas-jeans": {
    id: 457581003056,
    urlHandle: "/calcas/calca-jeans",
    title: "Cal\xE7as Jeans",
    sizeType: "PANTS_NUMBER" /* PANTS_NUMBER */,
    productPrice: "189.90",
    productBodyHtml: `<meta charset="utf-8">
<div data-mce-fragment="1">
<div data-mce-fragment="1">
<span data-mce-fragment="1">Apresentamos a nossa </span><span data-mce-fragment="1"></span><span data-mce-fragment="1">${PRODUCT_TITLE_SELECTOR}</span><span data-mce-fragment="1"></span><span data-mce-fragment="1">:</span>
</div>
<div data-mce-fragment="1">
<ul>
<li><span data-mce-fragment="1">Tecido dur\xE1vel: Fabricada em jeans de alta qualidade, proporcionando durabilidade.</span></li>
</ul>
</div>
<div data-mce-fragment="1">
<span data-mce-fragment="1">Esta cal\xE7a \xE9 a fus\xE3o perfeita entre moda, conforto e consci\xEAncia ambiental. Seja para ocasi\xF5es casuais ou encontros, a </span><span data-mce-fragment="1"></span><span data-mce-fragment="1">${PRODUCT_TITLE_SELECTOR}</span> oferece estilo e qualidade excepcionais.</span>
</div>
</div>
<div class="acfifjfajpekbmhmjppnmmjgmhjkildl" id="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>`
  },
  "calcas-sarja": {
    id: 458204807472,
    urlHandle: "/calcas/calca-sarja",
    title: "Cal\xE7as Sarja",
    sizeType: "PANTS_NUMBER" /* PANTS_NUMBER */,
    productPrice: "199.90",
    productBodyHtml: `<meta charset="utf-8">
<div data-mce-fragment="1">
<div data-mce-fragment="1">
<meta charset="utf-8">
<div>
<div><span>Apresentamos a ic\xF4nica ${PRODUCT_TITLE_SELECTOR}:</span></div>
<div>
<ul>
<li><span>Tecido Dur\xE1vel: Fabricada com sarja de alta qualidade, garantindo resist\xEAncia e longevidade.</span></li>
</ul>
</div>
<div><span>Esta cal\xE7a \xE9 a fus\xE3o perfeita entre moda, conforto e consci\xEAncia ambiental. Seja para ocasi\xF5es casuais ou encontros, a ${PRODUCT_TITLE_SELECTOR} oferece estilo e qualidade excepcionais. Com sua sarja de alta durabilidade, voc\xEA estar\xE1 pronto para enfrentar qualquer desafio com um toque de eleg\xE2ncia.</span></div>
</div>
</div>
</div>
<div class="acfifjfajpekbmhmjppnmmjgmhjkildl" id="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>
<div id="acfifjfajpekbmhmjppnmmjgmhjkildl" class="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>`
  },
  "camisas-sociais": {
    id: 457100296496,
    urlHandle: "/camisas/camisa-manga-longa",
    title: "Camisas Sociais",
    sizeType: "SHIRT_LETTER" /* SHIRT_LETTER */,
    productPrice: "229.90",
    productBodyHtml: `<meta charset="utf-8">
<div data-mce-fragment="1">
<div data-mce-fragment="1">
<meta charset="utf-8">
<div>
<div>
<meta charset="utf-8">
<div>
<div><span>Apresentamos ${PRODUCT_TITLE_SELECTOR} uma pe\xE7a de moda importada que combina estilo e qualidade. Com estampa no busto, gola redonda, manga longa e barra reta, essa camiseta \xE9 a escolha perfeita para qualquer ocasi\xE3o.</span></div>
<div>
<ul>
<li><span>Camiseta Manga Longa Importada: Importada para garantir qualidade internacional.</span></li>
<li><span>Estampa no Busto: Detalhe elegante que acrescenta sofistica\xE7\xE3o ao seu look.</span></li>
<li><span>Gola Redonda: Cl\xE1ssica e vers\xE1til, perfeita para combinar com diferentes pe\xE7as.</span></li>
<li><span>Manga Longa e Barra Reta: Adequada para todas as esta\xE7\xF5es e situa\xE7\xF5es.</span></li>
<li><span>Modelagem Custom Slim Fit: Ajuste perfeito ao corpo para um visual elegante.</span></li>
<li><span>Tecido Sofisticado: Feita de algod\xE3o com elastano para conforto e durabilidade.</span></li>
</ul>
</div>
<div><span>Vista-se com eleg\xE2ncia e qualidade. Adquira ${PRODUCT_TITLE_SELECTOR} agora e eleve o seu estilo a outro n\xEDvel!</span></div>
</div>
</div>
</div>
</div>
</div>
<div id="acfifjfajpekbmhmjppnmmjgmhjkildl" class="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>
<div class="acfifjfajpekbmhmjppnmmjgmhjkildl" id="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>`
  },
  camisetas: {
    id: 457099477296,
    urlHandle: "/camisetas/camisetas-importadas",
    title: "Camisetas",
    sizeType: "SHIRT_LETTER" /* SHIRT_LETTER */,
    productPrice: "89.90",
    productBodyHtml: `<meta charset="utf-8">
<div data-mce-fragment="1">
<div data-mce-fragment="1">
<span data-mce-fragment="1">Experiencie o luxo discreto com ${PRODUCT_TITLE_SELECTOR}. </span><span data-mce-fragment="1">Cada costura \xE9 um testemunho da qualidade impec\xE1vel e aten\xE7\xE3o aos detalhes que a marca representa. Seja para um evento especial ou uma ocasi\xE3o formal, esta camisa \xE9 um s\xEDmbolo de sofistica\xE7\xE3o minimalista. Vista a excel\xEAncia.</span>
</div>
</div>
<div id="acfifjfajpekbmhmjppnmmjgmhjkildl" class="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>`
  },
  polos: {
    id: 457095774512,
    urlHandle: "/polos",
    title: "Polos",
    sizeType: "SHIRT_LETTER" /* SHIRT_LETTER */,
    productPrice: "139.90",
    productBodyHtml: `<meta charset="utf-8">
<div data-mce-fragment="1">
<div data-mce-fragment="1">
<meta charset="utf-8">
<div>
<div><span>Apresentamos a ${PRODUCT_TITLE_SELECTOR}, uma combina\xE7\xE3o impec\xE1vel de estilo e qualidade.</span></div>
<div>
<ul>
<li><span>Modelagem: Custom Fit, proporcionando um caimento sob medida que se adapta confortavelmente ao corpo.</span></li>
<li><span>Tecido: Confeccionada em piquet 100% algod\xE3o, oferecendo um toque suave e agrad\xE1vel \xE0 pele.</span></li>
<li><span>Fio 30: A utiliza\xE7\xE3o do fio 30 confere durabilidade e resist\xEAncia \xE0 pe\xE7a, garantindo que ela mantenha sua eleg\xE2ncia ao longo do tempo.</span></li>
<li><span>Detalhes de Qualidade: Os acabamentos refinados e a aten\xE7\xE3o aos detalhes tornam esta camisa polo uma escolha que exala classe.</span></li>
</ul>
</div>
<div><span></span></div>
<div><span>A ${PRODUCT_TITLE_SELECTOR} \xE9 uma fus\xE3o perfeita entre conforto e estilo, tornando-a uma pe\xE7a vers\xE1til que se encaixa tanto em ocasi\xF5es casuais quanto em momentos mais formais. Adicione um toque de eleg\xE2ncia atemporal ao seu guarda-roupa com esta pe\xE7a \xFAnica.</span></div>
</div>
</div>
</div>
<div class="acfifjfajpekbmhmjppnmmjgmhjkildl" id="acfifjfajpekbmhmjppnmmjgmhjkildl"></div>`
  }
};

// src/data/vendor.ts
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

// src/utils/getFormattedProductInformationFromPage.ts
var getFormattedProductInformationFromPage = async (page, collection) => {
  const productInfo = await getProductInfoFromPage(page);
  const productSizes = await getProductSizesFromPage(page);
  const productImages = await getProductImageFromPage(page);
  const sortedSizes = orderByProductSize(
    productSizes,
    collections[collection].sizeType
  );
  return [
    createProductObject(productInfo, productImages, sortedSizes, collection),
    sortedSizes
  ];
};

// src/utils/formatPageUrlWithCollection.ts
var formatPageUrlWithCollection = (collectionUrl) => `${BASE_URL}${collectionUrl}${PAGE_PARAMS}`;

// src/utils/getProductPriceFromCollection.ts
var getProductPriceFromCollection = (collection) => collections[collection].productPrice;

// src/utils/getProductDescriptionByCollection.ts
var getProductDescriptionByCollection = (collection, productTitle) => {
  const GLOBAL_REGEX_FLAG = "g";
  const productTitleSelectorRegex = new RegExp(
    PRODUCT_TITLE_SELECTOR,
    GLOBAL_REGEX_FLAG
  );
  const formattedDescription = collections[collection].productBodyHtml.replace(
    productTitleSelectorRegex,
    productTitle
  );
  return formattedDescription;
};

// src/utils/formatProductTitleVendor.ts
var formatProductTitleVendor = (productTitle) => {
  let includedCode = "";
  VENDOR_CODES.forEach((code) => {
    const isCodeIncluded = productTitle.includes(code);
    if (isCodeIncluded)
      includedCode = code;
  });
  if (includedCode)
    return productTitle.replace(
      includedCode,
      vendors[includedCode].name
    );
  return productTitle;
};

// src/utils/getVendorByProductInfo.ts
var compareVendorNameAndCode = (name, code, stringToCompare) => {
  return stringToCompare.includes(name) || stringToCompare.includes(code) ? true : false;
};
var getVendorByProductInfo = (productInfoFromHTML) => {
  const contentToCheck = [
    productInfoFromHTML.item_name,
    productInfoFromHTML.item_category,
    productInfoFromHTML.item_category2,
    productInfoFromHTML.item_category3,
    productInfoFromHTML.item_category4,
    productInfoFromHTML.item_category5
  ].join().toLowerCase();
  let vendorCode;
  for (let i = 0; i < VENDOR_CODES.length; i++) {
    const currentVendorCode = VENDOR_CODES[i];
    if (compareVendorNameAndCode(
      vendors[currentVendorCode].name.toLowerCase(),
      vendors[currentVendorCode].code.toLowerCase(),
      contentToCheck
    )) {
      vendorCode = vendors[currentVendorCode].name;
    }
  }
  return vendorCode ? vendorCode : productInfoFromHTML.item_category;
};

// src/utils/createShopifyMetafield.ts
var createShopifyMetafield = (sizes) => ({
  key: METAFIELD_KEY,
  namespace: METAFIELD_NAMESPACE,
  type: METAFIELD_TYPE,
  value: JSON.stringify(sizes)
});

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

// src/requests/shopify/createShopifyProduct.ts
var createShopifyProduct = async (product) => {
  const {
    data: { product: productCreated }
  } = await instance.post(
    "/admin/api/2023-07/products.json",
    { product }
  );
  logger_default.info(
    `Product ID ${productCreated.id} title ${product.title} created inside the shopify`
  );
  return productCreated.id;
};

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

// src/requests/shopify/updateProductSizes.ts
var updateProductSizes = async (product, sizes, updateProductStatus) => {
  if (updateProductStatus === "DO_NOT_UPDATE" /* DO_NOT_UPDATE */)
    return;
  const variants = updateProductStatus === "UPDATE" /* UPDATE */ ? createVariantsSize(
    sizes,
    product.variants[0].price,
    product.variants[0].sku
  ) : [
    createSoldOutVariant(
      product.variants[0].price,
      product.variants[0].price
    )
  ];
  const {
    data: { product: productUpdated }
  } = await instance.put(
    `/admin/api/2023-07/products/${product.id}.json`,
    {
      product: {
        id: product.id,
        variants
      }
    }
  );
  logger_default.info(`Product ${productUpdated.id} updated with success!`);
};

// src/requests/shopify/getShopifyProductByCollection.ts
var getShopifyProductsByCollection = async (collectionId) => {
  const response = await instance.get(
    `/admin/api/2023-10/products.json?limit=${GET_PRODUCTS_LIMIT}&collection_id=${collectionId}`
  );
  return response.data.products ? response.data.products : [];
};

// src/scripts/createProducts.ts
var createProducts = async (collection) => {
  const shopifyProducts = await getShopifyProductsByCollection(
    collections[collection].id
  );
  const { browser, productsLinks } = await getProductsInformationBasedOnUrl({
    url: formatPageUrlWithCollection(collections[collection].urlHandle)
  });
  let index = 0;
  for (const link of productsLinks) {
    try {
      const page = await browser.newPage();
      await page.goto(link);
      const [product, sortedSizes] = await getFormattedProductInformationFromPage(page, collection);
      logger_default.info(`Product ${product.title} was got from page: ${link}`);
      logger_default.info(`Starting Shopify process`);
      const productExists = productAlreadyExistsInShopify(
        product,
        shopifyProducts
      );
      if (productExists) {
        const updateProductStatus = compareShopifyProductAndSizesFromPage(
          productExists,
          sortedSizes
        );
        logger_default.info(
          `Product ${productExists.title} (${productExists.id}) updateProductStatus is equal to ${updateProductStatus}`
        );
        await updateProductSizes(
          productExists,
          sortedSizes,
          updateProductStatus
        );
      } else {
        if (!sortedSizes.length) {
          logger_default.warn(
            `Product ${product.title} wasn't created because is SOLD_OUT`
          );
          continue;
        }
        const createdProductId = await createShopifyProduct(product);
        await putProductIntoCollection(
          createdProductId,
          collections[collection].id,
          index
        );
      }
      logger_default.info(`Ending Shopify process`);
      await page.close();
      index++;
    } catch (e) {
      logger_default.error(`Error no link: ${link}`);
      console.log(e);
      continue;
    }
  }
  await browser.close();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createProducts
});
