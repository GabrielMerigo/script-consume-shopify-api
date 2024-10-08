import 'dotenv/config';
import { z } from 'zod';
import { logger } from '@services/pino';

const envSchema = z.object({
  SHOPIFY_ACCESS_TOKEN: z.string(),
  STORE_ID: z.string(),
  ENV: z.string()
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  logger.error('⚠️ Invalid environment variables', _env.error.format());
  throw new Error('Invalid environment variables.');
}

export const env = _env.data;
