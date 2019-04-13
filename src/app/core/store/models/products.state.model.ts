import {IProduct} from '../../shared/interfaces/product.interface';
import {IProductSpecs} from '../../shared/interfaces/invoice.interface';

export interface IProductsState {
  items: IProductsMap;
  productsSpecsByInvoiceId: Map<number, IProductSpecs[]>;
}

export class ProductsStateModel implements IProductsState {
  items: IProductsMap;
  productsSpecsByInvoiceId: Map<number, IProductSpecs[]>;

  constructor(state: Partial<IProductsState> = {}) {
    this.items = state.items || {};
  }
}

export interface IProductsMap {
  [id: number]: IProduct;
}
