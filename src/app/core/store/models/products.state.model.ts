import {IProduct} from '../../shared/interfaces/product.interface';

export interface IProductsStateModel {
  items: ProductsMap;
}

export class ProductsStateModel {
  items: ProductsMap;
  constructor(state: Partial<IProductsStateModel> = {}) {
    this.items = state.items || {};
  }
}

export interface ProductsMap {
  [id: number]: IProduct;
}
