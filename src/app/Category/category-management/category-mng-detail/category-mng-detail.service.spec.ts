import { TestBed } from '@angular/core/testing';

import { CategoryMngDetailService } from './category-mng-detail.service';

describe('CategoryMngDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryMngDetailService = TestBed.get(CategoryMngDetailService);
    expect(service).toBeTruthy();
  });
});
