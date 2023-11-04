export const removeEmojiFromText = (title: string): string => {
  return title.replace(/[^a-zA-Z\s]/g, '').trim();
};
