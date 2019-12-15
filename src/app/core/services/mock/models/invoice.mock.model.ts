import {IInvoiceDto} from '../../interfaces/invoice-dto.interface';
import {IInvoiceInfo} from '../../../shared/interfaces/invoice.interface';
import {IProductDto} from '../../interfaces/product-dto.interface';

export class InvoiceMockModel implements IInvoiceDto {
  id: number;
  info: IInvoiceInfo;
  products: IProductDto[];

  constructor(invoice: IInvoiceDto) {
    this.id = invoice.id;
    this.info = invoice.info;
    this.products = invoice.products;
  }
}
