import { AxiosResponse } from 'axios';

import { getShopifyProductsByCollection } from '../../src/requests/shopify';
import { instance } from '../../src/services/axios';
import { ProductImage, ShopifyProduct, ShopifyVariant } from '../../src/types';
import {
  MockProductImage,
  MockShopifyProduct,
  MockVariant
} from '../../src/mocks/classes';

const mockId = 'mock-id';
const mockTitle = 'mock-id';
const mockVendor = 'caesar-imperium';
const mockImageSrc = '/mock-image-url';
const mockImages: ProductImage[] = [
  new MockProductImage(mockImageSrc),
  new MockProductImage()
];
const mockVariants: ShopifyVariant[] = [new MockVariant(), new MockVariant()];

const mockData: ShopifyProduct[] = [
  new MockShopifyProduct(
    mockId,
    mockTitle,
    mockVendor,
    mockVariants,
    mockImages
  ),
  new MockShopifyProduct()
];

describe('getShopifyProductsByCollection', () => {
  beforeAll(() => {
    jest.spyOn(instance, 'get').mockResolvedValue({
      data: {
        products: mockData
      }
    } as AxiosResponse);
  });

  it('should return shopify products based in the collection ID', async () => {
    const result = await getShopifyProductsByCollection(123);

    expect(result).toStrictEqual(mockData);
  });
});
