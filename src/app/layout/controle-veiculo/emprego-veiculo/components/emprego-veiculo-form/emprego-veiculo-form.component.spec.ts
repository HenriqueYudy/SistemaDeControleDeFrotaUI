import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoVeiculoFormComponent } from './emprego-veiculo-form.component';

describe('EmpregoVeiculoFormComponent', () => {
  let component: EmpregoVeiculoFormComponent;
  let fixture: ComponentFixture<EmpregoVeiculoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoVeiculoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoVeiculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
