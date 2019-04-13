import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IInvoiceDto} from './interfaces/invoice-dto.interface';
import {getMockInvoices} from './mock/mock.data';
import {Store} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {LoadInvoicesAction} from '../store/actions/invoices.actions';
import {IAppState} from '../store/app.state.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private store: Store) {
  }

  loadInvoices(): Observable<IInvoiceDto[]> {
    const state: IAppState = this.store.snapshot();

    return this.getInvoices().pipe(
      tap((items) => {
        this.store.dispatch(new LoadInvoicesAction(items));
      })
    );
  }


  private getInvoices(): Observable<IInvoiceDto[]> {
    return of(getMockInvoices(10));
  }
}
