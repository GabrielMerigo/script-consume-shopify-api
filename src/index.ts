import puppeteer from "puppeteer";

import { generatePath, imageToBase64, resizeImage } from "./utils";
import { CustomElement, Product } from "./types";
import { instance } from "./axios";
import { clear } from "console";

const BASE_URL = "https://www.dropaaqui.com.br/";

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto(
    `${BASE_URL}/camisetas/camisetas-importadas/abercrombiecamisetasimpo1`
  );

  const products: Product[] = await page.evaluate(() => params.items);
  const productPath = generatePath(products[0].item_name, products[0].item_id);
  await page.goto(`${BASE_URL}/${productPath}`);

  const images = await page.$$eval(
    "li.image-additional img",
    (elements: CustomElement[]) => {
      return elements.map((element) => {
        return element.getAttribute("src");
      });
    }
  );

  const imagesResized = images.map((image: string) => resizeImage(image));
  const sizes = await page.$eval(
    ".product_options_list",
    (element: CustomElement) => element.textContent
  );

  const productInfo: Product[] = await page.evaluate(() => params.items);

  const imagesFormatted = imagesResized.map((imageUrl: string) => ({
    src: imageUrl,
  }));

  const product = {
    title: productInfo[0].item_name,
    images: imagesFormatted,
    vendor: productInfo[0].item_category,
  };

  instance.post("/admin/api/2023-07/products.json", { product });

  console.log(`Produto ${product.title} criado com sucesso!`);

  await browser.close();
})();
