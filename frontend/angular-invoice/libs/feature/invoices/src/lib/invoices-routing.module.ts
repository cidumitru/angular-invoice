import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from '@angular-invoice/feature/invoices/lib/views/invoice-list/invoice-list.component';
import {InvoiceItemComponent} from '@angular-invoice/feature/invoices/lib/views/invoice-item/invoice-item.component';
import {InvoicesComponent} from '@angular-invoice/feature/invoices/lib/views/invoices-main/invoices.component';
import {KnownInvoicesModuleRoutePaths} from '@angular-invoice/feature/invoices/lib/known-invoices-module-route.paths';

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    children: [
      {
        path: '',
        redirectTo: KnownInvoicesModuleRoutePaths.InvoiceList,
        pathMatch: 'full'
      },
      {
        path: KnownInvoicesModuleRoutePaths.InvoiceList,
        component: InvoiceListComponent
      },
      {
        path: KnownInvoicesModuleRoutePaths.InvoiceViewWithParams,
        component: InvoiceItemComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InvoicesRoutingModule {
}
