import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoicesComponent} from './modules/invoices/invoices.component';

const routes: Routes = [
  { path: 'products', loadChildren: './modules/products/products.module#ProductsModule'},
  { path: '', component: InvoicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
