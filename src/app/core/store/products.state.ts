import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IProductsState, ProductsStateModel} from './models/products.state.model';
import {DeleteProductAction, LoadProductsAction, UpdateProductAction} from './actions/product.actions';

@State<IProductsState>({
  name: 'products',
  defaults: ProductsState.default
})
export class ProductsState {
  static default = new ProductsStateModel();

  @Selector()
  static products(state: IProductsState) {
    return Object.keys(state.items).map((key) => state.items[key]);
  }

  @Action(LoadProductsAction)
  loadProducts({getState, patchState}: StateContext<IProductsState>, {items}: LoadProductsAction) {
    patchState({
      items: items.reduce((obj, product) => {
        obj[product.id] = product;
        return obj;
      }, {})
    });
  }

  @Action(DeleteProductAction)
  deleteProduct({getState, patchState}: StateContext<IProductsState>, {id}: DeleteProductAction) {
    const state: IProductsState = getState();
    delete state.items[id];
    patchState({
      items: {...state.items}
    });
  }

  @Action(UpdateProductAction)
  updateProduct({getState, patchState}: StateContext<IProductsState>, {id, changes}: UpdateProductAction) {
    const state: IProductsState = getState();
    patchState({
      items: {...state.items, [id]: {...state.items[id], ...changes}}
    });
  }


}
