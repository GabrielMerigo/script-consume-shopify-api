import { BASE_URL, PAGE_PARAMS } from '@constants';
import { formatPageUrlWithCollection } from '@utils';

describe('formatPageUrlWithCollection', () => {
  it('should create a url with the collectionUrl', () => {
    const mockCollectionUrl = '/polo';

    const result = formatPageUrlWithCollection(mockCollectionUrl);

    expect(result).toBe(`${BASE_URL}${mockCollectionUrl}${PAGE_PARAMS}`);
  });
});
