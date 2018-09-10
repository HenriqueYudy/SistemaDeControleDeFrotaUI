import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaAdminComponent } from './marca-admin.component';

describe('MarcaAdminComponent', () => {
  let component: MarcaAdminComponent;
  let fixture: ComponentFixture<MarcaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
