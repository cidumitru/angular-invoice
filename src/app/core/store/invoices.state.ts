import {Action, State, StateContext, Store} from '@ngxs/store';
import {IInvoicesStateModel, InvoicesStateModel} from './models/invoices.state.model';
import {CreateInvoiceAction, DeleteInvoiceAction, LoadInvoicesAction, UpdateInvoiceProductAction} from './actions/invoices.actions';
import {LoadProductsAction} from './actions/product.actions';
import {IInvoiceDto} from '../services/interfaces/invoice-dto.interface';
import {InvoiceStateModel} from '../shared/interfaces/invoice.interface';

@State<IInvoicesStateModel>({
  name: 'invoices',
  defaults: InvoicesState.default
})
export class InvoicesState {
  static default = new InvoicesStateModel();

  constructor(private store: Store) {
  }

  @Action(LoadInvoicesAction)
  loadInvoices({setState}: StateContext<InvoicesStateModel>, {invoices}: LoadInvoicesAction) {
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

    setState({
      items: [...mappedInvoices]
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
    const items = state.items.filter((invoice) => invoice.id !== id);
    patchState({
      items: [...items]
    });
  }

  @Action(UpdateInvoiceProductAction)
  updatedInvoiceProduct({getState, patchState}: StateContext<InvoicesStateModel>,
                        {invoiceId, productId, changes}: UpdateInvoiceProductAction) {
    const copyOfState: InvoicesStateModel = {...getState()};
    const editedInvoiceId = copyOfState.items.findIndex((invoice) => invoice.id === invoiceId);
    copyOfState.items[editedInvoiceId].productsSpecsById[productId] = {...changes};
    patchState({
      items: [...copyOfState.items]
    });
  }
}
