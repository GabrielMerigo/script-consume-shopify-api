const removeEmoji = (text: string) => {
  const emojiRegex = /[\u2B1B\u2B50]/g;

  return text.replace(emojiRegex, "");
};

export const generatePath = (title: string, id: string) => {
  console.log(title);
  console.log(id);

  let idUrl = id.replace(/^C-(?!.*C-)|^C/, "");

  const path = `${title.toLocaleLowerCase()} ${idUrl.toLocaleLowerCase()}`;

  const res = removeEmoji(path.replaceAll(" ", "-"));

  console.log("resultado", res);

  return res;
};

export const resizeImage = (url: string) => {
  return url.replace(/\/fit-in\/\d+x\d+/, "/fit-in/1000x1000");
};

export const createVariants = (sizes: string[], price: number, sku: string) => {
  const variants = sizes.map((size) => ({
    option1: size,
    price: price,
    sku: sku,
  }));

  return variants;
};
