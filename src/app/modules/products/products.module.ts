import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../core/shared/shared-module/shared.module';
import {ProductsComponent} from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
