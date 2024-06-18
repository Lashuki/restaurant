import { TestBed } from '@angular/core/testing';

import { CcardService } from './services/ccard.service';

describe('CcardService', () => {
  let service: CcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
