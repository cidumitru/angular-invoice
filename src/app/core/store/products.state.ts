import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IProductsStateModel, ProductsStateModel} from './models/products.state.model';
import {DeleteProductAction, LoadProductsAction, UpdateProductAction} from './actions/product.actions';

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

  @Action(DeleteProductAction)
  deleteProduct({getState, patchState}: StateContext<ProductsStateModel>, {id}: DeleteProductAction) {
    const state: ProductsStateModel = getState();
    delete state.items[id];
    patchState({
      items: {...state.items}
    });
  }

  @Action(UpdateProductAction)
  updateProduct({getState, patchState}: StateContext<ProductsStateModel>, {id, changes}: UpdateProductAction) {
    const state: ProductsStateModel = getState();
    patchState({
      items: {...state.items, [id]: {...state.items[id], ...changes}}
    });
  }


}
