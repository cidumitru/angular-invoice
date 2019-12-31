import {IInvoicingApiService} from '@angular-invoice/feature/invoicing/lib/services/api/invoicing.api.service.interface';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {
  IInvoicesListRequest,
  IInvoicesListResponse
} from '@angular-invoice/feature/invoicing/lib/services/api/request-response/invoices-list.request-response';
import * as _ from 'lodash';
import {IInvoiceListItemDto} from '@angular-invoice/feature/invoicing/lib/services/api/dtos/invoice-list-item.dto';
import {InvoiceStatues} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state.model';
import * as faker from 'faker';


@Injectable({
  providedIn: 'root'
})
export class InvoicingMockApiService implements IInvoicingApiService {
  getInvoices(request: IInvoicesListRequest): Observable<IInvoicesListResponse> {
    const mockInvoices: IInvoiceListItemDto[] = _.range(20).map(i => ({
      id: i,
      title: 'Invoice ' + i,
      clientName: faker.company.companyName(),
      invoiceDate: faker.date.past(),
      dueToDate: faker.date.future(),
      amount: Math.random() * 10000,
      currency: 'USD',
      status: <InvoiceStatues>_.sample(InvoiceStatues)
    }));

    return of({
      items: mockInvoices,
      totalItems: mockInvoices.length
    });
  }
}
