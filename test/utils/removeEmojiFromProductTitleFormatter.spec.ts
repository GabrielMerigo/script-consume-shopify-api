import { removeEmojiAndSymbolsFromText } from '@utils';

describe('removeEmojiFromText', () => {
  it('should remove all emojis from the text', () => {
    const textWithEmoji = 'Polo LCT Caqui ⭐😃🥰';
    const result = removeEmojiAndSymbolsFromText(textWithEmoji);
    const expectedResult = 'Polo LCT Caqui';

    expect(result).toStrictEqual(expectedResult);
  });

  it("should return a normal text with don't have emoji", () => {
    const textWithoutEmoji = 'Polo LCT Caqui';
    const result = removeEmojiAndSymbolsFromText(textWithoutEmoji);
    const expectedResult = 'Polo LCT Caqui';

    expect(result).toStrictEqual(expectedResult);
  });

  it('should NOT remove "Ç" from title', () => {
    const textWithSpecialC = 'Calça Jeans Hugo Boss ⭐😃🥰';
    const result = removeEmojiAndSymbolsFromText(textWithSpecialC);
    const expectedResult = 'Calça Jeans Hugo Boss';

    expect(result).toStrictEqual(expectedResult);
  });

  it('should NOT remove letters with accent', () => {
    const specialLetter = 'áéíóúãõâêôç';
    const specialLetterUpperCase = specialLetter.toUpperCase();
    const result = removeEmojiAndSymbolsFromText(specialLetter);
    const resultUpperCase = removeEmojiAndSymbolsFromText(
      specialLetterUpperCase
    );

    expect(result).toStrictEqual(specialLetter);
    expect(resultUpperCase).toStrictEqual(specialLetterUpperCase);
  });
});
