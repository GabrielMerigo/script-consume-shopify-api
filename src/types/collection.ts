import { COLLECTIONS } from '@constants';

interface Collection {
  id: number;
  urlHandle: string;
  title: string;
  sizeType: SizeTypes;
  productPrice: string;
  productBodyHtml: string;
}

type ExpectedCollections = (typeof COLLECTIONS)[number];
type Collections = Record<ExpectedCollections, Collection>;
enum SizeTypes {
  SHIRT_LETTER = 'SHIRT_LETTER',
  PANTS_NUMBER = 'PANTS_NUMBER'
}

export { Collection, Collections, SizeTypes, ExpectedCollections };
