import {Component, OnInit} from '@angular/core';
import {InvoicesService} from '../../core/services/invoices.service';
import {Select, Store} from '@ngxs/store';
import {InvoicesState} from '../../core/store/invoices.state';
import {Observable} from 'rxjs';
import {CreateInvoiceAction, DeleteInvoiceAction, SetActiveInvoiceAction} from '../../core/store/actions/invoices.actions';
import {IInvoiceItemState, InvoiceItemStateModel} from '../../core/shared/interfaces/invoice.interface';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {IAppState} from '../../core/store/app.state.interface';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  @Select(InvoicesState.getActiveInvoice) activeInvoice$: Observable<IInvoiceItemState>;

  invoices$: Observable<InvoiceItemStateModel[]>;

  constructor(private api: InvoicesService, private store: Store) {
    this.invoices$ = this.store.select(InvoicesState.Invoices).pipe(
      map(invoices => _.values(invoices))
    );
  }

  ngOnInit() {
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

  private snapshot(): IAppState {
    return this.store.snapshot();
  }

}
