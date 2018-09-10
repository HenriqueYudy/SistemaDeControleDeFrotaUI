import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoVeiculoTableComponent } from './emprego-veiculo-table.component';

describe('EmpregoVeiculoTableComponent', () => {
  let component: EmpregoVeiculoTableComponent;
  let fixture: ComponentFixture<EmpregoVeiculoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoVeiculoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoVeiculoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
