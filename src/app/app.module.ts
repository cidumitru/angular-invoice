import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsModule} from './modules/products/products.module';
import {InvoicesModule} from './modules/invoices/invoices.module';
import {AppRoutingModule} from './app-routing.module';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {ClientsModule} from './modules/clients/clients.module';
import {InvoicesState} from './core/store/invoices.state';
import {ProductsState} from './core/store/products.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    InvoicesModule,
    ClientsModule,
    AppRoutingModule,
    NgxsModule.forRoot([InvoicesState, ProductsState], {developmentMode: true}),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
