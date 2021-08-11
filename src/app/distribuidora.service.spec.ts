import { TestBed } from '@angular/core/testing';

import { DistribuidoraService } from './distribuidora.service';

describe('DistribuidoraService', () => {
  let service: DistribuidoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistribuidoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
