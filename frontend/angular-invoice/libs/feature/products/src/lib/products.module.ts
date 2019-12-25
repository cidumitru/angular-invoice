import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products/products.component';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {ProductsState} from '@angular-invoice/feature/products/lib/core/store/products.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forFeature([ProductsState])
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule {
}
