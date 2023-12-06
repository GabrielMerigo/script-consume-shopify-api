export const removeEmojiAndSymbolsFromText = (title: string): string => {
  return title
    .replace(/[^a-zA-ZÀ-ÿÇç\s]/g, '')
    .replaceAll('þ', '')
    .trim();
};
