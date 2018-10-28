import {Action, State, StateContext} from '@ngxs/store';
import {IInvoicesStateModel, InvoicesStateModel} from './models/invoices.state.model';
import {CreateInvoiceAction, DeleteInvoiceAction, LoadInvoicesAction} from './actions/invoices.actions';

@State<IInvoicesStateModel>({
  name: 'invoices',
  defaults: InvoicesState.default
})
export class InvoicesState {
  static default = new InvoicesStateModel();

  @Action(LoadInvoicesAction)
  loadInvoices({setState}: StateContext<InvoicesStateModel>, {invoices}: LoadInvoicesAction) {
    setState({
      items: [...invoices]
    });
  }

  @Action(CreateInvoiceAction)
  createInvoice({getState, patchState}: StateContext<InvoicesStateModel>, {invoice}: CreateInvoiceAction) {
    const state: InvoicesStateModel = getState();
    patchState({
      items: [...state.items, {...invoice}]
    });
  }

  @Action(DeleteInvoiceAction)
  deleteInvoice({getState, patchState}: StateContext<InvoicesStateModel>, {id}: DeleteInvoiceAction) {
    const state: InvoicesStateModel = getState();
    const items = state.items.filter((invoice) => invoice.id !== id);
    patchState({
      items: [...items]
    });
  }
}
