import { COLLECTIONS } from '@constants';
import { ExpectedCollections } from '@types';

export const verifyExpectedCollection = (
  collection: string
): collection is ExpectedCollections => {
  return COLLECTIONS.includes(collection as ExpectedCollections);
};
