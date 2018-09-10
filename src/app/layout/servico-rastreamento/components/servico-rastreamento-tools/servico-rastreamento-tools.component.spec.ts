import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoRastreamentoToolsComponent } from './servico-rastreamento-tools.component';

describe('ServicoRastreamentoToolsComponent', () => {
  let component: ServicoRastreamentoToolsComponent;
  let fixture: ComponentFixture<ServicoRastreamentoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoRastreamentoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoRastreamentoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
