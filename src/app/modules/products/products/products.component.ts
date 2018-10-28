import {Component, OnInit} from '@angular/core';
import {ProductsState} from '../../../core/store/products.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Select(ProductsState.products) products$: Observable<any>;
  constructor() {
  }

  ngOnInit() {
  }

}
