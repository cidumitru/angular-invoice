import {State} from '@ngxs/store';
import {ProductsStateModel} from './models/products.state.model';

@State<ProductsStateModel>({
  name: 'products',
  defaults: ProductsState.default
})
export class ProductsState {
  static default = new ProductsStateModel();
}
