import { TestBed, inject } from '@angular/core/testing';

import { AbastecimentoService } from './abastecimento.service';

describe('AbastecimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbastecimentoService]
    });
  });

  it('should be created', inject([AbastecimentoService], (service: AbastecimentoService) => {
    expect(service).toBeTruthy();
  }));
});
