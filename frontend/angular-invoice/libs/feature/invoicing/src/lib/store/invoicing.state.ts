import {State} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {IInvoicesListState} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state.model';
import {InvoicesListState} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state';

@Injectable()
@State<IInvoicingState>({
  name: 'invoicing',
  children: [InvoicesListState]
})
export class InvoicingState {
}


export interface IInvoicingState {
  invoicesList: IInvoicesListState;
  invoice: any;
}
