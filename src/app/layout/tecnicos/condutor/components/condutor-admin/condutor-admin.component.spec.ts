import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorAdminComponent } from './condutor-admin.component';

describe('CondutorAdminComponent', () => {
  let component: CondutorAdminComponent;
  let fixture: ComponentFixture<CondutorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
