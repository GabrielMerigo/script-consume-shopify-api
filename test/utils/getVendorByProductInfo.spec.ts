import { MockProductInfoFromHTML } from '@mocks/classes';
import { getVendorByProductInfo } from '@utils';
import { vendors } from '@data';
import { VENDOR_CODES } from '@constants';

describe('getVendorByProductInfo', () => {
  VENDOR_CODES.forEach((vendorCode) => {
    it(`should return ${vendors[vendorCode].name} as vendor name when there is ${vendors[vendorCode].code} on the item_category`, () => {
      const productInfoGotFromHTML = new MockProductInfoFromHTML(
        'ITEM_ID',
        'ITEM_NAME',
        'price',
        vendorCode
      );

      const vendor = getVendorByProductInfo(productInfoGotFromHTML);

      expect(vendor).toStrictEqual(vendors[vendorCode].name);
    });
  });

  it("should return vendor Lacoste as vendor name when there is 'lacoste' on the item_category", () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'price',
      'item_category',
      'lacoste'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Lacoste');
  });

  it("should return vendor Lacoste as vendor name when there is 'lacoste' on the item_category2", () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'price',
      'item_category',
      'item_category2',
      'lacoste'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Lacoste');
  });

  it("should return vendor Lacoste as vendor name when there is 'lacoste' on the item_category3", () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'PRICE',
      'ITEM_CATEGORY',
      'ITEM_CATEGORY2',
      'lacoste'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Lacoste');
  });

  it("should return vendor Lacoste as vendor name when there is 'lacoste' on the item_category4", () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'PRICE',
      'ITEM_CATEGORY',
      'ITEM_CATEGORY2',
      'ITEM_CATEGORY3',
      'lacoste'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Lacoste');
  });

  it("should return vendor Lacoste as vendor name when there is 'lacoste' on the item_category5", () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'PRICE',
      'ITEM_CATEGORY',
      'ITEM_CATEGORY2',
      'ITEM_CATEGORY3',
      'ITEM_CATEGORY4',
      'lacoste'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Lacoste');
  });

  it('should return the value from item_category when there are no matches in the item_category props', () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'PRICE',
      'ITEM_CATEGORY',
      'ITEM_CATEGORY2',
      'ITEM_CATEGORY3',
      'ITEM_CATEGORY4',
      'ITEM_CATEGORY5'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual(productInfoGotFromHTML.item_category);
  });

  it('should return the vendor Lacoste as vender when lacoste is written in Caps Lock', () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'PRICE',
      'ITEM_CATEGORY',
      'ITEM_CATEGORY2',
      'LACOSTE',
      'ITEM_CATEGORY4',
      'ITEM_CATEGORY5'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Lacoste');
  });

  it('should return Hugo Boss as vendor because the condition is before than Lacoste', () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'PRICE',
      'hugo boss',
      'ITEM_CATEGORY2',
      'LACOSTE',
      'ITEM_CATEGORY4',
      'ITEM_CATEGORY5'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Hugo Boss');
  });

  it('should return Lacoste when is found only the code', () => {
    const productInfoGotFromHTML = new MockProductInfoFromHTML(
      'ITEM_ID',
      'ITEM_NAME',
      'PRICE',
      'ITEM_CATEGORY',
      'ITEM_CATEGORY2',
      'lct',
      'ITEM_CATEGORY4',
      'ITEM_CATEGORY5'
    );

    const vendor = getVendorByProductInfo(productInfoGotFromHTML);

    expect(vendor).toStrictEqual('Lacoste');
  });
});
