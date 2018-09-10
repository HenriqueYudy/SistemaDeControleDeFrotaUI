import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoRastreamentoHeaderComponent } from './servico-rastreamento-header.component';

describe('ServicoRastreamentoHeaderComponent', () => {
  let component: ServicoRastreamentoHeaderComponent;
  let fixture: ComponentFixture<ServicoRastreamentoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoRastreamentoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoRastreamentoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
