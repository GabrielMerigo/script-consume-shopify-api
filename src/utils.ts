import fs from "fs";
import fetch from "node-fetch";

export const generatePath = (title: string, id: string) => {
  const path = `${title.toLocaleLowerCase()} ${id.toLocaleLowerCase()}`;

  return path.replaceAll(" ", "-");
};

export function resizeImage(url: string) {
  return url.replace(/\/fit-in\/\d+x\d+/, "/fit-in/600x600");
}

export async function imageToBase64(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    const imageBuffer = await response.buffer();
    const base64String = imageBuffer.toString("base64");
    return base64String;
  } catch (error) {
    console.error("Erro ao carregar a imagem:", error);
    return null;
  }
}
