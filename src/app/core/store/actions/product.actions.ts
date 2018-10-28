import {IProductDto} from '../../services/interfaces/product-dto.interface';
import {IProduct} from '../../shared/interfaces/product.interface';

export class LoadProductsAction {
  static readonly type = '[Products] Load';

  constructor(public items: IProductDto[]) {
  }
}

export class AddProductAction {
  static readonly type = '[Product] Add';

  constructor(public product: IProductDto) {
  }
}

export class BulkAddProductAction {
  static readonly type = '[Product] Bulk Add';

  constructor(public products: IProductDto[]) {
  }
}

export class UpdateProductAction {
  static readonly type = '[Product] Update';

  constructor(public id: number, public changes: Partial<IProduct>) {
  }
}

export class DeleteProductAction {
  static readonly type = '[Product] Delete';
  constructor(public id: number) {}
}
