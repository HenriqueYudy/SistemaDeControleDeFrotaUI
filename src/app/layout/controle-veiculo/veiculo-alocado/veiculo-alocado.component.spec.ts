import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlocadoComponent } from './veiculo-alocado.component';

describe('VeiculoAlocadoComponent', () => {
  let component: VeiculoAlocadoComponent;
  let fixture: ComponentFixture<VeiculoAlocadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAlocadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlocadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
