import {Component, Input, OnInit} from '@angular/core';
import {IInvoice} from '../../../core/shared/interfaces/invoice.interface';
import {IProduct} from '../../../core/shared/interfaces/product.interface';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  @Input() invoice: IInvoice;
  constructor() { }

  ngOnInit() {
  }

  getInvoiceTotal(products: IProduct[]): number {
    return products.reduce((acum, curr) => acum + curr.price, 0);
  }

}
