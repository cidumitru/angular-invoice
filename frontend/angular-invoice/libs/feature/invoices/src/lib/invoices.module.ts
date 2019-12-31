import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoicesComponent} from './views/invoices-main/invoices.component';
import {InvoiceItemComponent} from './views/invoice-item/invoice-item.component';
import {InvoiceListComponent} from './views/invoice-list/invoice-list.component';
import {FormsModule} from '@angular/forms';
import {InvoicesService} from './services/invoices.service';
import {NgxsModule} from '@ngxs/store';
import {InvoicesState} from './store/invoices.state';
import {SharedModule} from '@angular-invoice/shared/lib/shared.module';
import {InvoicesRoutingModule} from './invoices-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxsModule.forFeature([InvoicesState]),
    InvoicesRoutingModule
  ],
  declarations: [InvoicesComponent, InvoiceItemComponent, InvoiceListComponent],
  providers: [InvoicesService]
})
export class InvoicesModule {
}
