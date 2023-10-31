import { PRODUCT_TITLE_SELECTOR } from '../../src/constants';
import { collections } from '../../src/data';
import { collections as collectionsOptions } from '../../src/types';
import { getProductDescriptionByCollection } from '../../src/utils';

describe('getProductDescriptionByCollection', () => {
  collectionsOptions.forEach((collection) => {
    it(`should return the selected collection with the product title in the description for ${collection}`, () => {
      const mockTitle = 'PRODUCT_' + collection.toUpperCase();
      const productTitleSelectorRegex = new RegExp(PRODUCT_TITLE_SELECTOR, 'g');

      const expectResult = collections[collection].productBodyHtml.replace(
        productTitleSelectorRegex,
        mockTitle
      );
      console.log(expectResult);

      const result = getProductDescriptionByCollection(collection, mockTitle);
      expect(result).toStrictEqual(expectResult);
    });
  });
});
