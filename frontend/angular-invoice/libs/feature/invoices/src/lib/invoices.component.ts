import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {IInvoiceItemState, InvoiceItemStateModel} from '@angular-invoice/shared/lib/interfaces/invoice.interface';
import {InvoicesMap} from '@angular-invoice/feature/invoices/lib/core/store/models/invoices.state.model';
import {
  CreateInvoiceAction,
  DeleteInvoiceAction,
  SetActiveInvoiceAction
} from '@angular-invoice/feature/invoices/lib/core/store/actions/invoices.actions';
import {InvoicesService} from '@angular-invoice/feature/invoices/lib/core/services/invoices.service';
import {InvoicesState} from '@angular-invoice/feature/invoices/lib/core/store/invoices.state';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  @Select(InvoicesState.getActiveInvoice) activeInvoice$!: Observable<IInvoiceItemState>;

  invoices$: Observable<InvoiceItemStateModel[]>;

  constructor(private api: InvoicesService, private store: Store) {
    this.invoices$ = this.store.select(InvoicesState.Invoices).pipe(
      map((invoices: InvoicesMap) => _.values(invoices))
    );
  }

  ngOnInit(): void {
    if (!_.values(this.snapshot().invoices.items).length) {
      this.api.loadInvoices().subscribe();
    }
  }

  deleteInvoice(invoiceId: number): void {
    if (confirm('Delete?')) {
      this.store.dispatch(new DeleteInvoiceAction(invoiceId));
    }
  }

  selectInvoice(invoiceId: number): void {
    this.store.dispatch(new SetActiveInvoiceAction(invoiceId));
  }

  createNewInvoice(): void {
    this.store.dispatch(new CreateInvoiceAction());
  }

  private snapshot(): any {
    return this.store.snapshot();
  }

}
