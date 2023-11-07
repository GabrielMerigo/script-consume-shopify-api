import { VENDOR_CODES } from '@constants';

type ExpectedVendorCodes = (typeof VENDOR_CODES)[number];
interface Vendor {
  code: ExpectedVendorCodes;
  name: string;
}

type Vendors = Record<ExpectedVendorCodes, Vendor>;

export { Vendors, Vendor, ExpectedVendorCodes };
