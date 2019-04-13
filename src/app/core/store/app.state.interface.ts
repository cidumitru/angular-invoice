import {IInvoicesState} from './models/invoices.state.model';
import {IProductsState} from './models/products.state.model';

export interface IAppState {
  invoices: IInvoicesState;
  products: IProductsState;
}
