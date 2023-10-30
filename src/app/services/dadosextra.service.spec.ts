import { TestBed } from '@angular/core/testing';

import { DadosextraService } from './dadosextra.service';

describe('DadosextraService', () => {
  let service: DadosextraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosextraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
