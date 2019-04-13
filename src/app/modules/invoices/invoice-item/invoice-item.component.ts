import {Component, Input, OnInit} from '@angular/core';
import {IInvoiceItemState, IProductSpecs} from '../../../core/shared/interfaces/invoice.interface';
import {Store} from '@ngxs/store';
import {IAppState} from '../../../core/store/app.state.interface';
import {map, switchMap} from 'rxjs/operators';
import {ProductViewModel} from './models/product.view-model';
import {AddProductToInvoiceAction, UpdateInvoiceProductAction} from '../../../core/store/actions/invoices.actions';
import {InvoiceItemViewModel} from './models/invoice-item.view-model';
import * as _ from 'lodash';
import {ProductsState} from '../../../core/store/products.state';
import {InvoiceStatusEnum} from '../../../core/shared/enums/invoice-status.enum';
import {Observable} from 'rxjs';
import {IProductsMap} from '../../../core/store/models/products.state.model';
import {IProduct} from '../../../core/shared/interfaces/product.interface';
import {InvoicesState} from '../../../core/store/invoices.state';
import {of} from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  invoice: InvoiceItemViewModel;
  invoiceStatuses = InvoiceStatusEnum;
  stateProducts$: Observable<IProductsMap>;

  constructor(private store: Store) {
    this.stateProducts$ = this.store.select(ProductsState.getProducts).pipe(map(products => _.values(products)));
  }

  @Input('invoice') set _invoice(invoice: IInvoiceItemState) {

    this.invoice = this.createViewModel(invoice);
  }

  ngOnInit() {
  }

  createViewModel(invoice: IInvoiceItemState): InvoiceItemViewModel {
    const products$ = this.store.select(InvoicesState.getInvoiceById(invoice.id)).pipe(
      switchMap(invoiceState => {
        const productIds = _.keys(invoiceState.productsSpecsById).map(id => parseInt(id, 10));
        if (!productIds.length) {
          return of([]);
        }
        return this.store.select(ProductsState.getProductsWithIds(productIds)).pipe(
          map(stateProducts => stateProducts.map(product => new ProductViewModel({...product, ...invoice.productsSpecsById[product.id]}))));
      })
    );
    return new InvoiceItemViewModel({...invoice, products$});
  }

  addNewProduct(product: IProduct): void {
    this.store.dispatch(new AddProductToInvoiceAction(this.invoice.id, product.id));
  }

  updateInvoiceProducts(productId: number, product: Partial<IProductSpecs>) {
    this.store.dispatch(new UpdateInvoiceProductAction(this.invoice.id, productId, product));
  }

  private snapshot(): IAppState {
    return this.store.snapshot();
  }

}
