import {Action, createSelector, Selector, State, StateContext, Store} from '@ngxs/store';
import {IInvoicesState, InvoicesMap, InvoicesStateModel} from './models/invoices.state.model';
import {
  AddProductToInvoiceAction,
  CreateInvoiceAction,
  DeleteInvoiceAction,
  LoadInvoicesAction,
  SetActiveInvoiceAction,
  UpdateInvoiceProductAction
} from './actions/invoices.actions';
import {LoadProductsAction} from './actions/product.actions';
import {IInvoiceDto} from '../services/interfaces/invoice-dto.interface';
import {DraftInvoiceStateModel, IInvoiceItemState, InvoiceItemStateModel, InvoiceProducts} from '../shared/interfaces/invoice.interface';
import * as _ from 'lodash';
import {IProductDto} from '@core/services/interfaces/product-dto.interface';

@State<IInvoicesState>({
  name: 'invoices',
  defaults: InvoicesState.default
})
export class InvoicesState {
  static default = new InvoicesStateModel();

  constructor(private store: Store) {
  }

  @Selector()
  static Invoices(state: IInvoicesState): InvoicesMap {
    return state.items;
  }

  @Selector()
  static getActiveInvoiceId(state: IInvoicesState): number {
    return state.activeInvoiceId;
  }

  @Selector([InvoicesState.getActiveInvoiceId])
  static getActiveInvoice(state: IInvoicesState, activeInvoiceId: number): IInvoiceItemState | undefined {
    if (!activeInvoiceId) {
      return;
    }
    return state.items[activeInvoiceId];
  }

  static getInvoiceById(invoiceId: number): (...args: any[]) => InvoiceItemStateModel {
    return createSelector([InvoicesState], (state: IInvoicesState) => state.items[invoiceId]);
  }

  @Action(LoadInvoicesAction)
  loadInvoices({patchState}: StateContext<IInvoicesState>, {invoices}: LoadInvoicesAction): void {
    const products: any[] = invoices.reduce((accum: any[], invoice: IInvoiceDto) => {
      return accum.concat(invoice.products);
    }, []);

    this.store.dispatch(new LoadProductsAction(products));

    const mappedInvoices: InvoiceItemStateModel[] = invoices.map((invoice: IInvoiceDto) =>
      new InvoiceItemStateModel({
          id: invoice.id,
          info: invoice.info,
          productsSpecsById: invoice.products.reduce((productsSpecs: InvoiceProducts, product: IProductDto) => {
            productsSpecs[product.id] = {quantity: product.quantity};
            return productsSpecs;
          }, {})
        }
      ));

    this.store.dispatch(new SetActiveInvoiceAction(mappedInvoices[0].id));

    const invoicesMap: InvoicesMap = _.keyBy(mappedInvoices, 'id');

    patchState({
      items: invoicesMap
    });
  }

  @Action(CreateInvoiceAction)
  createInvoice({getState, patchState}: StateContext<IInvoicesState>, action: CreateInvoiceAction): void {
    const state: InvoicesStateModel = getState();
    const newInvoiceId: number = (_.max(_.values(state.items).map((invoice: InvoiceItemStateModel) => invoice.id)) || -1) + 1;

    patchState({
      items: {...state.items, [newInvoiceId]: new DraftInvoiceStateModel(newInvoiceId)}
    });

    this.store.dispatch(new SetActiveInvoiceAction(newInvoiceId));
  }

  @Action(SetActiveInvoiceAction)
  setActiveInvoice({patchState}: StateContext<IInvoicesState>, {invoiceId}: SetActiveInvoiceAction): void {
    patchState({
      activeInvoiceId: invoiceId
    });
  }

  @Action(AddProductToInvoiceAction)
  addProductToInvoice({getState, patchState}: StateContext<IInvoicesState>, {invoiceId, productId}: AddProductToInvoiceAction): void {
    const state = getState();
    patchState({
      items: {
        ...state.items,
        [invoiceId]: {
          ...state.items[invoiceId],
          productsSpecsById: {
            ...state.items[invoiceId].productsSpecsById,
            [productId]: {quantity: 1}
          }
        }
      }
    });
  }

  @Action(DeleteInvoiceAction)
  deleteInvoice({getState, patchState}: StateContext<IInvoicesState>, {id}: DeleteInvoiceAction): void {
    const state: InvoicesStateModel = getState();
    const {[id]: deleted, ...remaining} = state.items;
    patchState({
      items: remaining
    });
  }

  @Action(UpdateInvoiceProductAction)
  updatedInvoiceProduct({getState, patchState}: StateContext<IInvoicesState>,
                        {invoiceId, productId, changes}: UpdateInvoiceProductAction): void {

    const copyOfState: InvoicesStateModel = {...getState()};

    patchState({
      items: {
        ...copyOfState.items,
        [invoiceId]: {
          ...copyOfState.items[invoiceId],
          productsSpecsById: {
            ...copyOfState.items[invoiceId].productsSpecsById,
            [productId]: {
              ...copyOfState.items[invoiceId].productsSpecsById[productId],
              ...changes
            }
          }
        }
      }
    });
  }
}
