import { MockMetafield } from '@mocks/classes';
import { ShopifyMetafield } from '@types';
import { createShopifyMetafield } from '@utils';

describe('createShopifyMetafield', () => {
  it('should return a metafield object formatted', () => {
    const sizes = ['P', 'M', 'G'];
    const expectedResult: ShopifyMetafield = new MockMetafield(sizes);

    const result: ShopifyMetafield = createShopifyMetafield(sizes);

    expect(result).toEqual(expectedResult);
  });
});
