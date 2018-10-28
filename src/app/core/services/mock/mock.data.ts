import {ProductMockModel} from './models/product.mock.model';
import {InvoiceMockModel} from './models/invoice.mock.model';
import {IProductDto} from '../interfaces/product-dto.interface';
import {IInvoiceDto} from '../interfaces/invoice-dto.interface';

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
          client: 'Name Surname'
        },
        products: getProducts()
      }
    ));
  }
  return invoices;
}

function getProducts(): IProductDto[] {
  const products: IProductDto[] = [];
  const SKU = 'SK';
  for (let i = 0; i < 5; i++) {
    const productId = Math.floor(Math.random() * 10000 + 1);
    products.push(new ProductMockModel(
      {
        id: productId,
        name: `Product ${Math.random().toString(36).substr(2, 5)}`,
        code: `${SKU} ${productId}`,
        price: Math.floor(Math.random() * 400 + 1) + 100,
        quantity: Math.floor(Math.random() * 5 + 1)
      }
    ));
  }
  return products;
}
