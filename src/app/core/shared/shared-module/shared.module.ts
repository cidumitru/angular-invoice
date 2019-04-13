import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SelectDropDownModule} from 'ngx-select-dropdown';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    SelectDropDownModule
  ],
  declarations: [],
  exports: [
    NgxDatatableModule,
    SelectDropDownModule
  ]
})
export class SharedModule { }
