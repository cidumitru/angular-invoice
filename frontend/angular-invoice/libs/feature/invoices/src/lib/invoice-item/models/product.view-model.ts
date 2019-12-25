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
    this.id = product.id;
    this.name = product.name;
    this.code = product.code;
    this.price = product.price;
    this.quantity = product.quantity;
  }
}
