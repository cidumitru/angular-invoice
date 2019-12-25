import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {IProductsMap, IProductsState, ProductsStateModel} from './models/products.state.model';
import {DeleteProductAction, LoadProductsAction, UpdateProductAction} from './actions/product.actions';
import {IProduct} from '@angular-invoice/shared/lib/interfaces/product.interface';
import {IProductDto} from '@angular-invoice/feature/invoices/lib/core/services/interfaces/product-dto.interface';

@State<IProductsState>({
  name: 'products',
  defaults: ProductsState.default
})
export class ProductsState {
  static default: ProductsStateModel = new ProductsStateModel();

  @Selector()
  static products(state: IProductsState): unknown[] {
    return Object.keys(state.items).map((key: string) => state.items[parseInt(key, 10)]);
  }

  @Selector()
  static getProducts(state: IProductsState): IProductsMap {
    return state.items;
  }


  static getProductsWithIds(productIds: number[]): (...args: any[]) => IProduct[] {
    return createSelector([ProductsState], (state: IProductsState) => {
      return productIds.map((productId: number) => state.items[productId]);
    });
  }

  @Action(LoadProductsAction)
  loadProducts({getState, patchState}: StateContext<IProductsState>, {items}: LoadProductsAction): void {
    patchState({
      items: items.reduce((obj: IProductsMap, product: IProductDto) => {
        obj[product.id] = product;
        return obj;
      }, {})
    });
  }

  @Action(DeleteProductAction)
  deleteProduct({getState, patchState}: StateContext<IProductsState>, {id}: DeleteProductAction): void {
    const state: IProductsState = getState();
    delete state.items[id];
    patchState({
      items: {...state.items}
    });
  }

  @Action(UpdateProductAction)
  updateProduct({getState, patchState}: StateContext<IProductsState>, {id, changes}: UpdateProductAction): void {
    const state: IProductsState = getState();
    patchState({
      items: {...state.items, [id]: {...state.items[id], ...changes}}
    });
  }

}
