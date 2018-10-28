import {IInvoiceDto} from '../../services/interfaces/invoice-dto.interface';
import {IInvoice, IInvoiceInfo} from '../interfaces/invoice.interface';
import {IProduct} from '../interfaces/product.interface';

export class InvoiceModel implements IInvoiceDto {
  id: number;
  info: IInvoiceInfo;
  products: IProduct[];

  constructor(invoice: Partial<IInvoice> = {}) {
    Object.assign(this, invoice);
  }
}
