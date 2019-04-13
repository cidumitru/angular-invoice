import {InvoiceStateModel} from '../../shared/interfaces/invoice.interface';

export interface IInvoicesStateModel {
  items: InvoicesMap;
  invoiceProductsById: Map<number, number[]>;
}

export class InvoicesStateModel implements IInvoicesStateModel {
  items: InvoicesMap;
  invoiceProductsById: Map<number, number[]>;

  constructor(state: Partial<IInvoicesStateModel> = {}) {
    this.items = state.items || {};
    this.invoiceProductsById = state.invoiceProductsById || new Map();
  }
}

export interface InvoicesMap {
  [id: number]: InvoiceStateModel;
}
