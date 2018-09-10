import { TestBed, inject } from '@angular/core/testing';

import { ItemManutencaoService } from './item-manutencao.service';

describe('ItemManutencaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemManutencaoService]
    });
  });

  it('should be created', inject([ItemManutencaoService], (service: ItemManutencaoService) => {
    expect(service).toBeTruthy();
  }));
});
