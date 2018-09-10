import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAdminComponent } from './veiculo-admin.component';

describe('VeiculoAdminComponent', () => {
  let component: VeiculoAdminComponent;
  let fixture: ComponentFixture<VeiculoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
