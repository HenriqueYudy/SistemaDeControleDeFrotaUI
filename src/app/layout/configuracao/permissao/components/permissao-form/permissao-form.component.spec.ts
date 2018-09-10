import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoFormComponent } from './permissao-form.component';

describe('PermissaoFormComponent', () => {
  let component: PermissaoFormComponent;
  let fixture: ComponentFixture<PermissaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
