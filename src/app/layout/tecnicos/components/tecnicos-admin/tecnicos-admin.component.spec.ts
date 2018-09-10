import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosAdminComponent } from './tecnicos-admin.component';

describe('TecnicosAdminComponent', () => {
  let component: TecnicosAdminComponent;
  let fixture: ComponentFixture<TecnicosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
