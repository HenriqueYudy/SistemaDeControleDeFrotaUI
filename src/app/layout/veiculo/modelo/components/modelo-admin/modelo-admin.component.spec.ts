import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloAdminComponent } from './modelo-admin.component';

describe('ModeloAdminComponent', () => {
  let component: ModeloAdminComponent;
  let fixture: ComponentFixture<ModeloAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
