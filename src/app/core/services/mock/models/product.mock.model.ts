import {IProductDto} from '../../interfaces/product-dto.interface';

export class ProductMockModel implements IProductDto {
  id: number;
  name: string;
  code: string;
  price: number;
  quantity: number;

  constructor(product: Partial<IProductDto> = {}) {
    Object.assign(this, product);
  }
}
