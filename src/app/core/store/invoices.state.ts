import {Action, createSelector, Selector, State, StateContext, Store} from '@ngxs/store';
import {IInvoicesStateModel, InvoicesStateModel} from './models/invoices.state.model';
import {CreateInvoiceAction, DeleteInvoiceAction, LoadInvoicesAction, UpdateInvoiceProductAction} from './actions/invoices.actions';
import {LoadProductsAction} from './actions/product.actions';
import {IInvoiceDto} from '../services/interfaces/invoice-dto.interface';
import {InvoiceStateModel} from '../shared/interfaces/invoice.interface';
import * as _ from 'lodash';

@State<IInvoicesStateModel>({
  name: 'invoices',
  defaults: InvoicesState.default
})
export class InvoicesState {
  static default = new InvoicesStateModel();

  constructor(private store: Store) {
  }

  @Selector()
  static Invoices(state: InvoicesStateModel) {
    return state.items;
  }

  static getInvoiceById(invoiceId: number): (...args: any[]) => InvoiceStateModel {
    return createSelector([InvoicesState], (state: InvoicesStateModel) => state.items[invoiceId]);
  }

  @Action(LoadInvoicesAction)
  loadInvoices({patchState}: StateContext<InvoicesStateModel>, {invoices}: LoadInvoicesAction) {
    const products = invoices.reduce((accum, invoice: IInvoiceDto) => {
      return accum.concat(invoice.products);
    }, []);

    this.store.dispatch(new LoadProductsAction(products));

    const mappedInvoices = invoices.map((invoice) => new InvoiceStateModel(
      {
        id: invoice.id,
        info: invoice.info,
        productsSpecsById: invoice.products.reduce((productsSpecs, product) => {
          productsSpecs[product.id] = {quantity: product.quantity};
          return productsSpecs;
        }, {})
      }
    ));

    const invoicesMap = _.keyBy(mappedInvoices, 'id');

    patchState({
      items: invoicesMap
    });
  }

  @Action(CreateInvoiceAction)
  createInvoice({getState, patchState}: StateContext<InvoicesStateModel>, {invoice}: CreateInvoiceAction) {
    const state: InvoicesStateModel = getState();
    // patchState({
    //   items: [...state.items, {...invoice}]
    // });
  }

  @Action(DeleteInvoiceAction)
  deleteInvoice({getState, patchState}: StateContext<InvoicesStateModel>, {id}: DeleteInvoiceAction) {
    const state: InvoicesStateModel = getState();
    const {[id]: deleted, ...remaining} = state.items;
    patchState({
      items: remaining
    });
  }

  @Action(UpdateInvoiceProductAction)
  updatedInvoiceProduct({getState, patchState}: StateContext<InvoicesStateModel>,
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
