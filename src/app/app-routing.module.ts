import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoicesComponent} from './modules/invoices/invoices.component';
import {ProductsComponent} from './modules/products/products/products.component';
import {ClientsComponent} from './modules/clients/clients/clients.component';

const routes: Routes = [
  { path: '', component: InvoicesComponent},
  {path: 'productsSpecsById', component: ProductsComponent},
  {path: 'invoices', component: InvoicesComponent},
  {path: 'clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
