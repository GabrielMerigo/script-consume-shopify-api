interface Collection {
  id: number;
  urlHandle: string;
  title: string;
  sizeType: SizeTypes;
  productPrice: string;
}

const collections = [
  'blusoes',
  'calcas-jeans',
  'calcas-sarja',
  'camisas-sociais',
  'camisetas',
  'polos'
] as const;

type ExpectedCollections = (typeof collections)[number];
type Collections = Record<ExpectedCollections, Collection>;
enum SizeTypes {
  SHIRT_LETTER = 'SHIRT_LETTER',
  PANTS_NUMBER = 'PANTS_NUMBER'
}

export { Collection, Collections, SizeTypes, ExpectedCollections };
