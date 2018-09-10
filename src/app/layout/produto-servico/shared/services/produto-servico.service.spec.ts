import { TestBed, inject } from '@angular/core/testing';

import { ProdutoServicoService } from './produto-servico.service';

describe('ProdutoServicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoServicoService]
    });
  });

  it('should be created', inject([ProdutoServicoService], (service: ProdutoServicoService) => {
    expect(service).toBeTruthy();
  }));
});
