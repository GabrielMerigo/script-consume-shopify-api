import { ElementHandle, Page } from 'puppeteer';

interface CustomElement extends ElementHandle {
  getAttribute(name: string): string;
  textContent: string;
}

interface GetProductsInformationBasedOnUrlType {
  url: string
}

interface GetProductImageTypeParams {
  currentProductPage: Page
}

interface GetProductImageTypeResponse  {
  images: {
    src: string;
  }[];
}

export { CustomElement, GetProductsInformationBasedOnUrlType, GetProductImageTypeParams, GetProductImageTypeResponse };
