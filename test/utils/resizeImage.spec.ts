import { resizeImage } from '../../src/utils';

describe('resizeImage', () => {
  it('should be able to replace /fit-in/600x600 to /fit-in/1000x1000 of a string', () => {
    const resizedValue = resizeImage('/fit-in/600x600');

    expect(resizedValue).toMatch('1000x1000');
  });
});
