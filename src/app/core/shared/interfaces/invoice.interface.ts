import {InvoiceStatusEnum} from '../enums/invoice-status.enum';

export interface IInvoiceItemState {
  id: number;
  info: IInvoiceInfo;
  productsSpecsById: InvoiceProducts;
}

export class InvoiceItemStateModel implements IInvoiceItemState {
  id: number;
  info: IInvoiceInfo;
  productsSpecsById: InvoiceProducts;

  constructor(invoice: IInvoiceItemState) {
    this.id = invoice.id;
    this.info = invoice.info;
    this.productsSpecsById = invoice.productsSpecsById;
  }
}

export interface IInvoiceInfo {
  number: number;
  series: string;
  client: string;
  status: InvoiceStatusEnum;
}

export interface IProductSpecs {
  quantity: number;
  price?: number;
}

export interface InvoiceProducts {
  [id: number]: IProductSpecs;
}

export class DraftInvoiceStateModel implements IInvoiceItemState {
  info: IInvoiceInfo;
  productsSpecsById: InvoiceProducts;

  constructor(public id: number) {
    // TODO: Add series from state
    this.info = {client: 'n/a', number: id, series: 'SK', status: InvoiceStatusEnum.draft};
    this.productsSpecsById = {};
  }
}
