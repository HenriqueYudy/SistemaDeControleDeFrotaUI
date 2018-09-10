import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoAdminComponent } from './permissao-admin.component';

describe('PermissaoAdminComponent', () => {
  let component: PermissaoAdminComponent;
  let fixture: ComponentFixture<PermissaoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
