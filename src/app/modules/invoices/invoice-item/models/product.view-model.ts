import {IProduct} from '../../../../core/shared/interfaces/product.interface';

export interface IProductViewModel extends IProduct {
  quantity: number;
}

export class ProductViewModel {
  id: number;
  name: string;
  code: string;
  price: number;
  quantity: number;

  constructor(product: IProductViewModel) {
    Object.assign(this, product);
  }
}

export class InvoiceDraftProductViewModel {

}
