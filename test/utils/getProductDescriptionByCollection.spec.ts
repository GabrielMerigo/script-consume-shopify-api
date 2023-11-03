import { PRODUCT_TITLE_SELECTOR } from '@constants';
import { collections } from '@data';
import { collections as collectionsOptions } from '@types';
import { getProductDescriptionByCollection } from '@utils';

describe('getProductDescriptionByCollection', () => {
  collectionsOptions.forEach((collection) => {
    it(`should return the selected collection with the product title in the description for ${collection}`, () => {
      const mockTitle = 'PRODUCT_' + collection.toUpperCase();
      const productTitleSelectorRegex = new RegExp(PRODUCT_TITLE_SELECTOR, 'g');

      const expectResult = collections[collection].productBodyHtml.replace(
        productTitleSelectorRegex,
        mockTitle
      );

      const result = getProductDescriptionByCollection(collection, mockTitle);
      expect(result).toStrictEqual(expectResult);
    });
  });
});
