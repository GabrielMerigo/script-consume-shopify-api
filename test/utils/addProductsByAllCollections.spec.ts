import { BaseCollections } from "@types"
import { addProductsByAllCollections } from "@utils"
import { createProducts } from '../../src/index'

jest.mock('../../src/index', () => ({
  createProducts: jest.fn(),
}));

describe('addProductsByAllCollections', () => {
  it(`should call createProducts ${BaseCollections.length}`, () => {
    addProductsByAllCollections();
    expect(createProducts).toHaveBeenCalledTimes(BaseCollections.length);
  });
});
