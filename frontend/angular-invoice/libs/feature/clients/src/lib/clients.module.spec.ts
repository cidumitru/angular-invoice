import {async, TestBed} from '@angular/core/testing';
import {ClientsModule} from './clients.module';

describe('ClientsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientsModule).toBeDefined();
  });
});
