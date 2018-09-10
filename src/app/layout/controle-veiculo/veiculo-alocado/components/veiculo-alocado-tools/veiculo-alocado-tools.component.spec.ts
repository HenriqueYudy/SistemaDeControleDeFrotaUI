import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlocadoToolsComponent } from './veiculo-alocado-tools.component';

describe('VeiculoAlocadoToolsComponent', () => {
  let component: VeiculoAlocadoToolsComponent;
  let fixture: ComponentFixture<VeiculoAlocadoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAlocadoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlocadoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
