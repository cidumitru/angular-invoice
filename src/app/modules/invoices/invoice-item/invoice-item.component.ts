import {Component, Input, OnInit} from '@angular/core';
import {IInvoiceItemState, IProductSpecs} from '../../../core/shared/interfaces/invoice.interface';
import {Store} from '@ngxs/store';
import {IAppState} from '../../../core/store/app.state.interface';
import {map} from 'rxjs/operators';
import {IProductViewModel, ProductViewModel} from './models/product.view-model';
import {UpdateInvoiceProductAction} from '../../../core/store/actions/invoices.actions';
import {InvoiceItemViewModel} from './models/invoice-item.view-model';
import * as _ from 'lodash';
import {ProductsState} from '../../../core/store/products.state';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  invoice: InvoiceItemViewModel;

  constructor(private store: Store) {
  }

  @Input('invoice') set _invoice(invoice: IInvoiceItemState) {

    this.invoice = this.createViewModel(invoice);
  }

  ngOnInit() {
  }

  createViewModel(invoice: IInvoiceItemState): InvoiceItemViewModel {
    const productIds = _.keys(invoice.productsSpecsById).map(id => parseInt(id, 10));
    const products$ = this.store.select(ProductsState.getProductsWithIds(productIds)).pipe(
      map(stateProducts => stateProducts.map(product => new ProductViewModel({...product, ...invoice.productsSpecsById[product.id]}))
      ));
    return new InvoiceItemViewModel({...invoice, products$});
  }

  updateInvoiceProducts(productId: number, product: IProductSpecs) {
    this.store.dispatch(new UpdateInvoiceProductAction(this.invoice.id, productId, product));
  }

  getInvoiceTotal(products: IProductViewModel[]): number {
    return products.reduce((acum, curr) => acum + (curr.price * curr.quantity), 0);
  }

  private snapshot(): IAppState {
    return this.store.snapshot();
  }

}
