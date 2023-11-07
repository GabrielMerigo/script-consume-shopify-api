import { BaseCollections } from '@types';
import { addProductsByAllCollections } from '@utils';
import { createProducts } from '../../src/index';

jest.mock('../../src/index', () => ({
  createProducts: jest.fn()
}));

describe('addProductsByAllCollections', () => {
  it(`should call createProducts ${BaseCollections.length} times`, () => {
    addProductsByAllCollections();
    expect(createProducts).toHaveBeenCalledTimes(BaseCollections.length);
  });

  BaseCollections.forEach((collection) => {
    it(`should call the createProducts function with ${collection} as a param`, () => {
      addProductsByAllCollections();
      expect(createProducts).toHaveBeenCalledWith(collection);
    });
  });
});
