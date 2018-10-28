export interface IInvoice {
  id: number;
  info: IInvoiceInfo;
  productsSpecsById: InvoiceProducts;
}

export class InvoiceStateModel implements IInvoice {
  id: number;
  info: IInvoiceInfo;
  productsSpecsById: InvoiceProducts;

  constructor(invoice: Partial<IInvoice> = {}) {
    Object.assign(this, invoice);
  }
}

export interface IInvoiceInfo {
  number: number;
  series: string;
  client: string;
}

export interface ProductSpecs {
  quantity: number;
}

export interface InvoiceProducts {
  [id: number]: ProductSpecs;
}
