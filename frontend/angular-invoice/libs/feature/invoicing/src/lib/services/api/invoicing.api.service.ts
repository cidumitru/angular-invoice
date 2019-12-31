import {IInvoicingApiService} from '@angular-invoice/feature/invoicing/lib/services/api/invoicing.api.service.interface';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {
  IInvoicesListRequest,
  IInvoicesListResponse
} from '@angular-invoice/feature/invoicing/lib/services/api/request-response/invoices-list.request-response';

@Injectable({
  providedIn: 'root'
})
export class InvoicingApiService implements IInvoicingApiService {
  getInvoices(request: IInvoicesListRequest): Observable<IInvoicesListResponse> {
    return throwError('Not Implemented');
  }
}
