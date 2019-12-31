import {Component, Input} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {map, switchMap} from 'rxjs/operators';
import {ProductViewModel} from './models/product.view-model';
import {InvoiceItemViewModel} from './models/invoice-item.view-model';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {InvoiceStatusEnum} from '@angular-invoice/shared/lib/enums/invoice-status.enum';
import {IInvoiceItemState, InvoiceItemStateModel, IProductSpecs} from '@angular-invoice/shared/lib/interfaces/invoice.interface';
import {ProductsState} from '@angular-invoice/feature/products/lib/core/store/products.state';
import {IProductsMap} from '@angular-invoice/feature/products/lib/core/store/models/products.state.model';
import {IProduct} from '@angular-invoice/shared/lib/interfaces/product.interface';
import {
  AddProductToInvoiceAction,
  UpdateInvoiceProductAction
} from '@angular-invoice/feature/invoices/lib/core/store/actions/invoices.actions';
import {InvoicesState} from '@angular-invoice/feature/invoices/lib/core/store/invoices.state';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent {

  invoice!: InvoiceItemViewModel;
  @Select(InvoicesState.getActiveInvoice) activeInvoice$!: Observable<IInvoiceItemState>;
  invoiceStatuses: typeof InvoiceStatusEnum = InvoiceStatusEnum;
  stateProducts$: Observable<IProductsMap>;

  constructor(private store: Store) {
    this.stateProducts$ = this.store.select(ProductsState.getProducts)
      .pipe(map((products: IProductsMap) => _.values(products)));
  }

  @Input('invoice') set _invoice(invoice: IInvoiceItemState) {
    if (this.invoice && this.invoice.id === invoice.id || !invoice) {
      return;
    }
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

  private snapshot(): any {
    return this.store.snapshot();
  }

}
