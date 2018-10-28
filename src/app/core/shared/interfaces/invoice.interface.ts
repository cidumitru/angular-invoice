import {IProduct} from './product.interface';

export interface IInvoice {
  id: number;
  info: IInvoiceInfo;
  products: IProduct[];
}

export interface IInvoiceInfo {
  number: number;
  series: string;
  client: string;
}
