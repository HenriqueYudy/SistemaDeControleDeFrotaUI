import { TestBed, inject } from '@angular/core/testing';

import { VeiculoAlocadoService } from './veiculo-alocado.service';

describe('VeiculoAlocadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculoAlocadoService]
    });
  });

  it('should be created', inject([VeiculoAlocadoService], (service: VeiculoAlocadoService) => {
    expect(service).toBeTruthy();
  }));
});
