import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../core/shared/shared-module/shared.module';
import {InvoicesComponent} from './invoices.component';
import {InvoiceItemComponent} from './invoice-item/invoice-item.component';
import {InvoiceListComponent} from './invoice-list/invoice-list.component';
import {InvoicesService} from '../../core/services/invoices.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [InvoicesComponent, InvoiceItemComponent, InvoiceListComponent],
  providers: [InvoicesService]
})
export class InvoicesModule {
}
