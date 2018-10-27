import {IProductDto} from '../interfaces/product-dto.interface';

export class ProductModel implements IProductDto {
  id: number;
  name: string;
  code: string;
  price: number;
  constructor(product: Partial<IProductDto> = {}) {
    Object.assign(this, product);
  }
}
