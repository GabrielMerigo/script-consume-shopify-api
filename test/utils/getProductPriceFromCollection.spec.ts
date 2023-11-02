import { collections } from '@data';
import { ExpectedCollections } from '@types';
import { getProductPriceFromCollection } from '@utils';

describe('getProductPriceFromCollection', () => {
  it('should return price based in a collection', () => {
    const selectedCollection: ExpectedCollections = 'polos';

    const result = getProductPriceFromCollection(selectedCollection);

    expect(result).toBe(collections[selectedCollection].productPrice);
  });
});
