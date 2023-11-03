const vendorCodes = ['LCT', 'PRL', 'CK'] as const;

type ExpectedVendorsCode = (typeof vendorCodes)[number];
interface Vendor {
  code: ExpectedVendorsCode;
  name: string;
}

type Vendors = Record<ExpectedVendorsCode, Vendor>;

export { Vendors, Vendor, ExpectedVendorsCode };
