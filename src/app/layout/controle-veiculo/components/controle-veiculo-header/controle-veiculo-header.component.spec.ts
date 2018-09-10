import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVeiculoHeaderComponent } from './controle-veiculo-header.component';

describe('ControleVeiculoHeaderComponent', () => {
  let component: ControleVeiculoHeaderComponent;
  let fixture: ComponentFixture<ControleVeiculoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleVeiculoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVeiculoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
