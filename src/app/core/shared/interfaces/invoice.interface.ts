export interface IInvoiceItemState {
  id: number;
  info: IInvoiceInfo;
  productsSpecsById: InvoiceProducts;
}

export class InvoiceItemStateModel implements IInvoiceItemState {
  id: number;
  info: IInvoiceInfo;
  productsSpecsById: InvoiceProducts;

  constructor(invoice: Partial<IInvoiceItemState> = {}) {
    Object.assign(this, invoice);
  }
}

export interface IInvoiceInfo {
  number: number;
  series: string;
  client: string;
}

export interface IProductSpecs {
  quantity: number;
}

export interface InvoiceProducts {
  [id: number]: IProductSpecs;
}
