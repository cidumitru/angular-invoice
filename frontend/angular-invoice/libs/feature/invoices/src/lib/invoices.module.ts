import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoicesComponent} from './invoices.component';
import {InvoiceItemComponent} from './invoice-item/invoice-item.component';
import {InvoiceListComponent} from './invoice-list/invoice-list.component';
import {FormsModule} from '@angular/forms';
import {InvoicesService} from './core/services/invoices.service';
import {NgxsModule} from '@ngxs/store';
import {InvoicesState} from '@angular-invoice/feature/invoices/lib/core/store/invoices.state';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@angular-invoice/shared/lib/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxsModule.forFeature([InvoicesState]),
    RouterModule.forChild([
      {
        path: '',
        component: InvoicesComponent
      }
    ])
  ],
  declarations: [InvoicesComponent, InvoiceItemComponent, InvoiceListComponent],
  providers: [InvoicesService]
})
export class InvoicesModule {
}
