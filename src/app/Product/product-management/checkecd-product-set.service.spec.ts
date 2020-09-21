import { TestBed } from '@angular/core/testing';

import { CheckecdProductSetService } from './checkecd-product-set.service';

describe('CheckecProductSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckecdProductSetService = TestBed.get(CheckecdProductSetService);
    expect(service).toBeTruthy();
  });
});
