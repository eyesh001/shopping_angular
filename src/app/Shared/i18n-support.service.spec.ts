import { TestBed } from '@angular/core/testing';

import { I18nSupportService } from './i18n-support.service';

describe('I18nSupportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: I18nSupportService = TestBed.get(I18nSupportService);
    expect(service).toBeTruthy();
  });
});
