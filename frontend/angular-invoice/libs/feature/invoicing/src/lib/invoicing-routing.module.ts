import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceItemComponent} from '@angular-invoice/feature/invoicing/lib/views/invoice-item/invoice-item.component';
import {InvoicingMainComponent} from '@angular-invoice/feature/invoicing/lib/views/invoices-main/invoicing-main.component';
import {InvoiceListComponent, InvoicesListResolver} from '@angular-invoice/feature/invoicing/lib/views/invoice-list/invoice-list.component';
import {KnownInvoicingModuleRoutePaths} from '@angular-invoice/feature/invoicing/lib/known-invoicing-module-route.paths';

const routes: Routes = [
  {
    path: '',
    component: InvoicingMainComponent,
    children: [
      {
        path: '',
        redirectTo: KnownInvoicingModuleRoutePaths.InvoiceList,
        pathMatch: 'full'
      },
      {
        path: KnownInvoicingModuleRoutePaths.InvoiceList,
        component: InvoiceListComponent,
        resolve: {invoiceList: InvoicesListResolver},
      },
      {
        path: KnownInvoicingModuleRoutePaths.InvoiceViewWithParams,
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
export class InvoicingRoutingModule {
}
