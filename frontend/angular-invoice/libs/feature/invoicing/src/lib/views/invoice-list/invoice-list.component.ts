import {Component, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {InvoicingService} from '@angular-invoice/feature/invoicing/lib/services/invoicing.service';
import {Select, Store} from '@ngxs/store';
import {
  LoadInvoicesAction,
  LoadInvoicesFailedAction,
  LoadInvoicesSuccessfulAction
} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/actions/load-invoices.actions';
import {catchError, concatMap, switchMap} from 'rxjs/operators';
import {InvoicesListState} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state';
import {InvoiceListItemState} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state.model';

@Injectable({providedIn: 'root'})
export class InvoicesListResolver implements Resolve<Observable<unknown>> {
  constructor(private invoicingService: InvoicingService, private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<unknown>> | Observable<unknown> {
    return this.store.dispatch(new LoadInvoicesAction()).pipe(
      concatMap(() => this.invoicingService.loadInvoices().pipe(
        catchError(e => {
          this.store.dispatch(new LoadInvoicesFailedAction());
          return throwError(e);
        }),
        switchMap(invoices => this.store.dispatch(new LoadInvoicesSuccessfulAction(invoices)))
        ),
      )
    );
  }
}

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  @Select(InvoicesListState.invoicesList) public invoices$!: Observable<InvoiceListItemState[]>;
  displayedColumns: string[] = ['title', 'clientName', 'invoiceDate', 'dueToDate', 'amount', 'status'];
}
