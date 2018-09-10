import { TestBed, inject } from '@angular/core/testing';

import { RastreadorService } from './rastreador.service';

describe('RastreadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RastreadorService]
    });
  });

  it('should be created', inject([RastreadorService], (service: RastreadorService) => {
    expect(service).toBeTruthy();
  }));
});
