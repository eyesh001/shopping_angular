import { TestBed } from '@angular/core/testing';

import { CartInService } from './cart-in.service';

describe('CartInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartInService = TestBed.get(CartInService);
    expect(service).toBeTruthy();
  });
});
