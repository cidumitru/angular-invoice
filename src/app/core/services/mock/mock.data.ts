import {ProductMockModel} from './models/product.mock.model';
import {InvoiceMockModel} from './models/invoice.mock.model';
import {IProductDto} from '../interfaces/product-dto.interface';
import {IInvoiceDto} from '../interfaces/invoice-dto.interface';
import {MockProductsLookup} from './mock.products';
import * as _ from 'lodash';

export function getMockInvoices(n: number): IInvoiceDto[] {
  const invoices: IInvoiceDto[] = [];
  getProducts();
  for (let i = 0; i < n; i++) {
    invoices.push(new InvoiceMockModel(
      {
        id: Math.floor(Math.random() * 10000 + 1000),
        info: {
          number: Math.floor(Math.random() * 100000 + 1),
          series: Math.random().toString(36).substr(2, 2).toLocaleUpperCase(),
          client: `Client ${Math.floor(Math.random() * 100 + 1)}`
        },
        products: getProducts()
      }
    ));
  }
  return invoices;
}

function getProducts(): IProductDto[] {
  const products: IProductDto[] = [];
  for (let i = 0; i < 5; i++) {
    const product = _.sample(MockProductsLookup);
    products.push(new ProductMockModel(
      {
        id: product.id,
        name: product.name,
        code: `SK-${product.id}`,
        price: Math.floor(Math.random() * 400 + 1) + 100,
        quantity: Math.floor(Math.random() * 5 + 1)
      }
    ));
  }
  return products;
}
