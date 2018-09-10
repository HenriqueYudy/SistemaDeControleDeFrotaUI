import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlocadoHeaderComponent } from './veiculo-alocado-header.component';

describe('VeiculoAlocadoHeaderComponent', () => {
  let component: VeiculoAlocadoHeaderComponent;
  let fixture: ComponentFixture<VeiculoAlocadoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAlocadoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlocadoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
