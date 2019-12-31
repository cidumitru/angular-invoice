import {IProductDto} from './product-dto.interface';
import {InvoiceStatusEnum} from '@angular-invoice/shared/lib/enums/invoice-status.enum';

export interface IInvoiceDto {
  id: number;
  info: IInvoiceInfoDto;
  products: IProductDto[];
}

export interface IInvoiceInfoDto {
  number: number;
  series: string;
  client: string;
  status: InvoiceStatusEnum;
}

