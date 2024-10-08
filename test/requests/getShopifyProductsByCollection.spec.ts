import { AxiosResponse } from 'axios';

import { getShopifyProductsByCollectionId } from '@requests/shopify';
import { instance } from '@services/axios';
import { ProductImage, ShopifyProduct, ShopifyVariant } from '@types';
import {
  MockProductImage,
  MockShopifyProduct,
  MockVariant
} from '@mocks/classes';

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
    const result = await getShopifyProductsByCollectionId(123);

    expect(result).toStrictEqual(mockData);
  });
});
