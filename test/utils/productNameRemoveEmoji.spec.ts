import {productNameRemoveEmoji} from '../../src/utils/productNameRemoveEmoji'

const mockTestText = 'Polo LCT Caqui ⭐'

describe('productNameRemoveEmoji', () => {
  it('should remove all emojis from the text', () => {
    const productNameRemoveEmojiValue = productNameRemoveEmoji(mockTestText)
  });
});
