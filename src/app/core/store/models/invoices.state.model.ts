import {InvoiceItemStateModel} from '../../shared/interfaces/invoice.interface';

export interface IInvoicesState {
  items: InvoicesMap;
  invoiceProductsById: Map<number, number[]>;
}

export class InvoicesStateModel implements IInvoicesState {
  items: InvoicesMap;
  invoiceProductsById: Map<number, number[]>;

  constructor(state: Partial<IInvoicesState> = {}) {
    this.items = state.items || {};
    this.invoiceProductsById = state.invoiceProductsById || new Map();
  }
}

export interface InvoicesMap {
  [id: number]: InvoiceItemStateModel;
}
