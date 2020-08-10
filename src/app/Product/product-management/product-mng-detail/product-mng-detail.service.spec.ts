import { TestBed } from '@angular/core/testing';

import { ProductMngDetailService } from './product-mng-detail.service';

describe('ProductMngDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductMngDetailService = TestBed.get(ProductMngDetailService);
    expect(service).toBeTruthy();
  });
});
