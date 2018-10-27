import {IInvoiceDto} from '../../services/interfaces/invoice-dto.interface';

export interface IInvoicesStateModel {
  items: IInvoiceDto[];
}

export class InvoicesStateModel {
  public items: IInvoiceDto[];

  constructor(state: Partial<IInvoicesStateModel> = {}) {
    this.items = state.items || [];
  }
}
