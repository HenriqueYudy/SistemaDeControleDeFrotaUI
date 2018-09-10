import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVeiculoComponent } from './controle-veiculo.component';

describe('ControleVeiculoComponent', () => {
  let component: ControleVeiculoComponent;
  let fixture: ComponentFixture<ControleVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
