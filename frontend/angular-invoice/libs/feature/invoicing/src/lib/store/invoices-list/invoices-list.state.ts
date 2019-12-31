import {Action, Selector, State, StateContext} from '@ngxs/store';
import {
  IInvoicesListState,
  InvoiceListItemState,
  InvoicesListStateModel
} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state.model';
import {
  LoadInvoicesAction,
  LoadInvoicesFailedAction,
  LoadInvoicesSuccessfulAction
} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/actions/load-invoices.actions';
import {isAction} from '@angular-invoice/shared/lib/utils/ngxs-utils';

@State<IInvoicesListState>({
  name: 'invoicesList',
  defaults: InvoicesListState.default,
})
export class InvoicesListState {
  public static default: InvoicesListStateModel = new InvoicesListStateModel();

  @Selector()
  static invoicesList(state: IInvoicesListState): InvoiceListItemState[] {
    return state.items;
  }


  @Action([LoadInvoicesAction, LoadInvoicesSuccessfulAction, LoadInvoicesFailedAction])
  loadInvoicesList({patchState}: StateContext<IInvoicesListState>, action: unknown) {

    if (isAction(action, LoadInvoicesSuccessfulAction)) {
      const stateInvoices = (<LoadInvoicesSuccessfulAction>action).invoices.map(invoice => new InvoiceListItemState(invoice));

      patchState({
        items: stateInvoices,
        _hasLoaded: true,
        _isLoading: false
      });

      return;
    }

    patchState({
      _isLoading: isAction(action, LoadInvoicesAction),
    });
  }
}
