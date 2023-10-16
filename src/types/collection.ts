interface Collection {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  published_scope: string;
  admin_graphql_api_id: string;
}

const collections = [
  'blusoes',
  'calcas-jeans',
  'calcas-sarja',
  'camisas-sociais',
  'camisetas',
  'ofertas',
  'polos'
] as const;

type ExpectedCollections = (typeof collections)[number];
type Collections = Record<ExpectedCollections, Collection>;

export { Collection, Collections };
