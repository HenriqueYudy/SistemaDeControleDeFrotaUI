import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoRastreamentoTableComponent } from './servico-rastreamento-table.component';

describe('ServicoRastreamentoTableComponent', () => {
  let component: ServicoRastreamentoTableComponent;
  let fixture: ComponentFixture<ServicoRastreamentoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoRastreamentoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoRastreamentoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
