import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreadorAdminComponent } from './rastreador-admin.component';

describe('RastreadorAdminComponent', () => {
  let component: RastreadorAdminComponent;
  let fixture: ComponentFixture<RastreadorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreadorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
