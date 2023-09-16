import axios from "axios";

export const instance = axios.create({
  baseURL: "https://caesarimperium.myshopify.com/",
  headers: {
    "X-Shopify-Access-Token": "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",
  },
});
