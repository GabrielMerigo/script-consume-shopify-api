import { ProductImage } from '../../types';

export class MockProductImage implements ProductImage {
  src: string = '/my-image-url';

  constructor(src?: string) {
    this.src = src || this.src;
  }
}
