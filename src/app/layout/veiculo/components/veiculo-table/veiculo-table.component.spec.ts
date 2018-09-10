import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoTableComponent } from './veiculo-table.component';

describe('VeiculoTableComponent', () => {
  let component: VeiculoTableComponent;
  let fixture: ComponentFixture<VeiculoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
