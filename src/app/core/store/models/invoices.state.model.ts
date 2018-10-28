import {IInvoice} from '../../shared/interfaces/invoice.interface';

export interface IInvoicesStateModel {
  items: IInvoice[];
}

export class InvoicesStateModel {
  public items: IInvoice[];

  constructor(state: Partial<IInvoicesStateModel> = {}) {
    this.items = state.items || [];
  }
}

export interface InvoicesMap {
  [id: number]: IInvoice;
}
