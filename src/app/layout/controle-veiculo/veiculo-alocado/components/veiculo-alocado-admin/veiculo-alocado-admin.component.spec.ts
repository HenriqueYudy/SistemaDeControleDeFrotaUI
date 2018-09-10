import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlocadoAdminComponent } from './veiculo-alocado-admin.component';

describe('VeiculoAlocadoAdminComponent', () => {
  let component: VeiculoAlocadoAdminComponent;
  let fixture: ComponentFixture<VeiculoAlocadoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAlocadoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlocadoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
