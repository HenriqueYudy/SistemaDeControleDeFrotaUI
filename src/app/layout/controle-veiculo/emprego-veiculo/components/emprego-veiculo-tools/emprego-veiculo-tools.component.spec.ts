import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoVeiculoToolsComponent } from './emprego-veiculo-tools.component';

describe('EmpregoVeiculoToolsComponent', () => {
  let component: EmpregoVeiculoToolsComponent;
  let fixture: ComponentFixture<EmpregoVeiculoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoVeiculoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoVeiculoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
