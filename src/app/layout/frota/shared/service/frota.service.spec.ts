import { TestBed, inject } from '@angular/core/testing';

import { FrotaService } from './frota.service';

describe('FrotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrotaService]
    });
  });

  it('should be created', inject([FrotaService], (service: FrotaService) => {
    expect(service).toBeTruthy();
  }));
});
