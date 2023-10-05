import puppeteer from "puppeteer";

import { createVariants, generatePath, resizeImage } from "./utils";
import { CustomElement, Product } from "./types";
import { instance } from "./axios";

const BASE_URL = "https://www.dropaaqui.com.br/";

const createProducts = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto(`${BASE_URL}/camisetas`);

  const products: Product[] = await page.evaluate(() => params.items);

  for (let i = 0; i < products.length; i++) {
    console.log(products[i].item_name);
    console.log(products[i].item_id);

    const productPath = generatePath(
      products[i].item_name,
      products[i].item_id
    );

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
    const arrayOfSize = sizes.split(" ").filter((item) => Boolean(item));
    const productInfo: Product[] = await page.evaluate(() => params.items);
    const imagesFormatted = imagesResized.map((imageUrl: string) => ({
      src: imageUrl,
    }));

    const product = {
      title: productInfo[0].item_name,
      images: imagesFormatted,
      vendor: productInfo[0].item_category,
      variants: createVariants(
        arrayOfSize,
        productInfo[0].price,
        productInfo[0].item_id
      ),
    };

    console.log(`Produto ${product.title} criado com sucesso!`);
  }

  // instance.post("/admin/api/2023-07/products.json", { product });

  await browser.close();
};

createProducts();
