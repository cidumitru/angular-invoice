import {IBaseInvoicingRequest, IBaseInvoicingResponse} from './base.request-response';
import {IInvoiceListItemDto} from '@angular-invoice/feature/invoicing/lib/services/api/dtos/invoice-list-item.dto';

export interface IInvoicesListRequest extends IBaseInvoicingRequest {
}

export interface IInvoicesListResponse extends IBaseInvoicingResponse {
  items: IInvoiceListItemDto[];
  totalItems: number;
}
