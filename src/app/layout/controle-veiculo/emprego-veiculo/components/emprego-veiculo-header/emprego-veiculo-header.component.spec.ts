import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoVeiculoHeaderComponent } from './emprego-veiculo-header.component';

describe('EmpregoVeiculoHeaderComponent', () => {
  let component: EmpregoVeiculoHeaderComponent;
  let fixture: ComponentFixture<EmpregoVeiculoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoVeiculoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoVeiculoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
