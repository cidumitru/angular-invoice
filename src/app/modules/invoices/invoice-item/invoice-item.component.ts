import {Component, Input} from '@angular/core';
import {IInvoiceItemState, InvoiceItemStateModel, IProductSpecs} from '@core/shared/interfaces/invoice.interface';
import {Store} from '@ngxs/store';
import {IAppState} from '@core/store/app.state.interface';
import {map, switchMap} from 'rxjs/operators';
import {ProductViewModel} from './models/product.view-model';
import {AddProductToInvoiceAction, UpdateInvoiceProductAction} from '@core/store/actions/invoices.actions';
import {InvoiceItemViewModel} from './models/invoice-item.view-model';
import * as _ from 'lodash';
import {ProductsState} from '@core/store/products.state';
import {InvoiceStatusEnum} from '@core/shared/enums/invoice-status.enum';
import {Observable} from 'rxjs';
import {IProductsMap} from '@core/store/models/products.state.model';
import {IProduct} from '@core/shared/interfaces/product.interface';
import {InvoicesState} from '@core/store/invoices.state';
import {of} from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent {

  invoice!: InvoiceItemViewModel;
  invoiceStatuses: typeof InvoiceStatusEnum = InvoiceStatusEnum;
  stateProducts$: Observable<IProductsMap>;

  constructor(private store: Store) {
    this.stateProducts$ = this.store.select(ProductsState.getProducts)
      .pipe(map((products: IProductsMap) => _.values(products)));
  }

  @Input('invoice') set _invoice(invoice: IInvoiceItemState) {
    // if (this.invoice && this.invoice.id === invoice.id) {
    //   return;
    // }
    this.invoice = this.createViewModel(invoice);
  }
  createViewModel(invoice: IInvoiceItemState): InvoiceItemViewModel {
    const products$: Observable<ProductViewModel[]> = this.store.select(InvoicesState.getInvoiceById(invoice.id)).pipe(
      switchMap((invoiceState: InvoiceItemStateModel) => {
        const productIds: number[] = _.keys(invoiceState.productsSpecsById).map((id: string) => parseInt(id, 10));
        if (!productIds.length) {
          return of([]);
        }
        return this.store.select(ProductsState.getProductsWithIds(productIds)).pipe(
          map((stateProducts: IProduct[]) => stateProducts.map((product: IProduct) => {
            return new ProductViewModel({...product, ...invoice.productsSpecsById[product.id]});
          })));
      })
    );
    return new InvoiceItemViewModel({...invoice, products$});
  }

  addNewProduct(product: IProduct): void {
    this.store.dispatch(new AddProductToInvoiceAction(this.invoice.id, product.id));
  }

  updateInvoiceProducts(productId: number, product: Partial<IProductSpecs>): void {
    this.store.dispatch(new UpdateInvoiceProductAction(this.invoice.id, productId, product));
  }

  private snapshot(): IAppState {
    return this.store.snapshot();
  }

}
