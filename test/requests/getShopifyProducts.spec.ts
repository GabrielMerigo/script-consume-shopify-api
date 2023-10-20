import { AxiosResponse } from 'axios';

import { getShopifyProducts } from '../../src/requests/shopify';
import { instance } from '../../src/services/axios';
import { mockData } from '../mocks/requests/getShopifyProductsMock';

describe('getShopifyProducts', () => {
  beforeAll(() => {
    jest.spyOn(instance, 'get').mockResolvedValue({
      data: {
        products: mockData
      }
    } as AxiosResponse);
  });

  it('should return shopify products correctly', async () => {
    const shopifyProducts = await getShopifyProducts();

    expect(shopifyProducts).toHaveLength(2);
  });

  it('should return 2 variants in the first item', async () => {
    const shopifyProducts = await getShopifyProducts();

    expect(shopifyProducts[0].variants).toHaveLength(2);
  });
});
