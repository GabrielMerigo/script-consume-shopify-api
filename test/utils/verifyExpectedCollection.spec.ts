import { COLLECTIONS } from '@constants';
import { verifyExpectedCollection } from '@utils';

describe('verifyExpectedCollection', () => {
  it('should return false when the string does not include in the array of collections', () => {
    const code = verifyExpectedCollection('CODE');

    expect(code).toEqual(false);
  });

  it('should return true when the string includes in the array of collections', () => {
    const code = verifyExpectedCollection(COLLECTIONS[0]);

    expect(code).toEqual(true);
  });
});
