import puppeteer from "puppeteer";

import { createVariants, generatePath, resizeImage } from "./utils";
import { CustomElement, Product } from "./types";
// import { instance } from "./axios";

const BASE_URL = "https://www.dropaaqui.com.br/";

const createProducts = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/camisetas?limit=100&page=1`);
  await page.waitForSelector("#shelf-list-product");

  let products = [];

  const productsLinks = await page.evaluate(() => {
    const anchorElements = document.querySelectorAll(
      "#shelf-list-product .image a"
    );
    const values: any = [];

    anchorElements.forEach((anchor: any) => {
      values.push(anchor.href);
    });

    return values;
  });

  for (const link of productsLinks) {
    const page = await browser.newPage();
    await page.goto(link);

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
    const arrayOfSize = sizes.split(" ").filter((item) => Boolean(item)); // rever essa etapa de variantes
    const productInfo: Product[] = await page.evaluate(() => params.items);
    const imagesFormatted = imagesResized.map((imageUrl: string) => ({
      src: imageUrl,
    }));

    const product = {
      title: productInfo[0].item_name,
      images: imagesFormatted,
      vendor: productInfo[0].item_category,
      // variants: createVariants(
      //   arrayOfSize,
      //   productInfo[0].price,
      //   productInfo[0].item_id
      // ),
    };

    console.log(`Produto ${product.title} criado com sucesso!`);

    products.push(product);

    await page.close();
  }

  console.log(products);

  await browser.close();
};

createProducts();
