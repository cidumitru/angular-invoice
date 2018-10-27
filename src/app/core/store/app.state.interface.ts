import {InvoicesState} from './invoices.state';
import {ProductsState} from './products.state';

export interface IAppState {
  invoices: InvoicesState;
  products: ProductsState;
}
