import { TestBed, inject } from '@angular/core/testing';

import { UsuarioPermissaoService } from './usuario-permissao.service';

describe('UsuarioPermissaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioPermissaoService]
    });
  });

  it('should be created', inject([UsuarioPermissaoService], (service: UsuarioPermissaoService) => {
    expect(service).toBeTruthy();
  }));
});
