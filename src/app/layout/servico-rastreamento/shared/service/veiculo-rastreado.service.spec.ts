import { TestBed, inject } from '@angular/core/testing';

import { VeiculoRastreadoService } from './veiculo-rastreado.service';

describe('VeiculoRastreadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculoRastreadoService]
    });
  });

  it('should be created', inject([VeiculoRastreadoService], (service: VeiculoRastreadoService) => {
    expect(service).toBeTruthy();
  }));
});
