import {IProductDto} from '../../services/interfaces/product-dto.interface';

export interface IProductsStateModel {
  items: IProductDto[];
}

export class ProductsStateModel {
  items: IProductDto[];
  constructor(state: Partial<IProductsStateModel> = {}) {
    this.items = state.items || [];
  }
}
