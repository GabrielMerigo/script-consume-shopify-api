import { SHOPIFY_INVENTORY_MANAGEMENT } from '@constants';
import { MockVariant } from '@mocks/classes';
import { createSoldOutVariant } from '@utils';

describe('createSoldOutVariant', () => {
  it('should create a sold out variant with price and sku', () => {
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
