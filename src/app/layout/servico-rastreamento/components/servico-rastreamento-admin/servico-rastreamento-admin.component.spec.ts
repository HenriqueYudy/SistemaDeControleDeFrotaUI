import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoRastreamentoAdminComponent } from './servico-rastreamento-admin.component';

describe('ServicoRastreamentoAdminComponent', () => {
  let component: ServicoRastreamentoAdminComponent;
  let fixture: ComponentFixture<ServicoRastreamentoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoRastreamentoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoRastreamentoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
