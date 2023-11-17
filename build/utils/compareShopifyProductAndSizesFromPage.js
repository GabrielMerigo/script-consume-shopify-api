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

// src/utils/compareShopifyProductAndSizesFromPage.ts
var compareShopifyProductAndSizesFromPage_exports = {};
__export(compareShopifyProductAndSizesFromPage_exports, {
  compareShopifyProductAndSizesFromPage: () => compareShopifyProductAndSizesFromPage
});
module.exports = __toCommonJS(compareShopifyProductAndSizesFromPage_exports);

// src/constants/product.ts
var PRODUCT_TITLE_SELECTOR = "{{PRODUCT_TITLE}}";

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

// src/utils/getProductsInformationBasedOnUrl.ts
var import_puppeteer = __toESM(require("puppeteer"));

// src/utils/convertShopifyVariantsToSizes.ts
var convertShopifyVariantsToSize = (shopifyProduct) => {
  if (!shopifyProduct.variants.length)
    return [];
  return shopifyProduct.variants.map((i) => i.option1);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compareShopifyProductAndSizesFromPage
});
