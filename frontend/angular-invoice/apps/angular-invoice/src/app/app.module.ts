import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {ProductsComponent} from '@angular-invoice/feature/products/lib/products/products.component';
import {ProductsModule} from '@angular-invoice/feature/products/lib/products.module';
import {InvoicesComponent} from '@angular-invoice/feature/invoices/lib/invoices.component';
import {InvoicesModule} from '@angular-invoice/feature/invoices/lib/invoices.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductsModule,
    InvoicesModule,
    RouterModule.forRoot([
      {
        path: 'invoices',
        component: InvoicesComponent
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
