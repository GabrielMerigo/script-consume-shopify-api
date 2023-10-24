import { SHOPIFY_INVENTORY_MANAGEMENT } from '../../src/constants';
import { MockVariant } from '../../src/mocks/classes';
import { createSoldOutVariant } from '../../src/utils';

describe('createSoldOutVariant', () => {
  it('Should create a sold out variant with price and sku', () => {
    const mockPrice = '12.00';
    const mockSku = 'SKU_1';
    const soldOutVariant = new MockVariant(
      'Esgotado',
      mockPrice,
      mockSku,
      SHOPIFY_INVENTORY_MANAGEMENT,
      0
    );

    const result = createSoldOutVariant(mockPrice, mockSku);

    expect(result).toStrictEqual({ ...soldOutVariant });
  });
});
