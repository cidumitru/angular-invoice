import {IProductDto} from '../../interfaces/product-dto.interface';

export class ProductMockModel implements IProductDto {
  id: number;
  name: string;
  code: string;
  price: number;
  quantity: number;

  constructor(product: IProductDto) {
    this.id = product.id;
    this.name = product.name;
    this.code = product.code;
    this.price = product.price;
    this.quantity = product.quantity;
  }
}
