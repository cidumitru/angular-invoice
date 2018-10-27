import {IInvoiceDto} from '../../services/interfaces/invoice-dto.interface';

export interface IInvoicesState {
  items: IInvoiceDto[];
}

export class InvoicesStateModel {
  public items: IInvoiceDto[];
  constructor(state: Partial<IInvoicesState> = {}) {
    this.items = state.items || [];
  }
}
