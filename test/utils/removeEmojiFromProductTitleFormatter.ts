import { removeEmojiFromText } from '../../src/utils/removeEmojiFromText';

const mockTestText = 'Polo LCT Caqui ⭐😃🥰';

describe('removeEmojiFromText', () => {
  it('should remove all emojis from the text', () => {
    const removeEmojiFromTextTest = removeEmojiFromText(mockTestText);

    expect(removeEmojiFromTextTest).toEqual('Polo LCT Caqui');
  });
});
