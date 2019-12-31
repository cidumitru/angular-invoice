import {IInvoiceListItemDto} from '../../../services/api/dtos/invoice-list-item.dto';

export class LoadInvoicesAction {
  static readonly type = '[Invoices List] Load Invoices';
}

export class LoadInvoicesSuccessfulAction {
  static readonly type = '[Invoices List] Load Invoices Successful';

  constructor(public invoices: IInvoiceListItemDto[]) {
  }
}

export class LoadInvoicesFailedAction {
  static readonly type = '[Invoices List] Load Invoices Failed';
}
