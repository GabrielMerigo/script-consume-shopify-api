export const removeEmojiFromText = (title: string): string => {
  return title.replace(/[^a-zA-ZÀ-ÿÇç\s]/g, '').trim();
};
