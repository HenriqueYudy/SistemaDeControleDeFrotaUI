import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoVeiculoComponent } from './emprego-veiculo.component';

describe('EmpregoVeiculoComponent', () => {
  let component: EmpregoVeiculoComponent;
  let fixture: ComponentFixture<EmpregoVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
