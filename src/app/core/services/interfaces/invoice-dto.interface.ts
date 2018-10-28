import {IProductDto} from './product-dto.interface';

export interface IInvoiceDto {
  id: number;
  info: IInvoiceInfoDto;
  products: IProductDto[];
}

export interface IInvoiceInfoDto {
  number: number;
  series: string;
  client: string;
}
