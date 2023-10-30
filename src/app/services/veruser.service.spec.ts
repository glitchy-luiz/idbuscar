import { TestBed } from '@angular/core/testing';

import { VeruserService } from './veruser.service';

describe('VeruserService', () => {
  let service: VeruserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeruserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
