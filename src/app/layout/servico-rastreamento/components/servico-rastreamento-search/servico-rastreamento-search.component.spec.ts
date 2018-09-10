import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoRastreamentoSearchComponent } from './servico-rastreamento-search.component';

describe('ServicoRastreamentoSearchComponent', () => {
  let component: ServicoRastreamentoSearchComponent;
  let fixture: ComponentFixture<ServicoRastreamentoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoRastreamentoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoRastreamentoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
