import { ElementHandle } from 'puppeteer';

interface CustomElement extends ElementHandle {
  getAttribute(name: string): string;
  textContent: string;
}

interface GetProductsInformationBasedOnUrlType {
  url: string;
}

export { CustomElement, GetProductsInformationBasedOnUrlType };
