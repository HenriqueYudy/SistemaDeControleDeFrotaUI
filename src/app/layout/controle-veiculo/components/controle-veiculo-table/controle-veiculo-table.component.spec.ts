import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVeiculoTableComponent } from './controle-veiculo-table.component';

describe('ControleVeiculoTableComponent', () => {
  let component: ControleVeiculoTableComponent;
  let fixture: ComponentFixture<ControleVeiculoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleVeiculoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVeiculoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
