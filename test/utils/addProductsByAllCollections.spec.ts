import { addProductsByAllCollections } from '@utils';
import { COLLECTIONS } from '@constants';
import { createProducts } from '../../src/scripts/createProducts';

jest.mock('../../src/scripts/createProducts', () => ({
  createProducts: jest.fn()
}));
jest.mock('../../src/services/pino', () => ({
  logger: {
    info: jest.fn()
  }
}));

describe('addProductsByAllCollections', () => {
  it(`should call createProducts ${COLLECTIONS.length} times`, async () => {
    await addProductsByAllCollections();
    expect(createProducts).toHaveBeenCalledTimes(COLLECTIONS.length);
  });

  COLLECTIONS.forEach((collection) => {
    it(`should call the createProducts function with ${collection} as a param`, () => {
      addProductsByAllCollections();
      expect(createProducts).toHaveBeenCalledWith(collection);
    });
  });
});
