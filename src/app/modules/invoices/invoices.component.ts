import {Component, OnInit} from '@angular/core';
import {InvoicesService} from '../../core/services/invoices.service';
import {Store} from '@ngxs/store';
import {InvoicesState} from '../../core/store/invoices.state';
import {Observable} from 'rxjs';
import {DeleteInvoiceAction} from '../../core/store/actions/invoices.actions';
import {InvoiceItemStateModel} from '../../core/shared/interfaces/invoice.interface';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  selectedInvoice$: Observable<InvoiceItemStateModel>;
  selectedInvoiceId: number;
  invoices$: Observable<InvoiceItemStateModel[]>;

  constructor(private api: InvoicesService, private store: Store) {
    this.invoices$ = this.store.select(InvoicesState.Invoices).pipe(
      map(invoices => _.values(invoices))
    );
  }

  ngOnInit() {
    this.api.loadInvoices().subscribe();
  }

  deleteInvoice(invoiceId: number): void {
    if (confirm('Delete?')) {
      this.store.dispatch(new DeleteInvoiceAction(invoiceId));
    }
  }

  selectInvoice(invoiceId: number): void {
    this.selectedInvoiceId = invoiceId;
    this.selectedInvoice$ = this.store.select(InvoicesState.getInvoiceById(invoiceId));
  }

}
