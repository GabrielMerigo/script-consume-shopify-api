export const removeEmojiFromText = (title: string): string => {
  return title.replace(/[^\\w\\s]|_/g, '');

}
