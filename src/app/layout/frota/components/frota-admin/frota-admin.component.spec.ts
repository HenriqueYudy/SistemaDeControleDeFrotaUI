import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaAdminComponent } from './frota-admin.component';

describe('FrotaAdminComponent', () => {
  let component: FrotaAdminComponent;
  let fixture: ComponentFixture<FrotaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrotaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
