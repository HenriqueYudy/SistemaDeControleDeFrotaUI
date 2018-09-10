import { TestBed, inject } from '@angular/core/testing';

import { CoordenadaService } from './coordenada.service';

describe('CoordenadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoordenadaService]
    });
  });

  it('should be created', inject([CoordenadaService], (service: CoordenadaService) => {
    expect(service).toBeTruthy();
  }));
});
