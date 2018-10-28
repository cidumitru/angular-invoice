import {Action, createSelector, State, StateContext} from '@ngxs/store';
import {IProductsStateModel, ProductsStateModel} from './models/products.state.model';
import {LoadProductsAction} from './actions/product.actions';

@State<IProductsStateModel>({
  name: 'products',
  defaults: ProductsState.default
})
export class ProductsState {
  static default = new ProductsStateModel();

  static getProductsById(productsIds: number[]) {
    return createSelector([ProductsState], (state: IProductsStateModel) => {
      const selected = [];
      productsIds.forEach((id) => selected.push(state.items[id]));
      return selected;
    });
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
