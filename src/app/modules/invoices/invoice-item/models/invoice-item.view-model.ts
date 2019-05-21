import {IInvoiceInfo, IInvoiceItemState, InvoiceProducts} from '../../../../core/shared/interfaces/invoice.interface';
import {ProductViewModel} from './product.view-model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

export class InvoiceItemViewModel implements IInvoiceItemState {
  id: number;
  info: IInvoiceInfo;
  products$: Observable<ProductViewModel[]>;
  productsSpecsById: InvoiceProducts;
  invoiceTotal$: Observable<number>;
  editMode = true;

  constructor(invoice: Partial<InvoiceItemViewModel>) {
    Object.assign(this, invoice);
    this.invoiceTotal$ = invoice.products$.pipe(map(products => _.sum(products.map(product => product.price * product.quantity))));
  }

  public toggleEditMode() {
    this.editMode = !this.editMode;
  }

}
