import { collections } from '../../src/data';
import { ExpectedCollections } from '../../src/types';
import { getProductPriceFromCollection } from '../../src/utils';

describe('getProductPriceFromCollection', () => {
  it('should return price based in a collection', () => {
    const selectedCollection: ExpectedCollections = 'polos';

    const result = getProductPriceFromCollection(selectedCollection);

    expect(result).toBe(collections[selectedCollection].productPrice);
  });
});
