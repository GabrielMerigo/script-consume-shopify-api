import { ProductInfoFromHTML } from '@types';

export class MockProductInfoFromHTML implements ProductInfoFromHTML {
  item_id: string = 'ITEM_ID';
  item_name: string = 'ITEM_NAME';
  price: string = '12.00';
  item_category: string = 'ITEM_CATEGORY';
  item_category2: string = 'ITEM_CATEGORY_2';
  item_category3: string = 'ITEM_CATEGORY_3';
  item_category4: string = 'ITEM_CATEGORY_2';
  item_category5: string = 'ITEM_CATEGORY_3';

  constructor(
    item_id?: string,
    item_name?: string,
    price?: string,
    item_category?: string,
    item_category2?: string,
    item_category3?: string,
    item_category4?: string,
    item_category5?: string
  ) {
    this.item_id = item_id || this.item_id;
    this.item_name = item_name || this.item_name;
    this.price = price || this.price;
    this.item_category = item_category || this.item_category;
    this.item_category2 = item_category2 || this.item_category2;
    this.item_category3 = item_category3 || this.item_category3;
    this.item_category4 = item_category4 || this.item_category4;
    this.item_category5 = item_category5 || this.item_category5;
  }
}
