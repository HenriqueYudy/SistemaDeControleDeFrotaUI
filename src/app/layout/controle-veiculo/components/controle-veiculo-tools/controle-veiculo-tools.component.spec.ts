import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVeiculoToolsComponent } from './controle-veiculo-tools.component';

describe('ControleVeiculoToolsComponent', () => {
  let component: ControleVeiculoToolsComponent;
  let fixture: ComponentFixture<ControleVeiculoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleVeiculoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVeiculoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
