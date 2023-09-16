export const generatePath = (title: string, id: string) => {
  const path = `${title.toLocaleLowerCase()} ${id.toLocaleLowerCase()}`;

  return path.replaceAll(" ", "-");
};

export function resizeImage(url: string) {
  return url.replace(/\/fit-in\/\d+x\d+/, "/fit-in/600x600");
}
