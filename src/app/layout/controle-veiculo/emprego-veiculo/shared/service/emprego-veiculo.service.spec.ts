import { TestBed, inject } from '@angular/core/testing';

import { EmpregoVeiculoService } from './emprego-veiculo.service';

describe('EmpregoVeiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpregoVeiculoService]
    });
  });

  it('should be created', inject([EmpregoVeiculoService], (service: EmpregoVeiculoService) => {
    expect(service).toBeTruthy();
  }));
});
