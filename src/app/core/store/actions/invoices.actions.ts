import {IInvoiceDto} from '../../services/interfaces/invoice-dto.interface';
import {IProductSpecs} from '../../shared/interfaces/invoice.interface';

export class CreateInvoiceAction {
  static readonly type = '[Invoice] Create';
  constructor(public invoice: IInvoiceDto) {}
}

export class LoadInvoicesAction {
  static readonly type = '[Invoices] Load';
  constructor(public invoices: IInvoiceDto[]) {}
}

export class UpdateInvoiceAction {
  static readonly type = '[Invoice] Update';
  constructor(public id: number, public changes: Partial<IInvoiceDto>) {}
}

export class UpdateInvoiceProductAction {
  static readonly type = '[Invoice] Update Products';

  constructor(public invoiceId: number, public productId: number, public changes: IProductSpecs) {
  }
}

export class DeleteInvoiceAction {
  static readonly type = '[Invoice] Delete';
  constructor(public id: number) {}
}

export class SetActiveInvoiceAction {
  static readonly type = '[Invoice] Set Active Invoice';

  constructor(public invoiceId: number) {
  }
}
