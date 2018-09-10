import { TestBed, inject } from '@angular/core/testing';

import { ItemSelecionadoService } from './item-selecionado.service';

describe('ItemSelecionadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemSelecionadoService]
    });
  });

  it('should be created', inject([ItemSelecionadoService], (service: ItemSelecionadoService) => {
    expect(service).toBeTruthy();
  }));
});
