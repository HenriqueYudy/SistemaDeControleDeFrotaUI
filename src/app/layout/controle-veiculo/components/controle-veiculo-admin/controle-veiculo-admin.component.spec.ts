import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVeiculoAdminComponent } from './controle-veiculo-admin.component';

describe('ControleVeiculoAdminComponent', () => {
  let component: ControleVeiculoAdminComponent;
  let fixture: ComponentFixture<ControleVeiculoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleVeiculoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVeiculoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
