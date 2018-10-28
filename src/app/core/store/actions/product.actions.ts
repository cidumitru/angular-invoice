import {IProductDto} from '../../services/interfaces/product-dto.interface';

export class LoadProductsAction {
  static readonly type = '[Products] Load';

  constructor(public items: IProductDto[]) {
  }
}

export class AddProductAction {
  static readonly type = '[Product] Add';
  constructor(product: IProductDto) {}
}

export class BulkAddProductAction {
  static readonly type = '[Product] Bulk Add';
  constructor(products: IProductDto[]) {}
}

export class UpdateProductAction {
  static readonly type = '[Product] Update';
  constructor(public id: number, changes: Partial<IProductDto>) {}
}

export class DeleteProductAction {
  static readonly type = '[Product] Delete';
  constructor(public id: number) {}
}
