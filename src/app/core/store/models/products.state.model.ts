import {IProduct} from '../../shared/interfaces/product.interface';

export interface IProductsStateModel {
  items: IProduct[];
}

export class ProductsStateModel {
  items: IProduct[];
  constructor(state: Partial<IProductsStateModel> = {}) {
    this.items = state.items || [];
  }
}
