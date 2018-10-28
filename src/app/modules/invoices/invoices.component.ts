import {Component, OnInit} from '@angular/core';
import {InvoicesService} from '../../core/services/invoices.service';
import {Select, Store} from '@ngxs/store';
import {InvoicesStateModel} from '../../core/store/models/invoices.state.model';
import {InvoicesState} from '../../core/store/invoices.state';
import {Observable} from 'rxjs';
import {DeleteInvoiceAction} from '../../core/store/actions/invoices.actions';
import {IInvoice} from '../../core/shared/interfaces/invoice.interface';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  selectedInvoice: IInvoice;
  @Select(InvoicesState) state$: Observable<InvoicesStateModel>;
  constructor(private api: InvoicesService, private store: Store) { }

  ngOnInit() {
    this.api.loadInvoices().subscribe();
  }

  deleteInvoice(invoiceId: number): void {
    this.store.dispatch(new DeleteInvoiceAction(invoiceId));
  }

}
