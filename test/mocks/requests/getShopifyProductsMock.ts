import { ShopifyProduct } from '../../../src/types';

export const mockData: ShopifyProduct[] = [
  {
    id: 'some-id',
    title: 'your title',
    images: [
      {
        src: 'url/image'
      },
      {
        src: 'url/image-2'
      }
    ],
    vendor: 'caesar-imperium',
    inventory_quantity: 2,
    variants: [
      {
        option1: 'First Option',
        price: '199.90',
        sku: 'sku-principal',
        title: 'Title Option'
      },
      {
        option1: 'Second Option',
        price: '79.90',
        sku: 'sku-principal',
        title: 'Title Option'
      }
    ]
  },
  {
    id: 'some-id-2',
    title: 'Best title',
    images: [
      {
        src: 'image/url'
      },
      {
        src: 'image/url-2'
      }
    ],
    vendor: 'caesar-imperium',
    inventory_quantity: 2,
    variants: [
      {
        option1: 'First Option',
        price: '199.90',
        sku: 'sku-principal',
        title: 'Title Option'
      },
      {
        option1: 'Second Option',
        price: '79.90',
        sku: 'sku-principal',
        title: 'Title Option'
      }
    ]
  }
];
