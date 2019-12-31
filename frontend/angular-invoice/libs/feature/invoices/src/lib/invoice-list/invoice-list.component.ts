import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {InvoicesState} from '@angular-invoice/feature/invoices/lib/core/store/invoices.state';
import {Observable} from 'rxjs';
import {InvoiceItemStateModel} from '@angular-invoice/shared/lib/interfaces/invoice.interface';
import {InvoicesService} from '@angular-invoice/feature/invoices/lib/core/services/invoices.service';
import {map} from 'rxjs/operators';
import {InvoicesMap} from '@angular-invoice/feature/invoices/lib/core/store/models/invoices.state.model';
import * as _ from 'lodash';
import {
  CreateInvoiceAction,
  DeleteInvoiceAction,
  SetActiveInvoiceAction
} from '@angular-invoice/feature/invoices/lib/core/store/actions/invoices.actions';
import {Router} from '@angular/router';
import {KnownInvoicesModuleRoutePaths} from '@angular-invoice/feature/invoices/lib/known-invoices-module-route.paths';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {


  invoices$: Observable<InvoiceItemStateModel[]>;

  constructor(private api: InvoicesService, private store: Store, private router: Router) {
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
    this.router.navigate([KnownInvoicesModuleRoutePaths.InvoiceView, invoiceId]);
  }

  createNewInvoice(): void {
    this.store.dispatch(new CreateInvoiceAction());
  }

  private snapshot(): any {
    return this.store.snapshot();
  }

}
