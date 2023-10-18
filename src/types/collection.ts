interface Collection {
  id: number;
  url_handle: string;
  title: string;
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

export { Collection, Collections };
