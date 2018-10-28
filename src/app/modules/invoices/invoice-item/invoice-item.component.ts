import {Component, Input, OnInit} from '@angular/core';
import {IInvoice, InvoiceProducts, ProductSpecs} from '../../../core/shared/interfaces/invoice.interface';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {IAppState} from '../../../core/store/app.state.interface';
import {switchMap} from 'rxjs/operators';
import {IProductViewModel, ProductViewModel} from './models/product.view-model';
import {UpdateInvoiceProductAction} from '../../../core/store/actions/invoices.actions';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  products$: Observable<IProductViewModel[]>;
  invoice: IInvoice;

  constructor(private store: Store) {
  }

  @Input('invoice') set _invoice(invoice: IInvoice) {
    this.invoice = invoice;
    this.getProductsForInvoiceById(invoice.productsSpecsById);
  }

  ngOnInit() {
  }

  getProductsForInvoiceById(invoiceProducts: InvoiceProducts): void {
    const productIds = Object.keys(invoiceProducts).map((key) => parseInt(key, 10));
    this.products$ = this.store.select((state: IAppState) => state.products.items).pipe(
      switchMap((products) => {
        const productsView: IProductViewModel[] = productIds.map((id) => {
          return new ProductViewModel(
            {...products[id], ...invoiceProducts[id]});
        });
        return of(productsView);
      })
    );
  }

  updateInvoiceProducts(productId: number, product: ProductSpecs) {
    this.store.dispatch(new UpdateInvoiceProductAction(this.invoice.id, productId, product));
  }

  getInvoiceTotal(products: IProductViewModel[]): number {
    return products.reduce((acum, curr) => acum + (curr.price * curr.quantity), 0);
  }

}
