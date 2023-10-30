import { TestBed } from '@angular/core/testing';

import { DadouserService } from './dadouser.service';

describe('DadouserService', () => {
  let service: DadouserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadouserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
