export class InvoicesListStateModel {
  items: InvoiceListItemState[] = [];
  _isLoading: boolean = false;
  _hasLoaded: boolean = false;
}

export interface IInvoicesListState extends InvoicesListStateModel {
}


export class InvoiceListItemState {
  id!: number;
  title: string = 'n/a';
  clientName: string = 'n/a';
  invoiceDate!: Date;
  dueToDate!: Date;
  amount!: number;
  currency!: string;
  status: InvoiceStatues = InvoiceStatues.Unknown;

  constructor(invoice: InvoiceListItemState) {
    Object.assign(this, invoice);
  }
}


export enum InvoiceStatues {
  Draft = 'draft',
  Sent = 'sent',
  Paid = 'paid',
  Canceled = 'canceled',
  Unknown = 'unknown'
}
