
export const removeEmojiFromProductTitleFormatter = (title: string): string => {
  return title.replace(/[^\\w\\s]|_/g, '');

}

