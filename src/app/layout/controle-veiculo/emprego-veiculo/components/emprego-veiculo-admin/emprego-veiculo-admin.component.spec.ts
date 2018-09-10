import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoVeiculoAdminComponent } from './emprego-veiculo-admin.component';

describe('EmpregoVeiculoAdminComponent', () => {
  let component: EmpregoVeiculoAdminComponent;
  let fixture: ComponentFixture<EmpregoVeiculoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoVeiculoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoVeiculoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
