import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from '@angular-invoice/feature/invoices/lib/invoice-list/invoice-list.component';
import {InvoiceItemComponent} from '@angular-invoice/feature/invoices/lib/invoice-item/invoice-item.component';
import {InvoicesComponent} from '@angular-invoice/feature/invoices/lib/invoices.component';

export enum KnownInvoicesModuleRoutePaths {
  InvoiceList = 'invoices',
  InvoiceView = 'invoice',
  InvoiceViewWithParams = 'invoice/:invoiceId'
}

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
