import {Inject, Injectable} from '@angular/core';
import {
  IInvoicingApiService,
  INVOICING_API_SERVICE
} from '@angular-invoice/feature/invoicing/lib/services/api/invoicing.api.service.interface';
import {Observable} from 'rxjs';
import {IInvoiceListItemDto} from '@angular-invoice/feature/invoicing/lib/services/api/dtos/invoice-list-item.dto';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoicingService {
  constructor(@Inject(INVOICING_API_SERVICE) private api: IInvoicingApiService) {
  }

  public loadInvoices(): Observable<IInvoiceListItemDto[]> {
    return this.api.getInvoices({}).pipe(map(r => r.items));
  }
}
