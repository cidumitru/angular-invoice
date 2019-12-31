import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {ProductsComponent} from '@angular-invoice/feature/products/lib/products/products.component';
import {ProductsModule} from '@angular-invoice/feature/products/lib/products.module';
import {InvoicingMainComponent} from '@angular-invoice/feature/invoicing/lib/views/invoices-main/invoicing-main.component';
import {InvoicingModule} from '@angular-invoice/feature/invoicing/lib/invoicing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductsModule,
    InvoicingModule,
    RouterModule.forRoot([
      {
        path: 'invoices',
        component: InvoicingMainComponent
        // loadChildren: () => import("@angular-invoice/feature/invoices/index").then(m => m.InvoicesModule),
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'clients',
        loadChildren: () => import('@angular-invoice/feature/clients/index').then(m => m.ClientsModule),
      }
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      selectorOptions: {injectContainerState: false, suppressErrors: false}
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
