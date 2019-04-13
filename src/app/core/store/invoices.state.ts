import {Action, createSelector, Selector, State, StateContext, Store} from '@ngxs/store';
import {IInvoicesState, InvoicesStateModel} from './models/invoices.state.model';
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
import {DraftInvoiceStateModel, IInvoiceItemState, InvoiceItemStateModel} from '../shared/interfaces/invoice.interface';
import * as _ from 'lodash';

@State<IInvoicesState>({
  name: 'invoices',
  defaults: InvoicesState.default
})
export class InvoicesState {
  static default = new InvoicesStateModel();

  constructor(private store: Store) {
  }

  @Selector()
  static Invoices(state: IInvoicesState) {
    return state.items;
  }

  @Selector()
  static getActiveInvoiceId(state: IInvoicesState): number {
    return state.activeInvoiceId;
  }

  @Selector([InvoicesState.getActiveInvoiceId])
  static getActiveInvoice(state: IInvoicesState, activeInvoiceId: number): IInvoiceItemState {
    if (!activeInvoiceId) {
      return;
    }
    return state.items[activeInvoiceId];
  }

  static getInvoiceById(invoiceId: number): (...args: any[]) => InvoiceItemStateModel {
    return createSelector([InvoicesState], (state: IInvoicesState) => state.items[invoiceId]);
  }

  @Action(LoadInvoicesAction)
  loadInvoices({patchState}: StateContext<IInvoicesState>, {invoices}: LoadInvoicesAction) {
    const products = invoices.reduce((accum, invoice: IInvoiceDto) => {
      return accum.concat(invoice.products);
    }, []);

    this.store.dispatch(new LoadProductsAction(products));

    const mappedInvoices = invoices.map((invoice) => new InvoiceItemStateModel(
      {
        id: invoice.id,
        info: invoice.info,
        productsSpecsById: invoice.products.reduce((productsSpecs, product) => {
          productsSpecs[product.id] = {quantity: product.quantity};
          return productsSpecs;
        }, {})
      }
    ));

    this.store.dispatch(new SetActiveInvoiceAction(mappedInvoices[0].id));

    const invoicesMap = _.keyBy(mappedInvoices, 'id');

    patchState({
      items: invoicesMap
    });
  }

  @Action(CreateInvoiceAction)
  createInvoice({getState, patchState}: StateContext<IInvoicesState>, action: CreateInvoiceAction) {
    const state: InvoicesStateModel = getState();
    const newInvoiceId = _.max(_.values(state.items).map(invoice => invoice.id)) + 1;

    patchState({
      items: {...state.items, [newInvoiceId]: new DraftInvoiceStateModel(newInvoiceId)}
    });

    this.store.dispatch(new SetActiveInvoiceAction(newInvoiceId));
  }

  @Action(SetActiveInvoiceAction)
  setActiveInvoice({patchState}: StateContext<IInvoicesState>, {invoiceId}: SetActiveInvoiceAction) {
    patchState({
      activeInvoiceId: invoiceId
    });
  }

  @Action(AddProductToInvoiceAction)
  addProductToInvoice({getState, patchState}: StateContext<IInvoicesState>, {invoiceId, productId}: AddProductToInvoiceAction) {
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
  deleteInvoice({getState, patchState}: StateContext<IInvoicesState>, {id}: DeleteInvoiceAction) {
    const state: InvoicesStateModel = getState();
    const {[id]: deleted, ...remaining} = state.items;
    patchState({
      items: remaining
    });
  }

  @Action(UpdateInvoiceProductAction)
  updatedInvoiceProduct({getState, patchState}: StateContext<IInvoicesState>,
                        {invoiceId, productId, changes}: UpdateInvoiceProductAction) {

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
