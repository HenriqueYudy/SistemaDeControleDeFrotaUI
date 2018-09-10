import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorResponsavelAdminComponent } from './condutor-responsavel-admin.component';

describe('CondutorResponsavelAdminComponent', () => {
  let component: CondutorResponsavelAdminComponent;
  let fixture: ComponentFixture<CondutorResponsavelAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorResponsavelAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorResponsavelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
