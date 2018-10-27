import {IProductDto} from './product-dto.interface';

export interface IInvoiceDto {
  id: number;
  info: IInvoiceInfo;
  products: IProductDto[];
}

export interface IInvoiceInfo {
  number: number;
  series: string;
  client: string;
}
