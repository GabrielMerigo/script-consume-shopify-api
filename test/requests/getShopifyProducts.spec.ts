import { AxiosResponse } from 'axios';

import { getShopifyProducts } from '@requests/shopify';
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

  it('should return url/image as src', async () => {
    const shopifyProducts = await getShopifyProducts();

    expect(shopifyProducts[0].images[0].src).toEqual(mockImageSrc);
    expect(shopifyProducts[0].images).toHaveLength(2);
  });

  it('should return id, title and vendor correctly', async () => {
    const shopifyProducts = await getShopifyProducts();

    expect(shopifyProducts[0].id).toBe(mockId);
    expect(shopifyProducts[0].vendor).toEqual(mockVendor);
  });
});
