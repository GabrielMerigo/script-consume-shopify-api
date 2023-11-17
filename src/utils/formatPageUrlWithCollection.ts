import { BASE_URL, PAGE_PARAMS } from '@constants';

export const formatPageUrlWithCollection = (collectionUrl: string): string =>
  `${BASE_URL}${collectionUrl}${PAGE_PARAMS}`;
