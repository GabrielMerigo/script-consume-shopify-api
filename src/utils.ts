export const countCharacter = (str: string, character: string) => {
  if (character === "") return 0;

  return str.split(character).length - 1;
};

export const generatePath = (title: string, idFromUrl: string) => {
  let id = idFromUrl.toLocaleLowerCase();

  console.log("this is id ->", id);

  if (countCharacter(id, "c") === 2) {
    id = id.replace(/^c-/, "");
  }

  const path = `${title.toLocaleLowerCase()} ${id.toLocaleLowerCase()}`;

  return path.replaceAll(" ", "-");
};

export function resizeImage(url: string) {
  return url.replace(/\/fit-in\/\d+x\d+/, "/fit-in/1000x1000");
}

export function createVariants(sizes: string[], price: number, sku: string) {
  const variants = sizes.map((size) => ({
    option1: size,
    price: price,
    sku: sku,
  }));

  return variants;
}
