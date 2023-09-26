export const generatePath = (title: string, id: string) => {
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
