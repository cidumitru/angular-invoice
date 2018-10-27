import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IInvoiceDto} from './interfaces/invoice-dto.interface';
import {getMockInvoices} from './mock.data';
import {Store} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {LoadInvoicesAction} from '../store/actions/invoices.actions';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private store: Store) { }

  loadInvoices(): Observable<IInvoiceDto[]> {
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
