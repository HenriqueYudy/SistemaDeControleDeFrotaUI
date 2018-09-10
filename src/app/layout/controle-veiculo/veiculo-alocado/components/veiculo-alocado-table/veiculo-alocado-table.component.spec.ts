import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlocadoTableComponent } from './veiculo-alocado-table.component';

describe('VeiculoAlocadoTableComponent', () => {
  let component: VeiculoAlocadoTableComponent;
  let fixture: ComponentFixture<VeiculoAlocadoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAlocadoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlocadoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
