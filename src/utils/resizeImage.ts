export const resizeImage = (url: string): string => {
  return url.replace(/\/fit-in\/\d+x\d+/, '/fit-in/1000x1000');
};
