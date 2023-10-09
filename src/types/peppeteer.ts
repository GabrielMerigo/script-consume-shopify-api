import { ElementHandle } from 'puppeteer';

interface CustomElement extends ElementHandle {
  getAttribute(name: string): string;
  textContent: string;
}

export { CustomElement };
