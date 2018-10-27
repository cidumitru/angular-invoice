import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../core/shared/shared-module/shared.module';
import { InvoicesComponent } from './invoices.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import {NgxsModule} from '@ngxs/store';
import {InvoicesStateModel} from '../../core/store/models/invoices.state.model';
import {InvoicesState} from '../../core/store/invoices.state';
import {InvoicesService} from '../../core/services/invoices.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([InvoicesState])
  ],
  declarations: [InvoicesComponent, InvoiceItemComponent, InvoiceListComponent],
  providers: [InvoicesService]
})
export class InvoicesModule { }
