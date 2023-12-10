import { createProducts } from '@scripts/createProducts';
import { ExpectedCollections } from '@types';
import { addProductsBySelectedCollections } from '@utils';

const mockSelectedCollections: ExpectedCollections[] = [
  'polos',
  'bermuda-jeans'
];
const wrongCollection = 'wrong-options';

jest.mock('@scripts/createProducts', () => ({
  createProducts: jest.fn()
}));
jest.mock('@services/pino', () => ({
  logger: {
    error: jest.fn(),
    info: jest.fn()
  }
}));

describe('addProductsBySelectedCollections', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create product based on the selected collections', async () => {
    const mockSelectedCollections: ExpectedCollections[] = [
      'polos',
      'bermuda-jeans'
    ];

    await addProductsBySelectedCollections(mockSelectedCollections);

    expect(createProducts).toHaveBeenCalledTimes(2);
    mockSelectedCollections.forEach((collection) => {
      expect(createProducts).toHaveBeenCalledWith(collection);
    });
  });

  it('should NOT create a product with a wrong collection', async () => {
    const mockSelectedCollectionsWithWrongOption: string[] = [
      ...mockSelectedCollections,
      wrongCollection
    ];

    await addProductsBySelectedCollections(
      mockSelectedCollectionsWithWrongOption
    );

    expect(createProducts).toHaveBeenCalledTimes(2);
    expect(createProducts).not.toHaveBeenCalledWith(wrongCollection);
    mockSelectedCollections.forEach((collection) => {
      expect(createProducts).toHaveBeenCalledWith(collection);
    });
  });
});
