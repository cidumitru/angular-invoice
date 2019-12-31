import {InvoiceStatues} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state.model';

export interface IInvoiceListItemDto {
  id: number,
  title: string;
  clientName: string;
  invoiceDate: Date;
  dueToDate: Date;
  amount: number;
  currency: string;
  status: InvoiceStatues;
}
