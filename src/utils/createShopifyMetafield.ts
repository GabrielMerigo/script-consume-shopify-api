import { METAFIELD_KEY, METAFIELD_NAMESPACE, METAFIELD_TYPE } from '@constants';
import { ShopifyMetafield } from '@types';

export const createShopifyMetafield = (sizes: string[]): ShopifyMetafield => ({
  key: METAFIELD_KEY,
  namespace: METAFIELD_NAMESPACE,
  type: METAFIELD_TYPE,
  value: JSON.stringify(sizes)
});
