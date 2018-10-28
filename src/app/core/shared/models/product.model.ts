import {IProduct} from '../interfaces/product.interface';

export class ProductModel implements IProduct {
  id: number;
  name: string;
  code: string;
  price: number;

  constructor(product: Partial<IProduct> = {}) {
    Object.assign(this, product);
  }
}
