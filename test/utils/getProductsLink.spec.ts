import { Page } from 'puppeteer';
import { getProductsLink } from '@utils';

const evaluateFunc = jest.fn();

const page: Pick<Page, 'evaluate'> = {
  evaluate: evaluateFunc.mockReturnValue(['link1', 'link2'])
};

describe('getProductsLink', () => {
  it('should return the links from page correctly', async () => {
    const productsLink = await getProductsLink(page as Page);

    expect(productsLink).toEqual(['link1', 'link2']);
    expect(page.evaluate).toHaveBeenCalledWith(expect.any(Function));
  });
});
