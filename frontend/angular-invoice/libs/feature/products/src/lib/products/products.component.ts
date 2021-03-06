import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {DeleteProductAction, UpdateProductAction} from '@angular-invoice/feature/products/lib/core/store/actions/product.actions';
import {ProductsState} from '@angular-invoice/feature/products/lib/core/store/products.state';
import {IProduct} from '@angular-invoice/shared/lib/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Select(ProductsState.products)
  products$!: Observable<any>;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  removeProduct(id: number): void {
    this.store.dispatch(new DeleteProductAction(id));
  }

  updateProduct(id: number, changes: Partial<IProduct>): void {
    this.store.dispatch(new UpdateProductAction(id, changes));
  }

}
