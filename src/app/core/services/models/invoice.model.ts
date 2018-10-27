import {IInvoiceDto, IInvoiceInfo} from '../interfaces/invoice-dto.interface';
import {IProductDto} from '../interfaces/product-dto.interface';

export class InvoiceModel implements IInvoiceDto {
  id: number;
  info: IInvoiceInfo;
  products: IProductDto[];
  constructor(invoice: Partial<IInvoiceDto> = {}) {
    Object.assign(this, invoice);
  }
}
