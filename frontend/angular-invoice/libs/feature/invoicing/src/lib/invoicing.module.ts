import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoicingMainComponent} from './views/invoices-main/invoicing-main.component';
import {InvoiceItemComponent} from './views/invoice-item/invoice-item.component';
import {InvoiceListComponent} from './views/invoice-list/invoice-list.component';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {InvoicingState} from './store/invoicing.state';
import {SharedModule} from '@angular-invoice/shared/lib/shared.module';
import {InvoicingRoutingModule} from './invoicing-routing.module';
import {InvoicesListState} from '@angular-invoice/feature/invoicing/lib/store/invoices-list/invoices-list.state';
import {INVOICING_API_SERVICE} from '@angular-invoice/feature/invoicing/lib/services/api/invoicing.api.service.interface';
import {environment} from '../../../../../apps/angular-invoice/src/environments/environment';
import {InvoicingApiService} from '@angular-invoice/feature/invoicing/lib/services/api/invoicing.api.service';
import {InvoicingMockApiService} from '@angular-invoice/feature/invoicing/lib/services/api/invoicing.api.service.mock';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxsModule.forFeature([InvoicingState, InvoicesListState]),
    InvoicingRoutingModule
  ],
  declarations: [InvoicingMainComponent, InvoiceItemComponent, InvoiceListComponent],
  providers: [
    {
      provide: INVOICING_API_SERVICE,
      useClass: environment.production ? InvoicingApiService : InvoicingMockApiService
    }
  ]
})
export class InvoicingModule {
}
