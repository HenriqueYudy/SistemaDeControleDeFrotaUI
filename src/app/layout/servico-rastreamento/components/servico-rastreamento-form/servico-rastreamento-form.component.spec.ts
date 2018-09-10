import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoRastreamentoFormComponent } from './servico-rastreamento-form.component';

describe('ServicoRastreamentoFormComponent', () => {
  let component: ServicoRastreamentoFormComponent;
  let fixture: ComponentFixture<ServicoRastreamentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoRastreamentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoRastreamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
