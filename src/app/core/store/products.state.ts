import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IProductsStateModel, ProductsStateModel} from './models/products.state.model';
import {LoadProductsAction} from './actions/product.actions';

@State<IProductsStateModel>({
  name: 'products',
  defaults: ProductsState.default
})
export class ProductsState {
  static default = new ProductsStateModel();

  @Selector()
  static products(state: IProductsStateModel) {
    return Object.keys(state.items).map((key) => state.items[key]);
  }

  @Action(LoadProductsAction)
  loadProducts({getState, patchState}: StateContext<ProductsStateModel>, {items}: LoadProductsAction) {
    patchState({
      items: items.reduce((obj, product) => {
        obj[product.id] = product;
        return obj;
      }, {})
    });
  }
}
