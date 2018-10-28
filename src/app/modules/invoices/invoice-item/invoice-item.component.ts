import {Component, Input, OnInit} from '@angular/core';
import {IInvoice} from '../../../core/shared/interfaces/invoice.interface';
import {IProduct} from '../../../core/shared/interfaces/product.interface';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from '../../../core/store/app.state.interface';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  products: Observable<IProduct[]>;
  invoice: IInvoice;

  constructor(private store: Store) {
  }

  @Input('invoice') set _invoice(invoice: IInvoice) {
    this.invoice = invoice;
    this.getProductsForInvoiceById(Object.keys(invoice.productsSpecsById).map((key) => parseInt(key, 10)));
  }

  ngOnInit() {
  }

  getProductsForInvoiceById(productIds: number[]): void {
    this.products = this.store.select((state: IAppState) => {
      const selected = [];
      productIds.forEach((id) => selected.push(state.products.items[id]));
      return selected;
    });
  }

  getInvoiceTotal(products: IProduct[]): number {
    return products.reduce((acum, curr) => acum + curr.price, 0);
  }

}
