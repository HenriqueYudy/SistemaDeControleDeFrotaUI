import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlocadoFormComponent } from './veiculo-alocado-form.component';

describe('VeiculoAlocadoFormComponent', () => {
  let component: VeiculoAlocadoFormComponent;
  let fixture: ComponentFixture<VeiculoAlocadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAlocadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlocadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
