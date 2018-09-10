import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoVeiculoSearchComponent } from './emprego-veiculo-search.component';

describe('EmpregoVeiculoSearchComponent', () => {
  let component: EmpregoVeiculoSearchComponent;
  let fixture: ComponentFixture<EmpregoVeiculoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoVeiculoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoVeiculoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
