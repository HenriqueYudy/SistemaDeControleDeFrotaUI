import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlocadoSearchComponent } from './veiculo-alocado-search.component';

describe('VeiculoAlocadoSearchComponent', () => {
  let component: VeiculoAlocadoSearchComponent;
  let fixture: ComponentFixture<VeiculoAlocadoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAlocadoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlocadoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
