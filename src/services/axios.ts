import axios from 'axios';
import { env } from '@env';

export const instance = axios.create({
  baseURL: `https://${env.STORE_ID}.myshopify.com/`,
  headers: { 'X-Shopify-Access-Token': env.SHOPIFY_ACCESS_TOKEN }
});
