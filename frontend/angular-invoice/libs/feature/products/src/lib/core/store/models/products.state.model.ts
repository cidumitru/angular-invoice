import {IProductSpecs} from '@angular-invoice/shared/lib/interfaces/invoice.interface';
import {IProduct} from '@angular-invoice/shared/lib/interfaces/product.interface';


export interface IProductsState {
  items: IProductsMap;
  productsSpecsByInvoiceId: Map<number, IProductSpecs[]>;
}

export class ProductsStateModel implements IProductsState {
  items: IProductsMap;
  productsSpecsByInvoiceId: Map<number, IProductSpecs[]>;

  constructor(state: Partial<IProductsState> = {}) {
    this.items = state.items || {};
    this.productsSpecsByInvoiceId = state.productsSpecsByInvoiceId
      || <Map<number, IProductSpecs[]>>{};
  }
}

export interface IProductsMap {
  [id: number]: IProduct;
}
