import {ProductViewModel} from './product.view-model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {IInvoiceInfo, IInvoiceItemState, InvoiceProducts} from '@angular-invoice/shared/lib/interfaces/invoice.interface';


interface IInvoiceItemViewModel {
  id: number;
  info: IInvoiceInfo;
  products$: Observable<ProductViewModel[]>;
  productsSpecsById: InvoiceProducts;
  editMode?: boolean;
}

export class InvoiceItemViewModel implements IInvoiceItemState, IInvoiceItemViewModel {
  id: number;
  info: IInvoiceInfo;
  products$: Observable<ProductViewModel[]>;
  productsSpecsById: InvoiceProducts;
  invoiceTotal$: Observable<number>;
  editMode: boolean = true;

  constructor(invoice: IInvoiceItemViewModel) {
    this.id = invoice.id;
    this.info = invoice.info;
    this.products$ = invoice.products$;
    this.productsSpecsById = invoice.productsSpecsById;
    this.editMode = invoice.editMode || false;

    this.invoiceTotal$ = invoice.products$.pipe(map((products: ProductViewModel[]) =>
      _.sum(products.map((product: ProductViewModel) => product.price * product.quantity))));
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

}
