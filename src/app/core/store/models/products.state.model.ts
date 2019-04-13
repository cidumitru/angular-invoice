import {IProduct} from '../../shared/interfaces/product.interface';
import {IProductSpecs} from '../../shared/interfaces/invoice.interface';

export interface IProductsStateModel {
  items: IProductsMap;
  productsSpecsByInvoiceId: Map<number, IProductSpecs[]>;
}

export class ProductsStateModel implements IProductsStateModel {
  items: IProductsMap;
  productsSpecsByInvoiceId: Map<number, IProductSpecs[]>;
  constructor(state: Partial<IProductsStateModel> = {}) {
    this.items = state.items || {};
  }
}

export interface IProductsMap {
  [id: number]: IProduct;
}
