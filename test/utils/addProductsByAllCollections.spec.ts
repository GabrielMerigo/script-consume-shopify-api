import { addProductsByAllCollections } from '@utils';
import { createProducts } from '../../src/index';
import { COLLECTIONS } from '@constants';

jest.mock('../../src/index', () => ({
  createProducts: jest.fn()
}));

describe('addProductsByAllCollections', () => {
  it(`should call createProducts ${COLLECTIONS.length} times`, () => {
    addProductsByAllCollections();
    expect(createProducts).toHaveBeenCalledTimes(COLLECTIONS.length);
  });

  COLLECTIONS.forEach((collection) => {
    it(`should call the createProducts function with ${collection} as a param`, () => {
      addProductsByAllCollections();
      expect(createProducts).toHaveBeenCalledWith(collection);
    });
  });
});