import {
  IInvoicesListRequest,
  IInvoicesListResponse
} from '@angular-invoice/feature/invoicing/lib/services/api/request-response/invoices-list.request-response';
import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface IInvoicingApiService {
  getInvoices(request: IInvoicesListRequest): Observable<IInvoicesListResponse>;
}

export const INVOICING_API_SERVICE = new InjectionToken<IInvoicingApiService>('INVOICING_API_SERVICE');
