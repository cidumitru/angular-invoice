import {async, TestBed} from '@angular/core/testing';
import {InvoicesModule} from './invoices.module';

describe('InvoicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InvoicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InvoicesModule).toBeDefined();
  });
});
