import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoRastreamentoComponent } from './servico-rastreamento.component';

describe('ServicoRastreamentoComponent', () => {
  let component: ServicoRastreamentoComponent;
  let fixture: ComponentFixture<ServicoRastreamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoRastreamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoRastreamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
