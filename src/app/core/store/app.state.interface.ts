import {IInvoicesStateModel} from './models/invoices.state.model';
import {IProductsStateModel} from './models/products.state.model';

export interface IAppState {
  invoices: IInvoicesStateModel;
  products: IProductsStateModel;
}
