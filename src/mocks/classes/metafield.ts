import { ShopifyMetafield } from '@types';
import { METAFIELD_KEY, METAFIELD_NAMESPACE, METAFIELD_TYPE } from '@constants';

export class MockMetafield implements ShopifyMetafield {
  namespace: 'custom';
  key: 'tamanhos';
  type: 'list.single_line_text_field';
  value: string = '[]';

  constructor(value?: string[]) {
    (this.key = METAFIELD_KEY),
      (this.namespace = METAFIELD_NAMESPACE),
      (this.type = METAFIELD_TYPE),
      (this.value = JSON.stringify(value) || this.value);
  }
}
