import { removeEmojiFromText } from '../../src/utils/removeEmojiFromText';

describe('removeEmojiFromText', () => {
  it('should remove all emojis from the text', () => {
    const textWithEmoji = 'Polo LCT Caqui ⭐😃🥰';
    const result = removeEmojiFromText(textWithEmoji);
    const expectedResult = 'Polo LCT Caqui';

    expect(result).toStrictEqual(expectedResult);
  });

  it("should return a normal text with don't have emoji", () => {
    const textWithoutEmoji = 'Polo LCT Caqui';
    const result = removeEmojiFromText(textWithoutEmoji);
    const expectedResult = 'Polo LCT Caqui';

    expect(result).toStrictEqual(expectedResult);
  });
});
