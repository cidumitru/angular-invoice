import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../core/shared/shared-module/shared.module';
import {ProductsComponent} from './products/products.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule {
}
