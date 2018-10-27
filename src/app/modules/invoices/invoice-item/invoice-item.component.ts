import {Component, Input, OnInit} from '@angular/core';
import {IInvoiceDto} from '../../../core/services/interfaces/invoice-dto.interface';
import {IProductDto} from '../../../core/services/interfaces/product-dto.interface';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  @Input() invoice: IInvoiceDto;
  constructor() { }

  ngOnInit() {
  }

  getInvoiceTotal(products: IProductDto[]): number {
    return products.reduce((acum, curr) => acum + curr.price, 0);
  }

}
