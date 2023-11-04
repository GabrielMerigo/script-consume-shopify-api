export const productNameRemoveEmoji = (title: string): string => {
  return title.replace(/[^\\w\\s]|_/g, '');
};
